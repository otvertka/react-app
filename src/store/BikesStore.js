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
      { id: 4, name: "Colnago" },
      { id: 5, name: "Giant" },
      { id: 6, name: "Pinarello" },
      { id: 7, name: "Orbea" },
    ];
    this._frames = [
      { id: 1, name: "Алюминий" },
      { id: 2, name: "Карбон" },
      { id: 3, name: "Сталь" },
    ];
    this._bikesAll = [
      { id: 1, type: "Велосипеды для триатлона", brand: "Bianci", frame: "Алюминий", title: "BIANCHI NITRON 9.2 XT/SLX 1X12 ", price: 100, image: "../../images/allBikes/Bianci/b1.png", country: "../../images/flags/italy.png" },
      { id: 2, type: "Горные велосипеды", brand: "Bianci", frame: "Карбон", title: "BIANCHI OLTRE XR4 CV ULTEGRA DI2 12S R400", price: 200, image: "../../images/allBikes/Bianci/b2.png", country: "../../images/flags/italy.png" },
      { id: 3, type: "Городские велосипеды", brand: "Bianci", frame: "Сталь", title: "BIANCHI OLTRE RC DURA ACE DI2 12S ", price: 300, image: "../../images/allBikes/Bianci/b3.png", country: "../../images/flags/italy.png" },
      { id: 4, type: "Гравийные велосипеды", brand: "Bianci", frame: "Алюминий", title: "BIANCHI ARCADEX GRX810 DI2 ", price: 400, image: "../../images/allBikes/Bianci/b4.png", country: "../../images/flags/italy.png" },
      { id: 5, type: "Двухподвесные велосипеды", brand: "Bianci", frame: "Карбон", title: "BIANCHI AQUILA L DURA ACE DI2 TEAM JUMBO 2021", price: 500, image: "../../images/allBikes/Bianci/b5.png", country: "../../images/flags/italy.png" },

      { id: 6, type: "Велосипеды для триатлона", brand: "BMC", frame: "Алюминий", title: "BMC ALPENCHALLENGE THREE SORA ANTRACITE GREY 2022 ", price: 600, image: "../../images/allBikes/BMC/bmc1.png", country: "../../images/flags/schweiz.png" },
      { id: 7, type: "Горные велосипеды", brand: "BMC", frame: "Карбон", title: "BMC ROADMACHINE FIVE DI2 CARBON/WHITE/GREY 2023", price: 700, image: "../../images/allBikes/BMC/bmc2.png", country: "../../images/flags/schweiz.png" },
      { id: 8, type: "Городские велосипеды", brand: "BMC", frame: "Сталь", title: "BMC TWOSTROKE AL 20 V2 X4 1X8 TURQUOISE ", price: 800, image: "../../images/allBikes/BMC/bmc3.png", country: "../../images/flags/schweiz.png" },
      { id: 9, type: "Гравийные велосипеды", brand: "BMC", frame: "Алюминий", title: "BMC TEAMMACHINE SLR ONE ULTEGRA DI2 2022 ", price: 900, image: "../../images/allBikes/BMC/bmc4.png", country: "../../images/flags/schweiz.png" },
      { id: 10, type: "Двухподвесные велосипеды", brand: "BMC", frame: "Карбон", title: "BMC FOURSTROKE 01 THREE XT 8100", price: 1000, image: "../../images/allBikes/BMC/bmc5.png", country: "../../images/flags/schweiz.png" },
      { id: 11, type: "Велосипеды для триатлона", brand: "BMC", frame: "Алюминий", title: "BMC NITRON 9.2 XT/SLX 1X12 ", price: 1100, image: "../../images/allBikes/BMC/bmc6.png", country: "../../images/flags/schweiz.png" },

      { id: 12, type: "Горные велосипеды", brand: "Ciclistino", frame: "Карбон", title: "CICLISTINO RIDER 16 ULTEGRA DI2 12S R400", price: 1200, image: "../../images/allBikes/Ciclistino/c1.png", country: "../../images/flags/italy.png" },
      { id: 13, type: "Городские велосипеды", brand: "Ciclistino", frame: "Сталь", title: "CICLISTINO RIDER 20 ACE DI2 12S ", price: 1300, image: "../../images/allBikes/Ciclistino/c2.png", country: "../../images/flags/italy.png" },
      { id: 14, type: "Гравийные велосипеды", brand: "Ciclistino", frame: "Алюминий", title: "CICLISTINO RIDER 20 ARADEX GRX810 DI2 ", price: 1400, image: "../../images/allBikes/Ciclistino/c3.png", country: "../../images/flags/italy.png" },
      { id: 15, type: "Двухподвесные велосипеды", brand: "Ciclistino", frame: "Карбон", title: "CICLISTINO RIDER 20 ACE DI2 TEAM JUMBO 2021", price: 1500, image: "../../images/allBikes/Ciclistino/c4.png", country: "../../images/flags/italy.png" },
      { id: 16, type: "Горные велосипеды", brand: "Ciclistino", frame: "Карбон", title: "CICLISTINO RIDER 20 DI2 CARBON/WHITE/GREY 2023", price: 1700, image: "../../images/allBikes/Ciclistino/c5.png", country: "../../images/flags/italy.png" },
      { id: 17, type: "Городские велосипеды", brand: "Ciclistino", frame: "Сталь", title: "CICLISTINO RIDER 20 20 V2 X4 1X8 TURQUOISE ", price: 1800, image: "../../images/allBikes/Ciclistino/c6.png", country: "../../images/flags/italy.png" },

      { id: 18, type: "Горные велосипеды", brand: "Colnago", frame: "Карбон", title: "COLNAGO V3 DISC 105 DI2 12V R600 MKWK 2023", price: 1900, image: "../../images/allBikes/Colnago/col1.jpeg", country: "../../images/flags/italy.png" },
      { id: 19, type: "Городские велосипеды", brand: "Colnago", frame: "Сталь", title: "COLNAGO C68 DISC FORCE AXS W400 HRWH ", price: 2000, image: "../../images/allBikes/Colnago/col2.jpg", country: "../../images/flags/italy.png" },
      { id: 20, type: "Гравийные велосипеды", brand: "Colnago", frame: "Алюминий", title: "COLNAGO C68 DISC ULTEGRA DI2 12V W400 ", price: 2100, image: "../../images/allBikes/Colnago/col10.jpg", country: "../../images/flags/italy.png" },
      { id: 21, type: "Двухподвесные велосипеды", brand: "Colnago", frame: "Карбон", title: "COLNAGO C68 DISC DURA-ACE DI2 12V", price: 2200, image: "../../images/allBikes/Colnago/col4.jpg", country: "../../images/flags/italy.png" },
      { id: 22, type: "Горные велосипеды", brand: "Colnago", frame: "Карбон", title: "COLNAGO V3 RIM 105", price: 2300, image: "../../images/allBikes/Colnago/col1.jpeg", country: "../../images/flags/italy.png" },
      { id: 23, type: "Городские велосипеды", brand: "Colnago", frame: "Сталь", title: "COLNAGO V3RS DISC ULTEGRA DI2 12V R600 ", price: 2400, image: "../../images/allBikes/Colnago/col7.jpg", country: "../../images/flags/italy.png" },
      { id: 24, type: "Горные велосипеды", brand: "Colnago", frame: "Карбон", title: "COLNAGO V3RS DISC ULTEGRA DI2 12V R600", price: 2500, image: "../../images/allBikes/Colnago/col2.jpg", country: "../../images/flags/italy.png" },
      { id: 25, type: "Городские велосипеды", brand: "Colnago", frame: "Сталь", title: "COLNAGO V3RS DISC ULTEGRA DI2 12V R600 ", price: 2600, image: "../../images/allBikes/Colnago/col9.jpg", country: "../../images/flags/italy.png" },
      { id: 26, type: "Гравийные велосипеды", brand: "Colnago", frame: "Алюминий", title: "COLNAGO C64 DISC DURA ACE DI2 PJRI ", price: 2700, image: "../../images/allBikes/Colnago/col10.jpg", country: "../../images/flags/italy.png" },
      { id: 27, type: "Двухподвесные велосипеды", brand: "Colnago", frame: "Карбон", title: "COLNAGO C64 DISC DURA TEAM JUMBO 2021", price: 2800, image: "../../images/allBikes/Colnago/col5.jpg", country: "../../images/flags/italy.png" },

      { id: 28, type: "Велосипеды для триатлона", brand: "Giant", frame: "Алюминий", title: "GIANT ARX 24 2022 ", price: 2900, image: "../../images/allBikes/Giant/g1.jpg", country: "../../images/flags/usa.png" },
      { id: 29, type: "Горные велосипеды", brand: "Giant", frame: "Карбон", title: "GIANT BELIV 2 CITY F", price: 3000, image: "../../images/allBikes/Giant/g3.jpg", country: "../../images/flags/usa.png" },
      { id: 30, type: "Городские велосипеды", brand: "Giant", frame: "Сталь", title: "GIANT FASTROAD ADVANCED 2 COLD IRON 2022 ", price: 3100, image: "../../images/allBikes/Giant/g4.jpg", country: "../../images/flags/usa.png" },
      { id: 31, type: "Гравийные велосипеды", brand: "Giant", frame: "Алюминий", title: "GIANT CONTEND AR 2 DEEP LAKE 2022 ", price: 3200, image: "../../images/allBikes/Giant/g5.jpg", country: "../../images/flags/usa.png" },
      { id: 32, type: "Двухподвесные велосипеды", brand: "Giant", frame: "Карбон", title: "GIANT CONTEND AR 2 DEEP LAKE 2022", price: 3300, image: "../../images/allBikes/Giant/g6.jpg", country: "../../images/flags/usa.png" },
      { id: 33, type: "Велосипеды для триатлона", brand: "Giant", frame: "Алюминий", title: "GIANT TALON 29 2 KNIGHT SHIELD 2022 ", price: 3400, image: "../../images/allBikes/Giant/g7.jpg", country: "../../images/flags/usa.png" },
      { id: 34, type: "Горные велосипеды", brand: "Giant", frame: "Карбон", title: "GIANT STP 26 METALLIC BLACK 2022", price: 3500, image: "../../images/allBikes/Giant/g8.jpg", country: "../../images/flags/usa.png" },
      { id: 35, type: "Городские велосипеды", brand: "Giant", frame: "Сталь", title: "GIANT STP RIDER 20 ACE DI2 12S ", price: 3600, image: "../../images/allBikes/Giant/g9.jpg", country: "../../images/flags/usa.png" },
      { id: 36, type: "Гравийные велосипеды", brand: "Giant", frame: "Алюминий", title: "GIANT ARADEX GRX810 DI2 ", price: 3700, image: "../../images/allBikes/Giant/g10.jpg", country: "../../images/flags/usa.png" },
      { id: 37, type: "Горные велосипеды", brand: "Giant", frame: "Карбон", title: "GIANT CARBON/WHITE/GREY 2023", price: 3800, image: "../../images/allBikes/Giant/g11.jpg", country: "../../images/flags/usa.png" },
      { id: 38, type: "Городские велосипеды", brand: "Giant", frame: "Сталь", title: "GIANT STP0 V2 X4 1X8 TURQUOISE ", price: 3900, image: "../../images/allBikes/Giant/g1.jpg", country: "../../images/flags/usa.png" },

      { id: 39, type: "Велосипеды для триатлона", brand: "Orbea", frame: "Алюминий", title: "ORBEA MX 16", price: 4000, image: "../../images/allBikes/Orbea/o1.jpg", country: "../../images/flags/spanien.png" },
      { id: 40, type: "Горные велосипеды", brand: "Orbea", frame: "Карбон", title: "ORBEA ONNA 29 40", price: 4100, image: "../../images/allBikes/Orbea/o2.jpg", country: "../../images/flags/spanien.png" },
      { id: 41, type: "Городские велосипеды", brand: "Orbea", frame: "Сталь", title: "ORBEA ORCA M30 ", price: 4200, image: "../../images/allBikes/Orbea/o3.jpg", country: "../../images/flags/spanien.png" },
      { id: 42, type: "Гравийные велосипеды", brand: "Orbea", frame: "Алюминий", title: "ORBEA RALLON M-TEAM ", price: 4300, image: "../../images/allBikes/Orbea/o4.jpg", country: "../../images/flags/spanien.png" },
      { id: 43, type: "Двухподвесные велосипеды", brand: "Orbea", frame: "Карбон", title: "ORBEA ORCA M30", price: 4400, image: "../../images/allBikes/Orbea/o5.jpg", country: "../../images/flags/spanien.png" },
      { id: 44, type: "Велосипеды для триатлона", brand: "Orbea", frame: "Алюминий", title: "ORBEA ONNA 29 50 ", price: 4500, image: "../../images/allBikes/Orbea/o6.jpg", country: "../../images/flags/spanien.png" },
      { id: 45, type: "Горные велосипеды", brand: "Orbea", frame: "Карбон", title: "ORBEA LAUFEY H30", price: 4600, image: "../../images/allBikes/Orbea/o7.jpg", country: "../../images/flags/spanien.png" },
      { id: 46, type: "Городские велосипеды", brand: "Orbea", frame: "Сталь", title: "ORBEA CARPE 40 ", price: 4700, image: "../../images/allBikes/Orbea/o8.jpg", country: "../../images/flags/spanien.png" },
      { id: 47, type: "Гравийные велосипеды", brand: "Orbea", frame: "Алюминий", title: "ORBEA ORCA AERO M20LTD ", price: 4800, image: "../../images/allBikes/Orbea/o9.jpg", country: "../../images/flags/spanien.png" },
      { id: 48, type: "Горные велосипеды", brand: "Orbea", frame: "Карбон", title: "ORBEA ALMA M11-AXS", price: 4900, image: "../../images/allBikes/Orbea/o10.jpg", country: "../../images/flags/spanien.png" },
      { id: 49, type: "Городские велосипеды", brand: "Orbea", frame: "Сталь", title: "ORBEA ALMA M21 ", price: 5000, image: "../../images/allBikes/Orbea/o11.jpg", country: "../../images/flags/spanien.png" },

      { id: 50, type: "Велосипеды для триатлона", brand: "Pinarello", frame: "Алюминий", title: "PINARELLO F9 DURA ACE DI2 RAZOR WHITE", price: 4000, image: "../../images/allBikes/Pinarello/p1.jpg", country: "../../images/flags/italy.png" },
      { id: 51, type: "Горные велосипеды", brand: "Pinarello", frame: "Карбон", title: "PINARELLO GREVIL F7 — SRAM RIVAL ETAP AXS", price: 4100, image: "../../images/allBikes/Pinarello/p2.jpg", country: "../../images/flags/italy.png" },
      { id: 52, type: "Городские велосипеды", brand: "Pinarello", frame: "Сталь", title: "PINARELLO DOGMA X DURA ACE DI2 XOLAR ", price: 4200, image: "../../images/allBikes/Pinarello/p3.jpg", country: "../../images/flags/italy.png" },
      { id: 53, type: "Гравийные велосипеды", brand: "Pinarello", frame: "Алюминий", title: "PINARELLO DOGMA F ETAP AXS NEBULA ", price: 4300, image: "../../images/allBikes/Pinarello/p4.jpg", country: "../../images/flags/italy.png" },
      { id: 54, type: "Двухподвесные велосипеды", brand: "Pinarello", frame: "Карбон", title: "PINARELLO GREVIL F7 — CAMPAGNOLO EKAR", price: 4400, image: "../../images/allBikes/Pinarello/p5.jpg", country: "../../images/flags/italy.png" },
      { id: 55, type: "Велосипеды для триатлона", brand: "Pinarello", frame: "Алюминий", title: "PINARELLO F7 ULTEGRA ", price: 4500, image: "../../images/allBikes/Pinarello/p6.jpg", country: "../../images/flags/italy.png" },
      { id: 56, type: "Горные велосипеды", brand: "Pinarello", frame: "Карбон", title: "PINARELLO GRANGER X1", price: 4600, image: "../../images/allBikes/Pinarello/p7.jpg", country: "../../images/flags/italy.png" },
      { id: 57, type: "Городские велосипеды", brand: "Pinarello", frame: "Сталь", title: "PINARELLO F5 105 DI2 ", price: 4700, image: "../../images/allBikes/Pinarello/p8.jpg", country: "../../images/flags/italy.png" },
      { id: 58, type: "Гравийные велосипеды", brand: "Pinarello", frame: "Алюминий", title: "PINARELLO NYTRO E7 GRAVEL — SRAM FORCE ", price: 4800, image: "../../images/allBikes/Pinarello/p9.jpg", country: "../../images/flags/italy.png" },
      { id: 59, type: "Горные велосипеды", brand: "Pinarello", frame: "Карбон", title: "PINARELLO BOLIDE F HR 3D BLACK TITAN", price: 4900, image: "../../images/allBikes/Pinarello/p10.jpg", country: "../../images/flags/italy.png" },
      { id: 60, type: "Городские велосипеды", brand: "Pinarello", frame: "Сталь", title: "PINARELLO BOLIDE F HR 3D REPLICA HOUR ", price: 5000, image: "../../images/allBikes/Pinarello/p11.jpg", country: "../../images/flags/italy.png" },
      { id: 61, type: "Горные велосипеды", brand: "Pinarello", frame: "Карбон", title: "PINARELLO X9 SHIMANO DURA ACE DI2", price: 4900, image: "../../images/allBikes/Pinarello/p12.jpg", country: "../../images/flags/italy.png" },
    ];
    this._selectedTypes = [];
    this._selectedBrand = {};
    this._selectedFrame = {};
    this._selectedBike = {};
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
  setBikes(bikesAll) {
    this._bikesAll = bikesAll;
  }

  // setSelectedTypes(types) {
  //   this._selectedTypes = types;
  // }

  addSelectedType(typeName) {
    // if (!this._selectedTypes.includes(type)) {
    this._selectedTypes.push(typeName);
    console.log("После добавления:", this._selectedTypes);
    // }
  }
  removeSelectedType(typeName) {
    this._selectedTypes = this._selectedTypes.filter((selectedType) => selectedType !== typeName);
    console.log("После удаления:", this._selectedTypes);
  }
  clearSelectedTypes() {
    this._selectedTypes = [];
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }
  setSelectedFrame(frame) {
    this._selectedFrame = frame;
  }
  setSelectedBike(bike) {
    this._selectedBike = bike;
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
  get bikesAll() {
    return this._bikesAll;
  }

  get selectedTypes() {
    return this._selectedTypes;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
  get selectedFrame() {
    return this._selectedFrame;
  }
  get selectedBike() {
    return this._selectedBike;
  }
}
