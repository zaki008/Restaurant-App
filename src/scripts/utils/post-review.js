import RestaurantSource from '../data/restaurant-source';

const PostReview = (url, name, review) => {
  const input = {
    id: url.id,
    name,
    review,
  };
  RestaurantSource.newReview(input);
};

export default PostReview;
