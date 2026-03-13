import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Reynold Medical Centre</title>
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
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Privacy Policy</h1>
          <p style={{ marginBottom: '2rem', color: 'var(--text-main)' }}>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2 style={{ color: 'var(--orange-dark)', marginTop: '2rem', marginBottom: '1rem' }}>1. Patient Confidentiality</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>At Reynold Medical Centre, we uphold the strictest standards of patient confidentiality. We collect personal and medical information exclusively to provide high-quality healthcare and diagnostic services. Your medical records are protected under global healthcare compliance standards.</p>

          <h2 style={{ color: 'var(--orange-dark)', marginTop: '2rem', marginBottom: '1rem' }}>2. How We Use Your Data</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>Your data is utilized strictly for medical diagnosis, treatment planning, appointment scheduling, and internal healthcare administration. We do not use your medical data for marketing purposes without explicit, written consent.</p>

          <h2 style={{ color: 'var(--orange-dark)', marginTop: '2rem', marginBottom: '1rem' }}>3. Data Sharing & Security</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>We absolutely do not sell your personal data. Your information is only shared with trusted medical partners (e.g., specialized laboratories) directly involved in your care, or when legally mandated. Our electronic health record systems employ end-to-end encryption.</p>

          <h2 style={{ color: 'var(--orange-dark)', marginTop: '2rem', marginBottom: '1rem' }}>4. Contact Us</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>For queries regarding your medical records or data privacy, please contact our administrative desk at our facility or via the provided contact avenues on our homepage.</p>
        </section>

        <footer>
          <div className="container">
            <div className="footer-logo-wrapper">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="/logo.png" alt="Reynold Medical Centre Logo" className="footer-logo-img" />
            </div>
            <p className="copyright">&copy; {new Date().getFullYear()} Reynold Medical Centre. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
