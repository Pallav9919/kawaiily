// Example messages keyed by category → language.
// Always has `en`. Regional entries are best-effort translations; please polish with a native speaker.

const EXAMPLES = {
  love: {
    en: [
      "You're the reason I believe in forever. Thank you for every little moment — the quiet ones, the silly ones, all of them.",
      "Every day with you feels like a gift I don't deserve but want to keep unwrapping.",
      "You make ordinary days feel like the best parts of my life. I love you.",
    ],
    hi: [
      "तुम्हारे बिना दिन अधूरा लगता है। तुम मेरी हर खुशी की वजह हो। ❤️",
      "तुम्हारा साथ ही मेरी सबसे बड़ी दौलत है। आज, कल, और हमेशा।",
      "तुमसे मिली ज़िन्दगी हर दिन एक नई कहानी लगती है। तुम्हें बहुत प्यार।",
    ],
    mr: [
      "तू माझ्या आयुष्याचा सर्वात सुंदर भाग आहेस. तुझ्याशिवाय सगळं अधुरं वाटतं.",
      "तुझ्यासोबतचा प्रत्येक क्षण माझ्यासाठी अमूल्य आहे. प्रेम कायम आहे.",
    ],
    ta: [
      "நீ இல்லாமல் என் உலகம் முழுமையற்றது. உன்னை எப்போதும் நேசிக்கிறேன்.",
      "உன்னோடு கழிக்கும் ஒவ்வொரு நொடியும் எனக்கு விலைமதிப்பற்றது.",
    ],
    te: [
      "నువ్వు లేకపోతే నా జీవితం అసంపూర్ణం. నిన్ను ఎప్పటికీ ప్రేమిస్తాను.",
      "నీతో గడిపే ప్రతి క్షణం నాకు అమూల్యం.",
    ],
    kn: [
      "ನೀನಿಲ್ಲದೆ ನನ್ನ ಜೀವನ ಅಪೂರ್ಣ. ನಿನ್ನನ್ನು ಎಂದೆಂದಿಗೂ ಪ್ರೀತಿಸುತ್ತೇನೆ.",
      "ನಿನ್ನೊಂದಿಗೆ ಕಳೆಯುವ ಪ್ರತಿ ಕ್ಷಣವೂ ಅಮೂಲ್ಯ.",
    ],
    bn: [
      "তুমি ছাড়া আমার জীবন অসম্পূর্ণ। তোমায় সারাজীবন ভালোবাসবো।",
      "তোমার সাথে কাটানো প্রতিটি মুহূর্ত আমার কাছে মূল্যবান।",
    ],
    gu: [
      "તારા વગર મારું જીવન અધૂરું છે. હું તને હંમેશા પ્રેમ કરીશ.",
      "તારી સાથેની દરેક ક્ષણ મારા માટે અમૂલ્ય છે.",
    ],
    pa: [
      "ਤੇਰੇ ਬਿਨਾ ਮੇਰੀ ਜ਼ਿੰਦਗੀ ਅਧੂਰੀ ਹੈ। ਮੈਂ ਤੈਨੂੰ ਹਮੇਸ਼ਾ ਪਿਆਰ ਕਰਾਂਗਾ।",
      "ਤੇਰੇ ਨਾਲ ਬਿਤਾਇਆ ਹਰ ਪਲ ਅਨਮੋਲ ਹੈ।",
    ],
  },

  "valentines-week": {
    en: [
      "Roses remind me of you, chocolates remind me of you, honestly — everything reminds me of you. Happy Rose Day ❤️",
      "Loving you is easy. It's the not being near you that's hard. Be mine this week and every week after.",
      "If I had to pick between chocolate and you, I'd pick you. (But chocolate would be a close second.)",
    ],
    hi: [
      "तुम्हारे बिना हर दिन फीका लगता है। वैलेंटाइन वीक की बधाई, मेरी जान।",
      "गुलाब, चॉकलेट, टेडी — सब तुम्हारी याद दिलाते हैं। I ❤️ you.",
    ],
  },

  birthday: {
    en: [
      "Another trip around the sun, another year of getting even better. Wishing you more laughter, less stress, and plenty of cake. 🎂",
      "Happy birthday to the one who makes every room warmer. Here's to you and everything you make possible.",
      "May this year bring you all the things you've been quietly hoping for.",
    ],
    hi: [
      "जन्मदिन मुबारक! यह साल तुम्हारे लिए ढेर सारी ख़ुशियाँ लेकर आए। 🎉",
      "तुम्हारा हर सपना सच हो, यही दुआ है। जन्मदिन की हार्दिक शुभकामनाएँ।",
    ],
    mr: [
      "वाढदिवसाच्या हार्दिक शुभेच्छा! हे वर्ष तुझ्यासाठी सुखाचं आणि यशाचं जावो.",
    ],
    ta: [
      "பிறந்தநாள் வாழ்த்துக்கள்! இந்த வருடம் உங்களுக்கு எல்லா நல்லதையும் கொடுக்கட்டும்.",
    ],
    te: ["పుట్టినరోజు శుభాకాంక్షలు! ఈ ఏడాది నీకు ఎంతో ఆనందాన్ని తీసుకురావాలి."],
    kn: ["ಹುಟ್ಟುಹಬ್ಬದ ಶುಭಾಶಯಗಳು! ಈ ವರ್ಷ ನಿಮಗೆ ಸಂತೋಷ ತರಲಿ."],
    bn: ["শুভ জন্মদিন! এই বছর তোমার জন্য সুখ ও সাফল্যে ভরা হোক।"],
    gu: ["જન્મદિવસની ખૂબ ખૂબ શુભેચ્છાઓ! આ વર્ષ તને ખુશીઓથી ભરેલું જાય."],
    pa: ["ਜਨਮਦਿਨ ਮੁਬਾਰਕ! ਇਹ ਸਾਲ ਤੇਰੇ ਲਈ ਬਹੁਤ ਖੁਸ਼ੀਆਂ ਲੈ ਕੇ ਆਏ।"],
  },

  friendship: {
    en: [
      "Thank you for being the friend who shows up, even when I don't ask. You're rare and I appreciate you more than I say.",
      "You make the hardest days lighter and the good days louder. Don't know what I'd do without you.",
      "Friends come and go. You stayed. That means everything.",
    ],
    hi: [
      "तू है तो सब कुछ अच्छा लगता है। तेरी दोस्ती मेरे लिए किस्मत है, यार।",
      "दुःख में भी और ख़ुशी में भी — तू हमेशा वहीं होता है। शुक्रिया दोस्त।",
    ],
  },

  festival: {
    en: [
      "Wishing you a festival full of light, warmth, and all the good things you deserve.",
      "May your home be blessed, your plate full, and your heart light. Happy festival! 🪔",
      "Sending love and good wishes your way on this special day.",
    ],
    hi: [
      "त्योहार की ढेर सारी शुभकामनाएँ! आपका जीवन रोशनी और ख़ुशियों से भरा रहे।",
      "इस पर्व पर आपके घर में सुख, समृद्धि और प्रेम का वास हो।",
    ],
  },

  everyday: {
    en: [
      "Just a little note to say — I'm thinking of you. Hope your day is as lovely as you are.",
      "Nothing special, just wanted you to smile for a second. You deserve it.",
      "A good morning / good night / good anything from me to you. ✨",
    ],
    hi: [
      "बस ये बताने के लिए कि तुम मेरी सोच में हो। तुम्हारा दिन बढ़िया गुज़रे। 🌸",
      "कुछ ख़ास बात नहीं, बस तुम्हें मुस्कुराने की एक वजह दे रहा/रही हूँ।",
    ],
  },

  thanks: {
    en: [
      "I don't say it often enough — thank you. For showing up, for listening, for just being you.",
      "You did something small that meant something big to me. Thank you for being so generous with your time.",
      "Gratitude doesn't always find the right words. Let me try: thank you, truly.",
    ],
    hi: [
      "शुक्रिया! आपने जो किया, वो मेरे लिए बहुत ख़ास है। दिल से धन्यवाद।",
      "कभी-कभी शब्द कम पड़ जाते हैं। बस इतना कहूँगा/कहूँगी — शुक्रिया, सच में।",
    ],
    ta: ["உங்கள் அன்புக்கு நன்றி. நீங்கள் செய்தது என் மனதில் எப்போதும் இருக்கும்."],
  },

  miss: {
    en: [
      "The distance doesn't change what you mean to me. I think about you more than you know.",
      "Miss you. That's it. That's the whole message. 💭",
      "Counting days until I see you again. Until then, this card will have to do.",
    ],
    hi: [
      "तुम्हारी याद हर दिन आती है। दूरी बढ़ी है, मगर प्यार उतना ही है।",
      "बस तुम्हें बताना था — तुम्हारी बहुत याद आती है।",
    ],
  },

  sorry: {
    en: [
      "I was wrong, and I'm sorry. You deserve better, and I'll do better.",
      "Sorry for what I said and didn't say. I hope there's still room to make it right.",
      "No excuses — just an apology. I'm sorry.",
    ],
    hi: [
      "माफ़ कर दो। मुझे पता है मैं ग़लत था/थी। दिल से माफ़ी माँगता/माँगती हूँ।",
      "शब्दों से ज़्यादा कुछ नहीं कह सकता/सकती। बस माफ़ी और प्यार।",
    ],
  },
};

export const getExample = (category, lang = "en") => {
  const categoryPool = EXAMPLES[category] || EXAMPLES.everyday;
  const langPool = categoryPool[lang] || categoryPool.en || EXAMPLES.everyday.en;
  return langPool[Math.floor(Math.random() * langPool.length)];
};
