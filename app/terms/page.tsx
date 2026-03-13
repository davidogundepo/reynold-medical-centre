import Head from 'next/head';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | Reynold Medical Centre</title>
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
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Terms of Service</h1>
          <p style={{ marginBottom: '2rem', color: 'var(--text-main)' }}>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2 style={{ color: 'var(--orange-dark)', marginTop: '2rem', marginBottom: '1rem' }}>1. Agreement to Terms</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>By accessing our facility or utilizing our online booking services, you agree to abide by the policies and procedures of Reynold Medical Centre.</p>

          <h2 style={{ color: 'var(--orange-dark)', marginTop: '2rem', marginBottom: '1rem' }}>2. Appointments and Cancellations</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>We require accurate information when booking appointments. We kindly request a 24-hour notice for any cancellations so we may offer the time slot to other patients in need of medical attention.</p>

          <h2 style={{ color: 'var(--orange-dark)', marginTop: '2rem', marginBottom: '1rem' }}>3. Medical Advice</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>Information contained on this website is intended for general knowledge and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician regarding a medical condition.</p>
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
