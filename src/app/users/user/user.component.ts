import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };
  paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /*
   //use the below code if u knwo that the component cant be reached from any other path
   //other than the one u put the link from
   //if u also dont want to reload the component from inside the same component here for eg user component

   this.user = {
     id: this.route.snapshot.params['id'],
     name: this.route.snapshot.params['name'],

   }
   */
    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.user = {
        id: params['id'],
        name: params['name'],

      }
    })
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.paramsSubscription.unsubscribe();
  }

}
