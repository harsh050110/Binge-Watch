  document.addEventListener("DOMContentLoaded", () => {
    const aboutBoxes = document.querySelectorAll(".about-box");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); 
        } else {
          entry.target.classList.remove("show"); 
        }
      });
    }, { threshold: 0.2 });

    aboutBoxes.forEach((box) => observer.observe(box));
  });
