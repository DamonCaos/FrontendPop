// Importar las funciones desde las vistas y modelos
import { getAds } from "./ads-models.js";
import { buildEmptyAdsList, buildAd } from "./ads-views.js";


function drawAds(adds, tweetsContainer) {
    if(!adds.lenght) {
        addsContainer.innerHTML = buildEmptyAdsList()
    } else {
        adds.forEach(add => {
            const newAdd = buildAd(add);
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

export async function adsController(adsContainer) {
    const loading = document.querySelector('.loading')
    adsContainer.innerHTML = "";

    loading.classList.toggle('hidden');
    try {
        const ads = await getAds()
        fireEvent("Anuncios cargados corectamente", "succes", adsContainer)
        drawAds(ads, adsContainer)
    } catch (error) {
        fireEvent(error.message, "error", adsContainer)
    } finally {
        loading.classList.toggle('hidden')
    }
    
}