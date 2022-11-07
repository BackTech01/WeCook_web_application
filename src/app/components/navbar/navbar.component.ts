import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {}

  verifyLoggedUser() {
    const userId = localStorage.getItem('userId');

    return !!userId;
  }

  goToMyProfile() {
    const myId = this.profileService.getMyProfile();
    if (myId !== null) {
      return `/perfil/${myId}`;
    } else return `/perfil/0`;
  }
}
