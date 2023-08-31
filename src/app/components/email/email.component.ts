import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  // first way
  // from !: string
  // to !: string
  // message !: string;

  // second way
  data = {
    from: "",
    to: "",
    subject: "",
    message: ""
  }

  flag = false;
  constructor(private email: EmailService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submitEmailForm() {
    // const myEmail = {
    //   from : this.from,
    //   to : this.to,
    //   message : this.message
    // }

    console.log("email content is: " + JSON.stringify(this.data));
    if (this.data.from.trim() == '' || this.data.to.trim() == '' || this.data.from.trim() == '' || this.data.message.trim() == '') {
      this.snackBar.open("any field can't be empty!!!", "OK");
      return;
    }
    this.flag = true;
    this.email.sendEmail(this.data).subscribe(
      response => {
        this.flag = false;
        this.snackBar.open("send success!", "OK");
      },
      error => {
        console.log(error);
        this.flag = false;
        this.snackBar.open("something went wrong!", "OK");
      }
    );
  }
}
