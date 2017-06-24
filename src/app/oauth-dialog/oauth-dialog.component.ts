import { Component, OnDestroy } from '@angular/core';
import { AuthService } from "angular2-social-login";
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-oauth-dialog',
  templateUrl: './oauth-dialog.component.html',
  styleUrls: ['./oauth-dialog.component.css']
})
export class OauthDialogComponent {

  public sub:any;

  constructor(public dialogRef: MdDialogRef<OauthDialogComponent>, public _auth: AuthService) { }
  signIn(provider) {
    this.sub =this._auth.login(provider).subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
        this.dialogRef.close();
      }
    )
  }

  logout() {
    this._auth.logout().subscribe(
      (data) => {
        console.log(data);
        localStorage.removeItem("user")
        this.dialogRef.close();
      }
    )
  }
}
