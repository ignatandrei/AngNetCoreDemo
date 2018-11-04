export class MyDiv {
  public x: number | string;
  public y: number | string;
  public validate(): boolean {
    if (!(typeof this.x === 'number')) {
      if (!(parseFloat(this.x).toString() === this.x)) {
        return false;
      }
    }

    if (!(typeof this.y === 'number')) {
        if (!(parseFloat(this.y).toString() === this.y)) {
          return false;
        }
      }
    return true;
  }
}
