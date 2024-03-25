export async function getDetailsById(movieId) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODRjMTcwNTQ1YTczMGVhZjhkZmNjYTBmMDdiZTAxOSIsInN1YiI6IjY1MmU1NTI1ZWE4NGM3MDBlYmEzNGE0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gmfjPZoVMNH9YBL0NN3MigtMsgrFdOISYpTIsg8SlRE",
    },
  };
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
