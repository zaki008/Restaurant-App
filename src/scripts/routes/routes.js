import Homepage from '../views/pages/homepage';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Homepage,
  '/homepage': Homepage,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
