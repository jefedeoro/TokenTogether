import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button clicked')
    }
    return (
        <div>
            <Button onClick={clickHandler}>Ready Now? Click Here To Mint Your Tokens</Button>
        </div>
    )
}

export default FunctionClick
