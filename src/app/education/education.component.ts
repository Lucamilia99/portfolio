import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']

})
export class EducationComponent implements OnInit {
  cameriere: boolean = false ;
  stage : boolean = false;
  magazzino:boolean = false;
  apprendistato:boolean = false;
  planeIcon: any ;
  gameIcon:any;
  calcioBallIcon:any;
  tennisBallIcon: any;
  detailOnClick(id:String) {
    if(id=="magazzino_detail"){
      this.magazzino = !this.magazzino;
    }
    else if(id=="stage_detail"){
     this.stage = !this.stage;
    }
    else if(id=="cameriere_detail"){
      this.cameriere = !this.cameriere;
    }
    else if(id=="apprendistato_detail"){
      this.apprendistato = !this.apprendistato;
    }

  }

  constructor() {
  }

  ngOnInit(): void {
    this.planeIcon=awesom.faPlane;
    this.gameIcon=awesom.faGamepad;
    this.calcioBallIcon=awesom.faVolleyballBall;
    this.tennisBallIcon= awesom.faTableTennis;

  }

}
