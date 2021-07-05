class FooterRestaurant extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    
    <style>
      footer {
        width: 100%;
        margin-top: 100px;
        text-align: center;
        align-items: center;
        background: rgb(252, 252, 252);
      }

      footer .content-footer {
        margin: 50px 10%;
      }

      footer .content-footer .box-footer {
        padding-top: 30px;
      }

      footer .content-footer .box-footer h1 {
        color: #30475e;
        font-weight: 700;
      }

      footer .content-footer .box-footer h1 span {
        color: #3252df;
      }

      footer .content-footer .box-footer .title {
        margin-top: 8px;
        color: #30475e;
        font-weight: 600;
        font-size: 20px;
      }

      footer .content-footer .box-footer .subtitle {
        margin-top: 4px;
        color: #b0b0b0;
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
      }

      footer .content-footer .box-footer ul {
        list-style-type: none;
      }

      .copyright {
        margin-top: 50px;
        color: #b0b0b0;
        font-size: 16px;
        padding-bottom: 50px;
      }
    </style>

        <footer>
        <div class="content-footer">
            <div class="box-footer">
            <h1 tabindex="0"><span>Resto</span>Indonesia</h1>
            <p tabindex="0" class="subtitle">
                Website Penyedia berbagai macam referensi Restoran-Restoran terbaik
                di Indonesia untuk Anda dan Keluarga Anda
            </p>
            </div>
            <div class="box-footer">
            <h1 tabindex="0">Contact Info</h1>
            <ul>
                <li tabindex="0">
                <p class="title">Address:</p>
                <p class="subtitle">Jl.Pancoran Raya no 50</p>
                </li>
                <li tabindex="0">
                <p class="title">Phone:</p>
                <p class="subtitle">(+62) 85709436281</p>
                </li>
                <li tabindex="0">
                <p class="title">E-mail:</p>
                <p class="subtitle">Admin@resto.com</p>
                </li>
            </ul>
            </div>
            <div class="box-footer sosmed">
            <h1 tabindex="0">Sosial Media</h1>
            <ul>
                <li tabindex="0">
                <p class="title">Instagram:</p>
                <p class="subtitle">resto_indonesia</p>
                </li>
                <li tabindex="0">
                <p class="title">Facebook:</p>
                <p class="subtitle">Resto Indonesia</p>
                </li>
                <li tabindex="0">
                <p class="title">Twitter:</p>
                <p class="subtitle">@resto_indonesia</p>
                </li>
            </ul>
            </div>
        </div>
        <div class="copyright">
            <p tabindex="0">Copyright &#169; 2021 - RestoIndonesia Website</p>
        </div>
        </footer>
      `;
  }
}

customElements.define('footer-restaurant', FooterRestaurant);
