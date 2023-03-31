import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <div className='home-container'>
      <div className='home-left-container'>
      </div>
      <div className='home-right-container'>
        <img id='paint-splatter' src='paint-splatter.png' />
        <img id='blackwhiteprof' src='blackwhiteprof.png' />

      </div>
    </div>
  )
}
