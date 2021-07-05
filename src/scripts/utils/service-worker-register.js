import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const ServiceWorkerRegister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register();
    return;
  }
  console.log('Service worker not support this browser');
};

export default ServiceWorkerRegister;
