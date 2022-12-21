import styled from "styled-components";

const tabs = require("./tabs.json")


export default function Header(props) 
{
  const HeaderTab = styled.div`
    margin-right: 10px;
    font-weight: bold;
    font-size: 20px; 
    width: fit-content;
    border-bottom: ${(props.selected) ? "2px #FFFBF0 solid" : ""}
  `
  return (
    <HeaderTab>
        {props.tab}
    </HeaderTab>
  );
}