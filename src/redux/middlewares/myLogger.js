const myLogger = (store) => (next) => (action) => {
   console.log(`Action: ${JSON.stringify(action)}`);
   console.log(`Previous State: ${JSON.stringify(store.getState())}`);

   return next(action);
};

export default myLogger;
