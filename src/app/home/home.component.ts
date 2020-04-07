import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Bienvenue chez MyElectricity';
  help = "Besoin d'aide ? Contactez-nous au 01 23 45 67 89";
  modaltitle = 'Bonjour !';
  content = 'Vous souhaitez produire de l’électricité “verte” grâce à des panneaux photovoltaïque ? Avec ou sans batterie ?';
  content1 = 'Vous souhaitez poser vous-même votre kit ou le faire installer ?';
  content2 = 'Découvrez notre configurateur qui vous permettra de dimensionner votre installation en quelques minutes.'; 
  content3 = 'N’hésitez pas à prendre contact avec nous pour toutes questions !';
  modalgreeting = 'A très bientôt !';

  constructor() { }

  ngOnInit(): void {
  }

}
