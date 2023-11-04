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
    ];
    this._frames = [
      { id: 1, name: "Алюминий" },
      { id: 2, name: "Карбон" },
      { id: 3, name: "Сталь" },
    ];
    this._bikes = [
      { id: 1, title: "AQUILA L DURA ACE DI2 TEAM JUMBO 2021", price: 100, image: "https://kinderfahrzeugwelt.de/wp-content/uploads/2021/02/8900481-1.jpg" },
      { id: 2, title: "BAQUILA L DURA ACE DI2 TEAM JUMBO 2021", price: 200, image: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw524f4c48/images/full/full_2023_/2023/full_2023_3285_pathlite-4_bu_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2" },
      { id: 3, title: "CAQUILA L DURA ACE DI2 TEAM JUMBO 2021", price: 300, image: "https://lenta.servicecdn.ru/globalassets/1/-/60/23/03/402664_2.png?preset=fulllossywhite" },
    ];
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
}
