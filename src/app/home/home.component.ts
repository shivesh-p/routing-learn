import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthServiceService) { }

  ngOnInit() {
  }
  onLogin() {
    this.authService.logIn();
  }
  onLogout() {
    this.authService.logOut();
  }
  goToServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowLoading: '1' }, fragment: "loading" })
  }
}
