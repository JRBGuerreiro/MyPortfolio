import React, {useState, useRef, useLayoutEffect} from 'react'
import styled from "styled-components";
import {MdContactMail} from "react-icons/md"
import emailjs from "emailjs-com"

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

    ///Business logic for the form
    const [input, setInput] = useState({
        name: "",
        lastName: "",
        email:"",
        textArea: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setInput((prevProps) => ({
            ...prevProps,
            [name]:value
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault()

        const templateParameters = {
            from_name: input.name + " " + input.lastName + " " + input.email,
            to_name: "jguerreirodev@gmail.com",
            message: input.textArea
        }

        emailjs
        .send("my_gmail", "template_rq93odq", templateParameters, "user_jDMfO74vbcFZ662F4U2gQ")
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    }
    
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
            <Form animateForm={show.form} ref={refForm}>
                <input type="text" value={input.name} name="name" onChange={handleChange} placeholder="First Name"></input>
                <input type="text" value={input.lastName} name="lastName" onChange={handleChange} placeholder="Last Name"></input>
                <input type="text" value={input.email} name="email" onChange={handleChange} placeholder="E-mail"></input>
                <textarea type="textarea" styler="resize:none" value={input.textArea} name="textArea" onChange={handleChange} placeholder="Message..."></textarea>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </Form>
        </section>
    )
}

export default FormData
