
function Actor({sing}) {
    console.log(sing);
    return (
        <div>
            <li>name: {sing.name}</li>
        </div>
    )
}

export default Actor;