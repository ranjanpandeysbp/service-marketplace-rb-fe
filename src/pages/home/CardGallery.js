import React from 'react'
import { Link } from 'react-router-dom'

const CardGallery = ({ items }) => {
    return (
        <div className="row">
            {
                items.map((item, index) => {
                    return (
                        <div className="col-lg-3 col-md-4 col-sm-12 mt-4" key={index}>
                            <Link className="white-anchor" to={`/businesslisting/${item.id}`}>
                                <div className="bento-item">
                                    <img src={item.image} alt={item.title} />
                                    <div className="bento-content">
                                        <h4>{item.title}</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default CardGallery