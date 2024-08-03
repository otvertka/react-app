import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import EquipmentsAccordion from '../components/Layout/EquipmentsAccordion';
import EquipmentsList from '../components/UI/EquipmentsList';
import Pagination from '../components/UI/Pagination';

const EquipmentsPage = observer(() => {
  const { equipments } = useContext(Context);
  const { types, brands, equipmentsAll, selectedBrands, selectedTypes } = equipments;

  const typesNames = types.map((type, index) => ({ name: type.name, index }));
  const brandNames = brands.map((brand, index) => ({ name: brand.name, index }));

  const filteredEquipments = equipmentsAll
    .filter(equip => !selectedTypes.length || selectedTypes.includes(equip.type))
    .filter(equip => !selectedBrands.length || selectedBrands.includes(equip.brand));

  const [currentPage, setCurrentPage] = useState(1);
  const [equipmentsPerPage, setEquipmentPerPage] = useState(6);
  const indexOfLastEquipment = currentPage * equipmentsPerPage;
  const indexOfFirstEquipment = indexOfLastEquipment - equipmentsPerPage;
  const currentEquipments = filteredEquipments.slice(indexOfFirstEquipment, indexOfLastEquipment);

  return (
    <section className='bg-gray-200 min-h-screen flex flex-col items-center'>
      <h1 className='text-center my-4'>EquipmentsPage</h1>
      <div className='flex flex-col md:flex-row w-full max-w-6xl'>
        <div className='bg-gray-50 w-full md:w-1/4 p-4'>
          <EquipmentsAccordion
            items={{ brands: brandNames, types: typesNames }}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div className='pl-4 w-full md:w-3/4'>
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
