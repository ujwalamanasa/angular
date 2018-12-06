import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdescription',
  templateUrl: './productdescription.component.html',
  styleUrls: ['./productdescription.component.css']
})
export class ProductdescriptionComponent implements OnInit {

  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
