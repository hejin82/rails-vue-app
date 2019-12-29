import $ from 'jquery';
import _ from 'underscore';
import axios from './lib/utils/axios_utils';

export default class FilterableList {
  constructor(form, filter, holder, filterInputField = 'filter_groups') {
    this.filterForm = form;
    this.listFilterElement = filter;
    this.listHolderElment = holder;
    this.filterInputField = filterInputField;
    this.isBusy = false;
  }

  getFilterEndpoint() {
    return `${this.filterForm.getAttribute('action')}?${$(this.filterForm).serialize()}`;
  }

  getPagePath() {
    return this.getFilterEndpoint();
  }

  initSearch() {
    this.debounceFilter = _.debounce(this.onFilterInput.bind(this), 500);
    this.unbindEvents();
    this.bindEvents();
  }

  onFilterInput() {
    const $form = $(this.filterForm);
    const queryData = {};
    const filterGroupsParam = $form.find(`[name="${this.filterInputField}"]`).val();

    if (filterGroupsParam) {
      queryData[this.filterInputField] = filterGroupsParam;
    }

    this.filterResults(queryData);

    if (this.setDefaultFilterOption) {
      this.setDefaultFilterOption();
    }
  }

  bindEvents() {
    this.listFilterElement.addEventListener('input', this.debounceFilter);
  }

  unbindEvents() {
    this.listFilterElement.removeEventListener('input', this.debounceFilter);
  }

  filterResults(params) {
    if (this.isBusy) {
      return false;
    }

    $(this.listHolderElment).fadeTo(250, 0.5);

    this.isBusy = true;

    return axios
      .get(this.getFilterEndpoint(), {params})
      .then(res => {
        this.onFilterSuccess(res, params);
        this.onFilterComplete();
      })
      .catch(() => this.onFilterComplete());
  }

  onFilterSuccess(response, queryData) {
    if (response.data.html) {
      this.listHolderElment.innerHTML = response.data.html;
    }

    const currentPath = this.getPagePath(queryData);

    return window.history.replaceState(
      {
        page: currentPath,
      },
      document.title,
      currentPath
    );
  }

  onFilterComplete() {
    this.isBusy = false;
    $(this.listHolderElment).fadeTo(250, 1);
  }
}