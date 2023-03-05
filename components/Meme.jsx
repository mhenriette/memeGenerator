import { useEffect, useState } from "react";


function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = useState([])
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(resp=>resp.json())
        .then(data=>setAllMemeImages(data.data.memes))
    },[])
    function getMemeImage() {
 
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    function getData(e){
        const { name, value } = e.target
        setMeme(prevData=>({
            ...meme,
            [name]: value
        }))
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
  <div className={`meme w-full h-[500px] w-[500px] bg-[url('${meme.randomImage}')] `}>
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottomText}</h2>
  </div>
</main>;
}

export default Meme;
