function Button({children}: any){ //Pongo children para poder poner lo que quiera como texto


    return (
        <button style={{ fontFamily: 'Permanent Marker' }} className='text-cyan-300 bg-blue-800 border-black-1 rounded-2xl text-3xl p-3 hover:bg-cyan-700'>
            {children}
        </button>
    );
}

export default Button;