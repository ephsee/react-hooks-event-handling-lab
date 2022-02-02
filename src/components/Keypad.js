// Code Keypad Component Here
function Keypad() {
    return (
        <form>
            <input type="password" onChange={(e)=> console.log('Entering password...', e.target.value)}>
            </input>
        </form>
    )
}

export default Keypad
