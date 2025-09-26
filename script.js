// Enhanced script.js with complete Hindi translation coverage
const translations = {
  // Data-key translations (elements with data-key attributes)
  home: "होम",
  login: "लॉगिन", 
  "hero-title": "झारखंड के छुपे हुए रत्नों की खोज करें",
  "hero-subtext": "झारखंड की समृद्ध संस्कृति, आश्चर्यजनक परिदृश्य और जीवंत परंपराओं का अन्वेषण करें। आपका रोमांच यहाँ से शुरू होता है!",
  explore: "अभी अन्वेषण करें",
  "attractions-title": "झारखंड के प्रमुख आकर्षण",

  // Static text translations (exact phrase matching)
  staticTexts: {
    // Navigation items
    "Home": "होम",
    "Homestay": "होमस्टे",
    "AI Planner": "एआई योजनाकार",
    "Guides": "गाइड",
    "Map": "मानचित्र",
    "Login": "लॉगिन",
    "SOS alert": "एसओएस अलर्ट",

    // Section content
    "Handpicked destinations — quick access to must-visit places.": "चुनिंदा गंतव्य — अवश्य देखने योग्य स्थानों तक त्वरित पहुंच।",
    "See all destinations →": "सभी गंतव्य देखें →",
    
    // Button texts
    "View More": "और देखें",
    "Plan Trip": "यात्रा की योजना बनाएं", 
    "Find Guide": "गाइड खोजें",
    "Nearby Events": "आस-पास की घटनाएं",
    "Find Stay": "ठहरने की जगह खोजें",
    "View All Destinations": "सभी गंतव्य देखें",
    "Explore Now": "अभी अन्वेषण करें",

    // Section headings
    "Top Attractions in Jharkhand": "झारखंड के प्रमुख आकर्षण",
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
    "Celebrate Sarhul, Karma, and Chhath with local communities.": "स्थानीय समुदायों के साथ सरहुल, कर्मा और छठ मनाएं।"
  }
};

// State management
let currentLanguage = 'english';
const originalTextNodes = new Map();
const originalElementTexts = new Map();

// Utility functions
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function isExcludedElement(element) {
  if (!element) return true;
  
  const excludedTags = ['script', 'style', 'noscript', 'iframe'];
  const excludedClasses = ['multilingual-btn', 'sos-button'];
  
  return excludedTags.includes(element.tagName.toLowerCase()) ||
         excludedClasses.some(cls => element.classList.contains(cls));
}

// Enhanced text collection
function collectAllTexts() {
  // Clear previous collections
  originalTextNodes.clear();
  originalElementTexts.clear();

  // Collect text nodes
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (isExcludedElement(parent)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    },
    false
  );

  let node;
  while (node = walker.nextNode()) {
    if (!originalTextNodes.has(node)) {
      originalTextNodes.set(node, node.nodeValue);
    }
  }

  // Collect elements with text content (for complete elements like buttons, headings)
  const allElements = document.querySelectorAll('*');
  allElements.forEach(el => {
    if (isExcludedElement(el)) return;
    
    // Store original textContent for elements that have direct text
    if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
      const text = el.textContent.trim();
      if (text && !originalElementTexts.has(el)) {
        originalElementTexts.set(el, text);
      }
    }
  });
}

// Translation functions
function translateDataKeyElements() {
  Object.keys(translations).forEach(key => {
    if (key === 'staticTexts') return;
    
    const elements = document.querySelectorAll(`[data-key="${key}"]`);
    elements.forEach(el => {
      if (el && !isExcludedElement(el)) {
        el.textContent = translations[key];
      }
    });
  });
}

function translateStaticTexts() {
  // Method 1: Replace in text nodes
  for (const [node, original] of originalTextNodes.entries()) {
    if (isExcludedElement(node.parentElement)) continue;
    
    let newVal = original; // Start with original text
    
    // Sort by length (longest first) to avoid partial replacements
    const sortedKeys = Object.keys(translations.staticTexts)
      .sort((a, b) => b.length - a.length);
    
    sortedKeys.forEach(englishText => {
      const hindiText = translations.staticTexts[englishText];
      const regex = new RegExp(escapeRegExp(englishText), 'gi');
      newVal = newVal.replace(regex, hindiText);
    });
    
    if (newVal !== node.nodeValue) {
      node.nodeValue = newVal;
    }
  }

  // Method 2: Replace complete element texts
  for (const [element, original] of originalElementTexts.entries()) {
    if (isExcludedElement(element)) continue;
    
    const hindiTranslation = translations.staticTexts[original];
    if (hindiTranslation) {
      element.textContent = hindiTranslation;
    }
  }
}

function translateSpecificElements() {
  // Handle navigation links
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (!isExcludedElement(link)) {
      const text = link.textContent.trim();
      if (translations.staticTexts[text]) {
        link.textContent = translations.staticTexts[text];
      }
    }
  });

  // Handle buttons
  document.querySelectorAll('a.btn, button').forEach(btn => {
    if (!isExcludedElement(btn)) {
      const text = btn.textContent.trim();
      if (translations.staticTexts[text]) {
        btn.textContent = translations.staticTexts[text];
      }
    }
  });

  // Handle headings
  document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
    if (!isExcludedElement(heading)) {
      const text = heading.textContent.trim();
      if (translations.staticTexts[text]) {
        heading.textContent = translations.staticTexts[text];
      }
    }
  });

  // Handle card titles and descriptions
  document.querySelectorAll('.card-title, .card-desc').forEach(cardEl => {
    if (!isExcludedElement(cardEl)) {
      const text = cardEl.textContent.trim();
      if (translations.staticTexts[text]) {
        cardEl.textContent = translations.staticTexts[text];
      }
    }
  });
}

// Restoration functions
function restoreDataKeyElements() {
  Object.keys(translations).forEach(key => {
    if (key === 'staticTexts') return;
    
    const elements = document.querySelectorAll(`[data-key="${key}"]`);
    elements.forEach(el => {
      if (el) {
        // Find original text nodes within this element
        for (const child of el.childNodes) {
          if (child.nodeType === Node.TEXT_NODE && originalTextNodes.has(child)) {
            child.nodeValue = originalTextNodes.get(child);
          }
        }
      }
    });
  });
}

function restoreAllTexts() {
  // Restore text nodes
  for (const [node, original] of originalTextNodes.entries()) {
    node.nodeValue = original;
  }

  // Restore element texts
  for (const [element, original] of originalElementTexts.entries()) {
    element.textContent = original;
  }
}

// Main translation functions
function translateToHindi() {
  console.log('Translating to Hindi...');
  
  translateDataKeyElements();
  translateStaticTexts();
  translateSpecificElements();

  // Update language toggle button
  const toggle = document.querySelector('.multilingual-btn');
  if (toggle && !isExcludedElement(toggle)) {
    toggle.textContent = 'English';
  }

  currentLanguage = 'hindi';
  console.log('Translation to Hindi completed');
}

function translateToEnglish() {
  console.log('Restoring to English...');
  
  restoreDataKeyElements();
  restoreAllTexts();

  // Restore language toggle button
  const toggle = document.querySelector('.multilingual-btn');
  if (toggle) {
    toggle.textContent = 'हिंदी';
  }

  currentLanguage = 'english';
  console.log('Restoration to English completed');
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  console.log('Initializing translation system...');
  
  // Collect all original texts
  collectAllTexts();
  
  // Set up toggle button
  const toggleBtn = document.querySelector('.multilingual-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      if (currentLanguage === 'english') {
        translateToHindi();
      } else {
        translateToEnglish();
      }
    });
  }

  console.log('Translation system initialized');
});

// Debug function to check what's being collected
function debugCollectedTexts() {
  console.log('Original Text Nodes:', originalTextNodes);
  console.log('Original Element Texts:', originalElementTexts);
  console.log('Current Language:', currentLanguage);
}
