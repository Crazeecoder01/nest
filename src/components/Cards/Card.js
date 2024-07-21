import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Link } from '@mui/material';

const MediaCard = ({ newsItem, isSmallScreen }) => {
  console.log(newsItem)
  const isNews = newsItem.url.includes('news')
  return (
    <Card  sx={{ width: isSmallScreen?'100%':'60%', display: 'flex', flexDirection: isSmallScreen ? 'row' : 'column', p:"10px" }}>
      <CardMedia
        sx={{
          width: isSmallScreen ? '40%' : '100%',
          height: isSmallScreen ? 'auto' : 340,
          objectFit: 'cover', 
          flexShrink: 0
        }}
        image={newsItem.urlToImage ? newsItem.urlToImage : "https://img.freepik.com/free-vector/news-concept-landing-page_23-2148254419.jpg?t=st=1721576195~exp=1721579795~hmac=8b3569eae7b504a4e959ce3538290b2bc57489032c42e5eda22a75afb1397819&w=740"}
        title={newsItem.title}
        alt={newsItem.title}
      />
      <Box sx={{ flex: 1 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {newsItem.title}
          </Typography>
          <Typography>
            <Link href={newsItem.url} sx={{textDecoration:"none"}}>
              <b>honey </b>
            </Link>
            by {newsItem.author ? newsItem.author : "Unknown"} on {newsItem.publishedAt.slice(0, 10)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <br/> 
            {newsItem.description || "Description not available"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">
            <Link href={newsItem.url} sx={{textDecoration:"none"}}>
            Read More
            </Link>
            </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

export default MediaCard
