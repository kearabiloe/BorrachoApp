import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav
  rootPage:any = 'TabsPage';

  constructor(platform: Platform, statusBar: StatusBar, public splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
       setTimeout(()=>{
          this.splashScreen.hide();  
        },1000);
    });
  }
 ngAfterViewInit() {
    // Let's navigate from TabsPage to Page1
    this.nav.push('LandingPage');
  } 
  openPage(page){
    this.nav.push(page);
  }
}

