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
      "நீ இல்லாமல் என் உலகம் முழுமையற்றது. உன்னை எப்போதும் காதலிக்கிறேன்.",
      "உன்னோடு கழிக்கும் ஒவ்வொரு நொடியும் எனக்கு விலைமதிப்பற்றது.",
      "நீ என் வாழ்வின் அழகான பகுதி. உன் புன்னகை தான் என் மகிழ்ச்சி.",
    ],
    te: [
      "నువ్వు లేకపోతే నా జీవితం అసంపూర్ణం. నిన్ను ఎప్పటికీ ప్రేమిస్తాను.",
      "నీతో గడిపే ప్రతి క్షణం నాకు అమూల్యం.",
      "నీవే నా జీవితానికి అర్థం. నిన్ను హృదయపూర్వకంగా ప్రేమిస్తున్నాను.",
    ],
    kn: [
      "ನೀನಿಲ್ಲದೆ ನನ್ನ ಜೀವನ ಅಪೂರ್ಣ. ನಿನ್ನನ್ನು ಎಂದೆಂದಿಗೂ ಪ್ರೀತಿಸುತ್ತೇನೆ.",
      "ನಿನ್ನೊಂದಿಗೆ ಕಳೆಯುವ ಪ್ರತಿ ಕ್ಷಣವೂ ಅಮೂಲ್ಯ.",
      "ನೀನೇ ನನ್ನ ಜೀವನಕ್ಕೆ ಅರ್ಥ. ನಿನ್ನನ್ನು ಹೃದಯಪೂರ್ವಕವಾಗಿ ಪ್ರೀತಿಸುತ್ತೇನೆ.",
    ],
    bn: [
      "তুমি আমার জীবনের সবচেয়ে সুন্দর অধ্যায়। তোমায় ভালোবাসি, আজ এবং চিরদিন।",
      "তোমার হাসি, তোমার স্পর্শ, তোমার সঙ্গ — সব আমার কাছে অমূল্য।",
      "তোমাকে ছাড়া আমার জীবন অসম্পূর্ণ। তোমায় চিরদিন ভালোবাসবো।",
    ],
    gu: [
      "તું જ મારા જીવનની સૌથી સુંદર બાબત છે. તને પ્રેમ કરું છું, આજે અને કાયમ.",
      "તારા વગર કંઈ પૂરું નથી લાગતું. તું જ મારું ઘર છે.",
      "તારી સાથેની દરેક ક્ષણ અમૂલ્ય છે. પ્રેમ કાયમ રહેશે.",
    ],
    pa: [
      "ਤੇਰੇ ਬਿਨਾਂ ਜ਼ਿੰਦਗੀ ਅਧੂਰੀ ਹੈ। ਤੈਨੂੰ ਦਿਲੋਂ ਪਿਆਰ ਕਰਦਾ/ਕਰਦੀ ਹਾਂ।",
      "ਤੇਰੇ ਨਾਲ ਬਿਤਾਇਆ ਹਰ ਪਲ ਅਨਮੋਲ ਹੈ।",
      "ਤੂੰ ਮੇਰੀ ਦੁਨੀਆ ਏਂ। ਸਦਾ ਰਹੀਂ।",
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
    gu: [
      "ગુલાબના ફૂલ જેવી નરમ છે તારી પ્રેમની લાગણી. શુભ રોઝ ડે!",
      "મારી/મારો બનીશ? આજે પણ એ જ સવાલ.",
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
      "உங்கள் பிறந்தநாள் வாழ்த்துக்கள்! இந்த வருடம் உங்களுக்கு எல்லா நல்லதும் கிடைக்கட்டும். 🎂",
      "உங்கள் புன்னகை என்றும் நிலைக்கட்டும். இனிய பிறந்தநாள்!",
      "மேலும் ஒரு ஆண்டு உங்களோடு — ஆயிரம் மகிழ்ச்சிகரமான நினைவுகள்.",
    ],
    te: [
      "పుట్టినరోజు శుభాకాంక్షలు! ఈ ఏడాది నీకు ఎంతో ఆనందాన్ని తీసుకురావాలి. 🎂",
      "నీ చిరునవ్వు ఎప్పటికీ ఇలాగే ఉండిపోవాలి. శుభ జన్మదినం!",
      "మరొక సంవత్సరం నీతో — మరిన్ని జ్ఞాపకాలు.",
    ],
    kn: [
      "ಹುಟ್ಟುಹಬ್ಬದ ಶುಭಾಶಯಗಳು! ಈ ವರ್ಷ ನಿಮಗೆ ಸಂತೋಷ ತರಲಿ. 🎂",
      "ನಿನ್ನ ನಗು ಎಂದೆಂದಿಗೂ ಹಾಗೆಯೇ ಇರಲಿ. ಶುಭ ಜನ್ಮದಿನ!",
      "ಮತ್ತೊಂದು ವರ್ಷ ನಿನ್ನೊಂದಿಗೆ — ಇನ್ನಷ್ಟು ಮಧುರ ಜ್ಞಾಪಕಗಳು.",
    ],
    bn: [
      "শুভ জন্মদিন! এই বছর তোমার জীবন সুখ, সাফল্য আর ভালোবাসায় ভরে উঠুক। 🎂",
      "তোমার প্রতিটি দিন হোক উৎসবের মতো। শুভ জন্মদিন!",
      "আরো একটা বছর তোমার সাথে — আরো হাজার স্মৃতি। শুভেচ্ছা!",
    ],
    gu: [
      "જન્મદિવસની ખૂબ ખૂબ શુભેચ્છાઓ! આ વર્ષ તને ખુશીઓથી ભરેલું મળે. 🎂",
      "એક વધુ વર્ષ તારા સાથે — એક હજાર નવી યાદો.",
      "તારો દિવસ તારી જેમ જ સુંદર જાય.",
    ],
    pa: [
      "ਜਨਮਦਿਨ ਦੀਆਂ ਲੱਖ ਲੱਖ ਮੁਬਾਰਕਾਂ! ਰੱਬ ਤੁਹਾਨੂੰ ਖੁਸ਼ੀਆਂ ਦੇਵੇ। 🎂",
      "ਤੁਹਾਡਾ ਇਹ ਸਾਲ ਸੁਖ ਅਤੇ ਸਫਲਤਾ ਨਾਲ ਭਰਿਆ ਹੋਵੇ।",
      "ਇੱਕ ਹੋਰ ਸਾਲ ਤੇਰੇ ਨਾਲ — ਹਜ਼ਾਰ ਹੋਰ ਯਾਦਾਂ।",
    ],
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
    gu: [
      "તું મારો સાચો મિત્ર છે. દુઃખમાં પણ તું પાસે હોય છે, આભાર.",
      "કેટલીક મિત્રતાઓ શબ્દોમાં નથી ઉતરતી. આપણી એવી જ છે.",
    ],
    pa: [
      "ਯਾਰਾ, ਤੇਰੇ ਵਰਗਾ ਦੋਸਤ ਮਿਲਣਾ ਨਸੀਬ ਦੀ ਗੱਲ ਹੈ। ਸ਼ੁਕਰੀਆ।",
      "ਯਾਰੀ ਸਲਾਮਤ ਰਹੇ।",
    ],
    ta: [
      "என் உண்மையான நண்பா, உன்னோடு கழிக்கும் ஒவ்வொரு நாளும் சிறப்பானது. நன்றி.",
      "நட்பு நிரந்தரமாக இருக்கட்டும்.",
    ],
    te: [
      "నా నిజమైన స్నేహితుడా, నీతో గడిపే ప్రతి క్షణం విలువైనది. ధన్యవాదాలు.",
      "స్నేహం ఎప్పటికీ ఉండిపోవాలి.",
    ],
    kn: [
      "ನನ್ನ ನಿಜವಾದ ಗೆಳೆಯ/ಗೆಳತಿ, ನಿನ್ನೊಂದಿಗೆ ಕಳೆಯುವ ಪ್ರತಿ ದಿನವೂ ವಿಶೇಷ. ಧನ್ಯವಾದಗಳು.",
      "ಸ್ನೇಹ ಎಂದೆಂದಿಗೂ ಇರಲಿ.",
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
    gu: [
      "નવરાત્રીની હાર્દિક શુભેચ્છાઓ! મા અંબા તને આશીર્વાદ આપે.",
      "શુભ ઉત્તરાયણ! તારું જીવન પણ આકાશમાં ઊડતી પતંગ જેવું ઊંચું જાય.",
      "દીપાવલીના દીવાની જેમ તારું જીવન પણ ઉજળું રહે.",
    ],
    pa: [
      "ਲੋਹੜੀ ਦੀਆਂ ਦਿਲੀ ਮੁਬਾਰਕਾਂ! ਇਹ ਅੱਗ ਸਾਰੀਆਂ ਮੁਸ਼ਕਲਾਂ ਸਾੜ ਦੇਵੇ।",
      "ਵਿਸਾਖੀ ਦੀਆਂ ਮੁਬਾਰਕਾਂ! ਨਵੀਂ ਫਸਲ, ਨਵੀਆਂ ਖੁਸ਼ੀਆਂ।",
      "ਗੁਰਪੁਰਬ ਦੀਆਂ ਲੱਖ ਲੱਖ ਵਧਾਈਆਂ।",
    ],
    ta: [
      "இனிய பொங்கல் நல்வாழ்த்துக்கள்! இந்த ஆண்டு உங்களுக்கு மகிழ்ச்சியும் வளமும் நிறைய வரட்டும்.",
      "தீபாவளி வெளிச்சம் போல உங்கள் வாழ்க்கை பிரகாசிக்கட்டும்.",
      "இனிய தமிழ் புத்தாண்டு நல்வாழ்த்துக்கள்!",
    ],
    te: [
      "ఉగాది శుభాకాంక్షలు! ఈ నూతన సంవత్సరం నీకు ఆనందం, విజయం, ఆరోగ్యం ఇవ్వాలి.",
      "దీపావళి వెలుగుల్లా నీ జీవితం కూడా ప్రకాశించాలి.",
      "సంక్రాంతి శుభాకాంక్షలు! కొత్త పంట, కొత్త ఆశలు.",
    ],
    kn: [
      "ಯುಗಾದಿ ಶುಭಾಶಯಗಳು! ಈ ಹೊಸ ವರ್ಷ ನಿಮಗೆ ಸುಖ, ಸಮೃದ್ಧಿ ತರಲಿ.",
      "ದಸರಾ ಶುಭಾಶಯಗಳು! ಒಳ್ಳೆಯದು ಕೆಟ್ಟದಿನ ಮೇಲೆ ಗೆಲ್ಲಲಿ.",
      "ದೀಪಾವಳಿ ಬೆಳಕಿನಂತೆ ನಿಮ್ಮ ಜೀವನ ಪ್ರಕಾಶಿಸಲಿ.",
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
    gu: [
      "શુભ સવાર! તારો દિવસ તારી જેમ જ સુંદર જાય. ☀️",
      "શુભ રાત્રિ! મીઠા સપના આવે.",
      "બસ કહેવું હતું — આજે તારી યાદ આવી.",
    ],
    pa: [
      "ਸ਼ੁਭ ਸਵੇਰ! ਤੁਹਾਡਾ ਦਿਨ ਸ਼ਾਨਦਾਰ ਹੋਵੇ।",
      "ਸ਼ੁਭ ਰਾਤਰੀ! ਮਿੱਠੇ ਸੁਪਨੇ।",
    ],
    ta: [
      "காலை வணக்கம்! உங்கள் நாள் மிகச் சிறப்பாக இருக்கட்டும். ☀️",
      "இனிய இரவு! இனிய கனவுகள் காணுங்கள்.",
    ],
    te: [
      "శుభోదయం! నీ రోజు నీలాగే అందంగా గడవాలి. ☀️",
      "శుభరాత్రి! మధుర స్వప్నాలు కనండి.",
    ],
    kn: [
      "ಶುಭೋದಯ! ನಿಮ್ಮ ದಿನ ಸುಂದರವಾಗಿ ಕಳೆಯಲಿ. ☀️",
      "ಶುಭ ರಾತ್ರಿ! ಸುಂದರ ಕನಸುಗಳು.",
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
    gu: [
      "તારી મદદ માટે ખૂબ ખૂબ આભાર. ભૂલીશ નહીં.",
      "તેં જે કર્યું, એ નાનું નથી. આભાર!",
    ],
    pa: [
      "ਤੁਹਾਡੀ ਮਦਦ ਲਈ ਦਿਲੋਂ ਧੰਨਵਾਦ।",
      "ਤੁਸੀਂ ਜੋ ਕੀਤਾ ਉਹ ਛੋਟਾ ਨਹੀਂ। ਸ਼ੁਕਰੀਆ!",
    ],
    te: [
      "నీ సహాయానికి హృదయపూర్వక ధన్యవాదాలు. మర్చిపోను.",
      "నువ్వు చేసినది చిన్నది కాదు. ధన్యవాదాలు.",
    ],
    kn: [
      "ನಿಮ್ಮ ಸಹಾಯಕ್ಕೆ ಹೃದಯಪೂರ್ವಕ ಧನ್ಯವಾದಗಳು.",
      "ನೀವು ಮಾಡಿದ್ದು ಚಿಕ್ಕದಲ್ಲ. ಧನ್ಯವಾದಗಳು.",
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
    gu: [
      "તને ખૂબ યાદ કરું છું. જલ્દી મળીએ.",
      "અંતર વધ્યું, પણ પ્રેમ ઓછો નથી થયો.",
    ],
    pa: [
      "ਤੇਰੀ ਬਹੁਤ ਯਾਦ ਆਉਂਦੀ ਹੈ। ਜਲਦੀ ਮਿਲੀਏ।",
      "ਦੂਰੀ ਵਧੀ ਹੈ, ਪਿਆਰ ਨਹੀਂ ਘਟਿਆ।",
    ],
    ta: [
      "உன்னை நிறைய மிஸ் செய்கிறேன். சீக்கிரம் சந்திக்கலாம்.",
      "தூரம் அதிகரித்தது, அன்பு குறையவில்லை.",
    ],
    te: [
      "నిన్ను చాలా మిస్ అవుతున్నాను. త్వరగా కలుద్దాం.",
      "దూరం పెరిగింది, ప్రేమ తగ్గలేదు.",
    ],
    kn: [
      "ನಿನ್ನನ್ನು ತುಂಬಾ ಮಿಸ್ ಮಾಡುತ್ತಿದ್ದೇನೆ. ಬೇಗ ಭೇಟಿಯಾಗೋಣ.",
      "ದೂರ ಹೆಚ್ಚಾಗಿದೆ, ಪ್ರೀತಿ ಕಡಿಮೆಯಾಗಿಲ್ಲ.",
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
    gu: [
      "મને માફ કરો. હું ખોટો/ખોટી હતી.",
      "માફી. તારી લાગણી સમજાય છે.",
    ],
    pa: [
      "ਮੈਨੂੰ ਮਾਫ਼ ਕਰ ਦੇ। ਮੈਂ ਗਲਤ ਸੀ।",
      "ਮਾਫ਼ੀ। ਤੇਰੀਆਂ ਭਾਵਨਾਵਾਂ ਮੇਰੇ ਲਈ ਅਹਿਮ ਹਨ।",
    ],
    ta: [
      "என்னை மன்னித்து விடு. நான் தவறு செய்தேன்.",
      "மன்னிக்கவும். உங்கள் உணர்வை புரிந்துகொள்கிறேன்.",
    ],
    te: [
      "నన్ను క్షమించు. నేను తప్పు చేశాను.",
      "క్షమాపణ. నీ భావాలు నాకు అర్థమయ్యాయి.",
    ],
    kn: [
      "ನನ್ನನ್ನು ಕ್ಷಮಿಸು. ನಾನು ತಪ್ಪು ಮಾಡಿದ್ದೇನೆ.",
      "ಕ್ಷಮೆ. ನಿನ್ನ ಭಾವನೆಗಳು ನನಗೆ ಅರ್ಥವಾಗುತ್ತವೆ.",
    ],
  },
};

// Per-template example pools (more specific than category). Keyed by template id.
// When a template has an entry here, it overrides the category pool.
// Each entry has language-specific arrays; EN is a safe fallback.
const TEMPLATE_EXAMPLES = {
  // ============ Valentine's Week (per-day) ============
  "vw-rose-day": {
    en: [
      "Roses remind me of you — their softness, their warmth, the way they light up a room. Happy Rose Day 🌹",
      "A rose is just a rose. With you, it means forever. Happy Rose Day!",
      "Sending you the prettiest rose in my heart today. Happy Rose Day ❤️",
    ],
    hi: [
      "गुलाब की तरह ही तुम हो — कोमल, ख़ुशबूदार और मेरे दिल के करीब। रोज़ डे मुबारक! 🌹",
      "एक गुलाब, एक वादा — आज और हमेशा के लिए।",
    ],
  },
  "mr-vw-rose": { mr: [
    "गुलाबाच्या पाकळ्यांइतकंच कोमल आहे तुझ्यासाठीचं माझं प्रेम. हॅपी रोझ डे! 🌹",
    "हा गुलाब आणि तुझं हसू — दोन्ही माझ्या दिवसाची सुरुवात करतात. हॅपी रोझ डे!",
  ]},
  "hi-vw-rose": { hi: [
    "गुलाब की तरह ही तुम हो — कोमल, ख़ुशबूदार और मेरे दिल के करीब। रोज़ डे मुबारक! 🌹",
    "एक गुलाब, एक वादा — आज और हमेशा के लिए।",
  ]},

  "vw-propose-day": {
    en: [
      "I've been meaning to say this for a while. Will you be mine — today, tomorrow, and every day after? 💍",
      "No grand speech, no perfect words. Just one question: will you?",
      "Every good thing in my life became better because of you. Will you stay? ✨",
    ],
    hi: [
      "आज वो सवाल पूछना है जो हर दिन दिल में आता है — क्या तुम मेरी/मेरे बनोगी/बनोगे? 💍",
      "कोई बड़ा डायलॉग नहीं, बस एक सच्चा सवाल है। साथ दोगे/दोगी?",
    ],
  },
  "mr-vw-propose": { mr: [
    "आज एक प्रश्न विचारायचा आहे — तू माझी/माझा होशील का? 💍",
    "शब्दांत सांगता येत नाही, पण दिलात आहेस तू. साथ देशील?",
  ]},

  "vw-chocolate-day": {
    en: [
      "If I had to pick between chocolate and you, I'd pick you. (Chocolate would be a very close second.) 🍫",
      "Some things sweeten the day. Chocolate is one. You are every.",
      "Happy Chocolate Day. Proof that the best things in life are sweet, and shared.",
    ],
    hi: [
      "चॉकलेट मीठी है, पर तुम उससे भी मीठे/मीठी हो। हैप्पी चॉकलेट डे! 🍫",
      "आज का दिन मीठा हो जाएगा अगर तुम साथ हो।",
    ],
  },
  "mr-vw-chocolate": { mr: [
    "चॉकलेटहून गोड आहेस तू. हॅपी चॉकलेट डे! 🍫",
    "आज थोडा गोडवा — चॉकलेट आणि तुझ्यासोबत.",
  ]},

  "vw-teddy-day": {
    en: [
      "This card is a hug in disguise. And a teddy too. Happy Teddy Day 🧸",
      "Every teddy I see reminds me of warm things. Like you.",
      "A soft one, a cuddly one, a just-like-you one. Happy Teddy Day!",
    ],
    hi: [
      "ये टेडी नहीं है, ये एक प्यारी झप्पी है तुम्हारे लिए। हैप्पी टेडी डे! 🧸",
      "दिन में हो या रात में — एक टेडी और तुम, बस यही चाहिए।",
    ],
  },

  "vw-promise-day": {
    en: [
      "One promise today: I'll keep choosing you, quietly and daily. Happy Promise Day 🤞",
      "Not the big promises, the small ones — the 'I'll listen', 'I'll be there' kind. Those are yours.",
    ],
    hi: [
      "एक वादा — हर छोटी बात में तुम्हारा साथ दूँगा/दूँगी। प्रॉमिस डे मुबारक 🤞",
    ],
  },

  "vw-hug-day": {
    en: [
      "Consider yourself hugged. Tightly. For as long as you need. 🤗",
      "The best hugs don't need words. This card is the word version of one.",
      "Sending you an extra-long hug today. Keep it, it's yours. Happy Hug Day!",
    ],
    hi: [
      "एक कस के गले लगना तुम्हारे नाम। हग डे मुबारक! 🤗",
      "आज दूर हूँ तो ये झप्पी भेज रहा/रही हूँ — बहुत ज़रूरी थी।",
    ],
  },
  "mr-vw-hug": { mr: [
    "एक घट्ट मिठी तुझ्यासाठी. कुठेही असलास तरी पोहोचेल. 🤗",
    "शब्दांना जमत नाही ते मिठी बोलते. आज तुझ्यासाठी.",
  ]},

  "vw-kiss-day": {
    en: [
      "A small thing, a big feeling. Happy Kiss Day 💋",
      "Some moments are worth a thousand cards. This one is for one of those.",
    ],
    hi: [
      "एक छोटा सा पल, पर बहुत बड़ी फीलिंग। किस डे मुबारक! 💋",
    ],
  },

  "vw-valentines": {
    en: [
      "Happy Valentine's Day. I'd write a long poem but you already know all of it. ❤️",
      "You're my favourite person. Today and every day. Be my Valentine?",
      "Loving you is the easiest thing I do. Happy Valentine's Day.",
    ],
    hi: [
      "हैप्पी वैलेंटाइन्स डे! तुम मेरी सबसे प्यारी वजह हो, हर दिन।",
      "आज का दिन तुम्हारे नाम। वैलेंटाइन बनोगी/बनोगे?",
    ],
  },

  // ============ Everyday (per-variant) ============
  "everyday-good-morning": {
    en: [
      "Good morning! Hope your coffee is hot and your day is kinder than yesterday. ☀️",
      "A little sunshine note to start your day. You've got this.",
      "Good morning, you. Sending you a soft landing into today.",
    ],
    hi: [
      "सुप्रभात! आज का दिन तुम्हारे लिए बहुत शुभ हो। ☀️",
      "नमस्ते और एक बड़ी स्माइल तुम्हारे दिन की शुरुआत के लिए।",
    ],
  },
  "mr-everyday-shubh-sakal": { mr: [
    "शुभ सकाळ! आजचा दिवस तुझ्यासारखाच तेजस्वी होवो. ☀️",
    "सकाळच्या पहिल्या किरणासारखी एक चांगली बातमी — तू आज माझ्या विचारात आहेस.",
  ]},
  "hi-everyday-suprabhat": { hi: [
    "सुप्रभात! आज का दिन मुस्कुराहटों से भरा रहे। ☀️",
    "सूरज की पहली किरण के साथ एक छोटी सी शुभकामना — तुम्हारा दिन बेहतरीन हो।",
  ]},

  "everyday-good-night": {
    en: [
      "Sleep well. The day was long, but it was yours. See you in the morning. 🌙",
      "Close your eyes, let the day go. Tomorrow is a softer place.",
      "Good night. Wherever you are, may your dreams be kind.",
    ],
    hi: [
      "शुभ रात्रि! आज का दिन बीत गया, कल एक नया शुरू होगा। सपने अच्छे हों। 🌙",
      "आँखें बंद करो, चैन की साँस लो। कल और बेहतर होगा।",
    ],
  },
  "mr-everyday-shubh-ratri": { mr: [
    "शुभ रात्री! आजचा दिवस चांगला गेला, आता गोड झोप लाग. 🌙",
    "डोळे मिटून दिवस सोडून दे. उद्या नवं काहीतरी वाट पाहतंय.",
  ]},
  "hi-everyday-shubh-ratri": { hi: [
    "शुभ रात्रि! दिन भर की थकान आज की नींद में खो जाए। 🌙",
    "चाँद देख कर सो जाओ — कल फिर मिलेंगे।",
  ]},
  "hi-everyday-sweet-dreams": { hi: [
    "मीठे सपने आएँ! सपने में मिलते हैं। ✨",
    "तुम्हारी आँखों में आज रात सितारे तैरें।",
  ]},
  "everyday-sweet-dreams": {
    en: [
      "Sweet dreams. May tonight's dreams be the cozy kind — the ones you don't want to wake up from. ✨",
      "May stars line your sleep and softness lead your morning.",
    ],
  },

  "everyday-nice-day": {
    en: [
      "Have a good one. No pressure, no grand plans — just a day that feels like you. 🌼",
      "Sending a little note into your day. Hope it's a gentle one.",
    ],
  },

  "everyday-get-well": {
    en: [
      "Rest up. The world will still be here when you're back. Feel better soon. 🌷",
      "Sending you soup, sunlight, and softness. Get well soon.",
      "You're missed, but rest is the best gift you can give yourself right now.",
    ],
    hi: [
      "जल्दी ठीक हो जाओ। तुम्हारे बिना दिन अधूरे लगते हैं। 🌷",
      "थोड़ा आराम करो। बाकी सब बाद में।",
    ],
  },
  "mr-everyday-get-well": { mr: [
    "लवकर बरा/बरी हो. आराम कर, बाकी सगळं नंतर. 🌷",
  ]},
  "hi-everyday-get-well": { hi: [
    "जल्दी ठीक हो जाओ। तुम्हारा हँसना मुझे याद आ रहा है। 🌷",
  ]},

  "everyday-congrats": {
    en: [
      "You did it! So proud of you. Wishing you many more of these moments. 🎊",
      "Hard work, quiet hours, and now — a win. Well done!",
      "Celebrate this. You earned it.",
    ],
    hi: [
      "बधाई हो! ये तुम्हारी मेहनत का फल है। बहुत खुशी हुई। 🎊",
      "कर दिखाया तुमने! आगे भी ऐसी ही जीतें मिलें।",
    ],
  },
};

export const getExample = (category, lang = "en", templateId) => {
  // 1. Template-specific pool (most specific)
  if (templateId) {
    const tplPool = TEMPLATE_EXAMPLES[templateId];
    if (tplPool) {
      const tplLangPool = tplPool[lang] || tplPool.en;
      if (tplLangPool && tplLangPool.length) {
        return tplLangPool[Math.floor(Math.random() * tplLangPool.length)];
      }
    }
  }
  // 2. Category × lang fallback
  const categoryPool = EXAMPLES[category] || EXAMPLES.everyday;
  const langPool = categoryPool[lang] || categoryPool.en || EXAMPLES.everyday.en;
  return langPool[Math.floor(Math.random() * langPool.length)];
};
