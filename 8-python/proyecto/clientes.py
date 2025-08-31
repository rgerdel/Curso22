import json
import os
import uuid
import re
from datetime import datetime
from typing import List, Dict, Optional

ARCHIVO_DATOS = "clientes.json"

# -------------------------------------------------
# Funciones de persistencia
# -------------------------------------------------
def cargar_clientes() -> List[Dict]:
    """Carga los clientes desde el archivo JSON. Si no existe, retorna lista vacía."""
    if not os.path.isfile(ARCHIVO_DATOS):
        return []
    try:
        with open(ARCHIVO_DATOS, "r", encoding="utf-8") as f:
            return json.load(f)
    except (json.JSONDecodeError, OSError):
        print("⚠️  Advertencia: el archivo de datos está corrupto o no se puede leer.")
        return []

def guardar_clientes(clientes: List[Dict]) -> None:
    """Guarda la lista de clientes en disco."""
    with open(ARCHIVO_DATOS, "w", encoding="utf-8") as f:
        json.dump(clientes, f, ensure_ascii=False, indent=2)

# -------------------------------------------------
# Validaciones
# -------------------------------------------------
EMAIL_REGEX = re.compile(r"^[^@]+@[^@]+\.[^@]+$")

def validar_email(email: str) -> bool:
    return bool(EMAIL_REGEX.match(email))

def validar_telefono(telefono: str) -> bool:
    return telefono.isdigit() and 7 <= len(telefono) <= 15

def validar_fecha(fecha: str) -> bool:
    try:
        datetime.strptime(fecha, "%Y-%m-%d")
        return True
    except ValueError:
        return False

# -------------------------------------------------
# Entrada segura
# -------------------------------------------------
def pedir_campo(prompt: str, validador=None, obligatorio=True) -> str:
    """Solicita un campo por consola y lo valida."""
    while True:
        valor = input(prompt).strip()
        if not obligatorio and valor == "":
            return valor
        if obligatorio and valor == "":
            print("❌  Este campo es obligatorio.")
            continue
        if validador and not validador(valor):
            print("❌  Formato inválido.")
            continue
        return valor

# -------------------------------------------------
# Funciones CRUD
# -------------------------------------------------
def registrar_cliente(clientes: List[Dict]) -> None:
    print("\n--- Registrar nuevo cliente ---")
    email = pedir_campo("Correo electrónico: ", validar_email)
    if any(c["correo"].lower() == email.lower() for c in clientes):
        print("⚠️  Ya existe un cliente con ese correo.")
        return

    cliente = {
        "id": str(uuid.uuid4()),
        "nombre": pedir_campo("Nombre: "),
        "apellido": pedir_campo("Apellido: "),
        "telefono": pedir_campo("Teléfono: ", validar_telefono),
        "correo": email,
        "fecha_nacimiento": pedir_campo("Fecha de nacimiento (YYYY-MM-DD): ", validar_fecha),
    }
    clientes.append(cliente)
    guardar_clientes(clientes)
    print("✅ Cliente registrado con éxito.")
    # Mensaje de bienvenida simulado
    print(f"📱 WhatsApp simulado: Hola {cliente['nombre']}, bienvenido/a!")

def listar_clientes(clientes: List[Dict]) -> None:
    if not clientes:
        print("No hay clientes registrados.")
        return
    clientes_ordenados = sorted(clientes, key=lambda c: (c["apellido"].lower(), c["nombre"].lower()))
    print("\n--- Listado de clientes ---")
    print(f"{'ID':<36} {'Apellido':<15} {'Nombre':<15} {'Teléfono':<12} {'Correo':<25} {'Fecha Nac.'}")
    print("-" * 120)
    for c in clientes_ordenados:
        print(f"{c['id']:<36} {c['apellido']:<15} {c['nombre']:<15} {c['telefono']:<12} {c['correo']:<25} {c['fecha_nacimiento']}")

def buscar_cliente(clientes: List[Dict]) -> Optional[Dict]:
    print("\n--- Buscar cliente ---")
    termino = pedir_campo("Correo o teléfono a buscar: ", obligatorio=True).strip().lower()
    for c in clientes:
        if c["correo"].lower() == termino or c["telefono"] == termino:
            return c
    return None

def actualizar_cliente(clientes: List[Dict]) -> None:
    print("\n--- Actualizar cliente ---")
    ident = pedir_campo("Correo o ID del cliente a actualizar: ")
    cliente = None
    for c in clientes:
        if c["id"] == ident or c["correo"].lower() == ident.lower():
            cliente = c
            break
    if not cliente:
        print("❌ Cliente no encontrado.")
        return

    print("Deja en blanco para mantener el valor actual.")
    cliente["nombre"] = pedir_campo(f"Nombre [{cliente['nombre']}]: ", obligatorio=False) or cliente["nombre"]
    cliente["apellido"] = pedir_campo(f"Apellido [{cliente['apellido']}]: ", obligatorio=False) or cliente["apellido"]
    tel = pedir_campo(f"Teléfono [{cliente['telefono']}]: ", validar_telefono, obligatorio=False)
    if tel:
        cliente["telefono"] = tel
    email = pedir_campo(f"Correo [{cliente['correo']}]: ", validar_email, obligatorio=False)
    if email:
        if any(c["correo"].lower() == email.lower() and c["id"] != cliente["id"] for c in clientes):
            print("⚠️  Ya existe otro cliente con ese correo.")
            return
        cliente["correo"] = email
    fecha = pedir_campo(f"Fecha nacimiento [{cliente['fecha_nacimiento']}]: ", validar_fecha, obligatorio=False)
    if fecha:
        cliente["fecha_nacimiento"] = fecha

    guardar_clientes(clientes)
    print("✅ Cliente actualizado.")

def borrar_cliente(clientes: List[Dict]) -> None:
    print("\n--- Borrar cliente ---")
    ident = pedir_campo("Correo o ID del cliente a borrar: ")
    cliente = None
    for c in clientes:
        if c["id"] == ident or c["correo"].lower() == ident.lower():
            cliente = c
            break
    if not cliente:
        print("❌ Cliente no encontrado.")
        return

    listar_clientes([cliente])
    confirmar = pedir_campo("¿Estás seguro de borrarlo? (s/n): ").lower()
    if confirmar == "s":
        clientes.remove(cliente)
        guardar_clientes(clientes)
        print("✅ Cliente eliminado.")
    else:
        print("Operación cancelada.")

# -------------------------------------------------
# Menú principal
# -------------------------------------------------
def mostrar_menu() -> None:
    print("\n========== MENÚ CLIENTES ==========")
    print("1) Registrar cliente")
    print("2) Ver todos los clientes")
    print("3) Buscar cliente")
    print("4) Actualizar cliente")
    print("5) Borrar cliente")
    print("0) Salir")
    print("===================================")

def main() -> None:
    clientes = cargar_clientes()
    while True:
        mostrar_menu()
        opcion = input("Seleccione una opción: ").strip()
        if opcion == "1":
            registrar_cliente(clientes)
        elif opcion == "2":
            listar_clientes(clientes)
        elif opcion == "3":
            c = buscar_cliente(clientes)
            if c:
                listar_clientes([c])
            else:
                print("❌ No se encontró ningún cliente.")
        elif opcion == "4":
            actualizar_cliente(clientes)
        elif opcion == "5":
            borrar_cliente(clientes)
        elif opcion == "0":
            print("👋 Hasta luego!")
            break
        else:
            print("❌ Opción inválida.")

if __name__ == "__main__":
    main()