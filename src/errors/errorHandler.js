import ApiError from './apiErrors.js';

export default (err, req, res) => {
  let message = 'Something went wrong';
  let status = 500;

  if (err instanceof ApiError) {
    message = err.message;
    status = err.statusCode;
  }

  res.status(status).send({ code: status, message });
};
