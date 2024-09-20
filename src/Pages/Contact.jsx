import ContactFrame from "/Images/ContactFrame.png"
import ContactUs from "../Components/ContactUs/ContactUs";
function Contact(){
return(

    <>
    <img src={ContactFrame} alt="cover" className="cover-photo" />
    <ContactUs></ContactUs>
    </>
)
}
export default Contact;