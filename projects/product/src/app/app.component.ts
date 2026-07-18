import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedUiComponent } from "../../../shared-ui/src/public-api";
import { SharedUiService } from 'shared-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [SharedUiComponent]
})
export class AppComponent implements OnInit {
  title: string = 'Product';
  sharedLib = inject(SharedUiService)
  sharedData: string = ''


  ngOnInit(): void {
    this.sharedLib.commonData = `Shared common data is shared across different applications`
    this.sharedData = this.sharedLib.commonData;
  }


}
