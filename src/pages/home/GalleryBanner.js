import React from 'react'
import './GalleryBanner.css';

const GalleryBanner = () => {
    return (
        <div className="container my-4" data-aos="fade-up-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
            <h2 className="text-center mb-4">LOOKING FOR BUSINESSES AROUND YOU?</h2>
            <div className="row g-4">
                {/* Large item */}
                <div className="col-md-8" >
                    <div className="bento-item bento-tall">
                        <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHwwfHx8MTcyMTA0MjYwMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Nature" />
                        <div className="bento-content">
                            <h3>Explore Nature</h3>
                            <p>Discover the beauty of the natural world</p>
                        </div>
                    </div>
                </div>
                {/* Two small items */}
                <div className="col-md-4">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="bento-item">
                                <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Food" />
                                <div className="bento-content">
                                    <h4>Culinary Delights</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="bento-item">
                                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Technology" />
                                <div className="bento-content">
                                    <h4>Tech Innovations</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Medium item */}
                <div className="col-md-4">
                    <div className="bento-item">
                        <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0cmF2ZWx8ZW58MHwwfHx8MTcyMTA0MjY0MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Travel" />
                        <div className="bento-content">
                            <h4>Travel Adventures</h4>
                        </div>
                    </div>
                </div>
                {/* Medium item */}
                <div className="col-md-4">
                    <div className="bento-item">
                        <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxhcnR8ZW58MHwwfHx8MTcyMTA0MjY5Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Art" />
                        <div className="bento-content">
                            <h4>Artistic Expressions</h4>
                        </div>
                    </div>
                </div>
                {/* Medium item */}
                <div className="col-md-4">
                    <div className="bento-item">
                        <img src="https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxzaG9lfGVufDB8MHx8fDE3MjEwNDEzNjd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sport" />
                        <div className="bento-content">
                            <h4>Sports &amp; Fitness</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GalleryBanner