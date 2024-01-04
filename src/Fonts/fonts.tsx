import { Lato, Montserrat, Open_Sans } from 'next/font/google'
import React from 'react'

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '800'],
  variable: '--montserrat'
})

export const opensans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '800'],
  variable: '--opensans'
 })

export const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--lato'
 })
