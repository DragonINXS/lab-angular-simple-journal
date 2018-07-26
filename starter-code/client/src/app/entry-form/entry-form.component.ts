import { Component, OnInit } from '@angular/core';
import { EntriesService} from '../services/entries-from-journal.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
  anEntry:any = {};
  

  constructor(private entries: EntriesService) { }

  ngOnInit() {
  }

  createNewEntry() {
    
    this.entries.createAnEntry(this.anEntry)
    .subscribe((entries) => {
      console.log("You diD thIS !!");
    });
   
  }

  

}
