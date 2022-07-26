import { Component } from '@angular/core';
      
@Component({
    selector: 'my-app',
    template: `<p>Количество кликов {{count}}</p>
                <button (click)="increase()">+1</button>
                <button *ngIf="count > 0; else elseBlock" (click)="decrease()">-1</button>         
                <ng-template #elseBlock></ng-template>`
})
export class AppComponent { 
    count: number=0;
    increase() : void {
        this.count++;
    }
    decrease() : void {
        this.count--;
        
    }
   
}