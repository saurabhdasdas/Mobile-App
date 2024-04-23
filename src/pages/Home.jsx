import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'
import CartContext from '../CONTEXT/CartContext'
const Home = () => {
  
  let ctx= useContext(CartContext)
  console.log(ctx)
  const [currentPage, setcurrentPage] = useState(1);
  const [searchItem, setsearchItem] = useState([]);
  const[items,setitems]=useState([]);
  let recordsperPage = 10;
  let lastIndex = currentPage * recordsperPage;
  let firstIndex = lastIndex - recordsperPage;
  let noOfPages = Math.ceil(items.length / recordsperPage)
  let buttonArray = [...Array(noOfPages + 1).keys()].slice(1);
  // console.log(buttonArray)
  // console.log(sliceItem)
  let filteredItem = searchItem.filter((ele) => ele.title.toLowerCase().includes(ctx.Navsearch))
  let sliceItem = filteredItem.slice(firstIndex, lastIndex)
  console.log(filteredItem)



    async function fetchData(){
        let res=await axios.get('https://dummyjson.com/products?skip=0&limit=100');
        setitems(res.data.products)  
        setsearchItem(res.data.products);
    }
    console.log(items)

    useState(()=>{
        fetchData()
    },[])
    const handleAddCart=(ans)=>{
      console.log(ans)
      let obj={
        ...ans,
        quantity:1
      }
      console.log(obj)
      ctx.addtoCart(obj)
    }
    const handleNext = () => {

      if (currentPage < noOfPages) {
        setcurrentPage(currentPage + 1)
  
      }
    }
  
    const handlePrev = () => {
      if (currentPage > 1) {
        setcurrentPage(currentPage - 1)
      }
    }


  return (
    <div className='container-fluid bg-dark'>
        <div className='row row-cols-3 d-flex justify-content-center'>
            {sliceItem.map((ele)=>{
                return <div className="card m-2" style={{width: '18rem'}}>
  <img style={{height:'200px'}} src={ele.thumbnail} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-truncate">{ele.title}</h5>
    <p className='card-text'>Price:{ele.price}</p>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <a href="#" className="btn btn-primary" onClick={()=>handleAddCart(ele)}>Add to Cart</a>
  </div>
</div>

            })}
        </div>
        <div className='text-center d-flex justify-content-center'>
          <nav aria-label="Page navigation example m-auto">
            <ul class="pagination">
              <li onClick={handlePrev} class="page-item"><a class="page-link" href="#">Previous</a></li>
              {buttonArray.map((ele) => {
                return <li onClick={() => setcurrentPage(ele)} class="page-item"><a class="page-link" href="#">{ele}</a></li>
              })}

              <li onClick={handleNext} class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
        </div>
                  
  )

}

export default Home
