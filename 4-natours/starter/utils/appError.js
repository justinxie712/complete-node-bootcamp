class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }

  static catchAsync(fn) {
    return (req, res, next) => {
      fn(req, res, next).catch(next);
    };
  }

  static handleCastErrorDB(err) {
    const message = `Invalid ${err.path}: ${err.value}`;
    return new AppError(message, 400);
  }

  static handleDuplicateFieldsDB(err) {
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
    const message = `Duplicate field value: ${value}. Please use another value!`;
    return new AppError(message, 400);
  }

  static handleValidationErrorDB(err) {
    const errors = Object.values(err.errors).map((el) => el.message);
    const message = `Invalid input data. ${errors.join('. ')}`;
    return new AppError(message, 400);
  }
}

module.exports = AppError;
