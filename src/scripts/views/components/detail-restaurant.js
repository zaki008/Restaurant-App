class DetailRestaurant extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `

    <style>
      #detail .content-detail {
        margin-top: 50px;
        box-shadow: 4px 8px 15px 5px rgba(32, 31, 31, 0.2);
        padding: 30px 50px;
      }

      #detail .content-detail .card-title {
        margin-top: 20px;
        font-size: 34px;
      }

      #detail .content-detail .card-title span {
        color: #3252df;
      }

      #detail .content-detail .card-content {
        margin-top: 20px;
      }

      #detail .card-content img {
        display: block;
        width: 550px;
        margin: auto;
        margin-bottom: 30px;
        border-radius: 8px;
      }

      #detail table {
        margin-top: 60px;
        border-collapse: collapse;
        width: 100%;
      }

      #detail tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      #detail th {
        font-size: 18px;
        text-align: left;
        padding: 16px;
        color: #30475e;
        font-weight: 700;
      }
      #detail td {
        text-align: justify;
        padding: 16px;
        color: #30475e;
        font-weight: 400;
        font-size: 16px;
      }
    </style>

      <article id="detail"></article>
      <div id="likeButtonContainer"></div>
      `;
  }
}

customElements.define('detail-restaurant', DetailRestaurant);
