{
  /* you no longer have to write > import React from "react";
New tools recognize .jsx and automatically import React so it isn't required.
May still exist in older code bases.

class is a reserved name in JavaScript so we have to use className
for is reservered in JS as well (for loops, etc), so we have to use htmlFor="" 
<input> is valid html, but not valid JSX, you have to add a self closing tag <input /> */
}

const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Pizza;

{
  /* Example if you want a NAMED export:
 export const Pizza = (props) => {
     return (
       <div className="pizza">
         <h1>{props.name}</h1>
         <p>{props.description}</p>
       </div>
     );
   };
 In this case, you'd have to import this in App.js within {}
 as import { Pizza } from "./Pizza"; Then you can export several consts in one file like
 import { Pizza, Blah } from "./Pizza";
 HOWEVER, it should and can be ONE FILE = ONE COMPONENT therefore "export default"
 works fine. WHO CARES lol */
}
