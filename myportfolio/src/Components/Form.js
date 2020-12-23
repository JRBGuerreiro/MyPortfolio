import React, {useState, useRef, useLayoutEffect} from 'react'
import styled from "styled-components";
import {MdContactMail} from "react-icons/md"

const Form = styled.form `
    transform: translateX(${({animateForm}) => (animateForm ? "0" : "-100vw")});
    transition: transform 1s;
    width: 600px;
    height: 350px;
    margin: 30px 0 30px 0;
    background-color: #ffffff;
    display:flex;
    border-radius: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const DivWrapper = styled.div `
    transform: translateX(${({animate}) => (animate ? "0" : "-100vw")});
    transition: transform 1s;
    width: 100vw;
    display: flex;
    justify-content: center;
    height: 120px;
    border-radius: 0 0 100px 100px;
    background-color: #3b4e6b;
`;

const HeaderTitle = styled.h1 `
    opacity: ${({animateOpacity}) => (animateOpacity ? "1" : "0")};
    transition: opacity 1.2s;
    transition-delay: 0.6s;
    color: #ffffff;
    font-size: 32pt;
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 30pt;
    }
`;

const FormData = () => {

    const [show, doShow] = useState({
        wrapperTitle: false,
        title: false,
        form: false,
    })

    const refWrapperTitle = useRef(null),
        refTitle = useRef(null),
        refForm = useRef(null)

    useLayoutEffect(() => {
        const topPos = element => element.getBoundingClientRect().top

        const titleWrapperPos = topPos(refWrapperTitle.current),
              formWrapperPos = topPos(refForm.current)

        const scrollHandler = () => {
            const scrolPos = window.scrollY + window.innerHeight
            if(titleWrapperPos < scrolPos) {
                debugger;
                doShow(state => ({...state, wrapperTitle: true}))
                doShow(state => ({...state, title: true}))
            } 
            if(formWrapperPos < scrolPos) {
                doShow(state => ({...state, form: true}))
            }

        }
        window.addEventListener("scroll", scrollHandler)

        return () => {
            window.removeEventListener("scroll", scrollHandler)
        };
    }, [])

    const [input, setInput] = useState({
        name: "",
        lastName: "",
        email:"",
        textArea: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setInput({
            [name]:value
        })
    };
    
    return(
        <section className="formWrapper">
            <DivWrapper animate={show.wrapperTitle} ref={refWrapperTitle}>
                <HeaderTitle animateOpacity={show.title} ref={refTitle}>Contact</HeaderTitle>
            </DivWrapper>
            <MdContactMail className="form-icon"/>
            <Form animateForm={show.form} ref={refForm}>
                <input type="text" value={input.firstName} name="firstName" onChange={handleChange} placeholder="First Name"></input>
                <input type="text" value={input.lastName} name="lastName" onChange={handleChange} placeholder="Last Name"></input>
                <input type="text" value={input.email} name="email" onChange={handleChange} placeholder="E-mail"></input>
                <textarea type="textarea" value={input.textArea} name="textArea" onChange={handleChange} placeholder="Message..."></textarea>
            </Form>
        </section>
    )
}

export default FormData
