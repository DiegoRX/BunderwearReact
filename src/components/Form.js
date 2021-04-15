import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components'
// import './ContactUs.css';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_urqrsvu', 'template_q0t2ctl', e.target, 'user_ND3xIP2LSWmsTJWqXbZ13')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    //ZIP codeCountry
    return (
        <FormContainer>
            <form className="contact-form" onSubmit={sendEmail}>
            <Input type="hidden" name="contact_number"  />  
            <InputContainer> 
            <Input type="text" name="user_name" placeholder="Name" style={{width:'70%'}}/>
            <Label>Size</Label>
            <select name="size">

<option value="xs">xs</option>
<option value="s">s</option>
<option value="m">m</option>
<option value="l">l</option>
<option value="xl">xl</option>
</select>
            </InputContainer>
            <InputContainer>
            <Input type="text" name="user_address"  placeholder="Address" style={{width:'75%'}}/>
            <Input type="text" name="unit" placeholder="Unit"style={{width:'25%', marginLeft: '3px'}}/>
            </InputContainer>
            <InputContainer>
            <Input type="text" name="city" placeholder="City"style={{width:'60%'}}/>
            <Input type="number" name="zip_code" placeholder="ZIP code"style={{width:'40%', marginLeft: '3px'}}/>
            </InputContainer>
            <InputContainer>
            <Input type="text" name="country" placeholder="Country"style={{width:'100%'}}/>
            </InputContainer>
            <InputContainer>
            <Input type="email" name="user_email" placeholder="Email"style={{width:'100%'}}/>
            </InputContainer>
            <InputContainer>
            <Input type="text" name="hash" placeholder="Hash Confirmation"style={{width:'100%'}}/>
            </InputContainer>
            <InputContainer>
            <Input type="submit" value="Send" style={{width:'100%'}} />
            </InputContainer>
        </form>
        </FormContainer>
        
    );
}

const FormContainer = styled.div`
margin: auto;
width: 320px;    

`
const InputContainer = styled.div`
margin: auto;
width: 320px;  
display: flex;
justify-content: space-between;
padding-bottom: 3px; 
`
const Label = styled.label`
color: white;
margin-bottom: 0px; 

`
const Input = styled.input`
height: 30px;


`