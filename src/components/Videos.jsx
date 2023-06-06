import { Stack } from '@mui/material'

import { ChannelCard, Loader, VideoCard } from './'

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent='center'
      alignItems='start'
      gap={1}
    >
      {videos.map((item, idx) => (
        <>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </>
      ))}
    </Stack>
  )
}

export default Videos
