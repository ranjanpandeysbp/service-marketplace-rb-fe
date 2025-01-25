import React, { useEffect, useState } from 'react'
import './Homepage.css';
import factory from '../../images/factory.png';
import digital from '../../images/mobiledesktop.png';
import CardGallery from './CardGallery';

import crudService from '../../services/crud.service';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'

const Homepage = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const sliderClick = (index) => {
        console.log("Slider clicked ", index);
    }

    const loadCategories = async () => {
        try {
            setLoading(true);
            let slides = [];
            let resData = await crudService.getAll("common/categories");
            for (let i = 0; i < resData.data.length; i++) {
                slides.push({ id: resData.data[i].id, image: resData.data[i].image, title: resData.data[i].name, description: resData.data[i].description, clickEvent: sliderClick });
            }
            setCategories(slides);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        loadCategories();
    }, []);

    return (
        <div>
            <div className="container text-center">
                <p className="title-banner"
                    data-aos="zoom-in-down" data-aos-duration="1200">
                    LOOKING FOR 
                        <span className="ms-2" style={{ color: "#17B8A6", fontWeight: 'bold' }}>
                            <Typewriter
                            loop={20}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            words={['PRODUCTS', 'SERVICES', 'BUSINESSES']} />
                        </span>
                    <br /> AROUND YOU?
                </p>
                <div className="row mt-5">
                    <div className="col-lg-6 col-sm-12"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine">
                        <img className="img-fluid image-home-banner" src={digital} />
                    </div>
                    <div className="col-lg-6 col-sm-12"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine">
                        <img className="img-fluid image-home-banner" src={factory} />
                    </div>
                </div>
            </div>
            <div className="mt-3 container text-center" data-aos="fade-up">
                <p className="display-6">Business Categories</p>
                <CardGallery items={categories} />
            </div>
        </div>
    )
}

export default Homepage