import LandingPage from "./pages/landing";
export function router() {
    const app = document.getElementById('app');
    const hash = window.location.hash;

    if(hash === '') {
        app.innerHTML = LandingPage();
    }
}