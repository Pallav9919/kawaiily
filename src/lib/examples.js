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
      "तू माझ्या आयुष्याचा सर्वात सुंदर भाग आहेस. तुझ्याशिवाय काहीच पूर्ण वाटत नाही. तुझ्यावर मनापासून प्रेम.",
      "तुझं हसणं, तुझं बोलणं, तू जवळ असणं — हे सगळं मला आवडतं. प्रेम आहे आणि कायम राहील.",
      "तुझ्यासोबतचा प्रत्येक क्षण जणू माझं सर्वात मौल्यवान धन आहे.",
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
      "তুমি আমার জীবনের সবচেয়ে সুন্দর অধ্যায়। তোমায় ভালোবাসি, আজ এবং চিরদিন।",
      "তোমার হাসি, তোমার স্পর্শ, তোমার সঙ্গ — সব আমার কাছে অমূল্য।",
      "তোমাকে ছাড়া আমার জীবন অসম্পূর্ণ। তোমায় চিরদিন ভালোবাসবো।",
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
    mr: [
      "गुलाबाच्या फुलाइतकंच तुझं प्रेम नाजूक आणि सुंदर आहे. हॅपी रोझ डे!",
      "तू माझी/माझा होशील का? हा प्रश्न आजही तितकाच खरा आहे.",
      "आज चॉकलेट देऊन गोडवा वाढवूया — हॅपी चॉकलेट डे!",
    ],
    bn: [
      "গোলাপের মতোই তোমার ভালোবাসা নরম, সুন্দর। শুভ রোজ ডে!",
      "তুমি কি আমার হবে? প্রশ্নটা আজও সমান সত্য।",
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
      "वाढदिवसाच्या हार्दिक शुभेच्छा! हे वर्ष तुझ्यासाठी आनंदाचं, यशाचं आणि आरोग्यदायी जावो. 🎂",
      "तुझ्या वाढदिवशी देवाला एकच प्रार्थना — तुझं हसू असंच कायम राहो.",
      "आणखी एक वर्ष तुझ्यासोबत — आणखी हजार आठवणी. शुभेच्छा!",
    ],
    ta: [
      "பிறந்தநாள் வாழ்த்துக்கள்! இந்த வருடம் உங்களுக்கு எல்லா நல்லதையும் கொடுக்கட்டும்.",
    ],
    te: ["పుట్టినరోజు శుభాకాంక్షలు! ఈ ఏడాది నీకు ఎంతో ఆనందాన్ని తీసుకురావాలి."],
    kn: ["ಹುಟ್ಟುಹಬ್ಬದ ಶುಭಾಶಯಗಳು! ಈ ವರ್ಷ ನಿಮಗೆ ಸಂತೋಷ ತರಲಿ."],
    bn: [
      "শুভ জন্মদিন! এই বছর তোমার জীবন সুখ, সাফল্য আর ভালোবাসায় ভরে উঠুক। 🎂",
      "তোমার প্রতিটি দিন হোক উৎসবের মতো। শুভ জন্মদিন!",
      "আরো একটা বছর তোমার সাথে — আরো হাজার স্মৃতি। শুভেচ্ছা!",
    ],
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
    mr: [
      "तू माझा खरा मित्र/माझी खरी मैत्रीण आहेस. अडचणीतही तू सोबत असतोस/असतेस, त्याबद्दल मनापासून आभार.",
      "काही मैत्री शब्दांत मांडता येत नाहीत. आपली त्यातलीच एक.",
      "तुझ्यासारखा मित्र/मैत्रीण मिळणं म्हणजे नशीब. धन्यवाद दोस्ता!",
    ],
    bn: [
      "তুমি আমার সত্যিকারের বন্ধু। কঠিন সময়েও পাশে থাকো, তোমার জন্য কৃতজ্ঞ।",
      "কিছু বন্ধুত্ব কথায় বোঝানো যায় না। আমাদেরটাও তেমনই।",
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
    mr: [
      "गुढीपाडव्याच्या हार्दिक शुभेच्छा! नवीन वर्ष तुम्हाला सुख, समृद्धी आणि आरोग्य देवो.",
      "गणपती बाप्पा मोरया! बाप्पाच्या आशीर्वादाने सगळं चांगलं होवो.",
      "दिवाळीच्या प्रकाशाप्रमाणे तुझं आयुष्य उजळून निघो. शुभ दीपावली!",
    ],
    bn: [
      "শুভ দুর্গা পূজা! মা দুর্গা তোমায় ও তোমার পরিবারকে আশীর্বাদ দিন।",
      "শুভ নববর্ষ! নতুন বছর তোমায় নতুন আশা নিয়ে আসুক।",
      "দীপাবলির আলোয় উজ্জ্বল হোক তোমার জীবন।",
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
    mr: [
      "शुभ सकाळ! आजचा दिवस तुझ्यासारखाच सुंदर जावो. ☀️",
      "शुभ रात्री! गोड स्वप्न पडू देत.",
      "फक्त सांगायचं होतं — आज तुझी आठवण आली. हसून दिवस जावो!",
    ],
    bn: [
      "শুভ সকাল! তোমার দিনটা যেন তোমার মতোই সুন্দর হয়। ☀️",
      "শুভ রাত্রি! মিষ্টি স্বপ্ন দেখো।",
      "শুধু বলতে চাইলাম — তোমার কথা মনে পড়ল আজ।",
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
    mr: [
      "तुझ्या मदतीसाठी मनापासून आभार. मी कधीच विसरणार नाही.",
      "धन्यवाद! तू केलेलं लहानसं काम माझ्यासाठी खूप मोठं आहे.",
    ],
    ta: ["உங்கள் அன்புக்கு நன்றி. நீங்கள் செய்தது என் மனதில் எப்போதும் இருக்கும்."],
    bn: [
      "তোমার সাহায্যের জন্য অনেক ধন্যবাদ। ভুলব না।",
      "তুমি যা করেছ, সেটা ছোট নয়। তোমায় ধন্যবাদ।",
    ],
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
    mr: [
      "तुझी खूप आठवण येते. लवकर भेटू या!",
      "अंतर वाढलं, पण प्रेम तितकंच आहे. तू सारखा/सारखी आठवतोस/आठवतेस.",
    ],
    bn: [
      "তোমাকে অনেক মিস করি। তাড়াতাড়ি দেখা হোক।",
      "দূরত্ব বেড়েছে, ভালোবাসা একটুও কমেনি।",
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
    mr: [
      "माफ कर. मी चुकलो/चुकले. पुन्हा असं होणार नाही.",
      "क्षमा असावी. तुझ्या भावना मला कळतात.",
    ],
    bn: [
      "আমাকে ক্ষমা করো। আমি ভুল করেছি।",
      "দুঃখিত। তোমার মন খারাপ করে দিয়েছি।",
    ],
  },
};

export const getExample = (category, lang = "en") => {
  const categoryPool = EXAMPLES[category] || EXAMPLES.everyday;
  const langPool = categoryPool[lang] || categoryPool.en || EXAMPLES.everyday.en;
  return langPool[Math.floor(Math.random() * langPool.length)];
};
