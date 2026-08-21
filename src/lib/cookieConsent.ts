"use client";

import { useSyncExternalStore } from "react";

export type CookieConsent = "accepted" | "necessary-only";

const STORAGE_KEY = "cookie-consent";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): CookieConsent | null {
  const value = document.documentElement.getAttribute("data-cookie-consent");
  return value === "accepted" || value === "necessary-only" ? value : null;
}

function getServerSnapshot(): CookieConsent | null {
  return null;
}

export function setCookieConsent(value: CookieConsent) {
  document.documentElement.setAttribute("data-cookie-consent", value);
  localStorage.setItem(STORAGE_KEY, value);
  listeners.forEach((listener) => listener());
}

export function useCookieConsent(): CookieConsent | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
