import FilterableList from './filterable_list';

export default class ProjectsList {
  constructor() {
    const form = document.querySelector('forms#project-filter-forms');
    const filter = document.querySelector('.js-projects-list-filter');
    const holder = document.querySelector('.js-projects-list-holder');

    if (form && filter && holder) {
      const list = new FilterableList(form, filter, holder);
      list.initSearch();
    }
  }
}
