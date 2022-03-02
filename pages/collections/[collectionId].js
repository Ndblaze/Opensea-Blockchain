import { useRouter } from 'next/router'
import React from 'react'

const Collection = () => {
    const router = useRouter()
    console.log(router.query)
    console.log(router.query.collectionId)
  return (
    <div>[collectionId]</div>
  )
}

export default Collection