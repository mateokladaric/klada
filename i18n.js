const translations = {
  en: {
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.examples": "Examples",
    "nav.process": "Process",
    "nav.contact": "Contact",
    "hero.title": "Digital Solutions for",
    "hero.highlight": "Your Business",
    "about.title": "About Us",
    "about.desc":
      "We professionally build websites and web shops. Our team consists of experts who will bring your company into the digital world of the internet. We design pages according to your wishes and adapt them to your needs. All pages are handcrafted, allowing us to customize every detail to your needs and maximize page loading speed for users on all devices.",
    "about.speed": "Speed",
    "about.uniqueness": "Uniqueness",
    "about.flexibility": "Flexibility",
    "services.title": "Services",
    "services.subtitle": "Website Development",
    "services.desc":
      'If you\'re not sure which package best suits your needs or you have special requirements, we offer a "Custom" package on request.',
    "services.website": "Website",
    "services.webshop": "Web Shop",
    "services.custom": "Custom",
    "services.designCustom": "+ Custom design",
    "services.oneRevision": "+ One revision list",
    "services.basicHosting": "+ Basic Hosting",
    "services.domainChoice": "+ Domain of choice",
    "services.fiveRevisions": "+ Five revision lists",
    "services.premiumHosting": "+ Premium Hosting",
    "services.domainCustom": "+ Domain of choice",
    "services.seo": "+ Google search optimization",
    "services.editTools": "+ Page editing tools",
    "services.selling": "+ Selling on the website",
    "services.unlimitedRevisions": "+ Unlimited revisions",
    "services.api": "+ API integration",
    "services.animations": "+ Special animations",
    "services.sendInquiry": "Send Inquiry",
    "examples.title": "Examples",
    "process.title": "Process",
    "process.desc":
      "The process by which we operate and our expectations, along with the average duration of each phase.",
    "process.day": "Day",
    "process.step1": "Schedule a meeting",
    "process.step2": "Meeting and package selection based on your needs",
    "process.step3": "We present the first draft",
    "process.step4": "You give us a list of desired changes",
    "process.step5": "We present the final version",
    "process.step6": "With your approval, we publish your website",
    "footer.rights": "All rights reserved",
    "meta.description":
      "We professionally build websites and web shops. Our team consists of experts who will bring your company into the digital world of the internet. We design pages according to your wishes and adapt them to your needs. All pages are handcrafted, allowing us to customize every detail to your needs and maximize page loading speed for users on all devices.",
  },
  hr: {
    "nav.about": "O nama",
    "nav.services": "Usluge",
    "nav.examples": "Primjeri",
    "nav.process": "Postupak",
    "nav.contact": "Kontakt",
    "hero.title": "Uvodimo vašu Tvrtku u",
    "hero.highlight": "Digitalni Svijet",
    "about.title": "O nama",
    "about.desc":
      "Profesionalno pravimo web stranice i web shop-ove. Naš tim se sastoji od stručnjaka koji će vašu firmu uvesti u digitalni svijet interneta. Dizajniramo stranice po vašoj želji i prilagođavamo ih vašim potrebama. Sve stranice su ručno izrađene što nam omogućava svaki detalj prilagoditi vašim potrebama, te maksimalno ubrzati učitavnje stranice korisnicima na svim uređajima.",
    "about.speed": "Brzina",
    "about.uniqueness": "Jedinstvenost",
    "about.flexibility": "Izmjenivost",
    "services.title": "Usluge",
    "services.subtitle": "Izrada Web Stranice",
    "services.desc":
      'Ako niste sigurni koji paket najbolje odgovara vašim potrebama ili imate posebne zahtjeve, nudimo "Posebni" paket po potrebi.',
    "services.website": "Web Stranica",
    "services.webshop": "Web Shop",
    "services.custom": "Posebno",
    "services.designCustom": "+ Dizajn po želji",
    "services.oneRevision": "+ Jedna lista izmjena",
    "services.basicHosting": "+ Osnovni Hosting",
    "services.domainChoice": "+ Domena po izboru",
    "services.fiveRevisions": "+ Pet lista izmjena",
    "services.premiumHosting": "+ Premium Hosting",
    "services.domainCustom": "+ Domena po želji",
    "services.seo": "+ Optimizacija na Google tražilici",
    "services.editTools": "+ Alati za izmjenu stranice",
    "services.selling": "+ Prodaja na stranici",
    "services.unlimitedRevisions": "+ Neograničene izmjene",
    "services.api": "+ API integracija",
    "services.animations": "+ Posebne animacije",
    "services.sendInquiry": "Pošalji Upit",
    "examples.title": "Primjeri",
    "process.title": "Postupak",
    "process.desc":
      "Postupak kojim poslujemo i naša očekivanja te prosječna trajanja svakog dijela.",
    "process.day": "Dan",
    "process.step1": "Dogovor sastanka",
    "process.step2": "Sastanak i odabir paketa prema vašim potrebama",
    "process.step3": "Predstavljamo prvi primjerak",
    "process.step4": "Dajete nam listu željenih promjeni",
    "process.step5": "Predstavljamo konačnu verziju",
    "process.step6": "Uz vaše odobrenje objavljujemo vašu stranicu",
    "footer.rights": "Sva prava pridržana",
    "meta.description":
      "Profesionalno pravimo web stranice i web shop-ove. Naš tim se sastoji od stručnjaka koji će vašu firmu uvesti u digitalni svijet interneta. Dizajniramo stranice po vašoj želji i prilagođavamo ih vašim potrebama. Sve stranice su ručno napisane što nam omogućava svaki detalj prilagoditi vašim potrebama, te maksimalno ubrzati učitavnje stranice korisnicima na svim uređajima.",
  },
};

function detectLanguage() {
  const saved = localStorage.getItem("klada-lang");
  if (saved) return saved;
  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang.startsWith("hr") ? "hr" : "en";
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t["meta.description"]) {
    metaDesc.setAttribute("content", t["meta.description"]);
  }

  document.documentElement.lang = lang === "hr" ? "hr" : "en";

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.textContent = lang === "hr" ? "EN" : "HR";
  }

  localStorage.setItem("klada-lang", lang);
}

function toggleLanguage() {
  const current = localStorage.getItem("klada-lang") || detectLanguage();
  const next = current === "hr" ? "en" : "hr";
  applyTranslations(next);
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(detectLanguage());
});
