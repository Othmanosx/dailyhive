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
            <Link
              href="/"
              className="brand w-nav-brand"
              aria-label="home"
              style={{ display: "flex", gap: "1rem", alignItems: "center" }}
            >
              <img src="/logo.svg" alt="" className="header-logo" />
              <h2 style={{ fontSize: "2.1rem", marginBottom: 7 }}>
                Brieflytics
              </h2>
            </Link>
          </div>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <ul role="list" className="header-navigation">
              <li className="nav-item-wrapper">
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item-wrapper">
                <a href="#how" className="nav-link">
                  How Does it work?
                </a>
              </li>
              <li className="nav-item-wrapper">
                <a href="#PMs" className="nav-link">
                  For PMs
                </a>
              </li>

              <li className="nav-item-wrapper">
                <a href="#Devs" className="nav-link">
                  For Devs
                </a>
              </li>
              <li className="nav-item-wrapper last">
                <a href="#contact" className="nav-link">
                  Contact
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
              href="#contact"
              className="button-primary header-button w-button"
            >
              Get Early Access&nbsp;&nbsp;
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
        onClick={() => setShowSideBar(false)}
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
                Home
              </Link>
            </li>
            <li className="nav-item-wrapper">
              <a href="#how" className="nav-link">
                How does it work?
              </a>
            </li>
            <li className="nav-item-wrapper">
              <a href="#PMs" className="nav-link">
                For PMs
              </a>
            </li>
            <li className="nav-item-wrapper last">
              <a href="#Devs" className="nav-link">
                For Devs
              </a>
            </li>
            <li className="nav-item-wrapper last">
              <a href="#contact" className="nav-link">
                Contact
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
