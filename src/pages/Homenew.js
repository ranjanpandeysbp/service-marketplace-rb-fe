import React, { useEffect, useState }  from 'react'
import crudService from '../services/crud.service';
import './Homenew.css';
import { Link } from 'react-router-dom';
import BannerCounter from './home/BannerCounter';
import GalleryBanner from './home/GalleryBanner';
import Carousel from './home/Carousel';

const Homenew = () => {

    return (
        <div>
            {/* <BannerCounter /> */}
            <GalleryBanner />
            <Carousel />
            <section>
                <div className="row">
                    <div className="col-md-12 pt-5 pb-4">
                        <h3 className="text-center">BUSINESSES</h3>
                    </div>
                    <div className="col-md-12 py-3 d-flex justify-content-center">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                <div className="col">
                                    <div className="card h-100">
                                        <img src="https://via.placeholder.com/500x200" className="card-img-top" alt="Product 1" />
                                        <div className="card-body">
                                            <h5 className="card-title">Product 1</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <a href="#" className="btn btn-primary">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Homenew