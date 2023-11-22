import React from "react";
import { observer } from "mobx-react-lite";

import AccessoriesStore from "../store/AccsessoriesStore";
import AccessList from "../components/UI/AccessList";
import AccessAccordion from "../components/Layout/AccessAccordion";

const store = new AccessoriesStore();

const AccessoriesPage = observer(() => {
  const { types, brands } = store;

  const typesNames = types.map((type, index) => ({ name: type.name, index }));
  const brandNames = brands.map((brand, index) => ({ name: brand.name, index }));

  return (
    <section>
      <h1>ACCESSORIES PAGE</h1>
      <div className="flex">
        <div className="border border-red-700">
          <AccessAccordion items={{ brands: brandNames, types: typesNames }} />
        </div>

        <div className="pl-2">
          <AccessList />
        </div>
      </div>
    </section>
  );
});

export default AccessoriesPage;
