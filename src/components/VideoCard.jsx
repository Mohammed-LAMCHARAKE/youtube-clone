import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Link } from 'react-router-dom'

const VideoCard = ({
  video: {
    id: { videoId },
    snippet
  }
}) => (
  <Card
    sx={{
      width: { xs: '100%', sm: '358px', md: '320px' },
      borderRadius: 2
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        sx={{
          width: { xs: '100%', sm: '358px' },
          height: 190,
          backgroundSize: 'cover',
          objectfit: 'cover'
        }}
      />
    </Link>
    <CardContent sx={{ height: '100px' }}>
      <Link to={`/video/${videoId}`}>
        <Typography>{snippet?.title.slice(0, 60)}</Typography>
      </Link>
      <Link to={`/channel/${snippet?.channelId}`}>
        <Typography variant='subtitle2' color='gray'>
          {snippet?.channelTitle}
          <CheckCircleIcon
            sx={{ fontSize: '1rem', color: 'gray', ml: '5px' }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
)

export default VideoCard
