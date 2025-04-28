export default class NotFound extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>Not Found Page</h1>
        `
    }
}
customElements.define('not-found-page', NotFound)