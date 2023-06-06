import { Box, CircularProgress, Stack } from '@mui/material'

const Loader = () => (
  <Box
    minHeight='95vh'
    width='100%'
    justifyContent='center'
    alignItems='center'
  >
    <Stack
      // direction='row'
      justifyContent='center'
      alignItems='center'
      height='90vh'
    >
      <CircularProgress style={{ color: 'red' }} />
    </Stack>
  </Box>
)

export default Loader
