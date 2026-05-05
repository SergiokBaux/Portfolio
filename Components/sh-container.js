class SH_Container extends HTMLElement{
    constructor() {
        super();
        //Creates a private shadow DOM to the component, (this helps to not mix the provate DOM with the rest).
        this.attachShadow({ mode: "open" });
    }
    render(){

        const cardBg = "var(--color-arryn-90)";
        const borderGradient = "linear-gradient(135deg, #9c9c9c41 0%, #3580fa41 100%)";

        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                width: 100%;
                padding: 0px;
                font-family: var(--font-family-primary, sans-serif);
                color: var(--color-snow-10);
            }

            .Grid_Container {
                display: grid;
                height: fit-content;
                /* Definimos columnas responsivas */
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 32px; /* Espaciado entre tarjetas */
                min-width: 5vw;
                width: fit-content;
                max-width: 1200px;
                margin: 0 auto; /* Centra el contenedor en la pantalla */

                border: 2px solid transparent;
                border-radius: 8px;

                padding: 20px 16px 20px 16px;
                box-sizing: border-box;

                background-image: linear-gradient(${cardBg}, ${cardBg}), ${borderGradient};
                background-origin: border-box;
                background-clip: padding-box, border-box;
                

            }

            /* Ajustes para móvil */
            @media (max-width: 1023px) {
            .Grid_Container {
                grid-template-columns: 1fr; /* Una sola columna en móvil */
                gap: 24px;
                width: 100%;
            }
        
      </style>

      <div class="Grid_Container">
        <slot></slot> <!-- Aquí es donde se inyectarán tus tarjetas -->
      </div>
        `;
    }

    // Draw the component when the element is inserted at DOM
    connectedCallback() {
        this.render();
    }
}

customElements.define("sh-container", SH_Container);
