import { router } from "./src/router";
import './public/css/styles.css'

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () => {
    console.log("Rendered")
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            history.pushState(null, '', e.target.href);
            router();
        }
    })
    router();
})