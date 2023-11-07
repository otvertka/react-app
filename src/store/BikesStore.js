import { makeAutoObservable } from "mobx";

export default class BikesStore {
  constructor() {
    this._types = [
      { id: 1, name: "Велосипеды для триатлона" },
      { id: 2, name: "Горные велосипеды" },
      { id: 3, name: "Городские велосипеды" },
      { id: 4, name: "Гравийные велосипеды" },
      { id: 5, name: "Двухподвесные велосипеды" },
    ];
    this._brands = [
      { id: 1, name: "Bianci" },
      { id: 2, name: "BMC" },
      { id: 3, name: "Ciclistino" },
      { id: 4, name: "Cipollini" },
      { id: 5, name: "Colnago" },
      { id: 6, name: "Giant" },
      { id: 7, name: "Pinarello" },
      { id: 8, name: "Orbea" },
    ];
    this._frames = [
      { id: 1, name: "Алюминий" },
      { id: 2, name: "Карбон" },
      { id: 3, name: "Сталь" },
    ];
    this._bikes = [
      { id: 1, type: "Велосипеды для триатлона", brand: "Bianci", frame: "Алюминий", title: "BIANCHI NITRON 9.2 XT/SLX 1X12 ", price: 100, image: "../../images/allBikes/Bianci/b1.png", country: "../../images/flags/italy.png" },
      { id: 2, type: "Горные велосипеды", brand: "Bianci", frame: "Карбон", title: "BIANCHI OLTRE XR4 CV ULTEGRA DI2 12S R400", price: 200, image: "../../images/allBikes/Bianci/b2.png" },
      { id: 3, type: "Городские велосипеды", brand: "Bianci", frame: "Сталь", title: "BIANCHI OLTRE RC DURA ACE DI2 12S ", price: 300, image: "../../images/allBikes/Bianci/b3.png" },
      { id: 4, type: "Гравийные велосипеды", brand: "Bianci", frame: "Алюминий", title: "BIANCHI ARCADEX GRX810 DI2 ", price: 400, image: "../../images/allBikes/Bianci/b4.png" },
      { id: 5, type: "Двухподвесные велосипеды", brand: "Bianci", frame: "Карбон", title: "BIANCHI AQUILA L DURA ACE DI2 TEAM JUMBO 2021", price: 500, image: "../../images/allBikes/Bianci/b5.png" },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    this._selectedFrame = {};
    // this._color = []
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setFrames(frames) {
    this._frames = frames;
  }
  setBikes(bikes) {
    this._bikes = bikes;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }
  setSelectedFrame(frame) {
    this._selectedFrame = frame;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get frames() {
    return this._frames;
  }
  get bikes() {
    return this._bikes;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
  get selectedFrame() {
    return this._selectedFrame;
  }
}
