import { Component } from '@angular/core';
import { HttpModule} from '@angular/http'
import { ServiceService } from './service.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiceService]
})


export class AppComponent {
  title = 'app-works!';
}
