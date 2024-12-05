class Meme {
  id = undefined;
  text = "";
  x = 0;
  y = 10;
  fontsize = 10;
  fontweight = 500;
  underline = false;
  italic = false;
  color = "#FFFFFF";
  imageId = -1;
  #endpoint = "/memes";
  constructor() {}
  save() {
    console.log("save at" + this.#endpoint, this);
    this.publicSave();
    this.#privateSave();
  }
  publicSave() {
    console.log("public saving");
  }

  #privateSave() {
    console.log("private saving");
  }
}
let meme = new Meme();
meme.save();
