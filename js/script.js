/* Main script — renders content from SITE_CONFIG and wires interactivity */
(function () {
  'use strict';

  const cfg = window.SITE_CONFIG;
  if (!cfg) { console.error('SITE_CONFIG missing'); return; }

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ===== Theme colors from config ===== */
  document.documentElement.style.setProperty('--primary', cfg.theme.primaryColor);
  document.documentElement.style.setProperty('--secondary', cfg.theme.secondaryColor);

  /* ===== Populate company info ===== */
  document.title = cfg.company.name + ' — Premium Motorcycles';
  const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const setAttr = (id, attr, val) => { const el = document.getElementById(id); if (el) el.setAttribute(attr, val); };

  setText('brandName', cfg.company.name);
  setText('footerName', cfg.company.name);
  setText('footerCopyName', cfg.company.name);
  setAttr('brandLogo', 'src', cfg.company.logo);
  setAttr('footerLogo', 'src', cfg.company.logo);
  setText('footerYear', new Date().getFullYear());
  setText('contactAddress', cfg.company.address);
  setText('footerAddress', cfg.company.address);
  setText('footerPhone', cfg.company.phone);
  setText('footerEmail', cfg.company.email);

  const phoneEl = $('#contactPhone');
  if (phoneEl) { phoneEl.textContent = cfg.company.phone; phoneEl.href = 'tel:' + cfg.company.phone.replace(/\s/g, ''); }
  const emailEl = $('#contactEmail');
  if (emailEl) { emailEl.textContent = cfg.company.email; emailEl.href = 'mailto:' + cfg.company.email; }

  /* Floating buttons */
  $('#floatWhatsapp').href = 'https://wa.me/' + cfg.company.whatsapp.replace(/\D/g, '');
  $('#floatCall').href = 'tel:' + cfg.company.phone.replace(/\s/g, '');

  /* Map */
  $('#mapFrame').src = cfg.company.mapsUrl;

  /* Social links */
  const socialIcons = { facebook: 'ⓕ', instagram: '📷', youtube: '▶', twitter: '𝕏' };
  const socialContainer = $('#socialLinks');
  Object.entries(cfg.social).forEach(([key, url]) => {
    if (!url) return;
    const a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener';
    a.setAttribute('aria-label', key);
    a.textContent = socialIcons[key] || '•';
    socialContainer.appendChild(a);
  });

  /* ===== Hero ===== */
  const heroTitleEl = $('#heroTitle');
  if (heroTitleEl) {
    const words = cfg.hero.title.trim().split(/\s+/);
    if (words.length > 1) {
      const last = words.pop();
      heroTitleEl.innerHTML = words.join(' ') + ' <span class="accent">' + last + '</span>';
    } else {
      heroTitleEl.textContent = cfg.hero.title;
    }
  }
  setText('heroSubtitle', cfg.hero.subtitle);
  const cta = $('#heroCta'); if (cta) cta.textContent = cfg.hero.ctaText;
  const heroBg = $('#heroBg');
  if (heroBg && cfg.hero.image) {
    const img = new Image();
    img.onload = () => {
      heroBg.style.backgroundImage = `url(${cfg.hero.image})`;
      $('.hero').classList.add('loaded');
    };
    img.onerror = () => $('.hero').classList.add('loaded');
    img.src = cfg.hero.image;
  }

  /* ===== Bikes grid ===== */
  const bikesGrid = $('#bikesGrid');
  cfg.bikes.forEach((bike) => {
    const card = document.createElement('article');
    card.className = 'bike-card reveal';
    card.innerHTML = `
      <div class="bike-card-img">
        <img loading="lazy" alt="${bike.name}" src="${bike.image}" onerror="this.style.display='none'" />
      </div>
      <div class="bike-card-body">
        <h3>${bike.name}</h3>
        <div class="bike-price">${bike.price}</div>
        <div class="bike-specs-mini">
          <span>${bike.specs.engine}</span>
          <span>${bike.specs.power}</span>
          <span>${bike.specs.topSpeed}</span>
        </div>
      </div>`;
    bikesGrid.appendChild(card);
  });

  /* ===== Specs table ===== */
  const specsTable = $('#specsTable');
  specsTable.innerHTML = `
    <thead><tr>
      <th>Model</th><th>Engine</th><th>Power</th><th>Torque</th><th>Weight</th><th>Top Speed</th>
    </tr></thead>
    <tbody>
      ${cfg.bikes.map(b => `
        <tr>
          <td><strong>${b.name}</strong></td>
          <td>${b.specs.engine}</td>
          <td>${b.specs.power}</td>
          <td>${b.specs.torque}</td>
          <td>${b.specs.weight}</td>
          <td>${b.specs.topSpeed}</td>
        </tr>`).join('')}
    </tbody>`;

  /* ===== Gallery ===== */
  const galleryGrid = $('#galleryGrid');
  cfg.gallery.forEach((src, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item reveal';
    item.innerHTML = `<img loading="lazy" alt="Gallery image ${i + 1}" src="${src}" onerror="this.style.opacity='0.2'" />`;
    galleryGrid.appendChild(item);
  });


  /* ===== Why choose us stats ===== */
  const statsGrid = $('#statsGrid');
  cfg.whyChooseUs.forEach((s) => {
    const el = document.createElement('div');
    el.className = 'stat-card reveal';
    el.innerHTML = `<div class="stat-number" data-target="${s.number}" data-suffix="${s.suffix || ''}">0</div>
                    <div class="stat-label">${s.label}</div>`;
    statsGrid.appendChild(el);
  });

  /* ===== Services ===== */
  const servicesGrid = $('#servicesGrid');
  cfg.services.forEach((s) => {
    const el = document.createElement('div');
    el.className = 'service-card reveal';
    el.innerHTML = `<div class="service-icon">${s.icon}</div><h3>${s.title}</h3><p>${s.desc}</p>`;
    servicesGrid.appendChild(el);
  });

  /* ===== EMI ===== */
  setText('emiHeadline', cfg.emi.headline);
  setText('emiNote', cfg.emi.calcNote);
  const emiPoints = $('#emiPoints');
  cfg.emi.points.forEach(p => { const li = document.createElement('li'); li.textContent = p; emiPoints.appendChild(li); });

  const calcEmi = () => {
    const P = parseFloat($('#loanAmount').value) || 0;
    const n = parseFloat($('#loanTenure').value) || 1;
    const r = (parseFloat($('#loanRate').value) || 0) / 12 / 100;
    const emi = r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    $('#emiResult').textContent = '$' + Math.round(emi).toLocaleString();
  };
  ['loanAmount', 'loanTenure', 'loanRate'].forEach(id => $('#' + id).addEventListener('input', calcEmi));
  calcEmi();

  /* ===== Testimonial slider ===== */
  const track = $('#sliderTrack');
  const dots = $('#sliderDots');
  cfg.testimonials.forEach((t, i) => {
    const slide = document.createElement('div');
    slide.className = 'testimonial-slide';
    slide.innerHTML = `<div class="testimonial-card">
      <p>"${t.text}"</p>
      <div class="testimonial-author">${t.name}</div>
      <div class="testimonial-role">${t.role}</div>
    </div>`;
    track.appendChild(slide);
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dots.appendChild(dot);
  });
  let currentSlide = 0;
  const totalSlides = cfg.testimonials.length;
  const goToSlide = (i) => {
    currentSlide = (i + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    $$('#sliderDots button').forEach((d, idx) => d.classList.toggle('active', idx === currentSlide));
  };
  $('#nextTestimonial').addEventListener('click', () => goToSlide(currentSlide + 1));
  $('#prevTestimonial').addEventListener('click', () => goToSlide(currentSlide - 1));
  let autoSlide = setInterval(() => goToSlide(currentSlide + 1), 6000);
  $('#testimonialSlider').addEventListener('mouseenter', () => clearInterval(autoSlide));
  $('#testimonialSlider').addEventListener('mouseleave', () => { autoSlide = setInterval(() => goToSlide(currentSlide + 1), 6000); });

  /* ===== FAQ accordion ===== */
  const faqList = $('#faqList');
  cfg.faqs.forEach((f) => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.innerHTML = `
      <button class="faq-question" aria-expanded="false">
        <span>${f.q}</span><span class="faq-icon">+</span>
      </button>
      <div class="faq-answer"><p>${f.a}</p></div>`;
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const active = item.classList.toggle('active');
      btn.setAttribute('aria-expanded', active);
    });
    faqList.appendChild(item);
  });

  /* ===== Sticky header + scroll progress + scroll-to-top ===== */
  const header = $('#siteHeader');
  const progress = $('#scrollProgress');
  const scrollTopBtn = $('#scrollTop');
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 30);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (y / h * 100) + '%';
    scrollTopBtn.classList.toggle('visible', y > 500);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ===== Mobile menu ===== */
  const menuToggle = $('#menuToggle');
  const mainNav = $('#mainNav');
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
  });
  $$('#mainNav a').forEach(a => a.addEventListener('click', () => mainNav.classList.remove('open')));

  /* ===== Scroll reveal + counters ===== */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } });
  }, { threshold: 0.12 });
  $$('.reveal').forEach(el => revealObserver.observe(el));

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.target;
      const suffix = el.dataset.suffix || '';
      const duration = 1600;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(target * eased).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString() + suffix;
      };
      requestAnimationFrame(step);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.4 });
  $$('.stat-number').forEach(el => counterObserver.observe(el));

  /* ===== Contact form validation ===== */
  const form = $('#contactForm');
  const status = $('#formStatus');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    const fields = form.querySelectorAll('input, textarea');
    fields.forEach(f => {
      f.classList.remove('error');
      if (!f.value.trim()) { f.classList.add('error'); valid = false; }
      if (f.type === 'email' && f.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value)) {
        f.classList.add('error'); valid = false;
      }
    });
    if (!valid) { status.textContent = 'Please fill all fields correctly.'; status.style.color = '#ff6b6b'; return; }
    status.textContent = 'Thank you! We will get back to you shortly.';
    status.style.color = '#22c55e';
    form.reset();
    setTimeout(() => (status.textContent = ''), 5000);
  });

})();

