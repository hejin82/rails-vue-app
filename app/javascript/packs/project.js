import ProjectsList from '../src/projects_list';
import SelectContainer from '../src/select_container';

document.addEventListener('DOMContentLoaded', () => {
  new ProjectsList(); // eslint-disable-line no-new
  new SelectContainer(); // eslint-disable-line no-new
});
