import Head from 'next/head';
import Link from 'next/link';

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer | Reynold Medical Centre</title>
      </Head>
      <main className="legal-page">
        <header className="fixed-header" style={{ position: 'relative' }}>
          <div className="container header-content">
            <div className="logo-img-wrapper">
              <Link href="/">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="Reynold Medical Centre Logo" className="logo-image" style={{cursor: 'pointer'}} />
              </Link>
            </div>
            <nav>
              <ul>
                <li><Link href="/">Back to Home</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <section className="container" style={{ padding: '6rem 2rem' }}>
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Medical Disclaimer</h1>
          <p style={{ marginBottom: '2rem', color: 'var(--text-main)' }}>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2 style={{ color: 'var(--orange-dark)', marginTop: '2rem', marginBottom: '1rem' }}>1. No Medical Advice</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>The content and information provided on this website are exclusively for educational and orientational purposes. Nothing on this website constitutes, nor should be considered a substitute for, professional medical advice, diagnosis, or treatment.</p>

          <h2 style={{ color: 'var(--orange-dark)', marginTop: '2rem', marginBottom: '1rem' }}>2. Emergency Situations</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>Do not rely on electronic communications or this website for immediate, urgent medical needs. If you are experiencing a medical emergency, please call your local emergency services hotline or proceed to the nearest emergency room immediately.</p>

          <h2 style={{ color: 'var(--orange-dark)', marginTop: '2rem', marginBottom: '1rem' }}>3. Professional Relationship</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>Accessing this website does not create a physician-patient relationship. Such a relationship is only established upon formal consultation and registration at Reynold Medical Centre with a licensed medical practitioner.</p>
        </section>

        <footer>
          <div className="container">
            <div className="footer-logo-wrapper">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="/logo.png" alt="Reynold Medical Centre Logo" className="footer-logo-img" />
            </div>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/#about">About</Link>
              <Link href="/#services">Services</Link>
              <Link href="/#team">Professionals</Link>
              <Link href="/#contact">Contact</Link>
            </div>
            
            <div className="footer-links" style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
              <Link href="/privacy">Privacy Policy</Link>
              <span style={{color: '#555'}}>|</span>
              <Link href="/terms">Terms of Service</Link>
              <span style={{color: '#555'}}>|</span>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
            <p className="copyright">&copy; {new Date().getFullYear()} Reynold Medical Centre. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
