import { Component, OnInit } from '@angular/core';
import { Plugins, PushNotification, PushNotificationActionPerformed } from '@capacitor/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';


const { SplashScreen, StatusBar, PushNotifications } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  pages = [
    {
      title: 'Home',
      url: '/app/tabs/home',
      icon: 'home'
    },
    {
      title: 'Über uns',
      url: '/app/tabs/about',
      icon: 'information-circle'
    },
    {
      title: 'News',
      url: '/app/tabs/news',
      icon: 'logo-rss'
    },
    {
      title: 'Service',
      url: '/app/tabs/service',
      icon: 'construct'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out'
    }
  ];

  constructor(
    private router: Router
  ) {
    this.initializeApp();
  }

  ngOnInit() {

    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.pages.map( p => {
          return p['active'] = (event.url === p.url);
        });
      }
    });

  }

  initializeApp() {
    SplashScreen.hide().catch(error => {
      console.error(error); });
      StatusBar.hide().catch(error => { console.error(error);
      });
    StatusBar.hide().catch(error => { console.error(error);
      });
  }
}
