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
  { icon: RefreshCw, title: 'Back up only what is needed', text: 'ArchiveMark compares your library with your archive before enabling backup.' },
  { icon: FileCheck2, title: 'Know every copy is safe', text: 'Each copied file is verified. Integrity Check can find and repair damaged copies.' },
  { icon: BellRing, title: 'Stay up to date', text: 'Review recent backups and receive reminders when new media is waiting.' },
];

const troubleshooting = [
  { question: 'Why is the backup button disabled?', answer: 'Reconnect the saved drive or folder, then refresh the library. ArchiveMark keeps backup disabled while the destination is unavailable.' },
  { question: 'What if manifest.csv is deleted?', answer: 'ArchiveMark can rebuild verified records from its local catalogue when the destination files still match. Your media files remain the source of truth.' },
  { question: 'Why can a Live Photo count as two files?', answer: 'On iPhone, a Live Photo contains an image and a short video. ArchiveMark counts one library item but verifies both original files.' },
  { question: 'What does Integrity Check do?', answer: 'It reads backed-up files, confirms their contents, and recreates missing or damaged copies when the original is available.' },
  { question: 'Can a backup continue while the device is locked?', answer: 'ArchiveMark uses the background time available on your device. For very large backups, keep the app open and the device powered; reopening safely reconciles completed files.' },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="ArchiveMark support home">
          <img src="./brand-icon.png" alt="" />
          <span>ArchiveMark</span>
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
          <p className="lede">ArchiveMark helps you copy original photos, videos, and chosen files to storage you control—then clearly shows what is protected and what still needs attention.</p>
          <div className="hero-actions">
            <a className="button primary" href={supportRequest}><CircleHelp size={19} /> Open a support request</a>
            <a className="button secondary" href="#quick-start">View quick start</a>
          </div>
          <p className="response-note">For the fastest help, include your device model, OS version, and ArchiveMark version. Never attach personal media.</p>
        </div>

        <div className="archive-card" aria-label="How ArchiveMark protects a backup">
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
        <div className="section-heading"><p className="eyebrow">Quick start</p><h2 id="quick-start-title">Your first backup</h2><p>ArchiveMark performs a one-way backup. It never deletes originals from your phone or tablet.</p></div>
        <ol className="steps">
          <li><span>1</span><div><strong>Connect your library</strong><p>Allow access to the photos and videos you want ArchiveMark to see.</p></div></li>
          <li><span>2</span><div><strong>Choose a destination</strong><p>Select an external drive or a folder in device storage.</p></div></li>
          <li><span>3</span><div><strong>Review and back up</strong><p>ArchiveMark shows the items waiting, copies them, and verifies every completed file.</p></div></li>
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
          <div><p className="eyebrow">Privacy</p><h2 id="privacy-title">Your archive stays yours.</h2><p>ArchiveMark does not require an account and does not upload your media to an ArchiveMark cloud service.</p></div>
        </div>
        <div className="privacy-grid">
          <article><h3>Photo library</h3><p>Access is used to show backup status and read originals selected for backup.</p></article>
          <article><h3>Files and folders</h3><p>ArchiveMark accesses only the source folders and destination you choose.</p></article>
          <article><h3>Backup records</h3><p>Verification records are kept on your device and inside the selected archive destination.</p></article>
          <article><h3>Notifications</h3><p>Optional reminders tell you when new media may be waiting for backup.</p></article>
        </div>
        <p className="updated">Privacy information last updated September 20, 2026.</p>
      </section>

      <section className="support-banner" aria-labelledby="support-title">
        <div><p className="eyebrow">Still need help?</p><h2 id="support-title">Tell us what happened.</h2><p>Open a support request and include the steps you took and any message shown by ArchiveMark.</p></div>
        <a className="button primary" href={supportRequest}><CircleHelp size={19} /> Contact support</a>
      </section>

      <footer>
        <div className="brand"><img src="./brand-icon.png" alt="" /><span>ArchiveMark</span></div>
        <p>Your Personal Media Archive</p>
        <a href={repository}>GitHub <ExternalLink size={14} /></a>
      </footer>
    </main>
  );
}
