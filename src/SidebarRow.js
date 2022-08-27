import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarRow.css'

function SidebarRow({src, Icon, title}) {
 // Instead of passing props in the function SidebarRow function we can also pass an object
 // as props for example we can write SidebarRow({title}) in this case we don't even need
 // to pass the 'props' as an argument and no need to access it like: props.title 
 // we can simply access it by writing {title}
 // src means : jo sidebar component me hai usse hum as a source component consider karenge
 // Icon: isme wo saare Icons consider karenge jo sidebar me show ho rahe hai ..Icon is passed as a prop
 // Keypoint : You can also pass a component as a props but for that u have to use capitalize first
 // letter of the component which u passing as a props . Like in our case we pass Icon as a prop
 // in SidebarRow function         
  return (
    <div className='sidebarRow'>
    {src && <Avatar src={src}/>}
    {Icon && <Icon />}    
    <p>{title}</p>  
    </div>
  )
}

export default SidebarRow
