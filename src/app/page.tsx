import Contato from '@/components/Contato'
import Footer from '@/components/Footer'
import Intro from '@/components/Intro'
import Projetos from '@/components/Projetos'
import Skills from '@/components/Skills'
import Sobre from '@/components/Sobre'

export default function Home() {
  return (
    <>
      <Intro />
      <Sobre />
      <Skills />
      <Projetos />
      <Contato />
      <Footer />
    </>
  )
}
