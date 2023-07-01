import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'
import './_categoriesBar.scss'

const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Ed Shareen',
    'Algorithm Art ',
    'Guitar',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'tanay',
 ]

const CategoriesBar = () => {
    const [activeElement, setActiveElement] = useState('All')

    const dispatch=useDispatch()

    const handleClick=(value)=>{
        setActiveElement(value)
        if(value==='All'){
            dispatch(getPopularVideos())
        }else{
            dispatch(getVideosByCategory(value))
        }
    }
    return (
        <div className="CategoriesBar">
        {keywords.map((value,i)=>(
            <span 
            onClick={()=>handleClick(value)}
            key={i}
            className={activeElement===value?'active':''}>
                {value}</span>
        ))}
        </div>
        
    )
}

export default CategoriesBar
