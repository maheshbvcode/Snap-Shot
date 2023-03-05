import React, { useRef } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

function TopNavBar() {
  const inputRef = useRef();
  const navigate = useNavigate();
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (inputRef.current.value) { navigate(`/search?key=${inputRef.current.value}`) }
    }

  }
  return (
    <div className='app-header'>
      <h1 className='heading' onClick={() => navigate('/')}>SnapShot</h1>
      <input type='text' className='input-bar' ref={inputRef} onKeyDown={handleKeyPress} />
      <button className='search-Icon' style={{ background: 'rgb(24, 24, 90)' }}
        onClick={() => { if (inputRef.current.value) { navigate(`/search?key=${inputRef.current.value}`); inputRef.current.value = '' } }}><SearchIcon fontSize='small' sx={{ color: 'white' }} /></button>
      <div className='search-class'>
        <p className='list-item' onClick={() => navigate('/mountains')}>Mountains</p>
        <p className='list-item' onClick={() => navigate('/beaches')}>Beaches</p>
        <p className='list-item' onClick={() => navigate('/birds')}>Birds</p>
        <p className='list-item' onClick={() => navigate('/food')}>Food</p>
      </div>
    </div>
  )
}

export default TopNavBar