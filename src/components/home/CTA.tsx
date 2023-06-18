import { Link } from "react-router-dom";

function CTA() {
   return (
      <div className="pt-36 relative w-full h-[550px] sm:h-[800px] pb-0 sm:pb-24">
         <img
            className="w-30 hidden m-auto mb-2"
            src="./img/doodles/lineBreak.svg"
         />
         <div className="pt-14 pb-40">
            <h2 className="text-4xl md:text-5xl font-bold mb-20">
               Would you like to chat?
            </h2>
            <Link to="/contacts" className="btn relative sm:-bottom-24">
               Contacts
            </Link>
         </div>

         <img
            className="sqD top-20 w-20 left-[10px] sm:top-60 sm:left-[-15px] rotate-180"
            style={{ zIndex: "-10" }}
            src="./img/doodles/hero/star-outline.svg"
         />
         <img
            className="sqD top-80 sm:top-20 right-[-15px]"
            style={{ zIndex: "-10" }}
            src="./img/doodles/hero/star-outline.svg"
         />

         <div className="relative mx-auto mt-0 bottom-20 sm:bottom-0 left-0 w-full sm:w-2/3 h-40 sm:h-60">
            <img
               className="relative -top-12 md:-top-24 lg:-top-32 opacity-80 w-full flex justify-center"
               style={{ zIndex: "-10" }}
               src="./img/doodles/hero/arrow-line.svg"
            />
         </div>
      </div>
   );
}

export default CTA;
