import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/style.css';
import './views/components/pre-load';
import './views/components/hero-banner';
import './views/components/header-navigation';
import './views/components/footer-restaurant';
import './views/components/explore-restaurant';
import './views/components/detail-restaurant';
import './views/components/create-review';
import './views/components/review-user';
import './views/components/favorite-restaurant';
import App from './views/app';
import ServiceWorkerRegister from './utils/service-worker-register';
import NotificationHelper from './utils/notification-helper';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  ServiceWorkerRegister();
  NotificationHelper.sendNotification({
    title: 'Notifikasi Restaurant Test',
    Options: { body: 'Ini merupakan test notikasi restaurant' },
  });
});

export default app;
