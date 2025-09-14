// Data percakapan
const dialogues = [
  { text: "Teacher: Good morning, class! How are you today?", options: [{ text: "Good morning, teacher!", correct: true },{ text: "Hello, goodbye!", correct: false },{ text: "See you later!", correct: false }]},
  { text: "Teacher: What is your name?", options: [{ text: "My name is Ali.", correct: true },{ text: "I like pizza.", correct: false },{ text: "It is raining.", correct: false }]},
  { text: "Teacher: How old are you?", options: [{ text: "I am seven years old.", correct: true },{ text: "I am happy.", correct: false },{ text: "I go to school.", correct: false }]},
  { text: "Teacher: What is your favorite color?", options: [{ text: "My favorite color is blue.", correct: true },{ text: "I have a pencil.", correct: false },{ text: "I like apples.", correct: false }]},
  { text: "Teacher: What is this? (pointing at a cat)", options: [{ text: "It is a cat.", correct: true },{ text: "It is a dog.", correct: false },{ text: "It is a bird.", correct: false }]},
  { text: "Teacher: Can you count to five?", options: [{ text: "Yes, one, two, three, four, five.", correct: true },{ text: "I like chocolate.", correct: false },{ text: "I go to school.", correct: false }]},
  { text: "Teacher: Where do you live?", options: [{ text: "I live in Dungkek.", correct: true },{ text: "I have a book.", correct: false },{ text: "I am seven years old.", correct: false }]},
  { text: "Teacher: What do you eat for breakfast?", options: [{ text: "I eat rice and eggs.", correct: true },{ text: "I go to school.", correct: false },{ text: "I play football.", correct: false }]},
  { text: "Teacher: What animal says 'meow'?", options: [{ text: "A cat says 'meow'.", correct: true },{ text: "A dog says 'meow'.", correct: false },{ text: "A bird says 'meow'.", correct: false }]},
  { text: "Teacher: How do you feel today?", options: [{ text: "I feel happy!", correct: true },{ text: "I have a pencil.", correct: false },{ text: "I am a cat.", correct: false }]}
];

let currentDialogue = 0;
const dialogueBox = document.getElementById("dialogueBox");
const optionsBox = document.getElementById("optionsBox");
const feedback = document.getElementById("feedback");

function loadDialogue() {
  feedback.textContent = "";
  dialogueBox.textContent = dialogues[currentDialogue].text;
  dialogueBox.classList.add('animate');
  setTimeout(()=>dialogueBox.classList.remove('animate'),500);

  optionsBox.innerHTML = "";
  dialogues[currentDialogue].options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option.text;
    btn.addEventListener("click", () => selectOption(option.correct));
    optionsBox.appendChild(btn);
  });
}

function selectOption(isCorrect) {
  if(isCorrect){
    feedback.textContent = "🎉 Benar! 🎉";
    feedback.style.color = "#00c853";
    setTimeout(() => {
      currentDialogue++;
      if(currentDialogue >= dialogues.length) {
        dialogueBox.textContent = "🎊 Selamat! Kamu sudah menyelesaikan semua percakapan. 🎊";
        optionsBox.innerHTML = "";
        feedback.textContent = "";
      } else {
        loadDialogue();
      }
    }, 1000);
  } else {
    feedback.textContent = "❌ Coba lagi!";
    feedback.style.color = "#ff3d00";
  }
}

loadDialogue();
