import "../pages"
import "../pages/admin"
import "../pages/errors/notFound"
import "../components/navbar"

export function router() {
    const app = document.getElementById('app');
    const route = window.location.pathname;
    app.innerHTML = ''
    app.appendChild(document.createElement('navbar-component'))

    switch(route) {
        case '/admin':
            app.appendChild(document.createElement('admin-page'))
            break;
        case '/':
            app.appendChild(document.createElement('home-page'))
            break;
        default: 
            app.appendChild(document.createElement('not-found-page'))
            break;
    }
}