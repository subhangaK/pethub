import HeroVideo from "./assets/pets - Trim.mp4"
function hero(){

    return(

    <>
    <section className="hero">
        <video autoPlay muted loop className="hero-video">
            <source src={HeroVideo} type="video/mp4" alt="HeroVideo"/>
            Your browser does not support the video tag.
        </video>
        <div className="hero-content">
            <h1>Your Best Friend</h1>
            <p>"A bark, a meow, a flutter of wings—each note a tender song,<br />
                In the symphony of life, with them, we all belong."</p>
            <br />
            <a href="#" className="cta-btn">Learn More</a>
        </div>
    </section>
    </>

    );

}

export default hero