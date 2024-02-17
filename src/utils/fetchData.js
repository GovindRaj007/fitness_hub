export  const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  params: {limit: '800'},
  headers: {
    'X-RapidAPI-Key': 'e418b1f8bcmsh8f3916266bf1de1p18e38fjsnb2c7479ccc39',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
  
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e418b1f8bcmsh8f3916266bf1de1p18e38fjsnb2c7479ccc39',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData=async(url,options)=>{
    const res =await fetch(url,options);
    const data=await res.json();
    return data;
};