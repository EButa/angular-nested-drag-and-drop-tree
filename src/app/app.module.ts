import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { DragAndDropManagerService } from './drag-and-drop-manager.service';
import {
  DragAndDropManagerDirective,
  DragAndDropManagerRootDirective
} from './drag-and-drop-manager.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, MatCardModule, DragDropModule],
  declarations: [
    AppComponent,
    ItemComponent,
    DragAndDropManagerDirective,
    DragAndDropManagerRootDirective
  ],
  bootstrap: [AppComponent],
  providers: [DragAndDropManagerService]
})
export class AppModule {}
