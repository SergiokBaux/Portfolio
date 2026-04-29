class SH_Card extends HTMLElement{
    constructor() {
        super();
        //Creates a private shadow DOM to the component, (this helps to not mix the provate DOM with the rest).
        this.attachShadow({ mode: "open" });
    }
    //Provides the browser with a list of attributes to listen changes
    static get observedAttributes() {
      return ["title", "text", "button_text"];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
        this.render();
        }
    }
    render(){
        const title = this.getAttribute("title") || "Title here";
        const text = this.getAttribute("text") || "Default text content";
        const button_text = this.getAttribute("button_text");

        // Colores extraídos de tu captura de Figma
        const cardBg = "var(--color-arryn-90)";
        const borderGradient = "linear-gradient(135deg, #9c9c9c41 0%, #3580fa41 100%)";


        this.shadowRoot.innerHTML = `
            <style>
            :host {
                height: 100%;
                display: flex;
                flex-direction: column;
                font-family: var(--font-family-primary, sans-serif);
            }

                h1, p {
                    margin: 0; /* Crucial para el UX: eliminar espacios por defecto */
                }
                .Card_Container{
                    flex: 1;
                    /* 1. Definimos un ancho fijo pero flexible */
                    width: 320px; 
                    
                    /* 2. Forzamos a que la card ocupe el 100% de la altura que le asigne el padre */
                    height: 100%; 
                    
                    /* 3. Mantenemos el modelo de caja para que el padding no sume al ancho */
                    box-sizing: border-box;
                    height: 100%;

                    border: 2px solid transparent;
                    border-radius: 8px;

                    padding: 20px 16px 20px 16px;
                    box-sizing: border-box;

                    background-image: linear-gradient(${cardBg}, ${cardBg}), ${borderGradient};
                    background-origin: border-box;
                    background-clip: padding-box, border-box;

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    
                    gap: 32px;

                    transition: var(--transition-normal);
                }
                .Card_Container:hover{
                    border: 2px solid rgba(156, 156, 156, 0.3);
                    transition: var(--transition-normal);
                }
                .Card_Subcontainer
                {
                    flex: 1;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                }
                .Info{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    width: 100%;
                }
                ::slotted(svg) {
                    width: 48px;
                    height: 48px;
                    fill: none; 
                    stroke: var(--color-tully-30); 
                    stroke-width: 1.5;
                }
                ::slotted(img) {
                    width: 100%;
                    height: auto;
                    border-radius: 4px;
                    object-fit: cover;
                }
                h1{
                    color: var(--color-tully-10);
                    margin:0;
                    font-family: var(--font-family-primary);
                    font-size: var(--font-size-h3);
                    line-height:var(--line-height-h3);
                    font-weight: var(--font-weight-semibold);
                }
                p{
                    color: var(--color-tully-10);
                    margin:0;
                    font-family: var(--font-family-primary);
                    font-size: var(--font-size-paragraph);
                    font-weight: var(--font-weight-regular);
                    line-height:var(--line-height-paragraph);
                    width: 100%;
                }
            </style>

        <div class="Card_Container">
            <div class="Card_Subcontainer">
                <slot name="image"></slot>
                <slot name="icon"></slot>
                <div class="Info">
                    <h1>${title}</h1>
                    <p>${text}</p>
                </div>
                ${button_text ? `<sh-button text="${button_text}" type="Primary"></sh-button>` : ''}
            </div>
        </div>
        `;
    }
    // Draw the component when the element is inserted at DOM
    connectedCallback() {
        this.render();
    }
}

customElements.define("sh-card", SH_Card);
