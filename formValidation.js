//caching input fields and submit button
const submit=document.querySelector('button');
const name=document.querySelector('#fullName');
const emailInput=document.querySelector('#emailAddress');
const address=document.querySelector('#address1');
const city=document.querySelector('#cityInput');
const zipInput=document.querySelector('#zipCode');
const state=document.querySelector('#stateList');
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
        var z=zipInput.value;
        if(fullName=='' || pAddress=='' || z=='' || emailAddress=='')
        {
            this.addError('Please do not leave any fields blank.')
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
        if(zipInput.value.length !=5 && isNaN(zipInput.value))
        {
            this.addError('Enter a valid zipcode.');
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
    let validateZip=new CheckValidity(zipInput, "zip");
    let zipErros=validateZip.getMessages();
    const form=document.getElementById("shippingForm");
    if(errorMessages.length>0&&zipErros.length>0)
    {
        errorMessages.forEach( (err) =>
        {
            form.insertAdjacentHTML('afterend', '<p class="error">'+err+'</p>');
        }) 
    } 
    else
    {   
    var replaceContent=document.getElementById("content");
    var productDetails=document.querySelector("#productTitlePrice");
    var shippingData=document.querySelector("#shippingCost");
    var totalData=document.querySelector("#totalCost");
    var addressData=document.querySelector("#shippingInformation");
    replaceContent.className="completed";
    replaceContent.innerHTML="<h1>Order Complete</h1>";
    replaceContent.innerHTML+=productDetails.innerHTML;
    replaceContent.innerHTML+=shippingData.innerHTML;
    replaceContent.innerHTML+=totalData.innerHTML;
    replaceContent.innerHTML+=addressData.innerHTML;
    replaceContent.innerHTML+='<img src="../Assets/form-assets/circle-check.svg" alt="checkmark">';
    console.log(addressData.innerHTML);
    }
});


document.addEventListener('keydown', updateInfo,false);
function updateInfo()
{
    
        const shipName=document.querySelector('#shippingName');
        const shipAdd=document.querySelector('#mainAddress');
        const cityInfo=document.querySelector('#cityUpdate')
        const zipData=document.querySelector('#zipUpdate');
        cityInfo.innerHTML=city.value;    
        zipData.innerHTML=zipInput.value;
        shipName.innerHTML=name.value;
        shipAdd.innerHTML=address.value;  

}
function stateSelect()
{
    const st=state.options[state.selectedIndex].value; 
    const stateInfo=document.querySelector('#stateUpdate');   
    stateInfo.innerHTML=st;
}
state.addEventListener('change', stateSelect, false)
//focusing on the first radio buttons so that the keyboard can be easily used alone
window.onload=function()
{
   var buttons=document.getElementById('shirtSizeButtons');
   buttons.focus
}

function updateContent()
{

    
}