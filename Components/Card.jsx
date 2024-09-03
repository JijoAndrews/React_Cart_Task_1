
import { data } from './carddata';
import React from 'react';
import './style.css';

export let testcount=0;


function handleclick2(id)
{
  testcount++;
  console.log("count:" +id);
}

function handleclick(id){
  testcount++;
  // console.log("count:",id,data[id].cartstatus,testcount)
  data[id].cartstatus="true";
  console.log("count:",id,data[id].cartstatus,testcount)
};

function handleincrement(id,cnt,setcnt,cnttracker)
{
    setcnt((cnt) => cnt + 1);
    cnttracker[id].curcount+=1;
    cnttracker[id].totcount=cnt;
    cnttracker[id].status="true";
    console.log("checkid:",id,cnttracker[id]);

}


function handledecrement(id,cnt,setcnt,cnttracker)
{
    setcnt((cnt) => cnt - 1);
    cnttracker[id].curcount-=1;
    cnttracker[id].totcount=cnt;
    cnttracker[id].status="false";
    console.log("checkid:",id,cnttracker[id]);

}

 const cartchange=(index,status,cnt,setcnt,cnttracker)=>
  {
      let tag;
      
    //   if(data[index].cartstatus===status)
    //   {
    //     tag=(<div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"  onClick={handleclickdynamic.bind(this,index,cnt,setcnt,cnttracker)}>Add to card</a></div>);
    //   }else
    //   {
    //     tag=(<div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"  onClick={handleclickdynamic.bind(this,index,cnt,setcnt,cnttracker)}>remove from card</a></div>);
    //   }

      if(cnttracker[index].status==="false")
        {
          tag=(<div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"  onClick={handleincrement.bind(this,index,cnt,setcnt,cnttracker)}>Add to card</a></div>);
        }else
        {
          tag=(<div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"  onClick={handledecrement.bind(this,index,cnt,setcnt,cnttracker)}>remove from card</a></div>);
        }

    return tag;
  };

  function checkforsale(element,salestatus)
  {
    let finalval={};
    if(salestatus==="true")
    {

      finalval[element.id]=(<span className="text-muted text-decoration-line-through"> {element.productvalue}</span>);
      finalval.value=element.priceslashed;
      finalval.lable=(<div className="badge bg-dark text-white position-absolute">Sale</div>);
    }else
    {
      finalval[element.id]="";
      finalval.value=element.priceslashed;
    }
    return (finalval);
  }

  function checkforstars(element)
  {
    let stars=[];
    let starclass;

    if(element.starstatus==="true")
    {
      for(let i=0;i<5;i++)
      {
        
        if(i<element.startcount)
        {
          stars[i]=(<i key={ `${element.id}-${i}`} className="bi-star-fill"></i>);

        }else
        {
          stars[i]=(<i key={ `${element.id}-${i}`} className="bi-star"></i>);
        }

      }
 
      starclass=(<div className="d-flex justify-content-center small text-warning mb-2"> {stars}</div>)                                
    }

    return starclass;                             
  }

function createcardcontent(element,cnt,setcnt,cnttracker)
{
 return (
  
  <div key={element.id} className="col mb-5">
        <div className="card h-100">
            {/* <!-- Product image--> */}
            {checkforsale(element,element.salestatus).lable}

            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            {/* <!-- Product details--> */}
              <div className="card-body p-4">
                  <div className="text-center">
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">{element.productname}</h5>
                      {/* <!-- Product price--> */}
                      {checkforstars(element)}
                      {checkforsale(element,element.salestatus)[element.id]}
                      {checkforsale(element,element.salestatus).value}

                      {/* {element.productvalue} */}
                  </div>
              </div>
            {/* <!-- Product actions--> */}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              {/* <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"  onClick={handleclick.bind(this,element.id)}>Add to card</a></div> */}
              {/* <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"  onClick={()=>setcnt((cnt) => cnt + 1)}>Add to card</a></div> */}
              
                {cartchange(element.id,element.cartstatus,cnt,setcnt,cnttracker)}
              
              {/* <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"  onClick={handleclickdynamic.bind(this,element.id,cnt,setcnt,cnttracker)}>Add to card</a></div> */}


          </div>
       </div>
    </div>
 )
}


// const cardbox=data.map((element)=>(createcardcontent(element)));


function setupcardboxwithbtns(cnt,setcont,cnttracker)
{
    let datascard=[];
    for(let i=0;i<data.length;i++)
    {
       datascard.push(createcardcontent(data[i],cnt,setcont,cnttracker));
    }

    return datascard;
}

const Card = ({mycount,mysetcount,counttracker}) => {

  return (
    <>
     {/* {cardbox} */}
     {setupcardboxwithbtns(mycount,mysetcount,counttracker)}
    </>
  )
}

export default Card