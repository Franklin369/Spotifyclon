import styled from "styled-components";

import { Btntipologin } from "../components/Btntipologin";
export function Login() {
  const ingresar = async()=>{
    const client_id="2747fbcfa98349559c45fdd25cdca9f5";
    const uri_redireccion="http://127.0.0.1:5173";
    const api_uri="https://accounts.spotify.com/authorize"
    const respuesta=[
      "user-read-playback-state",
      "playlist-read-private",
      "user-read-email",
      "user-read-private"

    ]
    window.location.href=`${api_uri}?client_id=${client_id}&redirect_uri=${uri_redireccion}&scope=${respuesta.join(

    )}&response_type=token&show_dialog=true`
  
  };
  return(
 <Container>

  <button onClick={ingresar}>Login</button>
 </Container>)
}
const Container = styled.div`
  display:flex;
  img{
    width:200px;
  }
`

