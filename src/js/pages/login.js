export default function LoginPage() {
    return `
        <div class="login__container">
            <div class="login">
                <form action="">
                    <h2>Login</h2>
                    <div class="input-box">
                        <input type="text" required />
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox"/> Remember me</label>
                    </div>
                    <button type="submit" class="login-btn">Login</button>
                    <div class="register-link">
                        <p>Don't have an account? <a href="#/signup" class="signup-btn">Sign Up</a></p>
                    </div>
                </form>
            </div>
        </div>
    `
}