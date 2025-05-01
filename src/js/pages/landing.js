import heroImage from '../../assets/img/work-team-art.jpg';

export default function LandingPage() {
  return `
      <header class="header">
        <a href="#" class="logo">Memo<span>a</span></a>
      </header>

      <section class="hero">
        <div class="hero__content">
          <div class="hero__content-info">
            <div class="hero__content-up">
              <h3>Simple Notes Planning Tools</h3>
            </div>
            
            <div class="hero__content-term">
              <h2><span class="create">Create.</span> Organize.</h2>
              <h2>Clean. <span class="easy">Easy.</span></h2>
              <p>Capture your ideas effortlessly. Stay focused and keep everything organized in one place with Memoa Notes.</p>
            </div>

            <div class="hero__button">
              <a href="#/dashboard" class="started-btn">Get Started</a>
            </div>
          </div>

          <div class="hero__image">
            <img src="${heroImage}" alt="work-team-art">
          </div>
        </div>
      </section>

      <section class="about">
      
      </section>
    `;
}
