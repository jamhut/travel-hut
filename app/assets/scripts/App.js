
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
// var revealOnScroll = new RevealOnScroll();

var rvlFeatureItems = new RevealOnScroll($(".feature-item"), "85%");
var rvlTestimonials = new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal() ;
