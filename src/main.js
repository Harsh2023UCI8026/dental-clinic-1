import './style.css';

document.querySelector('#app').innerHTML = `
  <!-- Top Utility Bar -->
  <div class="top-notice-bar">
    <div class="container">
      <div>
        <i class="fa-solid fa-location-dot" style="color: var(--teal-primary)"></i> <strong>Floss & Gloss Clinic:</strong> 130-First Floor, Orchid Sky, Shela, Ahmedabad | <i class="fa-solid fa-phone"></i> Direct Call: <a href="tel:+919104591919" style="color: var(--cyan-accent);">+91 91045 91919</a>
      </div>
      <div style="display: flex; align-items: center; gap: 14px;">
        <span style="background: rgba(255,255,255,0.1); padding: 5px 12px; border-radius: 20px; font-weight: 600;">
          <i class="fa-solid fa-clock"></i> Mon - Sat: 10 AM - 8 PM
        </span>
        <!-- Global Website Language Selector -->
        <div class="global-lang-picker">
          <i class="fa-solid fa-globe" style="color: var(--cyan-accent);"></i>
          <select id="globalSiteLanguageSelect" class="global-lang-select" title="Change Website Language">
            <option value="en">English</option>
            <option value="hi">हिंदी (Hindi)</option>
            <option value="gu">ગુજરાતી (Gujarati)</option>
            <option value="amdavad">અમદાવાદી (Shela Regional)</option>
            <option value="hinglish">Hinglish</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <!-- Header Navbar -->
  <header class="navbar">
    <div class="container">
      <a href="#" class="logo-wrapper">
        <div class="logo-badge"><i class="fa-solid fa-tooth"></i></div>
        <div>
          <div class="logo-text-title">FLOSS & <span>GLOSS</span></div>
          <div class="logo-text-sub">DENTAL CLINIC • DR. ARCHANA MAL</div>
        </div>
      </a>

      <ul class="nav-links" id="mobileNavMenu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Dentist</a></li>
        <li><a href="#treatments">Treatments & Cost</a></li>
        <li><a href="#hygiene">Sterilization</a></li>
        <li><a href="#blogs">Oral Health Hub</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div style="display: flex; gap: 12px; align-items: center;">
        <button class="btn-teal-primary open-booking-modal" style="padding: 10px 18px; font-size: 0.85rem;">
          <i class="fa-solid fa-calendar-check"></i> <span class="nav-btn-text">Book Appointment</span>
        </button>
        <button id="mobileMenuToggle" class="mobile-hamburger-btn" title="Toggle Navigation">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Rich SabkaDentist Style Hero Banner with High Quality Photos -->
  <section id="home" class="rich-hero">
    <div class="container">
      <div class="rich-hero-grid">
        <div>
          <div class="hero-pill-badge">
            <i class="fa-solid fa-award"></i> Premier Periodontist & Implantologist in Shela - Bopal
          </div>
          
          <h1 class="rich-hero-h1">
            Reclaim Your Confidence With a <span>Million-Dollar Smile</span>
          </h1>

          <p class="rich-hero-p">
            Certified dental care by <strong>Dr. Archana Mal (M.D.S. Periodontics)</strong> with 17+ years experience. 100% Autoclave Sterilization & Zero Waiting Time for booked slots.
          </p>

          <div style="display: flex; gap: 16px; margin-bottom: 40px;">
            <button class="btn-teal-primary open-booking-modal" style="padding: 16px 32px; font-size: 1rem;">
              <i class="fa-solid fa-calendar-plus"></i> Book Free Consultation
            </button>
            <button class="btn-navy-outline" id="heroChatbotBtn" style="padding: 14px 28px; font-size: 1rem;">
              <i class="fa-solid fa-comments"></i> Chat with AI Assistant
            </button>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; border-top: 1px solid #e2e8f0; padding-top: 24px;">
            <div>
              <div style="font-size: 1.8rem; font-weight: 800; color: var(--teal-primary);">17+ Yrs</div>
              <div style="font-size: 0.85rem; color: var(--slate-subtle); font-weight: 600;">Clinical Expertise</div>
            </div>
            <div>
              <div style="font-size: 1.8rem; font-weight: 800; color: var(--navy-dark);">14+</div>
              <div style="font-size: 0.85rem; color: var(--slate-subtle); font-weight: 600;">Specialized Treatments</div>
            </div>
            <div>
              <div style="font-size: 1.8rem; font-weight: 800; color: var(--teal-primary);">100%</div>
              <div style="font-size: 0.85rem; color: var(--slate-subtle); font-weight: 600;">Autoclave Hygienic</div>
            </div>
          </div>
        </div>

        <!-- Rich Photo Card Hero Visual -->
        <div class="hero-visual-card">
          <img src="/patient-smile.jpg" alt="Happy Patient Aligners" class="hero-visual-img" />
          
          <div class="hero-visual-floating-badge">
            <img src="/dr-archana.jpg" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;" />
            <div>
              <div style="font-weight: 800; color: var(--navy-dark); font-size: 0.95rem;">Dr. Archana Mal (M.D.S.)</div>
              <div style="font-size: 0.8rem; color: var(--teal-dark); font-weight: 600;">M.D.S. Periodontics • Dental Implant Specialist</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Doctor Highlight Section with Photo -->
  <section id="about" class="rich-section">
    <div class="container">
      <div class="rich-title">
        <h2>Meet Dr. Archana Mal</h2>
        <p>Founder & Senior Dentist at Floss & Gloss Dental Clinic</p>
      </div>

      <div style="display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 40px; align-items: center; background: white; padding: 36px; border-radius: 20px; box-shadow: var(--shadow-card); border: 1px solid #f1f5f9;">
        <img src="/dr-archana.jpg" alt="Dr Archana Mal" style="width: 100%; height: 400px; object-fit: cover; border-radius: 16px;" />

        <div>
          <h3 style="font-size: 2rem; color: var(--navy-dark); font-weight: 800; margin-bottom: 8px;">
            Dr. Archana Mal (B.D.S., M.D.S.)
          </h3>
          <p style="color: var(--teal-primary); font-weight: 700; margin-bottom: 20px; font-size: 1.05rem;">
            Specialist in Periodontics, Gum Surgeries & Dental Implants
          </p>

          <p style="color: var(--slate-subtle); margin-bottom: 20px; font-size: 1rem; line-height: 1.7;">
            Practicing dentistry since 2007, Dr. Archana completed her M.D.S. in Periodontics from Luxmi Bai Institute of Dental Sciences, Patiala and B.D.S. from Christian Dental College, Ludhiana. She is dedicated to gentle, pain-free dental care for families across Shela, Bopal, Applewoods, and Shilaj.
          </p>

          <div style="display: flex; gap: 16px;">
            <button class="btn-teal-primary open-booking-modal">
              <i class="fa-solid fa-calendar-check"></i> Book Consultation
            </button>
            <a href="tel:+919104591919" class="btn-navy-outline" style="text-decoration: none;">
              <i class="fa-solid fa-phone"></i> Call Clinic
            </a>
          </div>
        </div>
      </div>
    </div>
  <!-- Why Choose Us Section (SabkaDentist Style) -->
  <section class="rich-section" style="background: white;">
    <div class="container">
      <div class="rich-title">
        <h2>Why Should You Choose Floss & Gloss Dental Clinic?</h2>
        <p>Delivering world-class dental care with ethical diagnosis, comfort, and advanced technology in Shela - Bopal.</p>
      </div>

      <div class="why-choose-grid">
        <div class="why-card">
          <div class="why-icon-badge">
            <i class="fa-solid fa-user-doctor"></i>
          </div>
          <h3 class="why-title">17+ Years Experienced Specialist</h3>
          <p class="why-desc">Direct treatment by <strong>Dr. Archana Mal (M.D.S. Periodontics)</strong>. Benefit from specialized expertise in periodontics, gum surgeries, and precision dental implants.</p>
        </div>

        <div class="why-card">
          <div class="why-icon-badge">
            <i class="fa-solid fa-shield-virus"></i>
          </div>
          <div class="why-title">100% Autoclave Sterilization</div>
          <p class="why-desc">We follow strict international infection control protocols with Class-B pouch sterilization and UV germicidal cabinets for absolute patient safety.</p>
        </div>

        <div class="why-card">
          <div class="why-icon-badge">
            <i class="fa-solid fa-clock"></i>
          </div>
          <div class="why-title">Zero Waiting Time Policy</div>
          <p class="why-desc">We respect your valuable time. Confirmed appointments ensure instant consultation with zero waiting room delays upon arrival.</p>
        </div>

        <div class="why-card">
          <div class="why-icon-badge">
            <i class="fa-solid fa-hand-holding-hand"></i>
          </div>
          <div class="why-title">Gentle & Pain-Free Procedures</div>
          <p class="why-desc">Modern single-sitting rotary equipment, computer-guided implantology, and painless local anesthesia ensure 100% comfortable treatment.</p>
        </div>

        <div class="why-card">
          <div class="why-icon-badge">
            <i class="fa-solid fa-wallet"></i>
          </div>
          <div class="why-title">Transparent Pricing & Flexible Plans</div>
          <p class="why-desc">Clear treatment cost breakdown before procedure with easy installment options for Clear Aligners and Implant treatments.</p>
        </div>

        <div class="why-card">
          <div class="why-icon-badge">
            <i class="fa-solid fa-face-smile-beam"></i>
          </div>
          <div class="why-title">Comprehensive Family Care</div>
          <p class="why-desc">From pediatric preventive sealants for children to full mouth restoration for senior citizens under one roof in Shela.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Photo Grid Treatments Section -->
  <section id="treatments" class="rich-section" style="background: #f1f5f9;">
    <div class="container">
      <div class="rich-title">
        <h2>Specialized Dental Services</h2>
        <p>Comprehensive treatments with imported materials & advanced equipment</p>
      </div>

      <div class="cards-grid">
        <div class="photo-card">
          <img src="/hero-bg.jpg" class="photo-card-img" alt="Dental Care" />
          <div class="photo-card-body">
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--navy-dark); margin-bottom: 10px;">Teeth Cleaning & Polishing</h3>
            <p style="color: var(--slate-subtle); font-size: 0.9rem; margin-bottom: 16px;">Thorough plaque and tartar removal for long-lasting fresh breath and healthy gums.</p>
            <button class="btn-teal-primary open-booking-modal" style="width: 100%; justify-content: center; padding: 10px;">Book Treatment</button>
          </div>
        </div>

        <div class="photo-card">
          <img src="/patient-smile.jpg" class="photo-card-img" alt="Clear Aligners" />
          <div class="photo-card-body">
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--navy-dark); margin-bottom: 10px;">Clear Aligners & Invisalign</h3>
            <p style="color: var(--slate-subtle); font-size: 0.9rem; margin-bottom: 16px;">Invisible braces for teens and adults for seamless tooth alignment without metal brackets.</p>
            <button class="btn-teal-primary open-booking-modal" style="width: 100%; justify-content: center; padding: 10px;">Book Treatment</button>
          </div>
        </div>

        <div class="photo-card">
          <img src="/dr-archana.jpg" class="photo-card-img" alt="Dental Implants" />
          <div class="photo-card-body">
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--navy-dark); margin-bottom: 10px;">Dental Implants & Dentures</h3>
            <p style="color: var(--slate-subtle); font-size: 0.9rem; margin-bottom: 16px;">Permanent titanium tooth replacement that looks, feels, and functions like natural teeth.</p>
            <button class="btn-teal-primary open-booking-modal" style="width: 100%; justify-content: center; padding: 10px;">Book Treatment</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Clinic Sterilization & Hygiene Protocol Section (Recommendation #1) -->
  <section id="hygiene" class="rich-section">
    <div class="container">
      <div class="rich-title">
        <h2>100% Autoclave & UV Sterilization Protocols</h2>
        <p>Your safety is our top priority. We follow strict international hygiene standards.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
        <div style="background: white; padding: 28px; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: var(--shadow-sm);">
          <div style="width: 50px; height: 50px; background: var(--teal-light); color: var(--teal-primary); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 16px;">
            <i class="fa-solid fa-pump-soap"></i>
          </div>
          <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--navy-dark); margin-bottom: 8px;">Class-B Autoclave</h3>
          <p style="color: var(--slate-subtle); font-size: 0.9rem;">Pouch-sealed instrument sterilization before every single patient visit.</p>
        </div>

        <div style="background: white; padding: 28px; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: var(--shadow-sm);">
          <div style="width: 50px; height: 50px; background: var(--teal-light); color: var(--teal-primary); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 16px;">
            <i class="fa-solid fa-sun"></i>
          </div>
          <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--navy-dark); margin-bottom: 8px;">UV Germicidal Cabinets</h3>
          <p style="color: var(--slate-subtle); font-size: 0.9rem;">Ultraviolet irradiation to eliminate 99.9% bacteria and viral pathogens.</p>
        </div>

        <div style="background: white; padding: 28px; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: var(--shadow-sm);">
          <div style="width: 50px; height: 50px; background: var(--teal-light); color: var(--teal-primary); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 16px;">
            <i class="fa-solid fa-clock-rotate-left"></i>
          </div>
          <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--navy-dark); margin-bottom: 8px;">Zero Waiting Policy</h3>
          <p style="color: var(--slate-subtle); font-size: 0.9rem;">Punctual scheduled consultations to respect your time and comfort.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Interactive Treatment Cost & Guidance Calculator (Recommendation #2) -->
  <section class="rich-section" style="background: #f8fafc;">
    <div class="container">
      <div class="rich-title">
        <h2>Virtual Treatment Cost & Guidance Estimator</h2>
        <p>Get instant procedure timelines, consultation details, and payment options.</p>
      </div>

      <div class="cost-estimator-card">
        <label style="display: block; font-weight: 700; color: var(--navy-dark); margin-bottom: 10px;">Select Treatment or Concern:</label>
        <select id="estimatorSelect" class="estimator-select">
          <option value="scaling">Teeth Cleaning & Polishing (Scaling)</option>
          <option value="aligners">Clear Aligners & Invisalign (Smile Correction)</option>
          <option value="implants">Dental Implants (Single/Multiple Teeth)</option>
          <option value="rct">Root Canal Treatment (Single Sitting RCT)</option>
        </select>

        <div id="estimatorResult" class="estimator-result-box">
          <div>
            <div style="font-weight: 800; color: var(--navy-dark); font-size: 1.1rem; margin-bottom: 4px;" id="estTitle">Scaling & Polishing</div>
            <div style="color: var(--slate-subtle); font-size: 0.9rem;" id="estDesc">Duration: 30-45 mins | Recommended twice a year for plaque-free teeth.</div>
          </div>
          <button class="btn-teal-primary open-booking-modal" style="padding: 10px 20px; font-size: 0.85rem;">Book Slot</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Oral Health Hub / Blog Section (SabkaDentist Style) -->
  <section id="blogs" class="rich-section">
    <div class="container">
      <div class="rich-title">
        <h2>Oral Health Guide & Educational Articles</h2>
        <p>Curated articles by M.D.S. Periodontist Dr. Archana Mal</p>
      </div>

      <div class="cards-grid">
        <article class="photo-card">
          <img src="/patient-smile.jpg" class="photo-card-img" alt="Clear Aligners Guide" />
          <div class="photo-card-body">
            <span style="background: var(--teal-light); color: var(--teal-dark); font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 20px;">ALIGNERS GUIDE</span>
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--navy-dark); margin: 12px 0 8px;">100 FAQs About Clear Aligners & Invisalign</h3>
            <p style="color: var(--slate-subtle); font-size: 0.88rem; margin-bottom: 16px;">Everything regarding aligner care, food habits, and treatment duration.</p>
            <a href="#" style="color: var(--teal-primary); font-weight: 700; text-decoration: none;">Read Full Article →</a>
          </div>
        </article>

        <article class="photo-card">
          <img src="/dr-archana.jpg" class="photo-card-img" alt="Gum Disease Guide" />
          <div class="photo-card-body">
            <span style="background: var(--teal-light); color: var(--teal-dark); font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 20px;">PERIODONTICS</span>
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--navy-dark); margin: 12px 0 8px;">Why Bleeding Gums Should Never Be Ignored</h3>
            <p style="color: var(--slate-subtle); font-size: 0.88rem; margin-bottom: 16px;">Insights on gingivitis, periodontitis, and gum recession treatment.</p>
            <a href="#" style="color: var(--teal-primary); font-weight: 700; text-decoration: none;">Read Full Article →</a>
          </div>
        </article>

        <article class="photo-card">
          <img src="/hero-bg.jpg" class="photo-card-img" alt="Kids Dental Guide" />
          <div class="photo-card-body">
            <span style="background: var(--teal-light); color: var(--teal-dark); font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 20px;">PEDIATRIC CARE</span>
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--navy-dark); margin: 12px 0 8px;">Preventing Tooth Decay & Cavities in Children</h3>
            <p style="color: var(--slate-subtle); font-size: 0.88rem; margin-bottom: 16px;">Effective brushing techniques and fluoride protection tips for kids.</p>
            <a href="#" style="color: var(--teal-primary); font-weight: 700; text-decoration: none;">Read Full Article →</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- SabkaDentist Style FAQ Section -->
  <section class="rich-section" style="background: #f8fafc;">
    <div class="container">
      <div class="rich-title">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <p>Get answers to common queries regarding dental consultations and treatments.</p>
      </div>

      <div class="faq-accordion">
        <div class="faq-item active">
          <div class="faq-question">
            <span>What are the consultation timings for Floss & Gloss Dental Clinic?</span>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <div class="faq-answer">
            Our clinic in Shela, Ahmedabad is open Monday through Saturday from 10:00 AM to 2:00 PM and 5:00 PM to 8:00 PM. Sunday consultations are available by prior appointment.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>Is Root Canal Treatment (RCT) painful?</span>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <div class="faq-answer">
            No, at Floss & Gloss Clinic, Dr. Archana Mal performs single-sitting RCT using modern rotary equipment under localized anesthesia, making the entire procedure painless and smooth.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>Why choose clear aligners over traditional metal braces?</span>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <div class="faq-answer">
            Clear aligners (Invisalign) are virtually invisible, removable during meals, comfortable to wear, and eliminate wire pricks associated with traditional metal braces.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>What safety and sterilization procedures do you follow?</span>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <div class="faq-answer">
            We follow strict 100% Class-B Autoclave sterilization for all pouch-sealed instruments and employ UV germicidal cabinets for absolute patient safety.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SabkaDentist Side Dock -->
  <div class="sd-side-dock">
    <a href="#" class="sd-dock-link open-booking-modal">
      <i class="fa-solid fa-calendar-check"></i>
      <span>BOOK</span>
    </a>
    <a href="https://api.whatsapp.com/send?phone=919104591919&text=Hi%20Dr%20Archana,%20I%20want%20to%20book%20a%20dental%20appointment" target="_blank" class="sd-dock-link">
      <i class="fa-brands fa-whatsapp" style="color: #25d366;"></i>
      <span>CHAT</span>
    </a>
    <a href="tel:+919104591919" class="sd-dock-link">
      <i class="fa-solid fa-phone"></i>
      <span>CALL</span>
    </a>
  </div>

  <!-- blackNgreen Style Organic Animated Chatbot Trigger Avatar -->
  <div id="sdChatbotTrigger" class="bng-chatbot-blob-trigger" title="Chat with AI Assistant">
    <div class="bng-blob-pulse-ring"></div>
    <div class="bng-blob-pulse-ring delay"></div>
    <div class="bng-blob-shape">
      <img src="/dr-archana.jpg" alt="Dr. Archana AI Assistant" class="bng-avatar-img" />
    </div>
    <div class="bng-online-badge"></div>
  </div>

  <!-- blackNgreen Style Floating AI Assistant Chat Window Modal -->
  <div id="sdChatbotWindow" class="sd-chatbot-window" style="display: none;">
    <div class="sd-chat-header bng-chat-header">
      <div style="display: flex; align-items: center; gap: 10px;">
        <div class="bng-header-blob-avatar">
          <img src="/dr-archana.jpg" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div>
          <div style="font-weight: 800; font-size: 0.95rem; color: #ffffff;">Dr. Archana AI Assistant</div>
          <div style="font-size: 0.72rem; color: #a7f3d0; display: flex; align-items: center; gap: 5px;">
            <span style="width: 7px; height: 7px; background: #34d399; border-radius: 50%; display: inline-block;"></span> Online | Floss & Gloss
          </div>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <!-- Language Selector Dropdown -->
        <div class="bng-lang-picker-wrapper">
          <i class="fa-solid fa-globe" style="color: #a7f3d0; font-size: 0.85rem;"></i>
          <select id="chatLanguageSelect" class="bng-lang-select" title="Select Language">
            <option value="en" selected>English</option>
            <option value="hi">हिंदी (Hindi)</option>
            <option value="gu">ગુજરાતી (Gujarati)</option>
            <option value="amdavad">અમદાવાદી (Shela Regional)</option>
            <option value="hinglish">Hinglish</option>
          </select>
        </div>
        <button id="sdChatCloseBtn" class="bng-chat-close-btn" title="Close Chat">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>

    <div id="sdChatBody" class="sd-chat-body">
      <div class="sd-msg bot chat-msg-animated delay-1" id="botGreetMsg1">
        👋 <strong>Hi, I am Dr. Archana Mal!</strong><br/>
        Welcome to <strong>Floss & Gloss Dental Clinic</strong>!
      </div>
      <div class="chat-msg-animated delay-2" style="background: white; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: var(--shadow-sm);">
        <img src="/patient-smile.jpg" style="width: 100%; height: 135px; object-fit: cover;" />
      </div>
      <div class="sd-msg bot chat-msg-animated delay-3" id="botGreetMsg2">
        ✨ <em>"Let your smile change the world!"</em><br/>
        How may I assist you today?
        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;" id="chatOptionsContainer">
          <button class="sd-chat-btn" onclick="handleSdChat('Book Appointment')">📅 Book Consultation Slot</button>
          <button class="sd-chat-btn" onclick="handleSdChat('Dental Emergency / Pain')">🚨 Severe Tooth Pain / Emergency</button>
          <button class="sd-chat-btn" onclick="handleSdChat('Aligners & Invisalign')">✨ Clear Aligners & Braces Query</button>
          <button class="sd-chat-btn" onclick="handleSdChat('Teeth Cleaning & Whitening')">🦷 Teeth Cleaning & Polishing</button>
          <button class="sd-chat-btn" onclick="handleSdChat('Dental Implants & Dentures')">🛡️ Implants & Tooth Replacement</button>
          <button class="sd-chat-btn" onclick="handleSdChat('Clinic Location Shela')">📍 Directions to Orchid Sky Shela</button>
        </div>
      </div>
    </div>

    <!-- Chat Message Input & File Upload Bar -->
    <form id="chatInputForm" style="display: flex; align-items: center; padding: 10px 14px; background: white; border-top: 1px solid #e2e8f0; gap: 8px;">
      <input type="text" id="chatInputText" placeholder="Type a message..." style="flex: 1; border: none; outline: none; font-family: inherit; font-size: 0.9rem;" autocomplete="off" />
      <button type="button" id="emojiBtn" title="Emojis" style="background: transparent; border: none; color: #64748b; font-size: 1.1rem; cursor: pointer;"><i class="fa-regular fa-face-smile"></i></button>
      <label title="Attach Dental X-Ray / Photo" style="background: transparent; color: #64748b; font-size: 1.1rem; cursor: pointer; margin: 0;"><i class="fa-solid fa-paperclip"></i><input type="file" id="chatFileInput" style="display: none;" accept="image/*,.pdf" /></label>
      <button type="submit" title="Send" style="background: transparent; border: none; color: var(--teal-primary); font-size: 1.15rem; cursor: pointer;"><i class="fa-solid fa-paper-plane"></i></button>
    </form>
  </div>

  <!-- Appointment Modal -->
  <div id="sdModal" style="display: none; position: fixed; inset: 0; background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(4px); z-index: 10001; align-items: center; justify-content: center; padding: 20px;">
    <div style="background: white; width: 100%; max-width: 480px; padding: 32px; border-radius: 20px; position: relative; box-shadow: 0 20px 40px rgba(0,0,0,0.2);">
      <button id="closeSdModal" style="position: absolute; top: 20px; right: 20px; background: #f1f5f9; border: none; width: 32px; height: 32px; border-radius: 50%; font-size: 1rem; cursor: pointer;"><i class="fa-solid fa-xmark"></i></button>
      <h3 style="font-size: 1.5rem; color: var(--navy-dark); font-weight: 800; margin-bottom: 6px;">Book Consultation Slot</h3>
      <p style="color: var(--slate-subtle); font-size: 0.9rem; margin-bottom: 20px;">Zero waiting time upon arrival. Direct appointment with Dr. Archana.</p>

      <form id="sdModalForm">
        <div style="margin-bottom: 16px;">
          <label style="display: block; font-weight: 700; font-size: 0.85rem; margin-bottom: 6px;">Full Name *</label>
          <input type="text" required style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px;" placeholder="Your Name" />
        </div>
        <div style="margin-bottom: 20px;">
          <label style="display: block; font-weight: 700; font-size: 0.85rem; margin-bottom: 6px;">Mobile Number *</label>
          <input type="tel" required style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px;" placeholder="+91 Mobile Number" />
        </div>
        <button type="submit" class="btn-teal-primary" style="width: 100%; justify-content: center; padding: 14px;">Confirm Booking Request</button>
      </form>
    </div>
  </div>
`;

// Multilingual Content Dictionaries
const chatI18n = {
  en: {
    greet1: '👋 <strong>Hi, I am Dr. Archana Mal!</strong><br/>Welcome to <strong>Floss & Gloss Dental Clinic</strong>!',
    greet2: '✨ <em>"Let your smile change the world!"</em><br/>How may I assist you today?',
    placeholder: 'Type a message in English...',
    options: [
      { text: '📅 Book Consultation Slot', val: 'Book Appointment' },
      { text: '🚨 Severe Tooth Pain / Emergency', val: 'Dental Emergency / Pain' },
      { text: '✨ Clear Aligners & Braces Query', val: 'Aligners & Invisalign' },
      { text: '🦷 Teeth Cleaning & Polishing', val: 'Teeth Cleaning & Whitening' },
      { text: '🛡️ Implants & Tooth Replacement', val: 'Dental Implants & Dentures' },
      { text: '📍 Directions to Orchid Sky Shela', val: 'Clinic Location Shela' }
    ],
    responses: {
      file: '📄 <strong>File Received!</strong><br/>Dr. Archana’s team will review your attachment for preliminary evaluation.<br/><br/><button class="btn-teal-primary open-booking-modal" style="padding: 8px 16px; font-size: 0.85rem;">Schedule Review Call</button>',
      book: 'You can pick your preferred consultation slot now:<br/><br/><button class="btn-teal-primary open-booking-modal" style="padding: 8px 16px; font-size: 0.85rem;">Open Slot Picker</button>',
      pain: 'For urgent dental pain, please call Dr. Archana Mal directly: <a href="tel:+919104591919" style="color: var(--teal-primary); font-weight: 700;">+91 91045 91919</a>',
      aligner: 'We offer certified Clear Aligners and Ceramic Braces. Initial 3D scanning is included in consultation.',
      clean: 'Teeth Cleaning (Scaling & Polishing) removes plaque & stains for fresh breath. Duration: 30 mins.',
      implant: 'Dental Implants provide permanent single/full-mouth tooth replacement with natural feel.',
      location: 'Clinic Address: <strong>130-First Floor, Orchid Sky, Shela, Ahmedabad 380058</strong> (Opp. Applewoods).',
      default: 'Thank you for reaching out! Dr. Archana’s team will assist you shortly.'
    }
  },
  hi: {
    greet1: '👋 <strong>नमस्ते! मैं डॉ. अर्चना मल हूँ।</strong><br/><strong>फ्लॉस एंड ग्लॉस डेंटल क्लिनिक</strong> में आपका स्वागत है!',
    greet2: '✨ <em>"आपकी मुस्कान ही आपकी पहचान है!"</em><br/>आज मैं आपकी क्या सहायता कर सकती हूँ?',
    placeholder: 'हिंदी में संदेश लिखें...',
    options: [
      { text: '📅 अपॉइंटमेंट बुक करें', val: 'Book Appointment' },
      { text: '🚨 दांत में तेज़ दर्द / इमरजेंसी', val: 'Dental Emergency / Pain' },
      { text: '✨ क्लेयर अलाइनर्स और ब्रेसेस की जानकारी', val: 'Aligners & Invisalign' },
      { text: '🦷 दांतों की सफाई (Scaling)', val: 'Teeth Cleaning & Whitening' },
      { text: '🛡️ डेंटल इम्प्लांट (नया दांत)', val: 'Dental Implants & Dentures' },
      { text: '📍 क्लिनिक का पता (ऑर्किड स्काई, शेला)', val: 'Clinic Location Shela' }
    ],
    responses: {
      file: '📄 <strong>फ़ाइल मिल गई!</strong><br/>डॉ. अर्चना की टीम जल्द आपकी रिपोर्ट देखकर संपर्क करेगी।<br/><br/><button class="btn-teal-primary open-booking-modal" style="padding: 8px 16px; font-size: 0.85rem;">कॉल शेड्यूल करें</button>',
      book: 'आप अपना पसंदीदा अपॉइंटमेंट समय चुनें:<br/><br/><button class="btn-teal-primary open-booking-modal" style="padding: 8px 16px; font-size: 0.85rem;">अपॉइंटमेंट बुक करें</button>',
      pain: 'तेज़ दांत दर्द के लिए सीधे डॉ. अर्चना से बात करें: <a href="tel:+919104591919" style="color: var(--teal-primary); font-weight: 700;">+91 91045 91919</a>',
      aligner: 'हमारे यहाँ सर्टिफाइड क्लेयर अलाइनर्स (Invisalign) उपलब्ध हैं।',
      clean: 'दांतों की सफाई से प्लाक और बदबू दूर होती है। समय: 30 मिनट।',
      implant: 'डेंटल इम्प्लांट से स्थायी और प्राकृतिक दांत लगाए जाते हैं।',
      location: 'पता: <strong>130-फर्स्ट फ्लोर, ऑर्किड स्काई, शेला, अहमदाबाद 380058</strong> (एप्पलवुड्स के सामने)।',
      default: 'संपर्क करने के लिए धन्यवाद! हमारी टीम जल्द सहायता करेगी।'
    }
  },
  gu: {
    greet1: '👋 <strong>નમસ્તે! હું ડૉ. અર્ચના મલ છું.</strong><br/><strong>ફ્લોસ એન્ડ ગ્લોસ ડેન્ટલ ક્લિનિક</strong>માં આપનું સ્વાગત છે!',
    greet2: '✨ <em>"તમારું સ્માઈલ જ તમારી ઓળખ છે!"</em><br/>આજે હું તમને કેવી રીતે મદદ કરી શકું?',
    placeholder: 'ગુજરાતીમાં લખો...',
    options: [
      { text: '📅 એપોઇન્ટમેન્ટ બુક કરો', val: 'Book Appointment' },
      { text: '🚨 દાંતમાં અસહ્ય દુખાવો / ઇમરજન્સી', val: 'Dental Emergency / Pain' },
      { text: '✨ ક્લિયર અલાઈનર્સ અને બ્રેસિસ', val: 'Aligners & Invisalign' },
      { text: '🦷 દાંતની સફાઈ અને પોલિશિંગ', val: 'Teeth Cleaning & Whitening' },
      { text: '🛡️ ડેન્ટલ ઈમ્પ્લાન્ટ (નવો દાંત)', val: 'Dental Implants & Dentures' },
      { text: '📍 ક્લિનિકનું સરનામું (ઓર્ચિડ સ્કાય, શેલા)', val: 'Clinic Location Shela' }
    ],
    responses: {
      file: '📄 <strong>ફાઈલ મળી ગઈ!</strong><br/>ડૉ. અર્ચનાની ટીમ રિપોર્ટ ચકાસીને તુરંત સંપર્ક કરશે.<br/><br/><button class="btn-teal-primary open-booking-modal" style="padding: 8px 16px; font-size: 0.85rem;">એપોઇન્ટમેન્ટ બુક કરો</button>',
      book: 'તમારો અનુકૂળ સમય બુક કરો:<br/><br/><button class="btn-teal-primary open-booking-modal" style="padding: 8px 16px; font-size: 0.85rem;">સ્લોટ પસંદ કરો</button>',
      pain: 'ઇમરજન્સી દુખાવા માટે ડૉ. અર્ચનાનો સીધો સંપર્ક કરો: <a href="tel:+919104591919" style="color: var(--teal-primary); font-weight: 700;">+91 91045 91919</a>',
      aligner: 'અમે ઈનવિઝિબલ અલાઈનર્સ અને કસ્ટમ બ્રેસિસની શ્રેષ્ઠ સારવાર આપીએ છીએ.',
      clean: 'દાંતની સફાઈથી પેઢા મજબૂત થાય છે અને દુર્ગંધ દૂર થાય છે.',
      implant: 'ડેન્ટલ ઈમ્પ્લાન્ટ એ કાયમી અને કુદરતી જેવા દાંત બેસાડવાની આધુનિક પદ્ધતિ છે.',
      location: 'સરનામું: <strong>૧૩૦-પહેલો માળ, ઓર્ચિડ સ્કાય, શેલા, અમદાવાદ ૩૮૦૦૫૮</strong> (એપલવુડ્સ સામે).',
      default: 'સંપર્ક કરવા બદલ આભાર! આપને તુરંત મદદ મળશે.'
    }
  },
  amdavad: {
    greet1: '👋 <strong>કેમ છો અમદાવાદ! હું ડૉ. અર્ચના મલ છું.</strong><br/>આપણા <strong>શેલા ઓર્ચિડ સ્કાય વાળા ક્લિનિક</strong>માં સ્વાગત છે!',
    greet2: '✨ <em>"અમદાવાદી સ્માઈલ, સો ટકા ફાઈન!"</em><br/>બોલો શેલા-બોપલ વાળા આજે શું સેવા કરીયે?',
    placeholder: 'અહીં અમદાવાદ સ્ટાઇલમાં ટાઇપ કરો...',
    options: [
      { text: '📅 શનિ-રવિ ફ્રી સ્લોટ બુક કરો', val: 'Book Appointment' },
      { text: '🚨 દાંતનો સખત દુખાવો / ઇમરજન્સી', val: 'Dental Emergency / Pain' },
      { text: '✨ અલાઈનર્સ વાયર વગર ના દાંત ચત્તા કરવા', val: 'Aligners & Invisalign' },
      { text: '🦷 દાંતનો ક્ષાર સફાઈ (Skaling)', val: 'Teeth Cleaning & Whitening' },
      { text: '🛡️ ઈમ્પ્લાન્ટ ચોકઠું / નવો ચોંટેલો દાંત', val: 'Dental Implants & Dentures' },
      { text: '📍 શેલા એપલવુડ્સ સામે ઓર્ચિડ સ્કાય પહોંચો', val: 'Clinic Location Shela' }
    ],
    responses: {
      file: '📄 <strong>રિપોર્ટ આવી ગયો ભાઈ!</strong><br/>ડૉ. અર્ચના મેડમ જોઈને તુરંત તમને કોલ કરાવશે.<br/><br/><button class="btn-teal-primary open-booking-modal" style="padding: 8px 16px; font-size: 0.85rem;">કોલ બુક કરો</button>',
      book: 'એકદમ ઝીરો વેટિંગ વારો! સ્લોટ સિલેક્ટ કરી લો:<br/><br/><button class="btn-teal-primary open-booking-modal" style="padding: 8px 16px; font-size: 0.85rem;">સ્લોટ કન્ફર્મ કરો</button>',
      pain: 'દુખાવો ચાલુ હોય તો ટાઈમ બગાડ્યા વગર ડાયરેક્ટ રિંગ મારો: <a href="tel:+919104591919" style="color: var(--teal-primary); font-weight: 700;">+91 91045 91919</a>',
      aligner: 'તદ્દન અદ્રશ્ય અલાઈનર્સ છે, કોઈને ખબર પણ ના પડે એવી ટેકનોલોજી છે શેલામાં!',
      clean: 'દાંત ચમકાવવા અને મોઢાની દુર્ગંધ કાઢવા ૩૦ મિનિટમાં સ્કેલિંગ થઈ જશે.',
      implant: 'ઈમ્પ્લાન્ટ કાયમી ફિટ થઈ જશે, ઓરિજિનલ દાંત જેવું જ ફિલિંગ આવશે.',
      location: 'સરનામું સાંભળો: <strong>૧૩૦-ફર્સ્ટ ફ્લોર, ઓર્ચિડ સ્કાય, શેલા, અમદાવાદ ૩૮૦૦૫૮</strong> (એપલવુડ્સની બિલકુલ સામે).',
      default: 'મસેજ મળ્યો છે! ડૉ. અર્ચનાની ટીમ તુરંત મદદ કરશે.'
    }
  },
  hinglish: {
    greet1: '👋 <strong>Hey! Main Dr. Archana Mal hoon.</strong><br/>Welcome to <strong>Floss & Gloss Dental Clinic</strong>!',
    greet2: '✨ <em>"Keep smiling always!"</em><br/>Aaj main aapki kya help kar sakti hoon?',
    placeholder: 'Hinglish mein message karein...',
    options: [
      { text: '📅 Book Consultation Slot', val: 'Book Appointment' },
      { text: '🚨 Toothache / Pain Emergency', val: 'Dental Emergency / Pain' },
      { text: '✨ Invisible Clear Aligners Query', val: 'Aligners & Invisalign' },
      { text: '🦷 Teeth Cleaning & Polishing', val: 'Teeth Cleaning & Whitening' },
      { text: '🛡️ Dental Implants (Permanent Tooth)', val: 'Dental Implants & Dentures' },
      { text: '📍 Clinic Location (Orchid Sky Shela)', val: 'Clinic Location Shela' }
    ],
    responses: {
      file: '📄 <strong>File received!</strong><br/>Dr. Archana’s team will check your report and get back soon.<br/><br/><button class="btn-teal-primary open-booking-modal" style="padding: 8px 16px; font-size: 0.85rem;">Book Call</button>',
      book: 'Aap apna preferred consultation slot pick kar sakte hain:<br/><br/><button class="btn-teal-primary open-booking-modal" style="padding: 8px 16px; font-size: 0.85rem;">Select Slot</button>',
      pain: 'Severe tooth pain ke liye Dr. Archana ko direct call karein: <a href="tel:+919104591919" style="color: var(--teal-primary); font-weight: 700;">+91 91045 91919</a>',
      aligner: 'Without wire pricks, invisible clear aligners available hain.',
      clean: 'Scaling & polishing se tartar and bad breath instant door ho jata hai.',
      implant: 'Permanent titanium implant looks & feels just like natural tooth.',
      location: 'Address: <strong>130-First Floor, Orchid Sky, Shela, Ahmedabad 380058</strong> (Opp. Applewoods).',
      default: 'Message mil gaya hai! Humari team aapse jald connect karegi.'
    }
  }
};

let currentLang = 'en';

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  const sdModal = document.getElementById('sdModal');
  const closeSdModal = document.getElementById('closeSdModal');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileNavMenu = document.getElementById('mobileNavMenu');
  const chatLanguageSelect = document.getElementById('chatLanguageSelect');
  const globalSiteLanguageSelect = document.getElementById('globalSiteLanguageSelect');

  function syncAllLanguageSelectors(lang) {
    currentLang = lang;
    if (chatLanguageSelect) chatLanguageSelect.value = lang;
    if (globalSiteLanguageSelect) globalSiteLanguageSelect.value = lang;

    // Update Chatbot i18n UI
    updateChatLanguageUI(lang);

    // Trigger Google Translate engine for whole site DOM translation
    const googleLangMap = {
      en: 'en',
      hi: 'hi',
      gu: 'gu',
      amdavad: 'gu',
      hinglish: 'hi'
    };
    const targetGoogleLang = googleLangMap[lang] || 'en';

    // 1. Direct goog-te-combo select update
    const iframeSelect = document.querySelector('.goog-te-combo');
    if (iframeSelect) {
      iframeSelect.value = targetGoogleLang;
      iframeSelect.dispatchEvent(new Event('change'));
    }

    // 2. Cookie fallback method for Google Translate Engine
    document.cookie = `googtrans=/en/${targetGoogleLang}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=/en/${targetGoogleLang}; path=/`;

    // 3. Fallback DOM Text Translation Engine for local elements
    if (window.translateWholeSiteDOM) {
      window.translateWholeSiteDOM(lang);
    }
  }

  if (chatLanguageSelect) {
    chatLanguageSelect.addEventListener('change', (e) => {
      syncAllLanguageSelectors(e.target.value);
    });
  }

  if (globalSiteLanguageSelect) {
    globalSiteLanguageSelect.addEventListener('change', (e) => {
      syncAllLanguageSelectors(e.target.value);
    });
  }

  if (mobileMenuToggle && mobileNavMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileNavMenu.classList.toggle('active');
    });

    mobileNavMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavMenu.classList.remove('active');
      });
    });
  }

  document.querySelectorAll('.open-booking-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      sdModal.style.display = 'flex';
    });
  });

  closeSdModal.addEventListener('click', () => {
    sdModal.style.display = 'none';
  });

  document.getElementById('sdModalForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your consultation slot request has been received. Dr. Archana’s desk will confirm your appointment shortly.');
    sdModal.style.display = 'none';
  });

  // FAQ Accordion Toggle Listener
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      item.classList.toggle('active');
    });
  });

  // Treatment Cost Estimator Tool Dynamic Change
  const estimatorSelect = document.getElementById('estimatorSelect');
  const estTitle = document.getElementById('estTitle');
  const estDesc = document.getElementById('estDesc');

  if (estimatorSelect) {
    const estimates = {
      scaling: { title: 'Teeth Cleaning & Polishing', desc: 'Duration: 30-45 mins | Includes stain removal & gum polish.' },
      aligners: { title: 'Clear Aligners & Invisalign', desc: 'Duration: 6-12 months | 3D scanning, zero wire pricks.' },
      implants: { title: 'Dental Implants', desc: 'Permanent titanium fixture | Natural teeth feel & lifetime warranty.' },
      rct: { title: 'Single-Sitting Root Canal (RCT)', desc: 'Duration: 45 mins | Painless rotary endodontics treatment.' }
    };

    estimatorSelect.addEventListener('change', (e) => {
      const data = estimates[e.target.value];
      if (data) {
        estTitle.innerText = data.title;
        estDesc.innerText = data.desc;
      }
    });
  }

  // Chat Message Input Form Listener
  const chatInputForm = document.getElementById('chatInputForm');
  const chatInputText = document.getElementById('chatInputText');
  const chatFileInput = document.getElementById('chatFileInput');
  const emojiBtn = document.getElementById('emojiBtn');

  if (chatInputForm) {
    chatInputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = chatInputText.value.trim();
      if (val) {
        window.handleSdChat(val);
        chatInputText.value = '';
      }
    });

    emojiBtn.addEventListener('click', () => {
      chatInputText.value += ' 😊 ';
      chatInputText.focus();
    });

    chatFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        const fileName = e.target.files[0].name;
        window.handleSdChat(`📎 Attached File: ${fileName}`);
        e.target.value = '';
      }
    });
  }

  const sdChatbotWindow = document.getElementById('sdChatbotWindow');
  const sdChatbotTrigger = document.getElementById('sdChatbotTrigger');
  const sdChatCloseBtn = document.getElementById('sdChatCloseBtn');
  const heroChatbotBtn = document.getElementById('heroChatbotBtn');

  sdChatbotTrigger.addEventListener('click', () => {
    sdChatbotWindow.style.display = sdChatbotWindow.style.display === 'none' ? 'flex' : 'none';
  });

  sdChatCloseBtn.addEventListener('click', () => {
    sdChatbotWindow.style.display = 'none';
  });

  if (heroChatbotBtn) {
    heroChatbotBtn.addEventListener('click', () => {
      sdChatbotWindow.style.display = 'flex';
    });
  }
});

function updateChatLanguageUI(lang) {
  const dict = chatI18n[lang] || chatI18n.en;
  const botGreetMsg1 = document.getElementById('botGreetMsg1');
  const botGreetMsg2 = document.getElementById('botGreetMsg2');
  const chatInputText = document.getElementById('chatInputText');
  const chatOptionsContainer = document.getElementById('chatOptionsContainer');

  if (botGreetMsg1) botGreetMsg1.innerHTML = dict.greet1;
  if (botGreetMsg2) {
    botGreetMsg2.childNodes[0].nodeValue = ''; // Clear default leading text
    botGreetMsg2.innerHTML = dict.greet2 + '<div style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;" id="chatOptionsContainer"></div>';
  }

  if (chatInputText) chatInputText.placeholder = dict.placeholder;

  const container = document.getElementById('chatOptionsContainer');
  if (container) {
    container.innerHTML = '';
    dict.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'sd-chat-btn';
      btn.innerText = opt.text;
      btn.onclick = () => window.handleSdChat(opt.val, opt.text);
      container.appendChild(btn);
    });
  }
}

window.handleSdChat = function(optionKey, displayText) {
  const chatBody = document.getElementById('sdChatBody');
  const dict = chatI18n[currentLang] || chatI18n.en;

  // Animated User Message
  const userMsg = document.createElement('div');
  userMsg.className = 'sd-msg user chat-msg-animated';
  userMsg.innerText = displayText || optionKey;
  chatBody.appendChild(userMsg);

  // Animated Typing Indicator
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'typing-indicator-box';
  typingIndicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
  chatBody.appendChild(typingIndicator);
  chatBody.scrollTop = chatBody.scrollHeight;

  setTimeout(() => {
    typingIndicator.remove();

    const botMsg = document.createElement('div');
    botMsg.className = 'sd-msg bot chat-msg-animated';

    const lower = optionKey.toLowerCase();
    let reply = '';

    if (lower.includes('attached file')) {
      reply = dict.responses.file;
    } else if (lower.includes('appointment') || lower.includes('book') || lower.includes('slot')) {
      reply = dict.responses.book;
    } else if (lower.includes('pain') || lower.includes('emergency') || lower.includes('toothache')) {
      reply = dict.responses.pain;
    } else if (lower.includes('aligner') || lower.includes('braces') || lower.includes('invisalign')) {
      reply = dict.responses.aligner;
    } else if (lower.includes('cleaning') || lower.includes('whitening') || lower.includes('polishing')) {
      reply = dict.responses.clean;
    } else if (lower.includes('implant') || lower.includes('denture') || lower.includes('replacement')) {
      reply = dict.responses.implant;
    } else if (lower.includes('location') || lower.includes('where') || lower.includes('address') || lower.includes('shela')) {
      reply = dict.responses.location;
    } else {
      reply = dict.responses.default;
    }

    botMsg.innerHTML = reply;
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;

    document.querySelectorAll('.sd-msg.bot .open-booking-modal').forEach(b => {
      b.addEventListener('click', () => {
        document.getElementById('sdModal').style.display = 'flex';
      });
    });
  }, 700);
};

// Full Website Instant DOM Text Translation Dictionary & Engine
const siteDomTranslations = {
  hi: {
    navLinks: ['होम', 'डेंटिस्ट के बारे में', 'इलाज और खर्च', 'स्टेरिलाइजेशन', 'ओरल हेल्थ हब', 'संपर्क'],
    heroH1: 'अपनी मुस्कान और <span>आत्मविश्वास वापस पाएं</span>',
    heroP: '<strong>डॉ. अर्चना मल (M.D.S. पीरियडोंटिक्स)</strong> द्वारा 17+ वर्षों का अनुभव। 100% बायो-स्टेरिलाइजेशन एवं ज़ीरो वेटिंग टाइम।',
    heroBadge: '<i class="fa-solid fa-award"></i> शेला - बोपल में प्रमुख पीरियडोंटिस्ट और इम्प्लांटोलॉजिस्ट',
    bookConsultBtn: '<i class="fa-solid fa-calendar-plus"></i> मुफ़्त परामर्श बुक करें',
    chatBtn: '<i class="fa-solid fa-comments"></i> AI असिस्टेंट से बात करें',
    aboutH2: 'डॉ. अर्चना मल से मिलें',
    aboutSub: 'संस्थापक और वरिष्ठ दंत चिकित्सक - फ्लॉस एंड ग्लॉस क्लिनिक',
    whyTitle: 'आप फ्लॉस एंड ग्लॉस डेंटल क्लिनिक क्यों चुनें?',
    whyDesc: 'शेला - बोपल में नैतिक निदान, आराम और उन्नत तकनीक के साथ विश्व स्तरीय दंत चिकित्सा सेवा।'
  },
  gu: {
    navLinks: ['હોમ', 'ડૉક્ટર વિશે', 'સારવાર અને ખર્ચ', 'સ્ટેરિલાઇઝેશન', 'ઓરલ હેલ્થ હબ', 'સંપર્ક'],
    heroH1: 'તમારું સ્માઈલ અને <span>આત્મવિશ્વાસ પુનઃપ્રાપ્ત કરો</span>',
    heroP: '<strong>ડૉ. અર્ચના મલ (M.D.S. પિરિઓડોન્ટિક્સ)</strong> દ્વારા ૧૭+ વર્ષનો અનુભવ. ૧૦૦% ઓટોક્લેવ હાઇજીન અને ઝીરો વેઇટિંગ ટાઇમ.',
    heroBadge: '<i class="fa-solid fa-award"></i> શેલા - બોપલના નિષ્ણાત ડેન્ટલ સર્જન',
    bookConsultBtn: '<i class="fa-solid fa-calendar-plus"></i> ફ્રી કન્સલ્ટેશન બુક કરો',
    chatBtn: '<i class="fa-solid fa-comments"></i> AI આસિસ્ટન્ટ સાથે વાત કરો',
    aboutH2: 'મળો ડૉ. અર્ચના મલ ને',
    aboutSub: 'સ્થાપક અને વરિષ્ઠ ડેન્ટિસ્ટ - ફ્લોસ એન્ડ ગ્લોસ ડેન્ટલ ક્લિનિક',
    whyTitle: 'શા માટે ફ્લોસ એન્ડ ગ્લોસ ડેન્ટલ ક્લિનિક પસંદ કરવું?',
    whyDesc: 'શેલા - બોપલમાં શ્રેષ્ઠ નિદાન, આરામ અને આધુનિક ટેકનોલોજી સાથે સારવાર.'
  },
  amdavad: {
    navLinks: ['હોમ', 'ડૉક્ટર વિશે', 'સારવાર ને ભાવ', 'સ્ટેરિલાઇઝેશન', 'હેલ્થ ગાઈડ', 'સંપર્ક'],
    heroH1: 'અમદાવાદી રોકડા સ્માઈલ સાથે <span>કોન્ફિડન્સ લાવો</span>',
    heroP: '<strong>ડૉ. અર્ચના મલ (M.D.S.)</strong> નો ૧૭+ વર્ષનો અનુભવ. શેલા ઓર્ચિડ સ્કાયમાં ઝીરો વેટિંગ વારો!',
    heroBadge: '<i class="fa-solid fa-award"></i> શેલા - બોપલ વાળા ના ફેવરિટ ડેન્ટિસ્ટ',
    bookConsultBtn: '<i class="fa-solid fa-calendar-plus"></i> ફ્રી સ્લોટ બુક કરો',
    chatBtn: '<i class="fa-solid fa-comments"></i> AI આસિસ્ટન્ટ જોડે વાત કરો',
    aboutH2: 'મળો આપણા ડૉ. અર્ચના મેડમને',
    aboutSub: 'મુખ્ય ડેન્ટલ સ્પેશિયાલિસ્ટ - ઓર્ચિડ સ્કાય શેલા',
    whyTitle: 'શેલા માં આપણું ફ્લોસ એન્ડ ગ્લોસ જ કેમ?',
    whyDesc: 'ચોક્કસ નિદાન, સંપૂર્ણ સ્વચ્છતા અને ૧૦૦% આરામદાયક સારવાર શેલા ઓર્ચિડ સ્કાયમાં.'
  },
  hinglish: {
    navLinks: ['Home', 'About Doctor', 'Treatments & Cost', 'Sterilization', 'Oral Health Hub', 'Contact'],
    heroH1: 'Reclaim Your Confidence With a <span>Million-Dollar Smile</span>',
    heroP: 'Certified dental care by <strong>Dr. Archana Mal (M.D.S. Periodontics)</strong> with 17+ years experience. 100% Sterilization & Zero Waiting Time.',
    heroBadge: '<i class="fa-solid fa-award"></i> Premier Periodontist & Implantologist in Shela - Bopal',
    bookConsultBtn: '<i class="fa-solid fa-calendar-plus"></i> Book Free Consultation',
    chatBtn: '<i class="fa-solid fa-comments"></i> Chat with AI Assistant',
    aboutH2: 'Meet Dr. Archana Mal',
    aboutSub: 'Founder & Senior Dentist at Floss & Gloss Dental Clinic',
    whyTitle: 'Why Should You Choose Floss & Gloss Dental Clinic?',
    whyDesc: 'Delivering world-class dental care with ethical diagnosis and advanced technology in Shela - Bopal.'
  },
  en: {
    navLinks: ['Home', 'About Dentist', 'Treatments & Cost', 'Sterilization', 'Oral Health Hub', 'Contact'],
    heroH1: 'Reclaim Your Confidence With a <span>Million-Dollar Smile</span>',
    heroP: 'Certified dental care by <strong>Dr. Archana Mal (M.D.S. Periodontics)</strong> with 17+ years experience. 100% Autoclave Sterilization & Zero Waiting Time for booked slots.',
    heroBadge: '<i class="fa-solid fa-award"></i> Premier Periodontist & Implantologist in Shela - Bopal',
    bookConsultBtn: '<i class="fa-solid fa-calendar-plus"></i> Book Free Consultation',
    chatBtn: '<i class="fa-solid fa-comments"></i> Chat with AI Assistant',
    aboutH2: 'Meet Dr. Archana Mal',
    aboutSub: 'Founder & Senior Dentist at Floss & Gloss Dental Clinic',
    whyTitle: 'Why Should You Choose Floss & Gloss Dental Clinic?',
    whyDesc: 'Delivering world-class dental care with ethical diagnosis, comfort, and advanced technology in Shela - Bopal.'
  }
};

window.translateWholeSiteDOM = function(lang) {
  const data = siteDomTranslations[lang] || siteDomTranslations.en;

  // 1. Navigation links
  const navAnchors = document.querySelectorAll('#mobileNavMenu li a');
  if (navAnchors && navAnchors.length >= 6) {
    navAnchors.forEach((a, i) => {
      if (data.navLinks[i]) a.innerText = data.navLinks[i];
    });
  }

  // 2. Hero Section
  const heroBadge = document.querySelector('.hero-pill-badge');
  if (heroBadge) heroBadge.innerHTML = data.heroBadge;

  const heroH1 = document.querySelector('.rich-hero-h1');
  if (heroH1) heroH1.innerHTML = data.heroH1;

  const heroP = document.querySelector('.rich-hero-p');
  if (heroP) heroP.innerHTML = data.heroP;

  const bookBtn = document.querySelector('.rich-hero .btn-teal-primary');
  if (bookBtn) bookBtn.innerHTML = data.bookConsultBtn;

  const chatBtn = document.getElementById('heroChatbotBtn');
  if (chatBtn) chatBtn.innerHTML = data.chatBtn;

  // 3. About Section Headings
  const aboutH2 = document.querySelector('#about .rich-title h2');
  if (aboutH2) aboutH2.innerText = data.aboutH2;

  const aboutSub = document.querySelector('#about .rich-title p');
  if (aboutSub) aboutSub.innerText = data.aboutSub;

  // 4. Why Choose Us Headings
  const whyTitles = document.querySelectorAll('.rich-section .rich-title h2');
  if (whyTitles && whyTitles[1]) whyTitles[1].innerText = data.whyTitle;

  const whyDescs = document.querySelectorAll('.rich-section .rich-title p');
  if (whyDescs && whyDescs[1]) whyDescs[1].innerText = data.whyDesc;
};

