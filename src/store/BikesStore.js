import { makeAutoObservable } from 'mobx';

export default class BikesStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Triathlonräder' },
      { id: 2, name: 'Mountainbikes' },
      { id: 3, name: 'Urban fahrräder' },
      { id: 4, name: 'Gravelbikes' },
      { id: 5, name: 'Doppelgefederte Fahrräder' },
    ];
    this._brands = [
      { id: 1, name: 'Bianci' },
      { id: 2, name: 'BMC' },
      { id: 3, name: 'Ciclistino' },
      { id: 4, name: 'Colnago' },
      { id: 5, name: 'Giant' },
      { id: 6, name: 'Pinarello' },
      { id: 7, name: 'Orbea' },
    ];
    this._frames = [
      { id: 1, name: 'Aluminium' },
      { id: 2, name: 'Kohlenstoff' },
      { id: 3, name: 'Stahl' },
    ];
    this._bikesAll = [
      { id: 1, type: 'Triathlonräder', brand: 'Bianci', frame: 'Aluminium', title: 'BIANCHI NITRON 9.2 XT/SLX 1X12 ', price: 100, image: '../../images/allBikes/Bianci/b1.png', country: '../../images/flags/italy.png' },
      { id: 2, type: 'Mountainbikes', brand: 'Bianci', frame: 'Kohlenstoff', title: 'BIANCHI OLTRE XR4 CV ULTEGRA DI2 12S R400', price: 200, image: '../../images/allBikes/Bianci/b2.png', country: '../../images/flags/italy.png' },
      { id: 3, type: 'Urban fahrräder', brand: 'Bianci', frame: 'Stahl', title: 'BIANCHI OLTRE RC DURA ACE DI2 12S ', price: 300, image: '../../images/allBikes/Bianci/b3.png', country: '../../images/flags/italy.png' },
      { id: 4, type: 'Gravelbikes', brand: 'Bianci', frame: 'Aluminium', title: 'BIANCHI ARCADEX GRX810 DI2 ', price: 400, image: '../../images/allBikes/Bianci/b4.png', country: '../../images/flags/italy.png' },
      { id: 5, type: 'Doppelgefederte Fahrräder', brand: 'Bianci', frame: 'Kohlenstoff', title: 'BIANCHI AQUILA L DURA ACE DI2 TEAM JUMBO 2021', price: 500, image: '../../images/allBikes/Bianci/b5.png', country: '../../images/flags/italy.png' },

      { id: 6, type: 'Triathlonräder', brand: 'BMC', frame: 'Aluminium', title: 'BMC ALPENCHALLENGE THREE SORA ANTRACITE GREY 2022 ', price: 600, image: '../../images/allBikes/BMC/bmc1.png', country: '../../images/flags/schweiz.png' },
      { id: 7, type: 'Mountainbikes', brand: 'BMC', frame: 'Kohlenstoff', title: 'BMC ROADMACHINE FIVE DI2 CARBON/WHITE/GREY 2023', price: 700, image: '../../images/allBikes/BMC/bmc2.png', country: '../../images/flags/schweiz.png' },
      { id: 8, type: 'Urban fahrräder', brand: 'BMC', frame: 'Stahl', title: 'BMC TWOSTROKE AL 20 V2 X4 1X8 TURQUOISE ', price: 800, image: '../../images/allBikes/BMC/bmc3.png', country: '../../images/flags/schweiz.png' },
      { id: 9, type: 'Gravelbikes', brand: 'BMC', frame: 'Aluminium', title: 'BMC TEAMMACHINE SLR ONE ULTEGRA DI2 2022 ', price: 900, image: '../../images/allBikes/BMC/bmc4.png', country: '../../images/flags/schweiz.png' },
      { id: 10, type: 'Doppelgefederte Fahrräder', brand: 'BMC', frame: 'Kohlenstoff', title: 'BMC FOURSTROKE 01 THREE XT 8100', price: 1000, image: '../../images/allBikes/BMC/bmc5.png', country: '../../images/flags/schweiz.png' },
      { id: 11, type: 'Triathlonräder', brand: 'BMC', frame: 'Aluminium', title: 'BMC NITRON 9.2 XT/SLX 1X12 ', price: 1100, image: '../../images/allBikes/BMC/bmc6.png', country: '../../images/flags/schweiz.png' },

      { id: 12, type: 'Mountainbikes', brand: 'Ciclistino', frame: 'Kohlenstoff', title: 'CICLISTINO RIDER 16 ULTEGRA DI2 12S R400', price: 1200, image: '../../images/allBikes/Ciclistino/c1.png', country: '../../images/flags/italy.png' },
      { id: 13, type: 'Urban fahrräder', brand: 'Ciclistino', frame: 'Stahl', title: 'CICLISTINO RIDER 20 ACE DI2 12S ', price: 1300, image: '../../images/allBikes/Ciclistino/c2.png', country: '../../images/flags/italy.png' },
      { id: 14, type: 'Gravelbikes', brand: 'Ciclistino', frame: 'Aluminium', title: 'CICLISTINO RIDER 20 ARADEX GRX810 DI2 ', price: 1400, image: '../../images/allBikes/Ciclistino/c3.png', country: '../../images/flags/italy.png' },
      { id: 15, type: 'Doppelgefederte Fahrräder', brand: 'Ciclistino', frame: 'Kohlenstoff', title: 'CICLISTINO RIDER 20 ACE DI2 TEAM JUMBO 2021', price: 1500, image: '../../images/allBikes/Ciclistino/c4.png', country: '../../images/flags/italy.png' },
      { id: 16, type: 'Mountainbikes', brand: 'Ciclistino', frame: 'Kohlenstoff', title: 'CICLISTINO RIDER 20 DI2 CARBON/WHITE/GREY 2023', price: 1700, image: '../../images/allBikes/Ciclistino/c5.png', country: '../../images/flags/italy.png' },
      { id: 17, type: 'Urban fahrräder', brand: 'Ciclistino', frame: 'Stahl', title: 'CICLISTINO RIDER 20 20 V2 X4 1X8 TURQUOISE ', price: 1800, image: '../../images/allBikes/Ciclistino/c6.png', country: '../../images/flags/italy.png' },

      { id: 18, type: 'Mountainbikes', brand: 'Colnago', frame: 'Kohlenstoff', title: 'COLNAGO V3 DISC 105 DI2 12V R600 MKWK 2023', price: 1900, image: '../../images/allBikes/Colnago/col1.jpeg', country: '../../images/flags/italy.png' },
      { id: 19, type: 'Urban fahrräder', brand: 'Colnago', frame: 'Stahl', title: 'COLNAGO C68 DISC FORCE AXS W400 HRWH ', price: 2000, image: '../../images/allBikes/Colnago/col2.jpg', country: '../../images/flags/italy.png' },
      { id: 20, type: 'Gravelbikes', brand: 'Colnago', frame: 'Aluminium', title: 'COLNAGO C68 DISC ULTEGRA DI2 12V W400 ', price: 2100, image: '../../images/allBikes/Colnago/col10.jpg', country: '../../images/flags/italy.png' },
      { id: 21, type: 'Doppelgefederte Fahrräder', brand: 'Colnago', frame: 'Kohlenstoff', title: 'COLNAGO C68 DISC DURA-ACE DI2 12V', price: 2200, image: '../../images/allBikes/Colnago/col4.jpg', country: '../../images/flags/italy.png' },
      { id: 22, type: 'Mountainbikes', brand: 'Colnago', frame: 'Kohlenstoff', title: 'COLNAGO V3 RIM 105', price: 2300, image: '../../images/allBikes/Colnago/col1.jpeg', country: '../../images/flags/italy.png' },
      { id: 23, type: 'Urban fahrräder', brand: 'Colnago', frame: 'Stahl', title: 'COLNAGO V3RS DISC ULTEGRA DI2 12V R600 ', price: 2400, image: '../../images/allBikes/Colnago/col7.jpg', country: '../../images/flags/italy.png' },
      { id: 24, type: 'Mountainbikes', brand: 'Colnago', frame: 'Kohlenstoff', title: 'COLNAGO V3RS DISC ULTEGRA DI2 12V R600', price: 2500, image: '../../images/allBikes/Colnago/col2.jpg', country: '../../images/flags/italy.png' },
      { id: 25, type: 'Urban fahrräder', brand: 'Colnago', frame: 'Stahl', title: 'COLNAGO V3RS DISC ULTEGRA DI2 12V R600 ', price: 2600, image: '../../images/allBikes/Colnago/col9.jpg', country: '../../images/flags/italy.png' },
      { id: 26, type: 'Gravelbikes', brand: 'Colnago', frame: 'Aluminium', title: 'COLNAGO C64 DISC DURA ACE DI2 PJRI ', price: 2700, image: '../../images/allBikes/Colnago/col10.jpg', country: '../../images/flags/italy.png' },
      { id: 27, type: 'Doppelgefederte Fahrräder', brand: 'Colnago', frame: 'Kohlenstoff', title: 'COLNAGO C64 DISC DURA TEAM JUMBO 2021', price: 2800, image: '../../images/allBikes/Colnago/col5.jpg', country: '../../images/flags/italy.png' },

      { id: 28, type: 'Triathlonräder', brand: 'Giant', frame: 'Aluminium', title: 'GIANT ARX 24 2022 ', price: 2900, image: '../../images/allBikes/Giant/g1.jpg', country: '../../images/flags/usa.png' },
      { id: 29, type: 'Mountainbikes', brand: 'Giant', frame: 'Kohlenstoff', title: 'GIANT BELIV 2 CITY F', price: 3000, image: '../../images/allBikes/Giant/g3.jpg', country: '../../images/flags/usa.png' },
      { id: 30, type: 'Urban fahrräder', brand: 'Giant', frame: 'Stahl', title: 'GIANT FASTROAD ADVANCED 2 COLD IRON 2022 ', price: 3100, image: '../../images/allBikes/Giant/g4.jpg', country: '../../images/flags/usa.png' },
      { id: 31, type: 'Gravelbikes', brand: 'Giant', frame: 'Aluminium', title: 'GIANT CONTEND AR 2 DEEP LAKE 2022 ', price: 3200, image: '../../images/allBikes/Giant/g5.jpg', country: '../../images/flags/usa.png' },
      { id: 32, type: 'Doppelgefederte Fahrräder', brand: 'Giant', frame: 'Kohlenstoff', title: 'GIANT CONTEND AR 2 DEEP LAKE 2022', price: 3300, image: '../../images/allBikes/Giant/g6.jpg', country: '../../images/flags/usa.png' },
      { id: 33, type: 'Triathlonräder', brand: 'Giant', frame: 'Aluminium', title: 'GIANT TALON 29 2 KNIGHT SHIELD 2022 ', price: 3400, image: '../../images/allBikes/Giant/g7.jpg', country: '../../images/flags/usa.png' },
      { id: 34, type: 'Mountainbikes', brand: 'Giant', frame: 'Kohlenstoff', title: 'GIANT STP 26 METALLIC BLACK 2022', price: 3500, image: '../../images/allBikes/Giant/g8.jpg', country: '../../images/flags/usa.png' },
      { id: 35, type: 'Urban fahrräder', brand: 'Giant', frame: 'Stahl', title: 'GIANT STP RIDER 20 ACE DI2 12S ', price: 3600, image: '../../images/allBikes/Giant/g9.jpg', country: '../../images/flags/usa.png' },
      { id: 36, type: 'Gravelbikes', brand: 'Giant', frame: 'Aluminium', title: 'GIANT ARADEX GRX810 DI2 ', price: 3700, image: '../../images/allBikes/Giant/g10.jpg', country: '../../images/flags/usa.png' },
      { id: 37, type: 'Mountainbikes', brand: 'Giant', frame: 'Kohlenstoff', title: 'GIANT CARBON/WHITE/GREY 2023', price: 3800, image: '../../images/allBikes/Giant/g11.jpg', country: '../../images/flags/usa.png' },
      { id: 38, type: 'Urban fahrräder', brand: 'Giant', frame: 'Stahl', title: 'GIANT STP0 V2 X4 1X8 TURQUOISE ', price: 3900, image: '../../images/allBikes/Giant/g1.jpg', country: '../../images/flags/usa.png' },

      { id: 39, type: 'Triathlonräder', brand: 'Orbea', frame: 'Aluminium', title: 'ORBEA MX 16', price: 4000, image: '../../images/allBikes/Orbea/o1.jpg', country: '../../images/flags/spanien.png' },
      { id: 40, type: 'Mountainbikes', brand: 'Orbea', frame: 'Kohlenstoff', title: 'ORBEA ONNA 29 40', price: 4100, image: '../../images/allBikes/Orbea/o2.jpg', country: '../../images/flags/spanien.png' },
      { id: 41, type: 'Urban fahrräder', brand: 'Orbea', frame: 'Stahl', title: 'ORBEA ORCA M30 ', price: 4200, image: '../../images/allBikes/Orbea/o3.jpg', country: '../../images/flags/spanien.png' },
      { id: 42, type: 'Gravelbikes', brand: 'Orbea', frame: 'Aluminium', title: 'ORBEA RALLON M-TEAM ', price: 4300, image: '../../images/allBikes/Orbea/o4.jpg', country: '../../images/flags/spanien.png' },
      { id: 43, type: 'Doppelgefederte Fahrräder', brand: 'Orbea', frame: 'Kohlenstoff', title: 'ORBEA ORCA M30', price: 4400, image: '../../images/allBikes/Orbea/o5.jpg', country: '../../images/flags/spanien.png' },
      { id: 44, type: 'Triathlonräder', brand: 'Orbea', frame: 'Aluminium', title: 'ORBEA ONNA 29 50 ', price: 4500, image: '../../images/allBikes/Orbea/o6.jpg', country: '../../images/flags/spanien.png' },
      { id: 45, type: 'Mountainbikes', brand: 'Orbea', frame: 'Kohlenstoff', title: 'ORBEA LAUFEY H30', price: 4600, image: '../../images/allBikes/Orbea/o7.jpg', country: '../../images/flags/spanien.png' },
      { id: 46, type: 'Urban fahrräder', brand: 'Orbea', frame: 'Stahl', title: 'ORBEA CARPE 40 ', price: 4700, image: '../../images/allBikes/Orbea/o8.jpg', country: '../../images/flags/spanien.png' },
      { id: 47, type: 'Gravelbikes', brand: 'Orbea', frame: 'Aluminium', title: 'ORBEA ORCA AERO M20LTD ', price: 4800, image: '../../images/allBikes/Orbea/o9.jpg', country: '../../images/flags/spanien.png' },
      { id: 48, type: 'Mountainbikes', brand: 'Orbea', frame: 'Kohlenstoff', title: 'ORBEA ALMA M11-AXS', price: 4900, image: '../../images/allBikes/Orbea/o10.jpg', country: '../../images/flags/spanien.png' },
      { id: 49, type: 'Urban fahrräder', brand: 'Orbea', frame: 'Stahl', title: 'ORBEA ALMA M21 ', price: 5000, image: '../../images/allBikes/Orbea/o11.jpg', country: '../../images/flags/spanien.png' },

      { id: 50, type: 'Triathlonräder', brand: 'Pinarello', frame: 'Aluminium', title: 'PINARELLO F9 DURA ACE DI2 RAZOR WHITE', price: 4000, image: '../../images/allBikes/Pinarello/p1.jpg', country: '../../images/flags/italy.png' },
      { id: 51, type: 'Mountainbikes', brand: 'Pinarello', frame: 'Kohlenstoff', title: 'PINARELLO GREVIL F7 — SRAM RIVAL ETAP AXS', price: 4100, image: '../../images/allBikes/Pinarello/p2.jpg', country: '../../images/flags/italy.png' },
      { id: 52, type: 'Urban fahrräder', brand: 'Pinarello', frame: 'Stahl', title: 'PINARELLO DOGMA X DURA ACE DI2 XOLAR ', price: 4200, image: '../../images/allBikes/Pinarello/p3.jpg', country: '../../images/flags/italy.png' },
      { id: 53, type: 'Gravelbikes', brand: 'Pinarello', frame: 'Aluminium', title: 'PINARELLO DOGMA F ETAP AXS NEBULA ', price: 4300, image: '../../images/allBikes/Pinarello/p4.jpg', country: '../../images/flags/italy.png' },
      { id: 54, type: 'Doppelgefederte Fahrräder', brand: 'Pinarello', frame: 'Kohlenstoff', title: 'PINARELLO GREVIL F7 — CAMPAGNOLO EKAR', price: 4400, image: '../../images/allBikes/Pinarello/p5.jpg', country: '../../images/flags/italy.png' },
      { id: 55, type: 'Triathlonräder', brand: 'Pinarello', frame: 'Aluminium', title: 'PINARELLO F7 ULTEGRA ', price: 4500, image: '../../images/allBikes/Pinarello/p6.jpg', country: '../../images/flags/italy.png' },
      { id: 56, type: 'Mountainbikes', brand: 'Pinarello', frame: 'Kohlenstoff', title: 'PINARELLO GRANGER X1', price: 4600, image: '../../images/allBikes/Pinarello/p7.jpg', country: '../../images/flags/italy.png' },
      { id: 57, type: 'Urban fahrräder', brand: 'Pinarello', frame: 'Stahl', title: 'PINARELLO F5 105 DI2 ', price: 4700, image: '../../images/allBikes/Pinarello/p8.jpg', country: '../../images/flags/italy.png' },
      { id: 58, type: 'Gravelbikes', brand: 'Pinarello', frame: 'Aluminium', title: 'PINARELLO NYTRO E7 GRAVEL — SRAM FORCE ', price: 4800, image: '../../images/allBikes/Pinarello/p9.jpg', country: '../../images/flags/italy.png' },
      { id: 59, type: 'Mountainbikes', brand: 'Pinarello', frame: 'Kohlenstoff', title: 'PINARELLO BOLIDE F HR 3D BLACK TITAN', price: 4900, image: '../../images/allBikes/Pinarello/p10.jpg', country: '../../images/flags/italy.png' },
      { id: 60, type: 'Urban fahrräder', brand: 'Pinarello', frame: 'Stahl', title: 'PINARELLO BOLIDE F HR 3D REPLICA HOUR ', price: 5000, image: '../../images/allBikes/Pinarello/p11.jpg', country: '../../images/flags/italy.png' },
      { id: 61, type: 'Mountainbikes', brand: 'Pinarello', frame: 'Kohlenstoff', title: 'PINARELLO X9 SHIMANO DURA ACE DI2', price: 4900, image: '../../images/allBikes/Pinarello/p12.jpg', country: '../../images/flags/italy.png' },
    ];
    this._selectedTypes = [];
    this._selectedBrands = [];
    this._selectedFrames = [];
    this._selectedBike = {};
    this._currentPage = 1;
    this._totalCount = 0;
    this._perPage = 3;
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
  setPage(page) {
    this._currentPage = page;
  }
  setTotalCount(count) {
    this._totalCount = count;
  }
  setPerPage(perPage) {
    this._perPage = perPage;
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

  addSelectedFrame(frameName) {
    this._selectedFrames.push(frameName);
  }
  removeSelectedFrame(frameName) {
    this._selectedFrames = this._selectedFrames.filter((selectedFrame) => selectedFrame !== frameName);
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

  get selectedBrands() {
    return this._selectedBrands;
  }
  get selectedFrames() {
    return this._selectedFrames;
  }

  get totalCount() {
    return this._totalCount;
  }
  get currentPage() {
    return this._currentPage;
  }
  get perPage() {
    return this._perPage;
  }

  get paginatedBikes() {
    const startIndex = (this._currentPage - 1) * this._perPage;
    const endIndex = startIndex + this._perPage;
    return this._bikesAll.slice(startIndex, endIndex);
  }
}
