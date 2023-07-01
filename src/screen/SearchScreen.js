import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import VideoHorizontal from '../components/videoHorizontal/VideoHorizontal'
import { getVideosBySearch } from '../redux/actions/videos.action'

const SearchScreen = () => {
    const {query}=useParams()

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getVideosBySearch(query))
    },[query,dispatch])

    const {videos,loading}=useSelector(state=>state.searchedVideos)

    return (
        <Container>
            {
                !loading?(
                    videos?.map(video=><VideoHorizontal video={video} key={video.id.videoId} searchScreen/>)
                ):<h1>Loading...</h1>
            }
        </Container>
    )
}

export default SearchScreen
