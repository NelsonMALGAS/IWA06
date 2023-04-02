const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

const primaryValid = typeof primaryPhone === 'string' &&  /^\d+$/.test(primaryPhone)  
const secondaryValid = typeof secondaryPhone === 'string' && /^\d+$/.test(secondaryPhone)  

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid );


//Changed const primaryValid = typeof number == primaryPhone to const
//primaryValid = typeof primaryPhone == 'string' &&  /^\d+$/.test(primaryPhone)  

//Changed const secondaryValid = typeof number == secondaryPhone to const
//secondaryValid = typeof secondaryPhone == 'string' &&  /^\d+$/.test(secondaryPhone) 

//The regular expression /^\d+$/ is used to check if the phone numbers contain only numerical digits.

