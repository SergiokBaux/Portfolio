class SH_Project extends HTMLElement {
  constructor() {
    super();
        //Creates a private shadow DOM to the component, (this helps to not mix the provate DOM with the rest).
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        return ["title", "text", "button_text", "showbtn"]; // Los nombres deben ir en minúsculas aquí
    }
  //Creates a render function to draw the element.
  render() {
    this.shadowRoot.innerHTML = `
        <style>
            :host{
                font-family: var(--font-family-primary);
                display: inline-block;
            }
            .Project_Screen{
                width: 100vw;
                min-height: 100vh;

                display: flex;
                flex-direction:column;
                justify-content: center;
                align-items: center;
            }
            .Project_Container{
                max-width: 80vw;
                height: auto;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                gap: 20px;
            }
            .Content_Container{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                gap: 40px;
            }
            .Content{
                height: auto;
                max-width: 640px;
            }
            .Content_Subcontainer{
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .Chip_Container{
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 40px;
            }
            .Title{
                margin:0;
                color: var(--color-tully-40);

                font-size: var(--font-size-display);
                font-weight: var(--font-weight-semibold);
                line-height:var(--line-height-display);
            }
            .SubTitle{
                margin:0;
                color: var(--color-tyrell-10);

                font-size:var(--font-size-h2);
                font-weight: var(--font-weight-semibold);
                line-height: var(--line-height-h2);
            }
            .Text{
                margin:0;
                color: var(--color-snow-10);

                font-size:var(--font-size-paragraph);
                font-weight: var(--font-weight-regular);
                line-height: var(--line-height-paragraph);
            }
            .Image{
                max-width: 400px;
            }
            @media (max-width: 1023px) {
                .Content_Container{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    gap: 20px;

                }
                .Project_Container{
                    width:80vw;
                }
                .Content{
                    width: 100%;
                }
                .Image{
                    max-width: 260px;
                }
        </style>

        <div class="Project_Screen">
            <div class="Project_Container">
                <div class="Content_Container">
                    <div class="Content">
                        <div class="Content_Subcontainer">
                            <h1 class="Title">Improving High-Demand Ticket Purchasing</h1>
                            <h2 class="SubTitle">D Ticket – UX/UI Case Study</h2>
                            <p class="Text">Improved the ticket purchase flow for time-sensitive events.<br><br>Problem:<br>Users faced friction during discovery, selection, and checkout when speed was critical, while resale regulations added complexity to the ticket purchasing experience.</p>
                            <div class="Chip_Container">
                                <sh-chip text="UI Design"></sh-chip>
                                <sh-chip text="UX Research"></sh-chip>
                                <sh-chip text="Wireframing"></sh-chip>
                            </div>
                        </div>
                    </div>
                    <img class="Image" src="/assets/images/featured_project.png" alt="D-Ticket project">
                </div>
                <sh-button text="View Case Study"><sh-button>
            </div>
        </div>
    `;
  }
    connectedCallback() {
        this.render();
    }
}

customElements.define("sh-project", SH_Project);