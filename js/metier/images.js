class Images extends Array {
  #endpoint = "/images";
  constructor() {
    super();
  }
  find() {
    super.find(params);
  }
  load() {
    return fetch(`http://localhost:5679${this.#endpoint}`, {
      header: { Accept: "application/json" },
      method: "GET",
    }).then((r) => {
      console.log(r);
      return r.json();
    })
    .then((a) => Object.assign(this, a));
  }
}
const images = new Images();
const promiseImage = images.load();
