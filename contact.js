document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("response-message");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  

      if (!name || !email || !message) {
        showResponseMessage("Please fill in all fields.", "error");
        return;
      }
  
      if (!validateEmail(email)) {
        showResponseMessage("Please enter a valid email address.", "error");
        return;
      }
  

      showResponseMessage("Thank you for contacting us! We'll get back to you soon.", "success");
  

      form.reset();
    });
  
    function showResponseMessage(message, type) {
      responseMessage.textContent = message;
      responseMessage.className = type;
      responseMessage.classList.remove("hidden");
  

      setTimeout(() => {
        responseMessage.classList.add("hidden");
      }, 3000);
    }
  
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
  

    const responseMessage = document.getElementById('response-message');
    responseMessage.className = 'success'; 
    responseMessage.textContent = 'Thank you for your message! Redirecting...';
  

    setTimeout(() => {
      window.location.href = 'main.html'; 
    }, 4000);
  });
  
  