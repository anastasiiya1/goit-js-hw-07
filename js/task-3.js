function checkForSpam(message){
    const blackListedWord1 = "spam";
    const blackListedWord2 = "sale";

    const transformedString1 = blackListedWord1.toUpperCase();
    const transformedString2 = blackListedWord2.toUpperCase();


    if (message.toUpperCase().includes(transformedString1) || message.toUpperCase().includes(transformedString2)){
        return true;
    } else{
        return false;
    }

}console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true