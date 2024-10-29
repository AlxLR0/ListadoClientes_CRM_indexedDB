let DB;  // Declarar DB globalmente para todos los archivos

function conectarDB() {
    const abrirConexion = window.indexedDB.open('crm', 1);
    abrirConexion.onerror = function () {
        console.log('Hubo un error al conectar a la base de datos');
    };

    abrirConexion.onsuccess = function () {
        DB = abrirConexion.result;
    };
}

function imprimirAlerta(mensaje, tipo) {
    const alerta = document.querySelector('.alerta');
    if (!alerta) {
        // Crear la alerta
        const divMensaje = document.createElement('div');
        divMensaje.classList.add(
            'px-4',
            'py-3',
            'rounded',
            'max-w-lg',
            'mx-auto',
            'mt-6',
            'text-center',
            'border',
            'alerta'
        );

        if (tipo === 'error') {
            divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
        } else {
            divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
        }

        divMensaje.textContent = mensaje;

        // Obtener el formulario de la página actual para agregar el mensaje
        const formulario = document.querySelector('#formulario');
        if (formulario) {
            formulario.appendChild(divMensaje);
        }

        // Eliminar la alerta después de 3 segundos
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}
