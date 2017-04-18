import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.css']
})
export class MyContainerComponent implements OnInit {

  maxItem = 3;
  member = Math.pow(this.maxItem, 2);

  collections: ImageBlock[] = [];

  constructor() { }

  ngOnInit() {

    for (let i = 0; i < this.member; i++) {
      // const isDummy = (i + 1) === this.member;
      let isDummy = false;
      // if (i === 4) { isDummy = true; }
      if (i === (this.member - 1)) { isDummy = true; }

      const col = (i % this.maxItem);
      const row = Math.floor(i / this.maxItem);

      const objBlock = new ImageBlock(i.toString(), col, row, isDummy);

      this.collections.push(objBlock);
    }
  }

  public detect(source: ImageBlock) {

    if (source.isDummy) {
      console.log('click on dummy');
      return;
    }
    console.log('click on ' + source.text);

    const TOP = -(this.maxItem);
    const BOTTOM = this.maxItem;
    const RIGHT = 1;
    const LEFT = -1;

    const srcIndex = this.collections.indexOf(source);

    let descIndex = this.findDummyIndex(srcIndex, TOP);
    if (descIndex !== -1) {
      this.doSwap(srcIndex, descIndex, TOP.toString());
      return;
    }

    descIndex = this.findDummyIndex(srcIndex, BOTTOM);
    if (descIndex !== -1) {
      this.doSwap(srcIndex, descIndex, BOTTOM.toString());
      return;
    }

    if (srcIndex % 3 !== 2) {
      // do not check right
      descIndex = this.findDummyIndex(srcIndex, RIGHT);
      if (descIndex !== -1) {
        this.doSwap(srcIndex, descIndex, RIGHT.toString());
        return;
      }
    }

    if (srcIndex % 3 !== 0) {
      // do not check left
      descIndex = this.findDummyIndex(srcIndex, LEFT);
      if (descIndex !== -1) {
        this.doSwap(srcIndex, descIndex, LEFT.toString());
        return;
      }
    }

  }

  public findDummyIndex(srcIndex: number, position: number) {
    const obj = this.collections[srcIndex + position];
    return (obj !== undefined && obj.isDummy) ? (srcIndex + position) : -1;
  }

  public doSwap(srcIndex: number, descIndex: number, from: string) {
    const temp = this.collections[srcIndex];
    this.collections[srcIndex] = this.collections[descIndex];
    this.collections[descIndex] = temp;
    // console.log('move dummy at ' + from + ' - (' + '' + ')');
  }

}

export class ImageBlock {
  constructor(
    public text: string,
    public col: number,
    public row: number,
    public isDummy: boolean) {
  }

}

