export class RequestResponse {
  message: string;
  data: any;
  constructor(message: string, data: any) {
    this.message = message;
    this.data = data;
  }
}
