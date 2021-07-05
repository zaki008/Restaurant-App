class FavoriteRestaurant extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <style>
      #explore .content-explore .box-explore {
        box-shadow: 4px 8px 5px 0 rgba(32, 31, 31, 0.2);
        padding: 10px 20px;
        margin-top: 20px;
      }

      #explore .content-explore .box-explore .badge {
        display: inline-block;
        background: #fb2775;
        border-radius: 0 8px;
        color: #ffff;
        font-size: 14px;
        padding: 6px;
        position: absolute;
        z-index: 1;
      }

      #explore .content-explore .box-explore .subtitle {
        color: #b0b0b0;
        text-align: justify;
        font-weight: 400;
        font-size: 12px;
      }

      .link-explore {
        margin-top: 20px;
        margin-bottom: 10px;
      }

      .btn-primary {
        margin: auto;
        background-color: #30475e;
        border-radius: 8px;
        padding: 12px 24px;
        text-align: center;
        color: white;
        text-decoration: none;
        display: inline-block;
        font-size: 18px;
        cursor: pointer;
        box-shadow: 0px 2px 4px #30475e;
      }

      .btn-primary:hover {
        background-color: #3252df;
      }
    </style>

        <article id="explore">
            <h2 tabindex="0">Favorite Restaurant</h2>
             <div id="resto-empty">
                <h1 style="text-align: center" id="empty">Tidak ada restoran untuk ditampilkan.</h1>
            </div>
            <div id="explore-content" class="content-explore"></div>
        </article>
    `;
  }
}

customElements.define('favorite-restaurant', FavoriteRestaurant);
