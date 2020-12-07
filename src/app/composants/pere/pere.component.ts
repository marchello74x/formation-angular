import { AfterContentInit, AfterViewInit, Component, ContentChild, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FilsComponent } from '../fils/fils.component';
import { TitreComponent } from '../titre/titre.component';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit, AfterViewInit {

  //@ViewChild(FilsComponent, { static: false }) fils: FilsComponent
  //@ViewChildren(FilsComponent) fils : QueryList<FilsComponent>;

  @ContentChild(TitreComponent, { static: true }) titre: TitreComponent;

  tab: Array<string> = ['premier', 'deuxieme', 'troisieme'];
  nord = 'Lille';
  sud = 'Marseille';
  capitale = 'Paris';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.titre.valeur);
    //console.log(this.fils.ordre); //affiche premier
    //this.fils.forEach(elt => console.log(elt));  
    // affiche les trois FilsComposant
  }
}
