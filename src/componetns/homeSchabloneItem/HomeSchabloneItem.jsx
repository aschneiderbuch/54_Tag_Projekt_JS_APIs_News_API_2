// import link
import { Link } from "react-router-dom"

import "./HomeSchabloneItem.scss"




// sfc
const HomeSchabloneItem = ( props  ) => {    /* props    oder alle namen aufzählen */


    return ( 

<section className="sec_HomeSchabloneItem" id={props.keyId}>
        
        <img src={props.imgUrl} alt={`vom Author: ${props.author} der Text mit dem Titel ${props.titel}`} />
        <h1>{props.titel}</h1>
        <p>{props.textblock}</p>
        <h5>{props.datum.slice(0, 10)}</h5>
        <button> 
            <Link to={`${props.urlLink}`}> Read More </Link>
        </button>      {/* der Button ist ein Link */}
        {/* Link direkt auf Homepage von Artikel */}

</section>


     );
}
 
export default HomeSchabloneItem;