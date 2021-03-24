
import React ,{useState ,useEffect}from 'react';


const Booklist=(props)=>{

    const [bookData,setBookData]=useState(null);

    useEffect(()=>
    {
            //?を使用することでgetDataが存在するときのみに関数を実行
            const result=props.getData?.(props.languages)
                .then((response)=>
                    setBookData(response)).then(function(){
                        if(bookData!==null){ console.log(bookData.data.items)}
                       
                    })
                },[props])
                   
           
            return(
                <div>
                    <ul>

                        {bookData===null
                            ?<p>nowloading..</p>
                            :bookData.data.items.map((x,index)=>
                            
                            <li key={index}>{x.volumeInfo.authors}■{x.volumeInfo.title}</li>

                            )
                        
                        }
                       
                    </ul>
        
                </div>
        
            )
    
    }

    

 
    


export default Booklist