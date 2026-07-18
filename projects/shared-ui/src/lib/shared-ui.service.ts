import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedUiService {

  commonData: string = "This is common data from shared-ui service";
  constructor() { }
}
