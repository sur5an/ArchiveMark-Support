/* oxlint-disable next/no-img-element -- Relative image URLs keep the exported GitHub Pages site portable. */
import {
  Archive,
  BellRing,
  CheckCircle2,
  CircleHelp,
  ExternalLink,
  FileCheck2,
  FolderOpen,
  HardDrive,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react';

const repository = 'https://github.com/sur5an/ArchiveMark-Support';
const supportRequest = `${repository}/issues/new?template=support-request.md`;

const experiences = [
  { icon: FolderOpen, title: 'Choose what to protect', text: 'Connect your photo library and add any Files folders you want included.' },
  { icon: RefreshCw, title: 'Back up only what is needed', text: 'ArchiveVault compares your library with your archive before enabling backup.' },
  { icon: FileCheck2, title: 'Know every copy is safe', text: 'Each copied file is verified. Integrity Check can find and repair damaged copies.' },
  { icon: BellRing, title: 'Stay up to date', text: 'Pause and resume safely, follow progress from the widget, and receive reminders when media is waiting.' },
];

const troubleshooting = [
  { question: 'Why is the backup button disabled?', answer: 'Reconnect the saved drive, folder, or SMB share, then refresh the library. ArchiveVault keeps backup disabled while the destination is unavailable.' },
  { question: 'What if manifest.csv is deleted?', answer: 'ArchiveVault can rebuild verified records from its local catalogue when the destination files still match. Your media files remain the source of truth.' },
  { question: 'Why can a Live Photo count as two files?', answer: 'On iPhone, a Live Photo contains an image and a short video. ArchiveVault counts one library item but verifies both original files.' },
  { question: 'What does Integrity Check do?', answer: 'It reads backed-up files, confirms their contents, and recreates missing or damaged copies when the original is available.' },
  { question: 'Can I use network storage?', answer: 'Yes. ArchiveVault can discover and connect directly to a compatible SMB2 or SMB3 share. The app tests write access before enabling backup and stores the SMB password in the Apple Keychain.' },
  { question: 'Can a backup continue while the device is locked?', answer: 'ArchiveVault uses system-managed background processing when available and saves progress after every verified file. Keep the device powered for large backups; reopening safely reconciles completed files.' },
  { question: 'What does the widget show?', answer: 'The iOS widget shows running or paused backup progress. When no backup is active, it shows the latest successful backup and the last known number of records still waiting.' },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="ArchiveVault support home">
          <img src="./brand-icon.png" alt="" />
          <span>ArchiveVault</span>
        </a>
        <nav aria-label="Support navigation">
          <a href="#help">Help</a>
          <a href="#privacy">Privacy</a>
          <a className="nav-cta" href={supportRequest}>Get support <ExternalLink size={15} aria-hidden="true" /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><ShieldCheck size={17} /> Official support</p>
          <h1>Your memories deserve a backup you can understand.</h1>
          <p className="lede">ArchiveVault helps you copy original photos, videos, and chosen files to local, external, or SMB storage you control—then clearly shows what is protected and what still needs attention.</p>
          <div className="hero-actions">
            <a className="button primary" href={supportRequest}><CircleHelp size={19} /> Open a support request</a>
            <a className="button secondary" href="#quick-start">View quick start</a>
          </div>
          <p className="response-note">For the fastest help, include your device model, OS version, and ArchiveVault version. Never attach personal media.</p>
        </div>

        <div className="archive-card" aria-label="How ArchiveVault protects a backup">
          <div className="archive-card-header"><span className="status-dot" /><span>YOUR PERSONAL MEDIA ARCHIVE</span></div>
          <div className="archive-path">
            <div><FolderOpen aria-hidden="true" /><span>Choose</span><small>Your library</small></div>
            <span className="path-line" />
            <div><Archive aria-hidden="true" /><span>Compare</span><small>What changed</small></div>
            <span className="path-line" />
            <div><CheckCircle2 aria-hidden="true" /><span>Verify</span><small>Every copy</small></div>
          </div>
          <div className="archive-result"><HardDrive aria-hidden="true" /><div><strong>Storage you control</strong><span>Organized, checked, and ready</span></div></div>
        </div>
      </section>

      <section className="section experience" aria-labelledby="experience-title">
        <div className="section-heading"><p className="eyebrow">What to expect</p><h2 id="experience-title">A calm, clear backup experience</h2></div>
        <div className="feature-grid">
          {experiences.map(({ icon: Icon, title, text }) => (
            <article className="feature-card" key={title}><span className="icon-badge"><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="section quick-start" id="quick-start" aria-labelledby="quick-start-title">
        <div className="section-heading"><p className="eyebrow">Quick start</p><h2 id="quick-start-title">Your first backup</h2><p>ArchiveVault performs a one-way backup. It never deletes originals from your phone or tablet.</p></div>
        <ol className="steps">
          <li><span>1</span><div><strong>Connect your library</strong><p>Allow access to the photos and videos you want ArchiveVault to see.</p></div></li>
          <li><span>2</span><div><strong>Choose a destination</strong><p>Select a local folder, external drive, Files provider, or SMB network share.</p></div></li>
          <li><span>3</span><div><strong>Review and back up</strong><p>ArchiveVault shows the items waiting, copies them, and verifies every completed file.</p></div></li>
          <li><span>4</span><div><strong>Reconnect when needed</strong><p>Refresh the library later to find new items. Verified files are not copied again.</p></div></li>
        </ol>
      </section>

      <section className="section help" id="help" aria-labelledby="help-title">
        <div className="section-heading"><p className="eyebrow">Common questions</p><h2 id="help-title">Troubleshooting</h2></div>
        <div className="faq-list">
          {troubleshooting.map((item) => (
            <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>
          ))}
        </div>
      </section>

      <section className="section privacy" id="privacy" aria-labelledby="privacy-title">
        <div className="privacy-intro">
          <span className="icon-badge large"><LockKeyhole aria-hidden="true" /></span>
          <div><p className="eyebrow">Privacy policy</p><h2 id="privacy-title">Your archive stays yours.</h2><p>ArchiveVault does not require an account and does not send your media, files, credentials, or usage activity to the developer.</p></div>
        </div>
        <div className="privacy-grid">
          <article><h3>Photo library</h3><p>Access is used to show backup status and read originals selected for backup.</p></article>
          <article><h3>Files and destinations</h3><p>ArchiveVault accesses only folders you select. Copies and metadata are written directly to storage you choose.</p></article>
          <article><h3>SMB network shares</h3><p>Server settings remain on the device and passwords are stored in the Apple Keychain. Your chosen server or provider may have its own privacy practices.</p></article>
          <article><h3>Local network discovery</h3><p>Bonjour discovery can list devices advertising SMB on your local network. Results are processed on the device and are not sent to the developer.</p></article>
          <article><h3>Backup records</h3><p>Filenames, dates, file sizes, SHA-256 hashes, paths, timestamps, and a random installation identifier are kept on the device and inside the selected archive.</p></article>
          <article><h3>No collection or tracking</h3><p>The developer does not collect, sell, rent, or share user data. There are no advertising, analytics, or cross-app tracking services.</p></article>
          <article><h3>Notifications</h3><p>Optional reminders are scheduled on the device and can be disabled in ArchiveVault or iOS Settings.</p></article>
          <article><h3>Background processing and widget</h3><p>iOS may give ArchiveVault background time to count new media, evaluate reminders, and refresh its widget. Backup phase, progress, latest backup time, and pending counts are shared with the widget through an on-device Apple App Group.</p></article>
          <article><h3>App update check</h3><p>ArchiveVault may send its public App Store identifier and storefront country to Apple’s public lookup service to check for a newer release. No media, archive records, credentials, or installation identifier are included.</p></article>
          <article><h3>Retention and deletion</h3><p>App records, widget state, and a cached required-update result remain until the app or applicable source is removed. Destination files remain until you delete them from the chosen storage. ArchiveVault never deletes source originals.</p></article>
          <article><h3>Your choices</h3><p>Revoke Photos, local-network, or notification access in iOS Settings; remove selected Files sources in the app; and replace an SMB destination at any time.</p></article>
          <article><h3>Security</h3><p>Copied files are verified with SHA-256. SMB encryption can be requested for compatible servers. No storage or transmission method can be guaranteed completely secure.</p></article>
          <article><h3>Third-party software</h3><p>SMB support uses <a href="https://github.com/amosavian/AMSMB2">AMSMB2</a> under the MIT License and <a href="https://github.com/sahlberg/libsmb2">libsmb2</a> under the LGPL-2.1-or-later license.</p></article>
          <article><h3>Children and changes</h3><p>ArchiveVault is a general-purpose utility and does not knowingly collect information from children or other users. Material policy changes will be reflected here.</p></article>
        </div>
        <p className="updated">Effective and last updated September 30, 2026. Privacy questions can be submitted through the support-request link on this page.</p>
      </section>

      <section className="support-banner" aria-labelledby="support-title">
        <div><p className="eyebrow">Still need help?</p><h2 id="support-title">Tell us what happened.</h2><p>Open a support request and include the steps you took and any message shown by ArchiveVault.</p></div>
        <a className="button primary" href={supportRequest}><CircleHelp size={19} /> Contact support</a>
      </section>

      <footer>
        <div className="brand"><img src="./brand-icon.png" alt="" /><span>ArchiveVault</span></div>
        <p>Your Personal Media Archive</p>
        <a href={repository}>GitHub <ExternalLink size={14} /></a>
      </footer>
    </main>
  );
}
