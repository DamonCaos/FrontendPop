// Importar las funciones desde las vistas y modelos
import { withLoading } from "../utils/functions.js";
import { getAds } from "./ads-models.js";
import { buildEmptyAdsList, buildAd } from "./ads-views.js";

function drawAds(ads, adsContainer) {
    adsContainer.innerHTML = ""; 
    if (!ads.length) {
        adsContainer.innerHTML = buildEmptyAdsList();
    } else {
        ads.forEach(ad => {
            const newAd = buildAd(ad);
            adsContainer.appendChild(newAd);
        });
    }
}

function fireEvent(message, type, element) {
    const customEvent = new CustomEvent('loading-ads-info', {
        detail: {
            message,
            type
        }
    });
    element.dispatchEvent(customEvent);
}

export async function adsController(adsContainer) {
    const loading = document.querySelector('.loading');
    const searchBar = document.querySelector("#search-bar");
    const searchButton = document.querySelector("#search-button");

    let ads = []; 

    
    searchButton.addEventListener('click', () => {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredAds = ads.filter(ad =>
            ad.name.toLowerCase().includes(searchTerm) ||
            ad.description.toLowerCase().includes(searchTerm)
        );
        drawAds(filteredAds, adsContainer);
    });

    searchBar.addEventListener("input", (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredAds = ads.filter(ad =>
            ad.name.toLowerCase().includes(searchTerm) ||
            ad.description.toLowerCase().includes(searchTerm)
        );
        drawAds(filteredAds, adsContainer);
    });

    
    await withLoading(loading, async () => {
        try {
            ads = await getAds(); 
            fireEvent("Ads loaded successfully", "success", adsContainer);
            drawAds(ads, adsContainer); 
        } catch (error) {
            fireEvent(error.message, "error", adsContainer);
        }
    });
}
