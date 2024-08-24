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
});

document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggle = document.querySelector(".sidebar-toggle");
  const sidebar = document.querySelector(".sidebar");

  sidebarToggle.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });
});
