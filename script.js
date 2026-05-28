// 1. Chat funksiyasi
const messageInput = document.getElementById('message-input');
const messageList = document.getElementById('message-list');

messageInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && messageInput.value.trim() !== "") {
        let msg = document.createElement('div');
        msg.textContent = "Siz: " + messageInput.value;
        msg.style.padding = "5px";
        msg.style.borderBottom = "1px solid #2b3a4a";
        messageList.appendChild(msg);
        messageInput.value = ""; // Inputni tozalash
        messageList.scrollTop = messageList.scrollHeight; // Pastga avtomatik surish
    }
});

// 2. Hypershot o'yin qismi (Hozircha bo'sh oyna)
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

function initGame() {
    console.log("Hypershot o'yini ishga tushdi!");
    // Bu yerda Three.js o'yin muhitini yuklaymiz
}

initGame();
