// Importar las funciones desde las vistas y modelos
import { getAdds } from "./adds-models.js";
import { buildEmptyAddsList, buildAdd } from "./adds-views.js";


function drawAdds(adds, tweetsContainer) {
    if(!adds.lenght) {
        addsContainer.innerHTML = buildEmptyAddsList()
    } else {
        adds.forEach(add => {
            const newAdd = buildAdd(add);
            addsContainer.appendchild(newAdd)
            
        });
    }
};

function fireEvent(message, type, element) {
    const customEvent = new CustomEvent('loading-adds-info',{
        detail: {
            message,
            type
        }
    })
    element.dispatchEvent(customEvent)
}

export async function addsController(addsContainer) {
    const loading = document.querySelector('.loading')
    addsContainer.innerHTML = "";

    loading.classList.toggle('hidden');
    try {
        const adds = await getAdds()
        fireEvent("Anuncios cargados corectamente", "succes", addsContainer)
        drawAdds(adds, addsContainer)
    } catch (error) {
        fireEvent(error.message, "error", addsContainer)
    } finally {
        loading.classList.toggle('hidden')
    }
    
}