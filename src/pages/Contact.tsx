import { useEffect } from "react";
import Form from "../components/contact/Form";

function Contact() {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <div className="relative mb-12">
         <div className="block lg:flex py-24">
            <div className="heroElem" style={{ animation: "none" }}>
               <img
                  className="sqD left-[35px] top-[30px] sm:top-10 w-12 sm:left-5 opacity-40"
                  style={{ animationDelay: "0.6s" }}
                  src="./img/doodles/hero/code.svg"
               />
               <img
                  className="sqD squiggle-hero-html w-16 top-[30px] right-[8%] sm:top-[90px] sm:right-[170px]"
                  style={{ animationDelay: "0.3s" }}
                  src="./img/doodles/hero/html.svg"
               />
               <img
                  className="sqD sm:block -right-6 lg:left-64 bottom-[600px] lg:bottom-52 w-52 opacity-40"
                  style={{ animationDelay: "0.6s", rotate: "-10deg" }}
                  src="./img/doodles/contact-book.svg"
               />
               <img
                  className="sqD w-24 left-3 -bottom-12 md:left-14 md:bottom-0 lg:left-[999px] lg:bottom-20 opacity-70"
                  style={{ animationDelay: "0.3s", rotate: "10deg" }}
                  src="./img/icons/browser.svg"
               />
            </div>

            <Form />

            <div
               className="w-full mt-10 sm:mt-[200px] md:h-96 lg:h-[400px] md:mt-0 lg:mt-56 flex justify-center items-center"
               id="contactBook"
            >
               <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/contact-book-4387910-3640621.png"
                  className="sm:object-cover md:object-scale-down lg:object-contain w-full h-full md:ml-8"
               />
            </div>
         </div>
      </div>
   );
}

export default Contact;
