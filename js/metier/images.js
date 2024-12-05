class Images extends Array {
  #endpoint = "/images";
  constructor() {
    super();
  }
  find() {
    super.find(params);
  }
  load() {
    const p=fetch(`http://localhost:5679${this.#endpoint}`,{
        header:{Accept:"application/json"},
        method:"GET",
    })
    .then((r)=>r.json());
    p.then((a)=>Object.assign(this,a));

  }
}
let images = new Images();
images.load();
