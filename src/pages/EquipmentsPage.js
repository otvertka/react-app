import React from "react";
import { observer } from "mobx-react-lite";

import EquipmentsStore from "../store/EquipmentsStore";
import EquipmentsAccorion from "../components/Layout/EquipmentsAccorion";
import EquipmentsList from "../components/UI/EquipmentsList";

const store = new EquipmentsStore();

const EquipmentsPage = observer(() => {
  const { types, brands } = store;

  const typesNames = types.map((type, index) => ({ name: type.name, index }));
  const brandNames = brands.map((brand, index) => ({ name: brand.name, index }));

  return (
    <section>
      <h1>EquipmentsPage</h1>
      <div className="flex">
        <div className="border border-red-700">
          <EquipmentsAccorion items={{ brands: brandNames, types: typesNames }} />
        </div>

        <div className="pl-2">
          <EquipmentsList />
        </div>
      </div>
    </section>
  );
});

export default EquipmentsPage;
