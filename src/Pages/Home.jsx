import MaskGroup from "/Images/MaskGroup.jpg";
import "../Components/Header/Headerr.css";
import "../Components/Categories/Categories.css";
import Categories from "../Components/Categories/Categories";



function Home() {

   
    return (
        <>
            <div>
                <img src={MaskGroup} alt="cover-photo" className="cover-photo" />
            </div>

            <div id="CategoryContainer">
                <Categories></Categories>
            </div>

        </>
    )
}
export default Home;