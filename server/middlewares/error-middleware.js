const errorMiddleware = (err, req, resp, next) => {
  const status = err.status || 500;
  const message = err.message || "BACKEND ERROR";
  const extraDetails = err.extraDetails[0] || "Error from backend";

  return resp.status(status).json({extraDetails,message});
};

module.exports = errorMiddleware;
