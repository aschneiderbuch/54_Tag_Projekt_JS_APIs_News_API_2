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

    // sprachAuswahl abhören
    const [getSprachAuswahl, setSprachAuswahl] = useState(`&language=de`)





    /*******************************************************************************************
     * 
     *                Fetch
     * 
     ********************************************************************************************/

    useEffect(() => {
        console.log("in useEffect ")
        fetch(`https://newsapi.org/v2/everything${getSuchText}${getSprachAuswahl}&apiKey=d1bac37fa63346329db5ce20423e0671`)
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
     *                  
     * 
     *************************************************************************************************/




    return (
        <section className="sec_Home">

            <article>
                <h1>Home Seite</h1>
                <h2>Suchleiste</h2>

                <article>
                    <label htmlFor="sprachAuswahl">Wähle eine Sprache aus</label>
                    <select onChange={ (e) => setSprachAuswahl(`&language=${e.target.value}`)   }  name="sprachAuswahl" id="sprachAuswahl">
                        <option value="en">en</option>
                        <option value="de" selected>de</option>
                        <option value="ar">ar</option>
                        <option value="es">es</option>
                        <option value="fr">fr</option>
                        <option value="he">he</option>
                        <option value="it">it</option>
                        <option value="nl">nl</option>
                        <option value="no">no</option>
                        <option value="pt">pt</option>
                        <option value="ru">ru</option>
                        <option value="sv">sv</option>
                        <option value="ud">ud</option>
                        <option value="zh">zh</option>


                    </select>
                </article>








                {/*                if  <=0   ?dann           :else        */}
                <input onChange={(e) => setSuchText(e.target.value <= 0 ? `?q=bitcoin` : `?q=${e.target.value}`)} type="text" name="textSuche" id="textSuche" placeholder="Suchbegriff dann Enter drücken" />

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


