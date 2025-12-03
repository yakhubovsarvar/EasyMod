// URL dan mahsulot nomini olish
const params = new URLSearchParams(window.location.search);
const productName = params.get("name") || "Mahsulot";

document.getElementById("productName").innerText = productName;

const message = `Salom, men "${productName}" ni sotib olmoqchiman`;

document.getElementById("telegramLink").href =
    "https://t.me/USERNAME?text=" + encodeURIComponent(message);

document.getElementById("whatsappLink").href =
    "https://wa.me/998XXXXXXXXX?text=" + encodeURIComponent(message);

document.getElementById("instagramLink").href =
    "https://www.instagram.com/YOURUSERNAME/";
