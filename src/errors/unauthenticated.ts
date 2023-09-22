import CustomApiError from "./custom-error";

export default class UnauthenticatedError extends CustomApiError {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 401;
  }
}
