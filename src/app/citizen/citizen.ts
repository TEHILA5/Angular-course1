import { Component } from '@angular/core';

@Component({
  selector: 'app-citizen',
  imports: [],
  templateUrl: './citizen.html',
  styleUrl: './citizen.scss',
  styles: [`
    .c1 {
      border: 2px solid #555;
      padding: 10px;
    }
  `],
  host: {
    'style': 'display:block; margin:20px; background:white;'
  }
})
export class Citizen {
  public firstName: string = 'תהילה';
  public lastName: string = 'אלון';
  public idNumber: string = '216378364';
  public childrenCount: number = 0;
  public birthDate: Date = new Date(2006, 9, 18);
  public imageName: string = '2.png';
  public isIsraeli: boolean = true;

  public showImage: boolean = true;

  public getAge(): number {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    const m = today.getMonth() - this.birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) {
      age--;
    }
    return age;
  }

  public hideImage(): void {
    this.showImage = !this.showImage;
  }
}
