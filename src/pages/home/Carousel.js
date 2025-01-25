import React, { useEffect, useState }  from 'react'
import crudService from '../../services/crud.service';
import ReactCardSlider from 'react-card-slider-component';
import { Link } from 'react-router-dom';

const Carousel = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const sliderClick = (index) => {
        console.log("Slider clicked", index);
    }

    // const slides = [
    //     { image: "https://picsum.photos/200/300", title: "This is a title", description: "This is a description", clickEvent: sliderClick },
    //     { image: "https://picsum.photos/600/500", title: "This is a second title", description: "This is a second description", clickEvent: sliderClick },
    //     { image: "https://picsum.photos/700/600", title: "This is a third title", description: "This is a third description", clickEvent: sliderClick },
    //     { image: "https://picsum.photos/500/400", title: "This is a fourth title", description: "This is a fourth description", clickEvent: sliderClick },
    //     { image: "https://picsum.photos/200/300", title: "This is a fifth title", description: "This is a fifth description", clickEvent: sliderClick },
    //     { image: "https://picsum.photos/800/700", title: "This is a sixth title", description: "This is a sixth description", clickEvent: sliderClick },
    //     { image: "https://picsum.photos/300/400", title: "This is a seventh title", description: "This is a seventh description", clickEvent: sliderClick },
    // ]

    const loadCategories = async () => {
        try {
            setLoading(true);
            let slides = [];
            let resData = await crudService.getAll("common/categories");
            for(let i=0; i<resData.data.length; i++){
                slides.push({ image: resData.data[i].image, title: resData.data[i].name, description: resData.data[i].description, clickEvent: sliderClick });
            }
            setCategories(slides);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error("Error fetching data:", error);
        }
    }

    useEffect(()=>{
        loadCategories();
    }, []);

    return (
        <section data-aos="fade-up container">
            <div className="row h-25">
                <div className="col-md-12 pt-5 pb-4">
                    <h3 className="text-color-dark text-center">BUSINESS CATEGORIES</h3>
                </div>
                <div className="col-md-12 py-2 d-flex justify-content-center">
                    <ReactCardSlider slides={categories} />
                </div>
                <div className="col-md-12 d-flex justify-content-center py-4">
                    <Link to="/home" className="btn btn-warning">VIEW ALL</Link>
                </div>
            </div>
        </section>
    )
}

export default Carousel