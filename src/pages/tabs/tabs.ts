import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({segment: 'home'})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  rentalsRoot = 'RentalsPage';
  rewardsRoot = 'RewardsPage';
  laundryRoot = 'LaundryPage'


  constructor(public navCtrl: NavController) {}

}
