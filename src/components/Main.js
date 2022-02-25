import Bank from './Bank'
import GetData from './getData'
import Data from './assets/img/data.png'
import Services from './Services'
import Comment from './core/Comment'
import img13 from './assets/img/13.png'
import data from './assets/img/data.jpg'
import data2 from './assets/img/data.png'
import data1 from './assets/img/data1.jpg'
const Main = () => {
    return ( 
    <main>
       <Bank title="Titre" 
       text="
       What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" 
img={Data}
/>
<GetData/>
<Services 
    logo1={img13} 
    text1="remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset "
    logo2={data} 
    text2="remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset "
    logo3={data1} 
    text3="remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"
    logo4={data2} 
    text4="remaining essentially unchanged. It was  "
/>
<Comment/>
    </main>
    )
}

export default Main