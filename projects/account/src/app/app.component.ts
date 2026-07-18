import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedUiService } from 'shared-ui';
import { SharedUiComponent } from "../../../shared-ui/src/public-api";

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [SharedUiComponent]
})
export class AppComponent implements OnInit {
  title = 'Account';

  sharedLib = inject(SharedUiService)
  sharedData: string = '';

  ngOnInit(): void {
    this.sharedData = this.sharedLib.commonData;

  }

}
