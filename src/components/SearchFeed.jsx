import { useState, useEffect } from 'react'
import { Typography, Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { Videos } from './'
import http from '../utils/http'

const SearchFeed = () => {
  const [videos, setVideos] = useState(null)
  const { searchQuery } = useParams()

  useEffect(() => {
    http
      .get(`search?part=snippet&q=${searchQuery}`)
      .then(({ data }) => setVideos(data.items))
  }, [searchQuery])

  return (
    <Box p={2} minHeight='95vh'>
      <Typography
        variant='h4'
        fontWeight={900}
        color='black'
        mb={3}
        ml={{ sm: '100px' }}
      >
        Results for <span style={{ color: '#FC1503' }}>{searchQuery}</span>{' '}
        videos
      </Typography>
      <Box display='flex'>
        <Box sx={{ mr: { sm: '100px' } }} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  )
}

export default SearchFeed
