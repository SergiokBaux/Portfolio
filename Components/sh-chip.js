class SHChip extends HTMLElement {
  static get observedAttributes() {
    return ["text"];
  }
  constructor() {
    super();
    //Creates a private shadow DOM to the component, (this helps to not mix the provate DOM with the rest).
    this.attachShadow({ mode: "open" });
  }
  //Creates a render function to draw the element.
  render() {
    const Chiptext = this.getAttribute("text");

    this.shadowRoot.innerHTML = `
    <style>
      :host{
        display:inline-block;
      }
      .Chip_Container{
          width: fit-content;
          min-height: 36px;
          padding: 0 12px;

          display:inline-flex;
          align-items:center;
          border: 1px solid var(--color-arryn-50);
          background-color: var(--color-arryn-80);

          color: var(--color-snow-60);
          border-radius: 999px;

          font-family: var(--font-family-primary);
          font-size: var(--font-size-label);
          font-weight: var(--font-weight-regular);
          line-height: var( --line-height-label);

          transition: all var(--transition-normal);

      }
      .Chip_Container:hover{
          border: 1px solid var(--color-arryn-40);

          transition: all var(--transition-normal);

      }
    </style>

    <div class="Chip_Container">
        ${Chiptext}
    </div>
    `;
  }

    connectedCallback() {
        this.render();
    }
}

customElements.define("sh-chip", SHChip);