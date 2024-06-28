// src/redux/middleware/errorHandler.js
const errorHandler = () => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    throw err;
  }
};

export default errorHandler;
