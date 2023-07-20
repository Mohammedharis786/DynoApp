import { Injectable } from '@angular/core';
import {  cardsData }  from 'src/app/shared/cards';
@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }


  getAll():cardsData[]{
    return [ 
      {
        imageurl:'./assets/image 72.png',
        tags:['#tag abc','#tag 1','#hashtag ABC'],
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        title:'Pocket ATM',
        imgback:'./assets/Ellipse 95.png',
      },
      {
        imageurl:'./assets/Dyno logo.png',
        tags:['#tag abc','#tag 1','#hashtag ABC'],
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        title:'Dyno',
        imgback:'./assets/Ellipse 95.png',
      },
      {
        imageurl:'./assets/ls-black.png',
        tags:['#tag abc','#tag 1','#hashtag ABC'],
        text:'Pocket ATM is an application that enables flexible, efficient & seamless cash & credit management',
        title:'LifeSenze',
        imgback:'./assets/Ellipse 95.png',
      },
      {
        imageurl:'./assets/cal_logo_text 1.png',
        tags:['#tag abc','#tag 1','#hashtag ABC'],
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        title:'CAL',
        imgback:'./assets/Ellipse 95.png',
      },
      {
        imageurl:'./assets/Group 206.png',
        tags:['#tag abc','#tag 1','#hashtag ABC'],
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        title:'Artist Pass',
        imgback:'./assets/Ellipse 95.png',
      },
      {
        imageurl:'./assets/idea 3.png',
        tags:['#tag abc','#tag 1','#hashtag ABC'],
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        title:'Project Idea',
        imgback:'./assets/Ellipse 95.png',
      }
    ]
  }
}
