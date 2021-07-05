import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestaurantTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <pre-load></pre-load>
      <favorite-restaurant></favorite-restaurant>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#explore-content');
    const preload = document.querySelector('.sk-circle');
    const emptyRestaurant = document.querySelector('#empty');
    try {
      const restaurantsFavorites = await FavoriteRestoIdb.getAllResto();
      if (restaurantsFavorites.length !== 0) {
        preload.style.display = 'none';
        emptyRestaurant.style.display = 'none';
        restaurantsFavorites.forEach((restaurant) => {
          restaurantContainer.innerHTML += createRestaurantTemplate(restaurant);
        });
      } else {
        preload.style.display = 'none';
        emptyRestaurant.style.display = 'block';
      }
    } catch (error) {
      restaurantContainer.innerHTML = `${error},  Please refresh some time later`;
    }
  },
};

export default Favorite;
