'use client';
import Head from 'next/head';

export default function Home() {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting Reynold Medical Centre. Our staff will respond shortly.');
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <header className="fixed-header">
          <div className="container header-content">
            <div className="logo-img-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Reynold Medical Centre Logo" className="logo-image" />
            </div>
            <nav>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#team">Our Professionals</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <section className="hero">
          <div className="container">
            <div className="hero-content fade-in-up">
              <h1>Rooted in Compassion.</h1>
              <p>Providing world-class healthcare, advanced diagnostics, and specialist care with a touch of empathy for you and your family.</p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">Book an Appointment</a>
                <a href="#services" className="btn btn-secondary">Our Services</a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <h2 className="section-title slide-up">World Class Healthcare</h2>
            
            <div className="services-grid">
              <div className="service-card slide-up-delay-1">
                <div className="service-icon">🩺</div>
                <h3>Specialist Care</h3>
                <p>Access our team of highly trained medical specialists offering advanced treatments across internal medicine, cardiology, and more.</p>
              </div>
              <div className="service-card slide-up-delay-2">
                <div className="service-icon">👨‍👩‍👧‍👦</div>
                <h3>Family Medicine</h3>
                <p>Comprehensive health care for individuals and families across all ages, genders, and diseases, prioritizing continuity of care.</p>
              </div>
              <div className="service-card slide-up-delay-3">
                <div className="service-icon">🔬</div>
                <h3>Diagnostics</h3>
                <p>State-of-the-art laboratory and imaging center ensuring precise, timely, and reliable test results for effective treatment.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="about-content">
              <div className="about-image slide-right">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1538108149393-cebb47ccc8b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" alt="Modern Medical Facility" />
              </div>
              <div className="about-text slide-left">
                <h2 className="section-title">We combine Professionalism with Empathy</h2>
                <p>At Reynold Medical Centre, we are committed to providing exceptional clinical care in a warm and welcoming environment. With cutting-edge technology and a team of dedicated health professionals, we ensure that every patient is treated with dignity, respect, and utmost care.</p>
                <p>Our comprehensive health packages are designed to give you peace of mind, emphasizing preventative care alongside acute treatments. Your well-being is not just our profession; it&apos;s our profound commitment.</p>
                <a href="#team" className="btn btn-primary" style={{marginTop: '1rem'}}>Meet Our Experts</a>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="team">
          <div className="container">
            <h2 className="section-title slide-up">Our Medical Specialists</h2>
            
            <div className="team-grid">
              <div className="team-member slide-up-delay-1">
                <div className="team-img-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dr. Obasohan Bountiful" />
                </div>
                <div className="team-info">
                  <h3>Dr. Obasohan Bountiful</h3>
                  <p>Chief Health Care Officer</p>
                </div>
              </div>
              <div className="team-member slide-up-delay-2">
                <div className="team-img-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dr. Sarah Johnson" />
                </div>
                <div className="team-info">
                  <h3>Dr. Sarah Johnson</h3>
                  <p>Head of Pediatrics</p>
                </div>
              </div>
              <div className="team-member slide-up-delay-3">
                <div className="team-img-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dr. Michael Chang" />
                </div>
                <div className="team-info">
                  <h3>Dr. Michael Chang</h3>
                  <p>Cardiologist</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="contact-container slide-up">
              <div className="contact-info">
                <h3>Get in Touch</h3>
                <p>Whether you need to book an appointment, have questions about our services, or require emergency details, our staff is here to assist.</p>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <span>Nigeria</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <span>070 894 71153</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">⏰</div>
                  <span>Open 24/7 for Emergencies</span>
                </div>
              </div>
              
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <h3>Book Appointment</h3>
                <div className="form-group">
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Reason for Visit / Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{alignSelf: 'flex-start'}}>Submit Request</button>
              </form>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="footer-logo-wrapper">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="/logo.png" alt="Reynold Medical Centre Logo" className="footer-logo-img" />
            </div>
            <div className="footer-links">
              <a href="#">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#team">Professionals</a>
              <a href="#contact">Contact</a>
            </div>
            <p className="copyright">&copy; {new Date().getFullYear()} Reynold Medical Centre. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
