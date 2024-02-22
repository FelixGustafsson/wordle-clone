import React from 'react'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(alphabet)
const VirtualKeyboard = () => {
    return (
        <div>
            {alphabet.map((letter) => (<button key={letter}>{letter}</button>))}
            <button>Enter</button>
        </div>
    )
}

export default VirtualKeyboard;