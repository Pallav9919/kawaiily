# Hindi (hi) Translation Reference

## Script
Devanagari. `font-devanagari` (Tiro Devanagari Hindi).

## Greetings (already in i18n.js)
- For X: `{x} के लिए`
- Dear X: `प्रिय {x},`
- Hello: `नमस्ते,`

## Cover titles by category

### Love
- तुम हो तो सब है — "You make everything complete"
- तुम्हीं मेरी दुनिया — "You're my world"
- तुम्हारे साथ हमेशा — "Always with you"
- दिल तुम्हारा है — "My heart is yours"

### Valentine's Week
- Rose Day: गुलाब की शुभकामनाएँ / रोज डे मुबारक
- Propose Day: क्या तुम मेरी/मेरे बनोगे/बनोगी?
- Chocolate Day: चॉकलेट डे मुबारक
- Teddy Day: टेडी डे शुभकामनाएँ
- Promise Day: तुम्हें वादा है
- Hug Day: एक झप्पी तुम्हारे नाम
- Kiss Day: किस डे शुभ हो
- Valentine's: वैलेंटाइन्स डे मुबारक / तुम्हें प्यार से

### Birthday
- जन्मदिन मुबारक — (most common, casual-friendly)
- जन्मदिन की हार्दिक शुभकामनाएँ — (formal/heartfelt)
- सालगिरह मुबारक — (wedding anniversary context; shared category but inherited ambiguity)
- बधाई हो, जन्मदिन मुबारक! — ("Congrats, happy birthday!")

### Friendship
- मेरे यार के नाम — "In the name of my friend"
- सच्चे दोस्त के लिए — "For a true friend"
- दोस्ती सलामत रहे — "May our friendship last"

### Festivals
- Diwali: शुभ दीपावली / दिवाली मुबारक
- Holi: होली मुबारक / बुरा ना मानो होली है
- Eid: ईद मुबारक
- Raksha Bandhan: रक्षा बंधन मुबारक
- Ganesh Chaturthi: गणपति बाप्पा मोरया
- Janmashtami: जय श्री कृष्ण / जन्माष्टमी मुबारक
- Navratri: नवरात्रि की शुभकामनाएँ
- Christmas: क्रिसमस मुबारक
- New Year: नव वर्ष मुबारक / साल मुबारक
- Karva Chauth: करवा चौथ मुबारक
- Bhai Dooj: भाई दूज मुबारक

### Everyday
- Good Morning: सुप्रभात / शुभ प्रभात
- Good Night: शुभ रात्रि / शुभ रात
- Have a Nice Day: आपका दिन शुभ हो
- Get Well Soon: जल्दी ठीक हो जाओ
- Congrats: बधाई हो!
- Sweet Dreams: मीठे सपने

### Thank You
- धन्यवाद — formal
- शुक्रिया — common
- तहे दिल से शुक्रिया — "heartfelt thanks"

### Miss You
- तुम्हारी याद आती है — "I miss you"
- तुम्हीं याद आते हो — "Only you come to mind"
- बहुत याद आते हो — "I miss you a lot"

### Sorry
- मुझे माफ़ कर दो — "Forgive me"
- सॉरी, मैं ग़लत था/थी — "Sorry, I was wrong"
- क्षमा कर दो — formal

## Sample messages — see examples.js (already has strong Hindi coverage)

## Templates to add (filling gaps from current 9 → ~25)

Current Hindi templates before this pass:
- love-tum-ho, bday-janamdin, friend-yaar, fest-holi, fest-rakhi, fest-ganesh, fest-janmashtami, fest-navratri, sorry-maafi (9)

Need to add:
- Love: love, anniversary, "tum se hi"
- Valentine's week: rose, propose, chocolate, hug, valentine (5)
- Birthday: hardik-shubh, salgirah, bday-wish (3)
- Friendship: pakka-dost, dosti-salamat (2)
- Festival: diwali (richer), eid, karwa-chauth, bhai-dooj, christmas, new-year (6)
- Everyday: suprabhat, shubh-ratri, sweet-dreams, get-well, congrats (5)
- Thanks: shukriya, dhanyavad (2)
- Miss you: thinking-of-you, yaad (2)
- Sorry: kshama (1)

## Palette conventions to follow
- love / valentine's week: rose, lavender, amber — NEVER midnight
- birthday: sunset, indigo, lavender — NEVER midnight
- festival: diya, amber, holi, sunset (match festival tone)
- friendship: emerald, mint, sunset
- everyday good-night: midnight OK
- everyday good-morning: sunset
- miss: lavender or indigo (NOT midnight — reads as goodnight)
- sorry: lavender (soft) — avoid rose (too celebratory)
- thanks: emerald, mint, sunset
