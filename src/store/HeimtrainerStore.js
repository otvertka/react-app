import { makeAutoObservable } from "mobx";

export default class HeimtrainerStore {
  constructor() {
    this._types = [
      { id: 1, name: "Standard" },
      { id: 2, name: "Air" },
      
    ];
    this._brands = [
      { id: 1, name: "Bh fitness" },
      { id: 2, name: "Bodytone" },
   
    ];
    this._heimtrainerAll = [
      { id: 501, type: "Standard", brand: "Bh fitness", title: "Bh fitness Rex Electronic H921E Indoor-Fahrrad", price: 1000, image: "../../images/heimtrainer/bh fitness/bh1/bh-fitness-rex-electronic-h921e-indoor-fahrrad.webp", country: "../../images/flags/spanien.png" },
      { id: 502, type: "Standard", brand: "Bh fitness", title: "Bh Fitness Sb1.4 H9158 Indoor-Fahrrad", price: 430, image: "../../images/heimtrainer/bh fitness/bh2/bh-fitness-sb1.4-h9158-indoor-fahrrad.webp", country: "../../images/flags/spanien.png" },
      { id: 503, type: "Standard", brand: "Bh fitness", title: "Bh Fitness H9162 Sb.2 Indoor-Fahrrad", price: 540, image: "../../images/heimtrainer/bh fitness/bh3/bh-fitness-h9162-sb.2-indoor-fahrrad.webp", country: "../../images/flags/spanien.png" },
      { id: 504, type: "Air", brand: "Bh fitness", title: "Bh Fitness Airmag H9120 Indoor-Fahrrad", price: 750, image: "../../images/heimtrainer/bh fitness/bh4/bh-fitness-airmag-h9120-indoor-fahrrad.webp", country: "../../images/flags/spanien.png" },
      { id: 505, type: "Standard", brand: "Bh fitness", title: "Bh Fitness Duke Electronic H920E Indoor-Fahrrad", price: 1800, image: "../../images/heimtrainer/bh fitness/bh5/bh-fitness-duke-electronic-h920e-indoor-fahrrad.webp", country: "../../images/flags/spanien.png" },
      { id: 506, type: "Air", brand: "Bh fitness", title: "Bh Fitness I.Air Mag H9122I Indoor-Fahrrad", price: 1000, image: "../../images/heimtrainer/bh fitness/bh6/bh-fitness-i.air-mag-h9122i-indoor-fahrrad.webp", country: "../../images/flags/spanien.png" },
      
      
      { id: 507, type: "Standard", brand: "Bodytone", title: "Bodytone Active Bike 200 Indoor-Fahrrad", price: 320, image: "../../images/heimtrainer/bodytone/bod1/bodytone-active-bike-200-indoor-fahrrad.webp", country: "../../images/flags/spanien.png" },
      { id: 508, type: "Standard", brand: "Bodytone", title: "Bodytone Active Bike 200 Indoor-Fahrrad", price: 330, image: "../../images/heimtrainer/bodytone/bod2/bodytone-active-bike-200-indoor-fahrr.webp", country: "../../images/flags/spanien.png" },
      { id: 509, type: "Standard", brand: "Bodytone", title: "Bodytone Active Bike 350 Smart Indoor-Fahrrad", price: 650, image: "../../images/heimtrainer/bodytone/bod3/bodytone-active-bike-350-smart-indoor-fahrrad.webp", country: "../../images/flags/spanien.png" },
      { id: 510, type: "Standard", brand: "Bodytone", title: "Bodytone WT1 Indoor-Fahrrad", price: 2023, image: "../../images/heimtrainer/bodytone/bod4/bodytone-wt1-indoor-fahrrad.webp" , country: "../../images/flags/spanien.png" },
      { id: 511, type: "Air", brand: "Bodytone", title: "Bodytone Air Bike ZROB black", price: 699, image: "../../images/heimtrainer/bodytone/bod5/bte-zrobv1_001.webp", country: "../../images/flags/spanien.png" },
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
  get heimtrainerAll() {
    return this._heimtrainerAll;
  }
  get selectedTypes() {
    return this._selectedTypes;
  }
  get selectedBrands() {
    return this._selectedBrands;
  }
}
