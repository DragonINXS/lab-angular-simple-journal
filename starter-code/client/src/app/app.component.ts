import { Component } from '@angular/core';
import { EntriesService} from './services/entries-from-journal.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Journal App  ';
  entry: any;
  
  constructor() {}

  
  
  
  ngOnInit() {
   
}


}
