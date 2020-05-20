import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-ngfordirectives',
  templateUrl: './ngfordirectives.component.html',
  styleUrls: ['./ngfordirectives.component.css']
})
export class NgfordirectivesComponent implements OnInit {

  constructor(public rest:RestService) { }

  data:any = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.data = [];
    this.rest.getdata().subscribe((data: {}) => {
      console.log(data);
      this.data = data;
    });
  }

}
