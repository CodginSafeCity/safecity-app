"use client";
import CreateUserModal from "./components/createUserModal";

export default function UsersPage() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Gestión de Usuarios</h1>
        <span className="text-sm text-gray-600">
          Esta es la página de gestión de usuarios.
        </span>
      </div>
      <div>
        <CreateUserModal />
      </div>
    </div>
  );
}
