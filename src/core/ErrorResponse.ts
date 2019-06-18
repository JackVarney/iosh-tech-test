export class ErrorResponse {
  constructor(
    public title: string,
    public message: string,
    public status: number
  ) {}
}
