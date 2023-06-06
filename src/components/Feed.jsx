import { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import http from '../utils/http'
import { Videos, Sidebar } from './'

const Feed = () => {
  const [videos, setVideos] = useState([])
  const [category, setCategory] = useState('New')

  useEffect(() => {
    http
      .get(`/search?part=snippet&q=${category}`)
      .then(({ data }) => setVideos(data.items))
  }, [category])

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          px: { sx: 0, md: 2 }
        }}
      >
        <Sidebar selectedCategory={category} setCategory={setCategory} />
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          fontWeight='bold'
          variant='h3'
          mb={3}
          sx={{ color: 'black' }}
        >
          {category} <span style={{ color: '#FC1503' }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
