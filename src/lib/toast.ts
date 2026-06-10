let addToastFn: ((text: string) => void) | null = null;

export function registerToastHandler(fn: (text: string) => void) {
  addToastFn = fn;
}

export function unregisterToastHandler() {
  addToastFn = null;
}

export function showComingSoon(label: string) {
  addToastFn?.(`${label} is coming soon.`);
}
