class CreateReview extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    
    <style>
      .create-review .content {
        margin-top: 50px;
        box-shadow: 4px 8px 15px 5px rgba(32, 31, 31, 0.2);
        padding: 30px 50px;
      }

      .create-review .content .card-title {
        margin-top: 20px;
        font-size: 34px;
        text-align: center;
      }

      .create-review .content .card-content {
        margin-top: 20px;
      }

      .create-review label {
        color: #30475e;
        font-weight: 600;
        font-size: 20px;
      }

      .create-review input,
      textarea,
      button {
        width: 100%;
        padding: 12px;
        margin: 8px 0;
        box-sizing: border-box;
        color: #30475e;
        font-weight: 400;
        font-size: 18px;
      }

      .create-review button {
        background-color: #30475e;
        color: #ffff;
      }

      .create-review button:hover {
        background-color: #3252df;
        cursor: pointer;
      }
    </style>

        <section class="create-review">
            <div class="content">
                <div class="card">
                    <h2 class="card-title">Form Review</h2>
                    <div class="card-content">
                      <form>
                          <div class="form-group">
                          <label for="name" class="form-label">Name</label>
                          <input
                              name="name"
                              type="text"
                              class="form-control"
                              id="name"
                          />
                          </div>
                          <div class="form-group">
                          <label for="review" class="form-label">Review</label>
                          <textarea
                              name="review"
                              id="review"
                              class="form-control"
                              cols="30"
                              rows="10"
                          ></textarea>
                          </div>
                          <button aria-label="add to review" id="submit" type="submit" class="btn2">
                            Submit
                          </button>
                      </form>
                    </div>
                </div>
            </div>
        </section>
    `;
  }
}

customElements.define('create-review', CreateReview);
