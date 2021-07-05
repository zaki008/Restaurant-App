/* eslint-disable no-alert */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate,
  createReviewUserTemplate,
} from '../templates/template-creator';
import PostReview from '../../utils/post-review';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
      <pre-load></pre-load>
      <detail-restaurant></detail-restaurant>
      <review-user></review-user>
      <create-review></create-review>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const preload = document.querySelector('.sk-circle');
    const restaurantContainer = document.querySelector('#detail');
    const reviewContainer = document.querySelector('#card-content');

    const nameReview = document.querySelector('#name');
    const inputReview = document.querySelector('#review');
    const btnSubmit = document.querySelector('#submit');
    try {
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      preload.style.display = 'none';
      restaurantContainer.innerHTML += createRestaurantDetailTemplate(restaurant.restaurant);
      reviewContainer.innerHTML += createReviewUserTemplate(restaurant.restaurant);

      btnSubmit.addEventListener('click', async (event) => {
        event.preventDefault();
        if (nameReview.value === '' || inputReview.value === '') {
          alert('Inputan tidak boleh ada yang kosong');
          nameReview.value = '';
          inputReview.value = '';
        } else {
          PostReview(url, nameReview.value, inputReview.value);
          alert('Sukses Menambahkan review');
          nameReview.value = '';
          inputReview.value = '';
        }
      });

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavoriteRestoIdb,
        restaurant: {
          id: url.id,
          name: restaurant.restaurant.name,
          pictureId: restaurant.restaurant.pictureId,
          city: restaurant.restaurant.city,
          rating: restaurant.restaurant.rating,
          description: restaurant.restaurant.description,
        },
      });
    } catch (error) {
      restaurantContainer.innerHTML = `${error}, Please refresh some time later`;
      reviewContainer.innerHTML = `${error}`;
    }
  },

};

export default Detail;
