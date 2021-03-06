import { createApp } from './app.js';

export default context => {
  // since there could potentially be asynchronous route hooks or components,
  // we will be returning a Promise so that the server can wait until
  // everything is ready before rendering.
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp();
    const meta = app.$meta();

    // set server-side router's location
    router.push(context.url);
    context.meta = meta;
      
    // wait until router has resolved possible async components and hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      // no matched routes, reject with 404
      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }

      context.rendered = () => {
        // after app is rendered add the state to the template
        context.state = store.state
      }
  
      // the Promise should resolve to the app instance so it can be rendered
      return resolve(app);
    }, reject);
  });
}