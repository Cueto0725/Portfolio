// Fade-in animation on scroll
const sections = document.querySelectorAll(".section, .card, .hero");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});

// OPEN CERTIFICATIONS MODAL
document.addEventListener("DOMContentLoaded", function () {
    const viewAllBtn = document.getElementById("viewAllBtn");

    if (viewAllBtn) {
        viewAllBtn.addEventListener("click", function (e) {
            e.preventDefault();
            const certModal = new bootstrap.Modal(document.getElementById("certModal"));
            certModal.show();
        });
    }
});