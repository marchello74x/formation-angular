import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  personne: Personne = {};

  personnes: Array<Personne> = new Array<Personne>();

  constructor(private personneService: PersonneService) { }


  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.personneService.getAll().subscribe(res => {
      this.personnes = res;
    });
  }

  ajouterPersonne() {
    this.personneService.addPerson(this.personne).subscribe(res => {
      this.reloadData();
    });

  }

  supprimerPersonne(id: number) {
    this.personneService.deletePerson(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  
}
