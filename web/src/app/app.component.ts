import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeModule } from './pages/home/home.module';
import { MenuModule } from './pages/menu/menu.module';
import { MenupageModule } from './pages/menupage/menu.module';
import { AboutModule } from './pages/about/about.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HomeModule, MenuModule, MenupageModule, AboutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web';
}
