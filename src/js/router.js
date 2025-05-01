import LandingPage from "./pages/landing";
import DashboardPage from "./pages/dashboard";

export function router() {
    const app = document.getElementById('app');
    const hash = window.location.hash;

    if(hash === '#/dashboard') {
        app.innerHTML = DashboardPage();
    } else {
        app.innerHTML = LandingPage();
    }
}