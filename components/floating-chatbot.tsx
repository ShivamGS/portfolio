"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, X, Send, Smile, Frown, Meh, Briefcase, Loader2 } from "lucide-react";

type Mood = "professional" | "sarcastic" | "grumpy" | "minimalist";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const moodConfig = {
  professional: {
    icon: Briefcase,
    label: "Professional",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
  sarcastic: {
    icon: Smile,
    label: "Sarcastic",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
  },
  grumpy: {
    icon: Frown,
    label: "Grumpy",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
  },
  minimalist: {
    icon: Meh,
    label: "Minimalist",
    color: "text-gray-500",
    bgColor: "bg-gray-500/10",
    borderColor: "border-gray-500/30",
  },
};

// Reduced list (cleaner)
const quickPrompts = [
  "When are you graduating?",
  "Give a 30-second summary of Shivam.",
  "What are Shivam’s top 3 projects?",
  "What tech stack is Shivam strongest in?",
  "Is Shivam available for Summer 2026 roles?",
];

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [mood, setMood] = useState<Mood>("professional");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hey! I'm Shivam's AI assistant. Ask me anything about his experience, projects, or skills! 🚀",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // mobile-only prompt collapse
  const [isMobile, setIsMobile] = useState(false);
  const [showQuickPrompts, setShowQuickPrompts] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)"); // Tailwind sm breakpoint
    const update = () => {
      const mobile = mq.matches;
      setIsMobile(mobile);
      // desktop: show; mobile: collapsed by default
      setShowQuickPrompts(!mobile);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const currentInput = input.trim();
    const userMessage: Message = { role: "user", content: currentInput };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mood,
          messages: [
            ...messages.slice(1).map((m) => ({ role: m.role, content: m.content })),
            { role: "user", content: currentInput },
          ],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("API error:", data);
        throw new Error(data?.error || "API request failed");
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data?.content?.[0]?.text ?? "No response text received.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error calling Claude API:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry — I hit an error. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.button
              onClick={() => setIsOpen(true)}
              className="relative group"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Open chatbot"
            >
              {/* Outer soft pulse ring (slow) */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/40 blur-[1px]"
                animate={{ scale: [1, 1.28, 1], opacity: [0.35, 0, 0.35] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Inner glow halo (breathing) */}
              <motion.div
                className="absolute -inset-3 rounded-full bg-primary/20 blur-xl"
                animate={{ opacity: [0.18, 0.5, 0.18] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Main button (breathing scale + subtle shadow pop) */}
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full shadow-lg shadow-primary/30 flex items-center justify-center"
              >
                {/* Notification ping dot */}
                <span className="absolute -top-1 -right-1">
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-green-500 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>

                {/* Bot wiggle every few seconds */}
                <motion.div
                  animate={{ rotate: [0, -10, 10, -6, 6, 0] }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    repeatDelay: 4.2,
                    ease: "easeInOut",
                  }}
                >
                  <Bot className="w-7 h-7 text-white" />
                </motion.div>
              </motion.div>

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground text-background px-4 py-2 rounded-xl text-sm font-medium shadow-lg pointer-events-none hidden sm:block"
              >
                Chat with Shivam’s AI 🤖
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.98, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: 20 }}
            // mobile: full-ish screen; desktop: bottom-right panel
            className="fixed z-50 inset-3 sm:inset-auto sm:bottom-6 sm:right-6"
            style={{
              width: "min(820px, 92vw)",
              height: "min(82vh, 760px)",
              maxHeight: "calc(100vh - 80px)",
            }}
          >
            <Card className="h-full bg-card/95 backdrop-blur-xl border-border/50 shadow-2xl shadow-primary/10 flex flex-col overflow-hidden rounded-2xl">
              {/* Header */}
              <CardHeader className="border-b border-border/50 flex-shrink-0 px-4 sm:px-5 pt-4 sm:pt-5 pb-3 sm:pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg sm:text-xl">Shivam's AI</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs sm:text-sm text-muted-foreground">Online</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} title="Close">
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Mood Selector */}
                <div className="mt-3">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">Response Style:</p>
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(moodConfig) as Mood[]).map((moodKey) => {
                      const config = moodConfig[moodKey];
                      const MoodIcon = config.icon;
                      return (
                        <Button
                          key={moodKey}
                          variant="outline"
                          size="sm"
                          onClick={() => setMood(moodKey)}
                          className={`text-xs sm:text-sm h-8 sm:h-9 px-3 ${
                            mood === moodKey ? `${config.bgColor} ${config.borderColor} ${config.color}` : ""
                          }`}
                        >
                          <MoodIcon className="w-4 h-4 mr-2" />
                          {config.label}
                        </Button>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Prompts: desktop always visible, mobile toggle */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs sm:text-sm text-muted-foreground">Quick questions:</p>

                    {isMobile && (
                      <button
                        type="button"
                        onClick={() => setShowQuickPrompts((v) => !v)}
                        className="text-xs text-muted-foreground px-2 py-1 rounded-md hover:bg-muted/40 transition"
                      >
                        {showQuickPrompts ? "Hide" : "Show"}
                      </button>
                    )}
                  </div>

                  {(!isMobile || showQuickPrompts) && (
                    <div className="flex flex-wrap gap-2">
                      {quickPrompts.map((p) => (
                        <button
                          key={p}
                          onClick={() => {
                            setInput(p);
                            if (isMobile) setShowQuickPrompts(false); // collapse after pick on mobile
                          }}
                          className="text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full bg-muted/60 hover:bg-muted transition border border-border/50"
                          type="button"
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 sm:py-5 space-y-3 sm:space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[86%] sm:max-w-[78%] rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 ${
                        message.role === "user"
                          ? "bg-gradient-to-br from-primary to-accent text-white"
                          : "bg-muted/50 text-foreground"
                      }`}
                    >
                      <p className="text-[13px] sm:text-[15px] leading-relaxed whitespace-pre-wrap">
                        {message.content}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                    <div className="bg-muted/50 rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3">
                      <Loader2 className="w-5 h-5 animate-spin text-primary" />
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </CardContent>

              {/* Input */}
              <div className="px-4 sm:px-5 py-3 sm:py-4 border-t border-border/50 flex-shrink-0">
                <div className="flex gap-2 sm:gap-3">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    disabled={isLoading}
                    className="flex-1 h-10 sm:h-11 text-[13px] sm:text-[15px] bg-muted/50 border-border/50 focus:border-primary"
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!input.trim() || isLoading}
                    size="icon"
                    className="h-10 w-10 sm:h-11 sm:w-11 bg-gradient-to-br from-primary to-accent hover:opacity-90"
                  >
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  </Button>
                </div>

                <p className="text-[10px] sm:text-xs text-muted-foreground mt-2 text-center">
                  Powered by Claude AI
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
