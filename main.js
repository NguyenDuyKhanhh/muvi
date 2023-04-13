const containMovie = document.querySelector('.movie')
const containMovieTrending = document.querySelector('.movie-trending')
const btnsPage = document.querySelectorAll(".navbar ul li a")
const banner = document.querySelector(".banner img")
const nextSlider = document.querySelector(".bx-chevron-right")
const prevSlider = document.querySelector(".bx-chevron-left")

let data = ''
var idCard = [];
let dataTrending =''
let dataTopRate =''

 async function movieMain(keyPage){
    
    let api =`https://api.themoviedb.org/3/discover/movie?api_key=21a74c685cbdafbea65d58ebd993168f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${keyPage}&with_watch_monetization_types=flatrate`
    data = await fetch(api).then(res=>res.json())
    const dataMovie = data.results;
    let apiTrending =`https://api.themoviedb.org/3/trending/all/day?api_key=21a74c685cbdafbea65d58ebd993168f`
    dataTrending = await fetch(apiTrending).then(res=>res.json())
    const dataTrendingMovie = dataTrending.results
    localStorage.setItem("saveDataTrending",JSON.stringify(dataTrendingMovie))
    let apiTopRate = `https://api.themoviedb.org/3/movie/top_rated?api_key=21a74c685cbdafbea65d58ebd993168f&language=en-US&page=1`
    dataTopRate = await fetch(apiTopRate).then(res=> res.json())
    const dataTopRateMovie = dataTopRate.results
    localStorage.setItem("savetoprate",JSON.stringify(dataTopRateMovie))

       function handleData(data){
                for(let i=0;i<data.length;i++)
                {
                    if(data[i].title == undefined )
                    {
                        data[i].title = data[i].name
                    }
                    if(data[i].release_date == undefined)
                    {

                        data[i].release_date = data[i].first_air_date
                    }
                    data[i].poster_path = "https://image.tmdb.org/t/p/w500" + data[i].poster_path
                    data[i].backdrop_path = "https://image.tmdb.org/t/p/w500" + data[i].backdrop_path
                }
       }
               
             

    function Render(){
        if(containMovie.id ==='home')
        {
            handleData(dataMovie)
            return(
                 <div className ="row">
                {
                    dataMovie.map((item,index)=>
                        
                        <div className = "col l-3 m-4 c-4" key ={item.id} >
                            <div className="card" id={item.id}>
                                <div>
                                    <img  src={item.poster_path}/>                                 
                                </div>     
                                <h1>{item.title}</h1>
                                <small>{item.release_date}</small>
                            </div>
                        </div>
                        )
                }
            </div>
            )
        }
        if(containMovie.id =='trending')
        {
            handleData(dataTrendingMovie)
            return(
                 <div className ="row">
                {
                    dataTrendingMovie.map((item,index)=>
                        
                        <div className = "col l-3 m-4 c-4" key ={item.id} >
                            <div className="card" id={item.id}>
                                <div>
                                    <img  src={item.poster_path}/>                                 
                                </div>     
                                <h1>{item.title}</h1>
                                <small>{item.release_date}</small>
                            </div>
                        </div>
                        )
                }
            </div>
            )
        }   
        if(containMovie.id =='playpage')
        {
            handleData(dataTopRateMovie)
            return(
                 <div className ="row">
                {
                    dataTopRateMovie.map((item,index)=>
                        
                        <div className = "col l-3 m-4 c-4" key ={item.id} >
                            <div className="card" id={item.id}>
                                <div>
                                    <img  src={item.poster_path}/>                                 
                                </div>     
                                <h1>{item.title}</h1>
                                <small>{item.release_date}</small>
                            </div>
                        </div>
                        )
                }
            </div>
            )
        }
        if(containMovie.id =='movie')
        {
            handleData(dataTopRateMovie)
            return(
                 <div className ="row">
                {
                    dataTopRateMovie.map((item,index)=>
                        
                        <div className = "col l-3 m-4 c-4" key ={item.id} >
                            <div className="card" id={item.id}>
                                <div>
                                    <img  src={item.poster_path}/>                                 
                                </div>     
                                <h1>{item.title}</h1>
                                <small>{item.release_date}</small>
                            </div>
                        </div>
                        )
                }
            </div>
            )
        }
        }
          ReactDOM.render(<Render/>, containMovie)

        
       
              
            const getCards = document.querySelectorAll('.card');                      
                    getCards.forEach((getCard)=>{
                    getCard.addEventListener('click',()=>{                    
                        idCard[0] = getCard.getAttribute('id')
                        localStorage.setItem("idCard", JSON.stringify(idCard));
                        window.location.href = "./play-page.html";
                    })
                    })

            var idCard = JSON.parse(localStorage.getItem("idCard")); 

      const sliderBanners =[
        {
            image: `https://static1.squarespace.com/static/5efce5920d28887981c5bd9b/5efdf3ce4c0f85227cad0448/63b3c7f15f6d412cfa2740cc/1672727694792/M3GAN+banner+2.jpg?format=1500w`
        },
        {
            image: `https://i.ytimg.com/vi/ezxwPmaXxZc/maxresdefault.jpg`
        },
        {
            image: `https://cdn.sforum.vn/sforum/wp-content/uploads/2023/02/lich-chieu-phim-winnie-the-pooh-blood-and-honey-1.jpg`
        },
        {
            image: `https://gocphim.net/wp-content/uploads/2023/02/65-MOVIE.jpg`
        },
        {
            image: `https://images6.alphacoders.com/127/1271600.jpg`
        }
      ]
      function showSlide(){
       
        if (currentIndex == 0){
        prevSlider.style.display = 'none';
        nextSlider.style.display = 'block';
        }
        else if (currentIndex == sliderBanners.length -1){
        nextSlider.style.display = 'none';
        prevSlider.style.display = 'block';
        }
        else{
        nextSlider.style.display = 'block';
        prevSlider.style.display = 'block';
        }
        
}      
      console.log(sliderBanners.length)
        let currentIndex=0;
        banner.setAttribute("src",sliderBanners[currentIndex].image)
        nextSlider.addEventListener("click",()=>{
            
            if(currentIndex != sliderBanners.length-1){
                currentIndex++;
                banner.setAttribute("src",sliderBanners[currentIndex].image)
                showSlide()
                
            }
           
           
            
        })
        prevSlider.addEventListener("click",()=>{
            
            if(currentIndex !=0){
                currentIndex--;  
                banner.setAttribute("src",sliderBanners[currentIndex].image)
                showSlide()
            }
   
        })
   
}
movieMain()


function handlePage(){
    const nextPage = document.querySelector('.next-page a .next')
    let currentPage=1;
    nextPage.addEventListener('click',()=>{
    currentPage+=1
    movieMain(currentPage)
    if(currentPage==1)
    { 
        nextPage.style.display='block'
        prevPage.style.display='none'
    }
    
    else if(currentPage==2)
    {
         nextPage.style.display='block'
         prevPage.style.display='block'
    }
    else if(currentPage==3)
    {
         nextPage.style.display='none'
         prevPage.style.display='block'
    }
    
    
   
})
   
    const prevPage = document.querySelector('.next-page a .prev')
    prevPage.addEventListener('click',()=>{
    currentPage-=1
    movieMain(currentPage)
    if(currentPage==1)
    { 
        nextPage.style.display='block'
        prevPage.style.display='none'
    }
    
    else if(currentPage==2)
    {
         nextPage.style.display='block'
         prevPage.style.display='block'
    }
    else if(currentPage==3)
    {
         nextPage.style.display='none'
         prevPage.style.display='block'
    }
})
}
  handlePage()

    var arrayAllMovies = [];
 
    for(let i=1;i<=3;i++)
    {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=21a74c685cbdafbea65d58ebd993168f&language=en-US&sort_by=popularity.desc&include_adult=false&page=${i}&with_watch_monetization_types=flatrate`)
        .then(res=> res.json())
        .then((data)=>{
            data.results.forEach((component,index)=>
                {  
                   component.poster_path = "https://image.tmdb.org/t/p/w500" + component.poster_path
                  arrayAllMovies.push(component)
                  localStorage.setItem("save", JSON.stringify(arrayAllMovies));    
                }         
                )
        })     
    }
    
    var saveArrayTemporary = JSON.parse(localStorage.getItem("save"));
    console.log(saveArrayTemporary)
    var saveDataTrending = JSON.parse(localStorage.getItem("saveDataTrending"));
    var saveDataTopRate = JSON.parse(localStorage.getItem("savetoprate"));
    let saveId =[]

    for(let i=0;i<saveArrayTemporary.length;i++){
        saveId.push(saveArrayTemporary[i].id)
    }
    saveDataTrending.forEach((item,index)=>{
        if(!saveId.includes(item.id)){
            saveArrayTemporary.push(item)
        }
    })
    saveDataTopRate.forEach((item,index)=>{
        if(!saveId.includes(item.id)){
            saveArrayTemporary.push(item)
        }
    })

    for(let i=0;i<saveArrayTemporary.length;i++)
    {
        if(saveArrayTemporary[i].title == undefined)
        {
            saveArrayTemporary[i].title = saveArrayTemporary[i].name
        }
        if(saveArrayTemporary[i].release_date == undefined)
        {

            saveArrayTemporary[i].release_date = saveArrayTemporary[i].first_air_date
        }
        saveArrayTemporary[i].poster_path = "https://image.tmdb.org/t/p/w500" + saveArrayTemporary[i].poster_path
    }
    localStorage.setItem("saveMovie", JSON.stringify(saveArrayTemporary));   
function searchMovie(){
  
    const valueInput = document.querySelector('#input-search').value
    const inputSearch = document.querySelector("#input-search")
   
    const resultsSearch = document.querySelector(".results-search")
    let MoviesSearch = saveArrayTemporary.filter(comp=>{
       
        return comp.title.toLowerCase().includes(valueInput)
        
           
    })
    
    

        
   function RenderMoviesSearch(){
            if(valueInput.length==0)
            {
                return(
                    <div></div>
                )
            }
           else if(MoviesSearch.length ==0){
                return (
                    <div className ="contain-movies" id="no-result">No movies for this result!</div>
                )
            }
            else{
                return(
                    <div className ="contain-movies">
                    {
                     MoviesSearch.map(item=>
                             <div  className="contain-results" id={item.id} key={item.id}>
                                 <img src={item.poster_path}/>
                                 <ul>
                                     <li>{item.title}</li>
                                     <p>{item.release_date}</p>
                                 </ul>
                             </div>
                         )
                    }
                 </div>
                )
            }
            
   }

      ReactDOM.render(<RenderMoviesSearch/>,resultsSearch)
      const containResults = document.querySelectorAll('.contain-results');
        containResults.forEach((containResult)=>{
        containResult.addEventListener('click',()=>{      
        idCard[0]= containResult.getAttribute('id')
        localStorage.setItem("idCard", JSON.stringify(idCard));
        window.location.href = "./play-page.html";
        })
       }) 
       
       
} 
searchMovie()

 





  
    


   

    


