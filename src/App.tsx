import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';


export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenreTitle, setSelectedGenreTitle] = useState('');

  function handleClickButton(id: number, title: string) {
    setSelectedGenreId(id);
    setSelectedGenreTitle(title)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
    
      <SideBar
        selectedGenreId={selectedGenreId}
        handleClickButton={handleClickButton}
      />
    
      <Content selectedGenreId={selectedGenreId} title={selectedGenreTitle} />
    
    </div> 
    
  )
}