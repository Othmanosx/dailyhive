import { useMutation } from "@tanstack/react-query"
import { useEffect, useState } from "react"

type Props = {}

const Hero = (props: Props) => {
  const [email, setEmail] = useState("")
  const { mutate, isLoading, isSuccess } = useMutation<any>({
    mutationFn: () =>
      fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
      }),
  })
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      const distance = window.scrollY

      const element = document.querySelector(".parallax") as HTMLImageElement
      if (element)
        element.style.transform = `translateY(${Math.min(
          distance * 0.1,
          200
        )}px)`
    })
  }, [])
  function submit(e: any) {
    e.preventDefault()
    mutate()
  }

  return (
    <div className="section home-hero wf-section">
      <div className="container-default w-container">
        <div className="home-hero-wrapper">
          <div className="split-content home-hero-content">
            <h1 className="title home-hero">
              Automate the way you <span className="text-fade">Manage </span>
              your software projects.
              <br />
            </h1>
            <p className="paragraph home-hero">
              Eliminate time spent on daily meetings and get AI summaries from
              existing developer tools and stay informed on project progress.
            </p>
            <form
              className="_2-buttons"
              onSubmit={submit}
              style={{ display: "flex", gap: "1rem" }}
            >
              <input
                type="email"
                className="input email w-input"
                maxLength={256}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                data-name="Email"
                placeholder="E-Mail Address"
                id="email"
                required
              />
              <button
                disabled={isLoading}
                style={{ whiteSpace: "nowrap", margin: 0 }}
                className="button-primary button-2-buttons w-button"
              >
                {isSuccess
                  ? "Thank you!"
                  : isLoading
                  ? "Loading..."
                  : "Join Our Waitlist"}
              </button>
            </form>
          </div>
          <div className="home-hero-images-wrapper">
            <img
              src="/image-2-home-hero-marketing-template.svg"
              alt=""
              className="image home-hero-2 parallax"
              style={{ zIndex: -10 }}
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
