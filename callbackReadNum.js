const fs = require("fs");
//read first 10 even numbers

fs.readFile("./numbers.txt","utf8", (err, data) => {
    if(err) {
        console.error(err)
    }
    //console.log(data)
    nums = data.toString().split("\r\n")
    //console.log(nums);
    counter = 0;
    nums.every(element => {
        let num=Number(element);
        if(num%2==0){
            counter++;
            console.log(`NUMBER#${counter}`,num);
        }
        if(counter==10) return false;
        return true;
    });
});