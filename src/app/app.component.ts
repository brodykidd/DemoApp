import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NewsPage } from '../pages/news/news';
import { ResourcesPage } from '../pages/resources/resources';
import { CalendarPage } from '../pages/calendar/calendar';


import { TasksPage } from '../pages/tasks/tasks';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = TasksPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToTasks(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TasksPage);
  }goToNews(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NewsPage);
  }goToResources(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ResourcesPage);
  }goToCalendar(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CalendarPage);
  }
}
