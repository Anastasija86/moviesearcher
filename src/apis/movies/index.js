import { requstMethods } from 'apis/requestMethods';

async function fetchMovie(url) {

    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = "https://api.themoviedb.org/3/";


    const options = {
      method: requstMethods.GET,
      headers: {
        accept: "application/json",
        Authorization: apiKey,
      },
    };
    try {
        const response = await fetch(`${apiUrl}movie/${url}`, options);
        if (!response.ok) {
        
            throw new Error('Network response was not ok!');
            
        };
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        console.error(error);
        throw error;
    }
}


export async function getPopular() {
    return await fetchMovie("popular?language=en-US&page=1");
}

export async function getDetailsById(movieId) {
   return await fetchMovie(`${movieId}?language=en-US`);
}

export async function getActorList(movieId) {
   return await fetchMovie(`${movieId}/credits?language=en-US`);
}

export  async function getReviews(movieId) {
    return await  fetchMovie(`${movieId}/reviews?language=en-US&page=1`);
}
