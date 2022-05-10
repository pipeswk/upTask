

const NuevoPassword = () => {
  return (
    <>
      <h1 className='text-sky-600 font-black md:text-6xl text-4xl capitalize text-center'>
        Restablece tu <span className='text-slate-700'>Password</span>
      </h1>

      <form className='my-10 bg-white w-full px-10 py-5 rounded-md shadow shadow-sky-800'>
        <div className='my-5'>
          <label htmlFor='password' className='uppercase text-gray-600 block text-xl font-bold'>Nuevo password</label>
          <input
            id='password'
            type='password'
            placeholder='Escribe tu nueva contraseña'
            className='w-full mt-1 bg-slate-200 rounded-md p-2 border'
          />
        </div>
        <div className='my-5'>
          <label htmlFor='passwordConfirm' className='uppercase text-gray-600 block text-xl font-bold'>Confirma tu password</label>
          <input
            id='passwordConfirm'
            type='password'
            placeholder='Confirma la contraseña'
            className='w-full mt-1 bg-slate-200 rounded-md p-2 border'
          />
        </div>
        <div className='mt-5 mb-3'>
          <input
            value={'Restablecer password'}
            type='submit'
            className='w-full mt-1 bg-green-500 hover:bg-green-600 cursor-pointer text-white text-xl font-semibold rounded-md p-2 border transition-colors'
          />
        </div>
      </form>
    </>
  )
}

export default NuevoPassword