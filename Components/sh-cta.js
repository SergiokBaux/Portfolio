class SH_CTA extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>

        .CTA_Screen{
          width:100vw;
          height:100vh;

          display:flex;
          justify-content:center;
          align-items:center;
        }
        .CTA_Subcontainer{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;

            gap:12px;
        }

        .Title{
          margin:0;

          font-family:var(--font-family-primary);
          font-size:var(--font-size-display);
          font-weight:var(--font-weight-semibold);
          line-height:var(--line-height-display);

          background-image:linear-gradient(
            90deg,
            rgba(249,168,212,1) 0%,
            rgba(45,106,208,1) 100%
          );

          -webkit-background-clip:text;
          background-clip:text;

          color:transparent;
          text-align: center;
        }

        .Subtitle{
          margin:0;

          font-family:var(--font-family-primary);
          font-size:var(--font-size-h3);
          font-weight:var(--font-weight-regular);
          line-height:var(--line-height-h3);

          color:var(--color-tully-10);
        }

        /* Desktop */

        @media (min-width:1024px){

          .CTA_Container{
            width:60vw;

            display:flex;
            flex-direction:column;
            justify-content:center;

            gap:24px;
          }
          .Button_Container{
            display:flex;
            flex-direction:row;

            justify-content:center;

            gap:32px;
          }
        }

        /* Mobile */

        @media (max-width:1023px){

          .CTA_Container{
            width:80vw;

            display:flex;
            flex-direction:column;
            justify-content:center;

            gap: 28px;
          }

          .Button_Container{
            width:100%;

            display:flex;
            flex-direction:column;

            align-items:center;

            gap:20px;
          }

        }

      </style>

      <div class="CTA_Screen">
        <div class="CTA_Container">
            <div class="CTA_Subcontainer">
                <h1 class="Title">Looking for a UX Designer?</h1>
                <h2 class="Subtitle">I’m currently available for junior UX roles.</h2>
            </div>

            <div class="Button_Container">
                <sh-button text="Email Me" type="Primary" id="cv_btn">
                    <svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M7 12L12 15.5L17 12"/>
                    <path d="M2 20V9.13238C2 8.42985 2.3686 7.77884 2.97101 7.41739L10.971 2.61739C11.6044 2.23738 12.3956 2.23738 13.029 2.6174L21.029 7.4174C21.6314 7.77884 22 8.42985 22 9.13238V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20Z"/>
                    </svg>
                </sh-button>
                <sh-button text="Download CV" type="Secondary" id="cs_btn">
                <svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 21.4V2.6C4 2.26863 4.26863 2 4.6 2H16.2515C16.4106 2 16.5632 2.06321 16.6757 2.17574L19.8243 5.32426C19.9368 5.43679 20 5.5894 20 5.74853V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4Z"/>
                    <path d="M8 10H16"/>
                    <path d="M8 18H16"/>
                    <path d="M8 14H12"/>
                    <path d="M16 2V5.4C16 5.73137 16.2686 6 16.6 6H20"/>
                </svg>
                </sh-button>
            </div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("sh-cta", SH_CTA);