import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
function PassGen() {
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [number, setNumber] = useState(true);


  const [password, setPassword] = useState("");
  
  const range = useRef(8);
  const passwordRef = useRef(null);


  const passworGenerator = () => {
    let pass = "";
    let str = "";
    
    if(lower) str = str + "abcdefghijklmnopqrstuvwxyz"
    if(upper) str = str + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(number) str = str + "0123456789" 
     
    for (let i = 0; i < range.current; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }
    console.log(str);
    if (pass === "") {
      alert("--All checks are empty--");
    } else {
      if (range.current < 8 || range.current > 51) {
        alert("Length out of mentioned range");
      } else {
        setPassword(pass);
      }
    }
  };

    const copyPasswordToClipboard = useCallback(() => {
      if (password == "") {
        alert("Empty");
      } else {
        alert("password Copied")
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0 , 100);
        window.navigator.clipboard.writeText(password);
      }
    }, [password]);



  return (
    <>
      <div className="flex flex-col  m-5 border-1 h-screen items-center justify-center">
        <h1 className=" text-[30px] text-center font-bold">PassWord Generator</h1>
        <div className="flex justify-center my-5">
          <input className="p-2 bg-red-200 w-56 rounded-sm outline " type="text" value={password} ref={passwordRef} />
          <button className='m-2' onClick={copyPasswordToClipboard}>
            <ContentCopyIcon  />
          </button>
        </div>
        <div className=' flex  justify-between gap-10 items-center m-2'>
          <h1 className='font-bold '>Select Password length(**8-50 characters**)</h1>
          <input type="number" defaultValue={range.current}
            onChange={(e) => {
              range.current = e.target.value;
            }} className='outline p-1 m-1 rounded-md w-16'/>
        </div>
        <div className='flex flex-col text-[19px]'>
          <div className='flex gap-2'>
            <input type="checkbox" checked={upper}
            onChange={() => (setUpper(() => !upper), setPassword(" "))}/>
            <h1 className='font-semibold'>Include upper case</h1>
            <input type="checkbox"  checked={lower}
            onChange={() => (setLower((prev) => !prev), setPassword(" "))}/>
            <h1 className='font-semibold'>Include Lower case</h1>
            <input type="checkbox"  checked={number}
            onChange={() => (setNumber((prev) => !prev), setPassword(" "))}/>
            <h1 className='font-semibold'>Include Number case</h1>
         
          </div>
        </div>
        <div className='flex justify-center my-7'>
          <button onClick={passworGenerator} className=' bg-red-500 w-62 p-3 rounded-lg hover:bg-green-600 hover:transition-all hover:duration-700 '>
            <h1 className=' text-white font-bold text-[19px]'>Generated Password</h1>
          </button>
        </div>
      </div>
    </>
  )
}

export default PassGen;
