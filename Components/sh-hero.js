class SH_Hero extends HTMLElement {
  constructor() {
    super();
    //Creates a private shadow DOM to the component, (this helps to not mix the provate DOM with the rest).
    this.attachShadow({ mode: "open" });
  }
  //Creates a render function to draw the element.
  render() {
    this.shadowRoot.innerHTML = `
      <style>
    @media (min-width: 1024px) {
        .Hero_Subcontainer
        {
            width: 60vw;
            display: flex;
            flex-direction: column;
            gap: 48px;
        }
        .SubTitle_Container
        {
            display: flex;
            flex-direction: row;
            gap: 12px;
        }
        .Button_Container
        {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 44px;
        }
    }
    @media (max-width: 1023px) {
        .Hero_Subcontainer
        {
            width: 80vw;
            display: flex;
            flex-direction: column;
            gap: 48px;
        }
        .SubTitle_Container
        {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 12px;
        }
        .Button_Container
        {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
      }
      .Hero_container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    .Text_SubContainer{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

    .Hero_Head{
        display: flex;
        flex-direction: column;

        width: 100%;
        gap: 12px;
      }
        .Title{
            margin:0;
            color: var(--color-snow-10);
            font-family: var(--font-family-primary);
            font-size: var(--font-size-display);
            font-weight: var(--font-weight-semibold);
            line-height:var(--line-height-display);
        }
    .SubTitle{
        margin:0;
        color: var(--color-snow-70);
        font-family: var(--font-family-primary);
        font-size:var(--font-size-h3);
        font-weight: var(--font-weight-regular);
        line-height: var(--line-height-h3);
    }

    .Text{
        margin:0;
        color: var(--color-tyrell-30);
        font-family: var(--font-family-primary);
        font-size:var(--font-size-paragraph);
        font-weight: var(--font-weight-regular);
        line-height: var(--line-height-paragraph);
    }


      </style>

      <!-- Botón principal del componente con $ {disabled ? "disabled" : "" revisamos si esta deshabilitado-->
        <div class="Hero_container">
            <div class="Hero_Subcontainer">
                <div class="Text_SubContainer">
                    <div class="Hero_Head">
                        <h1 class="Title">Sergio Hernandez</h1>
                        <div class="SubTitle_Container">
                            <h2 class="SubTitle">UX Designer</h2>
                            <h2 class="SubTitle">Computer Engineer</h2>
                        </div>
                    </div>
                    <p class="Text">I design products that solve real user problems and drive measurable outcomes.</p>
                </div>

                <div class="Button_Container">
                    <sh-button text="View Case Studies" type="Primary" id="cs_btn"></sh-button>
                    <sh-button text="Download CV" type="Secondary" id="cv_btn"></sh-button>
                </div>
            </div>
        </div>
    `;

    }
  // Draw the component when the element is inserted at DOM
  connectedCallback() {
    this.render();
  }
}

customElements.define("sh-hero", SH_Hero);