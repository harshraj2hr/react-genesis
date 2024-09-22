import React from "react";
import './Building.css';
import floors from './Constants';

function Building() {
    return(
        <div className="view">
        <div className="building">


        {floors.map((floor) => (
        <div className="floor" >

            <div className="floor-left">

                 <div  className={floor.windowClassName} >
                    </div>
                
            </div>

            <div className="floor-right">
                    {<floor.rightComponent />}  
            </div>
         
        </div>
        ))}

        </div>
        </div>
     
    )
}

export default Building;
export {} 

/*Iphone.tsx (or any other file) is treated as a module by adding at least one import, export, or an empty export {} statement*/
// The --isolatedModules flag ensures that each file is compiled in isolation, which mimics how modern module bundlers handle modules.
//  A file without any imports or exports is considered a script rather than a module, hence the error.
// Adding any import or export transforms the file into a module, resolving this compilation issue.


{/* <div className="view-port">
<div className="building">

    <div className="firstBlock">

        <div className="left">
            <div className="cornerCircle">
            </div>

        </div>

        <div className="center">
        </div>

        <div className="right">
            <div className="wifi-1"></div>
            <div className="wifi-2"></div>
            <div className="wifi-3"></div>
            <div className="wifi-4"></div>
            <div className="wifi-5"></div>
            <div className="wifi-6"></div>
            
        </div>

    </div>

    <div className="secondBlock">
        
    </div>



</div>




</div> */}

//we need jsx i.e, {} only for component files, hrml can be written directly