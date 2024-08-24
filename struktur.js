document.addEventListener("DOMContentLoaded", function () {
  const orgNodes = document.querySelectorAll(".org-node");
  const modal = document.getElementById("member-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalInfo = document.getElementById("modal-info");
  const modalAvatar = document.getElementById("modal-avatar");
  const modalMotto = document.getElementById("modal-motto");
  const closeBtn = document.getElementsByClassName("close")[0];

  orgNodes.forEach((node) => {
    node.addEventListener("click", function () {
      const memberData = this.getAttribute("data-member");
      if (memberData) {
        const member = JSON.parse(memberData);
        const position = this.getAttribute("data-position");

        // Mengisi informasi modal
        modalTitle.textContent = `${position}: ${member.nama}`;

        // Mengatur avatar
        modalAvatar.src = member.avatar || "path/to/default-avatar.jpg";
        modalAvatar.alt = `Avatar ${member.nama}`;

        // Mengisi informasi anggota
        modalInfo.innerHTML = `  
                    <p><i class="fas fa-user"></i> ${member.nama}</p>  
                    <p><i class="fas fa-birthday-cake"></i> ${member.tanggal_lahir}</p>  
                    <p><i class="fas fa-heart"></i> ${member.hobi}</p>  
                `;

        // Mengisi motto
        modalMotto.innerHTML = `<p>"${member.motto}"</p>`;

        // Menampilkan modal
        modal.style.display = "block";
      }
    });

    // Efek hover
    node.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1) rotate(2deg)";
    });

    node.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)";
    });
  });

  // Menutup modal
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navList = document.querySelector(".nav-list");

    navToggle.addEventListener("click", function () {
      navList.classList.toggle("show");
      this.innerHTML = navList.classList.contains("show")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      const isClickInside =
        navToggle.contains(event.target) || navList.contains(event.target);
      if (!isClickInside && navList.classList.contains("show")) {
        navList.classList.remove("show");
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });

    // Handle window resize
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768 && navList.classList.contains("show")) {
        navList.classList.remove("show");
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });

  // Scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navigation.classList.add("scrolled");
    } else {
      navigation.classList.remove("scrolled");
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Menangani scroll
  let lastScrollTop = 0;
  window.addEventListener(
    "scroll",
    function () {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // Scroll ke bawah
        sidebarToggle.style.top = "10px";
      } else {
        // Scroll ke atas
        sidebarToggle.style.top = "10px";
      }
      lastScrollTop = st <= 0 ? 0 : st;
    },
    false
  );
});
