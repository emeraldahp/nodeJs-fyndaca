
function init(a){
    let name = "person1";
    const add = 53;
    
    function display(){
        console.log(name);
    }
    display();

    function addthis(){
        let final = a + add;
        console.log("final: ", final)
    }
    addthis()
}

init(20)

//reusing

function addnum(setnum){
    function add(num){
        return setnum+num;
    }
    return add;
}

const add3 = addnum(3);
const add6 = addnum(6);

console.log(add3(6));
console.log(add6(4));

