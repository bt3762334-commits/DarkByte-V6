// PARTICLES CONFIG
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#6c63ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 2
    }
  }
});

// INTRO TIMING
window.onload = () => {
  setTimeout(() => {
    document.getElementById("intro").style.opacity = "0";
    document.getElementById("intro").style.transition = "1s ease";

    setTimeout(() => {
      document.getElementById("intro").style.display = "none";
      document.body.style.overflow = "auto";
      document.getElementById("content").classList.add("show");
    }, 1000);

  }, 2500); // مدة الانيميشن
};

// SCROLL REVEAL FOR PROJECTS
const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.transition = "0.6s ease";
    } else {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
    }
  });
});
document.querySelectorAll(".project-card").forEach(card => {

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    // glow position
    card.style.setProperty("--x", `${xPercent}%`);
    card.style.setProperty("--y", `${yPercent}%`);

    // 3D tilt
    const rotateX = ((y / rect.height) - 0.5) * -15;
    const rotateY = ((x / rect.width) - 0.5) * 15;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  });

});
// SMOOTH SCROLL
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});
