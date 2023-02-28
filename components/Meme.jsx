import React, { useEffect } from "react";


function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState([])
    console.log(allMemeImages)

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(resp=>resp.json())
        .then(data=>setAllMemeImages(data.data.memes))
    },[])
    // console.log(allMemeImages)

    // console.log(allMemeImages[3].url)
    
    function getMemeImage() {
 
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    function getData(event){
        setMeme(prevData=>{return{
            ...meme,
            [event.target.name]: event.target.value
        }})
    }
  return <main>
  <div className="form">
      <input 
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          onChange={getData}
          value={meme.topText}
      />
      <input 
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          onChange={getData}
          value={meme.bottomText}
      />
      <button 
          className="form--button"
          onClick={getMemeImage}
      >
          Get a new meme image 🖼
      </button>
  </div>
  <div className="meme w-full h-[500px] w-[500px] ">
      <img src={meme.randomImage} className="meme--image max-w-max max-h-full " />
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottomText}</h2>
  </div>
</main>;
}

export default Meme;
