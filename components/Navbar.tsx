import Link from "next/link"
import { useState } from "react"

type Props = {}
const Navbar = (props: Props) => {
  const [showSideBar, setShowSideBar] = useState(false)
  return (
    <div
      data-collapse="medium"
      data-animation="over-right"
      data-duration={400}
      data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="header w-nav"
      style={{ opacity: 1 }}
    >
      <div className="container-default w-container">
        <div className="header-wrapper">
          <div className="split-content header-right">
            <Link href="/" className="brand w-nav-brand" aria-label="home">
              <img
                src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b0d0ffd41b07_logo-agency-x-template.svg"
                alt=""
                className="header-logo"
              />
            </Link>
          </div>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <ul role="list" className="header-navigation">
              <li className="nav-item-wrapper">
                <Link href="/" className="nav-link">
                  Startseite
                </Link>
              </li>
              <li className="nav-item-wrapper">
                <a href="/about" className="nav-link">
                  Über
                </a>
              </li>
              <li className="nav-item-wrapper">
                <a href="/services/services-v1" className="nav-link">
                  Dienstleistungen
                </a>
              </li>
              <li className="nav-item-wrapper">
                <div
                  data-hover="false"
                  data-delay={0}
                  data-w-id="70537138-277d-9362-4106-6c2a30115c41"
                  className="nav-link-dropdown w-dropdown"
                  style={{ maxWidth: "1290px" }}
                >
                  <div
                    className="nav-link dropdown w-dropdown-toggle"
                    id="w-dropdown-toggle-0"
                    aria-controls="w-dropdown-list-0"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    role="button"
                    tabIndex={0}
                  >
                    <div>
                      Seiten&nbsp;&nbsp;
                      <span
                        className="dropdown-arrow"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        
                      </span>
                    </div>
                  </div>
                  <nav
                    className="dropdown-list w-dropdown-list"
                    style={{
                      display: "none",
                      opacity: 0,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                      height: "0px",
                    }}
                    id="w-dropdown-list-0"
                    aria-labelledby="w-dropdown-toggle-0"
                  >
                    <div className="dropdown-nav-main-wrapper">
                      <div className="dropdown-nav-pages-wrapper">
                        <h2 className="title dropdown-nav-title">Menu</h2>
                        <div className="dropdown-nav-content">
                          <ul role="list" className="dropdown-nav">
                            <li className="dropdown-nav-item">
                              <a
                                href="/homes/home-v1"
                                aria-current="page"
                                className="dropdown-nav-link w--current"
                                tabIndex={0}
                              >
                                Startseite V1
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="/homes/home-v2"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Startseite V2
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="/homes/home-v3"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Startseite V3
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="/about"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Über
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="/team"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Team
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="https://agencyxtemplate-de.webflow.io/team/john-carter"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Team Einzel
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="/contact"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Kontakt
                              </a>
                            </li>
                          </ul>
                          <ul role="list" className="dropdown-nav">
                            <li className="dropdown-nav-item">
                              <a
                                href="/blogs/blog-v1"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Blog V1
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="/blogs/blog-v2"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Blog V2
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="/blogs/blog-v3"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Blog V3
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="https://agencyxtemplate-de.webflow.io/blog/5-seo-faktoren-die-sie-berucksichtigen-sollten-um-ihre-website-besser-zu-platzieren"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Blog-Beitrag
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="/careers"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Stellenangebote
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="https://agencyxtemplate-de.webflow.io/case-study/wie-wir-die-zustellbarkeit-von-youtube-e-mails-um-28-verbessert-haben"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Einzelner Job
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="/services/services-v1"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Dienstleistungen V1
                              </a>
                            </li>
                          </ul>
                          <ul role="list" className="dropdown-nav last">
                            <li className="dropdown-nav-item">
                              <a
                                href="/services/services-v2"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Dienstleistungen V2
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="/services/services-v3"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Dienstleistungen V3
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="/service"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Einzelne Dienstleistung
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="/packages"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Pakete
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="https://agencyxtemplate-de.webflow.io/product/pramie"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Einzelnes Paket
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="/case-studies"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Fallstudien
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="https://agencyxtemplate-de.webflow.io/case-study/how-we-increased-sign-up-rate-by-56-on-creators-program"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Fallstudie
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="dropdown-nav-pages-wrapper">
                        <h2 className="title dropdown-nav-title">
                          Landing Pages
                        </h2>
                        <div className="dropdown-nav-content">
                          <ul role="list" className="dropdown-nav last">
                            <li className="dropdown-nav-item">
                              <a
                                href="/landing-pages/free-consultation-landing-page"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Landing Page für kostenlose Beratungen
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="/landing-pages/newsletter-subscribe-landing-page"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Newsletter-Landingpage
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="/landing-pages/form-landing-page"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Landingpage bilden
                              </a>
                            </li>
                            <li className="dropdown-nav-item">
                              <a
                                href="/landing-pages/video-landing-page"
                                className="dropdown-nav-link"
                                tabIndex={0}
                              >
                                Video-Landingpage
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </li>
              <li className="nav-item-wrapper last">
                <a href="/case-studies" className="nav-link">
                  Fallstudien
                </a>
              </li>
              <li className="nav-item-wrapper mobile">
                <a
                  href="#"
                  className="button-primary header-button-mobile w-button"
                >
                  Get in Touch&nbsp;&nbsp;
                  <span className="button-primary-arrow"></span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="split-content header-left">
            <a
              href="/contact"
              className="button-primary header-button w-button"
            >
              Kontakt aufnehmen&nbsp;&nbsp;
              <span className="button-primary-arrow"></span>
            </a>
            <div
              className="menu-button w-nav-button"
              style={{ WebkitUserSelect: "text" }}
              aria-label="menu"
              role="button"
              tabIndex={0}
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <div
                className="header-menu-button-icon-wrapper"
                onClick={() => setShowSideBar(!showSideBar)}
              >
                <div className="icon-wrapper">
                  <div className="header-menu-button-icon-top" />
                  <div className="header-menu-button-icon-medium" />
                  <div className="header-menu-button-icon-bottom" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-nav-overlay"
        data-wf-ignore
        id="w-nav-overlay-0"
        style={
          showSideBar
            ? { height: "100vh", display: "block", width: "100vw" }
            : {}
        }
      >
        <nav
          role="navigation"
          className="nav-menu w-nav-menu"
          style={{
            transform: "translateX(0px) translateY(0px)",
            opacity: 1,
            height: "13935.7px",
            transition: "transform 400ms ease 0s",
          }}
          data-nav-menu-open
        >
          <ul role="list" className="header-navigation">
            <li className="nav-item-wrapper">
              <Link href="/" className="nav-link">
                Startseite
              </Link>
            </li>
            <li className="nav-item-wrapper">
              <a href="/about" className="nav-link">
                Über
              </a>
            </li>
            <li className="nav-item-wrapper">
              <a href="/services/services-v1" className="nav-link">
                Dienstleistungen
              </a>
            </li>
            <li className="nav-item-wrapper">
              <div
                data-hover="false"
                data-delay={0}
                data-w-id="70537138-277d-9362-4106-6c2a30115c41"
                className="nav-link-dropdown w-dropdown w--nav-dropdown-open"
                style={{ maxWidth: "1290px" }}
              >
                <div
                  className="nav-link dropdown w-dropdown-toggle w--nav-dropdown-toggle-open"
                  id="w-dropdown-toggle-0"
                  aria-controls="w-dropdown-list-0"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  role="button"
                  tabIndex={0}
                >
                  <div>
                    Seiten&nbsp;&nbsp;
                    <span
                      className="dropdown-arrow"
                      style={{
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      
                    </span>
                  </div>
                </div>
                <nav
                  className="dropdown-list w-dropdown-list w--nav-dropdown-list-open"
                  style={{ display: "none", opacity: 0 }}
                  id="w-dropdown-list-0"
                  aria-labelledby="w-dropdown-toggle-0"
                >
                  <div className="dropdown-nav-main-wrapper">
                    <div className="dropdown-nav-pages-wrapper">
                      <h2 className="title dropdown-nav-title">Menu</h2>
                      <div className="dropdown-nav-content">
                        <ul role="list" className="dropdown-nav">
                          <li className="dropdown-nav-item">
                            <a
                              href="/homes/home-v1"
                              aria-current="page"
                              className="dropdown-nav-link w--current"
                              tabIndex={0}
                            >
                              Startseite V1
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="/homes/home-v2"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Startseite V2
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="/homes/home-v3"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Startseite V3
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="/about"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Über
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="/team"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Team
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="https://agencyxtemplate-de.webflow.io/team/john-carter"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Team Einzel
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="/contact"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Kontakt
                            </a>
                          </li>
                        </ul>
                        <ul role="list" className="dropdown-nav">
                          <li className="dropdown-nav-item">
                            <a
                              href="/blogs/blog-v1"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Blog V1
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="/blogs/blog-v2"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Blog V2
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="/blogs/blog-v3"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Blog V3
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="https://agencyxtemplate-de.webflow.io/blog/5-seo-faktoren-die-sie-berucksichtigen-sollten-um-ihre-website-besser-zu-platzieren"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Blog-Beitrag
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="/careers"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Stellenangebote
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="https://agencyxtemplate-de.webflow.io/case-study/wie-wir-die-zustellbarkeit-von-youtube-e-mails-um-28-verbessert-haben"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Einzelner Job
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="/services/services-v1"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Dienstleistungen V1
                            </a>
                          </li>
                        </ul>
                        <ul role="list" className="dropdown-nav last">
                          <li className="dropdown-nav-item">
                            <a
                              href="/services/services-v2"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Dienstleistungen V2
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="/services/services-v3"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Dienstleistungen V3
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="/service"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Einzelne Dienstleistung
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="/packages"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Pakete
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="https://agencyxtemplate-de.webflow.io/product/pramie"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Einzelnes Paket
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="/case-studies"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Fallstudien
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="https://agencyxtemplate-de.webflow.io/case-study/how-we-increased-sign-up-rate-by-56-on-creators-program"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Fallstudie
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="dropdown-nav-pages-wrapper">
                      <h2 className="title dropdown-nav-title">
                        Landing Pages
                      </h2>
                      <div className="dropdown-nav-content">
                        <ul role="list" className="dropdown-nav last">
                          <li className="dropdown-nav-item">
                            <a
                              href="/landing-pages/free-consultation-landing-page"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Landing Page für kostenlose Beratungen
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="/landing-pages/newsletter-subscribe-landing-page"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Newsletter-Landingpage
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="/landing-pages/form-landing-page"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Landingpage bilden
                            </a>
                          </li>
                          <li className="dropdown-nav-item">
                            <a
                              href="/landing-pages/video-landing-page"
                              className="dropdown-nav-link"
                              tabIndex={0}
                            >
                              Video-Landingpage
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </li>
            <li className="nav-item-wrapper last">
              <a href="/case-studies" className="nav-link">
                Fallstudien
              </a>
            </li>
            <li className="nav-item-wrapper mobile">
              <a
                href="#"
                className="button-primary header-button-mobile w-button"
              >
                Get in Touch&nbsp;&nbsp;
                <span className="button-primary-arrow"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
