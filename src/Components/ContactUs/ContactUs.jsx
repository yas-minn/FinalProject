import "../ContactUs/ContactUs.css";
import Location from "/Images/Vector.png"
import Clock from "/Images/bi_clock-fill.png"
import Phone from "/Images/bxs_phone.png"
import { useState } from "react";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add your form submission logic, e.g., send data to an API
        console.log('Form Submitted:', formData);
        // Reset the form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <>
            <div id="HeadDiv">
                <h1 className="Title">Get In Touch With Us</h1>
                <p className="SubTitle">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div id="SecondHalf">
                <div className="LeftPart">

                    <div className="Text">
                        <h2><img src={Location} /> Address</h2>
                        <p>236 5th SE Avenue, New York NY10000, United States</p>
                    </div>

                    <div className="Text">
                        <h2> <img src={Phone} /> Phone</h2>
                        <p>Mobile: +(84) 546-6789
                        Hotline: +(84) 456-6789</p>
                    </div>

                    <div className="Text">
                        <h2> <img src={Clock} /> Working Time</h2>
                        <p>Monday-Friday: 9:00 - 22:00
                        Saturday-Sunday: 9:00 - 21:00</p>
                    </div>

                </div>

                <div className="ContactForm">

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>
                                Your name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                        </div>
                        <div>
                            <label>
                                Email address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                        </div>
                        <div>
                            <label>
                                Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />

                        </div>
                        <div>
                            <label>
                                Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>

                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>

            </div>

        </>
    )
}
export default ContactUs;