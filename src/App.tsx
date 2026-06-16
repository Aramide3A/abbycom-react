import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Landmark,
  Mail,
  MapPin,
  Network,
  PanelsTopLeft,
  PhoneCall,
  ShieldCheck,
  Target,
  UsersRound,
} from 'lucide-react';

const services = [
  {
    title: 'Program & Project Management',
    text: 'Plan, govern, and deliver complex initiatives with clear controls and measurable progress.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Agile Delivery & Transformation',
    text: 'Scale agile ways of working that stick across teams, stakeholders, and operating models.',
    icon: PanelsTopLeft,
  },
  {
    title: 'PMO Setup & Governance',
    text: 'Stand up structure, reporting, risk routines, and decision forums that improve delivery confidence.',
    icon: ShieldCheck,
  },
  {
    title: 'IT Strategy & Consulting',
    text: 'Align technology choices with business priorities, operating realities, and long-term value.',
    icon: Target,
  },
  {
    title: 'IT Training & Capability',
    text: 'Build practical skills that translate into stronger performance and better outcomes.',
    icon: GraduationCap,
  },
  {
    title: 'Business Process Improvement',
    text: 'Streamline operations, reduce friction, and turn improvement work into visible business gains.',
    icon: Network,
  },
];

const values = [
  'Experienced leadership',
  'Proven delivery methodologies',
  'Client-focused solutions',
  'Strong governance & risk management',
  'Practical training aligned to outcomes',
];

const leaders = [
  {
    initials: 'FS',
    name: 'Femi Salami',
    role: 'Director',
    bio: 'Over 15 years of experience in Project Management, Program Delivery, Agile Transformation, and IT Consulting.',
  },
  {
    initials: 'AS',
    name: 'Aisha Salami',
    role: 'Director',
    bio: 'Over 15 years of experience in Project Management, Business Consulting, Stakeholder Management, and Technology Enablement.',
  },
  {
    initials: 'TB',
    name: 'Tunde Bello',
    role: 'Technical Partner',
    bio: 'Technical leadership across solution architecture, systems integration, and engineering delivery in complex IT environments.',
  },
];

const industries = [
  'Financial Services',
  'Technology',
  'Public Sector',
  'Telecommunications',
  'Professional Services',
  'Small & Medium Enterprises',
];

function App() {
  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Abbycom Inc. home">
          <img src="/assets/abbycom-logo.jpeg" alt="Abbycom Inc. logo" />
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#value">Value</a>
          <a href="#people">People</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">
          <Mail size={18} aria-hidden="true" />
          <span>Get in touch</span>
        </a>
      </header>

      <section className="hero" id="top" aria-label="Abbycom Inc. brand"></section>

      <section className="intro band">
        <div>
          <p className="section-kicker">Who we are</p>
          <h2>Practical delivery leadership for teams with important work to land.</h2>
          <div className="intro-copy">
            <div className="intro-copy-text">
              {/* <p className="eyebrow">Ontario, Canada</p> */}
              <p className="hero-copy">
                A Canadian consulting firm helping organizations deliver strategic initiatives, improve operational
                efficiency, and build high-performing teams.
              </p>
            </div>
            <div className="hero-actions">
              <a className="primary-link" href="#services">
                Explore services
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
              <a className="secondary-link" href="mailto:Femi.Salami@abbycominc.ca">
                Talk to a director
              </a>
            </div>
          </div>
        </div>
        <div className="intro-grid" aria-label="Abbycom operating model">
          <article>
            <span>01</span>
            <h3>Manage</h3>
            <p>Delivery of strategic programs end to end.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Train</h3>
            <p>Capability building aligned to outcomes.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Consult</h3>
            <p>Practical, client-focused IT advisory.</p>
          </article>
        </div>
      </section>

      <section className="services section-shell" id="services">
        <div className="section-heading">
          <p className="section-kicker">What we do</p>
          <h2>Services built for clarity, governance, and measurable progress.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <div className="icon-box">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="value band" id="value">
        <div className="quote-panel">
          <p className="section-kicker">The bottom line</p>
          <blockquote>
            We combine strategic thinking, practical delivery experience, and tailored training solutions to help
            organizations achieve measurable business results.
          </blockquote>
        </div>
        <div className="value-list">
          <p className="section-kicker">Why it works</p>
          {values.map((value) => (
            <div className="value-row" key={value}>
              <CheckCircle2 size={22} aria-hidden="true" />
              <span>{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="people section-shell" id="people">
        <div className="section-heading">
          <p className="section-kicker">Our people</p>
          <h2>Senior practitioners with the judgment to lead delivery and the patience to build capability.</h2>
        </div>
        <div className="leader-grid">
          {leaders.map((leader) => (
            <article className="leader-card" key={leader.name}>
              <div className="avatar">{leader.initials}</div>
              <div>
                <p className="role">{leader.role}</p>
                <h3>{leader.name}</h3>
                <p>{leader.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="industries band">
        <div className="section-heading">
          <p className="section-kicker">Where we work</p>
          <h2>Industries served</h2>
        </div>
        <div className="industry-grid">
          {industries.map((industry) => (
            <span key={industry}>
              <Landmark size={19} aria-hidden="true" />
              {industry}
            </span>
          ))}
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-copy">
          <p className="section-kicker">Get in touch</p>
          <h2>Let’s deliver your next initiative together.</h2>
          <p>
            Abbycom Inc. supports organizations across program management, IT training, and IT consulting from Ontario,
            Canada.
          </p>
        </div>
        <div className="contact-panel">
          <a href="mailto:Info@abbycominc.ca">
            <Mail size={22} aria-hidden="true" />
            <span>
              <strong>General enquiries</strong>
              Info@abbycominc.ca
            </span>
          </a>
          <a href="mailto:Femi.Salami@abbycominc.ca">
            <UsersRound size={22} aria-hidden="true" />
            <span>
              <strong>Femi Salami — Director</strong>
              Femi.Salami@abbycominc.ca
            </span>
          </a>
          <a href="https://www.abbycominc.ca" target="_blank" rel="noreferrer">
            <PhoneCall size={22} aria-hidden="true" />
            <span>
              <strong>Website</strong>
              www.abbycominc.ca
            </span>
          </a>
          <div>
            <MapPin size={22} aria-hidden="true" />
            <span>
              <strong>Location</strong>
              Ontario, Canada
            </span>
          </div>
        </div>
      </section>

      <footer>
        <img src="/assets/abbycom-logo.jpeg" alt="Abbycom Inc." />
        <p>Ontario, Canada · Program Management | IT Training | IT Consulting</p>
      </footer>
    </main>
  );
}

export default App;
