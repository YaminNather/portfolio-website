"use client";

import Image from "next/image";

import { Button } from "@/app/components/button/button";
import { Footer } from "@/app/components/footer/footer";
import { H1 } from "@/app/components/headings/h1";
import { Input } from "@/app/components/input/input";
import { TextArea } from "@/app/components/input/textarea";
import { NavBar } from "@/app/components/nav_bar";
import { useState } from "react";

import linkedinLogoVector from "./assets/social_media_icons/linkedin.svg";
import { Link } from "@/app/components/link";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function ContactMePage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <>
      <NavBar />
      
      <main className="mx-auto grid max-w-7xl p-16 justify-center items-center grid-cols-2 gap-16">
        <form className="w-full animate-slide-in-y-initial animate-slide-in-y animate-delay-200">
          <H1 className="animate-slide-in-y">Let's Talk</H1>
          
          <p className="mt-8">Name</p>

          <Input name="name_field" placeholder="John Doe" value={name} onChange={(event) => setName(event.target.value)} className="mt-2 w-full" />
          
          <p className="mt-4">Email</p>

          <Input name="email_field" placeholder="john.doe@email.com" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full" />
          
          <p className="mt-4">Message</p>

          <TextArea 
            name="message_field" placeholder="You're hired!" 
            value={message} onChange={(event) => setMessage(event.target.value)} 
            className="mt-2 w-full min-h-16" 
          />
          
          <Button 
            onClick={async (event) => {
              event.preventDefault();

              const requestBody = {
                "name": name,
                "email": email,
                "message": message,
              };
              const response = await fetch("/api/resend/send", {method: 'POST', body: JSON.stringify(requestBody)});
              
              if (response.status < 200 || response.status > 299) {
                alert("Failed to send message");
                return;
              }

              alert("Thank you for reaching out!");
            }} 
            className="mt-4"
          >
            Contact
          </Button>
        </form>
        
        <div className="flex justify-center items-center animate-slide-in-y-initial animate-slide-in-y animate-delay-300">
          <div className="flex flex-col justify-center items-start">
            <Link href="mail:yamin.nather6@gmail.com" className="group inline-flex items-center">
              <FaEnvelope className="size-8 group-hover:scale-125 transition" /> 
              
              <span className="ms-4">yamin.nather6@gmail.com</span>
            </Link>
            
            <Link href="tel:7598385116" className=" group mt-8 inline-flex items-center">
              <FaPhoneAlt className="size-8 group-hover:scale-125 transition" /> 
              
              <span className="ms-4">+91 7598385116</span>
            </Link>
            
            <Link href="https://linkedin.com/in/yamin-nather" className="group mt-8 inline-flex items-center">
              <Image src={linkedinLogoVector} alt="" className="size-8 group-hover:scale-125 transition" />
              
              <span className="ms-4">/in/yamin-nather</span>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}