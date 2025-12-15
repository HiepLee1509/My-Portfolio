// ABOUT ME MODAL TOGGLE
(function () {
    const overlay = document.getElementById("aboutModalOverlay");
    const openBtn = document.getElementById("aboutTrigger");
    const closeBtn = document.getElementById("aboutModalClose");
  
    const openModal = () => {
      if (!overlay) return;
      overlay.classList.add("is-visible");
      overlay.setAttribute("aria-hidden", "false");
    };
  
    const closeModal = () => {
      if (!overlay) return;
      overlay.classList.remove("is-visible");
      overlay.setAttribute("aria-hidden", "true");
    };
  
    if (openBtn) {
      openBtn.addEventListener("click", openModal);
    }
  
    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }
  
    // Close when clicking outside the modal content
    if (overlay) {
      overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
          closeModal();
        }
      });
    }
  
    // Close on Escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && overlay && overlay.classList.contains("is-visible")) {
        closeModal();
      }
    });
  })();
  
  // DYNAMIC YEAR IN FOOTER
  (function () {
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  })();