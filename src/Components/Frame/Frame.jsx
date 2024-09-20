import "../Frame/Frame.css";
import "../Categories/Categories.css"
import Trophy from "/Images/trophy.png";
import Guarantee from "/Images/guarantee.png";
import Shipping from "/Images/shipping.png";
import CustomerSupport from "/Images/customer-support.png";

function Frame(){
    const Icons = [
        {src:Trophy, header:"High Quality", label:"crafted from top materials"},
        {src:Guarantee, header:"Warranty Protection", label:"Over 2 years"},
        {src:Shipping, header:"Free Shipping",label:"Order over 150 $"},
        {src:CustomerSupport, header:"24 / 7 Support", label:"Dedicated support"},
    ]

    return (
        <div id="Frame">
       { Icons.map((Icons) => (
            <div id="Part">
                <img src={Icons.src} />
                <div id="Details">
                    <h4>{Icons.header}</h4>
                    <label>{Icons.label}</label>
                </div>
            </div>
            ))}
            </div>
    )
}
export default Frame ;