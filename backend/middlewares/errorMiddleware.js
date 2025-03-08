const errorMiddleware = (err, req, res, next) => {
  // Log only relevant information (e.g., err.message, err.name, or stack trace if needed)
  console.error(`Error occurred: ${err.message}`);

  let errorMessage = {
    statusCode: 500,
    message: "Internal Server Error", // Default fallback message
  };

  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    errorMessage.statusCode = 400;
    errorMessage.message = Object.values(err.errors)
      .map((eachErr) => eachErr.message)
      .join(", ");
  }

  // Handle duplicate key error (MongoDB)
  if (err.code && err.code === 11000) {
    errorMessage.statusCode = 400;
    errorMessage.message = `${Object.keys(err.keyValue).join(
      ", "
    )} field must be unique.`;
  }

  // Handle JWT Errors
  if (err.name === "JsonWebTokenError") {
    errorMessage.statusCode = 401;
    errorMessage.message = "Invalid token. Please provide a valid JWT.";
  }

  if (err.name === "TokenExpiredError") {
    errorMessage.statusCode = 401;
    errorMessage.message = "Token expired. Please log in again.";
  }

  if (err.name === "NotBeforeError") {
    errorMessage.statusCode = 401;
    errorMessage.message =
      "Token not yet active. Please wait until it becomes valid.";
  }

  // Send response with status and message
  res.status(errorMessage.statusCode).json({ message: errorMessage.message });
};

export default errorMiddleware;
