// import React, { useState } from 'react';
// import MovieList from './Movies/MovieList'
// import Movie from './Movies/Movie'
// import { Route } from 'react-router-dom';


// import SavedList from './Movies/SavedList';

// const App = () => {
//   const [savedList, setSavedList] = useState( [] );

//   const addToSavedList = movie => {
//     setSavedList( [...savedList, movie] );
//   };

//   return (
//     <div>
//       <SavedList list={savedList} />
//       <Route exact path='/' render ={(props) => (<MovieList{...props}/>)}/> 
//       <Route path='movie/:id' render ={(props) => (<Movie{...props}/>)}/> 
//       <div>


//       </div>

//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" render={(props) => (<MovieList{...props}/>)}/>
      <Route path="/movies/:id" render={(props) => (<Movie{...props}/>)}/>
    </div>
  );
};
export default App;