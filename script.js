// Enhanced translation script with comprehensive Hindi translations
const translations = {
  // Navigation and UI elements
  "Home": "होम",
  "Homestay": "होमस्टे", 
  "AI Planner": "एआई योजनाकार",
  "Guides": "गाइड",
  "Map": "मानचित्र",
  "Login": "लॉगिन",
  "SOS alert": "एसओएस अलर्ट",
  "हिंदी": "English",
  "English": "हिंदी",

  // Hero section
  "Discover the Hidden Gems of Jharkhand": "झारखंड के छुपे हुए रत्नों की खोज करें",
  "Explore the rich culture, stunning landscapes, and vibrant traditions of Jharkhand. Your adventure starts here!": "झारखंड की समृद्ध संस्कृति, आश्चर्यजनक परिदृश्य और जीवंत परंपराओं का अन्वेषण करें। आपका रोमांच यहाँ से शुरू होता है!",
  "Explore Now": "अभी अन्वेषण करें",

  // Section headings
  "Top Attractions in Jharkhand": "झारखंड के प्रमुख आकर्षण",
  "Handpicked destinations — quick access to must-visit places.": "चुनिंदा गंतव्य — अवश्य देखने योग्य स्थानों तक त्वरित पहुंच।",
  "See all destinations →": "सभी गंतव्य देखें →",
  "View All Destinations": "सभी गंतव्य देखें",
  "Why Visit Jharkhand?": "झारखंड क्यों आएं?",
  "A land of nature, spirituality, and culture": "प्रकृति, आध्यात्म और संस्कृति की भूमि",

  // Place names
  "Netarhat": "नेतरहाट",
  "Betla National Park": "बेतला राष्ट्रीय उद्यान",
  "Hundru Falls": "हुंड्रू फॉल्स", 
  "Deoghar": "देवघर",
  "Patratu Valley": "पत्रातू घाटी",
  "Rajrappa Temple": "राजरप्पा मंदिर",
  "Parasnath Hill": "पारसनाथ पहाड़ी",
  "Hirni Falls": "हिरणी फॉल्स",

  // Descriptions
  "A tranquil hill station known for breathtaking sunrises, dense forests, and scenic viewpoints.": "मनोरम सूर्योदय, घने जंगल और प्राकृतिक दृश्यों के लिए प्रसिद्ध एक शांत पहाड़ी स्टेशन।",
  "One of India's premiere wildlife reserves — safaris, rich biodiversity, and tribal culture nearby.": "भारत के प्रमुख वन्यजीव अभयारण्यों में से एक — सफारी, समृद्ध जैव विविधता और आस-पास की आदिवासी संस्कृति।",
  "A dramatic waterfall on the Subarnarekha River — perfect for nature lovers and photographers.": "सुवर्णरेखा नदी पर एक नाटकीय झरना — प्रकृति प्रेमियों और फोटोग्राफरों के लिए एकदम सही।",
  "A major pilgrimage destination with historic temples, bustling bazaars, and spiritual festivals.": "ऐतिहासिक मंदिरों, हलचल भरे बाज़ारों और आध्यात्मिक त्योहारों के साथ एक प्रमुख तीर्थ स्थल।",
  "Stunning green valley with meadows, hills, and a reservoir.": "घास के मैदान, पहाड़ियों और जलाशय के साथ आश्चर्यजनक हरी घाटी।",
  "A famous Shakti Peeth and confluence of rivers for spiritual seekers.": "आध्यात्मिक साधकों के लिए प्रसिद्ध शक्तिपीठ और नदियों का संगम।",
  "The highest peak in Jharkhand and an important Jain pilgrimage site.": "झारखंड की सबसे ऊंची चोटी और एक महत्वपूर्ण जैन तीर्थ स्थल।",
  "Beautiful waterfall surrounded by dense forests, perfect for nature lovers.": "घने जंगलों से घिरा खूबसूरत झरना, प्रकृति प्रेमियों के लिए एकदम सही।",

  // Action buttons
  "View More": "और देखें",
  "Plan Trip": "यात्रा की योजना बनाएं",
  "Find Guide": "गाइड खोजें", 
  "Nearby Events": "आस-पास की घटनाएं",
  "Find Stay": "ठहरने की जगह खोजें",

  // Why Jharkhand section
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
  "Celebrate Sarhul, Karma, and Chhath with local communities.": "स्थानीय समुदायों के साथ सरहुल, कर्मा और छठ मनाएं।"
};

// State management
let currentLanguage = 'english';
const originalContents = new Map();

// Utility functions
function isExcludedElement(element) {
  if (!element) return true;
  
  const excludedSelectors = [
    'script', 'style', 'noscript', 'iframe',
    '.sos-button', 'video', 'source'
  ];
  
  return excludedSelectors.some(selector => {
    if (selector.startsWith('.')) {
      return element.classList && element.classList.contains(selector.slice(1));
    }
    return element.tagName && element.tagName.toLowerCase() === selector;
  });
}

function storeOriginalContent(element) {
  if (!originalContents.has(element)) {
    originalContents.set(element, element.textContent.trim());
  }
}

function translateElement(element) {
  if (isExcludedElement(element)) return false;
  
  const text = element.textContent.trim();
  if (!text) return false;
  
  // Store original content
  storeOriginalContent(element);
  
  // Check for exact translation
  if (translations[text]) {
    element.textContent = translations[text];
    return true;
  }
  
  // Check for partial translations (for text nodes with mixed content)
  let translatedText = text;
  let hasTranslation = false;
  
  // Sort by length (longest first) to avoid partial replacements
  const sortedKeys = Object.keys(translations).sort((a, b) => b.length - a.length);
  
  for (const englishText of sortedKeys) {
    if (text.includes(englishText)) {
      translatedText = translatedText.replace(new RegExp(englishText, 'g'), translations[englishText]);
      hasTranslation = true;
    }
  }
  
  if (hasTranslation) {
    element.textContent = translatedText;
    return true;
  }
  
  return false;
}

function translateAllElements() {
  console.log('Starting Hindi translation...');
  
  // Get all text-containing elements
  const allElements = document.querySelectorAll('*');
  
  allElements.forEach(element => {
    if (isExcludedElement(element)) return;
    
    // Only translate elements that contain direct text (no child elements with text)
    if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
      translateElement(element);
    }
    // Also handle elements with only text content and no nested elements
    else if (element.children.length === 0 && element.textContent.trim()) {
      translateElement(element);
    }
  });
  
  // Handle data-key elements specifically
  const dataKeyElements = document.querySelectorAll('[data-key]');
  dataKeyElements.forEach(element => {
    const key = element.getAttribute('data-key');
    const keyTranslations = {
      'Home': 'होम',
      'Homestay': 'होमस्टे',
      'AI Planner': 'एआई योजनाकार', 
      'Guides': 'गाइड',
      'Map': 'मानचित्र',
      'login': 'लॉगिन',
      'hero-title': 'झारखंड के छुपे हुए रत्नों की खोज करें',
      'hero-subtext': 'झारखंड की समृद्ध संस्कृति, आश्चर्यजनक परिदृश्य और जीवंत परंपराओं का अन्वेषण करें। आपका रोमांच यहाँ से शुरू होता है!',
      'explore': 'अभी अन्वेषण करें',
      'attractions-title': 'झारखंड के प्रमुख आकर्षण'
    };
    
    if (keyTranslations[key]) {
      storeOriginalContent(element);
      element.textContent = keyTranslations[key];
    }
  });
  
  console.log('Hindi translation completed');
}

function restoreToEnglish() {
  console.log('Restoring to English...');
  
  // Restore all elements from stored original content
  originalContents.forEach((originalText, element) => {
    if (element && element.parentNode) {
      element.textContent = originalText;
    }
  });
  
  console.log('English restoration completed');
}

function toggleLanguage() {
  const toggleBtn = document.querySelector('.multilingual-btn');
  
  if (currentLanguage === 'english') {
    translateAllElements();
    currentLanguage = 'hindi';
    if (toggleBtn) toggleBtn.textContent = 'English';
  } else {
    restoreToEnglish();
    currentLanguage = 'english';
    if (toggleBtn) toggleBtn.textContent = 'हिंदी';
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing translation system...');
  
  // Set up the language toggle button
  const toggleBtn = document.querySelector('.multilingual-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      toggleLanguage();
    });
  }
  
  // Store all original content on page load
  const allElements = document.querySelectorAll('*');
  allElements.forEach(element => {
    if (!isExcludedElement(element) && element.textContent.trim()) {
      if ((element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) ||
          (element.children.length === 0 && element.textContent.trim())) {
        storeOriginalContent(element);
      }
    }
  });
  
  console.log('Translation system ready!');
});

// Debug function
function debugTranslation() {
  console.log('Current Language:', currentLanguage);
  console.log('Stored Original Contents:', originalContents);
  console.log('Available Translations:', Object.keys(translations).length);
}
