/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Link from "next/link"
import Chart from "@/components/Chart"

export default function Home() {
  return (
    <div>
      <div>
        <div className="page-wrapper">
          <Navbar />
          <Hero />

          <Chart />
          <div id="PMs" className="section home-advantage wf-section">
            <div className="container-default w-container">
              <div
                data-w-id="6659d30b-35bf-641f-783a-9aac3497bace"
                className="home-advantage-wrapper"
              >
                <div className="home-advantage-images-wrapper">
                  <img
                    src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b049fad419f1_image-1-home-advantage-marketing-template.svg"
                    alt=""
                    className="image home-advantage-1"
                  />
                  <img
                    src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b05847d41afc_image-2-home-advantage-marketing-template.svg"
                    alt=""
                    className="image home-advantage-2"
                  />
                </div>
                <div
                  data-w-id="5d1fc266-442d-a01f-3379-81c672e778e4"
                  className="split-content home-advantage-content"
                >
                  <div className="subtitle-wrapper home-advantage">
                    <div className="subtitle-shape home-advantage" />
                    <div>
                      For Product Managers
                      <br />
                    </div>
                  </div>
                  <h2>
                    Get a Complete Picture.
                    <br />
                  </h2>
                  <p>
                    Effortlessly keep track of your project&apos;s flow and
                    status with our automated daily summaries. Maximize your
                    team&apos;s efficiency by staying informed and up-to-date.
                  </p>
                  <div className="w-layout-grid home-advantage-features-grid">
                    <div className="list-wrapper">
                      <img
                        src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b01d0ad419ca_icon-1-check-marketing-template.svg"
                        alt=""
                        className="image list-icon red-shadow"
                      />
                      <div className="list-text">
                        Save Time & Reduce Meetings to Zero
                        <br />
                      </div>
                    </div>
                    <div className="list-wrapper">
                      <img
                        src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b01d0ad419ca_icon-1-check-marketing-template.svg"
                        alt=""
                        className="image list-icon red-shadow"
                      />
                      <div className="list-text">
                        Stay informed & up-to-date
                        <br />
                      </div>
                    </div>
                    <div className="list-wrapper">
                      <img
                        src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b01d0ad419ca_icon-1-check-marketing-template.svg"
                        alt=""
                        className="image list-icon red-shadow"
                      />
                      <div className="list-text">
                        Gain insights
                        <a href="https://agencyxtemplate-de.webflow.io/contact">
                          <strong>
                            <br />
                          </strong>
                        </a>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="button-primary w-button">
                    Get Early Access&nbsp;&nbsp;
                    <span className="button-primary-arrow"></span>
                  </a>
                </div>
                <img
                  src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b00f78d419f0_bg-home-advantage-marketing-template.jpg"
                  sizes="(max-width: 479px) 90vw, (max-width: 767px) 100vw, 832px"
                  data-w-id="77b2648f-c9e2-89da-bb54-dd9c98117cb3"
                  srcSet="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b00f78d419f0_bg-home-advantage-marketing-template-p-500.jpeg 500w, https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b00f78d419f0_bg-home-advantage-marketing-template-p-800.jpeg 800w, https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b00f78d419f0_bg-home-advantage-marketing-template-p-1080.jpeg 1080w, https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b00f78d419f0_bg-home-advantage-marketing-template-p-1600.jpeg 1600w, https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b00f78d419f0_bg-home-advantage-marketing-template.jpg 1664w"
                  alt=""
                  className="bg home-advantage"
                />
              </div>
            </div>
          </div>

          <div id="Devs" className="section home-about wf-section">
            <div className="container-default w-container">
              <div
                data-w-id="fb5345a8-4c28-f382-7372-5336c2a9fc47"
                className="home-about-wrapper"
              >
                <div
                  data-w-id="c0ce936f-b7fe-4dc6-8099-a3b1968d761b"
                  className="split-content home-about-content"
                >
                  <div className="subtitle-wrapper home-about">
                    <div className="subtitle-shape home-about" />
                    <div>
                      For Developers
                      <br />
                    </div>
                  </div>
                  <h2 className="title home-about">
                    Focus on what you want
                    <br />
                  </h2>
                  <p>
                    DailyHive handles and automates your tedious daily project
                    reports, so you can free up time and stay focused on what
                    you do best.
                  </p>
                  <div className="w-layout-grid home-advantage-features-grid">
                    <div className="list-wrapper">
                      <img
                        src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b01d0ad419ca_icon-1-check-marketing-template.svg"
                        alt=""
                        className="image list-icon red-shadow"
                      />
                      <div className="list-text">
                        Automate daily reporting
                        <br />
                      </div>
                    </div>
                    <div className="list-wrapper">
                      <img
                        src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b01d0ad419ca_icon-1-check-marketing-template.svg"
                        alt=""
                        className="image list-icon red-shadow"
                      />
                      <div className="list-text">
                        Eliminate Context Switching
                        <br />
                      </div>
                    </div>

                    <div className="list-wrapper">
                      <img
                        src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b01d0ad419ca_icon-1-check-marketing-template.svg"
                        alt=""
                        className="image list-icon red-shadow"
                      />
                      <div className="list-text">
                        Promote asynchronous communication
                        <a href="https://agencyxtemplate-de.webflow.io/contact">
                          <strong>
                            <br />
                          </strong>
                        </a>
                      </div>
                    </div>
                  </div>
                  <a href="/about" className="button-primary w-button">
                    Get Early Access&nbsp;&nbsp;
                    <span className="button-primary-arrow"></span>
                  </a>
                </div>
                <div
                  className="home-about-images-wrapper"
                  style={{ zIndex: 1 }}
                >
                  <img
                    src="/developer.svg"
                    alt=""
                    className="image home-about-2"
                  />
                </div>
                <img
                  src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b0f08cd419fa_bg-service-hero-marketing-template.jpg"
                  alt=""
                  className="bg home-about"
                  style={{ zIndex: 0, mixBlendMode: "multiply" }}
                />
              </div>
            </div>
          </div>
          {/* <div className="section home-process wf-section">
            <div
              data-w-id="da04892b-6f9f-b766-517a-8b6522ae759e"
              className="container-medium-664px home-process"
            >
              <div className="subtitle-wrapper center">
                <div className="subtitle-shape hidden" />
                <div>
                  Unser Prozess
                  <br />
                </div>
              </div>
              <h2 className="title home-process">
                Ein einfacher, aber effektiver Prozess in drei Schritten
                <br />
              </h2>
            </div>
            <div className="container-default w-container">
              <div
                data-delay={4000}
                data-animation="slide"
                className="home-process-slider w-slider"
                data-autoplay="false"
                data-easing="ease"
                data-hide-arrows="false"
                data-disable-swipe="false"
                data-w-id="01ab29ed-bbde-31ed-3bfa-6e9a36c61da6"
                data-autoplay-limit={0}
                data-nav-spacing={3}
                data-duration={500}
                data-infinite="true"
              >
                <div className="home-process-slider-mask w-slider-mask">
                  <div className="home-process-slide w-slide">
                    <div className="home-process-wrapper">
                      <div className="image-wrapper home-process">
                        <img
                          src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b05182d41b02_image-1-process-marketing-template.svg"
                          alt=""
                          className="image home-process"
                        />
                      </div>
                      <div className="card home-process">
                        <div className="card-process-step">01</div>
                        <h3>
                          Marketing-Plan
                          <br />
                        </h3>
                        <p>
                          Lorem ipsum consectetur amet sit comeneer ilremsolme
                          dolce issilmolil olme diment solem ipum adolem.
                        </p>
                        <div className="w-layout-grid card-process-features-grid">
                          <div className="list-wrapper">
                            <img
                              src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b03508d419d2_icon-4-check-marketing-template.svg"
                              alt=""
                              className="image list-icon purple-shadow"
                            />
                            <div className="list-text">
                              Brainstorming und Ideenfindung
                              <br />
                            </div>
                          </div>
                          <div className="list-wrapper">
                            <img
                              src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b03508d419d2_icon-4-check-marketing-template.svg"
                              alt=""
                              className="image list-icon purple-shadow"
                            />
                            <div className="list-text">
                              Ausführungsplan
                              <br />
                            </div>
                          </div>
                          <div className="list-wrapper">
                            <img
                              src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b03508d419d2_icon-4-check-marketing-template.svg"
                              alt=""
                              className="image list-icon purple-shadow"
                            />
                            <div className="list-text">
                              Analyse der Wettbewerber
                              <strong>
                                <br />
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-process-slide w-slide">
                    <div className="home-process-wrapper">
                      <div className="image-wrapper home-process">
                        <img
                          src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b0c3b6d41b03_image-2-process-marketing-template.svg"
                          alt=""
                          className="image home-process"
                        />
                      </div>
                      <div className="card home-process">
                        <div className="card-process-step">02</div>
                        <h3>Ausführung</h3>
                        <p>
                          Lorem ipsum consectetur amet sit comeneer ilremsolme
                          dolce issilmolil olme diment solem ipum adolem.
                        </p>
                        <div className="w-layout-grid card-process-features-grid">
                          <div className="list-wrapper">
                            <img
                              src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b01d0ad419ca_icon-1-check-marketing-template.svg"
                              alt=""
                              className="image list-icon red-shadow"
                            />
                            <div className="list-text">
                              Ausführung des Plans
                              <br />
                            </div>
                          </div>
                          <div className="list-wrapper">
                            <img
                              src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b01d0ad419ca_icon-1-check-marketing-template.svg"
                              alt=""
                              className="image list-icon red-shadow"
                            />
                            <div className="list-text">
                              Landing Page A/B-Tests
                              <br />
                            </div>
                          </div>
                          <div className="list-wrapper">
                            <img
                              src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b01d0ad419ca_icon-1-check-marketing-template.svg"
                              alt=""
                              className="image list-icon red-shadow"
                            />
                            <div className="list-text">
                              Analytische Analyse
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-process-slide w-slide">
                    <div className="home-process-wrapper">
                      <div className="image-wrapper home-process">
                        <img
                          src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b08d41d41b04_image-3-process-marketing-template.svg"
                          alt=""
                          className="image home-process"
                        />
                      </div>
                      <div className="card home-process">
                        <div className="card-process-step">03</div>
                        <h3>
                          Wachstum &amp;Skalierung
                          <br />
                        </h3>
                        <p>
                          Lorem ipsum consectetur amet sit comeneer ilremsolme
                          dolce issilmolil olme diment solem ipum adolem.
                        </p>
                        <div className="w-layout-grid card-process-features-grid">
                          <div className="list-wrapper">
                            <img
                              src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b062e2d419d0_icon-3-check-marketing-template.svg"
                              alt=""
                              className="image list-icon yellow-shadow"
                            />
                            <div className="list-text">
                              Einrichtung des Wachstumssystems
                              <br />
                            </div>
                          </div>
                          <div className="list-wrapper">
                            <img
                              src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b062e2d419d0_icon-3-check-marketing-template.svg"
                              alt=""
                              className="image list-icon yellow-shadow"
                            />
                            <div className="list-text">
                              Skalierung von bezahlten Anzeigen
                              <br />
                            </div>
                          </div>
                          <div className="list-wrapper">
                            <img
                              src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b062e2d419d0_icon-3-check-marketing-template.svg"
                              alt=""
                              className="image list-icon yellow-shadow"
                            />
                            <div className="list-text">
                              Neuer Ausführungsplan
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-process-slider-left-arrow w-slider-arrow-left">
                  <div></div>
                </div>
                <div className="home-process-slider-right-arrow w-slider-arrow-right">
                  <div></div>
                </div>
                <div className="slide-nav w-slider-nav w-round" />
              </div>
              <div
                data-w-id="b41d4bd9-e986-bcc5-a2b9-4075b7b48f1b"
                className="flex-vc"
              >
                <a href="/contact" className="button-primary w-button">
                  Kontakt aufnehmen&nbsp;&nbsp;
                  <span className="button-primary-arrow"></span>
                </a>
              </div>
            </div>
          </div> */}

          <div id="contact" className="section home-contact wf-section">
            <div className="container-default w-container">
              <div className="home-contact-wrapper">
                <div
                  data-w-id="59b8951d-2a61-9644-93e8-bdeecdf34fe4"
                  className="split-content home-contact-content"
                >
                  <div className="subtitle-wrapper">
                    <div className="subtitle-shape hidden" />
                    <div>Interested?</div>
                  </div>
                  <h2>Get in touch today!</h2>
                  <p className="paragraph home-contact">
                    Are you tired of spending hours each day trying to keep up
                    with your project's progress and status? Say goodbye to
                    daily meetings and manual tracking with DailyHive.
                  </p>
                  <p className="paragraph home-contact">
                    Don't just take our word for it - hear from satisfied
                    customers like Alex Brown and Alice Cary, who have seen
                    firsthand how DailyHive has made their jobs easier and saved
                    them time.
                  </p>
                  <p className="paragraph home-contact">
                    Join our waiting list now and take the first step towards
                    streamlined project management!
                  </p>
                  <div className="w-layout-grid home-contact-links-grid">
                    <a
                      id="w-node-c5f7cb3b-cb93-4635-15f5-b790977033a4-84d4199b"
                      href="mailto:contact@agency.com"
                      className="contact-link w-inline-block"
                    >
                      <img
                        src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b009a8d41b05_icon-1-contact-marketing-template.svg"
                        alt=""
                        className="image contact-link-icon"
                      />
                      <div className="list-text">contact@agency.com</div>
                    </a>
                    {/* <a
                      id="w-node-_99f0af30-eb6f-323c-bf73-311c0a926a90-84d4199b"
                      href="tel:(487)870-0710"
                      className="contact-link w-inline-block"
                    >
                      <img
                        src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b03667d41b06_icon-2-contact-marketing-template.svg"
                        alt=""
                        className="image contact-link-icon"
                      />
                      <div className="list-text">(487) 870 - 0710</div>
                    </a> */}
                  </div>
                </div>
                <div className="card contact-form">
                  <div className="contact-form-block w-form">
                    <form
                      id="wf-form-Contact-Form"
                      name="wf-form-Contact-Form"
                      data-name="Contact Form"
                      method="get"
                      className="contact-form"
                    >
                      <input
                        type="text"
                        className="input name w-input"
                        maxLength={256}
                        name="name"
                        data-name="Name"
                        placeholder="Name"
                        id="name"
                        required
                      />
                      <input
                        type="email"
                        className="input email w-input"
                        maxLength={256}
                        name="email"
                        data-name="Email"
                        placeholder="E-Mail Address"
                        id="email"
                        required
                      />

                      <textarea
                        placeholder="Let us know you're intrested..."
                        maxLength={5000}
                        rows={10}
                        id="Message"
                        name="Message"
                        data-name="Message"
                        className="text-area w-node-_8fd8aa8e-bf66-910c-af66-63acd8fd0ecb-84d4199b w-input"
                        defaultValue={""}
                      />
                      <button
                        id="w-node-_0b1a965e-46c0-bc92-530e-9ca3002915cc-84d4199b"
                        className="button-primary contact-form-button"
                      >
                        Submit
                        <div className="link-arrow"></div>
                      </button>
                    </form>
                    <div className="success-message w-form-done">
                      <div>
                        Ihre Nachricht wurde abgeschickt.
                        <br />
                        Wir werden uns innerhalb von 24-48 Stunden bei Ihnen
                        melden.
                      </div>
                    </div>
                    <div className="error-message w-form-fail">
                      <div>Huch! Etwas ist schief gelaufen.</div>
                    </div>
                  </div>
                </div>
                <img
                  src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b02a87d419ed_bg-contact-marketing-template.jpg"
                  sizes="(max-width: 991px) 100vw, 1136px"
                  data-w-id="6e6dbd07-e6c6-3d23-1348-1aeeae276835"
                  srcSet="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b02a87d419ed_bg-contact-marketing-template-p-500.jpeg 500w, https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b02a87d419ed_bg-contact-marketing-template-p-800.jpeg 800w, https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b02a87d419ed_bg-contact-marketing-template-p-1080.jpeg 1080w, https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b02a87d419ed_bg-contact-marketing-template-p-1600.jpeg 1600w, https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b02a87d419ed_bg-contact-marketing-template-p-2000.jpeg 2000w, https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b02a87d419ed_bg-contact-marketing-template.jpg 2273w"
                  alt=""
                  className="bg home-v1-contact"
                />
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="container-default" />
            <div className="container-default w-container">
              <div
                data-w-id="f65bf76f-7f66-e723-c98a-7d4df6f223c3"
                className="content-top footer-content-top"
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Link
                    href="/"
                    className="brand w-nav-brand"
                    aria-label="home"
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <img src="/logo.svg" alt="" className="header-logo" />
                    <h2 style={{ fontSize: "2.1rem", marginBottom: 7 }}>
                      DailyHive
                    </h2>
                  </Link>
                  <p className="paragraph footer-main-paragraph">
                    Join the waiting list for AI Summarizer today and be the
                    first to experience the benefits of automated project
                    management.
                  </p>
                </div>

                <div className="split-content footer-content-top-right">
                  <h2 className="title h3-size footer-newsletter">
                    Join our NewsLetter
                    <br />
                  </h2>
                  <div className="footer-newsletter-form-block w-form">
                    <form
                      id="wf-form-Footer-Newsletter-Form"
                      name="wf-form-Footer-Newsletter-Form"
                      data-name="Footer Newsletter Form"
                      method="get"
                      className="footer-newsletter-form"
                    >
                      <input
                        type="email"
                        className="input footer-newsletter w-input"
                        maxLength={256}
                        name="Email"
                        data-name="Email"
                        placeholder="E-Mail Address"
                        id="Email"
                        required
                      />
                      <button
                        type="submit"
                        className="button-primary footer-newsletter"
                      >
                        Submit<div className="link-arrow"></div>
                      </button>
                    </form>
                    <div className="success-message w-form-done">
                      <div>
                        Vielen Dank, dass Sie sich für unseren Newsletter
                        angemeldet haben.
                        <br />
                      </div>
                    </div>
                    <div className="error-message w-form-fail">
                      <div>Huch! Etwas ist schief gelaufen.</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="divider footer-top" />
              <div
                data-w-id="dc048f13-1f53-432b-65c5-83dcc56ddc08"
                className="footer-content"
              >
                <div className="footer-nav-wrapper first">
                  <h2 className="title h4-size footer-title">
                    Seiten
                    <br />
                  </h2>
                  <div className="footer-nav-content">
                    <ul role="list" className="footer-nav">
                      <li className="footer-nav-item">
                        <a
                          href="/homes/home-v1"
                          aria-current="page"
                          className="footer-nav-link w--current"
                        >
                          Startseite V1
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a href="/homes/home-v2" className="footer-nav-link">
                          Startseite V2
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a href="/homes/home-v3" className="footer-nav-link">
                          Startseite V3
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a href="/about" className="footer-nav-link">
                          Über
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a href="/team" className="footer-nav-link">
                          Team
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a
                          href="https://agencyxtemplate-de.webflow.io/team/john-carter"
                          className="footer-nav-link"
                        >
                          Team Einzel
                        </a>
                      </li>
                      <li className="footer-nav-item last">
                        <a href="/contact" className="footer-nav-link">
                          Kontakt
                        </a>
                      </li>
                    </ul>
                    <ul role="list" className="footer-nav">
                      <li className="footer-nav-item">
                        <a href="/blogs/blog-v1" className="footer-nav-link">
                          Blog V1
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a href="/blogs/blog-v2" className="footer-nav-link">
                          Blog V2
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a href="/blogs/blog-v3" className="footer-nav-link">
                          Blog V3
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a
                          href="https://agencyxtemplate-de.webflow.io/blog/5-seo-faktoren-die-sie-berucksichtigen-sollten-um-ihre-website-besser-zu-platzieren"
                          className="footer-nav-link"
                        >
                          Blog-Beitrag
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a href="/careers" className="footer-nav-link">
                          Stellenangebote
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a
                          href="https://agencyxtemplate-de.webflow.io/careers/spezialist-fur-e-mail-marketing"
                          className="footer-nav-link"
                        >
                          Einzelner Job
                        </a>
                      </li>
                      <li className="footer-nav-item last">
                        <a
                          href="/services/services-v1"
                          className="footer-nav-link"
                        >
                          Dienstleistungen V1
                        </a>
                      </li>
                    </ul>
                    <ul role="list" className="footer-nav last">
                      <li className="footer-nav-item">
                        <a
                          href="/services/services-v2"
                          className="footer-nav-link"
                        >
                          Dienstleistungen V2
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a
                          href="/services/services-v3"
                          className="footer-nav-link"
                        >
                          Dienstleistungen V3
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a href="/service" className="footer-nav-link">
                          Einzelne Dienstleistung
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a href="/packages" className="footer-nav-link">
                          Pakete
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a
                          href="https://agencyxtemplate-de.webflow.io/product/pramie"
                          className="footer-nav-link"
                        >
                          Einzelnes Paket
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a href="/case-studies" className="footer-nav-link">
                          Fallstudien
                        </a>
                      </li>
                      <li className="footer-nav-item last">
                        <a
                          href="https://agencyxtemplate-de.webflow.io/case-study/wie-wir-die-anmeldequote-fur-das-programm-fur-erfinder-um-56-erhoht-haben"
                          className="footer-nav-link"
                        >
                          Fallstudie
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-nav-wrapper">
                  <h2 className="title h4-size footer-title">Landing Pages</h2>
                  <div className="footer-nav-content">
                    <ul role="list" className="footer-nav last">
                      <li className="footer-nav-item">
                        <a
                          href="/landing-pages/free-consultation-landing-page"
                          className="footer-nav-link"
                        >
                          Landing Page für kostenlose Beratungen
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a
                          href="/landing-pages/newsletter-subscribe-landing-page"
                          className="footer-nav-link"
                        >
                          Newsletter-Landingpage
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a
                          href="/landing-pages/form-landing-page"
                          className="footer-nav-link"
                        >
                          Landingpage bilden
                        </a>
                      </li>
                      <li className="footer-nav-item last">
                        <a
                          href="/landing-pages/video-landing-page"
                          className="footer-nav-link"
                        >
                          Video-Landingpage
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-nav-wrapper last">
                  <h2 className="title h4-size footer-title">
                    Utility-Seiten
                    <br />
                  </h2>
                  <div className="footer-nav-content">
                    <ul role="list" className="footer-nav last">
                      <li className="footer-nav-item">
                        <a
                          href="/utility-pages/styleguide"
                          className="footer-nav-link"
                        >
                          Style Guide
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a
                          href="/utility-pages/start-here"
                          className="footer-nav-link"
                        >
                          Start Here
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a
                          href="https://agencyxtemplate-de.webflow.io/404"
                          className="footer-nav-link"
                        >
                          404 Not Found
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a
                          href="https://agencyxtemplate-de.webflow.io/401"
                          className="footer-nav-link"
                        >
                          Password Protected
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a
                          href="/utility-pages/licenses"
                          className="footer-nav-link"
                        >
                          Licenses
                        </a>
                      </li>
                      <li className="footer-nav-item last">
                        <a
                          href="/utility-pages/changelog"
                          className="footer-nav-link"
                        >
                          Changelog
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              <div className="divider footer-bottom" />
              <div
                data-w-id="c8229ca2-125d-1851-013f-b516dc2eb22d"
                className="footer-bottom"
              >
                <div className="footer-small-print">
                  Copyright © DailyHive - Built by{" "}
                  <a href="https://othman.itechnopro.com/" target="_blank">
                    @othmanosx
                  </a>
                </div>
                <div className="w-layout-grid footer-social-media-grid">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="footer-social-media-link facebook w-inline-block"
                  />
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    className="footer-social-media-link twitter w-inline-block"
                  />
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="footer-social-media-link instagram w-inline-block"
                  />
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="footer-social-media-link linkedin w-inline-block"
                  />
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    className="footer-social-media-link youtube w-inline-block"
                  />
                  <a
                    href="https://www.whatsapp.com/"
                    target="_blank"
                    className="footer-social-media-link whatsapp w-inline-block"
                  />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
