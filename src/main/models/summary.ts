export class Summary {
  constructor(
    public readonly count: number,
    public readonly avg: number,
    public readonly std: number,
  ) {}

  public static empty(): Summary {
    return new Summary(0, 0, 0);
  }
}
