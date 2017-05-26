// Modal.js
import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events() {
    // pressed the open button
    this.openModalButton.click(this.openModal.bind(this));

    // pressed the close button
    this.closeModalButton.click(this.closeModal.bind(this));

    // pressed a key
    $(document).keyup(this.keypressHandler.bind(this));
  }
  keypressHandler(e) {
    if (e.keyCode == 27) {  // 27 = the escape key
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false; // eliminate default behavior (scroll to top of page)
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
    return true;  // allow default behavior (scroll to top of page)
  }
}

export default Modal;

