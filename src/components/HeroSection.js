import CustomImage from "./CustomImage"

export default function HeroSection(){
    const images = [
        "/Images/gallery/img_1.jpg",
        "/Images/gallery/img_2.jpg",
        "/Images/gallery/img_3.jpg",
        "/Images/gallery/img_4.jpg",
        "/Images/gallery/img_5.jpg",
        "/Images/gallery/img_6.jpg",
        "/Images/gallery/img_7.jpg",
        "/Images/gallery/img_8.jpg",
        "/Images/gallery/img_9.jpg"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">DeliciousRecipes offers diverse, easy-to-follow recipes from around the world, catering to all dietary needs. Enjoy healthy, innovative dishes with clear instructions and beautiful photos. Join our community, share your culinary experiences, and cook with confidence. Let's make cooking fun and delicious!</p>
                <button className="btn">explore now</button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}