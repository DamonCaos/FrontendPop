// Importar las funciones desde las vistas y modelos
import { getAds } from "./ads-models.js";
import { buildEmptyAdsList, buildAd } from "./ads-views.js";


function drawAds(ads, adsContainer) {
    if(!ads.length) {
        adsContainer.innerHTML = buildEmptyAdsList()
    } else {
        ads.forEach(ad => {
            const newAd = buildAd(ad);
            adsContainer.appendChild(newAd)
            
        });
    }
};

function fireEvent(message, type, element) {
    const customEvent = new CustomEvent('loading-ads-info',{
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

    loading.classList.remove('hidden');
    try {
        const ads = await getAds()
        fireEvent("Anuncios cargados corectamente", "succes", adsContainer)
        drawAds(ads, adsContainer)
    } catch (error) {
        fireEvent(error.message, "error", adsContainer)
    } finally {
        loading.classList.add('hidden')
    }
    
}