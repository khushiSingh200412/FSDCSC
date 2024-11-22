function aa(){
    console.log("first");
};
aa();


(function(){
    console.log("second");
})();


() =>{
    console.log("third"); //this os a function expression
}

let a=new Function(`console.log("dcdsdc");`);

// console.log("iyewufohe");
function rollnumber(num,nextroll){
    setTimeout(()=>{
        console.log("roll.no",num);
        if(nextroll) nextroll();

    },delay)
    // console.log("roll.no",num);
    };

    // setTimeout(rollnumber,1000,286543);
    //  setTimeout(rollnumber, 3000, 286544);
    // console.log("kjhug")
    rollnumber(11,1000,()=>{
        rollnumber(22,3000,()=>{
            rollnumber(33,4000);
        });
    });
