import React, { useEffect, useState, useCallback } from 'react'
import News from './components/news.js'
import NewsContent from './components/NewsContent.js'
import axios from 'axios'
import Footer from './components/Footer.js'

const App = () => {
  const [category, setCategory] = useState("general")
  const [newsArray, setNewsArray] = useState([])
  const [newsCount, setNewsCount] = useState(0)
  const[loadMore, setLoadMore] = useState(20)
  const fetchNews = useCallback(async () => {

    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/"
      const news = await axios.get(`https://${proxyUrl}newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadMore}`)
    
    
      setNewsArray(news.data.articles)
      setNewsCount(news.data.totalResults)
    } catch (error) {
      console.error(error)
    }
  }, [category, loadMore, newsCount])

  useEffect(() => {
    fetchNews()
  }, [fetchNews])

  return (
    <div>
      <News setCategory={setCategory} />
      <NewsContent setLoadMore = {setLoadMore} loadMore = {loadMore} newsArray={newsArray} newsCount={newsCount} />
      <Footer />
    </div>
  )
}

export default App
