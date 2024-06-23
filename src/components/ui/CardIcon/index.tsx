import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'
import './style.css'
import { ReactNode } from 'react'

type Props = {
  icons: ReactNode[]
}

const CardIcon = ({icons}: Props) => {
  return (
    <Swiper effect={'cards'} modules={[EffectCards]} className="mySwiper">
      {icons.map((item, i) => (
        <SwiperSlide key={i}>{item}</SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CardIcon
