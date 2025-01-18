import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTgxZWUxMWZmMDE0YzdmNjBhNDU0YWU1ZGJhMWFjZCIsIm5iZiI6MTczNzEwMzExMi40NjcsInN1YiI6IjY3OGExNzA4NTVlNDliZWQ1ZTk3YjBhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dnwgZYv9g22l6iqzCXiCb4exZtujYWw5aGDW6wRxZ9I'
          
    }
   
    });
    
    export default instance;


