"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { FaCircleHalfStroke } from "react-icons/fa6"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange {...props}>
      {children}
    </NextThemesProvider>
  )
}

export function ThemeSwitch() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  // Prevent hydration mismatch by mounting after initial render
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <FaCircleHalfStroke className="h-[14px] w-[14px] text-[#1c1c1c] dark:text-[#D4D4D4]" aria-hidden="true" />
  }

  return (
    <button
      id="theme-toggle"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center justify-center transition-opacity duration-300 hover:opacity-90"
    >
      <FaCircleHalfStroke
        className="h-[14px] w-[14px] text-[#1c1c1c] dark:text-[#D4D4D4]"
        aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      />
    </button>
  )
}