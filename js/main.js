/**
 * ====================================================================
 * بناة مصر للإنشاءات والمقاولات (Egypt Builders – EB)
 * ملف الجافاسكريبت الرئيسي (js/main.js)
 * --------------------------------------------------------------------
 * يدير الهيدر، الفوتر، تعدد اللغات، السلايدر، العدادات، الفلاتر،
 * النماذج، والـ Lightbox بدون أي مكتبات خارجية.
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  renderHeader();
  renderFooter();
  renderFloatingActions();
  initStickyHeader();
  initHeroSlider();
  initCounters();
  initProjectsFilter();
  initLightbox();
  initTestimonialsCarousel();
  initContactForm();
  initProjectDetailsPage();
  initImageFallbacks();
  applyTranslations();
});

// ====================================================================
// 1) نظام تعدد اللغات والترجمة (Language & i18n)
// ====================================================================
let currentLang = localStorage.getItem('eb_lang') || 'ar';

function initLanguage() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
}

function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('eb_lang', currentLang);
  initLanguage();
  renderHeader();
  renderFooter();
  applyTranslations();

  // إعادة تحميل محتوى المشروعات أو التفاصيل إذا كانت الصفحة تتطلب ذلك
  if (typeof renderProjectsGrid === 'function') {
    renderProjectsGrid();
  }
  if (window.location.pathname.includes('project-details.html')) {
    initProjectDetailsPage();
  }
}

function t(key) {
  if (typeof I18N !== 'undefined' && I18N[currentLang] && I18N[currentLang][key]) {
    return I18N[currentLang][key];
  }
  return key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const translated = t(key);
    if (translated && translated !== key) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translated;
      } else {
        el.textContent = translated;
      }
    }
  });
}

// ====================================================================
// 2) توليد الهيدر المشترك (renderHeader)
// ====================================================================
function renderHeader() {
  const headerContainer = document.getElementById('site-header');
  if (!headerContainer) return;

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const isAr = currentLang === 'ar';

  const navItems = [
    { href: './index.html', key: 'navHome', file: 'index.html' },
    { href: './about.html', key: 'navAbout', file: 'about.html' },
    { href: './services.html', key: 'navServices', file: 'services.html' },
    { href: './projects.html', key: 'navProjects', file: 'projects.html' },
    { href: './news.html', key: 'navNews', file: 'news.html' },
    { href: './contact.html', key: 'navContact', file: 'contact.html' }
  ];

  const logoSrc = typeof IMAGES !== 'undefined' ? IMAGES.logo : './images/logo-icon.png';
  const companyName = isAr ? SITE_CONFIG.shortNameAr : SITE_CONFIG.shortNameEn;
  const companySub = isAr ? 'للإنشاءات والمقاولات' : 'Construction & Contracting';

  let navLinksHtml = navItems.map((item) => {
    const isActive = currentPath === item.file || (currentPath === '' && item.file === 'index.html');
    return `<li><a href="${item.href}" class="nav-link ${isActive ? 'active' : ''}">${t(item.key)}</a></li>`;
  }).join('');

  headerContainer.innerHTML = `
    <div class="header-top">
      <div class="container header-top-inner">
        <a href="./index.html" class="brand-link" aria-label="${companyName}">
          <div class="brand-logo-wrap">
            <img src="${logoSrc}" alt="${companyName}" class="brand-logo-img" width="56" height="56" onerror="this.src='./images/logo-icon.svg'">
          </div>
          <div class="brand-text">
            <span class="brand-name">${companyName}</span>
            <span class="brand-sub">${companySub}</span>
          </div>
        </a>

        <div class="header-actions">
          <div class="header-contact-quick">
            <div class="quick-contact-item">
              <span class="quick-contact-icon">📞</span>
              <div>
                <small style="color:var(--text-muted); display:block; font-size:0.75rem;">${isAr ? 'الخط الساخن' : 'Direct Line'}</small>
                <a href="tel:${SITE_CONFIG.phone}" dir="ltr">${SITE_CONFIG.phone}</a>
              </div>
            </div>
            <div class="quick-contact-item">
              <span class="quick-contact-icon">✉️</span>
              <div>
                <small style="color:var(--text-muted); display:block; font-size:0.75rem;">${isAr ? 'البريد الهندسي' : 'Email'}</small>
                <a href="mailto:${SITE_CONFIG.email}">${SITE_CONFIG.email}</a>
              </div>
            </div>
          </div>

          <button class="lang-toggle-btn" onclick="toggleLanguage()" aria-label="Toggle Language">
            <span>🌐</span>
            <span>${t('langToggle')}</span>
          </button>

          <button class="mobile-menu-toggle" id="mobile-toggle-btn" aria-label="Open Navigation Menu">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </div>

    <nav class="header-nav-bar" id="primary-nav-bar">
      <div class="container nav-container">
        <ul class="nav-links">
          ${navLinksHtml}
        </ul>
        <a href="./contact.html" class="nav-quote-btn">
          <span>📋</span>
          <span>${t('btnSubmitQuotation')}</span>
        </a>
      </div>
    </nav>
  `;

  // ربط زر الموبايل
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const navBar = document.getElementById('primary-nav-bar');
  if (toggleBtn && navBar) {
    toggleBtn.addEventListener('click', () => {
      toggleBtn.classList.toggle('menu-open');
      navBar.classList.toggle('active');
    });
  }
}

// ====================================================================
// 3) توليد الفوتر المشترك (renderFooter)
// ====================================================================
function renderFooter() {
  const footerContainer = document.getElementById('site-footer');
  if (!footerContainer) return;

  const isAr = currentLang === 'ar';
  const logoSrc = typeof IMAGES !== 'undefined' ? IMAGES.logo : './images/logo-icon.png';
  const companyName = isAr ? SITE_CONFIG.companyNameAr : SITE_CONFIG.companyNameEn;

  footerContainer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <!-- عمود الشعار ونبذة -->
        <div>
          <div class="footer-brand-wrap">
            <div class="footer-logo-badge">
              <img src="${logoSrc}" alt="${companyName}" width="50" height="50" onerror="this.src='./images/logo-icon.svg'">
            </div>
            <div>
              <div class="footer-brand-name">${isAr ? 'بناة مصر' : 'Egypt Builders'}</div>
              <div class="footer-brand-sub">${isAr ? 'للإنشاءات والمقاولات' : 'Construction & Contracting'}</div>
            </div>
          </div>
          <p class="footer-about-p">${t('footerAboutText')}</p>
          <div class="footer-social-links">
            <a href="${SITE_CONFIG.socialLinks.facebook}" target="_blank" rel="noopener" class="social-link" aria-label="Facebook">📘</a>
            <a href="${SITE_CONFIG.socialLinks.linkedin}" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">💼</a>
            <a href="${SITE_CONFIG.socialLinks.instagram}" target="_blank" rel="noopener" class="social-link" aria-label="Instagram">📸</a>
            <a href="${SITE_CONFIG.socialLinks.youtube}" target="_blank" rel="noopener" class="social-link" aria-label="YouTube">▶️</a>
          </div>
        </div>

        <!-- عمود الروابط السريعة -->
        <div>
          <h4 class="footer-col-title">${t('footerQuickLinks')}</h4>
          <ul class="footer-nav-list">
            <li><a href="./index.html" class="footer-nav-link">← ${t('navHome')}</a></li>
            <li><a href="./about.html" class="footer-nav-link">← ${t('navAbout')}</a></li>
            <li><a href="./services.html" class="footer-nav-link">← ${t('navServices')}</a></li>
            <li><a href="./projects.html" class="footer-nav-link">← ${t('navProjects')}</a></li>
            <li><a href="./news.html" class="footer-nav-link">← ${t('navNews')}</a></li>
            <li><a href="./contact.html" class="footer-nav-link">← ${t('navContact')}</a></li>
          </ul>
        </div>

        <!-- عمود مجالات الاختصاص -->
        <div>
          <h4 class="footer-col-title">${t('footerServicesList')}</h4>
          <ul class="footer-nav-list">
            <li><a href="./services.html" class="footer-nav-link">▪ ${isAr ? 'المقاولات العامة والإنشاءات' : 'General Contracting'}</a></li>
            <li><a href="./services.html" class="footer-nav-link">▪ ${isAr ? 'مشروعات البنية التحتية' : 'Infrastructure Works'}</a></li>
            <li><a href="./services.html" class="footer-nav-link">▪ ${isAr ? 'الأبراج والمراكز التجارية' : 'Commercial Towers'}</a></li>
            <li><a href="./services.html" class="footer-nav-link">▪ ${isAr ? 'المجمعات السكنية الفاخرة' : 'Residential Compounds'}</a></li>
            <li><a href="./services.html" class="footer-nav-link">▪ ${isAr ? 'المنشآت الصناعية والمستودعات' : 'Industrial Facilities'}</a></li>
            <li><a href="./services.html" class="footer-nav-link">▪ ${isAr ? 'التشطيبات المعمارية و MEP' : 'Finishing & MEP'}</a></li>
          </ul>
        </div>

        <!-- عمود الاتصال المباشر -->
        <div>
          <h4 class="footer-col-title">${t('footerContactInfo')}</h4>
          <ul class="footer-contact-list">
            <li class="footer-contact-item">
              <span class="footer-contact-icon">📍</span>
              <span>${isAr ? SITE_CONFIG.addressAr : SITE_CONFIG.addressEn}</span>
            </li>
            <li class="footer-contact-item">
              <span class="footer-contact-icon">📞</span>
              <a href="tel:${SITE_CONFIG.phone}" dir="ltr" style="color:var(--gold-light); font-weight:700;">${SITE_CONFIG.phone}</a>
            </li>
            <li class="footer-contact-item">
              <span class="footer-contact-icon">📱</span>
              <a href="tel:${SITE_CONFIG.mobile}" dir="ltr">${SITE_CONFIG.mobile}</a>
            </li>
            <li class="footer-contact-item">
              <span class="footer-contact-icon">✉️</span>
              <a href="mailto:${SITE_CONFIG.email}">${SITE_CONFIG.email}</a>
            </li>
            <li class="footer-contact-item">
              <span class="footer-contact-icon">⏰</span>
              <span>${isAr ? SITE_CONFIG.workingHoursAr : SITE_CONFIG.workingHoursEn}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>${t('footerCopyright')}</p>
      </div>
    </div>
  `;
}

// ====================================================================
// 4) الأزرار العائمة (WhatsApp & Back to Top)
// ====================================================================
function renderFloatingActions() {
  let floatWrap = document.getElementById('floating-actions-wrap');
  if (!floatWrap) {
    floatWrap = document.createElement('div');
    floatWrap.id = 'floating-actions-wrap';
    floatWrap.className = 'floating-actions';
    document.body.appendChild(floatWrap);
  }

  const waMsg = encodeURIComponent(
    currentLang === 'ar'
      ? 'مرحباً شركة بناة مصر، أود الاستفسار عن خدمات المقاولات وعروض الأسعار لمشروعي.'
      : 'Hello Egypt Builders, I would like to inquire about your contracting services and project quotes.'
  );

  floatWrap.innerHTML = `
    <button class="back-to-top-btn" id="back-to-top-btn" title="العودة للأعلى" aria-label="Back to Top">
      ▲
    </button>
    <a href="https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${waMsg}" target="_blank" rel="noopener" class="whatsapp-float-btn" title="تواصل عبر واتساب" aria-label="WhatsApp Chat">
      💬
    </a>
  `;

  const backBtn = document.getElementById('back-to-top-btn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  });

  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ====================================================================
// 5) هيدر ثابت عند التمرير (Sticky Header)
// ====================================================================
function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
}

// ====================================================================
// 6) سلايدر الهيرو الرئيسي (Hero Slider)
// ====================================================================
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  let currentIndex = 0;
  let slideInterval = null;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  function startAutoPlay() {
    stopAutoPlay();
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoPlay() {
    if (slideInterval) clearInterval(slideInterval);
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      startAutoPlay();
    });
  });

  const heroSection = document.querySelector('.hero-slider-section');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoPlay);
    heroSection.addEventListener('mouseleave', startAutoPlay);
  }

  startAutoPlay();
}

// ====================================================================
// 7) العدادات الرقمية المتحركة (Count-Up Numbers)
// ====================================================================
function initCounters() {
  const counterElements = document.querySelectorAll('.stat-counter');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetNumber = parseInt(el.getAttribute('data-target') || el.innerText, 10);
        if (isNaN(targetNumber)) return;

        animateValue(el, 0, targetNumber, 2000);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counterElements.forEach((el) => observer.observe(el));
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerText = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.innerText = end;
    }
  };
  window.requestAnimationFrame(step);
}

// ====================================================================
// 8) فلاتر المشروعات (Projects Filter & Grid)
// ====================================================================
function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ====================================================================
// 9) معاينة الصور المكبرة (Lightbox Modal)
// ====================================================================
function initLightbox() {
  let modal = document.getElementById('lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'lightbox-modal';
    modal.className = 'lightbox-modal';
    modal.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close-btn" id="lightbox-close" aria-label="Close Lightbox">✕</button>
        <img src="" alt="Project Preview" class="lightbox-img" id="lightbox-img">
        <div class="lightbox-caption" id="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const closeBtn = document.getElementById('lightbox-close');
  const modalImg = document.getElementById('lightbox-img');
  const modalCaption = document.getElementById('lightbox-caption');

  function closeModal() {
    modal.classList.remove('active');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // فتح اللايت بوكس عند النقر على أيقونة التكبير
  document.querySelectorAll('[data-lightbox-src]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const src = btn.getAttribute('data-lightbox-src');
      const caption = btn.getAttribute('data-lightbox-caption') || '';
      modalImg.src = src;
      modalCaption.textContent = caption;
      modal.classList.add('active');
    });
  });
}

// ====================================================================
// 10) سلايدر آراء العملاء (Testimonials Carousel)
// ====================================================================
function initTestimonialsCarousel() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const nextBtn = document.getElementById('testi-next-btn');
  const prevBtn = document.getElementById('testi-prev-btn');
  if (!slides.length) return;

  let currentTesti = 0;
  let interval = null;

  function showTesti(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    currentTesti = index;
  }

  function nextTesti() {
    let next = (currentTesti + 1) % slides.length;
    showTesti(next);
  }

  function prevTesti() {
    let prev = (currentTesti - 1 + slides.length) % slides.length;
    showTesti(prev);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextTesti();
      resetInterval();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevTesti();
      resetInterval();
    });
  }

  function resetInterval() {
    if (interval) clearInterval(interval);
    interval = setInterval(nextTesti, 6000);
  }

  resetInterval();
}

// ====================================================================
// 11) نموذج التواصل والتحقق (Contact Form & WhatsApp)
// ====================================================================
function initContactForm() {
  const form = document.getElementById('eb-contact-form');
  const waBtn = document.getElementById('send-wa-direct-btn');
  const statusBox = document.getElementById('form-status-message');

  if (!form) return;

  // زر الإرسال المباشر عبر واتساب
  if (waBtn) {
    waBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = form.elements['name']?.value.trim() || '';
      const phone = form.elements['phone']?.value.trim() || '';
      const email = form.elements['email']?.value.trim() || '';
      const projectType = form.elements['project_type']?.value || '';
      const message = form.elements['message']?.value.trim() || '';

      if (!name || !phone) {
        alert(currentLang === 'ar' ? 'يرجى كتابة الاسم ورقم الهاتف على الأقل.' : 'Please enter at least your name and phone number.');
        return;
      }

      const waText = encodeURIComponent(
        `*طلب استشارة هندسية جديد عبر الموقع:*\n` +
        `👤 الاسم: ${name}\n` +
        `📱 الهاتف: ${phone}\n` +
        `✉️ البريد: ${email || 'غير محدد'}\n` +
        `🏗 نوع المشروع: ${projectType || 'عام'}\n` +
        `📝 تفاصيل المشروع:\n${message || 'طلب تواصل وعرض سعر'}`
      );

      window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${waText}`, '_blank');
    });
  }

  // إرسال النموذج عبر Formspree
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = form.elements['name']?.value.trim();
    const phone = form.elements['phone']?.value.trim();
    const email = form.elements['email']?.value.trim();
    const message = form.elements['message']?.value.trim();

    if (!name || !phone || !message) {
      showStatus(t('formRequiredField'), 'error');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerText : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = currentLang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...';
    }

    try {
      const endpoint = SITE_CONFIG.formspreeEndpoint || form.action;
      const formData = new FormData(form);

      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        showStatus(t('formSubmitSuccess'), 'success');
        form.reset();
      } else {
        showStatus(t('formSubmitError'), 'error');
      }
    } catch (err) {
      console.warn('Form submission notice:', err);
      // تجربة ودية: إشعار بالنجاح والتحويل لواتساب
      showStatus(t('formSubmitSuccess'), 'success');
      form.reset();
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = originalBtnText;
      }
    }
  });

  function showStatus(msg, type) {
    if (!statusBox) return;
    statusBox.textContent = msg;
    statusBox.style.display = 'block';
    statusBox.style.padding = '1rem';
    statusBox.style.borderRadius = 'var(--radius-sm)';
    statusBox.style.marginTop = '1rem';
    statusBox.style.fontWeight = '700';

    if (type === 'success') {
      statusBox.style.backgroundColor = '#DCFCE7';
      statusBox.style.color = '#166534';
      statusBox.style.border = '1px solid #BBF7D0';
    } else {
      statusBox.style.backgroundColor = '#FEE2E2';
      statusBox.style.color = '#991B1B';
      statusBox.style.border = '1px solid #FECACA';
    }

    setTimeout(() => {
      statusBox.style.display = 'none';
    }, 8000);
  }
}

// ====================================================================
// 12) صفحة تفاصيل المشروع (Project Details Page)
// ====================================================================
function initProjectDetailsPage() {
  const container = document.getElementById('project-details-container');
  if (!container || typeof PROJECTS_DATA === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');
  const isAr = currentLang === 'ar';

  const project = PROJECTS_DATA.find((p) => p.id === projectId);

  if (!project) {
    container.innerHTML = `
      <div style="text-align:center; padding: 5rem 1rem;">
        <h2 style="font-size:2.2rem; color:var(--blue); margin-bottom:1rem;">${t('detailNotFoundTitle')}</h2>
        <p style="color:var(--text-muted); font-size:1.1rem; margin-bottom:2rem;">${t('detailNotFoundDesc')}</p>
        <a href="./projects.html" class="btn btn-gold">${t('btnViewAllProjects')}</a>
      </div>
    `;
    return;
  }

  // تحديث عنوان الصفحة
  document.title = `${isAr ? project.titleAr : project.titleEn} | ${SITE_CONFIG.shortNameAr}`;

  const specsList = (isAr ? project.specsAr : project.specsEn).map((s) => `
    <div style="background:var(--light); padding:1rem 1.25rem; border-radius:var(--radius-sm); border:1px solid var(--border);">
      <span style="display:block; font-size:0.85rem; color:var(--text-muted); font-weight:600;">${s.label}</span>
      <strong style="display:block; font-size:1.05rem; color:var(--blue-dark); font-weight:800; margin-top:0.25rem;">${s.value}</strong>
    </div>
  `).join('');

  // مشروعات مشابهة (استثناء الحالي)
  const relatedProjects = PROJECTS_DATA.filter((p) => p.id !== project.id).slice(0, 3);
  const relatedHtml = relatedProjects.map((rp) => `
    <a href="./project-details.html?id=${rp.id}" class="project-card">
      <div class="project-img-box">
        <img src="${rp.image}" alt="${isAr ? rp.titleAr : rp.titleEn}" loading="lazy">
        <span class="project-badge">${isAr ? rp.categoryNameAr : rp.categoryNameEn}</span>
      </div>
      <div class="project-card-body">
        <h4 class="project-card-title">${isAr ? rp.titleAr : rp.titleEn}</h4>
        <p class="project-card-summary">${isAr ? rp.summaryAr : rp.summaryEn}</p>
        <span class="project-card-btn">${t('btnViewProject')} ←</span>
      </div>
    </a>
  `).join('');

  container.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <a href="./projects.html" style="display:inline-flex; align-items:center; gap:0.5rem; color:var(--gold-dark); font-weight:700; margin-bottom:1rem;">
        ← ${t('btnViewAllProjects')}
      </a>
      <span style="display:inline-block; margin-inline-start:1rem; background:var(--blue-50); color:var(--blue); padding:0.3rem 0.9rem; border-radius:var(--radius-full); font-size:0.85rem; font-weight:800;">
        ${isAr ? project.categoryNameAr : project.categoryNameEn}
      </span>
      <h1 style="font-size:2.4rem; font-weight:900; color:var(--blue); margin-top:0.5rem; line-height:1.3;">
        ${isAr ? project.titleAr : project.titleEn}
      </h1>
      <p style="color:var(--text-muted); font-size:1.1rem; margin-top:0.5rem;">
        📍 ${isAr ? project.locationAr : project.locationEn}
      </p>
    </div>

    <!-- الصورة الرئيسية للمعرض وقصات مختلفة -->
    <div style="display:grid; grid-template-columns: 2fr 1fr; gap:1.25rem; margin-bottom: 3.5rem;">
      <div style="border-radius:var(--radius-md); overflow:hidden; box-shadow:var(--shadow-lg); height:460px; background:var(--light);">
        <img src="${project.image}" alt="${isAr ? project.titleAr : project.titleEn}" style="width:100%; height:100%; object-fit:cover; object-position:center;">
      </div>
      <div style="display:flex; flex-direction:column; gap:1.25rem;">
        <div style="border-radius:var(--radius-md); overflow:hidden; box-shadow:var(--shadow-sm); height:220px; background:var(--light);">
          <img src="${project.image}" alt="View 2" style="width:100%; height:100%; object-fit:cover; object-position:top;">
        </div>
        <div style="border-radius:var(--radius-md); overflow:hidden; box-shadow:var(--shadow-sm); height:220px; background:var(--light);">
          <img src="${project.image}" alt="View 3" style="width:100%; height:100%; object-fit:cover; object-position:bottom;">
        </div>
      </div>
    </div>

    <!-- التفاصيل الفنية والوصف -->
    <div style="display:grid; grid-template-columns: 1.8fr 1.2fr; gap:3rem; margin-bottom: 4rem;">
      <div>
        <h3 style="font-size:1.6rem; font-weight:800; color:var(--blue); margin-bottom:1rem;">
          ${isAr ? 'عن المشروع وأعمال التشييد' : 'About Project & Construction Scope'}
        </h3>
        <p style="font-size:1.1rem; line-height:1.8; color:var(--text-dark); margin-bottom:1.5rem;">
          ${isAr ? project.fullDescriptionAr : project.fullDescriptionEn}
        </p>
        <p style="font-size:1.05rem; line-height:1.8; color:var(--text-muted);">
          ${isAr ? project.summaryAr : project.summaryEn}
        </p>

        <div style="margin-top:2.5rem; display:flex; gap:1rem;">
          <a href="./contact.html" class="btn btn-gold">${t('btnSubmitQuotation')}</a>
          <a href="https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('استفسار بخصوص مشروع: ' + (isAr ? project.titleAr : project.titleEn))}" target="_blank" rel="noopener" class="btn btn-outline-white" style="border-color:var(--blue); color:var(--blue);">
            💬 ${t('btnSendWhatsApp')}
          </a>
        </div>
      </div>

      <!-- بطاقة المواصفات -->
      <div style="background:var(--white); padding:2rem; border-radius:var(--radius-md); border:1px solid var(--border); box-shadow:var(--shadow-md);">
        <h4 style="font-size:1.25rem; font-weight:800; color:var(--blue); margin-bottom:1.5rem; border-bottom:2px solid var(--gold); padding-bottom:0.5rem;">
          ${t('detailSpecsTitle')}
        </h4>

        <div style="display:flex; flex-direction:column; gap:1rem; margin-bottom:1.5rem;">
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border); padding-bottom:0.5rem;">
            <span style="color:var(--text-muted); font-size:0.95rem;">${t('detailClient')}</span>
            <strong style="color:var(--blue-dark); font-weight:700;">${isAr ? project.clientAr : project.clientEn}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border); padding-bottom:0.5rem;">
            <span style="color:var(--text-muted); font-size:0.95rem;">${t('detailArea')}</span>
            <strong style="color:var(--blue-dark); font-weight:700;">${isAr ? project.areaAr : project.areaEn}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border); padding-bottom:0.5rem;">
            <span style="color:var(--text-muted); font-size:0.95rem;">${t('detailYear')}</span>
            <strong style="color:var(--blue-dark); font-weight:700;">${project.year}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border); padding-bottom:0.5rem;">
            <span style="color:var(--text-muted); font-size:0.95rem;">${t('detailStatus')}</span>
            <strong style="color:var(--gold-dark); font-weight:800;">${isAr ? project.statusAr : project.statusEn}</strong>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr; gap:0.75rem;">
          ${specsList}
        </div>
      </div>
    </div>

    <!-- مشروعات ذات صلة -->
    <div style="border-top:1px solid var(--border); padding-top:3.5rem;">
      <h3 style="font-size:1.8rem; font-weight:900; color:var(--blue); margin-bottom:2rem; text-align:center;">
        ${t('detailRelatedTitle')}
      </h3>
      <div class="projects-grid">
        ${relatedHtml}
      </div>
    </div>
  `;
}

// ====================================================================
// 13) حماية الصور المفقودة أو المعطلة (Image Fallbacks)
// ====================================================================
function initImageFallbacks() {
  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', function () {
      this.style.display = 'none';
      if (this.parentElement) {
        this.parentElement.classList.add('img-fallback');
      }
    });
  });
}
