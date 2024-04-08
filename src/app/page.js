import Image from 'next/image'
import Navbar from '@/components/navbar'
import Generate from '@/components/generate'
import HowitWorks from '@/components/howitworks'
import Signup from '@/components/signup'
import Pro from '@/components/pro'
import Features from '@/components/features'
import Faq from '@/components/faq'
import Footer from '@/components/footer'
export default function Home() {
  return (
   <>
    <Navbar />
   <Generate />
      <HowitWorks />
    <Signup />
    {/* <Pro /> */}
    <Features />
    {/* <Faq /> */}
    <Footer /> 
   </>
  )
}
