import CONFIG from '../../globals/config';

const createRestaurantTemplate = (restaurants) => `
  <div class="box-explore">
      <div tabindex="0" class="image">
          <div class="badge">Kota ${restaurants.city}</div>
          <div class="products-thumbnail">
              <a href="${`/#/detail/${restaurants.id}`}"><img class="lazyload" data-src="${`${CONFIG.BASE_IMG_URL_MEDIUM}${restaurants.pictureId}`}" 
              alt="${restaurants.name}" /></a>
          </div>
      </div>
      <p tabindex="0" class="rating">Rating: ${restaurants.rating}</p>
      <h3 tabindex="0" class="title">${restaurants.name}</h3>
      <p tabindex="0" class="subtitle">${restaurants.description}</p>

      <div class="link-explore">
          <h3><a href="${`/#/detail/${restaurants.id}`}" class="btn-primary">Detail</a></h3>
      </div>
  </div>`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div tabindex="0" class="content-detail">
    <div class="card">
      <h2 class="card-title">Detail <span>${restaurant.name}</span></h2>
      <div class="card-content">
        <img class="lazyload" tabindex="0" data-src="${`${CONFIG.BASE_IMG_URL_MEDIUM}${restaurant.pictureId}`}" 
        alt="${restaurant.name}" />
        <table tabindex="0">
          <tr>
            <th>Alamat :</th>
            <td>${restaurant.address}</td>
          </tr>
          <tr>
            <th>Kategori Menu :</th>
            <td>
              <ol>
                ${restaurant.categories
    .map((category) => `${category.name}`)
    .join(', ')}
              </ol>
            </td>
          </tr>
          <tr>
            <th>Menu Makanan :</th>
            <td> 
              <ol>
                ${restaurant.menus.foods
    .map((food) => `${food.name}`)
    .join(', ')}
              </ol>
            </td>
          </tr>
          <tr>
            <th>Menu Minuman :</th>
            <td>
              <ol>
                ${restaurant.menus.drinks
    .map((drink) => `${drink.name}`)
    .join(', ')}
              </ol>
            </td>
          </tr>
            <tr>
            <th>Rating :</th>
            <td>${restaurant.rating}</td>
          </tr>
            <tr>
            <th>Customer Review :</th>
            <td>
              <ol> 
              ${restaurant.customerReviews
    .map((review) => `${review.name}`)
    .join(', ')}
              </ol>
            </td>
          </tr>
          <tr>
            <th>Description:</th>
            <td>${restaurant.description}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>`;

const createReviewUserTemplate = (restaurant) => `
  ${restaurant.customerReviews
    .map(
      (review) => `
       <div class="box-review">
           <h3 tabindex="0" class="name">${review.name}</h3>
             <p tabindex="0" class="review">
                  ${review.review}
              </p>
            <p tabindex="0" class="date">${review.date}</p>
        </div>
    `,
    )
    .join('')}
`;

const createLikeRestaurantButtonTemplate = () => `  
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  createReviewUserTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
