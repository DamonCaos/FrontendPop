// Importar las funciones desde las vistas y modelos
import { withLoading } from "../utils/functions.js";
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

    await withLoading(loading, async () => {
        try {
            const ads = await getAds();
            fireEvent("Ads load successfuly", "success", adsContainer);
            drawAds(ads, adsContainer)
        } catch (error) {
            fireEvent(error.message, "error", adsContainer)
        }
    })
   
}