import NewsCard from "./NewsCard";

export default function News(){
    return(
        
        <div style={{ padding:"20px"}}>
              <h2 style={{hight:"", borderRight:"5px solid rgb(50, 162, 239)", display:"flex", padding:"10px"}}>
                تقاير إخبارية
            </h2>
            <div style={{display:"flex"}}>
          
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
        

          
            </div>
        
        </div>



    );

}