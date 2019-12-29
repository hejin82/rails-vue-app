import $ from 'jquery';

export default class AjaxLoadingSpinner {
  static init() {
    const $elements = $('.js-ajax-loading-spinner');
    $elements.on('ajax:beforeSend', AjaxLoadingSpinner.ajaxBeforeSend);
    $elements.on('ajax:complete', AjaxLoadingSpinner.ajaxComplete);
  }

  static ajaxBeforeSend(e) {
    e.target.setAttribute('disabled', '');
    const iconElement = e.target.querySelector('i');
  }
}