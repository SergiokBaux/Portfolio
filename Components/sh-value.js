class SH_Value extends HTMLElement{
    constructor() {
        super();
        //Creates a private shadow DOM to the component, (this helps to not mix the provate DOM with the rest).
        this.attachShadow({ mode: "open" });
    }
    render(){
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: var(--font-family-primary, sans-serif);
                }
                .Value_Screen{
                    width: 100vw;
                    height: 100vh;

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                }
                .Value_Container{
                    max-width: 900px;
                    width: 80vw;
                    gap: 8px;
                    display: grid;

                }

                .Title{
                    margin:0;
                    font-size: var(--font-size-display);
                    font-weight: var(--font-weight-semibold);
                    line-height:var(--line-height-display);

                    color: var(--color-snow-10);
                }
                .Focus_Title{
                    /* 1. Aplicamos el degradado al fondo */
                    background-image: linear-gradient(90deg, rgba(249, 168, 212, 1) 0%, rgba(45, 106, 208, 1) 100%);
                    /* 2. Recortamos el fondo para que solo se vea a través del texto */            
                    -webkit-background-clip: text;
                    background-clip: text;
                    /* 3. Hacemos que el color del texto original sea transparente para ver el fondo */    
                    color: transparent;
                    /* Extra: Asegúrate de que el bloque sea inline-block si el degradado no se ve */
                }
                .Text{
                    margin:0;
                    font-size: var(--font-size-h1);
                    font-weight: var(--font-weight-regular);
                    line-height:var(--line-height-h1);

                    color: var(--color-snow-30);
                }
                .Focus_Text{
                    font-weight: var(--font-weight-semibold);
                    color: var(--color-tyrell-30);
                }
                @media (min-width: 1024px) {}
                @media (max-width: 1023px) {
                    .Value_Container {
                        gap: 16px; /* Espacio entre párrafos */
                        padding: 0 20px; /* Margen interno para que no toque los bordes físicos del cel */
                    }
                    .Text {
                        max-width: 90%; /* Evita líneas demasiado largas */
                    }

                    .Title {
                        margin-top: 32px; /* Separación clara del mensaje anterior */
                        text-wrap: balance; /* Distribución armónica */
                    }
                }
            </style>

            <div class="Value_Screen">
                <div class="Value_Container">
                    <p class="Text">
                        A product can work perfectly... and still <span class="Focus_Text">fail.</span>
                    </p>
                    <p class="Text">
                        When we don't understand people, no technology is enough.
                    </p>
                    <h1 class="Title">
                        That’s why <span class="Focus_Title">I design with intention.</span>
                    </h1>
                </div>
            </div>
        
        `;
    }

    // Draw the component when the element is inserted at DOM
    connectedCallback() {
        this.render();
    }
}
customElements.define("sh-value", SH_Value);