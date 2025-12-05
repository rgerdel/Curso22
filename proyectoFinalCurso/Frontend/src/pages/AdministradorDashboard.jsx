function AdministradorDashboard() {
  return (
<div class="max-w-5xl mx-auto px-4 py-8">
    <div class="px-4 py-5 border border-gray-200 flex items-center justify-between">
        <div class="flex items-center">
            <span class="text-2xl font-bold">SISTEMA DE GESTION ESTUDIANTIL</span>
        </div>
        <div class="flex flex-col items-end space-y-2">
            <span class="font-semibold text-sm">NOMBRE Y APELLIDO</span>
            <a href="/perfil" class="text-blue-500 hover:text-blue-700 text-xs"><i class="fa-regular fa-address-card"></i> VER PERFIL</a>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
                <i class="fa-solid fa-xmark"></i> CERRAR SESION
            </button>
        </div>
    </div>
    <div class="px-4 py-5 border border-gray-200 flex items-center justify-between">
        <div class="flex items-center space-x-2 text-sm font-bold">
            Panel del Administrador
        </div>
        <div class="flex items-center space-x-4 font-bold text-sm">
            BIENVENIDO 
        </div>
    </div>
    <div class="bg-gray-100 flex justify-between gap-4 px-2 py-8">
        <div class="bg-gray-100 h-40 rounded-2xl border border-gray-400 p-4 text-center w-full sm:w-1/3 md:w-1/3 lg:w-1/3 relative">
            <p className="text-1xl font-bold text-gray-800 uppercase">Gestion de Usuarios</p>
            <p className="text-sm text-justify">Administrar profesores y estudiantes. 
                <br></br>Registra y administra usuarios del sistema.</p>
            <br></br>
            <p class="mb-20 relative">
                <a href="/usuarios" class="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded text-xs absolute bottom--10 right-0 mb-4 mr-4">
                    <i class="fa-solid fa-circle-check"></i> ENTRAR
                </a>
            </p>
        </div>
        <div class="bg-gray-100 h-40 rounded-2xl border border-gray-400 p-4 text-center w-full sm:w-1/3 md:w-1/3 lg:w-1/3 relative">
            <p className="text-1xl font-bold text-gray-800 uppercase">Gestion de Materias</p>
            <p className="text-sm text-justify">Administrar asignaturas.<br></br> Crea y asigna materias a profesores.</p>
            <br></br>
            <p class="mb-20 relative">
                <a href="/login" class="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded text-xs absolute bottom--10 right-0 mb-4 mr-4">
                    <i class="fa-solid fa-circle-check"></i> ENTRAR
                </a>
            </p>
        </div>
        <div class="bg-gray-100 h-40 rounded-2xl border border-gray-400 p-4 text-center w-full sm:w-1/3 md:w-1/3 lg:w-1/3">
            <p className="text-1xl font-bold text-gray-800 uppercase">Gestion de Grados</p>
            <p className="text-sm text-justify">Administrar niveles académicos.<br></br> Organiza estudiantes por grados.</p>
            <br></br>
            <p class="mb-20 relative">
                <a href="/login" class="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded text-xs absolute bottom--10 right-0 mb-4 mr-4">
                    <i class="fa-solid fa-circle-check"></i> ENTRAR
                </a>
            </p>
        </div>
    </div> 
</div>
  );
}

export { AdministradorDashboard }