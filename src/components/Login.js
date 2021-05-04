import styled from 'styled-components';
const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src='/images/cta-logo-one.svg' alt="" />
                    <Signup>GET IT ALL THERE</Signup>
                    <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries,but also the leap into electronic typesetting,
                          remaining essentially unchanged.</Description>
                </CTA>
                <CTALogoTwo src="/images/cta-logo-two.png" alt=""></CTALogoTwo>
                <BgImage />
            </Content>
        </Container>
    );
};
const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction : column;
text-align: center;
height: 100vh;
`;
const Content = styled.div`
margin-bottom : 10vw;
width :100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items :center;
flex-direction: column;
padding :80px 40px;
height :100%;
`;
const BgImage = styled.div`
position :absolute;
height: 100% ;
width: 100%; 
background-position :top; 
background-size : cover;
background-repeat : no-repeat;
background-image : url('/images/login-background.jpg');
top: 0;
left : 0;
right:0;
z-index : -1;
`;
const CTA = styled.div`
margin-bottom : 2vw;
max-width : 650px;
flex-wrap  :wrap ;
display : flex;
flex-direction  :table-column;
justify-content : center;
margin-top : 0;
align-items : center;
text-align : center;
margin-right :auto;
margin-left :auto;
transition-timing-function :ease-out;
transition : 0.2s;
width:100%
`;
const CTALogoOne = styled.img`
margin-bottom : 12px; 
max-width  :600px;
min-height  :1px;
display : block; 
width : 100% ;
`;
const Signup = styled.a`
font-weight :bold;
color: #f9f9f9;
background-color : #0063e5;
width: 100%;
margin-bottom :12px;
letter-spacing :1.5px;
font-size :18px;
padding :16.5px 0;
border : 1px solid transparent; 
border-radius : 4px;

&:hover{
    background-color :#0483ee;
}
`;
const Description= styled.div`
color :hsla(0, 0%, 95.3%, 1);
font-size: 14px;
margin:0 0 24px;
line-height :1.5;
`;
const CTALogoTwo=styled.img`
max-width : 600px;
margin-bottom  :20px;
display  :inline-block;
vertical-align: bottom;
width :100%;

`;
export default Login;