//caching input fields and submit button
const submit=document.querySelector('button');
const name=document.querySelector('#fullName');
const emailInput=document.querySelector('#emailAddress');
const address=document.querySelector('#address1');
const city=document.querySelector('#cityInput');
const zipInput=document.querySelector('#zip');
const st=document.querySelector('#stateList');
const country=document.querySelector('#country');

class CheckValidity
{
    constructor(input, type)
    {
        this.input=input;
        this.type=type;
        this.errors=[];
    }
    addError(message)
    {
        this.errors.push(message);
    }
    getMessages()
    {
        const status= this.input.validity;
        var fullName=name.value;
        var emailAddress=emailInput.value;
        var pAddress=address.value;
        if(fullName=='' || pAddress=='')
        {
            this.addError('Please do not leave any inputs blank.')
        }
        
        if(status.typeMismatch)
        {
            this.addError('Entry does not match the field type.');
        }
         if(status.tooLong)
        {
            this.addError('Entry is to long.');
        }
        if(status.tooShort)
        {
            this.addError('Entry is to short.');
        }

        return this.errors;
    }
}
submit.addEventListener('click', (event)=>
{
event.preventDefault();
let validateEmail= new CheckValidity(emailInput, "email");
let validateName= new CheckValidity(name, "text");
let errorMessages= validateEmail.getMessages();
let nameErrors= validateName.getMessages();

if(errorMessages.length>0)
{
    errorMessages.forEach( (err) =>
    {
       const form=document.getElementById("shippingForm");
       form.insertAdjacentHTML('afterend', '<p class="error">'+err+'</p>');
    })
}

if(nameErrors.length>0)
{    
    nameErrors.forEach( (err) =>
    {
       const form=document.getElementById("shippingForm");
       form.insertAdjacentHTML('afterend', '<p class="error">'+err+'</p>');
    })
}

else
{
  
    alert('form submitted');
}

});
document.addEventListener('keydown', updateInfo,false);
function updateInfo()
{
    
        const shipName=document.querySelector('#shippingName');
        const shipAdd=document.querySelector('#primaryAddress');
        shipName.innerHTML=name.value;
        shipAdd.innerHTML=address1.value;
        console.log('this works, kinda')
}




