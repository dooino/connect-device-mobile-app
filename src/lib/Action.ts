export class Action {
  private name: string;
  private endpoint: string;

  constructor(name: string, endpoint: string) {
    this.name = name;
    this.endpoint = endpoint;
  }

  public getName(): string {
    return this.name;
  }

  public getEndpoint(): string {
    return this.endpoint;
  }
}
