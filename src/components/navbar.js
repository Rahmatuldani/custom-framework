export default class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="nav-link">
                <a href="/" class="nav-link-item" data-link>Home</a>
                <a href="/admin" class="nav-link-item" data-link>Admin</a>
            </nav>
        `
    }
}
customElements.define('navbar-component', Navbar)