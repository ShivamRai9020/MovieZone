import React, { useState } from 'react';
import { movies } from './data.js';

export const Movies = () => {
  const [movieList, setmovieList] = useState(movies)

const filterBycategory = (cat) =>{
  setmovieList(movies.filter((data)=>data.category == cat))
}

  return (
    <>
    <div className='mx-auto text-center'>
    <div className= "my-3" style={{width:'1000px',margin:'auto'}}>
    <button onClick={()=> setmovieList(movies)} type="button" className="btn btn-outline-primary mx-3" >All</button>
<button onClick={()=> filterBycategory("Action")} type="button" className="btn btn-outline-primary mx-3" >Action</button>
<button onClick={()=> filterBycategory("Thriller")} type="button" className="btn btn-outline-light mx-3" >Thriller</button>
<button onClick={()=> filterBycategory("Animation")} type="button" className="btn btn-outline-info mx-3" >Animation</button>
<button onClick={()=> filterBycategory("Horror")} type="button" className="btn btn-outline-warning mx-3" >Horror</button>
<button onClick={()=> filterBycategory("Drama")} type="button" className="btn btn-outline-info mx-3" >Drama</button>
<button onClick={()=> filterBycategory("Sci-Fi")} type="button" className="btn btn-outline-light mx-3" >Sci-Fi</button>
    </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
      flexWrap:'wrap',textAlign:'center',width:'1300px', margin:'auto', marginTop:'1.5rem'
     }}>
      {movieList.map((data) => <div key={data.id} style={{maxWidth:'280px', textAlign:'center'}}>
        <div style={{padding:'10px'}} className="hover_effect">
          <img src={data.poster_path} alt="" style={{ width: '200px',height:'280px', borderRadius:'10px', border:'1px solid yellow' }} />
        </div>
        <h5>{data.title}</h5>
        <p>{data.release_date}</p>
      </div>
      )}
    </div>
    </>
  );
};