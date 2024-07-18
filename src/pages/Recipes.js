import PreviousSearches from "../components/PreviousSearches"
import RecipesCard from "../components/RecipesCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/Images/gallery/img_1.jpg",
            authorImg: "/Images/top chiefs/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/Images/gallery/img_4.jpg",
            authorImg: "/Images/top chiefs/img_2.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/Images/gallery/img_5.jpg",
            authorImg: "/Images/top chiefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/Images/gallery/img_6.jpg",
            authorImg: "/Images/top chiefs/img_5.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/Images/gallery/img_10.jpg",
            authorImg: "/Images/top chiefs/img_6.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/Images/gallery/img_1.jpg",
            authorImg: "/Images/top chiefs/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/Images/gallery/img_4.jpg",
            authorImg: "/Images/top chiefs/img_2.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/Images/gallery/img_5.jpg",
            authorImg: "/Images/top chiefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/Images/gallery/img_6.jpg",
            authorImg: "/Images/top chiefs/img_5.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/Images/gallery/img_10.jpg",
            authorImg: "/Images/top chiefs/img_6.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/Images/gallery/img_5.jpg",
            authorImg: "/Images/top chiefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/Images/gallery/img_6.jpg",
            authorImg: "/Images/top chiefs/img_5.jpg",
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipesCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipesCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}