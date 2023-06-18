import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import Popup from "./Popup";

function Form() {
   const form = useRef(null);
   const [isOpen, setIsOpen] = useState(false);
   const [response, setResponse] = useState("");
   function closeModal() {
      setIsOpen(false);
   }

   useEffect(() => {
      setResponse("");
   }, [isOpen]);

   const sendEmail = (e) => {
      e.preventDefault();
      console.log(form.current);
      setIsOpen(true);

      emailjs
         .sendForm(
            "service_68gpgxb",
            "template_lu5md2v",
            form.current,
            "293dbDxiezAXtdt-k"
         )
         .then(
            (result) => {
               console.log(result.text);
               setResponse("Mesajul a fost trimis cu succes!");
               if (form.current) form.current.reset();
            },
            (error) => {
               console.log(error.text);
               setResponse(
                  "Mesajul nu s-a trimits. Încercati prin altă metodă!"
               );
            }
         );
   };
   return (
      <div className="text-white w-[100%] h-full md:max-w-[700px] mx-auto">
         <h1 className="py-5 text-4xl sm:text-5xl text-start px-3">
            Get in touch with me.
         </h1>

         <div className="md:max-w-full max-w-[650px] p-3">
            <p className="text-fun-gray text-xl max-w-3xl m-auto text-start mb-12 mt-4">
               Got ideas? Let's form a team! Tell me more about yourself and
               your project. Whether you have questions, suggestions, or simply
               want to have a discussion, you can contact me through the contact
               form on this page, via phone call, or directly through email.
            </p>
            <div className="sm:block md:flex justify-between md:gap-3">
               <button
                  className="btn w-full text-xl max-sm:mb-4"
               >
                  <a href="mailto:negruioan@duck.com">Open Mail</a>
               </button>
               <button className="btn w-full text-xl">
                  <a href="tel:+37368611453">Call Me</a>
               </button>
            </div>

            <form ref={form} onSubmit={sendEmail} className="text-white mt-6">
               <Input label="Name" name="user_name" type="name" />
               <Input label="Email" name="user_email" type="email" />
               <Input label="Phone" name="phone_number" type="tel" />
               <textarea
                  className="textareaResize focus:ring-0 p-0"
                  placeholder="Write your message here..."
                  name="message"
               ></textarea>
               <div className="w-full my-4">
                  <input
                     type="submit"
                     value="Send the Message"
                     className="w-full cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl border-fun-white
              rounded-full bg-white text-bg hover:bg-bg hover:text-white hover:border-fun-pink transition-colors"
                  />
               </div>
               {isOpen && (
                  <Popup
                     isOpen={isOpen}
                     response={response}
                     closeModal={closeModal}
                  />
               )}
            </form>
         </div>
      </div>
   );
}

export default Form;
