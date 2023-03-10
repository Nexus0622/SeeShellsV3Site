import styled from "styled-components";
import Header from "./Header";
import logo from "./seeshellsLogo-flipped.png";
import { MainContent, Title, MainText} from "./customStyles";


export default function App() 
{
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  `
  const AboutHeader = styled.div`
    display: flex;
    width: 100vw;
    background: #2C313D;
    height: 40vh;
    color: #FFFBF0;
    font-family: "IBM Plex Sans Condensed";
  `

  const AboutHeaderContent = styled.div`
  flex-direction: column; 
  font-family: "Jost"; 
  font-size: 35px;
  display: flex; 
  width: 45vw; 
  align-items: center; 
  justify-content: center;
  `

  const Logo = styled.div`
    display: flex;
  `

  const Download = styled.div`
        background: #1C1E23;
        font-size: 20px;
        border-radius: 40px;
        width: 120px;
        margin-left: 15px;
        margin-top: 10px;
        text-align: center;
        font-weight: bold;
        padding:5px;
        font-family: "IBM Plex Sans Condensed";
    `
  return (
    <Container>
      <Header tab = "About"/>
      <AboutHeader>
        <AboutHeaderContent>  
            <span style={{marginLeft:"50px"}}>
              A Digital Forensics Tool <br />
              for analyzing Windows <br />
              Registry Artifacts
            </span>
            <Download>
              Download
            </Download>
        </AboutHeaderContent>
        <AboutHeaderContent style={{width:"55vw"}}>
          <Logo>
            <img src={logo} width={"150vw"} height={"150vh"}/>
          </Logo>
        </AboutHeaderContent>
      </AboutHeader>
      <MainContent style={{height:"100%"}}>
        <div style={{width:"100vw", textAlign:"center"}}>
          <Title style={{fontSize:35}}>
            About Us
          </Title>
        </div>
        <div style={{textAlign:"center", marginTop:"5vh"}}>
          <MainText style={{fontSize:25}}>
            Digital Forensics can be difficult. SeeShells makes it so it doesn't have to be. <br/>
            ShellBags and the Windows Registry are both valuable assets in digital forensics field, <br />
            however, parsing through the information given can be overwhelming and tiresome. <br />
            That's where SeeShells comes in. Our tool parses the information so you don't have to. <br />
            SeeShells displays ShellBag information in multiple digestable formats such as <br/>
            filters, reports, histograms, and tables. 
          </MainText>
        </div>
      </MainContent>
    </Container>

  );
}
