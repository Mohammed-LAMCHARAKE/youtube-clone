import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Videos, ChannelCard } from './'
import { Box } from '@mui/material'
import http from '../utils/http'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState()
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const getChannelVideos = async () => {
      const { data } = await http.get(`/channels?part=snippet&id=${id}`)

      setChannelDetail(data?.items[0])
      const { data: videos } = await http.get(
        `/search?channelId=${id}&part=snippet%2Cid&order=date`
      )

      setVideos(videos?.items)
    }

    getChannelVideos()
  }, [id])

  return (
    <Box minHeight='100vh'>
      <ChannelCard channelDetail={channelDetail} marginTop='20px' />
      <Box p={4} display='flex' justifyContent={'center'}>
        {/* <Box sx={{ mr: { sm: '100px' } }} /> */}
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
