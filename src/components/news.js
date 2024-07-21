import React from 'react'
import TemporaryDrawer from './Menu'
import img from '../images/nest_logo.png'
import { Box } from '@mui/material'
import { useMediaQuery } from '@mui/material'

const News = ({ setCategory }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)')
  const isMediumScreen = useMediaQuery('(max-width:900px)')

  return (
    <Box sx={{ width: '100%', boxShadow: '10px 0px 22px gray', overflow: 'hidden', margin: 0, padding: 0}}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', flexDirection:  'row', justifyContent: isSmallScreen || isMediumScreen ? 'center' : 'space-between' }}>
        <TemporaryDrawer setCategory={setCategory} />
        <Box sx={{ display: 'flex', justifyContent: 'center', width: isSmallScreen ? '100%' : 'auto', margin: isSmallScreen ? '16px 0' : '0 auto' }}>
          <img src={img} alt="logo" style={{ width: isSmallScreen ? '150px' : '240px', height: 'auto' }} />
        </Box>
      </Box>
    </Box>
  )
}

export default News
