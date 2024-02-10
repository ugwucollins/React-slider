import React, { useState } from 'react'
type imagesAllProps ={
  imagesAll:string[]
}

const Image = ({imagesAll}:imagesAllProps) => {
    const [select,setSelect] = useState(0);
    const [active,setactive] = useState(false);
    const [word,setword] = useState(false);
    
    const prevBtn = () => {
      setSelect(index => index === 0? imagesAll.length - 1:index - 1)
      setactive(!active)
    }
    const nextBtn = () => {
      setSelect(index => index === imagesAll.length - 1? 0:index +1)
      setactive(!active)
    }
    const view =() => {
      setword(!word);
    }

  return (
    <div className='image'>
       <div className="image-contain">

         <div className="image-slide">            
            {imagesAll.map((_,index) =>
            <> 
              <img 
               className=
               //"image-img" 
              {active? "images-img":"image-img"}
               src={imagesAll[select]} 
              key={index} alt={_}></img>
            </> 
             )}
          </div>   

          <div className="image-words">
            <h1 style={{background:'transparent'}}>Image Slider</h1>
            <div style={{background:'transparent'}}>
            Animals enable authors to deliver a dramatic story while maintaining emotional 
            distance, according to science. Let us look at the powerful stories on Animals.
            {word &&
            <span style={{backgroundColor:'transparent'}}> 
                This is a good animal moral story to read with your children. Once upon a time, 
                a baby camel lived with her mother. The baby camel was deep in thought one 
                wonderful day as they lay on the ground. When the mother camel asked what was
                wrong with her, the baby camel remained silent.When the babycamel couldn't take
                it any longer, she inquired,"Why do camels have humps?" the next day. "Well, 
                because we are desert animals,the humps let us store water for several days, so
                we can survive without water," the mother explained with a smile.
            </span>
            }
            </div>
            <span className="btn-span">
              <button onClick={view} className='btn1'>
                <p className={word?'actives':'a'} >Learn More</p>
              </button>

              <button className='btn2'>
                <a href="#next" className='a'>View More</a>
              </button>
            </span>
          </div>
       </div>
      
      
      <div className="all-slider">
        <div className="image-slider-small">
          {imagesAll.map((_,index) => 
          <button className="image-slider-btn" onClick={() => setSelect(index)}
          key={index}>{index === select ? null:<img src={_} className='imgs'></img>}</button>)}
        </div>
       </div>


      <div className={word?'image-active':"image-btns"}>
        <div style={{position:'relative',backgroundColor:'transparent'}}>
          <button onClick={nextBtn} id='next' 
          className='nextbtn'></button>
          <button onClick={prevBtn} 
          className='prevbtn'></button>
        </div>
      </div>
    </div>
  )
}

export default Image;
