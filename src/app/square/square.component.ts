import { Component, Input } from "@angular/core";

@Component({
  selector: "app-square",
  template: `
    <div nbButton *ngIf="!value">{{ value }}</div>
    <button nbButton shape="semi-round"  *ngIf="value == 'X'">
      {{ value }}
    </button>
    <button nbButton shape="semi-round"  *ngIf="value == 'O'">
      {{ value }}
    </button>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() value: "X" | "O";
}
