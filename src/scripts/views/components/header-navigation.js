class HeaderNavigation extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <header>
            <a href="#maincontent" class="skip-link">Menuju ke konten</a>
            <h1 tabindex="0"><span>Resto</span>Indonesia</h1>
            <a id="hamburger" href="#">☰</a>
            <nav id="drawer">
                <ul>
                <li><a href="#/homepage">Home</a></li>
                <li><a href="#/favorite">Favorite Restaurant</a></li>
                <li>
                    <a href="https://www.instagram.com/zakiyamani_08/">About Us</a>
                </li>
                </ul>
            </nav>
        </header>
      `;
  }
}

customElements.define('header-navigation', HeaderNavigation);
