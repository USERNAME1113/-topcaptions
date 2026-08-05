import { useState, useEffect } from 'react';
import './site.css';

const EXE_PATH = `${import.meta.env.BASE_URL}TopCaptions-Setup.exe`.replace('//', '/');
const VIDEO_PATH = `${import.meta.env.BASE_URL}video.mp4`.replace('//', '/');
const LOGO_PATH = `${import.meta.env.BASE_URL}logo.png`.replace('//', '/');

function App() {
  const [moreReviewsOpen, setMoreReviewsOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});
  const [modalOpen, setModalOpen] = useState(false);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      <div className="glow-bg"></div>

      {/* Navbar */}
      <header className="navbar">
        <div className="nav-logo">
          <img src={LOGO_PATH} alt="Top Captions" className="logo-img glow-effect" />
        </div>
        <a href={EXE_PATH} download="TopCaptions-Setup.exe" className="btn btn-nav">
          התחילו בחינם
        </a>
      </header>

      {/* Hero */}
      <section className="hero reveal-on-scroll">
        <div className="hero-logo-wrapper">
          <img
            src={LOGO_PATH}
            alt="Top Captions"
            className="hero-logo floating-logo glow-effect-deep"
          />
        </div>
        <h1>כתוביות מדויקות בעברית בלחיצת כפתור</h1>
        <p className="subtitle">עיבוד מקומי ומהיר ישירות בתוך תוכנת העריכה שלך.</p>
        <div className="software-badges">
          <span className="badge">Premiere Pro</span>
          <span className="badge">After Effects</span>
          <span className="badge badge-win">Windows</span>
        </div>
        <div className="hero-cta">
          <a href={EXE_PATH} download="TopCaptions-Setup.exe" className="btn btn-main glow-button">
            התחילו בחינם
          </a>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews reveal-on-scroll">
        <div className="review-card">
          <div className="review-header">
            <div className="avatar">M</div>
            <div className="author-info">
              <div className="author-name">SLK|MICHAEL</div>
              <div className="author-role">עורך ויוצר תוכן</div>
            </div>
          </div>
          <p className="review-text">"זה לא סתם פלאגין של כתוביות, הדיוק והאיכות ברמה מטורפת"</p>
          <div className="stars">★★★★★</div>
        </div>

        <div
          className={`more-reviews-container${moreReviewsOpen ? ' open' : ''}`}
          id="more-reviews"
        >
          {[
            {
              avatar: 'A',
              name: 'Alex Vance',
              role: 'עורך וידאו מסחרי',
              text: '"חסך לי שעות של עבודה סיזיפית על כתוביות בפרימייר. הדיוק בעברית פשוט חסר תקדים."',
            },
            {
              avatar: 'D',
              name: 'Daniel Miller',
              role: 'יוצר תוכן לטיקטוק ואינסטגרם',
              text: '"הכלי הכי חובה שיש לכל מי שמעלה סרטונים בקצב גבוה. עובד חלק ובלי תקלות."',
            },
            {
              avatar: 'M',
              name: 'Michael Ross',
              role: 'Motion Designer',
              text: '"השילוב הישיר בתוך אקסטנשן של אפטר אפקטס הוא גיים צ\'יינג\'ר אמיתי לעריכת Reels."',
            },
            {
              avatar: 'E',
              name: 'Ethan Cole',
              role: 'עורך פודקאסטים וסרטונים ארוכים',
              text: '"תמליל עברית מדויק גם כשהדוברים מדברים מהר. שווה כל שקל ומחזיר את ההשקעה מיד."',
            },
            {
              avatar: 'S',
              name: 'Sean Brody',
              role: 'עורך יוטיוב ויוצר תוכן',
              text: '"העובדה שהכל מעובד מקומית על המחשב בלי להעלות קבצים לשרתים חיצוניים זה יתרון עצום."',
            },
            {
              avatar: 'L',
              name: 'Liam Brooks',
              role: 'במאי ועורך פרויקטים',
              text: '"הפיצול החכם לפי משפטים חוסך 90% מהעבודה הידנית שהייתי עושה עד היום."',
            },
            {
              avatar: 'J',
              name: 'Jason Reed',
              role: 'עורך פרומואים ופרסומות',
              text: '"ממשק נקי, פשוט להפעלה ותוצאות מדהימות. ממליץ בחום לכל עורך בארץ."',
            },
            {
              avatar: 'N',
              name: 'Noah Bennett',
              role: 'יוצר תוכן דיגיטלי',
              text: '"סוף סוף תוסף שלא דורש מנוי חודשי ומביא ביצועים של כלים יקרים בהרבה."',
            },
            {
              avatar: 'R',
              name: 'Ryan Stark',
              role: 'עורך וידאו עצמאי',
              text: '"מהירות העיבוד פשוט מטורפת. מזינים את הסאונד ותוך שניות הכתוביות מוכנות בדיוק רב."',
            },
          ].map((r, i) => (
            <div className="review-card" key={i}>
              <div className="review-header">
                <div className="avatar">{r.avatar}</div>
                <div className="author-info">
                  <div className="author-name">{r.name}</div>
                  <div className="author-role">{r.role}</div>
                </div>
              </div>
              <p className="review-text">{r.text}</p>
              <div className="stars">★★★★★</div>
            </div>
          ))}
        </div>

        <button
          id="toggle-reviews-btn"
          className="btn-toggle-reviews"
          onClick={() => setMoreReviewsOpen((v) => !v)}
        >
          {moreReviewsOpen ? 'הסתיר ביקורות' : 'הצג את כל הביקורות (10)'}
        </button>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing reveal-on-scroll">
        <div className="pricing-card floating-card">
          <div className="launch-tag">מחיר השקה special</div>
          <h3>רישיון לכל החיים</h3>
          <div className="price-wrap">
            <span className="price">₪50</span>
            <span className="old-price">₪100</span>
          </div>
          <p className="pricing-note">תשלום חד-פעמי • ללא מנוי מתחדש</p>
          <ul className="features">
            <li>✓ תוסף מקומי מלא על המחשב שלך</li>
            <li>✓ תמיכה מלאה ב-Premiere Pro &amp; After Effects</li>
            <li>✓ תמיכה במערכת הפעלה Windows</li>
            <li>✓ תמלול עברית מהיר ומדויק בלחיצה</li>
            <li>✓ ללא תשלומים חודשיים וללא עמלות נסתרות</li>
          </ul>
          <a
            href={EXE_PATH}
            download="TopCaptions-Setup.exe"
            className="btn btn-main btn-full buy-btn"
          >
            התחילו בחינם
          </a>
        </div>
      </section>

      {/* Tutorial Video */}
      <section className="video-section reveal-on-scroll">
        <h2>מדריך התקנה</h2>
        <div className="video-wrapper">
          <video controls playsInline>
            <source src={VIDEO_PATH} type="video/mp4" />
            הדפדפן שלך אינו תומך בהפעלת וידאו.
          </video>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq reveal-on-scroll">
        <h2>שאלות נפוצות</h2>
        <div className="faq-accordion">
          {[
            {
              q: 'האם ניתן לנסות את הפלאגין בחינם?',
              a: "כן! פשוט לחצו על 'התחילו בחינם' בראש העמוד, ותקבלו אוטומטית 5 דקות של תמלול בחינם לגמרי וללא צורך בתשלום.",
            },
            {
              q: 'באילו תוכנות ומערכות הפעלה הפלאגין עובד?',
              a: (
                <>
                  הפלאגין פותח במיוחד עבור <strong>Adobe Premiere Pro</strong> ו-
                  <strong>Adobe After Effects</strong> ומותאם לעבודה על מערכת{' '}
                  <strong>Windows</strong> בלבד.
                </>
              ),
            },
            {
              q: 'איך מקבלים את הקובץ לאחר הרכישה?',
              a: 'מיד לאחר ביצוע התשלום תועבר לדף ההורדה, ובמקביל יישלח אליך אימייל עם קובץ ההתקנה והנחיות קצרות.',
            },
            {
              q: 'איך פונים לתמיכה טכנית?',
              a: (
                <>
                  לכל שאלה או סיוע בהתקנה, ניתן לפנות לצוות התמיכה במייל:{' '}
                  <a href="mailto:topcaptions@gmail.com" className="mail-link">
                    topcaptions@gmail.com
                  </a>
                </>
              ),
            },
          ].map((item, i) => (
            <div className={`faq-item${faqOpen[i] ? ' active' : ''}`} key={i}>
              <button className="faq-btn" onClick={() => toggleFaq(i)}>
                <span>{item.q}</span>
                <span className="arrow">{faqOpen[i] ? '−' : '+'}</span>
              </button>
              <div className="faq-content">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Top Captions. כל הזכויות שמורות.</p>
        <a
          href="#"
          id="privacy-link"
          onClick={(e) => {
            e.preventDefault();
            setModalOpen(true);
          }}
        >
          מדיניות פרטיות ותנאי שימוש
        </a>
      </footer>

      {/* Privacy Modal */}
      {modalOpen && (
        <div
          id="privacy-modal"
          className="modal"
          style={{ display: 'flex' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div className="modal-box">
            <span className="close-btn" onClick={() => setModalOpen(false)}>
              &times;
            </span>
            <h2>מדיניות פרטיות - Top Captions</h2>
            <div className="modal-body">
              <p>
                <strong>פרטיות מלאה ועבודה מקומית:</strong> הפלאגין Top Captions פועל באופן מקומי
                על גבי המחשב שלך. איננו אוספים, שומרים או מעבירים מידע אישי, נתוני פרויקטים או
                קובצי מדיה לשרתים חיצוניים.
              </p>
              <p>
                <strong>רכישה וסליקה:</strong> נתוני התשלום והאימייל מעובדים באופן מאובטח בלבד על
                ידי ספק הסליקה המורשה בעת הרכישה לצורך הנפקת הקבלה ואספקת קובץ ההתקנה.
              </p>
              <p>
                <strong>רישיון לכל החיים:</strong> הרכישה מעניקה רישיון לשימוש אישי ומסחרי לכל
                החיים (Lifetime License) בתשלום חד-פעמי. אין מנוי מתחדש ואין עמלות נוספות.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
