// script.js
// Robust English <-> Hindi toggle using data-key + smart text-node replacement.
// Safe (no innerHTML replace), preserves original text, works bi-directionally.

const translations = {
  // keyed translations (prefer using data-key attributes in HTML)
  home: "होम",
  login: "लॉगिन",
  "hero-title": "झारखंड के छुपे हुए रत्नों की खोज करें",
  "hero-subtext": "झारखंड की समृद्ध संस्कृति, आश्चर्यजनक परिदृश्य और जीवंत परंपराओं का अन्वेषण करें। आपका रोमांच यहाँ से शुरू होता है!",
  explore: "अभी अन्वेषण करें",
  "attractions-title": "झारखंड के प्रमुख आकर्षण",

  // static text map (exact phrases or longer sentences)
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
    // card descriptions
    "A tranquil hill station known for breathtaking sunrises, dense forests, and scenic viewpoints.": "मनोरम सूर्योदय, घने जंगल और प्राकृतिक दृश्यों के लिए प्रसिद्ध एक शांत पहाड़ी स्टेशन।",
    "One of India's premiere wildlife reserves — safaris, rich biodiversity, and tribal culture nearby.": "भारत के प्रमुख वन्यजीव अभयारण्यों में से एक — सफारी, समृद्ध जैव विविधता और आस-पास की आदिवासी संस्कृति।",
    "A dramatic waterfall on the Subarnarekha River — perfect for nature lovers and photographers.": "सुवर्णरेखा नदी पर एक नाटकीय झरना — प्रकृति प्रेमियों और फोटोग्राफरों के लिए एकदम सही।",
    "A major pilgrimage destination with historic temples, bustling bazaars, and spiritual festivals.": "ऐतिहासिक मंदिरों, हलचल भरे बाज़ारों और आध्यात्मिक त्योहारों के साथ एक प्रमुख तीर्थ स्थल।",
    "Stunning green valley with meadows, hills, and a reservoir.": "घास के मैदान, पहाड़ियों और जलाशय के साथ आश्चर्यजनक हरी घाटी।",
    "A famous Shakti Peeth and confluence of rivers for spiritual seekers.": "आध्यात्मिक साधकों के लिए प्रसिद्ध शक्तिपीठ और नदियों का संगम।",
    "The highest peak in Jharkhand and an important Jain pilgrimage site.": "झारखंड की सबसे ऊंची चोटी और एक महत्वपूर्ण जैन तीर्थ स्थल।",
    "Beautiful waterfall surrounded by dense forests, perfect for nature lovers.": "घने जंगलों से घिरा खूबसूरत झरना, प्रकृति प्रेमियों के लिए एकदम सही।",
    // why-jharkhand cards
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
    // place names
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

// state
let currentLanguage = 'english';

// storage for original node texts so we can restore accurately
const originalTextNodes = new Map();

// utility: escape regex special chars
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Walk DOM and store all text nodes (except inside script/style/iframe)
function collectTextNodes() {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName.toLowerCase();
        if (['script', 'style', 'noscript', 'iframe'].includes(tag)) return NodeFilter.FILTER_REJECT;
        // exclude elements that are part of the language toggle itself
        if (parent.classList.contains('multilingual-btn')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    },
    false
  );

  let node;
  while (node = walker.nextNode()) {
    // store original text if not already stored
    if (!originalTextNodes.has(node)) {
      originalTextNodes.set(node, node.nodeValue);
    }
  }
}

// Translate elements that have data-key attributes (preferred)
function translateDataKeyToHindi() {
  Object.keys(translations).forEach(key => {
    if (key === 'staticTexts') return;
    const el = document.querySelector(`[data-key="${key}"]`);
    if (el) el.textContent = translations[key];
  });
}

// Restore data-key elements back to original (if we stored them)
function restoreDataKeyToEnglish() {
  Object.keys(translations).forEach(key => {
    if (key === 'staticTexts') return;
    const el = document.querySelector(`[data-key="${key}"]`);
    // if original content stored in HTML, prefer restoring original textContent
    if (el) {
      // if we stored original via originalTextNodes for inner text nodes, try to restore those nodes
      // fallback: use a mapping from keys -> english by reading the attribute 'data-key' usage in HTML (if you want)
      // For simplicity, reload the original string that was in the static HTML by checking dataset fallback:
      // If page author had text in English initially, we can't guarantee retrieval other than stored nodes.
      // So we will attempt to find a saved text node inside el and restore it.
      for (const child of el.childNodes) {
        if (child.nodeType === Node.TEXT_NODE && originalTextNodes.has(child)) {
          child.nodeValue = originalTextNodes.get(child);
        }
      }
    }
  });
}

// Replace occurrences of exact English phrases inside stored text nodes with Hindi
function applyStaticTextTranslationsToHindi() {
  // For each stored text node, try to replace any English phrase found
  for (const [node, original] of originalTextNodes.entries()) {
    let newVal = node.nodeValue;
    Object.keys(translations.staticTexts).forEach(eng => {
      const hindi = translations.staticTexts[eng];
      // Use global replace with word/phrase escaping
      const re = new RegExp(escapeRegExp(eng), 'g');
      newVal = newVal.replace(re, hindi);
    });
    if (newVal !== node.nodeValue) node.nodeValue = newVal;
  }
}

// Restore static text nodes back to original using stored originals
function restoreStaticTextNodesToEnglish() {
  for (const [node, original] of originalTextNodes.entries()) {
    // Only restore if current value differs from original and matches some translated value
    if (node.nodeValue !== original) {
      node.nodeValue = original;
    }
  }
}

// Helper to translate nav links or other elements that don't use data-key but are stable
function translateNavLinksToHindi() {
  const navMap = [
    { selector: '.nav-links a:nth-child(1)', to: 'होम', from: 'Home' },
    // add more if your markup order changes
  ];
  navMap.forEach(item => {
    const el = document.querySelector(item.selector);
    if (el) {
      // only replace if current text matches 'from' (prevents accidental overwrite)
      if (el.textContent.trim() === item.from) el.textContent = item.to;
    }
  });

  // Also update top-level multilingual button text handled elsewhere
}

// Public toggle functions
function translateToHindi() {
  // 1) data-key elements
  translateDataKeyToHindi();

  // 2) static text replacement on stored text nodes
  applyStaticTextTranslationsToHindi();

  // 3) nav / special elements
  translateNavLinksToHindi();

  // 4) some additional targeted replacements for buttons/labels that often appear as attributes
  // e.g., update anchors that match exact labels
  // Buttons/anchors with .a-links
  document.querySelectorAll('.a-links').forEach(a => {
    const t = a.textContent.trim();
    if (translations.staticTexts[t]) a.textContent = translations.staticTexts[t];
  });

  // update multilingual toggle label
  const toggle = document.querySelector('.multilingual-btn');
  if (toggle) toggle.textContent = 'English';

  currentLanguage = 'hindi';
}

function translateToEnglish() {
  // Restore data-key elements
  restoreDataKeyToEnglish();

  // Restore static text nodes from originalTextNodes map
  restoreStaticTextNodesToEnglish();

  // Restore nav links if altered
  const navLinks = document.querySelectorAll('.nav-links a');
  // best-effort restoration: if link text equals a Hindi translation, map back
  navLinks.forEach(link => {
    const txt = link.textContent.trim();
    for (const [eng, hindi] of Object.entries(translations.staticTexts)) {
      if (txt === hindi) {
        link.textContent = eng;
        break;
      }
    }
  });

  // Restore any a-links
  document.querySelectorAll('.a-links').forEach(a => {
    const txt = a.textContent.trim();
    for (const [eng, hindi] of Object.entries(translations.staticTexts)) {
      if (txt === hindi) {
        a.textContent = eng;
        break;
      }
    }
  });

  // Restore multilingual toggle label
  const toggle = document.querySelector('.multilingual-btn');
  if (toggle) toggle.textContent = 'हिंदी';

  currentLanguage = 'english';
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // collect all text nodes and remember originals
  collectTextNodes();

  // also remember data-key element original text nodes (if any)
  Object.keys(translations).forEach(key => {
    if (key === 'staticTexts') return;
    const el = document.querySelector(`[data-key="${key}"]`);
    if (el) {
      // if element has text child nodes, save them too
      for (const child of el.childNodes) {
        if (child.nodeType === Node.TEXT_NODE && !originalTextNodes.has(child)) {
          originalTextNodes.set(child, child.nodeValue);
        }
      }
    }
  });

  // hook up toggle button
  const hindiBtn = document.querySelector('.multilingual-btn');
  if (hindiBtn) {
    hindiBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentLanguage === 'english') {
        translateToHindi();
      } else {
        translateToEnglish();
      }
    });
  }
});
