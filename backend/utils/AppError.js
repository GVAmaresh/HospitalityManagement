class AppError {
  constructor(res, message, statusCode = 500) {
    this.res = res;
    this.message = message;
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    return res
      .status(this.statusCode)
      .json({ status: this.status, message: this.message });
  }
}
module.exports = AppError;