import LandingPage from "./pages/landing";
import LoginPage from "./pages/login";

export function router() {
    const app = document.getElementById('app');
    const hash = window.location.hash;

    if(hash === '#/login') {
        app.innerHTML = LoginPage();
    } else if(hash === '#/signup') {
        app.innerHTML = SignupPage();
    } else if (hash === '#/dashboard') {
        app.innerHTML = DashboardPage();
    } else {
        app.innerHTML = LandingPage();
    }
}