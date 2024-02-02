const imageContainer = document.getElementById("imgcon");
const images = document.querySelectorAll(".imgprofile");

let currentImageIndex = 0;

imageContainer.addEventListener("click", () => {
    images[currentImageIndex].style.opacity = "0"; // เมื่อคลิกให้ opacity เป็น 0 ของรูปปัจจุบัน

    currentImageIndex = (currentImageIndex + 1) % images.length; // เปลี่ยนรูป
    images[currentImageIndex].style.opacity = "1"; // เปลี่ยน opacity เป็น 1 ของรูปใหม่
});
