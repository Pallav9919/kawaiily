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

// Occasion detection — when a template belongs to a specific occasion, pick from
// occasion-specific examples. Checked in order; first match wins.
// This is more scalable than listing every template ID because we have 280 templates.
const OCCASION_RULES = [
  // Anime characters
  { match: /^anime-sasuke$/, key: "anime-sasuke" },
  { match: /^anime-itachi$/, key: "anime-itachi" },
  { match: /^anime-naruto$/, key: "anime-naruto" },
  { match: /^anime-madara$/, key: "anime-madara" },
  { match: /^anime-minato$/, key: "anime-minato" },
  // Valentine's week days (EN id prefix: vw-* ; language: *-vw-*)
  { match: /(^vw-rose-day$|-vw-rose$)/, key: "rose-day" },
  { match: /(^vw-propose-day$|-vw-propose$)/, key: "propose-day" },
  { match: /(^vw-chocolate-day$|-vw-chocolate$)/, key: "chocolate-day" },
  { match: /(^vw-teddy-day$|-vw-teddy$)/, key: "teddy-day" },
  { match: /(^vw-promise-day$|-vw-promise$)/, key: "promise-day" },
  { match: /(^vw-hug-day$|-vw-hug$)/, key: "hug-day" },
  { match: /(^vw-kiss-day$|-vw-kiss$)/, key: "kiss-day" },
  { match: /(^vw-valentines$|-vw-valentine$)/, key: "valentines" },

  // Festivals
  { match: /(diwali|deepavali|dipawali|deepawali)/i, key: "diwali" },
  { match: /(holi)/i, key: "holi" },
  { match: /(eid)/i, key: "eid" },
  { match: /(rakhi|raksha-bandhan|rakhi$|rakhi-)/i, key: "rakhi" },
  { match: /(ganesh|ganpati|ganapati|chaturthi)/i, key: "ganesh" },
  { match: /(navratri)/i, key: "navratri" },
  { match: /(janmashtami|krishna)/i, key: "janmashtami" },
  { match: /(karwa-chauth|karva-chauth)/i, key: "karwa-chauth" },
  { match: /(bhai-dooj)/i, key: "bhai-dooj" },
  { match: /(christmas)/i, key: "christmas" },
  { match: /(new-year|nye|bestu-varas)/i, key: "new-year" },
  { match: /(pongal|puthandu)/i, key: "pongal" },
  { match: /(ugadi)/i, key: "ugadi" },
  { match: /(dasara|dussehra|vijayadashami|bijoya)/i, key: "dasara" },
  { match: /(sankranti|uttarayan)/i, key: "sankranti" },
  { match: /(lohri)/i, key: "lohri" },
  { match: /(vaisakhi|baisakhi)/i, key: "vaisakhi" },
  { match: /(gurpurab|guru-nanak)/i, key: "gurpurab" },
  { match: /(durga-puja)/i, key: "durga-puja" },
  { match: /(pohela-boishakh|poila-boishakh)/i, key: "pohela-boishakh" },
  { match: /(saraswati)/i, key: "saraswati" },
  { match: /(kali)/i, key: "kali-puja" },
  { match: /(gudi-padwa)/i, key: "gudi-padwa" },
  { match: /(onam)/i, key: "onam" },

  // Everyday variants
  { match: /(good-morning|suprabhat|shubh-savar|shubh-sakal|shubh-saver|shubh-shokal|shubhodayam|shubhodaya|kalai-vanakkam)/i, key: "good-morning" },
  { match: /(good-night|shubh-ratri|shubha-ratri|iniya-iravu)/i, key: "good-night" },
  { match: /(sweet-dreams|meethe-sapne)/i, key: "sweet-dreams" },
  { match: /(nice-day)/i, key: "nice-day" },
  { match: /(get-well|jaldi-theek|bare-vha|sara-thao|sukham|gunamukhar|kolukondi)/i, key: "get-well" },
  { match: /(congrats|abhinandan|abhinandane|abhinandanalu|badhai|obhinondon|vadhaaiyan|vazhthukkal$|everyday-vazhthukkal)/i, key: "congrats" },

  // Love
  { match: /anniversary/i, key: "anniversary" },
];

const detectOccasion = (templateId) => {
  if (!templateId) return null;
  for (const rule of OCCASION_RULES) {
    if (rule.match.test(templateId)) return rule.key;
  }
  return null;
};

// Occasion-specific example pools. Fall back to category pool if occasion not here.
const OCCASION_EXAMPLES = {
  // ---------- Anime characters ----------
  "anime-sasuke": {
    en: [
      "You have awakened something in me I can't look away from. My world has you at the centre of it now.",
      "I didn't expect to need anyone. Then you happened — and I couldn't forget. Like those eyes, I guess. 🩸",
      "I used to walk alone. I don't want to anymore. You found me, and I don't plan on losing you.",
      "Revenge isn't what drives me anymore. You are.",
    ],
  },
  "anime-itachi": {
    en: [
      "You're in my genjutsu. 72 hours. You won't want to leave.",
      "Some people protect the ones they love from far away. I just wanted you to know — I'm still watching over you. 🜲",
      "People live their lives bound by what they accept as correct and true — that's how they define 'reality'. But my reality, I realised, has always been you.",
      "Forgive me. For the distance, for the silence, for everything I couldn't say. You were always my favourite person.",
      "I told you it's a lie. About the foolish little brother thing. I've just always loved you too much to say it simply.",
    ],
  },
  "anime-naruto": {
    en: [
      "I'll never give up on you. Believe it. 🍥",
      "You make every day feel like I'm finally becoming Hokage of something good. Thank you for being in my life.",
      "When I'm with you, even ramen tastes better. That's the highest compliment I have.",
      "No matter how hard the day, remembering you reminds me to keep going. Dattebayo. 💛",
      "You don't need to change a single thing. You're already my favourite person in every village.",
    ],
  },
  "anime-madara": {
    en: [
      "Wake up to reality. You've been on my mind for far too long to ignore. 🌀",
      "In this world, wherever there is light — there are also shadows. I don't mind either, as long as you're in both.",
      "Those who forgive themselves, and are able to accept their true nature... they are the strong ones. Be strong with me.",
      "The concept of 'hope' is nothing more than giving up. A real hero never has a reason to give up. Neither do I — when it comes to you.",
    ],
  },
  "anime-minato": {
    en: [
      "Wherever you are, I can reach you in a flash. ⚡ Just say the word.",
      "You are the warmth I'd run through any storm to protect. That's a promise.",
      "A father, a husband, a friend — titles are easy. Showing up for you is the real thing. And I always will.",
      "Some bonds move faster than the Flying Thunder God. Ours is one of them. 💛",
    ],
  },

  // ---------- Valentine's Week days ----------
  "rose-day": {
    en: [
      "Roses remind me of you — their softness, their warmth, the way they light up a room. Happy Rose Day 🌹",
      "A rose is just a rose. With you, it means forever. Happy Rose Day!",
      "Sending you the prettiest rose in my heart today. Happy Rose Day ❤️",
    ],
    hi: [
      "गुलाब की तरह ही तुम हो — कोमल, ख़ुशबूदार और मेरे दिल के करीब। रोज़ डे मुबारक! 🌹",
      "एक गुलाब, एक वादा — आज और हमेशा के लिए।",
    ],
    mr: [
      "गुलाबाच्या पाकळ्यांइतकंच कोमल आहे तुझ्यासाठीचं माझं प्रेम. हॅपी रोझ डे! 🌹",
      "हा गुलाब आणि तुझं हसू — दोन्ही माझ्या दिवसाची सुरुवात करतात.",
    ],
  },
  "propose-day": {
    en: [
      "I've been meaning to say this for a while. Will you be mine — today, tomorrow, and every day after? 💍",
      "No grand speech, no perfect words. Just one question: will you?",
      "Every good thing in my life became better because of you. Will you stay? ✨",
    ],
    hi: [
      "आज वो सवाल पूछना है जो हर दिन दिल में आता है — क्या तुम मेरी/मेरे बनोगी/बनोगे? 💍",
      "कोई बड़ा डायलॉग नहीं, बस एक सच्चा सवाल है। साथ दोगे/दोगी?",
    ],
    mr: ["तू माझी/माझा होशील का? आजही तोच प्रश्न. 💍"],
  },
  "chocolate-day": {
    en: [
      "If I had to pick between chocolate and you, I'd pick you. (Chocolate would be a very close second.) 🍫",
      "Some things sweeten the day. Chocolate is one. You are every.",
      "Happy Chocolate Day. Proof that the best things in life are sweet, and shared.",
    ],
    hi: ["चॉकलेट मीठी है, पर तुम उससे भी मीठे/मीठी हो। हैप्पी चॉकलेट डे! 🍫"],
    mr: ["चॉकलेटहून गोड आहेस तू. हॅपी चॉकलेट डे! 🍫"],
  },
  "teddy-day": {
    en: [
      "This card is a hug in disguise. And a teddy too. Happy Teddy Day 🧸",
      "Every teddy I see reminds me of warm things. Like you.",
      "A soft one, a cuddly one, a just-like-you one. Happy Teddy Day!",
    ],
    hi: ["ये टेडी नहीं, एक गर्म सी झप्पी है तुम्हारे लिए। हैप्पी टेडी डे! 🧸"],
  },
  "promise-day": {
    en: [
      "One promise today: I'll keep choosing you, quietly and daily. Happy Promise Day 🤞",
      "Not the big promises, the small ones — the 'I'll listen', 'I'll be there' kind. Those are yours.",
    ],
    hi: ["एक वादा — हर छोटी बात में तुम्हारा साथ दूँगा/दूँगी। प्रॉमिस डे मुबारक 🤞"],
  },
  "hug-day": {
    en: [
      "Consider yourself hugged. Tightly. For as long as you need. 🤗",
      "The best hugs don't need words. This card is the word version of one.",
      "Sending you an extra-long hug today. Keep it, it's yours. Happy Hug Day!",
    ],
    hi: ["एक कस के गले लगना तुम्हारे नाम। हग डे मुबारक! 🤗"],
    mr: ["एक घट्ट मिठी तुझ्यासाठी. कुठेही असलास तरी पोहोचेल. 🤗"],
  },
  "kiss-day": {
    en: [
      "A small thing, a big feeling. Happy Kiss Day 💋",
      "Some moments are worth a thousand cards. This one is for one of those.",
    ],
    hi: ["एक छोटा सा पल, पर बहुत बड़ी फीलिंग। किस डे मुबारक! 💋"],
  },
  "valentines": {
    en: [
      "Happy Valentine's Day. I'd write a long poem but you already know all of it. ❤️",
      "You're my favourite person. Today and every day. Be my Valentine?",
      "Loving you is the easiest thing I do. Happy Valentine's Day.",
    ],
    hi: ["हैप्पी वैलेंटाइन्स डे! तुम मेरी सबसे प्यारी वजह हो, हर दिन।"],
    mr: ["व्हॅलेंटाइनच्या खूप खूप शुभेच्छा! तू माझं खास कारण आहेस."],
  },

  // ---------- Festivals ----------
  "diwali": {
    en: [
      "May this Diwali light up every corner of your life — quiet joy, loud laughter, and warm company. 🪔",
      "Wishing you a Diwali full of lamps, sweets, and good company. Happy Deepavali!",
      "May the light of diyas bring brightness to your world. Shubh Deepavali!",
    ],
    hi: [
      "दीपावली की हार्दिक शुभकामनाएँ! आपके जीवन में खुशियों के दीप जलें। 🪔",
      "हर दीया खुशी का, हर रोशनी प्यार की — शुभ दीपावली!",
    ],
    mr: [
      "दिवाळीच्या प्रकाशाप्रमाणे तुझं आयुष्य उजळून निघो. शुभ दीपावली! 🪔",
      "दिवाळीच्या हार्दिक शुभेच्छा! गोडवा, आनंद आणि समृद्धी घरी नांदो.",
    ],
    bn: ["দীপাবলির আলোয় উজ্জ্বল হোক তোমার জীবন।"],
    ta: ["தீபாவளி வெளிச்சம் போல உங்கள் வாழ்க்கை பிரகாசிக்கட்டும்."],
    te: ["దీపావళి వెలుగుల్లా నీ జీవితం కూడా ప్రకాశించాలి."],
    kn: ["ದೀಪಾವಳಿ ಬೆಳಕಿನಂತೆ ನಿಮ್ಮ ಜೀವನ ಪ್ರಕಾಶಿಸಲಿ."],
    gu: ["દીપાવલીના દીવાની જેમ તારું જીવન પણ ઉજળું રહે."],
    pa: ["ਦੀਵਾਲੀ ਦੇ ਦੀਵੇ ਤੇਰੀ ਜ਼ਿੰਦਗੀ ਨੂੰ ਰੌਸ਼ਨ ਕਰਨ।"],
  },
  "holi": {
    en: [
      "May your Holi be full of color, laughter, and a little mischief. Happy Holi! 🎨",
      "Bura na mano, Holi hai! Wishing you a bright, joyful Holi.",
      "Sending you every color of happiness this Holi.",
    ],
    hi: [
      "होली के रंगों की तरह ख़ुशियाँ तुम्हारे जीवन में छाई रहें। होली मुबारक! 🎨",
      "बुरा ना मानो, होली है! रंगो-बिरंगी शुभकामनाएँ।",
    ],
    mr: ["होळीच्या रंगांप्रमाणे तुझं आयुष्य रंगीबेरंगी राहो!"],
    gu: ["હોળીના રંગોની જેમ તારું જીવન પણ રંગીન રહે. હેપી હોળી!"],
    pa: ["ਰੰਗਾਂ ਦੀ ਹੋਲੀ ਤੁਹਾਡੀ ਜ਼ਿੰਦਗੀ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਲਿਆਵੇ।"],
  },
  "eid": {
    en: [
      "Eid Mubarak! May this day bring blessings, togetherness, and all the sweetness of seviyan. 🌙",
      "Wishing you a joyous Eid full of peace, love, and laughter.",
    ],
    hi: ["ईद मुबारक! अल्लाह आपको खूब खुशियाँ दें। 🌙"],
    mr: ["ईद मुबारक! तुमच्या घरात सुख-शांती नांदो."],
    bn: ["ঈদ মুবারক! আল্লাহ তোমাকে অনেক খুশি দিন।"],
    ta: ["ஈத் முபாரக்! இந்த நாள் உங்களுக்கு எல்லா நல்லதும் கொண்டு வரட்டும்."],
    te: ["ఈద్ ముబారక్! ఈ రోజు మీకు ఎంతో ఆనందాన్ని తీసుకురావాలి."],
    kn: ["ಈದ್ ಮುಬಾರಕ್! ಈ ದಿನ ನಿಮಗೆ ಒಳ್ಳೆಯದನ್ನು ತರಲಿ."],
    gu: ["ઈદ મુબારક! આ દિવસ તમારા માટે આશીર્વાદ લઈને આવે."],
    pa: ["ਈਦ ਮੁਬਾਰਕ! ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਬਹੁਤ ਸਾਰੀਆਂ ਖੁਸ਼ੀਆਂ।"],
  },
  "rakhi": {
    en: [
      "Happy Raksha Bandhan, bhai/didi! This thread is just a symbol — what we have is unbreakable. 🪢",
      "To the one who's been there forever — Happy Rakhi. ❤️",
      "No matter how far, the Rakhi bond stays. Happy Raksha Bandhan!",
    ],
    hi: [
      "रक्षा बंधन मुबारक! ये धागा तो सिर्फ एक निशानी है — रिश्ता तो हमेशा का है। 🪢",
      "भाई/बहन, तुम हो तो सब है। हैप्पी रक्षा बंधन!",
    ],
    mr: ["रक्षाबंधनाच्या हार्दिक शुभेच्छा! आपलं नातं कायम घट्ट राहो."],
    gu: ["રક્ષા બંધનની શુભેચ્છાઓ! આપણો સંબંધ કાયમ મજબૂત રહે."],
    pa: ["ਰੱਖੜੀ ਦੀਆਂ ਮੁਬਾਰਕਾਂ! ਆਪਣਾ ਰਿਸ਼ਤਾ ਇੰਝ ਹੀ ਕਾਇਮ ਰਹੇ।"],
  },
  "ganesh": {
    en: [
      "Ganpati Bappa Morya! May Ganesha remove every obstacle from your path. 🕉️",
      "Wishing you and your family a blessed Ganesh Chaturthi. May Bappa bring joy and wisdom. 🪷",
    ],
    hi: [
      "गणपति बाप्पा मोरया! बाप्पा आपके जीवन से सभी विघ्न दूर करें। 🕉️",
      "गणेश चतुर्थी की हार्दिक शुभकामनाएँ! बाप्पा के आशीर्वाद से सब ठीक हो।",
    ],
    mr: [
      "गणपती बाप्पा मोरया! बाप्पाच्या आशीर्वादाने सगळं चांगलं होवो. 🕉️",
      "गणेश चतुर्थीच्या हार्दिक शुभेच्छा! बाप्पा आनंद आणि बुद्धी देवो.",
    ],
    gu: ["ગણેશ ચતુર્થી ની શુભેચ્છાઓ! બાપ્પા તમને આશીર્વાદ આપે."],
    kn: ["ಗಣೇಶ ಚತುರ್ಥಿ ಶುಭಾಶಯಗಳು! ಗಣೇಶ ನಿಮಗೆ ಎಲ್ಲ ಒಳ್ಳೆಯದನ್ನು ಕೊಡಲಿ."],
  },
  "navratri": {
    en: [
      "Happy Navratri! Nine nights of music, devotion, and maa's blessings. 🪷",
      "May Maa Durga bless you with strength and joy this Navratri.",
    ],
    hi: ["नवरात्रि की हार्दिक शुभकामनाएँ! माँ दुर्गा का आशीर्वाद आप पर बना रहे। 🪷"],
    gu: ["નવરાત્રીની હાર્દિક શુભેચ્છાઓ! મા અંબા તને આશીર્વાદ આપે."],
    ta: ["நவராத்திரி வாழ்த்துக்கள்! அம்மன் உங்களை ஆசீர்வதிக்கட்டும்."],
  },
  "janmashtami": {
    en: ["Jai Shri Krishna! May the flute player's melody fill your life with joy. 🦚"],
    hi: [
      "जय श्री कृष्ण! जन्माष्टमी की हार्दिक शुभकामनाएँ। 🦚",
      "कान्हा के आशीर्वाद से आपका जीवन मिठास और प्रेम से भरा रहे।",
    ],
    gu: ["જય શ્રી કૃષ્ણ! જન્માષ્ટમી ની હાર્દિક શુભેચ્છાઓ."],
  },
  "karwa-chauth": {
    en: ["May your love grow stronger with every moon that rises. Happy Karwa Chauth 🌕"],
    hi: [
      "करवा चौथ मुबारक! आप दोनों का रिश्ता चाँद से भी रोशन रहे। 🌕",
      "चाँद और छलनी के बीच का ये रिश्ता हमेशा कायम रहे।",
    ],
  },
  "bhai-dooj": {
    en: ["Happy Bhai Dooj! A day for the brother-sister bond that no distance can dim. 🪔"],
    hi: ["भाई दूज मुबारक! तिलक, मिठाई और तुम्हारे प्यार की दुआ। 🪔"],
  },
  "christmas": {
    en: [
      "Merry Christmas! May your tree be bright, your cookies plenty, and your heart warm. 🎄",
      "Wishing you a cozy Christmas full of love and laughter.",
    ],
    hi: ["क्रिसमस मुबारक! ये त्योहार आपके जीवन में खुशियाँ लाए। 🎄"],
    bn: ["শুভ বড়দিন! তোমার জীবনে আনন্দ ভরে উঠুক।"],
    ta: ["கிறிஸ்துமஸ் வாழ்த்துக்கள்! சாந்தியும் மகிழ்ச்சியும் நிறையட்டும்."],
  },
  "new-year": {
    en: [
      "Happy New Year! Here's to fewer worries, softer mornings, and more of what makes you glow. 🎆",
      "Cheers to a new year, new hopes, and the same people who matter most.",
    ],
    hi: [
      "नए साल की हार्दिक शुभकामनाएँ! ये साल आपके लिए बहुत ख़ास हो। 🎆",
      "नया साल, नई उम्मीदें, और वही पुराने अपने।",
    ],
    mr: ["नववर्षाच्या हार्दिक शुभेच्छा! नवीन वर्ष तुझ्यासाठी सुखाचं जावो."],
    gu: ["સાલ મુબારક! નવું વર્ષ તને ખુશીઓ અને સફળતા આપે."],
    pa: ["ਨਵੇਂ ਸਾਲ ਦੀਆਂ ਮੁਬਾਰਕਾਂ! ਇਹ ਸਾਲ ਤੁਹਾਡੇ ਲਈ ਸ਼ਾਨਦਾਰ ਹੋਵੇ।"],
    bn: ["শুভ নববর্ষ! নতুন বছর তোমায় অনেক আনন্দ দিক।"],
    ta: ["புத்தாண்டு வாழ்த்துக்கள்! புதிய வருடம் உங்களுக்கு நல்லது மட்டுமே கொடுக்கட்டும்."],
    te: ["నూతన సంవత్సర శుభాకాంక్షలు! ఈ ఏడాది మీకు ఆనందం కలిగించాలి."],
    kn: ["ನೂತನ ವರ್ಷದ ಶುಭಾಶಯಗಳು! ಈ ವರ್ಷ ನಿಮಗೆ ಸಂತೋಷ ತರಲಿ."],
  },
  "pongal": {
    en: [
      "Happy Pongal! May the harvest of this year be rich and your home full. 🌾",
      "Thai pirandhal vazhi pirakkum — new month, new path. Happy Pongal!",
    ],
    ta: [
      "இனிய பொங்கல் நல்வாழ்த்துக்கள்! இந்த ஆண்டு உங்களுக்கு மகிழ்ச்சியும் வளமும் நிறைய வரட்டும். 🌾",
      "தமிழர் திருநாள் வாழ்த்துக்கள்! புதிய மாதம், புதிய வழி.",
    ],
  },
  "ugadi": {
    en: [
      "Happy Ugadi! A new year to try new things, meet new people, and be kinder to yourself. 🪷",
      "May this Ugadi bring the six flavors of life — sweet, sour, salty, bitter, spicy, and astringent — in just the right mix.",
    ],
    te: [
      "ఉగాది శుభాకాంక్షలు! ఈ నూతన సంవత్సరం నీకు ఆనందం, విజయం, ఆరోగ్యం ఇవ్వాలి. 🪷",
      "ఉగాది పచ్చడిలా — జీవితంలో అన్ని రుచులు సరైన మోతాదులో ఉండాలి.",
    ],
    kn: [
      "ಯುಗಾದಿ ಶುಭಾಶಯಗಳು! ಈ ಹೊಸ ವರ್ಷ ನಿಮಗೆ ಸುಖ, ಸಮೃದ್ಧಿ ತರಲಿ. 🪷",
      "ಯುಗಾದಿ ಬೇವು-ಬೆಲ್ಲದಂತೆ ನಿಮ್ಮ ಬದುಕಿನಲ್ಲಿ ಎಲ್ಲ ರುಚಿಗಳು ಸರಿಯಾದ ಪ್ರಮಾಣದಲ್ಲಿ ಇರಲಿ.",
    ],
  },
  "dasara": {
    en: ["Happy Dasara/Vijayadashami! May goodness win, always. 🌺"],
    hi: ["दशहरा मुबारक! बुराई पर अच्छाई की जीत का ये त्योहार आपको खुशियाँ दे। 🌺"],
    te: ["దసరా శుభాకాంక్షలు! మంచి ఎప్పుడూ గెలవాలి."],
    kn: ["ದಸರಾ ಶುಭಾಶಯಗಳು! ಒಳ್ಳೆಯದು ಕೆಟ್ಟದಿನ ಮೇಲೆ ಗೆಲ್ಲಲಿ."],
    bn: ["শুভ বিজয়া! আসছে বছর আবার হবে।"],
  },
  "sankranti": {
    en: [
      "Happy Sankranti/Uttarayan! May your kites fly high and your days feel light. 🪁",
      "Wishing you a colorful, wind-filled, sweet Sankranti!",
    ],
    hi: ["मकर संक्रांति मुबारक! तुम्हारी पतंग आकाश छुए और दिन मीठे हों। 🪁"],
    gu: ["શુભ ઉત્તરાયણ! તારું જીવન પણ આકાશમાં ઊડતી પતંગ જેવું ઊંચું જાય."],
    te: ["సంక్రాంతి శుభాకాంక్షలు! కొత్త పంట, కొత్త ఆశలు."],
    kn: ["ಸಂಕ್ರಾಂತಿ ಶುಭಾಶಯಗಳು! ಹೊಸ ಬೆಳೆ, ಹೊಸ ಆಶಯಗಳು."],
  },
  "lohri": {
    en: ["Happy Lohri! May the fire burn away the old and bring in the warm. 🔥"],
    pa: [
      "ਲੋਹੜੀ ਦੀਆਂ ਦਿਲੀ ਮੁਬਾਰਕਾਂ! ਇਹ ਅੱਗ ਸਾਰੀਆਂ ਮੁਸ਼ਕਲਾਂ ਸਾੜ ਦੇਵੇ। 🔥",
      "ਰੇਵੜੀ, ਗੱਜਕ ਅਤੇ ਨਵੀਂ ਖੁਸ਼ੀਆਂ — ਹੈਪੀ ਲੋਹੜੀ!",
    ],
  },
  "vaisakhi": {
    en: ["Happy Vaisakhi! New harvest, new hopes, new blessings. 🌾"],
    pa: [
      "ਵਿਸਾਖੀ ਦੀਆਂ ਮੁਬਾਰਕਾਂ! ਨਵੀਂ ਫਸਲ, ਨਵੀਆਂ ਖੁਸ਼ੀਆਂ।",
      "ਵਾਹਿਗੁਰੂ ਦੀਆਂ ਮਿਹਰਾਂ ਤੁਹਾਡੇ ਉੱਤੇ ਬਣੀਆਂ ਰਹਿਣ।",
    ],
  },
  "gurpurab": {
    en: ["Happy Gurpurab! Waheguru's blessings upon you and your family. 🪔"],
    pa: [
      "ਗੁਰਪੁਰਬ ਦੀਆਂ ਲੱਖ ਲੱਖ ਵਧਾਈਆਂ! ਵਾਹਿਗੁਰੂ ਦੀਆਂ ਮਿਹਰਾਂ ਹੋਣ।",
      "ਬਾਬੇ ਨਾਨਕ ਦੀ ਕਿਰਪਾ ਤੁਹਾਡੇ ਘਰ ਉੱਤੇ ਸਦਾ ਬਣੀ ਰਹੇ।",
    ],
  },
  "durga-puja": {
    en: ["Shubho Durga Puja! May Maa's blessings be with you and your family. 🪷"],
    bn: [
      "শুভ দুর্গা পূজা! মা দুর্গা তোমায় ও তোমার পরিবারকে আশীর্বাদ দিন। 🪷",
      "পুজোর আনন্দে ভরে উঠুক তোমার প্রতিটা দিন।",
    ],
  },
  "pohela-boishakh": {
    en: ["Shubho Noboborsho! A new Bengali year, a new beginning."],
    bn: [
      "শুভ নববর্ষ! নতুন বছর তোমায় নতুন আশা নিয়ে আসুক।",
      "পুরনো সব ভুলে, নতুনের আনন্দে ডুবে যাও।",
    ],
  },
  "saraswati": {
    en: ["Sarowsati Puja-r shubhechha! May knowledge and music fill your days. 🪷"],
    bn: ["সরস্বতী পূজার শুভেচ্ছা! মা সরস্বতী তোমায় বিদ্যা ও আশীর্বাদ দিন। 🪷"],
  },
  "kali-puja": {
    en: ["Shubho Kali Puja! May Maa's blessings protect and guide you. 🪔"],
    bn: ["শুভ কালী পূজা! মা কালী তোমায় রক্ষা করুন।"],
  },
  "gudi-padwa": {
    en: ["Shubh Gudi Padwa! Marathi New Year — may it be your best one yet. 🌸"],
    mr: [
      "गुढीपाडव्याच्या हार्दिक शुभेच्छा! नवीन वर्ष तुम्हाला सुख, समृद्धी आणि आरोग्य देवो. 🌸",
      "नव्या वर्षात नव्या संधी, नवीन स्वप्नं आणि भरभराट येवो!",
    ],
  },
  "onam": {
    en: [
      "Happy Onam! May Maveli's visit bring joy, peace, and pookalam to your home. 🌼",
      "Wishing you a grand Onam — full of sadhya, laughter, and togetherness.",
    ],
  },

  // ---------- Everyday variants ----------
  "good-morning": {
    en: [
      "Good morning! Hope your coffee is hot and your day is kinder than yesterday. ☀️",
      "A little sunshine note to start your day. You've got this.",
      "Good morning, you. Sending you a soft landing into today.",
    ],
    hi: [
      "सुप्रभात! आज का दिन मुस्कुराहटों से भरा रहे। ☀️",
      "सूरज की पहली किरण के साथ एक छोटी सी शुभकामना — तुम्हारा दिन बेहतरीन हो।",
    ],
    mr: [
      "शुभ सकाळ! आजचा दिवस तुझ्यासारखाच तेजस्वी होवो. ☀️",
      "सकाळच्या पहिल्या किरणासारखी एक चांगली बातमी — तू आज माझ्या विचारात आहेस.",
    ],
    bn: ["শুভ সকাল! তোমার দিনটা যেন তোমার মতোই সুন্দর হয়। ☀️"],
    gu: ["શુભ સવાર! તારો દિવસ તારી જેમ જ સુંદર જાય. ☀️"],
    pa: ["ਸ਼ੁਭ ਸਵੇਰ! ਤੁਹਾਡਾ ਦਿਨ ਸ਼ਾਨਦਾਰ ਹੋਵੇ।"],
    ta: ["காலை வணக்கம்! உங்கள் நாள் மிகச் சிறப்பாக இருக்கட்டும். ☀️"],
    te: ["శుభోదయం! నీ రోజు నీలాగే అందంగా గడవాలి. ☀️"],
    kn: ["ಶುಭೋದಯ! ನಿಮ್ಮ ದಿನ ಸುಂದರವಾಗಿ ಕಳೆಯಲಿ. ☀️"],
  },
  "good-night": {
    en: [
      "Sleep well. The day was long, but it was yours. See you in the morning. 🌙",
      "Close your eyes, let the day go. Tomorrow is a softer place.",
      "Good night. Wherever you are, may your dreams be kind.",
    ],
    hi: [
      "शुभ रात्रि! दिन भर की थकान आज की नींद में खो जाए। 🌙",
      "चाँद देख कर सो जाओ — कल फिर मिलेंगे।",
    ],
    mr: [
      "शुभ रात्री! आजचा दिवस चांगला गेला, आता गोड झोप लाग. 🌙",
      "डोळे मिटून दिवस सोडून दे. उद्या नवं काहीतरी वाट पाहतंय.",
    ],
    bn: ["শুভ রাত্রি! মিষ্টি স্বপ্ন দেখো।"],
    gu: ["શુભ રાત્રિ! મીઠા સપના આવે."],
    pa: ["ਸ਼ੁਭ ਰਾਤਰੀ! ਮਿੱਠੇ ਸੁਪਨੇ।"],
    ta: ["இனிய இரவு! இனிய கனவுகள் காணுங்கள்."],
    te: ["శుభరాత్రి! మధుర స్వప్నాలు కనండి."],
    kn: ["ಶುಭ ರಾತ್ರಿ! ಸುಂದರ ಕನಸುಗಳು."],
  },
  "sweet-dreams": {
    en: [
      "Sweet dreams. May tonight's dreams be the cozy kind — the ones you don't want to wake up from. ✨",
      "May stars line your sleep and softness lead your morning.",
    ],
    hi: ["मीठे सपने आएँ! सपने में मिलते हैं। ✨"],
  },
  "nice-day": {
    en: [
      "Have a good one. No pressure, no grand plans — just a day that feels like you. 🌼",
      "Sending a little note into your day. Hope it's a gentle one.",
    ],
  },
  "get-well": {
    en: [
      "Rest up. The world will still be here when you're back. Feel better soon. 🌷",
      "Sending you soup, sunlight, and softness. Get well soon.",
      "You're missed, but rest is the best gift you can give yourself right now.",
    ],
    hi: [
      "जल्दी ठीक हो जाओ। तुम्हारे बिना दिन अधूरे लगते हैं। 🌷",
      "थोड़ा आराम करो। बाकी सब बाद में।",
    ],
    mr: ["लवकर बरा/बरी हो. आराम कर, बाकी सगळं नंतर. 🌷"],
    bn: ["দ্রুত সুস্থ হয়ে ওঠো! তোমাকে মিস করছি।"],
    gu: ["જલ્દી સારા થઈ જાઓ! તમને મિસ કરીએ છીએ."],
    pa: ["ਜਲਦੀ ਠੀਕ ਹੋ ਜਾਓ! ਤੁਹਾਡੀ ਯਾਦ ਆ ਰਹੀ ਹੈ।"],
    ta: ["சீக்கிரம் சுகமாக ஆகுங்கள்! உங்களை மிஸ் செய்கிறேன்."],
    te: ["త్వరగా కోలుకోండి! మిమ్మల్ని మిస్ అవుతున్నాను."],
    kn: ["ಬೇಗ ಗುಣಮುಖರಾಗಿ! ನಿಮ್ಮನ್ನು ಮಿಸ್ ಮಾಡುತ್ತಿದ್ದೇನೆ."],
  },
  "congrats": {
    en: [
      "You did it! So proud of you. Wishing you many more of these moments. 🎊",
      "Hard work, quiet hours, and now — a win. Well done!",
      "Celebrate this. You earned it.",
    ],
    hi: [
      "बधाई हो! ये तुम्हारी मेहनत का फल है। 🎊",
      "कर दिखाया तुमने! आगे भी ऐसी ही जीतें मिलें।",
    ],
    mr: ["अभिनंदन! तुझ्या मेहनतीला फळ आलं."],
    bn: ["অভিনন্দন! তোমার পরিশ্রমের ফল।"],
    gu: ["અભિનંદન! તારી મહેનત સફળ થઈ."],
    pa: ["ਵਧਾਈਆਂ! ਤੁਹਾਡੀ ਮਿਹਨਤ ਰੰਗ ਲਿਆਈ।"],
    ta: ["வாழ்த்துக்கள்! உங்கள் உழைப்புக்கான பலன்."],
    te: ["అభినందనలు! నీ కృషికి విజయం."],
    kn: ["ಅಭಿನಂದನೆಗಳು! ನಿಮ್ಮ ಪ್ರಯತ್ನಕ್ಕೆ ಫಲ."],
  },

  // ---------- Love ----------
  "anniversary": {
    en: [
      "Happy anniversary! Another year of us — same love, a little bit wiser. 💞",
      "Here's to the year gone by and every one to come. I'd pick you every time.",
      "One more year together, one more year I get to call you mine.",
    ],
    hi: [
      "सालगिरह मुबारक! एक और साल तुम्हारे साथ — हर दिन पहले से बेहतर। 💞",
      "हम दोनों का ये सफ़र हमेशा ऐसे ही चलता रहे।",
    ],
    mr: ["लग्नाच्या वाढदिवसाच्या हार्दिक शुभेच्छा! आपला प्रवास असाच सुरू राहो. 💞"],
    gu: ["લગ્ન જીવનના શુભ વર્ષ! આપણો સંબંધ એમ જ મજબૂત રહે."],
    pa: ["ਸਾਲਗਿਰਾ ਮੁਬਾਰਕ! ਆਪਣਾ ਸਫ਼ਰ ਇੰਝ ਹੀ ਚੱਲਦਾ ਰਹੇ।"],
  },
};

// Picks a random entry from a pool, avoiding `current` if possible.
const pick = (pool, current) => {
  if (!pool || !pool.length) return null;
  if (pool.length === 1) return pool[0];
  const filtered = current ? pool.filter((p) => p !== current) : pool;
  const src = filtered.length ? filtered : pool;
  return src[Math.floor(Math.random() * src.length)];
};

export const getExample = (category, lang = "en", templateId, current) => {
  // 1. Occasion-specific pool (most specific — e.g. Diwali, Rose Day, Good Morning)
  const occasion = detectOccasion(templateId);
  if (occasion && OCCASION_EXAMPLES[occasion]) {
    const pool = OCCASION_EXAMPLES[occasion];
    const langPool = pool[lang] || pool.en;
    const picked = pick(langPool, current);
    if (picked) return picked;
  }
  // 2. Category × lang fallback
  const categoryPool = EXAMPLES[category] || EXAMPLES.everyday;
  const langPool = categoryPool[lang] || categoryPool.en || EXAMPLES.everyday.en;
  return pick(langPool, current) || langPool[0];
};
