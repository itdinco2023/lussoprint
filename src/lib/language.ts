"use client";

import { useSyncExternalStore } from "react";

export type Language = "ro" | "en";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): Language {
  return (document.documentElement.getAttribute("data-lang") as Language) || "ro";
}

function getServerSnapshot(): Language {
  return "ro";
}

export function setLanguage(next: Language) {
  document.documentElement.setAttribute("data-lang", next);
  localStorage.setItem("lang", next);
  listeners.forEach((listener) => listener());
}

export function useLanguage(): Language {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
