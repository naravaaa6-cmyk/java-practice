function getDealStatus(amount){
    if(amount < 10000)
        return "Small deal";
    else if (amount <= 100000);
        return "Medium Deal";
    if(amount > 100000)    
          return  "Large Deal — Manager Approval Required";
        console.log(getDealStatus(5000));
console.log(getDealStatus(50000));
console.log(getDealStatus(200000));

}