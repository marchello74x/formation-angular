import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {

  nom: string;
  prenom: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.nom = res.get('nom');
      this.prenom = res.get('prenom');
      console.log(this.nom + ' ' + this.prenom);
    });
  }
}
