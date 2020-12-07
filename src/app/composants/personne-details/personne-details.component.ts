import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonneService } from 'src/app/services/personne.service';
import { Personne } from 'src/app/interfaces/personne';

@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.css']
})
export class PersonneDetailsComponent implements OnInit {

  currentPerson: Personne = {};
  confirmationMessage = '';

  constructor(
    private personneService: PersonneService,
    private route: ActivatedRoute/*,
    private router: Router*/) { }

  ngOnInit(): void {
    this.confirmationMessage = '';
    this.getPerson(this.route.snapshot.params['id']);
  }

  getPerson(id: number) {
    this.personneService.get(id)
      .subscribe(
        data => {
          this.currentPerson = data;
          console.log(data);
        },
        error => {
          console.log(error)
        });
  }

  updatePerson(): void {
    this.personneService.update(this.currentPerson.id, this.currentPerson)
      .subscribe(
        response => {
          console.log(response);
          this.confirmationMessage = 'La personne ' + this.currentPerson.nom + ' ' + this.currentPerson.prenom + ' a été mise à jour !';
          //this.router.navigate(['/personnes']);
        },
        error => {
          console.log(error);
        });
  }

}
