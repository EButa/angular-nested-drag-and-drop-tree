import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject, SubjectSubscriber } from 'rxjs/internal/Subject';

export type Item = {
  id: string;
  name: string;
  children: Array<Item>;
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public data: Array<Item> = [];

  public invert: boolean = true;
  public onDragDrop$ = new Subject<CdkDragDrop<Array<Item>>>();

  constructor() {}

  ngOnInit() {
    this.data = [
      {
        id: '1',
        name: 'One',
        children: []
      },
      {
        id: '2',
        name: 'Two',
        children: []
      },
      {
        id: '3',
        name: 'Three',
        children: [
          {
            id: '3_1',
            name: 'Three One',
            children: []
          },
          {
            id: '3_2',
            name: 'Three Two',
            children: []
          },
          {
            id: '3_3',
            name: 'Three Three',
            children: []
          }
        ]
      }
    ];

    this.onDragDrop$.subscribe(this.onDragDrop);
  }


  private onDragDrop = (event: CdkDragDrop<Array<Item>>) => {
    if (event.container === event.previousContainer) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  };
}
