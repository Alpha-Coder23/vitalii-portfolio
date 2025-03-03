import { Button } from "flowbite-react";
import { useState } from "react";

export default function ContactForm() {
    const[formdata , setFormdata] = useState({});

    function handleChange(e){
        setFormdata((prev)=> ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const res = await fetch(`/api/contact`,{
                method : "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify(formdata)
            });
            if(res.ok){
                const data = await res.json();
                setFormdata({});
                alert(data?.message);
            }
        } catch (error) {
            console.log(error.message);
        }

    }
  return (
    <div className="p-3">
        <div className="text-white max-w-[500px] mx-auto mt-10 border  border-[#27272a] p-10 rounded-md flex flex-col justify-center">
            <h1 className="font-medium text-lg">Are You Looking For Freelance Developer ? <br/> You are at the Write Place</h1>
            <p className="text-sm text-gray-400 mt-2">
                Contact Me by Providing Your Email OR directly Mail me For Freelance Web Developement Project
            </p>

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1 mt-2">
                <label>Your Name</label>
                <input type="text" name="name" onChange={handleChange} placeholder="Enter Your Name" className="p-3 rounded-lg outline-none text-white bg-[#27272a]"/>
                </div>
                <div className="flex flex-col gap-1 mt-2">
                <label>Your Email</label>
                <input type="email"  name="email" onChange={handleChange} required placeholder="Enter Your Email" className="p-3 rounded-lg outline-none text-white bg-[#27272a]"/>
                </div>
                <div className="flex flex-col gap-1 mt-2">
                <label>Your Message</label>
                <textarea name="message" onChange={handleChange} placeholder="Enter Your Message" rows="4" className="p-3 rounded-lg outline-none text-white bg-[#27272a] resize-none"/>
                </div>

                <Button type="submit" gradientDuoTone="purpleToPink" className="w-full mt-3" >
                    Send
                </Button>
                
            </form>
        </div>
    </div>
  )
}
