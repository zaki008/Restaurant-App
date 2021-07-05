/* eslint-disable max-len */
/* eslint-disable no-shadow */
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantTemplate } from '../templates/template-creator';

const Homepage = {
  async render() {
    return `
      <pre-load></pre-load>
      <explore-restaurant></explore-restaurant>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#explore-content');
    const preload = document.querySelector('.sk-circle');
    try {
      const restaurants = await RestaurantSource.homepage();
      preload.style.display = 'none';
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantTemplate(restaurant);
      });
    } catch (error) {
      restaurantContainer.innerHTML = `${error}, Please refresh some time later`;
    }
  },
};

export default Homepage;
