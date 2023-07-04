import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
   
  constructor(private route:Router)
  {

  }

  Register(){
    this.route.navigate(['register']);
  }
  login(){
    this.route.navigate(['logIN']);
  }
  ngOnInit(): void {

    window.addEventListener('load', () => {
      const image = document.getElementById('animatedImage1');
      if (image) {
        const imagePosition = image.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (imagePosition < windowHeight) {
          image.classList.add('animate');
        } else {
          image.classList.remove('animate');
        }
      }
    })
  }

  // ngOnInit(): void {
  //   window.addEventListener('scroll', () => {
  //     const image = document.getElementById('animatedImage1');
  //     if (image) {
  //       const imagePosition = image.getBoundingClientRect().top;
  //       const windowHeight = window.innerHeight;
  //       const imageWidth = image.offsetWidth;
  //       if (imagePosition < windowHeight) {
  //         image.classList.add('animate');
  //         const imageCenter = (window.innerWidth / 2) - (imageWidth / 2);
  //         image.style.left = `${imageCenter}px`;
  //       } else {
  //         image.classList.remove('animate');
  //         image.style.left = '34%'; // Reset to original position
  //       }
  //     }
  //   });
  // }
  

}
