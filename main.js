// Animasi penghitungan
const countElements = document.querySelectorAll(".count");

const animateCount = (el) => {
  const target = parseInt(el.getAttribute("data-target"));
  let count = 0;
  const duration = 2000; // 2 detik
  const increment = target / (duration / 16); // 60 FPS

  const updateCount = () => {
    count += increment;
    el.innerText = Math.round(count);

    if (count < target) {
      requestAnimationFrame(updateCount);
    } else {
      el.innerText = target;
    }
  };

  updateCount();
};

const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

countElements.forEach((el) => {
  observer.observe(el);
});
