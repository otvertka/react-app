import { makeAutoObservable } from "mobx";

export default class PartsStore {
  constructor() {
    this._types = [
      { id: 1, name: "Камеры" },
      { id: 2, name: "Касеты" },
      { id: 3, name: "Колёса" },
      { id: 4, name: "Педали" },
      { id: 5, name: "Переключатели скоростей" },
    ];
    this._brands = [
      { id: 1, name: "Shimano" },
      { id: 2, name: "Continental" },
      { id: 3, name: "Pirelli" },
      { id: 4, name: "Lightweight" },
      { id: 5, name: "Miche" },
      { id: 6, name: "Look" },
    ];
    this._partsAll = [
      { id: 201, type: "Камеры", brand: "Continental", title: "CONTINENTAL MTB 27.5 S42", price: 20, image: "../../images/allParts/tyres/c1.jpeg", country: "../../images/flags/italy.png" },
      { id: 202, type: "Камеры", brand: "Continental", title: "CONTINENTAL MTB 29 S42", price: 21, image: "../../images/allParts/tyres/c2.jpeg", country: "../../images/flags/italy.png" },
      { id: 203, type: "Камеры", brand: "Continental", title: "CONTINENTAL RACE 28 S60", price: 22, image: "../../images/allParts/tyres/c3.jpeg", country: "../../images/flags/italy.png" },
      { id: 204, type: "Камеры", brand: "Pirelli", title: "PIRELLI CINTURATO SMARTUBE (700X28/35С)", price: 23, image: "../../images/allParts/tyres/p1.jpg", country: "../../images/flags/italy.png" },
      { id: 205, type: "Камеры", brand: "Pirelli", title: "PIRELLI CINTURATO SMARTUBE (700X33/45С)", price: 24, image: "../../images/allParts/tyres/p2.png", country: "../../images/flags/italy.png" },
      { id: 206, type: "Камеры", brand: "Pirelli", title: "PIRELLI ROADTUBE (700X23/30C)", price: 25, image: "../../images/allParts/tyres/p3.png", country: "../../images/flags/italy.png" },
      { id: 207, type: "Камеры", brand: "Pirelli", title: "PIRELLI SPORTUBE (26-27.5″X2.5/2.8", price: 26, image: "../../images/allParts/tyres/p4.png", country: "../../images/flags/italy.png" },

      { id: 208, type: "Касеты", brand: "Shimano", title: "SHIMANO 105 R7000 11-28 11СК.", price: 140, image: "../../images/allParts/kasets/s1.jpg", country: "../../images/flags/italy.png" },
      { id: 209, type: "Касеты", brand: "Shimano", title: "SHIMANO 105 R7000 11-32 11СК.", price: 20, image: "../../images/allParts/kasets/s2.jpg", country: "../../images/flags/italy.png" },
      { id: 210, type: "Касеты", brand: "Shimano", title: "SHIMANO ULTEGRA 14-28 11СК.", price: 23, image: "../../images/allParts/kasets/s3.jpeg", country: "../../images/flags/italy.png" },
      { id: 211, type: "Касеты", brand: "Shimano", title: "SHIMANO DEORE M6100 10-51 12V", price: 23, image: "../../images/allParts/kasets/s4.jpg", country: "../../images/flags/italy.png" },
    ];

    this._selectedTypes = [];
    this._selectedBrands = [];
    makeAutoObservable(this);
  }
  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  // setAccess(partsAll) {
  //   this._partsAll = partsAll;
  // }

  addSelectedType(typeName) {
    this._selectedTypes.push(typeName);
  }
  removeSelectedType(typeName) {
    this._selectedTypes = this._selectedTypes.filter((selectedType) => selectedType !== typeName);
  }

  addSelectedBrand(brandName) {
    this._selectedBrands.push(brandName);
  }
  removeSelectedBrand(brandName) {
    this._selectedBrands = this._selectedBrands.filter((selectedBrand) => selectedBrand !== brandName);
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get partsAll() {
    return this._partsAll;
  }
  get selectedTypes() {
    return this._selectedTypes;
  }
  get selectedBrands() {
    return this._selectedBrands;
  }
}
