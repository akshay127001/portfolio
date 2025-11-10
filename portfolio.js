import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Shield, Bug, Terminal, Trophy, ExternalLink, FileDown, MapPin, Cpu, Lock, Download, Star, Award, BookOpen, Globe, Rss, Sparkles } from "lucide-react";

// ======== QUICK EDIT GUIDE ========
// 1) Replace the data in the "profile", "highlights", "skills", and "projects" objects below.
// 2) Click the Share button (top right) to get a public link. You can also export and host on GitHub Pages/Netlify.
// 3) Add your PDF resume file URL to profile.resumeUrl.
// 4) Add or remove sections by toggling the show flags inside each data block.
// ==================================

const profile = {
  name: "Akshay C.",
  role: "Cybersecurity Researcher • OSINT • CTF Player",
  location: "Kerala, India",
  email: "akshaychenthamara@gmail.com",
  headline:
    "I break things to make them safer — specializing in web app pentesting, real life investigations, exploit development and more.",
  resumeUrl: "https://pdfhost.io/edit?doc=229dacee-0595-4492-821f-8e25be741f7d", // <- replace with your real resume link
  socials: [
    { label: "GitHub", href: "https://github.com/akshay127001", icon: Github },
    { label: "LinkedIn", href: "linkedin.com/in/akshay-c-a19252210", icon: Linkedin },
    { label: "Email", href: "akshaychenthamara@gmail.com", icon: Mail },
  ],
};

const highlights = [
  
  {
    icon: Bug,
    title: "cyber intelligence",
    desc: "proficient in open source intelligence and investigations",
  },
  {
    icon: Trophy,
    title: "CTF & Labs",
    desc: "Completed Wakanda boot‑to‑root, Kioptrix‑1 root, Blue (MS17‑010), Crack the Hash, Linux PrivEsc, and more.",
  },
  {
    icon: Cpu,
    title: "Threat Intel + ML",
    desc: "Prototyped LSTM ideas for financial threat intel enrichment and detection.",
  },
];

const skills = {
  core: [
    "Web App Pentesting (SQLi, XSS, IDOR)",
    "Network Recon & Exploitation (Nmap, Metasploit)",
    "Privilege Escalation (Linux)",
    "Threat Research & Reporting",
    "Scripting (Python, Bash)",
    "Cloud & Containers (basic)"
  ],
  tools: [
    "Burp Suite",
    "Nmap",
    "Metasploit",
    "Nikto",
    "OpenVAS / Greenbone",
    "Hydra",
    "Wireshark",
    "Gobuster",
    "PhoneInfoga",
    "Maltego",
    "Kali Linux",
    "TryHackMe / Hack The Box"
  ],
  badges: [
    { label: "tryhackme HACKER ", icon: Lock },
    { label: "HASH CRACKER", icon: BookOpen },
    { label: "EXPLOIT DEVELOPER", icon: Terminal },
  ],
};

const projects = [
  {
    title: "Phishing Simulation Framework",
    year: "2025",
    tags: ["Python", "Flask", "Email API", "Analytics"],
    summary:
      "End‑to‑end phishing simulation with click tracking, campaign analytics, and educational follow‑ups.",
    impact:
      "Helped teams identify risky behavior and reduced repeat click‑rates in pilot tests.",
    
  },
  {
    title: "Financial Threat Intel – LSTM Prototype",
    year: "2025",
    tags: ["Python", "NLP", "PyTorch", "Threat Intel"],
    summary:
      "Prototype LSTM for entity extraction + risk scoring from OSINT focused on finance‑sector threats.",
    impact:
      "Improved precision on labeled sample set; roadmap includes weak supervision and deployment.",
   
  },
  {
    title: "Web App Pentest – Hack Yourself First",
    year: "2024",
    tags: ["Pentest", "SQLi", "XSS", "Reporting"],
    summary:
      "Performed SQLi & XSS against lab target; delivered structured report with PoC and mitigations.",
    impact:
      "Sharpened full kill‑chain methodology from recon to post‑exploitation and documentation.",
   
  },
  {
    title: "Infrastructure Recon – 157.245.111.124",
    year: "2024",
    tags: ["Recon", "Nmap", "LDAP", "NFS", "DNS"],
    summary:
      "Mapped surface: FTP, SSH, DNS, RPC, LDAP, NFS; documented enumeration paths and risks.",
    impact:
      "Provided actionable next‑steps for secure hardening and service isolation.",
   
  },
];



const experience = [
  
  },
  {
    org: "Freelance / Labs",
    role: "Security Researcher",
    period: "2023–2025",
    bullets: [
      "Completed multiple CTFs: Wakanda (boot‑to‑root), Kioptrix‑1 (root), Crack the Hash, PrivEsc labs.",
      "Performed web app assessments on training targets; produced reports and mitigation checklists.",
      "Active in VDPs; focus on access control, session management, and input validation issues.",
    ],
  },
];

const education = [
  {
    school: "Masters in cyber security / DIGITAL UNIVERSITY KERALA",
    items: [
      "cryptography, cyber analytics, digital forensics, database security, AI for cyber security, malware analysis and reverse engineering",
    ],
  },
];

const certs = [
  { name: "Certified cyber security analyst", year: "2025" },
];

const colors = {
  brand: "from-indigo-500 via-violet-500 to-fuchsia-500",
  brandText: "text-violet-400",
};

function Section({ id, icon: Icon, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <Icon className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
        </div>
        {subtitle && (
          <p className="text-neutral-400 max-w-3xl mb-6">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-sm">
      {children}
    </span>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 hover:bg-neutral-900/60 transition-colors">
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("about");

  const nav = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "writeups", label: "Write‑ups" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  return (
    <div className="min-h-screen bg-black text-neutral-100 selection:bg-violet-500/30">
      {/* Meta / SEO (used when exported) */}
      <head>
        <title>{profile.name} – Cybersecurity Portfolio</title>
        <meta name="description" content={profile.headline} />
        <meta property="og:title" content={`${profile.name} – Cybersecurity Portfolio`} />
        <meta property="og:description" content={profile.headline} />
        <meta property="og:type" content="website" />
      </head>

      {/* Gradient hero background */}
      <div className={`pointer-events-none fixed inset-0 -z-10 opacity-40 bg-gradient-to-br ${colors.brand} blur-3xl`} />

      {/* Navbar */}
      <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2 font-semibold">
            <Shield className="w-5 h-5" /> {profile.name}
          </button>
          <nav className="hidden sm:flex items-center gap-2">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`px-3 py-2 rounded-xl text-sm border border-transparent hover:border-neutral-800 hover:bg-neutral-900/60 ${
                  active === n.id ? "bg-neutral-900/60 border-neutral-800" : ""
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={profile.resumeUrl} className="px-3 py-2 rounded-xl text-sm border border-neutral-800 hover:bg-neutral-900/60 flex items-center gap-2">
              <FileDown className="w-4 h-4" /> Resume
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header id="home" className="max-w-6xl mx-auto px-4 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl font-bold tracking-tight"
            >
              Hi, I'm {profile.name} <span className={colors.brandText}>— {profile.role}</span>
            </motion.h1>
            <p className="mt-4 text-neutral-300 max-w-xl">{profile.headline}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge><MapPin className="w-4 h-4 mr-1" /> {profile.location}</Badge>
              <Badge><Globe className="w-4 h-4 mr-1" /> Available for Internship</Badge>
              <Badge><Sparkles className="w-4 h-4 mr-1" /> Open to Freelance</Badge>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {profile.socials.map((s) => (
                <a key={s.label} href={s.href} className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 px-3 py-2 hover:bg-neutral-900/60">
                  <s.icon className="w-4 h-4" /> {s.label}
                </a>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:justify-self-end"
          >
            <div className="relative">
              <div className={`absolute -inset-1 rounded-3xl blur-2xl bg-gradient-to-tr ${colors.brand} opacity-30`} />
              <div className="relative rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((h) => (
                    <Card key={h.title}>
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                          <h.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-medium">{h.title}</div>
                          <div className="text-sm text-neutral-400">{h.desc}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About */}
      <Section id="about" icon={Shield} title="About">
        <div className="grid md:grid-cols-3 gap-5">
          <Card>
            <div className="text-neutral-300">
              I'm a hands‑on security enthusiast focused on practical offense/defense. I love turning messy attack surfaces into clear, prioritized findings with proof‑of‑concepts and straight‑to‑the‑point remediation.
            </div>
          </Card>
          <Card>
            <div className="text-neutral-300">
              Recent interests: access control bugs (IDOR), secure session management, SQLi payload design, Linux privilege escalation patterns, and transforming OSINT into actionable threat intel.
            </div>
          </Card>
          <Card>
            <div className="text-neutral-300">
              Outside work, I play CTFs, maintain lab notes, and write concise, reproducible reports. I believe security is a team sport — shipping fixes matters more than just finding bugs.
            </div>
          </Card>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" icon={Cpu} title="Skills" subtitle="A snapshot of what I use most often">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="font-semibold mb-3">Core Competencies</h3>
            <ul className="space-y-2 text-neutral-300 list-disc list-inside">
              {skills.core.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.badges.map((b) => (
                <Badge key={b.label}>
                  <b.icon className="w-4 h-4 mr-1" /> {b.label}
                </Badge>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="font-semibold mb-3">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" icon={Bug} title="Projects & Case Studies" subtitle="Selected work, labs, and prototypes">
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <Card key={p.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <div className="text-neutral-400 text-sm mb-2">{p.year} · {p.tags.join(" · ")}</div>
                </div>
                <div className="flex gap-2">
                  {p.links?.map((l) => (
                    <a key={l.href} href={l.href} className="inline-flex items-center gap-1 text-sm border border-neutral-800 px-2 py-1 rounded-lg hover:bg-neutral-900/60">
                      {l.label} <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
              <p className="text-neutral-300 mt-2">{p.summary}</p>
              {p.impact && (
                <p className="text-neutral-400 text-sm mt-2">Impact: {p.impact}</p>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" icon={Award} title="Experience & Labs">
        <div className="space-y-4">
          {experience.map((e) => (
            <Card key={e.org}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <div className="font-semibold">{e.role} – {e.org}</div>
                  <div className="text-neutral-400 text-sm">{e.period}</div>
                </div>
              </div>
              <ul className="mt-3 list-disc list-inside text-neutral-300 space-y-2">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Writeups */}
      <Section id="writeups" icon={Rss} title="Write‑ups & Notes" subtitle="Short, reproducible, screenshot‑rich posts">
        <div className="grid md:grid-cols-2 gap-5">
          {writeups.map((w) => (
            <Card key={w.title}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="font-medium">{w.title}</div>
                </div>
                <a href={w.href} className="inline-flex items-center gap-1 text-sm border border-neutral-800 px-2 py-1 rounded-lg hover:bg-neutral-900/60">
                  Read <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Education & Certs */}
      <Section id="education" icon={BookOpen} title="Education & Continuous Learning">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="font-semibold mb-2">Tracks</h3>
            <ul className="space-y-2 text-neutral-300 list-disc list-inside">
              {education[0].items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">Certifications</h3>
            <ul className="space-y-2 text-neutral-300 list-disc list-inside">
              {certs.map((c) => (
                <li key={c.name}>{c.name}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" icon={Mail} title="Contact" subtitle="Quickest way to reach me is email.">
        <Card>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="text-neutral-300">
              Ready to collaborate on security assessments, automation, or research.
            </div>
            <div className="flex gap-2">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 px-3 py-2 hover:bg-neutral-900/60">
                <Mail className="w-4 h-4" /> {profile.email}
              </a>
              <a href={profile.resumeUrl} className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 px-3 py-2 hover:bg-neutral-900/60">
                <Download className="w-4 h-4" /> Resume
              </a>
            </div>
          </div>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 text-sm text-neutral-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
          <div className="flex gap-3">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} className="hover:text-neutral-300">{s.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
