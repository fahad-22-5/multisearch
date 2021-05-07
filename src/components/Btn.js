import React from 'react'
import google from './png/google.ico'
import yt from './png/yt.ico'
import bing from './png/Bing-icon.png'
import yahoo from './png/yahoo.ico'
import spotify from './png/spotify.ico'
import soundcloud from './png/soundcloud.ico'

function Btn(props) {

    function googleclick(){
        window.open(`https://www.google.com/search?q=${props.enter}`, "_blank");
    }
    function ytclick(){
        window.open(`https://www.youtube.com/results?search_query=${props.enter}`, "_blank");
    }
    function bclick(){
        window.open(`https://www.bing.com/search?q=${props.enter}`, "_blank");
    }
    function ysearch(){
        window.open(`https://search.yahoo.com/search;_ylt=Awr9Ik9BCJBghRAA5GVXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Fydw--?fr=sfp&ei=UTF-8&q=${props.enter}`, "_blank");
    }
    function spot(){
        window.open(`https://open.spotify.com/search/${props.enter}`, "_blank");
    }
    function scloud(){
        window.open(`https://soundcloud.com/search?q=${props.enter}`, "_blank");
    }
    return (
        <div>
            <button className="button" onClick = {googleclick}><img src={google} alt="g"/></button>
            &nbsp;&nbsp;
            <button className="button" onClick={ytclick}><img src={yt} alt="yt"/></button>
            &nbsp;&nbsp;
            <button className="button" onClick={bclick}><img src={bing} alt="bing"/></button>
            &nbsp;&nbsp;
            <button className="button" onClick={ysearch}><img src={yahoo} alt="yahoo"/></button>
            &nbsp;&nbsp;
            <button className="button" onClick={spot}><img src={spotify} alt='spotify'/></button>
            &nbsp;&nbsp;
            <button className="button" onClick={scloud}><img src={soundcloud} alt="souncloud"/></button>
        </div>
        
    )
}

export default Btn
