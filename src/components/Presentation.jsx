import React from 'react';
import avatar from '../assets/image1.jpg';
import Projects from './Projects';
import '../css/presentation.css';

const Presentation = () => {
    return (
        <>
            <section className="presentation">
                <div className="avatarContainer">
                    <img src={avatar} alt="Avatar" className="avatar" />
                </div>
                <div className="description">
                    <h2>Mon Portfolio en React</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia in voluptate optio quia error voluptatem inventore suscipit tempore unde laboriosam officiis porro dolor, quasi ullam eum voluptatum molestias maiores sequi?
                        Consequatur est, sint dignissimos repellat maxime asperiores error laborum quaerat molestias, at ipsa eligendi minima eos numquam perferendis consectetur deserunt sequi laboriosam soluta ratione ducimus, doloribus aliquid ipsam. Eaque, ex!
                        Animi harum consequatur eius quos ipsum dolorem officia dolor quia, fuga perspiciatis veniam nemo necessitatibus voluptates omnis ea tenetur quibusdam consectetur. Recusandae dicta deserunt harum iure veniam dolore tempore laborum!</p>
                </div>
            </section>
            <Projects />
        </>
    );
};

export default Presentation;
