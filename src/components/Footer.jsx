import styled from "styled-components"; 
import {Playercontrols} from "./Playercontrols"
import {Cancionpararepro} from "./Cancionpararepro"
export function Footer() {
  return (<Container>
<Cancionpararepro/>
<Playercontrols/>
<h1>volumen</h1>
  </Container>);
}
const Container = styled.div`
color:white;
  height:100%;
  width:100%;
  background-color: #181818;
  border-top:1px solid #282828;
  display:grid;
  grid-template-columns:1fr 2fr 1fr;
  align-items:center;
  justify-content:center;
  padding: 0 1rem;


`