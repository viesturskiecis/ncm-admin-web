import { Component } from '@angular/core';
import { User } from '../../models/';
import { UserService } from '../../services/index';

@Component({
    selector: 'top-nav',
    templateUrl: './topnav.html',
    styleUrls: ['./topnav.css']
})

export class TopNavComponent {
	currentUser: User;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
	
}
