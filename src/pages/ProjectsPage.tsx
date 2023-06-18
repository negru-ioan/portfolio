import React from "react";
import Projects from "../components/projects/Projects";
import Heading from "../components/projects/Heading";
import More from "../components/projects/More";

function ProjectsPage() {
   return (
      <>
         {/* <Heading /> */}
         <div className={`${"py-12 sm:py-20"} w-full text-center relative`}>
            <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
               Projects
               <img
                  className="sqD w-10 -top-8 -right-8 absolute"
                  src="./img/doodles/hero/code.svg"
               />
            </h1>

            <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
               I have created remarkable applications and websites using
               everything from HTML to React. Here are a few of my favorite
               projects throughout my journey.
            </p>
         </div>

         <Projects />
         <More />
      </>
   );
}

export default ProjectsPage;
