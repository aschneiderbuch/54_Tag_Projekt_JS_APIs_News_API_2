// Hauptseite   holt sich daten von DataApiFetch
// hier wird der .map gemacht
// schiebt props in die HomeSchabloneItem    damit die alles vervielfacht
// API https://newsapi.org/docs/endpoints/everything
// API link  https://newsapi.org/v2/everything?q=bitcoin&apiKey=d1bac37fa63346329db5ce20423e0671


import HomeSchabloneItem from "../componetns/homeSchabloneItem/HomeSchabloneItem";


import "./Home.scss"


// import uuid from "uuid/v4";
import { v4 as uuidv4 } from "uuid";

// !!! harte Daten von API importiert      -> data Data.jsx
import dataExport0 from "../componetns/data/Data.jsx";


import { useState } from "react";
import { useEffect } from "react";



// sfc
const Home = () => {

    // data und fetch abhören
    const [getData, setData] = useState(dataExport0);
    console.log("wenn dieser Text erscheint, gibt es ein render Ereignis")

    // suchtext abhören
    const [getSuchText, setSuchText] = useState(`?q=bitcoin`);





/*******************************************************************************************
 * 
 *                Fetch
 * 
 ********************************************************************************************/

    useEffect(() => {
        console.log("in useEffect ")
        fetch(`https://newsapi.org/v2/everything${getSuchText}&apiKey=d1bac37fa63346329db5ce20423e0671`)
            .then(response => response.json())
            .then(data => {
                console.log("update")
                console.log("data")
                console.log(data)

                setData(data)
            })
            .catch(error => {
                console.log(" -> error <- ")
                console.log(error)
            })

    }, [getSuchText]);


    console.log(getData)

    let dataExport = {};
    dataExport = getData;

    console.log(dataExport)



    /************************************************************************************************
     * 
     *                  textSuche Input
     * 
     *************************************************************************************************/
/* useEffect( (e) => {
    const handelTexSuche = (e) => {
        console.log(e.target.value)
        //setSuchText = (e.target.value))
        setSuchText(`?q=${e.target.value}`)
    };

},[]); */



    return (
        <section className="sec_Home">

            <article>
                <h1>Home Seite</h1>
                <h2>Suchleiste</h2>
                <input onChange={ (e) => setSuchText(e.target.value  <=0 ? `?q=bitcoin` : `?q=${e.target.value}` )} type="text" name="textSuche" id="textSuche" placeholder="Suchbegriff dann Enter drücken" />

            </article>

            {dataExport && dataExport.articles.map((i, index) => {

                return <HomeSchabloneItem
                    key={uuidv4()}
                    keyId={uuidv4()}
                    imgUrl={i.urlToImage}
                    titel={i.title}
                    textblock={i.description}
                    datum={i.publishedAt}
                    urlLink={i.url}
                    author={i.author}
                ></HomeSchabloneItem>

            })}

        </section>
    );
}

export default Home;


