// Data emoji dan jawaban yang benar
const questions = [
  { emojis: ["🐱", "🍎", "🏃‍♂️"], answer: "🐱🏃‍♂️🍎" },
  { emojis: ["👧", "⚽", "🏃‍♀️"], answer: "👧🏃‍♀️⚽" },
  { emojis: ["🐶", "🎾", "🏃‍♂️"], answer: "🐶🏃‍♂️🎾" },
  { emojis: ["🧒", "🍌", "🐒"], answer: "🧒🐒🍌" },
  { emojis: ["🐦", "🌳", "🕊️"], answer: "🐦🕊️🌳" },
  { emojis: ["👩", "📚", "🏫"], answer: "👩🏫📚" },
  { emojis: ["👦", "🚲", "🏞️"], answer: "👦🚲🏞️" },
  { emojis: ["🐸", "💧", "🏞️"], answer: "🐸💧🏞️" }
];

let currentQuestion = 0;
let userSentence = [];

const emojiPool = document.getElementById("emojiPool");
const sentenceBox = document.getElementById("sentenceBox");
const feedback = document.getElementById("feedback");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");

// Load satu pertanyaan
function loadQuestion() {
  userSentence = [];
  sentenceBox.innerHTML = "";
  feedback.textContent = "";

  // Ambil pertanyaan saat ini
  const currentEmojis = questions[currentQuestion].emojis;

  // Acak emoji
  const shuffled = currentEmojis.sort(() => Math.random() - 0.5);

  // Hapus emoji sebelumnya
  emojiPool.innerHTML = "";

  shuffled.forEach(emoji => {
    const span = document.createElement("span");
    span.textContent = emoji;
    span.addEventListener("click", () => selectEmoji(emoji));
    emojiPool.appendChild(span);
  });
}

// Pilih emoji
function selectEmoji(emoji) {
  userSentence.push(emoji);
  const span = document.createElement("span");
  span.textContent = emoji;
  span.addEventListener("click", () => removeEmoji(span, emoji));
  sentenceBox.appendChild(span);
}

// Hapus emoji dari kalimat
function removeEmoji(span, emoji) {
  sentenceBox.removeChild(span);
  const index = userSentence.indexOf(emoji);
  if (index > -1) userSentence.splice(index, 1);
}

// Cek jawaban
checkBtn.addEventListener("click", () => {
  const userAns = userSentence.join("");
  if(userAns === questions[currentQuestion].answer){
    feedback.textContent = "🎉 Benar! 🎉";
    feedback.style.color = "#00c853";

    // Lanjut ke pertanyaan berikutnya setelah 1 detik
    setTimeout(() => {
      currentQuestion = (currentQuestion + 1) % questions.length;
      loadQuestion();
    }, 1000);

  } else {
    feedback.textContent = "❌ Coba lagi!";
    feedback.style.color = "#ff3d00";
  }
});

// Reset pertanyaan saat ini
resetBtn.addEventListener("click", loadQuestion);

// Inisialisasi
loadQuestion();
