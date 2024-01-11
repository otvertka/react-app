import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
// import EquipmentsStore from "../store/EquipmentsStore";
import EquipmentsAccorion from '../components/Layout/EquipmentsAccorion';
import EquipmentsList from '../components/UI/EquipmentsList';
import Pagination from '../components/UI/Pagination';

// const store = new EquipmentsStore();

const EquipmentsPage = observer(() => {
  const { equipments } = useContext(Context);

  console.log(equipments);
  const { types, brands, equipmentsAll, selectedBrands, selectedTypes } =
    equipments;

  const typesNames = types.map((type, index) => ({ name: type.name, index }));
  const brandNames = brands.map((brand, index) => ({
    name: brand.name,
    index,
  }));

  const filteredEquipments = equipmentsAll
    .filter(
      (equip) => !selectedTypes.length || selectedTypes.includes(equip.type)
    )
    .filter(
      (equip) => !selectedBrands.length || selectedBrands.includes(equip.brand)
    );

  console.log('filteredEquipments:', filteredEquipments);
  const [currentPage, setCurrentPage] = useState(1);
  const [equipmentsPerPage, setEquipmentPerPage] = useState(4);
  const indexOfLastEquipment = currentPage * equipmentsPerPage;
  const indexOfFirstEquipment = indexOfLastEquipment - equipmentsPerPage;
  const currentEquipments = filteredEquipments.slice(
    indexOfFirstEquipment,
    indexOfLastEquipment
  );

  return (
    <section>
      <h1>EquipmentsPage</h1>
      <div className='flex'>
        <div className='border border-red-700'>
          <EquipmentsAccorion
            items={{ brands: brandNames, types: typesNames }}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div className='pl-2'>
          <EquipmentsList equipments={currentEquipments} />
        </div>
      </div>
      <Pagination
        itemsPerPage={equipmentsPerPage}
        totalItems={filteredEquipments.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
});

export default EquipmentsPage;
