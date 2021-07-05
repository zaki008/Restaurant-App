class ReviewUser extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `

    <style>
      .review .content {
        margin-top: 70px;
        box-shadow: 4px 8px 15px 5px rgba(32, 31, 31, 0.2);
        padding: 30px 50px;
      }

      .review h2 {
        font-size: 34px;
      }

      .review .content .card-content {
        margin-top: 30px;
      }

      .review .content .card-content .box-review {
        box-shadow: 2px 2px 4px 4px #30475e;
        border: 1px solid #404b7a;
        padding: 10px 20px;
        margin-top: 30px;
      }

      .review .content .card-content .box-review .title {
        color: #3252df;
        font-weight: 600;
        font-size: 24px;
      }

      .review .content .card-content .box-review .subtitle {
        margin-top: 12px;
        color: #30475e;
        font-weight: 500;
        font-size: 16px;
      }

      .review .content .card-content .box-review .date {
        margin-top: 12px;
        color: #b0b0b0;
        font-weight: 400;
        font-size: 12px;
      }
    </style>
        <section class="review">
            <div class="content">
                <div class="card">
                    <h2 class="card-title">Review User</h2>
                    <div class="card-content" id="card-content"></div>
                </div>
            </div>
        </section>`;
  }
}

customElements.define('review-user', ReviewUser);
