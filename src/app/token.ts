export class Token {
  token: string;
  data: string;
  header: string;
  constructor(header: 'x-access-token', ) {
    this.header = header;
  }
}