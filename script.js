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

// Modal handling
function hideModal(modal) {
    if (!modal) return;
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('.modal .close-btn').forEach(btn => {
    btn.addEventListener('click', () => hideModal(btn.closest('.modal')));
});
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', event => {
        if (event.target === modal) hideModal(modal);
    });
});

// Platform selection for the free-start buttons
const platformModal = document.getElementById('platform-modal');
let lastPlatformTrigger = null;

function openPlatformModal(trigger) {
    if (!platformModal) return;
    lastPlatformTrigger = trigger;
    platformModal.style.display = 'flex';
    platformModal.setAttribute('aria-hidden', 'false');
    platformModal.querySelector('.close-btn')?.focus();
}

function closePlatformModal() {
    hideModal(platformModal);
    lastPlatformTrigger?.focus();
}

document.querySelectorAll('[data-platform-selector]').forEach(trigger => {
    trigger.addEventListener('click', () => openPlatformModal(trigger));
});

platformModal?.querySelector('.close-btn')?.addEventListener('click', closePlatformModal);
platformModal?.addEventListener('click', event => {
    if (event.target === platformModal) closePlatformModal();
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && platformModal?.style.display === 'flex') closePlatformModal();
});

// Privacy modal
const privacyModal = document.getElementById('privacy-modal');
const privacyLink = document.getElementById('privacy-link');
if (privacyLink && privacyModal) {
    privacyLink.addEventListener('click', event => {
        event.preventDefault();
        privacyModal.style.display = 'flex';
        privacyModal.setAttribute('aria-hidden', 'false');
        privacyModal.querySelector('.close-btn')?.focus();
    });
}
