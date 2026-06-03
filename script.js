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
