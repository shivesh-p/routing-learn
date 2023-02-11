import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanDeactivateComponent } from '../can-deactivate.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateComponent {
  changesSaved: boolean = false;
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  id: number;
  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }
  allowEdit: boolean = false;
  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(this.id);
    this.allowEdit = !!(+this.route.snapshot.queryParams['allowEdit'] == 1);

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.server = this.serversService.getServer(this.id);

    });
    this.route.queryParams.subscribe((query) => {
      this.allowEdit = !!(+query['allowEdit'] == 1);
    });

  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route })
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm("Are you sure you want to discard the changes?")
    }
    else {
      return true;
    }
  }

}
