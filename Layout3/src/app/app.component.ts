import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { Cell1Component } from './cell1/cell1.component';
import { Cell2Component } from './cell2/cell2.component';
import { Cell3Component } from './cell3/cell3.component';
import { Box1Component } from './box1/box1.component';
import { Box2Component } from './box2/box2.component';
import { Box3Component } from './box3/box3.component';
import { Box4Component } from './box4/box4.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,FooterComponent,SubheaderComponent,Cell1Component,Cell2Component,Cell3Component,Box1Component,Box2Component,Box3Component,Box4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Layout3';
}
