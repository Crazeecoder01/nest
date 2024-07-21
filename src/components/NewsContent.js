import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'
import img1 from '../images/app_store.svg'
import img2 from '../images/play_store.png'
import { useMediaQuery } from '@mui/material'
import MediaCard from './Cards/Card'

const NewsContent = ({setLoadMore, loadMore, newsArray, newsCount }) => {
  const isVisible = useMediaQuery('(min-width:645px)')
  const isSmallScreen = useMediaQuery('(max-width:900px)')
  // if (!isVisible) return null

  return (
    <Container maxWidth='md'>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        {
          isVisible &&(
            <Box 
          sx={{ 
            width: 'auto', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: 'yellow', 
            height: '54px', 
            px: '40px', 
            mt: '20px', 
            mb: '35px', 
            color: 'black', 
            boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)', 
            textAlign: 'center' 
          }}
        >
          <span>For the best experience use <b>Bee</b> app on your smartphone</span>
          <img alt="app store" src={img1} style={{ height: '100px', margin: '0 20px' }} />
          <img alt="play store" src={img2} style={{ height: '30px' }} />
        </Box>
          )
        }
        
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {newsArray.map((newsItem) => (
            <Grid item xs={12} key={newsItem.title} sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
              <MediaCard newsItem={newsItem} isSmallScreen={isSmallScreen}/>
            </Grid>
          ))}
        </Grid>
        {
        loadMore<=newsCount && (
          <>
          <Button onClick={()=>setLoadMore(loadMore+20)} sx={{cursor:"pointer", my:"20px", bgcolor:"black", border:"none", p:"10px", color:"yellow", ":hover":{
        bgcolor:"yellow", color:"black", 
      }}}  >Load More</Button>      
          </>
        )
      }
      </Box>
      
      
    </Container>
  )
}

export default NewsContent
