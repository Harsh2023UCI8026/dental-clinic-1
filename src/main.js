import './style.css';

document.querySelector('#app').innerHTML = `
  <!-- Top Utility Bar -->
  <div class="top-notice-bar">
    <div class="container">
      <div>
        <i class="fa-solid fa-location-dot" style="color: var(--teal-primary)"></i> <strong>Floss & Gloss Clinic:</strong> 130-First Floor, Orchid Sky, Shela, Ahmedabad | <i class="fa-solid fa-phone"></i> Direct Call: <a href="tel:+919104591919" style="color: var(--cyan-accent);">+91 91045 91919</a>
      </div>
      <div>
        <span style="background: rgba(255,255,255,0.1); padding: 5px 12px; border-radius: 20px; font-weight: 600;">
          <i class="fa-solid fa-clock"></i> Mon - Sat: 10 AM - 8 PM
        </span>
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

      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Dentist</a></li>
        <li><a href="#treatments">Treatments & Cost</a></li>
        <li><a href="#hygiene">Sterilization</a></li>
        <li><a href="#blogs">Oral Health Hub</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div style="display: flex; gap: 12px; align-items: center;">
        <button class="btn-teal-primary open-booking-modal">
          <i class="fa-solid fa-calendar-check"></i> Book Appointment
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

  <!-- Animated Chatbot Widget -->
  <button id="sdChatbotTrigger" class="sd-chatbot-trigger">
    <i class="fa-solid fa-comments"></i>
  </button>

  <div id="sdChatbotWindow" class="sd-chatbot-window" style="display: none;">
    <div class="sd-chat-header">
      <div style="display: flex; align-items: center; gap: 12px;">
        <img src="/dr-archana.jpg" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;" />
        <div>
          <div style="font-weight: 800; font-size: 0.95rem;">Dr. Archana Assistant</div>
          <div style="font-size: 0.75rem; color: #cbd5e1;">Floss & Gloss Clinic</div>
        </div>
      </div>
      <button id="sdChatCloseBtn" style="background: transparent; border: none; color: white; font-size: 1.2rem; cursor: pointer;">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <div id="sdChatBody" class="sd-chat-body">
      <div class="sd-msg bot chat-msg-animated delay-1">
        👋 <strong>Hi, I am Dr. Archana Mal!</strong><br/>
        Welcome to <strong>Floss & Gloss Dental Clinic</strong>!
      </div>
      <div class="chat-msg-animated delay-2" style="background: white; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: var(--shadow-sm);">
        <img src="/patient-smile.jpg" style="width: 100%; height: 135px; object-fit: cover;" />
      </div>
      <div class="sd-msg bot chat-msg-animated delay-3">
        ✨ <em>"Let your smile change the world!"</em><br/>
        How may I assist you today?
        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
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

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  const sdModal = document.getElementById('sdModal');
  const closeSdModal = document.getElementById('closeSdModal');

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

window.handleSdChat = function(option) {
  const chatBody = document.getElementById('sdChatBody');

  // Animated User Message
  const userMsg = document.createElement('div');
  userMsg.className = 'sd-msg user chat-msg-animated';
  userMsg.innerText = option;
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

    const lower = option.toLowerCase();
    if (lower.includes('attached file')) {
      botMsg.innerHTML = `📄 <strong>File Received!</strong><br/>Dr. Archana’s team will review your attachment for preliminary evaluation.<br/><br/><button class="btn-teal-primary open-booking-modal" style="padding: 8px 16px; font-size: 0.85rem;">Schedule Review Call</button>`;
    } else if (lower.includes('appointment') || lower.includes('book') || lower.includes('slot')) {
      botMsg.innerHTML = 'You can pick your preferred consultation slot now:<br/><br/><button class="btn-teal-primary open-booking-modal" style="padding: 8px 16px; font-size: 0.85rem;">Open Slot Picker</button>';
    } else if (lower.includes('pain') || lower.includes('emergency') || lower.includes('toothache')) {
      botMsg.innerHTML = 'For urgent dental pain, please call Dr. Archana Mal directly: <a href="tel:+919104591919" style="color: var(--teal-primary); font-weight: 700;">+91 91045 91919</a>';
    } else if (lower.includes('aligner') || lower.includes('braces') || lower.includes('invisalign')) {
      botMsg.innerHTML = 'We offer certified Clear Aligners and Ceramic Braces. Initial 3D scanning is included in consultation.';
    } else if (lower.includes('cleaning') || lower.includes('whitening') || lower.includes('polishing')) {
      botMsg.innerHTML = 'Teeth Cleaning (Scaling & Polishing) removes plaque & stains for fresh breath. Duration: 30 mins.';
    } else if (lower.includes('implant') || lower.includes('denture') || lower.includes('replacement')) {
      botMsg.innerHTML = 'Dental Implants provide permanent single/full-mouth tooth replacement with natural feel.';
    } else if (lower.includes('location') || lower.includes('where') || lower.includes('address') || lower.includes('shela')) {
      botMsg.innerHTML = 'Clinic Address: <strong>130-First Floor, Orchid Sky, Shela, Ahmedabad 380058</strong> (Opp. Applewoods).';
    } else {
      botMsg.innerHTML = `Thank you for reaching out! Dr. Archana’s team will assist you with "${option}". Would you like to book a consultation?`;
    }
    
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;

    document.querySelectorAll('.sd-msg.bot .open-booking-modal').forEach(b => {
      b.addEventListener('click', () => {
        document.getElementById('sdModal').style.display = 'flex';
      });
    });
  }, 700);
};
