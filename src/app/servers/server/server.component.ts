import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  id: number;
  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    debugger;
    //if u dont want to use resolver then use the below code
    // const id = +this.route.snapshot.params['id']
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe((params: Params) => {

    //   this.server = this.serversService.getServer(+params['id']);
    // })

    //using a resolver to prefetch the data incase of async or http requests
    this.route.data.subscribe((data: Data) => {
      //the name 'server' should match the name of the variable in key value pair in
      //the resolver of the route of the component
      this.server = data['server'];
    })

  }
  editServerNav() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' })
  }

}
