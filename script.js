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

// Generic Modal Handling (works for privacy modal + guide modal)
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

// Installation Guide Modal (carousel)
const guideModal = document.getElementById('guide-modal');
const guideSlides = document.querySelectorAll('.guide-slide');
const guidePrev = document.querySelector('.guide-prev');
const guideNext = document.querySelector('.guide-next');
let guideStep = 0;

function showGuideStep(index) {
    guideSlides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    if (guidePrev) guidePrev.classList.toggle('hidden', index === 0);
    if (guideNext) guideNext.classList.toggle('hidden', index === guideSlides.length - 1);
    guideStep = index;
}

function openGuideModal() {
    if (!guideModal) return;
    showGuideStep(0);
    guideModal.style.display = 'flex';
}

['start-free-nav', 'start-free-hero'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', e => { e.preventDefault(); openGuideModal(); });
});

if (guidePrev) guidePrev.addEventListener('click', () => showGuideStep(Math.max(0, guideStep - 1)));
if (guideNext) guideNext.addEventListener('click', () => showGuideStep(Math.min(guideSlides.length - 1, guideStep + 1)));

const guideCloseFinal = document.getElementById('guide-close-final');
if (guideCloseFinal && guideModal) {
    guideCloseFinal.addEventListener('click', () => guideModal.style.display = 'none');
}
