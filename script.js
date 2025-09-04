// ---------------- QUIZ VOCABULARY ----------------
function startQuiz() {
  const quizContainer = document.getElementById("quiz");
  const questions = [
    { q: "Apa arti 'Cat'?", a: "Kucing" },
    { q: "Apa arti 'Dog'?", a: "Anjing" },
    { q: "Apa arti 'Book'?", a: "Buku" },
    { q: "Apa arti 'Apple'?", a: "Apel" },
  ];

  let html = "";
  questions.forEach((item, index) => {
    html += `
      <p>${index + 1}. ${item.q}</p>
      <input type="text" id="answer${index}" placeholder="Jawabanmu..."><br>
    `;
  });
  html += `<button onclick="checkQuiz()">Cek Jawaban</button>`;
  quizContainer.innerHTML = html;
}

function checkQuiz() {
  const questions = [
    { q: "Cat", a: "Kucing" },
    { q: "Dog", a: "Anjing" },
    { q: "Book", a: "Buku" },
    { q: "Apple", a: "Apel" },
  ];

  let score = 0;
  questions.forEach((item, index) => {
    const ans = document.getElementById(`answer${index}`).value.trim();
    if (ans.toLowerCase() === item.a.toLowerCase()) score++;
  });

  alert("Skor kamu: " + score + "/" + questions.length);
}

// ---------------- ANIMAL GAME ----------------
function startAnimalGame() {
  const container = document.getElementById("animalGame");
  container.innerHTML = `
    <p>Hewan apakah ini?</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" width="150">
    <br>
    <button onclick="alert('Benar! Ini Cat = Kucing')">Cat</button>
    <button onclick="alert('Salah!')">Dog</button>
    <button onclick="alert('Salah!')">Bird</button>
  `;
}

// ---------------- NUMBER GAME ----------------
function startNumberGame() {
  const container = document.getElementById("numberGame");
  const number = Math.floor(Math.random() * 10) + 1; // 1-10
  const answers = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];

  container.innerHTML = `
    <p>Angka ${number} dalam Bahasa Inggris adalah?</p>
    <input type="text" id="numAns" placeholder="Tulis jawaban...">
    <button onclick="checkNumber(${number})">Cek</button>
  `;
}

function checkNumber(num) {
  const ans = document.getElementById("numAns").value.trim().toLowerCase();
  const correct = ["one","two","three","four","five","six","seven","eight","nine","ten"];
  if (ans === correct[num-1]) {
    alert("Benar! 🎉");
  } else {
    alert("Salah. Jawaban yang benar: " + correct[num-1]);
  }
}
