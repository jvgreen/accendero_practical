import React from 'react'

export default function Header() {
   return (
      <div style={headerStyle}>
         <h1>Shim Calculator</h1>
      </div>
   )
}

const headerStyle = {
   background: '#7bf542',
   color: 'black',
   textAlign: 'center',
   padding: '10px'
}
