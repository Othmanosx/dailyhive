import Image from "next/image"

const Chart = () => {
  return (
    <div
      id="Services-Section"
      className="section home-services wf-section"
      style={{ position: "relative" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://assets.website-files.com/611c14f4bf91b0df48d41981/611c14f4bf91b02a87d419ed_bg-contact-marketing-template.jpg"
        alt=""
        className="bg home-hero"
        style={{
          right: 191,
          maxWidth: 1000,
          top: 124,
          zIndex: 0,
          mixBlendMode: "multiply",
        }}
      />
      <div className="container-default w-container">
        <div
          data-w-id="73fcd4c4-a8ae-4778-543a-1762bd47d52e"
          className="home-services-title-wrapper"
        >
          <h2 className="title home-services">
            {/* Get organized and save time with DailyHive, the automated way to
            manage projects and teams. */}
            Simplify project management with the{" "}
            <span className="text-fade">Power of AI</span>.
          </h2>
          DailyHive provides daily detailed summaries of your project, helping
          you stay on top of the progress and identify areas where you can make
          improvements.
          <br />
          <br />
        </div>
        <div className="wa-vectors-list wa-vectors-list--6 wa-vectors-list--lg">
          <div className="wa-vectors-list__items">
            <span className="wa-vectors-list__item wa-vectors-list__item--md">
              <Image
                className="app-icon"
                src="/GitHub.png"
                alt=""
                height={35}
                width={35}
              />
              <span>Github</span>
            </span>
            <span className="wa-vectors-list__item wa-vectors-list__item--md">
              <Image
                className="app-icon"
                src="/jira.png"
                alt=""
                height={35}
                width={35}
              />
              <span>Jira</span>
            </span>
            <span className="wa-vectors-list__item wa-vectors-list__item--md">
              <Image
                className="app-icon"
                src="/slack.jpg"
                alt=""
                height={35}
                width={35}
              />
              <span>Slack</span>
            </span>
            <span className="wa-vectors-list__item wa-vectors-list__item--md">
              <Image
                className="app-icon"
                src="/trello.png"
                alt=""
                height={35}
                width={35}
              />
              <span>Trello</span>
            </span>
            <span className="wa-vectors-list__item wa-vectors-list__item--md">
              <Image
                className="app-icon"
                src="/asana.jpg"
                alt=""
                height={35}
                width={35}
              />
              <span>Asana</span>
            </span>
            <span className="wa-vectors-list__item wa-vectors-list__item--md">
              <Image
                className="app-icon"
                src="/gitlab.webp"
                alt=""
                height={35}
                width={35}
              />
              <span>Gitlab</span>
            </span>
          </div>
          <div className="wa-vectors-list__lines">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={311}
              height={328}
              fill="none"
              viewBox="0 0 311 328"
              id="big-lines"
            >
              <g
                className="wa-vectors-list__line-lg-1--no-item-data"
                opacity="0.8"
              >
                <path
                  stroke="lightblue"
                  strokeWidth={37}
                  d="M0 19a161.89 161.89 0 0 1 107.992 41.282l59.95 53.678A207.999 207.999 0 0 0 306.691 167H311"
                />
              </g>
              <g
                className="wa-vectors-list__line-lg-2--no-item-data"
                opacity="0.6"
              >
                <path
                  stroke="#0053CB"
                  strokeWidth={37}
                  d="M0 76h15.274a208 208 0 0 1 88.767 19.892l80.984 38.216A207.997 207.997 0 0 0 273.791 154H311"
                />
              </g>
              <g
                className="wa-vectors-list__line-lg-3--no-item-data"
                opacity="0.4"
              >
                <path
                  stroke="green"
                  strokeWidth={37}
                  d="M0 134h41.326c13.674 0 27.314 1.348 40.723 4.025l124.967 24.95A208.01 208.01 0 0 0 247.739 167H311"
                />
              </g>
              <g
                className="wa-vectors-list__line-lg-5--no-item-data"
                opacity="0.2"
              >
                <path
                  stroke="red"
                  strokeWidth={37}
                  d="M0 251h20.773a208 208 0 0 0 79.135-15.642l89.249-36.716A208.002 208.002 0 0 1 268.292 183H311"
                />
              </g>
              <g className="wa-vectors-list__line-lg-0--no-item-data">
                <path
                  stroke="orange"
                  strokeWidth={37}
                  d="M0 309c39.931 0 78.54-14.307 108.829-40.328l59.885-51.446A208.001 208.001 0 0 1 304.255 167H311"
                />
              </g>
              <g
                className="wa-vectors-list__line-lg-4--no-item-data"
                opacity="0.3"
              >
                <path
                  stroke="#1D7BF7"
                  strokeWidth={37}
                  d="M0 192h61.887l165.292-19H311"
                />
              </g>
              <defs>
                <linearGradient
                  className="wa-vectors-list__line-lg-color-1--no-item-data"
                  id="wa-vectors-list__lines-lg-paint-1--keywords"
                  x1="286.447"
                  y1=".5"
                  x2="117.527"
                  y2="61.03"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C9DEFB" />
                  <stop offset={1} stopColor="#195AFE" />
                </linearGradient>
                <linearGradient
                  className="wa-vectors-list__line-lg-color-2--no-item-data"
                  id="wa-vectors-list__lines-lg-paint-2--keywords"
                  x1="286.447"
                  y1="66.25"
                  x2="156.097"
                  y2="154.878"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C9DEFB" />
                  <stop offset={1} stopColor="#195AFE" />
                </linearGradient>
                <linearGradient
                  className="wa-vectors-list__line-lg-color-3--no-item-data"
                  id="wa-vectors-list__lines-lg-paint-3--keywords"
                  x1="286.447"
                  y1="129.875"
                  x2="233.245"
                  y2="215.376"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C9DEFB" />
                  <stop offset={1} stopColor="#195AFE" />
                </linearGradient>
                <linearGradient
                  className="wa-vectors-list__line-lg-color-5--no-item-data"
                  id="wa-vectors-list__lines-lg-paint-5--keywords"
                  x1="286.447"
                  y1="259.5"
                  x2="167.927"
                  y2="167.065"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C9DEFB" />
                  <stop offset={1} stopColor="#195AFE" />
                </linearGradient>
                <linearGradient
                  className="wa-vectors-list__line-lg-color-0--no-item-data"
                  id="wa-vectors-list__lines-lg-paint-0--keywords"
                  x1="286.447"
                  y1="326.75"
                  x2="119.17"
                  y2="264.276"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C9DEFB" />
                  <stop offset={1} stopColor="#195AFE" />
                </linearGradient>
                <linearGradient
                  className="wa-vectors-list__line-lg-color-4--no-item-data"
                  id="wa-vectors-list__lines-lg-paint-4--keywords"
                  x1="286.447"
                  y1="194.375"
                  x2="264.765"
                  y2="133.854"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C9DEFB" />
                  <stop offset={1} stopColor="#195AFE" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={295}
              height={412}
              fill="none"
              viewBox="0 0 295 412"
              id="small-lines"
            >
              <g
                className="wa-vectors-list__line-sm-1--no-item-data"
                opacity="0.8"
              >
                <path
                  stroke="lightblue"
                  strokeWidth={16}
                  d="M8.00001 0L8.00001 236.556C8.00001 295.422 48.1489 346.698 105.296 360.819L185.428 380.618C199.861 384.184 210 397.134 210 412V412"
                />
              </g>
              <g
                className="wa-vectors-list__line-sm-2--no-item-data"
                opacity="0.6"
                transform="translate(56, 59)"
              >
                <path
                  stroke="#0053CB"
                  strokeWidth={16}
                  d="M8.00001 0L8.00001 194.762C8.00001 244.319 40.2012 288.129 87.5 302.921L142.933 320.257C157.252 324.735 167 337.998 167 353V353"
                />
              </g>
              <g
                className="wa-vectors-list__line-sm-3--no-item-data"
                opacity="0.4"
                transform="translate(112, 117)"
              >
                <path
                  stroke="green"
                  strokeWidth={16}
                  d="M8.00001 0L8.00001 159.358C8.00001 196.557 29.9637 230.247 64 245.257L97.0825 259.846C111.012 265.989 120 279.777 120 295V295"
                />
              </g>
              <g
                className="wa-vectors-list__line-sm-5--no-item-data"
                opacity="0.2"
                transform="translate(220, 222)"
              >
                <path
                  stroke="red"
                  strokeWidth={16}
                  d="M8 0L8 97.112C8 109.835 9.89683 122.486 13.6279 134.65L17.3721 146.856C21.1032 159.019 23 171.67 23 184.393L23 190"
                />
              </g>
              <g
                className="wa-vectors-list__line-sm-0--no-item-data"
                transform="translate(238, 293)"
              >
                <path
                  stroke="orange"
                  strokeWidth={16}
                  d="M49 0L49 5.70467C49 28.0892 41.8141 49.8825 28.5 67.877L21.928 76.7592C12.8822 88.9849 8 103.792 8 119V119"
                />
              </g>
              <g
                className="wa-vectors-list__line-sm-4--no-item-data"
                opacity="0.3"
                transform="translate(168, 174)"
              >
                <path
                  stroke="#1D7BF7"
                  strokeWidth={16}
                  d="M8.00008 0L8.00003 122.217C8.00001 147.824 19.8063 172 40 187.745L52.044 197.135C64.6373 206.954 72 222.031 72 238V238"
                />
              </g>
              <defs>
                <linearGradient
                  className="wa-vectors-list__line-sm-color-1--no-item-data"
                  id="wa-vectors-list__lines-sm-paint-1--keywords"
                  x1="-54.2707"
                  y1="314.382"
                  x2="-5.738"
                  y2="237.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C5DEFF" />
                  <stop offset={1} stopColor="#195AFE" />
                </linearGradient>
                <linearGradient
                  className="wa-vectors-list__line-sm-color-2--no-item-data"
                  id="wa-vectors-list__lines-sm-paint-2--keywords"
                  x1="-41.015"
                  y1="269.361"
                  x2="1.97734"
                  y2="206.912"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C5DEFF" />
                  <stop offset={1} stopColor="#195AFE" />
                </linearGradient>
                <linearGradient
                  className="wa-vectors-list__line-sm-color-3--no-item-data"
                  id="wa-vectors-list__lines-sm-paint-3--keywords"
                  x1="-26.5263"
                  y1="225.103"
                  x2="11.1604"
                  y2="178.961"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C5DEFF" />
                  <stop offset={1} stopColor="#195AFE" />
                </linearGradient>
                <linearGradient
                  className="wa-vectors-list__line-sm-color-5--no-item-data"
                  id="wa-vectors-list__lines-sm-paint-5--keywords"
                  x1="3.37595"
                  y1="144.982"
                  x2="15.2217"
                  y2="141.966"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C5DEFF" />
                  <stop offset={1} stopColor="#195AFE" />
                </linearGradient>
                <linearGradient
                  className="wa-vectors-list__line-sm-color-0--no-item-data"
                  id="wa-vectors-list__lines-sm-paint-0--keywords"
                  x1="51.5828"
                  y1="111.105"
                  x2="28.9832"
                  y2="59.7638"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C9DEFB" />
                  <stop offset={1} stopColor="#195AFE" />
                </linearGradient>
                <linearGradient
                  className="wa-vectors-list__line-sm-color-4--no-item-data"
                  id="wa-vectors-list__lines-sm-paint-4--keywords"
                  x1="-11.7293"
                  y1="181.609"
                  x2="18.9882"
                  y2="154.971"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C5DEFF" />
                  <stop offset={1} stopColor="#195AFE" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={160}
              height={412}
              fill="none"
              viewBox="0 0 160 412"
              id="x-small-lines"
            >
              <g
                className="wa-vectors-list__line-xs-1--no-item-data"
                opacity="0.8"
              >
                <path
                  stroke="url(#wa-vectors-list__lines-xs-paint-1--keywords)"
                  strokeWidth={8}
                  d="M4.00001 0L4.00001 271.795C4.00001 311.141 27.6711 346.623 64 361.734L100.63 376.969C114.78 382.855 124 396.675 124 412V412"
                />
              </g>
              <g
                className="wa-vectors-list__line-xs-2--no-item-data"
                opacity="0.6"
                transform="translate(16, 59)"
              >
                <path
                  stroke="url(#wa-vectors-list__lines-xs-paint-2--keywords)"
                  strokeWidth={8}
                  d="M4.00001 0L4.00001 217.7C4.00001 254.445 25.5171 287.785 59 302.921L91.0225 317.397C105.011 323.72 114 337.649 114 353V353"
                />
              </g>
              <g
                className="wa-vectors-list__line-xs-3--no-item-data"
                opacity="0.4"
                transform="translate(32, 117)"
              >
                <path
                  stroke="url(#wa-vectors-list__lines-xs-paint-3--keywords)"
                  strokeWidth={8}
                  d="M4.00001 0L4.00001 164.795C4.00001 198.944 23.3817 230.134 54 245.257L81.5429 258.861C95.2949 265.653 104 279.662 104 295V295"
                />
              </g>
              <g
                className="wa-vectors-list__line-xs-5--no-item-data"
                opacity="0.2"
                transform="translate(64, 222)"
              >
                <path
                  stroke="url(#wa-vectors-list__lines-xs-paint-5--keywords)"
                  strokeWidth={8}
                  d="M4 0L4 71.5361C4 99.4629 18.1063 125.5 41.5 140.753L58.2277 151.659C71.1861 160.108 79 174.531 79 190V190"
                />
              </g>
              <g
                className="wa-vectors-list__line-xs-0--no-item-data"
                transform="translate(80, 293)"
              >
                <path
                  stroke="url(#wa-vectors-list__lines-xs-paint-0--keywords)"
                  strokeWidth={8}
                  d="M4 0V0C4 25.5356 14.989 49.8361 34.163 66.701L49.4171 80.118C60.5942 89.949 67 104.115 67 119V119"
                />
              </g>
              <g
                className="wa-vectors-list__line-xs-4--no-item-data"
                opacity="0.3"
                transform="translate(48, 174)"
              >
                <path
                  stroke="url(#wa-vectors-list__lines-xs-paint-4--keywords)"
                  strokeWidth={8}
                  d="M4.00011 0L4.00004 112.647C4.00002 143.665 20.594 172.312 47.5 187.745L69.0494 200.105C82.6265 207.892 91 222.348 91 238V238"
                />
              </g>
              <defs>
                <linearGradient
                  className="wa-vectors-list__line-xs-color-1--no-item-data"
                  id="wa-vectors-list__lines-xs-paint-1--keywords"
                  x1="-32.9925"
                  y1="314.382"
                  x2="20.618"
                  y2="264.026"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C5DEFF" />
                  <stop offset={1} stopColor="#195AFE" />
                </linearGradient>
                <linearGradient
                  className="wa-vectors-list__line-xs-color-2--no-item-data"
                  id="wa-vectors-list__lines-xs-paint-2--keywords"
                  x1="-29.9098"
                  y1="269.361"
                  x2="16.1131"
                  y2="223.112"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C5DEFF" />
                  <stop offset={1} stopColor="#195AFE" />
                </linearGradient>
                <linearGradient
                  className="wa-vectors-list__line-xs-color-3--no-item-data"
                  id="wa-vectors-list__lines-xs-paint-3--keywords"
                  x1="-26.8271"
                  y1="225.103"
                  x2="11.4823"
                  y2="183.224"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C5DEFF" />
                  <stop offset={1} stopColor="#195AFE" />
                </linearGradient>
                <linearGradient
                  className="wa-vectors-list__line-xs-color-5--no-item-data"
                  id="wa-vectors-list__lines-xs-paint-5--keywords"
                  x1="-19.1203"
                  y1="144.982"
                  x2="4.94707"
                  y2="114.345"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C5DEFF" />
                  <stop offset={1} stopColor="#195AFE" />
                </linearGradient>
                <linearGradient
                  className="wa-vectors-list__line-xs-color-0--no-item-data"
                  id="wa-vectors-list__lines-xs-paint-0--keywords"
                  x1="0.031332"
                  y1="111.106"
                  x2="16.2572"
                  y2="54.4641"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C9DEFB" />
                  <stop offset={1} stopColor="#195AFE" />
                </linearGradient>
                <linearGradient
                  className="wa-vectors-list__line-xs-color-4--no-item-data"
                  id="wa-vectors-list__lines-xs-paint-4--keywords"
                  x1="-22.8195"
                  y1="181.609"
                  x2="7.79506"
                  y2="145.519"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C5DEFF" />
                  <stop offset={1} stopColor="#195AFE" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div
            className="wa-vectors-list__total wa-vectors-list__total--sm data-tooltip__reference"
            style={{ overflow: "hidden" }}
          >
            <div className="wa-vectors-list__total-item">
              <img
                src="/ai.avif"
                alt=""
                style={{ filter: "hue-rotate(137deg)" }}
              />
            </div>
          </div>
          <div className="wa-vectors-list__preview wa-vectors-list__preview--no-data">
            <svg
              className="wa-vectors-list__preview-laptop"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width={308}
              height={237}
              fill="none"
              viewBox="0 0 408 237"
            >
              <path
                fill="#D0D0D0"
                d="M378.724 200.431l-214.16 16.795c-1.832.141-2.926-2.894-2.764-4.723l13.857-158.0237c.33-3.8135 3.086-6.9907 6.825-7.8446L380.293 1.16764c6.001-1.305433 10.019 2.80086 9.909 7.01456l-4.934 184.3118c-.052 4.54-3.221 7.675-6.544 7.937z"
              />
              <path
                fill="#F2F2F2"
                d="M377.346 198.932l-212.369 16.756c-1.822.14-3.33-1.377-3.177-3.195l13.725-158.0899c.333-3.7845 3.062-6.9301 6.772-7.7814L380.294 1.16758c4.074-.93192 7.94 2.22195 7.828 6.40661L383.294 192.666c-.081 3.304-2.654 6.007-5.948 6.266z"
              />
              <path
                fill="url(#wa-vectors-list__paint0-linear)"
                d="M378.318 199.569s-7.538 2.815-31.526 6.465c-2.108.321-4.222.574-6.342.759l-86.165 8.426-135.001 11.811-49.1465 3.413s-31.0351 3.271-52.2937.663l166.1152-15.411 75.732-6.47 118.627-9.656z"
              />
              <path
                fill="url(#wa-vectors-list__paint1-linear)"
                d="M377.775 193.354l-118.612 12.387-15.992 1.399-225.4815 22.195.155 1.771L139.303 220.48l103.623-9.788 16.766-1.466 118.627-9.657-.544-6.215z"
              />
              <path
                fill="#333"
                d="M376.054 197.983c-.426.038-.806-.281-.843-.707l-.155-1.772c-.037-.426.281-.805.707-.842.426-.038.805.281.843.707l.155 1.772c.036.416-.281.805-.707.842z"
              />
              <path
                fill="url(#wa-vectors-list__paint2-linear)"
                d="M102.077 221.015l.117 1.336c.067.765.788 1.316 1.6 1.236l27.067-2.359c.803-.08 1.388-.745 1.323-1.491l-.146-1.665-29.961 2.943z"
              />
              <defs>
                <linearGradient
                  id="wa-vectors-list__paint0-linear"
                  x1="198.499"
                  x2="198.007"
                  y1="220.101"
                  y2="214.471"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4D4D4D" />
                  <stop offset=".011582" stopColor="#535353" />
                  <stop offset=".091736" stopColor="#767676" />
                  <stop offset=".1799" stopColor="#949494" />
                  <stop offset=".2765" stopColor="#ACACAC" />
                  <stop offset=".385" stopColor="#BFBFBF" />
                  <stop offset=".5121" stopColor="#CCC" />
                  <stop offset=".6752" stopColor="#D4D4D4" />
                  <stop offset={1} stopColor="#D6D6D6" />
                </linearGradient>
                <linearGradient
                  id="wa-vectors-list__paint1-linear"
                  x1="17.5751"
                  x2="378.047"
                  y1="227.999"
                  y2="196.461"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#B3B3B3" />
                  <stop offset=".022291" stopColor="#FBFBFB" />
                  <stop offset=".481" stopColor="#F3F3F3" />
                  <stop offset=".5109" stopColor="#CCC" />
                  <stop offset=".539" stopColor="#F2F2F2" />
                  <stop offset=".9793" stopColor="#fff" />
                  <stop offset={1} stopColor="#B3B3B3" />
                </linearGradient>
                <linearGradient
                  id="wa-vectors-list__paint2-linear"
                  x1="102.178"
                  x2="132.164"
                  y1="222.216"
                  y2="219.592"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#B3B3B3" />
                  <stop offset=".045741" stopColor="#FBFBFB" />
                  <stop offset=".347" stopColor="#F3F3F3" />
                  <stop offset=".7299" stopColor="#F2F2F2" />
                  <stop offset=".9525" stopColor="#fff" />
                  <stop offset={1} stopColor="#B3B3B3" />
                </linearGradient>
              </defs>
            </svg>
            <div className="wa-vectors-list__preview-img-container">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="wa-vectors-list__preview-img"
                src="/dashboard-yellow.jpeg"
                alt="preview"
              />
              {/* team members */}
              <Image
                className="team-member"
                src="/member1.jpg"
                alt=""
                height={60}
                width={60}
              />
              <Image
                className="team-member"
                src="/member2.jpg"
                alt=""
                height={60}
                width={60}
              />
              <Image
                className="team-member"
                src="/member3.jpg"
                alt=""
                height={60}
                width={60}
              />
              <Image
                className="team-member"
                src="/member4.jpg"
                alt=""
                height={60}
                width={60}
              />
              <Image
                className="team-member"
                src="/member5.jpg"
                alt=""
                height={60}
                width={60}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart
