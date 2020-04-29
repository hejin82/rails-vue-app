import { debounce } from 'lodash';
import axios from './utils/axios_utils';

export default class FilterableList {
  constructor(filterForm, filterField, filterResult) {
    this.filterForm = filterForm;
    this.filterField = filterField;
    this.filterResult = filterResult;
    this.isBusy = false;
  }

  getFilterEndpoint() {
    return this.getPagePath();
  }

  getPagePath() {
    const action = this.filterForm.getAttribute('action');
    const params = null; //TODO $(this.filterForm).serialize();
    return `${action}${action.indexOf('?') > 0 ? '&' : '?'}${params}`;
  }

  initSearch() {
    this.debounceFilter = debounce(this.onFilterInput.bind(this), 500);
    this.unbindEvents();
    this.bindEvents();
  }

  onFilterInput() {
    const queryData = {};
    this.filterResults(queryData);
  }

  filterResults(params) {
    if (this.isBusy) {
      return false;
    }
    //TODO fade
    this.isBusy = true;
    return axios
      .get(this.getFilterEndpoint(), {
        params
      })
      .then(res => {
        this.onFilterSuccess(res, params)
        this.onFilterComplete();
      })
      .catch(() => this.onFilterComplete());
  }

  onFilterSuccess(response, queryData) {
    if (response.data.html) {
      this.filterResult.innerHTML = response.data.html;
    }
    const currentPath = this.getPagePath(queryData);
    return window.history.replaceState(
      {
        page: currentPath,
      },
      document.title,
      currentPath,
    );
  }

  onFilterComplete() {
    this.isBusy = false;
    //TODO fade
  }

  bindEvents() {
    this.filterField.addEventListener('input', this.debounceFilter);
  }

  unbindEvents() {
    this.filterField.removeEventListener('input', this.debounceFilter);
  }
}