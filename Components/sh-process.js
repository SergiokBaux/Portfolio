class SH_Process extends HTMLElement{
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
            .Process_Screen{
                width: 100vw;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .Cards_Container{
                width: fit-content;
                max-width: 80vw;
                height: auto;

                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: stretch;
                
                gap: 40px;

                border: 1px solid aqua;
            }
            .Process_Container{
                width: fit-content;
                max-width: 80vw;
                height: auto;
                display: flex;
                flex-direction: column;
                gap: 28px;

                border: 1px solid red;
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
            @media (min-width: 1024px) {
                .Cards_Container{
                    flex-direction: row;
                }
            }
            @media (max-width: 1023px) {
                .Cards_Container{
                    flex-direction: column;
                }
            }
            </style>

            <div class="Process_Screen">
                <div class="Process_Container">
                    <h1 class="Title">How I work?</h1>
                    <div class="Cards_Container">
                        <sh-card title="Understand users" text="Explore users, context and constraints.">
                            <svg 
                                slot="icon" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg" 
                                stroke="currentColor" 
                                stroke-width="1.5" 
                                stroke-linecap="round" 
                                stroke-linejoin="round"
                            >
                                <path d="M7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20C7.35064 20 7.68722 19.9398 8 19.8293"></path>
                                <path d="M4.26392 15.6046C2.9243 14.9582 2.00004 13.587 2.00004 12C2.00004 10.7883 2.53877 9.70251 3.38978 8.96898"></path>
                                <path d="M3.42053 8.8882C3.1549 8.49109 3 8.01363 3 7.5C3 6.11929 4.11929 5 5.5 5C6.06291 5 6.58237 5.18604 7.00024 5.5"></path>
                                <path d="M7.23769 5.56533C7.08524 5.24215 7 4.88103 7 4.5C7 3.11929 8.11929 2 9.5 2C10.8807 2 12 3.11929 12 4.5V20"></path>
                                <path d="M8 20C8 21.1046 8.89543 22 10 22C11.1046 22 12 21.1046 12 20"></path>
                                <path d="M12 7C12 8.65685 13.3431 10 15 10"></path>
                                <path d="M20.6102 8.96898C21.4612 9.70251 22 10.7883 22 12C22 12.7031 21.8186 13.3638 21.5 13.9379"></path>
                                <path d="M20.5795 8.8882C20.8451 8.49109 21 8.01363 21 7.5C21 6.11929 19.8807 5 18.5 5C17.9371 5 17.4176 5.18604 16.9998 5.5"></path>
                                <path d="M12 4.5C12 3.11929 13.1193 2 14.5 2C15.8807 2 17 3.11929 17 4.5C17 4.88103 16.9148 5.24215 16.7623 5.56533"></path>
                                <path d="M14 22C12.8954 22 12 21.1046 12 20"></path>
                                <path d="M20.5 20.5L22 22"></path>
                                <path d="M16 18.5C16 19.8807 17.1193 21 18.5 21C19.1916 21 19.8175 20.7192 20.2701 20.2654C20.7211 19.8132 21 19.1892 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5Z"></path>
                            </svg>
                        </sh-card>
                        <sh-card title="Design solutions" text="Translate insights into flows and interfaces.">
                            <svg 
                                slot="icon" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg" 
                                stroke="currentColor" 
                                stroke-width="1.5" 
                                stroke-linecap="round" 
                                stroke-linejoin="round"
                            >
                                <path d="M20.5096 9.54C20.4243 9.77932 20.2918 9.99909 20.12 10.1863C19.9483 10.3735 19.7407 10.5244 19.5096 10.63C18.2796 11.1806 17.2346 12.0745 16.5002 13.2045C15.7659 14.3345 15.3733 15.6524 15.3696 17C15.3711 17.4701 15.418 17.9389 15.5096 18.4C15.5707 18.6818 15.5747 18.973 15.5215 19.2564C15.4682 19.5397 15.3588 19.8096 15.1996 20.05C15.0649 20.2604 14.8877 20.4403 14.6793 20.5781C14.4709 20.7158 14.2359 20.8085 13.9896 20.85C13.4554 20.9504 12.9131 21.0006 12.3696 21C11.1638 21.0006 9.97011 20.7588 8.85952 20.2891C7.74893 19.8194 6.74405 19.1314 5.90455 18.2657C5.06506 17.4001 4.40807 16.3747 3.97261 15.2502C3.53714 14.1257 3.33208 12.9252 3.36959 11.72C3.4472 9.47279 4.3586 7.33495 5.92622 5.72296C7.49385 4.11097 9.60542 3.14028 11.8496 3H12.3596C14.0353 3.00042 15.6777 3.46869 17.1017 4.35207C18.5257 5.23544 19.6748 6.49885 20.4196 8C20.6488 8.47498 20.6812 9.02129 20.5096 9.52V9.54Z"></path>
                                <path d="M8 16.01L8.01 15.9989"></path>
                                <path d="M6 12.01L6.01 11.9989"></path>
                                <path d="M8 8.01L8.01 7.99889"></path>
                                <path d="M12 6.01L12.01 5.99889"></path>
                                <path d="M16 8.01L16.01 7.99889"></path>
                            </svg>
                        </sh-card>
                        <sh-card title="Test & Improve" text="Prototype, test and refine solutions.">
                            <svg 
                            slot="icon" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            stroke="currentColor" 
                            stroke-width="1.5" 
                            stroke-linecap="round" 
                            stroke-linejoin="round"
                        >
                            <path d="M21.1679 8C19.6247 4.46819 16.1006 2 11.9999 2C6.81459 2 2.55104 5.94668 2.04932 11"></path>
                            <path d="M17 8H21.4C21.7314 8 22 7.73137 22 7.4V3"></path>
                            <path d="M2.88146 16C4.42458 19.5318 7.94874 22 12.0494 22C17.2347 22 21.4983 18.0533 22 13"></path>
                            <path d="M7.04932 16H2.64932C2.31795 16 2.04932 16.2686 2.04932 16.6V21"></path>
                            </svg>
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

customElements.define("sh-process", SH_Process);
