import { Stack } from '@mui/material'
import { categoriesList } from '../utils/globals'

const Sidebar = ({ selectedCategory, setCategory }) => (
  <Stack
    direction='row'
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '99%' },
      flexDirection: { md: 'column' }
      // position: 'sticky'
    }}
  >
    {categoriesList?.map((category) => (
      <button
        className='category-btn'
        onClick={() => setCategory(category.name)}
        style={{
          background: category.name === selectedCategory && '#FC1503',
          color: 'black'
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? 'white' : 'gray',
            marginRight: '10px'
          }}
        >
          {category.icon}
        </span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
)

export default Sidebar
