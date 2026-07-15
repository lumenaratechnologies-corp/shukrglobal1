/**
 * Shukr Global Website Script
 * Interactivity: Sticky Nav, Mobile Menu, Dynamic Tech Specs Modals, Inquiry Form Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Sticky Navigation Header
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navList = document.getElementById('nav-list');
  const navLinks = document.querySelectorAll('.nav-link, .cta-nav-btn');

  mobileToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    mobileToggle.innerHTML = navList.classList.contains('active') ? '&times;' : '&#9776;';
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      mobileToggle.innerHTML = '&#9776;';
    });
  });

  // 3. Technical Specification Sheets Data
  const specificationsData = {
    'pink-onion': {
      title: 'Dehydrated Organic Pink Onion Powder',
      subtitle: 'Premium Pink Grade - Technical Specification Sheet',
      specs: [
        { parameter: 'Product Name', value: 'Dehydrated Organic Pink Onion Powder' },
        { parameter: 'Botanical Name', value: 'Allium cepa' },
        { parameter: 'Origin', value: 'India (Certified Organic Farms)' },
        { parameter: 'Appearance & Color', value: 'Free-flowing fine powder, Light Pinkish color' },
        { parameter: 'Flavor & Odor', value: 'Pungent, sweet, typical of fresh pink onions' },
        { parameter: 'Moisture Content', value: 'Max 4.0%' },
        { parameter: 'Mesh Size', value: '80 - 100 Mesh (95% passing)' },
        { parameter: 'Total Ash Content', value: 'Max 4.5%' },
        { parameter: 'Acid Insoluble Ash', value: 'Max 0.5%' },
        { parameter: 'Microbiological Status', value: 'Salmonella: Absent in 25g, E. Coli: Absent, TPC: < 100,000 cfu/g' },
        { parameter: 'Packaging Options', value: '25 Kg Multi-layer Kraft Paper Bags with Inner Blue Food-grade Poly-liner, or custom boxes.' }
      ]
    },
    'white-onion': {
      title: 'Dehydrated Organic White Onion Powder',
      subtitle: 'Extra White Grade - Technical Specification Sheet',
      specs: [
        { parameter: 'Product Name', value: 'Dehydrated Organic White Onion Powder' },
        { parameter: 'Botanical Name', value: 'Allium cepa' },
        { parameter: 'Origin', value: 'India (Certified Organic Farms)' },
        { parameter: 'Appearance & Color', value: 'Free-flowing fine powder, Off-white / Creamish color' },
        { parameter: 'Flavor & Odor', value: 'Highly pungent, sharp aromatic onion flavor' },
        { parameter: 'Moisture Content', value: 'Max 4.0%' },
        { parameter: 'Mesh Size', value: '80 - 100 Mesh (95% passing)' },
        { parameter: 'Total Ash Content', value: 'Max 4.0%' },
        { parameter: 'Acid Insoluble Ash', value: 'Max 0.5%' },
        { parameter: 'Microbiological Status', value: 'Salmonella: Absent in 25g, E. Coli: Absent, TPC: < 50,000 cfu/g (Extra Sterile)' },
        { parameter: 'Packaging Options', value: '25 Kg Multi-layer Kraft Paper Bags with Inner Blue Food-grade Poly-liner, or custom boxes.' }
      ]
    },
    'tomato': {
      title: 'Dehydrated Organic Tomato Powder',
      subtitle: 'Premium Red Grade - Technical Specification Sheet',
      specs: [
        { parameter: 'Product Name', value: 'Dehydrated Organic Tomato Powder' },
        { parameter: 'Botanical Name', value: 'Solanum lycopersicum' },
        { parameter: 'Origin', value: 'India (Certified Organic Farms)' },
        { parameter: 'Appearance & Color', value: 'Free-flowing fine powder, Deep Orange-Red color' },
        { parameter: 'Flavor & Odor', value: 'Tangy-sweet, typical profile of ripe cooked tomatoes' },
        { parameter: 'Moisture Content', value: 'Max 3.5% (Extremely low moisture)' },
        { parameter: 'Mesh Size', value: '60 - 80 Mesh (90% passing)' },
        { parameter: 'Lycopene Content', value: 'Min 180 mg/kg (High nutrient density)' },
        { parameter: 'Total Ash Content', value: 'Max 6.0%' },
        { parameter: 'Microbiological Status', value: 'Salmonella: Absent in 25g, E. Coli: Absent, Yeast & Mold: < 100 cfu/g' },
        { parameter: 'Packaging Options', value: '20 Kg Carton Box with double-sealed Inner Food-grade Moisture barrier bags.' }
      ]
    }
  };

  // 4. Modal Interactions
  const specModal = document.getElementById('specModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const specTable = document.getElementById('specTable');
  const modalClose = document.getElementById('modalClose');

  const openSpecModal = (productKey) => {
    const data = specificationsData[productKey];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;

    // Clear and build spec table
    specTable.innerHTML = '';
    data.specs.forEach(item => {
      const row = document.createElement('tr');
      
      const headerCell = document.createElement('th');
      headerCell.textContent = item.parameter;
      row.appendChild(headerCell);

      const valueCell = document.createElement('td');
      valueCell.textContent = item.value;
      row.appendChild(valueCell);

      specTable.appendChild(row);
    });

    specModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Disable background scroll
  };

  const closeSpecModal = () => {
    specModal.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable background scroll
  };

  // Attach event listeners to product details buttons
  const detailButtons = document.querySelectorAll('.btn-product-spec');
  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productKey = e.currentTarget.getAttribute('data-product');
      openSpecModal(productKey);
    });
  });

  // Attach event listeners to footer specification links
  const footerLinks = document.querySelectorAll('.spec-trigger-link');
  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const productKey = e.currentTarget.getAttribute('data-product');
      openSpecModal(productKey);
    });
  });

  // Close modal event triggers
  modalClose.addEventListener('click', closeSpecModal);
  specModal.addEventListener('click', (e) => {
    if (e.target === specModal) {
      closeSpecModal();
    }
  });

  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && specModal.classList.contains('active')) {
      closeSpecModal();
    }
  });

  // 5. Inquiry Form Submission Mock
  const inquiryForm = document.getElementById('inquiryForm');
  const contactFormContainer = document.querySelector('.contact-form-container');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Grab field values
      const name = document.getElementById('form-name').value;
      const company = document.getElementById('form-company').value;
      const email = document.getElementById('form-email').value;
      const country = document.getElementById('form-country').value;
      const product = document.getElementById('form-product').value;
      const qty = document.getElementById('form-quantity').value;
      
      // Build a premium success state inside the container
      contactFormContainer.innerHTML = `
        <div class="form-success-animation" style="text-align: center; padding: 40px 20px;">
          <div class="success-icon-badge" style="width: 80px; height: 80px; border-radius: 50px; background-color: var(--color-primary-tint); border: 2px solid var(--color-secondary); display: flex; align-items: center; justify-content: center; margin: 0 auto 30px auto;">
            <svg viewBox="0 0 24 24" style="width: 40px; height: 40px; fill: var(--color-primary);"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
          </div>
          <h4 style="font-family: var(--font-headings); font-size: 2.2rem; color: var(--color-primary); margin-bottom: 15px;">Inquiry Registered</h4>
          <p style="color: var(--color-text-muted); font-size: 1.05rem; margin-bottom: 25px; line-height: 1.6;">
            Thank you, <strong>${name}</strong> from <strong>${company}</strong>.<br>
            Your inquiry for <strong>${qty} of ${product}</strong> to be shipped to <strong>${country}</strong> has been logged into our global trade desk.
          </p>
          <p style="font-size: 0.9rem; color: var(--color-primary-accent); padding: 12px; background-color: var(--color-primary-tint); border-radius: 4px; display: inline-block;">
            An export quotation and shipping logistics proposal will be dispatched to <strong>${email}</strong> within 12 hours.
          </p>
        </div>
      `;
      
      // Scroll into view
      contactFormContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // 6. Simple Scroll Reveal Animation
  const revealElements = document.querySelectorAll('.product-card, .timeline-step, .pillar-card, .about-img-box, .contact-info-panel, .contact-form-container');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) scale(1)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
      // Set initial styles before observing
      el.style.opacity = '0';
      el.style.transform = 'translateY(25px)';
      el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      revealObserver.observe(el);
    });
  }
});
