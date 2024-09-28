import React, { useState } from 'react';
import { MdMessage, MdCall } from "react-icons/md";
import '../App.css';
import Button from './Button/Button';
const Hero = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !text) {
            alert('All fields are required');
            return;
        }else{
        setName("");
        setEmail("");
        setText("");
        alert("Submitted")}
    };

    return (
        <div>
            <div className="contact">
                <h1>CONTACT US</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam cupiditate unde tempore. Ab iste quasi nihil minus excepturi! In nemo beatae facilis omnis quasi magni aut ratione ullam tempora!
                Lorem, ipsum dolor sit amet consectetur adipisicing
                </p>
            </div>
            <div className="container">
                <div className="form">
                    <div className="box">
                        <Button icon={<MdMessage />} text="VIA SUPPORT CHAT" />
                        <Button icon={<MdCall />} text="VIA CALL"    />
                        <Button icon={<MdMessage />} text="VIA EMAIL FORM" className='btn' outline={true} />
                       
                    </div>
                    <div className="input-container">
                        <input type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)} value={name} />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-container">
                        <input type="email" id="email" required name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-container">
                        <textarea name="text" id="text" required onChange={(e) => setText(e.target.value)} value={text}></textarea>
                        <label htmlFor="text">Text</label>
                    </div>
                    <div style={{display:'flex', justifyContent:'flex-end'}} >
                    <Button  text="SUBMIT" className="btn"  onClick={handleSubmit} />
                    </div>
                </div>
                <div className="service">
                    <img src="/images/Service.svg" alt="service" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
