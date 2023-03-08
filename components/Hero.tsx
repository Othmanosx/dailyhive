import React from "react"

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="section home-hero wf-section">
      <div className="container-default w-container">
        <div
          data-w-id="e926a562-597a-4319-03f1-65f898f9a47b"
          className="home-hero-wrapper"
        >
          <div
            data-w-id="77ab0af8-78b3-5b27-db00-6535b60630b2"
            className="split-content home-hero-content"
          >
            <h1 className="title home-hero">
              Automate the way you manage your projects.
              <br />
            </h1>
            <p className="paragraph home-hero">
              Eliminate time spent on daily meetings and get AI summaries from
              existing developer tools and stay informed on project progress.
            </p>
            <div className="_2-buttons">
              <a
                href="/contact"
                className="button-primary button-2-buttons w-button"
              >
                Join Our Waitlist&nbsp;&nbsp;
                <span className="button-primary-arrow"></span>
              </a>
              <a
                href="#Services-Section"
                className="button-secondary button-2-buttons w-button"
              >
                Pre-Order Now
              </a>
            </div>
          </div>
          <div className="home-hero-images-wrapper">
            <img
              src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b08d4cd41b35_image-2-home-hero-marketing-template.svg"
              alt=""
              className="image home-hero-2"
            />
            <img
              src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b04bc0d41b42_image-1-home-hero-marketing-template-1.svg"
              alt=""
              className="image home-hero-1"
            />
          </div>
          <img
            src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b02a87d419ed_bg-contact-marketing-template.jpg"
            alt=""
            className="bg home-hero"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
