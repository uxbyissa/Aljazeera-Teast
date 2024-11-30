export default function Video(){
    return(
        <div style={{marginTop:"60px"}}>
            <h3 style={{paddingTop:"30px"}}>أحدث المقاطع</h3>
            <iframe width="916" height="515" src="https://www.youtube.com/embed/9V_7Q2HozZg" title="حرب غزة والجبهات الأخرى تسبب أزمة سلاح حادة في إسرائيل" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div style={{height:"50px",display:"flex", justifyContent:"center", alignItems:"center"}}>
            <p style={{margin:"30px"}}>
                قد يحتوي هذا الفيديو أنماطاً ضوئية أو صور يمكن ان تسبب نوبات صرع أو عدم ارتياح لمن يعاني حساسية بصرية 
            </p>
            
            <button style={{ 
                display:"flex",
                direction:"row",
                border:"1px solid white", 
                width:"100px",
                
                margin:"10px",
                paddingLeft:"16px", 
                paddingRight:"16px", 
                paddingTop:"10px",
                paddingBottom:"10px",
                borderRadius:"50px", 
                backgroundColor:"black" ,
                color:"white",
                fontFamily:"Aljazeera",
                fontSize:"16px",
                cursor:"pointer",
                hover:"white",
                
                }}>
                <svg style={{ alignItems:"center",justifyContent:"center",paddingLeft:"10px",width:"20px", height:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.364 18.3641C21.8787 14.8493 21.8787 9.15086 18.364 5.63614L19.7782 4.22192C24.0739 8.51769 24.0739 15.4825 19.7782 19.7783L18.364 18.3641ZM5.63604 5.63614C2.12132 9.15086 2.12132 14.8493 5.63604 18.3641L4.22183 19.7783C-0.0739417 15.4825 -0.0739417 8.51769 4.22183 4.22192L5.63604 5.63614ZM15.5355 15.5355C17.4882 13.5829 17.4882 10.4171 15.5355 8.46445L16.9497 7.05024C19.6834 9.78391 19.6834 14.2161 16.9497 16.9497L15.5355 15.5355ZM8.46447 8.46445C6.51184 10.4171 6.51184 13.5829 8.46447 15.5355L7.05025 16.9497C4.31658 14.2161 4.31658 9.78391 7.05025 7.05024L8.46447 8.46445ZM12 14.0001C13.1046 14.0001 14 13.1046 14 12.0001C14 10.8955 13.1046 10.0001 12 10.0001C10.8954 10.0001 10 10.8955 10 12.0001C10 13.1046 10.8954 14.0001 12 14.0001Z"></path></svg>
                استمع 
                
              
                </button>
                
           
           </div>
           <hr style={{width:"800px", }}></hr>

            
        </div>
    );
}