import { useCallback, useState,useEffect ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

     function App() {

  const[length,setlen] =useState(5);
  const[charall,setchari]=useState(false);
  const[numall,setnum]=useState(false);
  const[passall,setpass]=useState("");

  /// use ref
  
  const passref=useRef(null)
   const passgene = useCallback(()=>{
      let pass="";
   let str="ABCDEFGHIJLKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
 
   if(numall) str+="0123456789";

   if(charall) str+="@#$%^&*()~?|/*";

   for(let i=1; i<=length; i++){
      let ch=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(ch);

   }
   setpass(pass);

   },[length,charall,numall,setpass])

   const copyPasswordToclipboard= useCallback(()=>{
      passref.current?.select()
      passref.current?.setSelectionRange(0,10);
      window.navigator.clipboard.writeText(passall)
   },[passall])



   useEffect(() => {
     passgene()
},[length,charall,numall,passgene])


   return (
   <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-900 bg-green-600'>
   <h2 className=' text-3xl text-white-200 text-center my-2'>
    Password generator
   </h2>
   <div className='flex-shadow riunded-lg overflow-hidden mb-4'>
   <input
   type='text'
   value={passall}
   className='outline-none w-full py-1 px-3'
   placeholder='password'
   readOnly
   ref={passref}
   />
    <button 
    onClick={copyPasswordToclipboard}
  
    className=' outline-none px-3 py-0.5 bg-blue-700 text-white-400 px-3 py-0.5'>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
         <input 
         type='range'
         min={6}
         max={130}
         value={length}
         className='cursor-pointer'
         onChange={(e)=>{setlen(e.target.value)}}
         />
<label>Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
         <input
         type='checkbox'
         defaultChecked={charall}
         id="charInput"
         onChange={()=>{
            setchari((prev)=>!prev);
         }}
         />
         <label>chars</label>
      </div>
      <div className='flex items-center gap-x-1'>
         <input
         type='checkbox'
         defaultChecked={charall}
         id="numInput"
         onChange={()=>{
            setnum((prev)=>!prev);
         }}
         />
         <label>nums</label>
      </div>
    </div>
</div>
</>
     
   )
}
 export default App

