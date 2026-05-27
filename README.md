<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Hypershot Login</title>
</head>
<body class="bg-gray-100 flex items-center justify-center h-screen">

    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 id="title" class="text-2xl font-bold mb-6 text-center text-gray-800">Kirish</h2>
        
        <div class="space-y-4">
            <input type="text" id="username" placeholder="Ismingizni kiriting" 
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
            
            <input type="password" id="password" placeholder="Parolingizni kiriting" 
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
            
            <button id="main-btn" onclick="handleAuth()" 
                class="w-full bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700 transition">
                Kirish
            </button>
        </div>

        <p id="toggle-text" onclick="toggleMode()" class="mt-4 text-center text-blue-600 cursor-pointer hover:underline">
            Account yo'qmi? Ochish
        </p>
    </div>

    <script>
        let isRegisterMode = false;

        function toggleMode() {
            isRegisterMode = !isRegisterMode;
            document.getElementById('title').innerText = isRegisterMode ? "Account ochish" : "Kirish";
            document.getElementById('main-btn').innerText = isRegisterMode ? "Saqlash" : "Kirish";
            document.getElementById('toggle-text').innerText = isRegisterMode ? "Kirishga qaytish" : "Account yo'qmi? Ochish";
        }

        async function handleAuth() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if(!username || !password) {
                alert("Iltimos, barcha maydonlarni to'ldiring!");
                return;
            }

            // Backendga yuborish qismi (oldingi kodimizdagi kabi)
            console.log(isRegisterMode ? "Registratsiya qilinyapti..." : "Kirilyapti...");
        }
    </script>
</body>
</html>
