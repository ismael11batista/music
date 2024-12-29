// Inicializar EmailJS com sua Public Key
(function () {
  emailjs.init("ctxW9xYNaeSb80VmR"); // Substitua "ctxW9xYNaeSb80VmR" pelo seu Public Key real
})();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Toggle navigation on mobile
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});

// Form submission com EmailJS
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Parâmetros do formulário
    const templateParams = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value,
    };

    // Enviar o e-mail usando EmailJS
    emailjs.send("service_brgit2i", "template_cuugplo", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Obrigado por sua mensagem! Entraremos em contato em breve.");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        console.log("FAILED...", error);
        alert(
          "Desculpe, ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde."
        );
      }
    );
  });

// Testimonial slider auto-scroll
const testimonialSlider = document.querySelector(".testimonial-slider");
let scrollAmount = 0;
const scrollStep = 1;
const scrollInterval = 50;

function autoScroll() {
  testimonialSlider.scrollLeft += scrollStep;
  scrollAmount += scrollStep;

  if (scrollAmount >= testimonialSlider.scrollWidth / 2) {
    scrollAmount = 0;
    testimonialSlider.scrollLeft = 0;
  }

  setTimeout(autoScroll, scrollInterval);
}

autoScroll();
