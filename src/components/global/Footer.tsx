import { Link } from "react-router-dom";
import { footer } from "../../../data/global";

function Footer() {
   return (
      <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
         <div className="w-full max-w-4xl m-auto grid grid-cols-3 justify-between items-start">
            {footer.columns.map((item, index) => {
               return (
                  <div key={index} className="text-left mb-5 sm:mb-0">
                     <h4 className="uppercase text-fun-gray text-sm font-bold">
                        {item.title}
                     </h4>
                     <div>
                        {item.links.map((item, index) => {
                           return (
                              <div key={index} className="my-4">
                                 {item.leavesWebsite ? (
                                    <a
                                       href={item.link}
                                       target="_blank"
                                       className="items-center flex"
                                    >
                                       {item.icon && (
                                          <span className="pr-2 invert-[50%]">
                                             <img
                                                src={item.icon}
                                                width={20}
                                                height={20}
                                             />
                                          </span>
                                       )}
                                       {item.name}
                                    </a>
                                 ) : (
                                    <Link to={item.link}>{item.name}</Link>
                                 )}
                              </div>
                           );
                        })}
                     </div>
                  </div>
               );
            })}
         </div>
         <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
            <p className="flex flex-col items-center justify-center ">
               <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
                  Made with{" "}
                  <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
                     <span>
                        <img
                           src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                           width="26"
                           title="React"
                           alt="React"
                        />
                     </span>
                     <span>
                        <img
                           src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                           width="26"
                           title="TailwindCSS"
                           alt="TailwindCSS"
                        />
                     </span>
                  </div>
               </div>
               <div className="mt-2 text-xs ">
                  Made by{" "}
                  <a
                     href="mailto:negruioan@duck.com"
                     className="text-fun-gray-light font-medium"
                  >
                     Negru Ioan
                  </a>
                  . All rights reserved.
               </div>
            </p>
         </div>
         <div className="mt-8 text-center sm:text-right sm:-mt-12">
            <a
               className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border border-fun-pink px-4 py-2 rounded-xl text-fun-pink cursor-pointer opacity-50"
               href="https://github.com/negru-ioan/portfolio"
               target="_blank"
               rel="nooreferrer"
            >
               <img
                  src="./img/icons/github.svg"
                  width={16}
                  height={16}
                  alt="Github Icon"
               />
               <span className="ml-2"> View Source Code </span>
            </a>
         </div>
      </footer>
   );
}

export default Footer;
