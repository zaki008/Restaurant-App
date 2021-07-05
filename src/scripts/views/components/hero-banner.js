class HeroBanner extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <style>
      .hero-content {
        justify-content: center;
        margin: 0 auto;
        max-width: 800px;
      }

      .hero-content h1 {
        color: #3252df;
        font-weight: 700;
        font-size: 32px;
      }

      .hero-content p {
        margin-top: 8px;
        color: #ffff;
        font-size: 18px;
        font-weight: 500;
      }
    </style>

        <div tabindex="0" class="hero" class="lazyload">
          <div class="hero-content">
              <h1>Get the Best Indonesian Restaurant</h1>
              <p>there are many Indonesian restaurant of the highest quality here</p>
          </div>
        </div>
      `;
  }
}

customElements.define('hero-banner', HeroBanner);
