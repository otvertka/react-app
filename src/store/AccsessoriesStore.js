import { makeAutoObservable } from "mobx";

export default class AccessoriesStore {
  constructor() {
    this._types = [
      { id: 1, name: "Велочехлы" },
      { id: 2, name: "Рюкзаки" },
      { id: 3, name: "Фляги, держатели" },
    ];
    this._brands = [
      { id: 1, name: "Assos" },
      { id: 2, name: "Elite" },
      { id: 3, name: "Scicon" },
    ];
    this._accessesAll = [
      { id: 1, type: "Велочехлы", brand: "Scicon", title: "SCICON AEROTECH EVOLUTION 3.0 TSA", price: 94, image: "../../images/allAccessories/cases/s2.jpg", country: "../../images/flags/italy.png" },
      { id: 2, type: "Велочехлы", brand: "Scicon", title: "SCICON AEROCOMFORT TRIATHLON 3.0 TSA", price: 69, image: "../../images/allBikes/Colnago/col10.jpg", country: "../../images/flags/italy.png" },
      { id: 3, type: "Велочехлы", brand: "Scicon", title: "SCICON AEROCOMFORT ROAD 3.0 TSA", price: 70, image: "../../images/allAccessories/rucksack/rs2.jpg", country: "../../images/flags/italy.png" },
      { id: 4, type: "Велочехлы", brand: "Scicon", title: "SCICON AEROTECH EVOLUTION 3.0 TSA", price: 54, image: "../../images/allAccessories/cases/s4.jpg", country: "../../images/flags/italy.png" },
      { id: 5, type: "Велочехлы", brand: "Scicon", title: "SCICON AEROTECH EVOLUTION 3.0 TSA", price: 59, image: "../../images/allAccessories/cases/s5.jpg", country: "../../images/flags/italy.png" },

      { id: 6, type: "Рюкзаки", brand: "Assos", title: "ASSOS ASSOSOIRES SPIDER BAG G2 BLACKSERIES", price: 135, image: "../../images/allAccessories/rucksack/rs1.jpg", country: "../../images/flags/italy.png" },
      { id: 7, type: "Рюкзаки", brand: "Assos", title: "ASSOS UNISEX SPIDER BAG G2 BLACKSERIES", price: 59, image: "../../images/allAccessories/rucksack/rs2.jpg", country: "../../images/flags/italy.png" },
      { id: 8, type: "Рюкзаки", brand: "Assos", title: "ASSOS SPIDERBAG", price: 140, image: "../../images/allAccessories/rucksack/rs3.jpg", country: "../../images/flags/italy.png" },
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
  // setAccess(accessesAll) {
  //   this._accessesAll = accessesAll;
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
  get accessesAll() {
    return this._accessesAll;
  }
  get selectedTypes() {
    return this._selectedTypes;
  }
  get selectedBrands() {
    return this._selectedBrands;
  }
}
