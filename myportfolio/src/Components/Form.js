import React, {useState, useRef, useLayoutEffect, useEffect} from 'react'
import styled from "styled-components";
import {MdContactMail} from "react-icons/md"
import useForm from "./useForm"
import validateForm from "./validateForm"

const Form = styled.form `
    transform: translateX(${({animateForm}) => (animateForm ? "0" : "-100vw")});
    transition: transform 1s;
    width: 600px;
    margin: 0 0 30px 0;
    background-color: #ffffff;
    display:flex;
    border-radius: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        color: red;
        font-size: 10pt;
    }
`;

const DivWrapper = styled.div `
    transform: translateX(${({animate}) => (animate ? "0" : "-100vw")});
    transition: transform 1s;
    display: flex;
    justify-content: center;
    border-radius: 0 0 100px 100px;
`;

const HeaderTitle = styled.h1 `
    color: #283647;
    font-size: 32pt;
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    margin: 50px 0 10px 0;

    &:after {
        opacity: ${({animateOpacity}) => (animateOpacity ? "1" : "0")};
        transition: opacity 1s;
        transition-delay: 0.8s;
        content: "Contact";
        display: block;
        color: rgba(40,54,71,.1);
        transform: rotate3d(1, 0, 0, 114deg) scale(1, 2.5) skew(-38deg, 0deg);
        margin: -20px 0 0 10px;
    }

    @media (max-width: 768px) {
        font-size: 30pt;
    }
`;

const ContactTextWrapper = styled.div `
    opacity: ${({animateOpacityWrapper}) => (animateOpacityWrapper ? "1" : "0")};
    transition: opacity 1.2s;
    width: calc(600px * 0.6);
    padding: 12px 18px;
`;

const FormData = () => {
    //Animations whilst scrolling
    const [show, doShow] = useState({
        wrapperTitle: false,
        title: false,
        form: false,
        contactWrapper: false
    })

    const refWrapperTitle = useRef(null),
        refTitle = useRef(null),
        refForm = useRef(null),
        refContactTitleWrapper = useRef(null)

    useLayoutEffect(() => {
        const topPos = element => element.getBoundingClientRect().top

        const titleWrapperPos = topPos(refWrapperTitle.current),
              formWrapperPos = topPos(refForm.current),
              contactWrapperPos = topPos(refContactTitleWrapper.current)

        const scrollHandler = () => {
            const scrolPos = window.scrollY + window.innerHeight
            if(titleWrapperPos < scrolPos) {
                doShow(state => ({...state, wrapperTitle: true}))
                doShow(state => ({...state, title: true}))
            } 
            if(formWrapperPos < scrolPos) {
                doShow(state => ({...state, form: true}))
            }
            if(contactWrapperPos < scrolPos) {
                doShow(state => ({...state, contactWrapper: true}))
            }

        }
        window.addEventListener("scroll", scrollHandler)

        return () => {
            window.removeEventListener("scroll", scrollHandler)
        };
    }, [])

    ///Business logic for the form with custom hook

    const {handleChange, values, handleSubmit, paragraph, formErrors} = useForm(validateForm)
    
    return(
        <section className="formWrapper">
            <DivWrapper animate={show.wrapperTitle} ref={refWrapperTitle}>
                <HeaderTitle animateOpacity={show.title} ref={refTitle}>Contact</HeaderTitle>
            </DivWrapper>
            <div className="iconWrapper">
                <MdContactMail className="form-icon"/>
            </div>
            <ContactTextWrapper animateOpacityWrapper={show.contactWrapper} ref={refContactTitleWrapper} className="contactTextWrapper">
                <p>Feel free to contact with any questions about my work and availability</p>
            </ContactTextWrapper>
            <Form animateForm={show.form} ref={refForm} name="contact-form">
                {formErrors.name && <p>{formErrors.name}</p>}
                <input type="text" value={values.name} name="name" onChange={handleChange} placeholder="First Name" id="name"></input>
                {formErrors.lastName && <p>{formErrors.lastName}</p>}
                <input type="text" value={values.lastName} name="lastName" onChange={handleChange} placeholder="Last Name" id="lastname"></input>
                {formErrors.email && <p>{formErrors.email}</p>}
                <input type="text" value={values.email} name="email" onChange={handleChange} placeholder="E-mail" id="email"></input>
                {formErrors.textArea && <p>{formErrors.textArea}</p>}
                <textarea type="textarea" styler="resize:none" value={values.textArea} name="textArea" onChange={handleChange} placeholder="Message..." id="message"></textarea>
                {paragraph}
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </Form>
        </section>
    )
}

export default FormData
