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

// Generic Modal Handling (privacy modal)
document.querySelectorAll('.modal .close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const parentModal = btn.closest('.modal');
        if (parentModal) parentModal.style.display = 'none';
    });
});
document.querySelectorAll('.modal').forEach(m => {
    m.addEventListener('click', e => { if (e.target === m) m.style.display = 'none'; });
});

// Privacy Modal
const privacyModal = document.getElementById('privacy-modal');
const privacyLink = document.getElementById('privacy-link');
if (privacyLink && privacyModal) {
    privacyLink.addEventListener('click', e => { e.preventDefault(); privacyModal.style.display = 'flex'; });
}

// "התחילו בחינם" CTAs — smooth scroll straight to the pricing section
document.querySelectorAll('#start-free-nav, #start-free-hero').forEach(btn => {
    btn.addEventListener('click', e => {
        const target = document.getElementById('pricing');
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
