import React from "react";

import benefits_image from "../../Assets/images/benefits-img/benefits-img.png";

const Benefits = () => {
  return (
    <section className="lg:my-40 flex flex-col items-center lg:items-baseline">
      <h2 className="lg:py-11 uppercase text-[40px]">Vorteile</h2>
      <div className="lg:flex flex-row">
        <div className="hidden lg:block lg:mr-20">
          <img className="rounded-r-xl h-full w-full object-cover" src={benefits_image} alt="benefits-biker" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 gap-x-20 gap-y-5 lg:gap-x-36">
          <a className="inline-block w-72 h-64 p-8 rounded-xl bg-orange-500 " href="#">
            <h3 className="uppercase text-white mb-4 font-bold">
            kostenlose <br />
            Lieferung
            </h3>
            <p className="text-white mb-6 font-thin">Wir nutzen alle gängigen Versandarten</p>
            <button className="text-white font-medium">Lies mehr</button>
          </a>
          <a className="inline-block w-72 h-64 p-8 rounded-xl bg-orange-500" href="#">
            <h3 className="uppercase text-white mb-4 font-bold">
            Umtausch <br />und Rücksendung
            </h3>
            <p className="text-white mb-6 font-thin">Für alle Produkte gilt eine Herstellergarantie</p>
            <button className="text-white font-medium">Lies mehr</button>
          </a>
          <a className="inline-block w-72 h-64 p-8 rounded-xl bg-orange-500" href="#">
            <h3 className="uppercase text-white mb-4 font-bold">
            zusätzlicher <br />
            Service
            </h3>
            <p className="text-white mb-6 font-thin">Wir führen Fahrradreparaturen jeder Komplexität durch</p>
            <button className="text-white font-medium">Lies mehr</button>
          </a>
          <a className="inline-block w-72 h-64 p-8 rounded-xl bg-orange-500" href="#">
            <h3 className="uppercase text-white mb-4 font-bold">
            Zahlung & <br />
            Finanzierung
            </h3>
            <p className="text-white mb-6 font-thin">Der Einfachheit halber können Sie Waren über die Website per Kreditkarte bezahlen</p>
            <button className="text-white font-medium">Lies mehr</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
