const translations = {
  uz: {
    home: "Bosh sahifa",
    catalog: "Katalog",
    about: "Biz haqimizda",
    contact: "Aloqa",
    heroTitle: "Express mebel – oson yig‘iladi",
    heroText: "Mustahkam, zamonaviy va qulay narxlarda"
  },
  ru: {
    home: "Главная",
    catalog: "Каталог",
    about: "О нас",
    contact: "Контакты",
    heroTitle: "Экспресс мебель – легко собирается",
    heroText: "Прочная, современная и по доступной цене"
  },
  en: {
    home: "Home",
    catalog: "Catalog",
    about: "About us",
    contact: "Contact",
    heroTitle: "Express furniture – easy to assemble",
    heroText: "Strong, modern and affordable"
  }
};

function changeLang(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.innerText = translations[lang][key];
  });
}
