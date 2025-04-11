import Image from "next/image";
import Header from "./component/Header";
import Footer from "./component/Footer";

export default function Home() {
  return (
  <>
  <Header/>
  <div>
  <Image src="/images/mob1.jpeg" alt="home" width={100} height={30} style={{width:'100%', height:'600px'}}/>  
  </div>
  <Footer/>
  </> 
  );
}
