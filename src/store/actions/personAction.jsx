import axios from '../../utils/axios';
import { removeperson, loadperson } from '../reducers/personSlice';


export const asyncloadperson = (id) => async (dispatch, getState) => {
    try {
        // Fetch all the necessary data
        const detail = await axios.get(`/person/${id}`);
        const externalid = await axios.get(`/person/${id}/external_ids`);
        const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
        const tvCredits = await axios.get(`/person/${id}/tv_credits`);
        const movieCredits = await axios.get(`/person/${id}/combined_credits`);
       
        // Combine the fetched data into a single object
        const theultimatedetails = {
            detail: detail.data,
            externalid: externalid.data,
            combinedCredits: combinedCredits.data,
            movieCredits: movieCredits.data,
            tvCredits: tvCredits.data,
        };
         
        dispatch(loadperson(theultimatedetails))

    } catch (error) {
        console.error("Error loading person details:", error);

    }
};
