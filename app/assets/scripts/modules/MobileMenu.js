// fiename: MobileMenu.js
// author: Brad Schiff

import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu_content");
    this.events();
  }

  events(){
//    console.log(this);
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
//    console.log("mobile menu was toggled");
//    console.log(this);
//    alert(this);
    this.menuContent.toggleClass("site-header__menu_content--is-visible");
  }

}

export default MobileMenu;
