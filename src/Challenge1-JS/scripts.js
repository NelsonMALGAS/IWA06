const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';



const primaryValid = typeof primaryPhone === 'string' && /^[0-9]/.test(primaryPhone)  
const secondaryValid = typeof secondaryPhone === 'string' && /^[0-9]/.test(secondaryPhone)  

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid );


//Changed const primaryValid = typeof number == primaryPhone to const
//primaryValid = typeof primaryPhone == 'string' &&  /^\d+$/.test(primaryPhone)  

//Changed const secondaryValid = typeof number == secondaryPhone to const
//secondaryValid = typeof secondaryPhone == 'string' &&  /^\d+$/.test(secondaryPhone) 

//The regular expression /^\['string']/ is used to check if the strings contain only numerical digits.


