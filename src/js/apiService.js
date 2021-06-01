const API_KEY = '21885958-186cb9f8de90f78c5ca194f62';
const BASE_URL = 'https://pixabay.com/api/';
export default class NewApiServise {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 12;
  }

  async fetchArticles() {
    const response = await fetch(
      `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${this.per_page}&key=${API_KEY}`,
    );

    const newImage = await response.json();
    this.incrementPage();

    return newImage.hits;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
