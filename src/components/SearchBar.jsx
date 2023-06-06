import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = () => {
  const [searchQuery, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const onhandleSubmit = (e) => {
    e.preventDefault()

    if (searchQuery) {
      navigate(`/search/${searchQuery}`)
      setSearchTerm('')
    }
  }

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1.5px solid red',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 3 }
      }}
    >
      <input
        className='search-bar'
        placeholder='Search'
        value={searchQuery}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type='submit'
        sx={{ p: '7px', color: 'gray' }}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
