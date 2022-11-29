import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NasaapingService } from '../nasaaping.service';

interface Profile {
  email: string;
  username: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    username: new FormControl('')
})

  loading = true;
  profile?: Profile;

  constructor(private fb: FormBuilder,
              private nasaping: NasaapingService) { }

  async ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
    });

    try {
      this.profile = await this.nasaping.getProfile();
    } catch (err) {}
    this.loading = false;
  }

  async onSubmitUsername() {
    await this.nasaping.updateUser(this.form.get('username')!.value);
    this.profile = await this.nasaping.getProfile();
  }
}