import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout().subscribe(
      res => {
      },
      err => { },
      () => {
        
        this.router.navigate(['./login']);
      }
    );
  }
}
