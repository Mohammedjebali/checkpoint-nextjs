export default function Contact(){
    return (
        <form style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",border:"1px solid white",gap:"10px",width:"50%",padding:"20px",background:"linear-gradient(30deg,red,blue)",margin:"auto",borderRadius:"80px",marginTop:"100px",height:"500px",}}>
            <label style={{fontSize:"1.5rem",fontFamily:"sans-serif",fontStyle:"italic"}}>Full name</label>
            <input style={{width:"50%",height:"50px",background:"white",color:"black",borderRadius:"5px",fontSize:"1rem"}} type="text" placeholder="Your full name"/>
            <label style={{fontSize:"1.5rem",fontFamily:"sans-serif",fontStyle:"italic"}}>Email</label>
            <input  style={{width:"50%",height:"50px",background:"white",color:"black",borderRadius:"5px",fontSize:"1rem"}} type="email" placeholder="Your adress email"/>
            <label style={{fontSize:"1.5rem",fontFamily:"sans-serif",fontStyle:"italic"}}>Message</label>
            <textarea  style={{width:"50%",height:"100px",background:"white",color:"black",borderRadius:"5px",fontSize:"1rem"}} type="text" placeholder="add your message here"></textarea>
            <button style={{height:"50px",width:"80%",background:"black",border:"none",borderRadius:"25px",fontSize:"1.5rem",color:"white",}}>submit</button>
        </form>
    )
}