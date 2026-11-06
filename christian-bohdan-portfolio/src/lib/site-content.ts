export type Locale = "de" | "en";

export interface TerminalLine {
  cmd: string;
  out: string;
}

export interface SkillGroup {
  icon: string; // lucide icon key
  title: string;
  items: string[];
}

export interface TimelineEntry {
  period: string;
  title: string;
  org: string;
  desc: string;
}

export interface Certificate {
  year: string;
  name: string;
  issuer: string;
  badge: string;
  highlight?: boolean;
}

export interface RoadmapItem {
  step: string;
  name: string;
  org: string;
  desc: string;
  status: string;
}

export interface LabCard {
  tag: string;
  title: string;
  desc: string;
}

export interface Highlight {
  title: string;
  desc: string;
}

export interface SiteContent {
  langSwitchLabel: string;
  nav: {
    about: string;
    skills: string;
    labs: string;
    timeline: string;
    certs: string;
    roadmap: string;
    letter: string;
    contact: string;
  };
  hero: {
    badge: string;
    name: string;
    title: string;
    pitch: string;
    tags: string[];
    ctaLetter: string;
    ctaContact: string;
    terminalTitle: string;
    terminal: TerminalLine[];
    photoAlt: string;
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
    highlights: Highlight[];
  };
  skills: {
    label: string;
    title: string;
    subtitle: string;
    groups: SkillGroup[];
  };
  labs: {
    label: string;
    title: string;
    subtitle: string;
    note: string;
    cards: LabCard[];
  };
  timeline: {
    label: string;
    title: string;
    subtitle: string;
    entries: TimelineEntry[];
  };
  certs: {
    label: string;
    title: string;
    subtitle: string;
    items: Certificate[];
  };
  roadmap: {
    label: string;
    title: string;
    subtitle: string;
    items: RoadmapItem[];
  };
  letter: {
    label: string;
    title: string;
    salutation: string;
    paragraphs: string[];
    closing: string;
    signature: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    linkedinLabel: string;
    phoneLabel: string;
    email: string;
    phone: string;
    linkedinUrl: string;
    linkedinHandle: string;
  };
  footer: {
    rights: string;
    impressumLink: string;
    datenschutzLink: string;
  };
  legalPage: {
    backLabel: string;
    updated: string;
    viewDatenschutz: string;
    viewImpressum: string;
  };
  impressum: {
    title: string;
    langNote?: string;
    blocks: {
      heading: string;
      lines?: string[];
      paragraphs?: string[];
    }[];
  };
  datenschutz: {
    title: string;
    langNote?: string;
    blocks: {
      heading: string;
      lines?: string[];
      paragraphs?: string[];
    }[];
  };
}

export const content: Record<Locale, SiteContent> = {
  de: {
    langSwitchLabel: "EN",
    nav: {
      about: "Über mich",
      skills: "Skills",
      labs: "Labs",
      timeline: "Werdegang",
      certs: "Zertifikate",
      roadmap: "Roadmap",
      letter: "Anschreiben",
      contact: "Kontakt",
    },
    hero: {
      badge: "Offen für neue Herausforderungen",
      name: "Christian Bohdan",
      title: "Junior Penetration Tester",
      pitch:
        "Ich bin Christian Bohdan. Ich baue mir durch praxisnahe Labs auf Hack The Box fundierte Kenntnisse in Reconnaissance, Web-Exploitation und Privilege Escalation auf — und habe im November 2026 CompTIA Security+ bestanden. Mein Ziel: der Einstieg als Junior Penetration Tester.",
      tags: ["Reconnaissance", "Web-Exploitation", "Privilege Escalation", "Reporting"],
      ctaLetter: "Anschreiben lesen",
      ctaContact: "Kontakt aufnehmen",
      terminalTitle: "christian@htb: ~",
      terminal: [
        { cmd: "whoami", out: "christian-bohdan — angehender penetration tester" },
        { cmd: "cat focus.txt", out: "offensive security · web · netzwerk · reporting" },
        { cmd: "ls zertifikate/", out: "comptia-security+  ec-council-soc-essentials" },
        { cmd: "echo $STATUS", out: "bereit für die erste rolle als pentester" },
      ],
      photoAlt: "Porträtfoto von Christian Bohdan",
    },
    about: {
      label: "ueber-mich",
      title: "Denken wie ein Angreifer — dokumentieren wie ein Profi",
      paragraphs: [
        "Mein Weg in die Cybersecurity führt nicht über den klassischen Einstieg direkt aus dem Studium, sondern über mehrere Stationen mit direktem Kundenkontakt — zuletzt im Vertrieb von Cybersecurity-Weiterbildungen bei New Elements GmbH, wo ich Enterprise- und Behördenkunden berate. Diese Nähe zum Thema hat meine Entscheidung bestärkt, selbst den fachlichen Wechsel in die offensive Security zu gehen.",
        "Seit September 2025 trainiere ich praxisnah auf Hack The Box und TryHackMe: Systeme enumerieren, Fuß fassen, Rechte ausweiten, sauber dokumentieren — zunächst mit Schwerpunkt auf der Verteidigerperspektive (Threat Hunting, Log-Analyse, Forensik), heute gezielt aus Angreifersicht. Im November 2026 habe ich CompTIA Security+ bestanden und damit das breite Fundament von Netzwerken über Kryptografie bis Threats & Vulnerabilities zertifiziert.",
        "Aus meinem Grafikdesign-Studium bringe ich etwas mit, das im Pentesting oft unterschätzt wird: die Fähigkeit, komplexe Befunde verständlich, strukturiert und visuell sauber aufzubereiten. Denn ein Pentest ist erst dann wertvoll, wenn der Report gelesen wird — von Technikern wie von Entscheidern.",
      ],
      highlights: [
        {
          title: "CompTIA Security+",
          desc: "November 2026 bestanden — branchenweites Baseline-Zertifikat für IT-Sicherheit.",
        },
        {
          title: "Praxislabs auf Hack The Box",
          desc: "Reconnaissance, Exploitation und Privilege Escalation im sicheren Übungsumfeld.",
        },
        {
          title: "Reports, die gelesen werden",
          desc: "Design-Hintergrund: Befunde klar strukturiert und verständlich aufbereitet.",
        },
      ],
    },
    skills: {
      label: "skills",
      title: "Skills & Tools",
      subtitle: "Offensive Security mit fundiertem Verständnis der Verteidigerseite.",
      groups: [
        {
          icon: "radar",
          title: "Recon & Enumeration",
          items: ["Nmap", "Wireshark", "DNS- / SMB-Enumeration", "Web-Content-Discovery"],
        },
        {
          icon: "crosshair",
          title: "Web-Exploitation",
          items: ["Burp Suite", "SQL-Injection", "Cross-Site Scripting (XSS)", "Follina (CVE-2022-30190)"],
        },
        {
          icon: "zap",
          title: "Exploitation & PrivEsc",
          items: ["Linux- & Windows-Privilege Escalation", "Fehlkonfigurationen ausnutzen", "Chisel C2-Tunneling"],
        },
        {
          icon: "shield",
          title: "Fundament & Reporting",
          items: ["Security+-Wissensgebiete", "Sysmon / DFIR", "Splunk (SPL)", "Sigma & YARA"],
        },
      ],
    },
    labs: {
      label: "labs",
      title: "Hack The Box — Praxislabs",
      subtitle: "Ausgewählte Schwerpunkte meines Lab-Trainings — vom ersten Scan bis zur Root-Shell.",
      note: "Konkrete Maschinen, Rang und gelöste Challenges ergänze ich laufend — frag mich gern im Gespräch danach.",
      cards: [
        {
          tag: "Enumeration",
          title: "Linux-Zielsysteme",
          desc: "Vollständige Enumeration offener Dienste, Foothold über Fehlkonfigurationen und Ausweitung der Rechte bis zur Root-Shell — strukturiert statt nach Zufall.",
        },
        {
          tag: "Windows",
          title: "Windows-Zielsysteme",
          desc: "SMB- und WinRM-Enumeration, Missbrauch von Fehlkonfigurationen und lokale Privilege Escalation auf Windows-Systemen.",
        },
        {
          tag: "Web",
          title: "Web-Anwendungen",
          desc: "SQL-Injection, XSS und File-Inclusion: Schwachstellen im Web-Layer finden, ausnutzen und nachvollziehbar dokumentieren.",
        },
        {
          tag: "Reporting",
          title: "Dokumentation & Writeups",
          desc: "Jeder Run wird festgehalten: Weg zur Shell, Befunde, Auswirkung und Remediation — das Training für echte Pentest-Reports.",
        },
      ],
    },
    timeline: {
      label: "werdegang",
      title: "Berufserfahrung & Ausbildung",
      subtitle: "Vom Kundenkontakt in die Offensive Security — ein bewusster Wechsel.",
      entries: [
        {
          period: "Sept. 2025 – heute",
          title: "Praxisorientiertes Selbststudium: Offensive Security",
          org: "Hack The Box & TryHackMe",
          desc: "Recon, Web-Exploitation, Privilege Escalation und Reporting in praxisnahen Labs — zuvor mit Schwerpunkt Threat Detection, Log-Analyse und Forensik.",
        },
        {
          period: "2026 – heute",
          title: "Vertrieb von Cybersecurity-Weiterbildungen",
          org: "New Elements GmbH · parallel",
          desc: "Beratung von Enterprise- und Behördenkunden zu Weiterbildungsmaßnahmen im Bereich Cybersecurity.",
        },
        {
          period: "Studium",
          title: "Bachelor Grafikdesign",
          org: "Studienabschluss",
          desc: "Visuelle Kommunikation und klare Strukturen — heute mein Vorteil bei der Aufbereitung von Pentest-Reports.",
        },
      ],
    },
    certs: {
      label: "zertifikate",
      title: "Zertifikate & Ausbildung",
      subtitle: "Fundament aus Prüfung und Praxis.",
      items: [
        {
          year: "November 2026",
          name: "CompTIA Security+ (SY0-701)",
          issuer: "Bestanden — globales Baseline-Zertifikat für IT-Sicherheit.",
          badge: "Bestanden",
          highlight: true,
        },
        {
          year: "2026",
          name: "EC-Council SOC Essentials (S|CE)",
          issuer: "95 % erreicht.",
          badge: "Abgeschlossen",
        },
      ],
    },
    roadmap: {
      label: "roadmap",
      title: "Wo die Reise hingehen soll",
      subtitle: "Mein Zertifizierungsplan für die nächsten Jahre — praktisch, realistisch, offen für Gespräche.",
      items: [
        {
          step: "01",
          name: "eJPT — Junior Penetration Tester",
          org: "INE Security",
          desc: "Erstes praktisches Pentest-Zertifikat: Netzwerk- und Web-Pentesting im Exam-Lab.",
          status: "Als nächstes geplant",
        },
        {
          step: "02",
          name: "PNPT — Practical Network Penetration Tester",
          org: "TCM Security",
          desc: "Realistischer mehrtägiger Pentest inklusive Active Directory und schriftlichem Report.",
          status: "Mittelfristig",
        },
        {
          step: "03",
          name: "OSCP — Offensive Security Certified Professional",
          org: "OffSec",
          desc: "Der anerkannte Industriestandard für Penetration Tester.",
          status: "Langfristiges Ziel",
        },
      ],
    },
    letter: {
      label: "anschreiben",
      title: "Anschreiben",
      salutation: "Sehr geehrte Damen und Herren,",
      paragraphs: [
        "mit dieser Seite möchte ich mich Ihnen als angehender Junior Penetration Tester vorstellen und meine Motivation für den Einstieg in Ihr Security-Team teilen.",
        "Mein Weg dorthin führt nicht über eine klassische Karriereleiter, sondern über gezieltes, intensives Selbststudium seit September 2025: praktische Labs auf Hack The Box zu Reconnaissance, Web-Exploitation und Privilege Escalation — immer mit dem Blick darauf, wie ein Angriff abläuft und wie man ihn sauber dokumentiert. Im November 2026 habe ich CompTIA Security+ bestanden, zuvor EC-Council SOC Essentials mit 95 % abgeschlossen. Die Verteidigerperspektive (SIEM, Detection, Forensik) ist mir dadurch ebenso vertraut wie die Angreiferseite — ich verstehe damit beide Seiten eines Befunds.",
        "Im Vertrieb von Cybersecurity-Weiterbildungen bei meinem aktuellen Arbeitgeber bin ich täglich mit den Anforderungen der Branche in Kontakt: Ich kommuniziere komplexe Themen verständlich, behalte auch unter Zeitdruck den Überblick und arbeite mich schnell in neue Sachverhalte ein. Durch mein Grafikdesign-Studium weiß ich außerdem, wie man Berichte so aufbereitet, dass sie gelesen werden — von Technikern ebenso wie von Entscheidern.",
        "Über die Möglichkeit, mein Profil und meine Motivation in einem persönlichen Gespräch vorzustellen, würde ich mich sehr freuen.",
      ],
      closing: "Mit freundlichen Grüßen,",
      signature: "Christian Bohdan",
    },
    contact: {
      label: "kontakt",
      title: "Lassen Sie uns sprechen",
      subtitle:
        "Ich freue mich auf Ihre Nachricht — ob für eine Position als Junior Penetration Tester oder für einen Austausch über Labs und Zertifizierungen.",
      emailLabel: "E-Mail",
      linkedinLabel: "LinkedIn",
      phoneLabel: "Telefon",
      email: "chris.bohdan.de@gmail.com",
      phone: "+49 157 703 907 46",
      linkedinUrl: "https://www.linkedin.com/in/chrisbohdan",
      linkedinHandle: "linkedin.com/in/chrisbohdan",
    },
    footer: {
      rights: "© 2026 Christian Bohdan · Junior Penetration Tester",
      impressumLink: "Impressum",
      datenschutzLink: "Datenschutz",
    },
    legalPage: {
      backLabel: "Zurück zur Startseite",
      updated: "Stand: November 2026",
      viewDatenschutz: "Datenschutzerklärung ansehen →",
      viewImpressum: "Impressum ansehen →",
    },
    impressum: {
      title: "Impressum",
      blocks: [
        {
          heading: "Angaben gemäß § 5 DDG",
          lines: ["Christian Bohdan", "Norikerstraße 27", "90402 Nürnberg", "Deutschland"],
        },
        {
          heading: "Kontakt",
          lines: ["Telefon: +49 157 703 907 46", "E-Mail: chris.bohdan.de@gmail.com"],
        },
        {
          heading: "Verantwortlich für den Inhalt",
          lines: ["Christian Bohdan, Adresse wie oben."],
        },
        {
          heading: "Haftung für Inhalte und Links",
          paragraphs: [
            "Die Inhalte dieser Seite wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.",
            "Diese Seite enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich. Alle Inhalte dieser Seite unterliegen dem deutschen Urheberrecht. Genannte Marken und Firmennamen sind Eigentum der jeweiligen Rechteinhaber.",
          ],
        },
      ],
    },
    datenschutz: {
      title: "Datenschutzerklärung",
      blocks: [
        {
          heading: "Keine Erhebung personenbezogener Daten",
          paragraphs: [
            "Diese Seite ist eine rein private Bewerbungsseite. Es werden keine personenbezogenen Daten erhoben, gespeichert oder verarbeitet.",
          ],
          lines: [
            "Keine Cookies, kein Tracking, keine Analyse-Tools.",
            "Gespeichert wird ausschließlich Ihre Sprach- und Design-Einstellung — lokal in Ihrem Browser (localStorage). Diese Einstellung verlässt Ihr Gerät nicht und lässt sich jederzeit über die Browser-Einstellungen löschen.",
            "Keine Kontaktformulare und keine Newsletter-Anmeldung.",
            "Keine Weitergabe von Daten an Dritte.",
            "Keine Profilbildung, kein Retargeting, keine Werbung.",
            "Es werden keine externen Schriftarten, Skripte oder sonstigen Ressourcen von Drittanbietern geladen — die Seite verwendet ausschließlich lokal bereitgestellte Schriften. Es findet somit keine Verbindung zu Servern Dritter statt.",
          ],
        },
        {
          heading: "Wenn Sie mich kontaktieren",
          paragraphs: [
            "Wenn Sie mich per E-Mail oder Telefon kontaktieren, verwende ich Ihre Angaben ausschließlich zur Beantwortung Ihres Anliegens.",
          ],
        },
      ],
    },
  },
  en: {
    langSwitchLabel: "DE",
    nav: {
      about: "About",
      skills: "Skills",
      labs: "Labs",
      timeline: "Career",
      certs: "Certificates",
      roadmap: "Roadmap",
      letter: "Cover Letter",
      contact: "Contact",
    },
    hero: {
      badge: "Open to new challenges",
      name: "Christian Bohdan",
      title: "Junior Penetration Tester",
      pitch:
        "I'm Christian Bohdan. I'm building hands-on skills in reconnaissance, web exploitation and privilege escalation through practical labs on Hack The Box — and passed CompTIA Security+ in November 2026. My goal: landing my first role as a Junior Penetration Tester.",
      tags: ["Reconnaissance", "Web Exploitation", "Privilege Escalation", "Reporting"],
      ctaLetter: "Read cover letter",
      ctaContact: "Get in touch",
      terminalTitle: "christian@htb: ~",
      terminal: [
        { cmd: "whoami", out: "christian-bohdan — aspiring penetration tester" },
        { cmd: "cat focus.txt", out: "offensive security · web · network · reporting" },
        { cmd: "ls certifications/", out: "comptia-security+  ec-council-soc-essentials" },
        { cmd: "echo $STATUS", out: "ready for my first pentester role" },
      ],
      photoAlt: "Portrait photo of Christian Bohdan",
    },
    about: {
      label: "about",
      title: "Think like an attacker — write like a professional",
      paragraphs: [
        "My path into cybersecurity doesn't follow the classic straight-from-university route, but runs through several roles with direct customer contact — most recently selling cybersecurity training at New Elements GmbH, where I advise enterprise and public-sector clients. This closeness to the subject convinced me to make the professional switch into offensive security myself.",
        "Since September 2025 I have been training hands-on on Hack The Box and TryHackMe: enumerating systems, gaining a foothold, escalating privileges and documenting everything cleanly — initially with a focus on the defender's perspective (threat hunting, log analysis, forensics), now deliberately from the attacker's point of view. In November 2026 I passed CompTIA Security+, certifying a broad foundation spanning networking, cryptography and threats & vulnerabilities.",
        "From my graphic design degree I bring something often underestimated in pentesting: the ability to present complex findings in a clear, structured and visually clean way. Because a pentest only becomes valuable once the report gets read — by engineers and decision-makers alike.",
      ],
      highlights: [
        {
          title: "CompTIA Security+",
          desc: "Passed November 2026 — the industry-wide baseline certificate for IT security.",
        },
        {
          title: "Hands-on labs on Hack The Box",
          desc: "Reconnaissance, exploitation and privilege escalation in a safe training environment.",
        },
        {
          title: "Reports people actually read",
          desc: "Design background: findings presented clearly, structured and understandable.",
        },
      ],
    },
    skills: {
      label: "skills",
      title: "Skills & Tools",
      subtitle: "Offensive security with a solid understanding of the defender's side.",
      groups: [
        {
          icon: "radar",
          title: "Recon & Enumeration",
          items: ["Nmap", "Wireshark", "DNS / SMB enumeration", "Web content discovery"],
        },
        {
          icon: "crosshair",
          title: "Web Exploitation",
          items: ["Burp Suite", "SQL injection", "Cross-Site Scripting (XSS)", "Follina (CVE-2022-30190)"],
        },
        {
          icon: "zap",
          title: "Exploitation & PrivEsc",
          items: ["Linux & Windows privilege escalation", "Abusing misconfigurations", "Chisel C2 tunneling"],
        },
        {
          icon: "shield",
          title: "Foundation & Reporting",
          items: ["Security+ knowledge domains", "Sysmon / DFIR", "Splunk (SPL)", "Sigma & YARA"],
        },
      ],
    },
    labs: {
      label: "labs",
      title: "Hack The Box — Practical Labs",
      subtitle: "Selected focus areas of my lab training — from the first scan to the root shell.",
      note: "I keep adding concrete machines, rank and completed challenges — happy to talk about them in an interview.",
      cards: [
        {
          tag: "Enumeration",
          title: "Linux targets",
          desc: "Full enumeration of open services, a foothold through misconfigurations and privilege escalation all the way to the root shell — structured, not by luck.",
        },
        {
          tag: "Windows",
          title: "Windows targets",
          desc: "SMB and WinRM enumeration, abusing misconfigurations and local privilege escalation on Windows systems.",
        },
        {
          tag: "Web",
          title: "Web applications",
          desc: "SQL injection, XSS and file inclusion: finding, exploiting and reproducibly documenting vulnerabilities in the web layer.",
        },
        {
          tag: "Reporting",
          title: "Documentation & write-ups",
          desc: "Every run is recorded: path to shell, findings, impact and remediation — the training for real pentest reports.",
        },
      ],
    },
    timeline: {
      label: "career",
      title: "Experience & Education",
      subtitle: "From customer-facing roles into offensive security — a deliberate switch.",
      entries: [
        {
          period: "Sept. 2025 – present",
          title: "Hands-on self-study: offensive security",
          org: "Hack The Box & TryHackMe",
          desc: "Recon, web exploitation, privilege escalation and reporting in practical labs — previously focused on threat detection, log analysis and forensics.",
        },
        {
          period: "2026 – present",
          title: "Sales of cybersecurity training",
          org: "New Elements GmbH · parallel",
          desc: "Advising enterprise and public-sector clients on cybersecurity training programs.",
        },
        {
          period: "Degree",
          title: "BA in Graphic Design",
          org: "Graduated",
          desc: "Visual communication and clear structure — today my advantage when writing pentest reports.",
        },
      ],
    },
    certs: {
      label: "certificates",
      title: "Certificates & Education",
      subtitle: "A foundation of exams and practice.",
      items: [
        {
          year: "November 2026",
          name: "CompTIA Security+ (SY0-701)",
          issuer: "Passed — the global baseline certificate for IT security.",
          badge: "Passed",
          highlight: true,
        },
        {
          year: "2026",
          name: "EC-Council SOC Essentials (S|CE)",
          issuer: "Scored 95%.",
          badge: "Completed",
        },
      ],
    },
    roadmap: {
      label: "roadmap",
      title: "Where the journey is heading",
      subtitle: "My certification plan for the next few years — practical, realistic and open to discussion.",
      items: [
        {
          step: "01",
          name: "eJPT — Junior Penetration Tester",
          org: "INE Security",
          desc: "First hands-on pentest certificate: network and web pentesting in an exam lab.",
          status: "Planned next",
        },
        {
          step: "02",
          name: "PNPT — Practical Network Penetration Tester",
          org: "TCM Security",
          desc: "A realistic multi-day pentest including Active Directory and a written report.",
          status: "Mid-term",
        },
        {
          step: "03",
          name: "OSCP — Offensive Security Certified Professional",
          org: "OffSec",
          desc: "The recognized industry standard for penetration testers.",
          status: "Long-term goal",
        },
      ],
    },
    letter: {
      label: "cover-letter",
      title: "Cover Letter",
      salutation: "Dear Sir or Madam,",
      paragraphs: [
        "with this page I would like to introduce myself as an aspiring Junior Penetration Tester and share my motivation for joining your security team.",
        "My path here doesn't follow a classic career ladder, but comes from focused, intensive self-study since September 2025: practical labs on Hack The Box covering reconnaissance, web exploitation and privilege escalation — always with an eye on how an attack works and how to document it cleanly. In November 2026 I passed CompTIA Security+, having previously completed EC-Council SOC Essentials with 95%. The defender's perspective (SIEM, detection, forensics) is therefore just as familiar to me as the attacker's side — I understand both sides of a finding.",
        "In my current role selling cybersecurity training, I am in daily contact with the requirements of this industry: I communicate complex topics clearly, keep an overview even under time pressure, and get up to speed quickly. And thanks to my graphic design degree, I know how to prepare reports so that they actually get read — by engineers as well as decision-makers.",
        "I would be delighted to have the opportunity to present my profile and motivation in a personal interview.",
      ],
      closing: "Kind regards,",
      signature: "Christian Bohdan",
    },
    contact: {
      label: "contact",
      title: "Let's talk",
      subtitle:
        "I look forward to your message — whether about a Junior Penetration Tester position or to swap notes on labs and certifications.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      phoneLabel: "Phone",
      email: "chris.bohdan.de@gmail.com",
      phone: "+49 157 703 907 46",
      linkedinUrl: "https://www.linkedin.com/in/chrisbohdan",
      linkedinHandle: "linkedin.com/in/chrisbohdan",
    },
    footer: {
      rights: "© 2026 Christian Bohdan · Junior Penetration Tester",
      impressumLink: "Legal notice",
      datenschutzLink: "Privacy",
    },
    legalPage: {
      backLabel: "Back to homepage",
      updated: "Last updated: November 2026",
      viewDatenschutz: "Read the privacy policy →",
      viewImpressum: "Read the legal notice →",
    },
    impressum: {
      title: "Legal notice",
      langNote:
        "Aus rechtlichen Gründen ist der folgende Hinweis in deutscher Sprache verfasst (Impressum). — For legal reasons, the following notice is in German.",
      blocks: [
        {
          heading: "Angaben gemäß § 5 DDG",
          lines: ["Christian Bohdan", "Norikerstraße 27", "90402 Nürnberg", "Deutschland"],
        },
        {
          heading: "Kontakt",
          lines: ["Telefon: +49 157 703 907 46", "E-Mail: chris.bohdan.de@gmail.com"],
        },
        {
          heading: "Verantwortlich für den Inhalt",
          lines: ["Christian Bohdan, Adresse wie oben."],
        },
        {
          heading: "Haftung für Inhalte und Links",
          paragraphs: [
            "Die Inhalte dieser Seite wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.",
            "Diese Seite enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich. Alle Inhalte dieser Seite unterliegen dem deutschen Urheberrecht. Genannte Marken und Firmennamen sind Eigentum der jeweiligen Rechteinhaber.",
          ],
        },
      ],
    },
    datenschutz: {
      title: "Privacy policy",
      langNote:
        "Aus rechtlichen Gründen ist der folgende Hinweis in deutscher Sprache verfasst (Datenschutzerklärung). — For legal reasons, the following notice is in German.",
      blocks: [
        {
          heading: "Keine Erhebung personenbezogener Daten",
          paragraphs: [
            "Diese Seite ist eine rein private Bewerbungsseite. Es werden keine personenbezogenen Daten erhoben, gespeichert oder verarbeitet.",
          ],
          lines: [
            "Keine Cookies, kein Tracking, keine Analyse-Tools.",
            "Gespeichert wird ausschließlich Ihre Sprach- und Design-Einstellung — lokal in Ihrem Browser (localStorage). Diese Einstellung verlässt Ihr Gerät nicht und lässt sich jederzeit über die Browser-Einstellungen löschen.",
            "Keine Kontaktformulare und keine Newsletter-Anmeldung.",
            "Keine Weitergabe von Daten an Dritte.",
            "Keine Profilbildung, kein Retargeting, keine Werbung.",
            "Es werden keine externen Schriftarten, Skripte oder sonstigen Ressourcen von Drittanbietern geladen — die Seite verwendet ausschließlich lokal bereitgestellte Schriften. Es findet somit keine Verbindung zu Servern Dritter statt.",
          ],
        },
        {
          heading: "Wenn Sie mich kontaktieren",
          paragraphs: [
            "Wenn Sie mich per E-Mail oder Telefon kontaktieren, verwende ich Ihre Angaben ausschließlich zur Beantwortung Ihres Anliegens.",
          ],
        },
      ],
    },
  },
};
