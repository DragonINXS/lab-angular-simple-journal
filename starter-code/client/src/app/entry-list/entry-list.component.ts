import { Component, OnInit } from '@angular/core';
import { EntriesService} from '../services/entries-from-journal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  allEntries: any;

  constructor(private entries: EntriesService) { }

  ngOnInit() {
  }

  getEntries() {
    this.entries.getAllEntries()
    .subscribe((entries) => {
      console.log(entries);
      return this.allEntries = entries
    });
  }

}
