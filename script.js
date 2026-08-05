// FAQ Accordion
document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.classList.toggle('active');
        btn.querySelector('.arrow').textContent = item.classList.contains('active') ? '−' : '+';
    });
});

// Toggle Reviews
const toggleBtn = document.getElementById('toggle-reviews-btn');
const moreReviews = document.getElementById('more-reviews');
if (toggleBtn && moreReviews) {
    toggleBtn.addEventListener('click', () => {
        moreReviews.classList.toggle('open');
        toggleBtn.textContent = moreReviews.classList.contains('open') ? 'הסתיר ביקורות' : 'הצג את כל הביקורות (10)';
    });
}

// Scroll Reveal
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

// Privacy Modal
const modal = document.getElementById('privacy-modal');
const privacyLink = document.getElementById('privacy-link');
const closeBtn = document.querySelector('.close-btn');
if (privacyLink && modal && closeBtn) {
    privacyLink.addEventListener('click', e => { e.preventDefault(); modal.style.display = 'flex'; });
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
}
