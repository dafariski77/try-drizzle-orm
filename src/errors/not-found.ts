import CustomApiError from "./custom-error";

export default class NotFoundError extends CustomApiError {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 404;
  }
}
