"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  ShieldCheck,
} from "lucide-react";

export default function DiscoveryPage() {
  return (
    <main className="discovery-page">
      {/* Header */}
      <header className="site-header">
        <Link href="/" className="brand">
          <span className="brand-mark">II</span>
          <span>IHOON ISAAC</span>
        </Link>

        <Link href="/" className="button ghost discovery-back">
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
      </header>

      {/* Hero */}
      <section className="discovery-hero shell">
        <div className="discovery-intro">
          <div className="section-kicker">CLIENT DISCOVERY</div>

          <p className="micro">
            EXECUTIVE SUPPORT · DIGITAL OPERATIONS · AI AUTOMATION
          </p>

          <h1>
            Tell me what you <em>need.</em>
          </h1>

          <p className="lead">
            Share a few details about your business and the support you&apos;re
            looking for. I&apos;ll review your request and follow up with the
            appropriate next steps.
          </p>

          <div className="discovery-points">
            <div>
              <CheckCircle2 size={18} />
              <span>Structured discovery process</span>
            </div>

            <div>
              <ShieldCheck size={18} />
              <span>Information handled professionally</span>
            </div>

            <div>
              <Clock3 size={18} />
              <span>Clear next-step follow-up</span>
            </div>
          </div>
        </div>

        {/* CRM Form */}
        <div className="discovery-form-card">
          <div className="discovery-form-heading">
            <span>01 / SERVICE REQUEST</span>
            <h2>Client Discovery Form</h2>
            <p>
              Complete the form below with enough information for me to
              understand your requirements.
            </p>
          </div>

          <form
            id="webform7564715000000747044"
            action="https://crm.zoho.com/crm/WebToLeadForm"
            name="WebToLeads7564715000000747044"
            method="POST"
            acceptCharset="UTF-8"
          >
            {/*
              Zoho-generated Web-to-Lead identifiers.
              Do not rename or remove these fields.
            */}
            <input
              type="hidden"
              name="xnQsjsdp"
              value="8547ee37993f6caff745c5498e29e9dd49c165236d5ffb32bbec66fc78f3ae9a"
            />

            <input type="hidden" name="zc_gad" id="zc_gad" value="" />

            <input
              type="hidden"
              name="xmIwtLD"
              value="5c1a936f4a6b4ec6efdd8eb6e014130fdee21f0094d17df6941ae4db859c96e6d6f89efab5baf687b71aa2b7d06eee95"
            />

            <input type="hidden" name="actionType" value="TGVhZHM=" />

            {/*
  After a successful Zoho submission, return the visitor
  to the discovery page.
*/}
            <input
              type="hidden"
              name="returnURL"
              value="https://executive-va-lemon.vercel.app/discovery?submitted=true"
            />

            {/* Zoho honeypot */}
            <input
              type="text"
              name="aG9uZXlwb3Q"
              value=""
              onChange={() => {}}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
                opacity: 0,
              }}
            />

            <div className="discovery-form-grid">
              {/* First Name */}
              <div className="discovery-field">
                <label htmlFor="First_Name">First Name</label>

                <input
                  type="text"
                  id="First_Name"
                  name="First Name"
                  maxLength={40}
                  autoComplete="given-name"
                  placeholder="Daniel"
                />
              </div>

              {/* Last Name */}
              <div className="discovery-field">
                <label htmlFor="Last_Name">
                  Last Name <span>*</span>
                </label>

                <input
                  type="text"
                  id="Last_Name"
                  name="Last Name"
                  maxLength={80}
                  autoComplete="family-name"
                  placeholder="Carter"
                  required
                />
              </div>

              {/* Company */}
              <div className="discovery-field discovery-field-full">
                <label htmlFor="Company">
                  Company / Organization <span>*</span>
                </label>

                <input
                  type="text"
                  id="Company"
                  name="Company"
                  maxLength={200}
                  autoComplete="organization"
                  placeholder="Carter Growth Labs"
                  required
                />
              </div>

              {/* Email */}
              <div className="discovery-field">
                <label htmlFor="Email">Business Email</label>

                <input
                  type="email"
                  id="Email"
                  name="Email"
                  maxLength={100}
                  autoComplete="email"
                  placeholder="daniel@company.com"
                />
              </div>

              {/* Phone */}
              <div className="discovery-field">
                <label htmlFor="Phone">Phone</label>

                <input
                  type="tel"
                  id="Phone"
                  name="Phone"
                  maxLength={30}
                  autoComplete="tel"
                  placeholder="+1 555 000 0000"
                />
              </div>

              {/* Lead Source */}
              <div className="discovery-field">
                <label htmlFor="Lead_Source">How did you find me?</label>

                <select
                  id="Lead_Source"
                  name="Lead Source"
                  defaultValue="-None-"
                >
                  <option value="-None-">Select a source</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="Cold Call">Cold Call</option>
                  <option value="Employee Referral">Employee Referral</option>
                  <option value="External Referral">External Referral</option>
                  <option value="Online Store">Online Store</option>
                  <option value="X (Twitter)">X (Twitter)</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Partner">Partner</option>
                  <option value="Public Relations">Public Relations</option>
                  <option value="Sales Email Alias">Sales Email Alias</option>
                  <option value="Seminar Partner">Seminar Partner</option>
                  <option value="Internal Seminar">Internal Seminar</option>
                  <option value="Trade Show">Trade Show</option>
                  <option value="Web Download">Web Download</option>
                  <option value="Web Research">Web Research</option>
                  <option value="Chat">Chat</option>
                </select>
              </div>

              {/* Industry */}
              <div className="discovery-field">
                <label htmlFor="Industry">Industry</label>

                <select id="Industry" name="Industry" defaultValue="-None-">
                  <option value="-None-">Select an industry</option>

                  <option value="ASP (Application Service Provider)">
                    ASP (Application Service Provider)
                  </option>

                  <option value="Data/Telecom OEM">Data/Telecom OEM</option>

                  <option value="ERP (Enterprise Resource Planning)">
                    ERP (Enterprise Resource Planning)
                  </option>

                  <option value="Government/Military">
                    Government/Military
                  </option>

                  <option value="Large Enterprise">Large Enterprise</option>

                  <option value="ManagementISV">ManagementISV</option>

                  <option value="MSP (Management Service Provider)">
                    MSP (Management Service Provider)
                  </option>

                  <option value="Network Equipment Enterprise">
                    Network Equipment Enterprise
                  </option>

                  <option value="Non-management ISV">Non-management ISV</option>

                  <option value="Optical Networking">Optical Networking</option>

                  <option value="Service Provider">Service Provider</option>

                  <option value="Small/Medium Enterprise">
                    Small/Medium Enterprise
                  </option>

                  <option value="Storage Equipment">Storage Equipment</option>

                  <option value="Storage Service Provider">
                    Storage Service Provider
                  </option>

                  <option value="Systems Integrator">Systems Integrator</option>

                  <option value="Wireless Industry">Wireless Industry</option>

                  <option value="ERP">ERP</option>

                  <option value="Management ISV">Management ISV</option>
                </select>
              </div>

              {/* Description */}
              <div className="discovery-field discovery-field-full">
                <label htmlFor="Description">
                  Tell me about your requirements
                </label>

                <textarea
                  id="Description"
                  name="Description"
                  rows={7}
                  placeholder={`Service Required:
Project Goal:
Current Challenge:
Priority:
Preferred Start:
Additional Details:`}
                />
              </div>
            </div>

            <div className="discovery-form-footer">
              <div className="discovery-privacy">
                <ShieldCheck size={17} />

                <p>
                  Your information is used only to review and respond to your
                  inquiry.
                </p>
              </div>

              <button type="submit" className="button primary discovery-submit">
                Submit Service Request
                <ArrowUpRight size={17} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="discovery-alternative">
        <div className="shell discovery-alternative-inner">
          <div>
            <span className="section-kicker">PREFER TO TALK FIRST?</span>

            <h2>
              Start with a <em>conversation.</em>
            </h2>

            <p>
              If your requirements are easier to discuss directly, book a
              consultation instead.
            </p>
          </div>

          <div className="discovery-alt-actions">
            <a
              className="button primary"
              href="https://calendly.com/isaacihoon/new-meeting"
              target="_blank"
              rel="noreferrer"
            >
              Book a Consultation
              <ArrowUpRight size={17} />
            </a>

            <a className="button ghost" href="mailto:Isaacihoon@gmail.com">
              <Mail size={17} />
              Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="shell footer-bottom">
          <span>
            © {new Date().getFullYear()} Ihoon Isaac. All rights reserved.
          </span>

          <span>Digital Ghost · Ghost Tech ecosystem</span>
        </div>
      </footer>
    </main>
  );
}
