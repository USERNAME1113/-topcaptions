// FAQ Accordion
document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.classList.toggle('active');
        const arrow = btn.querySelector('.arrow');
        arrow.textContent = item.classList.contains('active') ? '−' : '+';
    });
});

// Toggle Reviews Logic
const toggleReviewsBtn = document.getElementById('toggle-reviews-btn');
const moreReviews = document.getElementById('more-reviews');

if (toggleReviewsBtn && moreReviews) {
    toggleReviewsBtn.addEventListener('click', () => {
        moreReviews.classList.toggle('open');
        if (moreReviews.classList.contains('open')) {
            toggleReviewsBtn.textContent = 'הסתיר ביקורות';
        } else {
            toggleReviewsBtn.textContent = 'הצג את כל הביקורות (10)';
        }
    });
}

// Scroll Reveal with Blur Effect
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach(element => {
    revealObserver.observe(element);
});

// Modal Logic
const modal = document.getElementById('privacy-modal');
const privacyLink = document.getElementById('privacy-link');
const closeBtn = document.querySelector('.close-btn');

if (privacyLink && modal && closeBtn) {
    privacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}