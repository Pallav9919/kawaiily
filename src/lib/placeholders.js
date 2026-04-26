// Rotating evocative prompts for the message textarea.
export const MESSAGE_PLACEHOLDERS = [
  "Write something from the heart…",
  "Say what you usually don't say…",
  "Pour your feelings out here ✨",
  "A memory, a promise, a wish…",
  "Tell them what they mean to you…",
  "Three words, three lines, three pages — whatever feels right.",
];

export const pickPlaceholder = () =>
  MESSAGE_PLACEHOLDERS[Math.floor(Math.random() * MESSAGE_PLACEHOLDERS.length)];
