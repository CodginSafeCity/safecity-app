"use client";
import TicketListTable from "./components/(table-list)/list-tickets-table";
import CreateTicketModal from "./components/create-ticket-modal";

export default function IncidentsPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">Gestión de Incidentes</h1>
          <span className="text-sm text-gray-600">
            Esta es la página de gestión de incidentes.
          </span>
        </div>
        <div>
          <CreateTicketModal />
        </div>
      </div>
      <div>
        <TicketListTable />
      </div>
    </>
  );
}
