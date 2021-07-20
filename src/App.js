import React from 'react'
import SearchBar from './components/SearchBar/SearchBar'



function App() {
  return (
    <div>
      <h1>Repo Search</h1>
      <SearchBar />
      {/* removed results child component from here so that I could be able to pass my state */}
    </div>
  );
}

export default App;
