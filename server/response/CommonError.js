class CommonErrors {
  constructor(res, message, statuscode = 406) {
    this.res = res;
    this.message = message;
    this.statuscode = statuscode;
  }

  throw() {
    return this.res.status(this.statuscode).json({
      message: this.message,
      ok: false,
    });
  }
}

exports.CommonErrors = CommonErrors;
