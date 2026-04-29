class SH_OtherProjects extends HTMLElement{
    constructor() {
        super();
        //Creates a private shadow DOM to the component, (this helps to not mix the provate DOM with the rest).
        this.attachShadow({ mode: "open" });
    }
    render(){
        this.shadowRoot.innerHTML = `
        <style>
        .Project_Screen{
            min-width: 100%;
            min-height: 100vh;
            
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .Projects_Container{
            width: fit-content;
            max-width: 80vw;
            height: auto;

            display: flex;
            flex-direction: column;
            justify-content: center;

            gap: 40px;
        }
        .Projects_SubContainer{
            width: 100%;
            height: auto;

            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: stretch;
            gap: 20px;

            flex-wrap: wrap;
        }
        .Title{
            width: 100%;
            margin:0;
            color: var(--color-snow-10);
            font-family: var(--font-family-primary);
            font-size: var(--font-size-display);
            font-weight: var(--font-weight-semibold);
            line-height:var(--line-height-display);
        }
        @media (max-width: 1023px) {
            .Projects_Container{
                width: fit-content;
                height: auto;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                gap: 40px;
            }
            .Projects_SubContainer{
                min-width: 80vw;
                height: fit-content;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                gap: 20px;
            }
        }

        </style>

        <div class="Project_Screen">
            <div class="Projects_Container">
                <h1 class="Title">Projects</h1>
                <div class="Projects_SubContainer">
                    <sh-card title="LCA" button_text="View Study Case">
                        <img slot="image" src="/assets/images/project_1.png" alt="">
                    </sh-card>
                    <sh-card title="D-Ticket" button_text="View Study Case">
                        <img slot="image" src="/assets/images/project_2.png" alt="">
                    </sh-card>
                    <sh-card title="FiestApp" button_text="View Study Case">
                        <img slot="image" src="/assets/images/project_3.png" alt="">
                    </sh-card>
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

customElements.define("sh-otherprojects", SH_OtherProjects);