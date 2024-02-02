const imageContainer = document.getElementById("imgcon");
const image2 = document.getElementById("img2");

imageContainer.addEventListener("mouseenter", () => {
    image2.style.opacity = "1"; // เมื่อ hover ให้ opacity เป็น 1
});

imageContainer.addEventListener("mouseleave", () => {
    image2.style.opacity = "0"; // เมื่อไม่ hover ให้ opacity เป็น 0
});
