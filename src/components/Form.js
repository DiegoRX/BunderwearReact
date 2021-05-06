import React, {useContext} from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components'
import { Context } from '../context/Context';
import Swal from 'sweetalert2';
// import './ContactUs.css';

export default function ContactUs() {
    const { txReceipt } = useContext(Context);
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_itwmv9a', 'template_340js25', e.target, 'user_8zFzNE9ZjccAbkpre5yQP')
            .then((result) => {
                Swal.fire(
                    'BUNDERWEAR REDEEMED',
                    'Please, allow 4 to 5 weeks for shipping',
                    'success'
                  )
            }, (error) => {
                console.log(error.text);
            });
    }
    //ZIP codeCountry
    return (
        <FormContainer>
            <form className="contact-form" onSubmit={sendEmail} style={{marginTop: '10px'}}>
                <Input type="hidden" name="contact_number" />
                <InputContainer>
                    <Input type="text" name="user_name" placeholder="Name" style={{ width: '70%' }} required/>
                    <Label>Size</Label>
                    <select name="size">
                        <option value="m">M</option>
                        <option value="l">L</option>
                    </select>
                </InputContainer>
                <InputContainer>
                    <Input type="text" name="user_address" placeholder="Address" style={{ width: '75%' }} required />
                    <Input type="text" name="unit" placeholder="Unit" style={{ width: '25%', marginLeft: '3px' }} required />
                </InputContainer>
                <InputContainer>
                    <Input type="text" name="city" placeholder="City" style={{ width: '60%' }} required/>
                    <Input type="number" name="zip_code" placeholder="ZIP code" style={{ width: '40%', marginLeft: '3px' }} required/>
                </InputContainer>
                <InputContainer>
                    <Input type="text" name="country" placeholder="Country" style={{ width: '100%' }} required/>
                </InputContainer>
                <InputContainer>
                    <Input type="email" name="user_email" placeholder="Email" style={{ width: '100%' }} required/>
                </InputContainer>
                <InputContainer>
                    <Input type="text" name="hash" placeholder="Hash Confirmation" value={txReceipt.blockHash} style={{ width: '100%' }} required/>
                </InputContainer>
                <InputContainer>
                    <Send type="submit" value="Send" style={{ width: '100%' }} />
                </InputContainer>
            </form>
        </FormContainer>

    );
}

const FormContainer = styled.div`
margin: auto;
width: 320px;    
height: 260px;

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
border-color: black;
border-radius: 5px;
`
const Send = styled.input`
height: 30px;
background: linear-gradient(to right, red, #d52941);
border-radius: 5px;
border: none;
`