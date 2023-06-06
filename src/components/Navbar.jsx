import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { SearchBar } from './'

const Navbar = () => (
  <Stack
    direction='row'
    alignItems='center'
    p={1}
    sx={{
      position: 'sticky',
      justifyContent: 'space-between',
      background: 'white',
      top: 0
    }}
  >
    <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpzXzzfXAkqADc0HVNotRyn9ztiEZAjqz00YARqXIjJvJMJZnoUXXnaTYb1oXOh04id4Y&usqp=CAU'
        }
        alt='logo'
        height={42}
      />
      <div
        style={{ marginLeft: '5px', fontWeight: 'bolder', fontSize: '1.5rem' }}
      >
        Streamer
      </div>
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar
