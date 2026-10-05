"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  ExternalLink,
  Mail,
  Menu,
  Phone,
  X,
  Sparkles,
  Workflow,
  ShieldCheck,
} from "lucide-react";
import {
  credentials,
  experience,
  processSteps,
  profile,
  services,
  socials,
  tools,
} from "../data/site";
import { projects } from "../data/projects";

const filters = [
  "All",
  "Executive",
  "Operations",
  "Automation",
  "Technology",
] as const;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(
    null,
  );
  const visibleProjects = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  const nav = ["About", "Services", "Work", "Systems", "Experience", "Contact"];

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">II</span>
          <span>IHOON ISAAC</span>
        </a>
        <nav
          className={menuOpen ? "nav open" : "nav"}
          aria-label="Primary navigation"
        >
          {nav.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            className="nav-cta"
            href="/discovery"
            onClick={() => setMenuOpen(false)}
          >
            Start a Project <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          className="menu-button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> {profile.availability}
          </div>

          <p className="micro">
            EXECUTIVE SUPPORT · DIGITAL OPERATIONS · AI AUTOMATION
          </p>

          <h1>
            Your time is valuable.
            <br />
            <em>Your operations should work better.</em>
          </h1>

          <p className="hero-text">
            {profile.tagline} {profile.summary}
          </p>

          <div className="hero-actions">
            <a className="button primary" href="/discovery">
              Start a Project <ArrowUpRight size={17} />
            </a>

            <a className="button ghost" href="#work">
              Explore My Work <ChevronRight size={17} />
            </a>
          </div>

          <div className="hero-proof">
            <span>EXECUTIVE-MINDED</span>
            <span>TECHNICALLY CAPABLE</span>
            <span>SYSTEMS-ORIENTED</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <Image
              src="/images/portrait.webp"
              alt="Ihoon Isaac in a professional technology workspace"
              fill
              priority
              quality={84}
              sizes="(max-width: 900px) 90vw, 45vw"
            />
          </div>

          <div className="hero-cards-bottom">
            <div className="floating-card card-top">
              <span>01</span>
              <strong>Executive Support</strong>
              <small>Time · Communication · Priorities</small>
            </div>

            <div className="floating-card card-bottom">
              <span>02</span>
              <strong>Systems Thinking</strong>
              <small>Map → Improve → Automate</small>
            </div>
          </div>

          <div className="orb orb-one" />
          <div className="orb orb-two" />
        </div>
      </section>

      <section className="trust-strip">
        <div className="shell trust-grid">
          <div>
            <small>EXECUTIVE SUPPORT</small>
            <strong>Calendar · Inbox · Meetings</strong>
          </div>
          <div>
            <small>DIGITAL OPERATIONS</small>
            <strong>CRM · Data · SOPs</strong>
          </div>
          <div>
            <small>AUTOMATION</small>
            <strong>AI · Zapier · Make · APIs</strong>
          </div>
          <div>
            <small>TECHNICAL</small>
            <strong>Web · Systems · Troubleshooting</strong>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="section shell about-grid dark-page-section"
      >
        <div className="section-kicker">01 / THE DIFFERENCE</div>
        <div className="about-content">
          <h2>
            Executive support with a <em>systems-operator mindset.</em>
          </h2>
          <p className="lead">
            I don't just manage tasks. I look at the workflow behind the task
            and ask how it can work better.
          </p>
          <p>
            My work sits at the intersection of executive assistance, digital
            operations and technology. That means I can protect an executive's
            time and attention while also improving the systems that support the
            work.
          </p>
          <p>
            Technology taught me how to build systems. Executive support taught
            me why those systems matter.
          </p>
          <div className="about-capabilities">
            <div>
              <Sparkles size={17} />
              <strong>Executive-minded</strong>
              <span>Time, priorities & communication</span>
            </div>
            <div>
              <Workflow size={17} />
              <strong>Systems-oriented</strong>
              <span>Processes, SOPs & workflows</span>
            </div>
            <div>
              <ShieldCheck size={17} />
              <strong>Trust-focused</strong>
              <span>Accuracy, discretion & continuity</span>
            </div>
          </div>
          <div className="signature">
            Don't just delegate the task.
            <br />
            <strong>Improve the system behind it.</strong>
          </div>
        </div>
      </section>

      <section id="services" className="section dark-section">
        <div className="shell">
          <div className="section-kicker">02 / SERVICES</div>
          <div className="section-heading">
            <h2>
              One support partner. <em>Multiple capabilities.</em>
            </h2>
            <p>
              Professional executive support strengthened by digital operations,
              automation and technical capability.
            </p>
          </div>
          <div className="service-grid">
            {services.map((s) => (
              <article className="service-card" key={s.number}>
                <div className="service-head">
                  <span className="service-number">{s.number}</span>
                  <ArrowUpRight size={16} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>
                      <Check size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="systems" className="section shell dark-page-section">
        <div className="section-kicker">03 / HOW I WORK</div>
        <div className="section-heading">
          <h2>
            I don't just use tools. <em>I connect them.</em>
          </h2>
          <p>
            My workflow is designed to create clarity first, then efficiency,
            then automation.
          </p>
        </div>
        <div className="process-line">
          {processSteps.map(([n, t, d], i) => (
            <div className="process-step" key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
              {i < processSteps.length - 1 && (
                <ChevronRight className="process-arrow" />
              )}
            </div>
          ))}
        </div>
        <div className="workflow-demo">
          <div className="workflow-node">CALENDAR</div>
          <div className="workflow-connector">→</div>
          <div className="workflow-node">ZOHO CRM</div>
          <div className="workflow-connector">→</div>
          <div className="workflow-node ai">CHATGPT</div>
          <div className="workflow-connector">→</div>
          <div className="workflow-node">TASKS</div>
          <div className="workflow-connector">→</div>
          <div className="workflow-node">SLACK</div>
        </div>
      </section>

      <section id="work" className="section dark-section">
        <div className="shell">
          <div className="section-kicker">04 / SELECTED WORK</div>
          <div className="section-heading work-heading">
            <div>
              <h2>
                Proof, not just <em>promises.</em>
              </h2>
              <p>
                Demonstration work and professional evidence across executive
                support, operations, automation and technology.
              </p>
            </div>
            <div className="filter-row">
              {filters.map((f) => (
                <button
                  className={filter === f ? "active" : ""}
                  key={f}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="project-grid">
            {visibleProjects.map((p, idx) => (
              <button
                className="project-card"
                key={p.slug}
                onClick={() => setSelected(p)}
              >
                <div className="project-media">
                  {p.images[0] && (
                    <Image
                      src={p.images[0]}
                      alt={p.title}
                      fill
                      quality={78}
                      loading="lazy"
                      sizes="(max-width: 700px) 90vw, 42vw"
                    />
                  )}
                  <span className="project-index">0{idx + 1}</span>
                  <span className="project-open">
                    <ArrowUpRight />
                  </span>
                </div>
                <div className="project-content">
                  <span className="tag">{p.label}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <span className="read-more">
                    View case study <ArrowUpRight size={14} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell tools-section dark-page-section">
        <div className="section-kicker">05 / TECHNOLOGY</div>
        <div className="section-heading">
          <h2>
            Technology that serves <em>the operation.</em>
          </h2>
          <p>
            The stack is secondary to the outcome. I choose tools according to
            the workflow and business requirement.
          </p>
        </div>
        <div className="tools-grid">
          {tools.map((group) => (
            <div className="tool-group" key={group.category}>
              <span>{group.category}</span>
              <div>
                {group.tools.map((t) => (
                  <b key={t}>{t}</b>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="section dark-section experience-section"
      >
        <div className="shell">
          <div className="section-kicker">06 / EXPERIENCE</div>
          <div className="section-heading">
            <h2>
              Built across <em>support, operations & technology.</em>
            </h2>
          </div>
          <div className="timeline">
            {experience.map((job, i) => (
              <article
                className="timeline-item"
                key={`${job.company}-${job.title}`}
              >
                <div className="timeline-marker">0{i + 1}</div>
                <div className="timeline-main">
                  <span className="dates">{job.dates}</span>
                  <h3>{job.title}</h3>
                  <h4>{job.company}</h4>
                  <p>{job.description}</p>
                  <div className="highlights">
                    {job.highlights.map((h) => (
                      <span key={h}>{h}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell credentials-grid dark-page-section">
        <div>
          <div className="section-kicker">07 / CREDENTIALS</div>
          <h2>
            Communication, technology and <em>executive operations.</em>
          </h2>
        </div>
        <div className="credential-list">
          {credentials.map((c) => (
            <div className="credential" key={c.title}>
              <Check size={17} />
              <div>
                <strong>{c.title}</strong>
                <p>{c.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell ways-section dark-page-section">
        <div className="section-kicker">08 / WAYS TO WORK TOGETHER</div>
        <div className="section-heading">
          <h2>
            Support that fits <em>the operation.</em>
          </h2>
          <p>
            Choose the level of support that matches your priorities today. The
            engagement can grow as the work grows.
          </p>
        </div>
        <div className="ways-grid">
          <article className="way-card">
            <span>01</span>
            <h3>Executive Partnership</h3>
            <p>
              Ongoing support for calendars, inboxes, meetings, research, travel
              and executive follow-through.
            </p>
            <a href={profile.calendly} target="_blank" rel="noreferrer">
              Discuss an engagement <ArrowUpRight size={15} />
            </a>
          </article>
          <article className="way-card">
            <span>02</span>
            <h3>Digital Operations</h3>
            <p>
              Organize information, improve workflows, build SOPs and create
              clearer operational systems.
            </p>
            <a href={profile.calendly} target="_blank" rel="noreferrer">
              Discuss an engagement <ArrowUpRight size={15} />
            </a>
          </article>
          <article className="way-card">
            <span>03</span>
            <h3>Systems & Automation</h3>
            <p>
              Connect CRM, communication and AI tools to reduce repetitive work
              and improve operational handoffs.
            </p>
            <a href={profile.calendly} target="_blank" rel="noreferrer">
              Discuss an engagement <ArrowUpRight size={15} />
            </a>
          </article>
          <article className="way-card">
            <span>04</span>
            <h3>Hybrid Support</h3>
            <p>
              Combine executive assistance, digital operations and technical
              capability under one support partner.
            </p>
            <a href={profile.calendly} target="_blank" rel="noreferrer">
              Discuss an engagement <ArrowUpRight size={15} />
            </a>
          </article>
        </div>
        <div className="confidentiality-note">
          <ShieldCheck size={17} />
          <span>
            <strong>Confidentiality by design.</strong> Public portfolio
            examples are demonstrations, anonymized work or synthetic data
            unless explicitly authorized for publication.
          </span>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="shell contact-inner">
          <div>
            <div className="section-kicker">09 / LET'S WORK TOGETHER</div>
            <h2>
              Your business doesn't need more noise.
              <br />
              <em>It needs better systems.</em>
            </h2>
            <p>
              {profile.ctaCopy ??
                "If you're looking for executive support backed by digital operations, AI automation and technical capability, let's talk."}
            </p>
          </div>
          <div className="contact-card">
            <div className="contact-row">
              <Mail />
              <div>
                <small>EMAIL</small>
                <a href={`mailto:${profile.email}`}>
                  <strong>{profile.email}</strong>
                </a>
              </div>
            </div>
            <div className="contact-row">
              <Phone />
              <div>
                <small>PHONE</small>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                  <strong>{profile.phone}</strong>
                </a>
              </div>
            </div>
            <div className="contact-row">
              <span className="contact-icon">WA</span>
              <div>
                <small>WHATSAPP</small>
                <a href={profile.whatsapp} target="_blank" rel="noreferrer">
                  <strong>Start a conversation</strong>
                </a>
              </div>
            </div>
            <div className="contact-row">
              <Clock3 />
              <div>
                <small>AVAILABILITY</small>
                <strong>{profile.availability}</strong>
              </div>
            </div>
            <div className="contact-actions">
              <a
                className="button primary wide"
                href={profile.calendly}
                target="_blank"
                rel="noreferrer"
              >
                Book a Consultation <ArrowUpRight size={17} />
              </a>
              <a
                className="button ghost wide"
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp <ArrowUpRight size={17} />
              </a>
            </div>
            <p className="contact-note">
              For executive support, digital operations, automation or technical
              projects.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-grid">
          <div>
            <a href="#top" className="brand">
              <span className="brand-mark">II</span>
              <span>IHOON ISAAC</span>
            </a>
            <p>
              Executive Virtual Assistant
              <br />
              Digital Operations · AI Automation · Technical Support
            </p>
          </div>
          <div className="footer-links">
            {[
              "About",
              "Services",
              "Work",
              "Systems",
              "Experience",
              "Contact",
            ].map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`}>
                {n}
              </a>
            ))}
          </div>
          <div className="footer-socials">
            {socials.map((s) =>
              s.href !== "#" ? (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                  <ExternalLink size={13} />
                </a>
              ) : (
                <span key={s.label} className="coming">
                  {s.label} · Coming Soon
                </span>
              ),
            )}
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>
            © {new Date().getFullYear()} Ihoon Isaac. All rights reserved.
          </span>
          <span>Digital Ghost · Ghost Tech ecosystem</span>
        </div>
      </footer>

      {selected && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close case study"
            >
              <X />
            </button>
            <div className="modal-hero">
              <Image
                src={selected.images[0]}
                alt={selected.title}
                fill
                quality={80}
                sizes="(max-width: 960px) 95vw, 900px"
              />
            </div>
            <div className="modal-body">
              <span className="tag">{selected.label}</span>
              <h2>{selected.title}</h2>
              <p className="modal-description">{selected.description}</p>
              <div className="case-grid">
                <div>
                  <small>ROLE</small>
                  <strong>{selected.role}</strong>
                </div>
                <div>
                  <small>OUTCOME</small>
                  <strong>{selected.outcome}</strong>
                </div>
                <div>
                  <small>TOOLS</small>
                  <strong>{selected.tools.join(" · ")}</strong>
                </div>
                <div>
                  <small>EVIDENCE</small>
                  <strong>{selected.evidence}</strong>
                </div>
              </div>
              {selected.images.length > 1 && (
                <div className="modal-gallery">
                  {selected.images.slice(1).map((img) => (
                    <div key={img}>
                      <Image
                        src={img}
                        alt={`${selected.title} supporting evidence`}
                        fill
                        quality={78}
                        loading="lazy"
                        sizes="(max-width: 960px) 90vw, 430px"
                      />
                    </div>
                  ))}
                </div>
              )}
              <p className="case-note">
                {selected.note ??
                  "Portfolio evidence presented for capability demonstration."}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
