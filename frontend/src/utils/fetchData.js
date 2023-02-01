export const exerciseOptions =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4ef9b79f78mshd67a3036da193bcp1655e2jsn9552cf5a361f',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd6e3f18f8amsh8a301bf197acea9p1382b6jsne97876a09f31',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async(url, options) =>{
  const response = await fetch(url, options);
  const data = await  response.json();

  return data
}