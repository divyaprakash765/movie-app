import axios from '../../utils/axios';
import { removetv, loadtv } from '../reducers/tvSlice';


export const asyncloadtv = (id) => async (dispatch, getState) => {
    try {
        // Fetch all the necessary data
        const detail = await axios.get(`/tv/${id}`);
        const externalid = await axios.get(`/tv/${id}/external_ids`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const translations = await axios.get(`/tv/${id}/translations`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const watchprovider = await axios.get(`/tv/${id}/watch/providers`);
       
        // Combine the fetched data into a single object
        const theultimatedetails = {
            detail: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map(t=>t.name),
            videos: videos.data.results.find((m)=>m.type === "Trailer"),
            watchproviders: watchprovider.data.results.IN,
        };
         
        dispatch(loadtv(theultimatedetails))

    } catch (error) {
        console.error("Error loading tv details:", error);

    }
};
