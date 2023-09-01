/* eslint-disable tailwindcss/no-custom-classname */

import type {FC} from 'react'
import { Header } from '../components'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'
import { VriteFooter } from '../components'

const HomePage:FC = function(){
  return (
    <section>
      <Header isFluid={false}/>
      <main className='home-main-section mx-auto flex max-w-7xl justify-center py-16'>
        <Link to="/dashboard">
          <Button className='mt-16'>
            Dashboard
          </Button>
          </Link>
      </main>
     
          <VriteFooter/>
     
    </section>
  )
}

export {HomePage}