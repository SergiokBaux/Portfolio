class SH_AboutMe extends HTMLElement{
    constructor() {
        super();
        //Creates a private shadow DOM to the component, (this helps to not mix the provate DOM with the rest).
        this.attachShadow({ mode: "open" });
    }
    render(){
        this.shadowRoot.innerHTML = `
        <style>
        @media (min-width: 1024px) {
            .AboutMe_SubContainer{
                display: flex;
                flex-direction: column;
                width: auto;
                height: auto;
                gap: 20px;
            }
            .Description{
                width: 55vw;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 40px;
            }
            .Paragraph_focus{
                text-align: left;
            }
        }
        @media (max-width: 1023px) {
            .AboutMe_SubContainer{
                display: flex;
                flex-direction: column;
                width: 80vw;
                height: auto;
                gap: 20px;
            }
            .Description{
                width: auto;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 40px;
            }
            .Image{
                width:75%;
                height: auto;
            }
            .Paragraph{
                text-align: center;
            }
            .Paragraph_focus{
                text-align: center;
            }

        }
        .AboutMe_Container{
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .Photo{
            width: auto;
            height: auto;
            display: flex;
            justify-content: center;
        }
        .Title{
            margin:0;
            color: var(--color-snow-10);
            font-family: var(--font-family-primary);
            font-size: var(--font-size-display);
            font-weight: var(--font-weight-semibold);
            line-height:var(--line-height-display);
            width: 100%;
        }
        .Text_Container
        {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
        .Paragraph{
            margin:0;
            color: var(--color-snow-10);
            font-family: var(--font-family-primary);
            font-size: var(--font-size-paragraph);
            font-weight: var(--font-weight-regular);
            line-height:var(--line-height-paragraph);
        }
        .Paragraph_focus{
            margin:0;
            width:100%;
            font-weight: var(--font-weight-semibold);
        }
        </style>


        <div class="AboutMe_Container">
            <div class="AboutMe_SubContainer">
                <h1 class="Title">About Me</h1>
                <div class="Description">
                    <div class="Photo">
                        <img class="Image" src="/assets/images/profile.png" alt="Sergio Hernandez">
                    </div>
                    <div class="Text_Container">
                        <p class="Paragraph">I’m a UX Designer with a background in engineering. I focus on creating solutions that are:</p>
                        <p class="Paragraph Paragraph_focus">Usable<br>Feasible<br>Scalable.</p>
                        <sh-button text="More About Me" type="Tertiary" id="am_btn"></sh-button>
                    </div>

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

customElements.define("sh-aboutme", SH_AboutMe);