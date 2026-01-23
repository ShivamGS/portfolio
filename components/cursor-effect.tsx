"use client"

import { useEffect, useRef, useState } from "react"

export function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const [isInsideCircle, setIsInsideCircle] = useState(true)
  const [enabled, setEnabled] = useState(true)

  const mouse = useRef({ x: 0, y: 0 })
  const delayedMouse = useRef({ x: 0, y: 0 })
  const rafId = useRef<number>()

  useEffect(() => {
    // ✅ Disable on touch devices (most phones/tablets)
    const isTouch =
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(hover: none)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0)

    if (isTouch) {
      setEnabled(false)
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }

    const lerp = (start: number, end: number, factor: number) => (1 - factor) * start + factor * end

    const calculateDistance = (x1: number, y1: number, x2: number, y2: number) =>
      Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

    const animate = () => {
      const delay = 0.15
      delayedMouse.current = {
        x: lerp(delayedMouse.current.x, mouse.current.x, delay),
        y: lerp(delayedMouse.current.y, mouse.current.y, delay),
      }

      const distance = calculateDistance(
        mouse.current.x,
        mouse.current.y,
        delayedMouse.current.x,
        delayedMouse.current.y
      )

      const circleRadius = 12
      const newIsInsideCircle = distance <= circleRadius
      if (newIsInsideCircle !== isInsideCircle) setIsInsideCircle(newIsInsideCircle)

      if (cursorRef.current) {
        cursorRef.current.style.left = `${delayedMouse.current.x}px`
        cursorRef.current.style.top = `${delayedMouse.current.y}px`
      }

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${mouse.current.x}px`
        cursorDotRef.current.style.top = `${mouse.current.y}px`
      }

      rafId.current = requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [isInsideCircle])

  if (!enabled) return null

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] w-6 h-6 rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s ease, height 0.3s ease",
          backgroundColor: "#ffffff",
          border: "2px solid #ffffff",
          boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.2)",
        }}
      />
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[10000] w-2 h-2 rounded-full transition-colors duration-200"
        style={{
          transform: "translate(-50%, -50%)",
          backgroundColor: isInsideCircle ? "#000000" : "#ffffff",
        }}
      />
    </>
  )
}
