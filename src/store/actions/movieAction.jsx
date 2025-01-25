import axios from '../../utils/axios';
import { removemovie, loadmovie } from '../reducers/movieSlice';

export const asyncloadmovie = (id) => async (dispatch, getState) => {
    try {
        // Fetch all the necessary data
        const detail = await axios.get(`/movie/${id}`);
        const externalid = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const translations = await axios.get(`/movie/${id}/translations`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchprovider = await axios.get(`/movie/${id}/watch/providers`);
       
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
         
        dispatch(loadmovie(theultimatedetails))

    } catch (error) {
        console.error("Error loading movie details:", error);

    }
};
