import React from 'react'
import { CacheSwitch } from 'react-router-cache-route'

const CacheRouter = ({children}) => {
  return (
    <CacheSwitch>{children}</CacheSwitch>
  )
}

export default CacheRouter