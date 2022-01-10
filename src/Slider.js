import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

export default class Slider extends Component {
    state = {
        count: 1
    }
    componentDidMount(){
        this.createChangerButton();
        this.listener();
        this.autoSliderChanger();
    }
    listener = ()=>{
        let slider = document.getElementById("slider");
        slider.style.transform = 'translateX(' + (-1 * 1080) + 'px)';
        slider.addEventListener('transitionend',()=>{
            if (document.querySelectorAll(".imgSlide")[this.state.count].id === 'lastClone'){
                slider.style.transition = "none";
                this.setState({count:document.querySelectorAll(".imgSlide").length -2 })
                slider.style.transform = 'translateX(' + (-this.state.count * 1080) + 'px)';
            }
            if (document.querySelectorAll(".imgSlide")[this.state.count].id === 'firstClone'){
                slider.style.transition = "none";
                this.setState({count:document.querySelectorAll(".imgSlide").length - this.state.count })
                slider.style.transform = 'translateX(' + (-this.state.count * 1080) + 'px)';
            }
        })
        document.addEventListener('click',(e)=>{
            if (e.target.className === "mx-1 imgSpanTags bg-dark"){
                let list = document.querySelectorAll(".imgSlide");
                let slider = document.getElementById("slider");
                let num = e.target.id.split('-')[1];
                for (let i=0; i <= list.length ; i++){
                    if(i === Number(num)){
                        slider.style.transition = "transform .4s ease-in-out";
                        slider.style.transform = 'translateX(' + (-i * 1080) + 'px)';
                        this.setState({ count: i})
                    }
                }
            }
        })
    }
    autoSliderChanger = ()=>{
        let slider = document.getElementById("slider");
        setInterval(()=>{
            slider.style.transition = "transform .4s ease-in-out";
            slider.style.transform = 'translateX(' + (-this.state.count * 1080) + 'px)';
            this.setState({ count: (this.state.count + 1 )})
        },4000)
    }
    createChangerButton = ()=>{
        let list = document.querySelectorAll(".imgSlide");
        let addElement = document.getElementById('changerArea');
        for( let i = 1 ; i <= list.length-2; i++ ){
            addElement.innerHTML += `<div class='mx-1 imgSpanTags bg-dark'  id="i-${i}"></div>`;
        }
    }
    changer = (e)=>{
        
        let slider = document.getElementById("slider");

        if(e === 'left'){
            slider.style.transition = "transform .4s ease-in-out";
            let count = this.state.count;
            count --;
            if (count === -1) return;
            slider.style.transform = 'translateX(' + (-count * 1080) + 'px)';
            this.setState({count: count})
            console.log(this.state.count)
            
        }else{
            slider.style.transition = "transform .4s ease-in-out";
            let count = this.state.count;
            count ++;
            if (count === document.querySelectorAll(".imgSlide").length) return;
            slider.style.transform = 'translateX(' + (-count * 1080) + 'px)';
            this.setState({count: count})
            console.log(this.state.count)

        }
        
        
    }
    render() {
        return (
            <Container>
                <Row className="bg-dark py-5 my-5">
                    <Col className="px-0">
                        <div style={{ width:'1080px', height:'500px', margin: 'auto', overflow: 'hidden', position:'relative' }}>
                            <div className="d-flex flex-row justify-content-center" id="slider" style={{position:'absolute'}}>
                                {/* <img src='http://img.com/img.com'></img> */}
                                <div style={{ backgroundColor: 'grey',    }} id="lastClone" className="imgSlide"></div>
                                <div style={{ backgroundColor: 'brown',   }} className="imgSlide"></div>
                                <div style={{ backgroundColor: 'red',     }} className="imgSlide"></div>
                                <div style={{ backgroundColor: 'green',   }} className="imgSlide"></div>
                                <div style={{ backgroundColor: 'blue',    }} className="imgSlide"></div>
                                <div style={{ backgroundColor: 'white',   }} className="imgSlide"></div>
                                <div style={{ backgroundColor: 'black',   }} className="imgSlide"></div>
                                <div style={{ backgroundColor: 'yellow',  }} className="imgSlide"></div>
                                <div style={{ backgroundColor: 'cyan',    }} className="imgSlide"></div>
                                <div style={{ backgroundColor: 'grey',    }} className="imgSlide"></div>
                                <div style={{ backgroundColor: 'brown',   }} id="firstClone" className="imgSlide"></div>
                            </div>
                            <div id='changerArea' className='py-2 d-flex ' style={{ position: 'absolute', left: '50%', bottom: '2rem', transform: 'translateX(-50%)' }}>
                            </div>
                            <div  className='p-0 d-flex justify-content-between' style={{ position: 'absolute', top: '50%', width: '100%' , transform: 'translateY(-50%)' }}>
                                <span className="text-center text-white px-3 py-5" onClick={()=>this.changer('left')} id="left"  style={{ borderEndEndRadius:"30px",borderStartEndRadius:"30px",backgroundColor: 'rgba(255, 255, 255, 0.2)',fontSize: '10vh', opacity: '.5', cursor: 'pointer' }}>&lt;</span>
                                <span className="text-center text-white px-3 py-5" onClick={()=>this.changer('right')} id="rigth" style={{ borderStartStartRadius:"30px",borderEndStartRadius:"30px",backgroundColor: 'rgba(255, 255, 255, 0.2)',fontSize: '10vh', opacity: '.5', cursor: 'pointer' }}>&gt;</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
