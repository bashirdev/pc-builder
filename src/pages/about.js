import RootLayout from "@/components/layout/RootLayout"

const AboutPage=()=>{
    return(
      <>
        <div>
          <h1 className='text-6xl'>About</h1>
        </div>
      </>
    )
  }

  export default AboutPage

  AboutPage.getLayout=function getLayout(page){
    return(
     <RootLayout>{page}</RootLayout>
    )
 }