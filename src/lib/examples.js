// Example messages keyed by category. Template can override via template.examples override later.
// Pool of 3-4 per category; we pick one at random via `getExample(category)`.
const EXAMPLES = {
  love: [
    "You're the reason I believe in forever. Thank you for every little moment — the quiet ones, the silly ones, all of them.",
    "Every day with you feels like a gift I don't deserve but want to keep unwrapping.",
    "You make ordinary days feel like the best parts of my life. I love you.",
  ],
  "valentines-week": [
    "Roses remind me of you, chocolates remind me of you, honestly — everything reminds me of you. Happy Rose Day ❤️",
    "Loving you is easy. It's the not being near you that's hard. Be mine this week and every week after.",
    "If I had to pick between chocolate and you, I'd pick you. (But chocolate would be a close second.)",
  ],
  birthday: [
    "Another trip around the sun, another year of getting even better. Wishing you more laughter, less stress, and plenty of cake. 🎂",
    "Happy birthday to the one who makes every room warmer. Here's to you and everything you make possible.",
    "May this year bring you all the things you've been quietly hoping for.",
  ],
  friendship: [
    "Thank you for being the friend who shows up, even when I don't ask. You're rare and I appreciate you more than I say.",
    "You make the hardest days lighter and the good days louder. Don't know what I'd do without you.",
    "Friends come and go. You stayed. That means everything.",
  ],
  festival: [
    "Wishing you a festival full of light, warmth, and all the good things you deserve.",
    "May your home be blessed, your plate full, and your heart light. Happy festival! 🪔",
    "Sending love and good wishes your way on this special day.",
  ],
  everyday: [
    "Just a little note to say — I'm thinking of you. Hope your day is as lovely as you are.",
    "Nothing special, just wanted you to smile for a second. You deserve it.",
    "A good morning / good night / good anything from me to you. ✨",
  ],
  thanks: [
    "I don't say it often enough — thank you. For showing up, for listening, for just being you.",
    "You did something small that meant something big to me. Thank you for being so generous with your time.",
    "Gratitude doesn't always find the right words. Let me try: thank you, truly.",
  ],
  miss: [
    "The distance doesn't change what you mean to me. I think about you more than you know.",
    "Miss you. That's it. That's the whole message. 💭",
    "Counting days until I see you again. Until then, this card will have to do.",
  ],
  sorry: [
    "I was wrong, and I'm sorry. You deserve better, and I'll do better.",
    "Sorry for what I said and didn't say. I hope there's still room to make it right.",
    "No excuses — just an apology. I'm sorry.",
  ],
};

export const getExample = (category) => {
  const pool = EXAMPLES[category] || EXAMPLES.everyday;
  return pool[Math.floor(Math.random() * pool.length)];
};
