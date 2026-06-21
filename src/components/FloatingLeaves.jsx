import { PiLeafFill } from "react-icons/pi";

const FloatingLeaves = () => {

const leaves = [

{
top:"15%",
left:"8%",
size:"text-4xl",
delay:"0s"
},

{
top:"25%",
right:"10%",
size:"text-5xl",
delay:"1s"
},

{
top:"60%",
left:"20%",
size:"text-3xl",
delay:"2s"
},

{
top:"75%",
right:"25%",
size:"text-4xl",
delay:"1.5s"
},

{
top:"40%",
left:"80%",
size:"text-5xl",
delay:"3s"
}

]

return (

<>

{

leaves.map((leaf,index)=>(

<PiLeafFill

key={index}

className={`

absolute

text-green-300

opacity-30

${leaf.size}

animate-leaf

pointer-events-none

`}

style={{

top:leaf.top,

left:leaf.left,

right:leaf.right,

animationDelay:leaf.delay

}}

 />

))

}

</>

)

}

export default FloatingLeaves;