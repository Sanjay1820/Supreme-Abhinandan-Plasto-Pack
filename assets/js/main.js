/**
 * ABHINANDAN PLASTOPACK - Main JavaScript
 * Handles navigation, mobile drawer, product tabs, quotation modal,
 * stats animation, and inquiry form submission.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header on Scroll
  const header = document.querySelector('.header-main');
  const btnFloatTop = document.getElementById('btnFloatTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      btnFloatTop?.classList.add('show');
    } else {
      btnFloatTop?.classList.remove('show');
    }
  });

  btnFloatTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 2. Mobile Menu & Dropdown Navigation Toggle (Dual ID support)
  const mobileToggle = document.getElementById('mobileToggle') || document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
      }
    });
  }

  // Dropdown click toggle for mobile / touch devices
  const dropdownToggles = document.querySelectorAll('.nav-item.has-dropdown > .nav-link, .nav-item.dropdown > .nav-link');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        const parent = toggle.closest('.nav-item');
        if (parent) {
          parent.classList.toggle('open');
        }
      }
    });
  });

  // Submenu click toggle for Pallets on mobile
  const submenuToggles = document.querySelectorAll('.dropdown-submenu > .dropdown-item');
  submenuToggles.forEach(subToggle => {
    subToggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        const parentSub = subToggle.closest('.dropdown-submenu');
        if (parentSub) {
          parentSub.classList.toggle('open');
        }
      }
    });
  });

  // 3. Interactive Product Filtering / Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const productCards = document.querySelectorAll('.product-card');
  const productSearchInput = document.getElementById('productSearch');
  const productOverview = document.getElementById('productOverview');
  let activeCategory = 'all';

  function filterProducts() {
    const term = productSearchInput?.value.toLowerCase().trim() || '';
    tabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-category') === activeCategory);
    });
    if (productOverview) {
      productOverview.style.display = activeCategory === 'all' || activeCategory === 'looms' ? 'flex' : 'none';
    }
    productCards.forEach(card => {
      const matchesCategory = activeCategory === 'all' || card.getAttribute('data-category') === activeCategory;
      const searchableText = ['.product-title', '.product-desc', '.product-specs-list']
        .map(selector => card.querySelector(selector)?.textContent.toLowerCase() || '')
        .join(' ');
      card.style.display = matchesCategory && searchableText.includes(term) ? 'flex' : 'none';
      if (card.style.display === 'flex') {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  }

  function selectProductCategory(category, scrollToProducts = false) {
    activeCategory = category;
    if (productSearchInput) productSearchInput.value = '';
    filterProducts();
    if (scrollToProducts) {
      const tabs = document.querySelector('.product-tabs-nav');
      if (tabs) {
        const top = tabs.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight || 86) - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }

  if (tabButtons.length > 0 && productCards.length > 0) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        selectProductCategory(category);
      });
    });
  }

  // 4. Products Search Filter (for products.html)
  if (productSearchInput) {
    productSearchInput.addEventListener('input', filterProducts);
    const categories = new Set(Array.from(tabButtons, btn => btn.getAttribute('data-category')));
    const selectCategoryFromHash = () => {
      const category = window.location.hash.slice(1);
      if (categories.has(category)) selectProductCategory(category, true);
      else if (!category) selectProductCategory('all');
    };

    document.querySelectorAll('a[href]').forEach(link => {
      const target = new URL(link.getAttribute('href'), window.location.href);
      if (target.pathname !== window.location.pathname || target.search !== window.location.search || !categories.has(target.hash.slice(1))) return;
      link.addEventListener('click', (e) => {
        if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        if (window.location.hash === target.hash) {
          selectCategoryFromHash();
        } else {
          window.location.hash = target.hash;
        }
      });
    });
    window.addEventListener('hashchange', selectCategoryFromHash);
    selectCategoryFromHash();
  }

  // 5. Product Detail & Quote Modal Functionality
  const quoteModal = document.getElementById('quoteModal');
  const modalCloseBtns = document.querySelectorAll('.modal-close-trigger');
  const quoteTriggers = document.querySelectorAll('.open-quote-modal');
  const modalTitle = document.getElementById('quoteModalTitle');
  const modalBadge = document.getElementById('modalProductBadge');
  const modalImg = document.getElementById('modalProductImg');
  const modalDesc = document.getElementById('modalProductDesc');
  const modalSpecs = document.getElementById('modalProductSpecs');
  const modalWaBtn = document.getElementById('modalWaBtn');
  const modalToggleBtn = document.getElementById('modalToggleQuoteFormBtn');
  const modalCollapsibleForm = document.getElementById('modalCollapsibleForm');
  const modalHiddenProduct = document.getElementById('modalHiddenProduct');

  function openQuoteModal(productName = '', card = null) {
    if (!quoteModal) return;

    // Reset collapsible form state
    if (modalCollapsibleForm) {
      modalCollapsibleForm.style.display = 'none';
    }
    if (modalToggleBtn) {
      modalToggleBtn.innerHTML = `<i class="fa-solid fa-file-invoice"></i> Request Written Quote`;
    }

    if (card) {
      // Extract from the clicked card
      const title = card.querySelector('.product-title')?.innerText || productName || 'Precision Industrial Roller';
      const badge = card.querySelector('.product-badge-cat')?.innerText || 'Industrial Roller';
      const imgElem = card.querySelector('.product-thumb img');
      const imgSrc = imgElem ? imgElem.getAttribute('src') : 'assets/images/products/all.webp';
      const desc = card.querySelector('.product-desc')?.innerText || 'Custom engineered precision industrial roller manufactured with micro-tolerance concentricity (< 0.01mm) and dynamic balancing.';
      const specsHtml = card.querySelector('.product-specs-list')?.innerHTML || '';

      if (modalTitle) modalTitle.innerText = title;
      if (modalBadge) modalBadge.innerText = badge;
      if (modalImg) {
        modalImg.src = imgSrc;
        modalImg.alt = title;
      }
      if (modalDesc) modalDesc.innerText = desc;
      if (modalSpecs) modalSpecs.innerHTML = specsHtml;
      if (modalHiddenProduct) modalHiddenProduct.value = title;

      // Update WhatsApp URL
      if (modalWaBtn) {
        const waText = encodeURIComponent(`Hello Abhinandan Plastopack, I am interested in ${title} (${badge}). Please provide quotation, delivery time, and technical specifications.`);
        modalWaBtn.href = `https://api.whatsapp.com/send?phone=916355517631&text=${waText}`;
      }
    } else {
      // General Inquiry (e.g. from header "Get Quote" button)
      const title = productName || 'Custom Technical Quotation';
      if (modalTitle) modalTitle.innerText = title;
      if (modalBadge) modalBadge.innerText = 'Supreme Authorized Distributor';
      if (modalImg) {
        modalImg.src = 'assets/images/products/all.webp';
        modalImg.alt = 'Supreme Material Handling Products';
      }
      if (modalDesc) {
        modalDesc.innerText = 'Manufacturer of Precision Industrial Rollers & Weaving Loom Cloth Rolls since 1985. Request custom quotes with micro-tolerance concentricity (< 0.01mm) and dynamic balancing.';
      }
      if (modalSpecs) {
        modalSpecs.innerHTML = `
          <div class="spec-row"><span class="spec-label">Capacity:</span><span class="spec-val">170 cm to 400 cm</span></div>
          <div class="spec-row"><span class="spec-label">Tolerances:</span><span class="spec-val">Concentricity &lt; 0.01 mm</span></div>
          <div class="spec-row"><span class="spec-label">Facility:</span><span class="spec-val">Dual Dedicated Units (Ahmedabad)</span></div>
        `;
      }
      if (modalHiddenProduct) modalHiddenProduct.value = title;
      if (modalWaBtn) {
        const waText = encodeURIComponent(`Hello Abhinandan Plastopack, I visited your website and would like technical consultation and quotation.`);
        modalWaBtn.href = `https://api.whatsapp.com/send?phone=916355517631&text=${waText}`;
      }
      // For general header clicks, reveal the form directly
      if (modalCollapsibleForm) {
        modalCollapsibleForm.style.display = 'block';
      }
    }

    quoteModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeQuoteModal() {
    if (quoteModal) {
      quoteModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Toggle quote form button
  if (modalToggleBtn && modalCollapsibleForm) {
    modalToggleBtn.addEventListener('click', () => {
      const isVisible = modalCollapsibleForm.style.display === 'block';
      modalCollapsibleForm.style.display = isVisible ? 'none' : 'block';
      modalToggleBtn.innerHTML = isVisible
        ? `<i class="fa-solid fa-file-invoice"></i> Request Written Quote`
        : `<i class="fa-solid fa-chevron-up"></i> Hide RFQ Form`;
      if (!isVisible) {
        setTimeout(() => {
          modalCollapsibleForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 50);
      }
    });
  }

  // Product Slug mapping dictionary for clean URL navigation
  const productSlugMap = {
    'supreme-products cloth roll': 'supreme-products',
    'toyota cloth roll': 'toyota',
    'picanol cloth roll': 'picanol',
    'itema cloth roll': 'itema',
    'waterjet cloth roll': 'waterjet',
    'sulzer cloth roll': 'sulzer',
    'sulzer / somet cloth roll': 'sulzer',
    'sulzer & somet cloth roll': 'sulzer',
    'somet cloth roll': 'somet',
    'mild steel precision rollers': 'ms-guide',
    'mild steel roller range': 'ms-guide',
    'mild steel guide roller': 'ms-guide',
    'ms cooling & heating roller': 'ms-cooling',
    'mild steel drum roller': 'ms-drum',
    'ms knurling & grooved roller': 'ms-knurling',
    'coated & plated rollers': 'hard-chrome',
    'hard chrome plated roller': 'hard-chrome',
    'natural rubber coated roller': 'natural-rubber',
    'teflon / ptfe coated roller': 'teflon-coated',
    'stainless steel precision rollers': 'ss-guide',
    'stainless steel (ss) guide roller': 'ss-guide',
    'ss spiral scroll grooved roller': 'ss-scroll'
  };

  function resolveProductSlug(productName, card) {
    if (card && card.id) {
      const cid = card.id.toLowerCase().trim();
      if (cid === 'sulzar') return 'sulzer';
      if (cid.startsWith('ms-cooling')) return 'ms-cooling';
      if (cid.startsWith('ss-cooling')) return 'ss-guide';
      return cid;
    }
    const clean = (productName || '').toLowerCase().trim();
    if (productSlugMap[clean]) return productSlugMap[clean];
    for (const key in productSlugMap) {
      if (clean.includes(key) || key.includes(clean)) {
        return productSlugMap[key];
      }
    }
    if (card) {
      const cardTitle = card.querySelector('.product-title')?.innerText.toLowerCase().trim() || '';
      for (const key in productSlugMap) {
        if (cardTitle.includes(key) || key.includes(cardTitle)) {
          return productSlugMap[key];
        }
      }
    }
    return clean ? encodeURIComponent(clean.replace(/\s+/g, '-')) : 'supreme-products';
  }

  // Redirect to Full Product Detail Page instead of popup modal
  quoteTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.product-card');
      const product = btn.getAttribute('data-product') || '';
      if (!card && !product) {
        // General inquiry from header
        window.location.href = 'product-detail.html?product=supreme-products#quote-form';
        return;
      }
      const slug = resolveProductSlug(product, card);
      window.location.href = `product-detail.html?product=${slug}`;
    });
  });

  // Make Product Card Thumbs & Titles navigate to product detail full page
  document.querySelectorAll('.product-card').forEach(card => {
    const thumb = card.querySelector('.product-thumb');
    const title = card.querySelector('.product-title');
    [thumb, title].forEach(el => {
      if (el) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
          const prodName = card.querySelector('.product-title')?.innerText || '';
          const slug = resolveProductSlug(prodName, card);
          window.location.href = `product-detail.html?product=${slug}`;
        });
      }
    });
  });

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', closeQuoteModal);
  });

  if (quoteModal) {
    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) {
        closeQuoteModal();
      }
    });
  }

  // 6. WhatsApp Direct Chat Button Helper
  const waButtons = document.querySelectorAll('.wa-direct-chat');
  waButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const product = btn.getAttribute('data-product') || 'Precision Industrial Rollers';
      const text = encodeURIComponent(`Hello Abhinandan Plastopack, I visited your website and would like technical consultation and quotation for: ${product}`);
      const waUrl = `https://api.whatsapp.com/send?phone=916355517631&text=${text}`;
      window.open(waUrl, '_blank');
    });
  });

  // 7. Form Submissions (Interactive client feedback simulation)
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modalName')?.value || 'Valued Customer';
      const phone = document.getElementById('modalPhone')?.value || '';
      const product = modalHiddenProduct?.value || modalTitle?.innerText || 'Supreme Material Handling Products';

      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting Request...`;

      setTimeout(() => {
        submitBtn.innerHTML = `<i class="fa-solid fa-check"></i> Request Received!`;
        submitBtn.style.background = '#10b981';

        let successBox = quoteForm.querySelector('.quote-success-msg');
        if (!successBox) {
          successBox = document.createElement('div');
          successBox.className = 'quote-success-msg';
          successBox.style.cssText = 'background: #ecfdf5; border: 1px solid #10b981; color: #065f46; padding: 14px; border-radius: 8px; margin-top: 14px; font-size: 0.92rem; font-weight: 600; text-align: center;';
          quoteForm.appendChild(successBox);
        }
        successBox.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #10b981; margin-right: 6px;"></i> Thank you, <strong>${name}</strong>! Your request for "${product}" has been registered. Our team will contact you at <strong>${phone}</strong> shortly.`;
        successBox.style.display = 'block';

        setTimeout(() => {
          closeQuoteModal();
          quoteForm.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          if (successBox) successBox.style.display = 'none';
        }, 2200);
      }, 1000);
    });
  }

  const contactPageForm = document.getElementById('contactPageForm');
  if (contactPageForm) {
    contactPageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value || 'Valued Customer';
      const phone = document.getElementById('contactPhone')?.value || '';

      const submitBtn = contactPageForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending Message...`;

      setTimeout(() => {
        submitBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Message Sent Successfully!`;
        submitBtn.style.background = '#10b981';

        let successBox = contactPageForm.querySelector('.contact-success-msg');
        if (!successBox) {
          successBox = document.createElement('div');
          successBox.className = 'contact-success-msg';
          successBox.style.cssText = 'background: #ecfdf5; border: 1px solid #10b981; color: #065f46; padding: 16px; border-radius: 8px; margin-top: 16px; font-size: 0.95rem; font-weight: 600; text-align: center;';
          contactPageForm.appendChild(successBox);
        }
        successBox.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #10b981; font-size: 1.1rem; margin-right: 6px;"></i> Thank you, <strong>${name}</strong>! Your message has been received. Our team will get back to you shortly.`;
        successBox.style.display = 'block';

        setTimeout(() => {
          contactPageForm.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          setTimeout(() => {
            if (successBox) successBox.style.display = 'none';
          }, 6000);
        }, 2000);
      }, 1200);
    });
  }

  // 8. Stats Counter Animation
  const counters = document.querySelectorAll('.stats-number[data-target]');
  let animated = false;

  function runCounters() {
    if (animated) return;
    const statsSection = document.querySelector('.stats-bar-wrapper');
    if (!statsSection) return;

    const rect = statsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      animated = true;
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const isYear = counter.getAttribute('data-isyear') === 'true';
        let count = isYear ? 1900 : 0;
        const speed = isYear ? 4 : Math.ceil(target / 40);

        const updateCount = () => {
          count += speed;
          if (count < target) {
            counter.innerText = count;
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    }
  }

  // 9. Hero Studio Slider (Gayatri Rubtech Style)
  const slides = document.querySelectorAll('.slider-slide');
  const prevBtn = document.getElementById('sliderPrevBtn');
  const nextBtn = document.getElementById('sliderNextBtn');
  const counterBox = document.getElementById('sliderCounterDisplay');
  const dotsContainer = document.getElementById('sliderDots');
  let currentSlide = 0;
  const totalSlides = slides.length;
  let slideInterval = null;

  if (totalSlides > 0) {
    // Generate dots if container exists
    if (dotsContainer && dotsContainer.children.length === 0) {
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => {
          goToSlide(i);
          resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
      }
    }

    function updateCounterDisplay(index) {
      if (counterBox) {
        // Formatted as "1 . 6" matching Gayatri Rubtech screenshot
        counterBox.innerHTML = `${index + 1}<span class="dot-sep">.</span>${totalSlides}`;
      }
      // Update dots
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((d, idx) => {
          d.classList.toggle('active', idx === index);
        });
      }
    }

    function goToSlide(index) {
      slides[currentSlide].classList.remove('active');
      currentSlide = (index + totalSlides) % totalSlides;
      slides[currentSlide].classList.add('active');
      updateCounterDisplay(currentSlide);
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    nextBtn?.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });

    prevBtn?.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });

    // Auto Play Interval
    function startAutoSlide() {
      if (!slideInterval) {
        slideInterval = setInterval(nextSlide, 4000);
      }
    }

    function stopAutoSlide() {
      if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
      }
    }

    function resetAutoSlide() {
      stopAutoSlide();
      startAutoSlide();
    }

    // Continuous auto-slide: Do NOT stop on mouse hover
    // (Slider continues smoothly even when mouse is hovered over banner)

    // Initial counter setup & start
    updateCounterDisplay(0);
    startAutoSlide();
  }

  // ==========================================================================
  // GLOBAL BOTTOM-TO-TOP SCROLL REVEAL (ALL PAGES)
  // Automatically attaches fade-in-up effect to headings, text, cards & sections
  // ==========================================================================
  function initBottomToTopReveal() {
    const targetSelectors = [
      'section h2',
      'section h3',
      '.section-title',
      '.section-subtitle',
      '.section-header',
      '.badge-tag',
      '.badge-pill',
      '.product-card',
      '.line-card',
      '.grade-badge-card',
      '.why-card',
      '.industry-card',
      '.stat-card',
      '.stats-card',
      '.facility-card',
      '.spec-table-custom',
      '.specs-table-grid',
      '.detail-desc-box',
      '.detail-specs-box',
      '.faq-accordion-item',
      '.footer-brand',
      '.footer-top-grid > div'
    ];

    const elementsToReveal = document.querySelectorAll(targetSelectors.join(', '));
    if (!elementsToReveal.length) return;

    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      const observerOptions = {
        threshold: 0.12,
        rootMargin: '0px 0px -30px 0px'
      };

      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Group sibling cards to assign staggered delays
      const containerParents = new Set();

      elementsToReveal.forEach((el) => {
        // Skip hero above-the-fold elements that already animate via CSS keyframe
        if (el.closest('.silpack-hero-section') || el.closest('.page-header-banner') || el.closest('.pallets-hero')) {
          return;
        }

        el.classList.add('reveal-up');

        // Check if element is inside a grid or list of cards for cascading stagger
        const parent = el.parentElement;
        if (parent && (parent.classList.contains('products-grid') || 
                       parent.classList.contains('industries-grid') || 
                       parent.classList.contains('why-grid') ||
                       parent.style.display === 'grid' || 
                       parent.style.display === 'flex')) {
          if (!containerParents.has(parent)) {
            containerParents.add(parent);
            const siblings = Array.from(parent.children).filter(child => child.matches(targetSelectors.join(', ')));
            siblings.forEach((sibling, idx) => {
              const delayClass = `reveal-delay-${Math.min((idx % 6) + 1, 6)}`;
              sibling.classList.add(delayClass);
            });
          }
        }

        revealObserver.observe(el);

        // Immediate check for elements already in viewport on load
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-revealed');
          revealObserver.unobserve(el);
        }
      });
    } else {
      // Fallback if no IntersectionObserver
      elementsToReveal.forEach(el => el.classList.add('is-revealed'));
    }
  }

  initBottomToTopReveal();

});