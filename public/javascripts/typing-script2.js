    const text = "WELCOME TO YOUR PLAYER PROFILE!";
    const typingSpeed = 100;
    let i = 0;
    const header = document.getElementById("typing-header");

    function typeWriter() {
      if (i < text.length) {
        header.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
      }
    }

    window.onload = typeWriter;

    // Save selected question count to localStorage before starting quiz
    document.getElementById("start-quiz-btn").addEventListener("click", function(e) {
      const count = document.getElementById("question-count").value;
      localStorage.setItem("questionCount", count);
    });