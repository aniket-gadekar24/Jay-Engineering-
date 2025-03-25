import React from 'react'
import { clients } from '../JayData'
import ClientCard from '../components/ClientCard'

function Client() {
  console.log(clients)
  clients.data.map((client)=>{
    // console.log(client)
  })
  return (
    <div>
      <h2 className='text-center mb-8 text-4xl font-bold text-orange-500'>Industries Served</h2>
      <div className='flex flex-wrap justify-center gap-4'>
        {
          clients.data.map((client)=>{
            return <ClientCard client={client}/>
          })
        }
      </div>
    </div>
  )
}

export default Client
