// script.js
const translations = {
    // Navigation
    home: "होम",
    login: "लॉगिन",
    
    // Hero section
    "hero-title": "झारखंड के छुपे हुए रत्नों की खोज करें",
    "hero-subtext": "झारखंड की समृद्ध संस्कृति, आश्चर्यजनक परिदृश्य और जीवंत परंपराओं का अन्वेषण करें। आपका रोमांच यहाँ से शुरू होता है!",
    explore: "अभी अन्वेषण करें",
    
    // Attractions section
    "attractions-title": "झारखंड के प्रमुख आकर्षण",
    
    // Static text translations
    staticTexts: {
        "Things to do": "करने योग्य काम",
        "Ai Planner": "एआई योजनाकार",
        "Guides": "गाइड",
        "Map": "मानचित्र",
        "Handpicked destinations — quick access to must-visit places.": "चुनिंदा गंतव्य — अवश्य देखने योग्य स्थानों तक त्वरित पहुंच।",
        "See all destinations →": "सभी गंतव्य देखें →",
        "View More": "और देखें",
        "Plan Trip": "यात्रा की योजना बनाएं",
        "Find Guide": "गाइड खोजें",
        "Nearby Events": "आस-पास की घटनाएं",
        "Find Stay": "ठहरने की जगह खोजें",
        "View All Destinations": "सभी गंतव्य देखें",
        "Why Visit Jharkhand?": "झारखंड क्यों आएं?",
        "A land of nature, spirituality, and culture": "प्रकृति, आध्यात्म और संस्कृति की भूमि",
        
        // Card descriptions
        "A tranquil hill station known for breathtaking sunrises, dense forests, and scenic viewpoints.": "मनोरम सूर्योदय, घने जंगल और प्राकृतिक दृश्यों के लिए प्रसिद्ध एक शांत पहाड़ी स्टेशन।",
        "One of India's premiere wildlife reserves — safaris, rich biodiversity, and tribal culture nearby.": "भारत के प्रमुख वन्यजीव अभयारण्यों में से एक — सफारी, समृद्ध जैव विविधता और आस-पास की आदिवासी संस्कृति।",
        "A dramatic waterfall on the Subarnarekha River — perfect for nature lovers and photographers.": "सुवर्णरेखा नदी पर एक नाटकीय झरना — प्रकृति प्रेमियों और फोटोग्राफरों के लिए एकदम सही।",
        "A major pilgrimage destination with historic temples, bustling bazaars, and spiritual festivals.": "ऐतिहासिक मंदिरों, हलचल भरे बाज़ारों और आध्यात्मिक त्योहारों के साथ एक प्रमुख तीर्थ स्थल।",
        "Stunning green valley with meadows, hills, and a reservoir.": "घास के मैदान, पहाड़ियों और जलाशय के साथ आश्चर्यजनक हरी घाटी।",
        "A famous Shakti Peeth and confluence of rivers for spiritual seekers.": "आध्यात्मिक साधकों के लिए प्रसिद्ध शक्तिपीठ और नदियों का संगम।",
        "The highest peak in Jharkhand and an important Jain pilgrimage site.": "झारखंड की सबसे ऊंची चोटी और एक महत्वपूर्ण जैन तीर्थ स्थल।",
        "Beautiful waterfall surrounded by dense forests, perfect for nature lovers.": "घने जंगलों से घिरा खूबसूरत झरना, प्रकृति प्रेमियों के लिए एकदम सही।",
        
        // Why Jharkhand cards
        "Eco Tourism": "पारिस्थितिक पर्यटन",
        "Scenic hills, lush forests, and breathtaking waterfalls.": "प्राकृतिक पहाड़ियां, हरे-भरे जंगल और मनमोहक झरने।",
        "Spiritual Sites": "आध्यात्मिक स्थल",
        "Deoghar, Parasnath, and Rajrappa—sacred destinations for all.": "देवघर, पारसनाथ और राजरप्पा—सभी के लिए पवित्र गंतव्य।",
        "Cultural Heritage": "सांस्कृतिक विरासत",
        "Experience vibrant tribal traditions, festivals, and dances.": "जीवंत आदिवासी परंपराओं, त्योहारों और नृत्यों का अनुभव करें।",
        "Wildlife & Adventure": "वन्यजीव और रोमांच",
        "Betla National Park, jungle safaris, and trekking trails.": "बेतला राष्ट्रीय उद्यान, जंगल सफारी और ट्रेकिंग ट्रेल्स।",
        "Handicrafts & Art": "हस्तशिल्प और कला",
        "Discover tribal handicrafts, Sohrai art, and Paitkar paintings.": "आदिवासी हस्तशिल्प, सोहराई कला और पैतकर चित्रकारी की खोज करें।",
        "Festivals": "त्योहार",
        "Celebrate Sarhul, Karma, and Chhath with local communities.": "स्थानीय समुदायों के साथ सरहुल, कर्मा और छठ मनाएं।",
        
        // Place names
        "Netarhat": "नेतरहाट",
        "Betla National Park": "बेतला राष्ट्रीय उद्यान",
        "Hundru Falls": "हुंड्रू फॉल्स",
        "Deoghar": "देवघर",
        "Patratu Valley": "पत्रातू घाटी",
        "Rajrappa Temple": "राजरप्पा मंदिर",
        "Parasnath Hill": "पारसनाथ पहाड़ी",
        "Hirni Falls": "हिरणी फॉल्स"
    }
};

// Current language state
let currentLanguage = 'english';

// Function to translate content
function translatePage() {
    const hindiBtn = document.querySelector('.multilingual-btn');
    
    if (currentLanguage === 'english') {
        // Translate to Hindi
        translateToHindi();
        hindiBtn.textContent = 'English';
        currentLanguage = 'hindi';
    } else {
        // Translate back to English
        translateToEnglish();
        hindiBtn.textContent = 'हिंदी';
        currentLanguage = 'english';
    }
}

function translateToHindi() {
    // Translate elements with data-key attributes
    Object.keys(translations).forEach(key => {
        if (key !== 'staticTexts') {
            const element = document.querySelector(`[data-key="${key}"]`);
            if (element) {
                element.textContent = translations[key];
            }
        }
    });
    
    // Translate static text elements
    Object.keys(translations.staticTexts).forEach(englishText => {
        const hindiText = translations.staticTexts[englishText];
        
        // Find all text nodes and replace
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            if (node.parentElement && 
                !node.parentElement.classList.contains('multilingual-btn') &&
                node.nodeValue.trim() === englishText) {
                textNodes.push(node);
            }
        }
        
        textNodes.forEach(textNode => {
            textNode.nodeValue = hindiText;
        });
    });
}

function translateToEnglish() {
    // Restore original English text
    location.reload(); // Simple way to restore original content
}

// Store original content for restoration
let originalContent = {};

function storeOriginalContent() {
    // Store data-key elements
    Object.keys(translations).forEach(key => {
        if (key !== 'staticTexts') {
            const element = document.querySelector(`[data-key="${key}"]`);
            if (element) {
                originalContent[key] = element.textContent;
            }
        }
    });
}

// Better approach - store and restore without page reload
function translateToEnglishBetter() {
    // Restore elements with data-key attributes
    Object.keys(originalContent).forEach(key => {
        const element = document.querySelector(`[data-key="${key}"]`);
        if (element && originalContent[key]) {
            element.textContent = originalContent[key];
        }
    });
    
    // Restore static text elements
    Object.keys(translations.staticTexts).forEach(englishText => {
        const hindiText = translations.staticTexts[englishText];
        
        // Find all text nodes and replace back
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            if (node.parentElement && 
                !node.parentElement.classList.contains('multilingual-btn') &&
                node.nodeValue.trim() === hindiText) {
                textNodes.push(node);
            }
        }
        
        textNodes.forEach(textNode => {
            textNode.nodeValue = englishText;
        });
    });
    
    // Restore navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    const originalNavTexts = ['Home', 'Things to do', 'Ai Planner', 'Guides', 'Map'];
    navLinks.forEach((link, index) => {
        if (originalNavTexts[index]) {
            link.textContent = originalNavTexts[index];
        }
    });
}

// Initialize the translation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Store original content
    storeOriginalContent();
    
    // Add event listener to Hindi button
    const hindiBtn = document.querySelector('.multilingual-btn');
    if (hindiBtn) {
        hindiBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentLanguage === 'english') {
                translateToHindi();
                hindiBtn.textContent = 'English';
                currentLanguage = 'hindi';
            } else {
                translateToEnglishBetter();
                hindiBtn.textContent = 'हिंदी';
                currentLanguage = 'english';
            }
        });
    }
});

// Alternative simpler approach using replace method
function simpleTranslation() {
    const hindiBtn = document.querySelector('.multilingual-btn');
    
    // Define translation pairs
    const translationPairs = [
        ['Home', 'होम'],
        ['Things to do', 'करने योग्य काम'],
        ['Ai Planner', 'एआई योजनाकार'],
        ['Guides', 'गाइड'],
        ['Map', 'मानचित्र'],
        ['Login', 'लॉगिन'],
        ['Discover the Hidden Gems of Jharkhand', 'झारखंड के छुपे हुए रत्नों की खोज करें'],
        ['Explore the rich culture, stunning landscapes, and vibrant traditions of Jharkhand. Your adventure starts here!', 'झारखंड की समृद्ध संस्कृति, आश्चर्यजनक परिदृश्य और जीवंत परंपराओं का अन्वेषण करें। आपका रोमांच यहाँ से शुरू होता है!'],
        ['Explore Now', 'अभी अन्वेषण करें'],
        ['Top Attractions in Jharkhand', 'झारखंड के प्रमुख आकर्षण']
    ];
    
    if (currentLanguage === 'english') {
        // Translate to Hindi
        translationPairs.forEach(([english, hindi]) => {
            document.body.innerHTML = document.body.innerHTML.replace(new RegExp(english, 'g'), hindi);
        });
        hindiBtn.textContent = 'English';
        currentLanguage = 'hindi';
    } else {
        // Translate back to English
        translationPairs.forEach(([english, hindi]) => {
            document.body.innerHTML = document.body.innerHTML.replace(new RegExp(hindi, 'g'), english);
        });
        hindiBtn.textContent = 'हिंदी';
        currentLanguage = 'english';
    }
  
   

