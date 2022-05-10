import React from 'react'

const Alerta = ( {alerta} ) => {
  return (
    <div className={alerta.error ? (
      'bg-red-600 text-center text-white md:text-xl text-lg p-2 rounded shadow'
    ) : (
      'bg-sky-600 text-center text-white md:text-xl text-lg p-2 rounded shadow'
    )}>
        {alerta.mensaje}
    </div>
  )
}

export default Alerta