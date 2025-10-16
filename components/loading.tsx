export function LoadingComponent() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-slate-100">
      <div className="flex flex-col items-center gap-4">
        <span className="w-10 h-10 border-4  border-t-transparent rounded-full animate-spin"></span>
        <p className="text-lg font-semibold">Cargando...</p>
      </div>
    </div>
  );
}
