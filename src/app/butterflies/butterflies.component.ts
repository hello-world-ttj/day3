import { Component } from '@angular/core';

@Component({
  selector: 'app-butterflies',
  templateUrl: './butterflies.component.html',
  styleUrls: ['./butterflies.component.css']
})
export class ButterfliesComponent {
  
  database = [
    {
      "name": "Hedylidae",
      "img" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Macrosoma_sp_%28Hedylidae%29_%2815273846876%29.jpg/2560px-Macrosoma_sp_%28Hedylidae%29_%2815273846876%29.jpg"
    },
    {
      "name": "Hesperiidae",
      "img" : "https://upload.wikimedia.org/wikipedia/commons/0/02/Hesperia_comma-01_%28xndr%29.jpg"
    },
    {
      "name": "Pieridae",
      "img" : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Large_white_spread_wings.jpg/1920px-Large_white_spread_wings.jpg"
    },
    {
      "name": "Nymphalidae",
      "img" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/AD2009Aug01_Vanessa_atalanta_01.jpg/2560px-AD2009Aug01_Vanessa_atalanta_01.jpg"
    },
    {
      "name": "Papilionidae",
      "img" : "https://upload.wikimedia.org/wikipedia/commons/8/8c/Papilio_troilus01.jpg"
    },
    {
      "name": "Lycaenidae",
      "img" : "https://upload.wikimedia.org/wikipedia/commons/8/8f/Maculinea_arion_Large_Blue_Upperside_SFrance_2009-07-18.jpg"
    },
    {
      "name": "Riodinidae",
      "img" : "https://upload.wikimedia.org/wikipedia/commons/c/c3/RhetusButterfly.jpg"
    },
    {
      "name": "Papilio machaon",
      "img" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Fesoj_-_Papilio_machaon_%28by%29.jpg/440px-Fesoj_-_Papilio_machaon_%28by%29.jpg"
    }
  ]
}
