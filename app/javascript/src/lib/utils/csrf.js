const csrf = {
  init() {
    const tokenEl = document.querySelector('meta[name=csrf-token]');
    if (tokenEl !== null) {
      this.csrfToken = tokenEl.getAttribute('content');
    } else {
      this.csrfToken = null;
    }
  },

  get token() {
    return this.csrfToken;
  },

  get headerKey() {
    return 'X-CSRF-Token';
  },

  get headers() {
    if (this.csrfToken !== null) {
      return {
        [this.headerKey]: this.token,
      };
    }
    return {};
  },
};

csrf.init();

if (Rails.csrfToken) {
  Rails.csrfToken = () => csrf.token;
}

export default csrf;

