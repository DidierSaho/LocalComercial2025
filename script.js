const storeData = {
    1: {
        name: 'Perfumeria',
        description: 'Descubri distintos aromas que te haran sentirte renovad@.',
        details: 'Horario: 10:00 AM - 8:00 PM | Tel: (555) 001-1000'
    },
    2: {
        name: 'Café Tradicional',
        description: 'Experimenta el auténtico sabor del té verde y café artesanal japonés.',
        details: 'Horario: 9:00 AM - 9:00 PM | Tel: (555) 001-2000'
    },
    3: {
        name: 'Tienda de Ropa ZARA',
        description: 'Colecciones modernas con inspiración y estilo .',
        details: 'Horario: 10:00 AM - 8:00 PM | Tel: (555) 001-3000'
    },
    4: {
        name: 'Tienda de accesorios y guarderia de mascotas - 4Patas',
        description: 'Todo lo necesario para tu mascota.',
        details: 'Horario: 10:00 AM - 8:00 PM | Tel: (555) 001-4000'
    },
    5: {
        name: 'Patio de comidas',
        description: 'Comidas frias,calientes para llevar o comer en el lugar.',
        details: 'Horario: 11:00 AM - 7:00 PM | Tel: (555) 001-5000'
    }
};

// Obtener elementos del DOM
const storeItems = document.querySelectorAll('.store-item');
const storeTitle = document.getElementById('store-title');
const storeDescription = document.getElementById('store-description');
const storeDetails = document.getElementById('store-details');

// Función para mostrar información del local
function displayStoreInfo(storeNum) {
    const store = storeData[storeNum];

    storeTitle.textContent = store.name;
    storeDescription.textContent = store.description;
    storeDetails.textContent = store.details;
}

// Event listeners para cada local
storeItems.forEach(item => {
    item.addEventListener('click', function() {
        const storeNum = this.getAttribute('data-store');
        displayStoreInfo(storeNum);

        // Remover clase activa de todos
        storeItems.forEach(s => s.classList.remove('active'));
        this.classList.add('active');
    });

    // Mostrar info al pasar el mouse
    item.addEventListener('mouseenter', function() {
        const storeNum = this.getAttribute('data-store');
        displayStoreInfo(storeNum);
    });
});

// Cargar primer local al iniciar
window.addEventListener('DOMContentLoaded', function() {
    displayStoreInfo(1);
});
