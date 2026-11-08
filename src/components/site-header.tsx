const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Toolbox" },
  { href: "#content", label: "Content" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Mukesh Kumar, home">
        Mukesh Kumar<span>.</span>
      </a>
      <nav className="site-nav site-nav-desktop" aria-label="Main navigation">
        <NavigationLinks />
      </nav>
      <details className="mobile-navigation">
        <summary
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-controls="mobile-primary-navigation"
        >
          <span />
          <span />
        </summary>
        <nav
          className="site-nav mobile-site-nav"
          id="mobile-primary-navigation"
          aria-label="Main navigation"
        >
          <NavigationLinks />
        </nav>
      </details>
    </header>
  );
}

function NavigationLinks() {
  return (
    <>
      {links.map((link) => (
        <a href={link.href} key={link.href}>
          {link.label}
        </a>
      ))}
      <a
        className="nav-cta"
        href="https://www.linkedin.com/in/mukeshkumr/"
        target="_blank"
        rel="noreferrer"
      >
        Let’s talk <span aria-hidden="true">↗</span>
      </a>
    </>
  );
}
