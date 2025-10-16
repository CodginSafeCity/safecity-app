"use client";

import ListControlCentersTable from "./components/(table-list)/list-control-centers-table";
import CreateControlEntityModal from "./components/create-control-entity-modal";

export default function ControlCenterPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">Gestión de centros de control</h1>
          <span className="text-sm text-gray-600">
            Esta es la página de gestión de los centros de control.
          </span>
        </div>
        <div>
          <CreateControlEntityModal />
        </div>
      </div>
      <div>
        <ListControlCentersTable />
      </div>
    </>
  );
}
