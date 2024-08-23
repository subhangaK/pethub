import React from 'react';
import Product from './product'; // Adjust the path as necessary
import Dogs from '../assets/Dogs.png'
import Cats from '../assets/Cats.png'
import Aquatic from '../assets/Aquatic.png'
import More from '../assets/More.png'


function ProductsList() {
    return (
        <section className="products">
            <Product 
                imageSrc={Dogs}
                altText="p1"
                title="Dogs"
                description="Pawsitively Perfect—Discover the Dog That Completes Your Family!"
                link="#"
            />
            <Product 
                imageSrc={Cats}
                altText="p2"
                title="Cats"
                description="Purr-fect Companions Await—Adopt Your Dream Cat Today!"
                link="#"
            />
             <Product 
                imageSrc={Aquatic}
                altText="p2"
                title="Aquatic Pets"
                description="Make a Splash with Our Vibrant Aquatic Pets—Your Aquarium’s Next Star Awaits!"
                link="#"
            />
            <Product 
                imageSrc={More}
                altText="p1"
                title="And Many More"
                description="Find Your Perfect Pet—From Furry Friends to Feathered Companions!"
                link="#"
            />
            {/* You can add more Product components here with different props */}
        </section>
    );
}

export default ProductsList;
