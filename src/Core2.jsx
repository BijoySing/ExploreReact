
const Core2 = () => {
    function add(num){
        alert(num+10)
    }
    return (
       <button className="btn" onClick={()=>add(5)}>me</button>
    );
};

export default Core2;