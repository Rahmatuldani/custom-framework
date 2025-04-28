export default class AdminPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>Admin Page</h1>
            <custom-element></custom-element>
        `
    }
}
customElements.define('admin-page', AdminPage)