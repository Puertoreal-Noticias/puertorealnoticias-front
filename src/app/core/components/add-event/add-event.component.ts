import { Component, OnInit } from '@angular/core';
import { EventConectService } from '../../services/event-conect.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
  constructor(private EventConectService: EventConectService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
