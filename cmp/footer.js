class Footer
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Elizabeth Elias Garcia
      </p>`;
  }
}

customElements.define(
  "footer", Footer);
