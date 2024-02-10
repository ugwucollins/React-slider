import Image from './Image';

const photos = 'img.jpg';
const photos1 = 'img1.jpg';
const photos2 = 'img2.jpg';
const photos3 = 'img3.jpg';
const photos4 = 'img4.jpg';
const photos5 = 'img5.jpg';
const photos6 = 'img6.jpg';
const photos7 = 'img7.jpg';
const App = () => {

  

  // const imagesAll=[
  //   {alt:'zabera',
  //     title:photos
  //   },
  //   {alt:'zabera',
  //     title:photos1
  //   },
  //   {alt:'zabera',
  //     title:photos2
  //   },
  //   {alt:'zabera',
  //     title:photos3
  //   },
  //   {alt:'zabera',
  //     title:photos4
  //   },
  //   {alt:'zabera',
  //     title:photos5
  //   },
  //   {alt:'zabera',
  //     title:photos6
  //   },
  //   {alt:'zabera',
  //     title:photos7
  //   },
  // ]



  // const names = { 
  //   alt:'zabera',
  //   alt1:'zabera',
  //   alt2:'zabera',
  //   alt3:'zabera',
  //   alt4:'zabera',
  //   alt5:'zabera',
  //   alt6:'zabera',
  //   alt7:'zabera',
  // }

  const imagesAll=[
     photos,photos1,photos2,photos3,photos4,photos5,photos6,photos7
  ]

  return (
    <div style={{display:'flex',textAlign:'center',justifyContent:'center',}}>
      <Image imagesAll={imagesAll} />
    </div>
  )
}

export default App;
