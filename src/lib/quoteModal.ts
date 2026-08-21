"use client";

import { useSyncExternalStore } from "react";

const listeners = new Set<() => void>();
let isOpen = false;

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): boolean {
  return isOpen;
}

function getServerSnapshot(): boolean {
  return false;
}

export function openQuoteModal() {
  isOpen = true;
  listeners.forEach((listener) => listener());
}

export function closeQuoteModal() {
  isOpen = false;
  listeners.forEach((listener) => listener());
}

export function useQuoteModalOpen(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
