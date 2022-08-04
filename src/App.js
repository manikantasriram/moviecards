import React from 'react'
import './App.css'  
import  Card  from './Components/Card'
import  './Components/Card.css' 


function App() {

  return (
    <div className="App">
      <div className='titlee'>ALL SURIYA MOVIES</div>
      <div className='boxx'>
       <Card
          Img="https://static.toiimg.com/thumb/msid-92784409,width-800,height-600,resizemode-75,imgsize-51264,pt-32,y_pad-40/92784409.jpg"
          Title = "VIKRAM"
          Content = "WATCH IT HERE"
          Link = "https://www.imdb.com/title/tt9179430/"
          />
          <Card 
          Img="https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/suriya_latest_poster_mian_0.jpg?itok=EdriMQxO"
          Title = "ETHARKKUM THUNINDHAVAN"
          Content = "WATCH IT HERE"
          Link = "https://www.imdb.com/title/tt10340562/"
          />
          <Card
          Img="https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg"
          Title = "JAI BHIM"
          Content = "WATCH IT HERE"
          Link = "https://www.imdb.com/title/tt15097216/?ref_=fn_al_tt_1"
          />
          <Card
          Img="https://i.pinimg.com/originals/41/99/00/4199001a1cced80374c89ccf1078d345.jpg"
          Title = "SOORARAI POTTRU"
          Content = "WATCH IT HERE"
          Link = "https://www.imdb.com/title/tt10189514/?ref_=nv_sr_srsg_0  "
          />
          <Card
          Img="https://wallpapercave.com/wp/wp4669929.jpg"
          Title = "KAAPPAAN"
          Content = "WATCH IT HERE"
          Link = "https://www.imdb.com/title/tt8411144/?ref_=fn_al_tt_3"
          />
          <Card
          Img="https://moviegalleri.net/wp-content/gallery/ngk-movie-release-posters/suriya-ngk-movie-release-posters-2b5ac77.jpg"
          Title = "NGK  "
          Content = "WATCH IT HERE"
          Link = "https://www.imdb.com/title/tt8094252/?ref_=fn_al_tt_1"
          />
          <Card
          Img="https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/208631/thaanaa-Tamil-Theater.jpg"
          Title = "THAANAA SERNDHA KOOTTAM"
          Content = "WATCH IT HERE"
          Link = "https://www.imdb.com/title/tt6237966/?ref_=nv_sr_srsg_0"
          />
          <Card
          Img="https://live.staticflickr.com/804/40954432491_e4d7329c74_b.jpg"
          Title = "SINGAM-3"
          Content = "WATCH IT HERE"
          Link = "https://www.imdb.com/title/tt5323640/"
          />
          <Card
          Img="https://wallpaperaccess.com/full/5187256.jpg"
          Title = "24"
          Content = "WATCH IT HERE"
          Link = "https://www.imdb.com/title/tt4981966/?ref_=fn_al_tt_2"
          />
          </div>
    </div>
  )
}

export default App
