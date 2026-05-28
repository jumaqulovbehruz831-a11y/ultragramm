// 1. Telegram uslubidagi chat funksiyasi
const input = document.getElementById('message-input');
const list = document.getElementById('message-list');

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && input.value !== "") {
        let xabar = document.createElement('div');
        xabar.className = 'message-bubble';
        xabar.innerText = input.value;
        list.appendChild(xabar);
        input.value = ""; // Yozgandan keyin oynani tozalash
    }
});

// 2. 3D o'yin uchun bo'shliq
console.log("Hypershot platformasi ishga tushdi!");
