import React from 'react'
import FetchData from './FetchData'
import { useSearchParams } from 'react-router-dom';

function Search() {
  const [searchParams] = useSearchParams();
  const value = searchParams.get('key');
  return (
    <FetchData taggy={value} />
  )
}

export default Search