import CustomApiError from "./custom-error";

export default class BadRequestError extends CustomApiError {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 400;
  }
}
