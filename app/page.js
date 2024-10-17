import  Image  from "next/image";

export default function Home() {
  return (
    <div style={{display:"flex" , justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
<Image style={{borderRadius:"50%", marginBottom:"5%"}} src={"https://images.playground.com/0b9a4f9b71264bfcb327bdd7eb7e7e75.jpeg"} width={400} height={400} alt="Dev"/>
<h1>My name is mohammed jebali</h1>
<div style={{display:"flex", justifyContent:"space-around", width:"30%", marginTop:"50px"}}>
  <a href="/Skills">Skills</a>
  <a href="/Projects">Projects</a>
  <a href="/Contact">Contact</a>
</div>



    </div>
  );
}