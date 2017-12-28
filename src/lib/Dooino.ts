import {Action} from "./Action";

export class Dooino {
  private id: string;
  private name: string;
  private type: string;
  private ip: string;
  private address: string;
  private ins: Action[];
  private outs: Action[];

  constructor(
    id: string,
    name: string,
    type: string,
    ip: string,
    address: string,
    ins: Action[],
    outs: Action[]
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.ip = ip;
    this.address = address;
    this.ins = ins;
    this.outs = outs;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getType(): string {
    return this.type;
  }

  public getIp(): string {
    return this.ip;
  }

  public getAddress(): string {
    return this.address;
  }

  public inActions(): Action[] {
    return this.ins;
  }

  public outActions(): Action[] {
    return this.outs;
  }
}
