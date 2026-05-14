import { useEffect, useState } from "react";
import "./style.css"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";



export default function ImageSlider({url, limit = 5, page=1 }){
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0)
    const [error, setError] = useState(null);
    const [loading, setLoading] =useState(false)

    function handlePrev(){
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)

    }
    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)

    }

        useEffect(() => {
                async function fetchImages(getUrl){
            try {
                setLoading(true)
                const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
                const data = await response.json();
                

                if(data){
                    setImages(data)
                    setLoading(false)
                }
                
            } catch (error) {
                setError(error.message)
                setLoading(false)      
            }
            } 
            if(url !== '') fetchImages(url)
        console.log(images)
        },[url, limit])
    

    return(
        <div className="page">
            <h1 className="title">Image Slider</h1>
<div className="image-container">
            <BsArrowLeftCircleFill 
            onClick={handlePrev}
            className="arrow arrow-left"/>
            {images && images.length ? 
            images.map((imageItem, index) => (
                <img 
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
                />
            ))
            :null
        }
        <BsArrowRightCircleFill 
        onClick={handleNext}
        className="arrow arrow-right"/>
        <span className="circle-indicators">
            {images && images.length ? 
            (images.map((_,index) => (
                <button 
                onClick={() => setCurrentSlide(index)}
                key={index} 
                className={currentSlide === index ? "current-indicator": "current-indicator inactive-indicator"}>
                </button>
            )))
            :null}

        </span>

        </div>
        </div>
        
    )

}