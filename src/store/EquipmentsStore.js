import { makeAutoObservable } from "mobx";

export default class EquipmentsStore {
  constructor() {
    this._types = [
      { id: 1, name: "Велошлемы" },
      { id: 2, name: "Велокуртки" },
      { id: 3, name: "Веломайки" },
      { id: 4, name: "Очки" },
      { id: 5, name: "Перчатки" },
    ];
    this._brands = [
      { id: 1, name: "Assos" },
      { id: 2, name: "Kask" },
      { id: 3, name: "Rudy Project" },
    ];
    this._equipmentsAll = [
      { id: 1, type: "Велошлемы", brand: "Assos", title: "ASSOS MET TRENTA MIPS JINGO RS HELMET CE", price: 31, image: "../../images/allEquipments/helmets/a1.jpg", country: "../../images/flags/italy.png" },
      { id: 2, type: "Велошлемы", brand: "Kask", title: "KASK PROTONE", price: 32, image: "../../images/allEquipments/helmets/k1.jpg", country: "../../images/flags/italy.png" },
      { id: 3, type: "Велошлемы", brand: "Kask", title: "KASK MOJITO³ CAMO", price: 33, image: "../../images/allEquipments/helmets/k2.png", country: "../../images/flags/italy.png" },
      { id: 4, type: "Велошлемы", brand: "Rudy Project", title: "RUDY PROJECT CHRONO WINGSPAN YELLOW FLUO BLACK SHINY", price: 34, image: "../../images/allEquipments/helmets/r1.jpg", country: "../../images/flags/italy.png" },

      { id: 5, type: "Велошлемы", brand: "Rudy Project", title: "RUDY PROJECT SYTON OPEN WHITE BLUE RED", price: 20, image: "../../images/allEquipments/helmets/r2.jpg", country: "../../images/flags/italy.png" },
      { id: 6, type: "Велошлемы", brand: "Rudy Project", title: "RUDY PROJECT WING57 RED FLUO WHITE SHINY", price: 23, image: "../../images/allEquipments/helmets/r3.jpg", country: "../../images/flags/italy.png" },
      { id: 7, type: "Велошлемы", brand: "Rudy Project", title: "RUDY PROJECT RACEMASTER WHITE STEALTH", price: 23, image: "../../images/allEquipments/helmets/r4.jpg", country: "../../images/flags/italy.png" },
      { id: 8, type: "Велошлемы", brand: "Rudy Project", title: "RUDY PROJECT RACEMASTER GOLD VELVET", price: 23, image: "../../images/allEquipments/helmets/a2.jpg", country: "../../images/flags/italy.png" },

      { id: 9, type: "Велокуртки", brand: "Rudy Project", title: "ASSOS MILLE GT SPRING FALL JACKET CALEUM BLUE", price: 23, image: "../../images/allEquipments/jackets/a1.jpg", country: "../../images/flags/italy.png" },
      { id: 10, type: "Велокуртки", brand: "Rudy Project", title: "ASSOS MILLE GT WINTER JACKET VISIBILITY GREEN", price: 23, image: "../../images/allEquipments/jackets/a2.jpg", country: "../../images/flags/italy.png" },
      { id: 11, type: "Велокуртки", brand: "Rudy Project", title: "ASSOS RS.STURMPRINZ EVO NATIONALRED", price: 23, image: "../../images/allEquipments/jackets/a3.jpg", country: "../../images/flags/italy.png" },
      { id: 12, type: "Велокуртки", brand: "Rudy Project", title: "ASSOS UMA GT WIND JACKET C2 OPTIC YELLOW", price: 23, image: "../../images/allEquipments/jackets/a4.jpg", country: "../../images/flags/italy.png" },
      { id: 13, type: "Велокуртки", brand: "Rudy Project", title: "ASSOS EQUIPE R HABU WINTER JACKET S9", price: 23, image: "../../images/allEquipments/jackets/a5.jpg", country: "../../images/flags/italy.png" },
      { id: 14, type: "Велокуртки", brand: "Rudy Project", title: "ASSOS MILLE GT WIND JACKET LOLLYRED", price: 23, image: "../../images/allEquipments/jackets/a6.jpg", country: "../../images/flags/italy.png" },
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
  get equipmentsAll() {
    return this._equipmentsAll;
  }
  get selectedTypes() {
    return this._selectedTypes;
  }
  get selectedBrands() {
    return this._selectedBrands;
  }
}
