import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <h1 className='text-sky-600 font-black md:text-6xl text-4xl capitalize text-center'>
        Incia sesión y administra tus <span className='text-slate-700'>Proyectos</span>
      </h1>

      <form className='my-10 bg-white w-full px-10 py-5 rounded-md shadow shadow-sky-800'>
        <div className='my-5'>
          <label htmlFor='email' className='uppercase text-gray-600 block text-xl font-bold'>Email</label>
          <input
            id='email'
            type='email'
            placeholder="Ej: felipe@correo.com"
            className='w-full mt-1 bg-slate-200 rounded-md p-2 border'
          />
        </div>
        <div className='my-5'>
          <label htmlFor='password' className='uppercase text-gray-600 block text-xl font-bold'>password</label>
          <input
            id='password'
            type='password'
            placeholder='Tu password de registro'
            className='w-full mt-1 bg-slate-200 rounded-md p-2 border'
          />
        </div>
        <div className='mt-5 mb-3'>
          <input
            value={'Login'}
            type='submit'
            className='w-full mt-1 bg-green-500 hover:bg-green-600 cursor-pointer text-white text-xl font-semibold rounded-md p-2 border transition-colors'
          />
        </div>
        <nav>
          <div className='flex'>
            <Link to='olvide-password' className='text-sky-900 font-bold hover:underline'>Olvide mi password</Link>
          </div>

          <div className='flex'>
            <p className='mr-1'>¿No tienes cuenta?</p>
            <Link to='registrar' className='text-sky-900 font-bold hover:underline'>Registrate aqui</Link>
          </div>
        </nav>
      </form>
    </>
  )
}

export default Login