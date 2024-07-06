import ContentCopyIcon from '@mui/icons-material/ContentCopy';
function PassGen() {



  return (
    <>
      <div className="flex flex-col  m-5 border-1 h-screen items-center justify-center">
        <h1 className=" text-[30px] text-center font-bold">PassWord Generator</h1>
        <div className="flex justify-center my-5">
          <input className="p-2 bg-red-200 w-56 rounded-sm outline " type="text" />
          <button className='m-2'>
            <ContentCopyIcon  />
          </button>
        </div>
        <div className=' flex  justify-between gap-10 items-center m-2'>
          <h1 className='font-bold '>Select Password length(**8-50 characters**)</h1>
          <input type="number" className='outline p-1 m-1 rounded-md w-16'/>
        </div>
        <div className='flex flex-col text-[19px]'>
          <div className='flex gap-2'>
            <input type="checkbox"/>
            <h1 className='font-semibold'>Include upper case</h1>
            <input type="checkbox"/>
            <h1 className='font-semibold'>Include upper case</h1>
            <input type="checkbox"/>
            <h1 className='font-semibold'>Include upper case</h1>
            <input type="checkbox"/>
            <h1 className='font-semibold'>Include upper case</h1>
          </div>
        </div>
        <div className='flex justify-center my-7'>
          <button className=' bg-red-500 w-62 p-3 rounded-lg hover:bg-green-600 hover:transition-all hover:duration-700 '>
            <h1 className=' text-white font-bold text-[19px]'>Generated Password</h1>
          </button>
        </div>
      </div>
    </>
  )
}

export default PassGen;
