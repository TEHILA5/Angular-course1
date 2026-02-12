import { Component } from '@angular/core';

@Component({
  selector: 'app-citizen',
  imports: [],
  templateUrl: './citizen.html',
  styleUrl: './citizen.scss',
  styles: [` 
    :host {
      display: block;
      width: 300px;  
      background: #ffffff;
      border-radius: 15px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      padding: 20px;
      transition: transform 0.3s ease;
      margin-bottom: 30px;
    }

    :host:hover {
      transform: translateY(-5px);  
    }
 
    .c1 { 
      gap: 10px;
      color: #34495e;
    }
 
    img {
      width: 70%;
      height: 90%;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 15px;
      border: 1px solid #ddd;
    }
 
    button {
      width: 100%;
      background-color: #702388;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
      margin-top: 15px;
    }

    button:hover {
      background-color: #3a0b41;
    }
  `]
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
