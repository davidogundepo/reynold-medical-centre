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
      <main id="top">
        <header className="fixed-header">
          <div className="container header-content">
            <div className="logo-img-wrapper">
              <a href="#top">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="Reynold Medical Centre Logo" className="logo-image" style={{cursor: 'pointer'}} />
              </a>
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
                <img src="https://i.pinimg.com/1200x/ba/f1/29/baf129cb71ea45fab3ff3b664f9f42d5.jpg" alt="Modern Medical Facility" />
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
                  <img src="https://i.pinimg.com/736x/e7/d2/c2/e7d2c238fed6d01510ee842b2e55496a.jpg" alt="Dr. Olatunde Adeleke" />
                </div>
                <div className="team-info">
                  <h3>Dr. Olatunde Adeleke</h3>
                  <p>Chief Health Care Officer</p>
                </div>
              </div>
              <div className="team-member slide-up-delay-2">
                <div className="team-img-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://i.pinimg.com/736x/6d/ce/c7/6dcec7f5c54906c86f0726d1fa163662.jpg" alt="Obasohan Bountiful" />
                </div>
                <div className="team-info">
                  <h3>Obasohan Bountiful</h3>
                  <p>Head of Pediatrics</p>
                </div>
              </div>
              <div className="team-member slide-up-delay-3">
                <div className="team-img-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://i.pinimg.com/1200x/c0/e4/24/c0e42455d1cc9efc38fb4b71bf082aeb.jpg" alt="Dr. Zainab Usman" />
                </div>
                <div className="team-info">
                  <h3>Dr. Zainab Usman</h3>
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
                  <span>25 Allen Avenue, Ikeja, Lagos</span>
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
