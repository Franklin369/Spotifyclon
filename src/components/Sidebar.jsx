import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import {BiLibrary} from "react-icons/bi"
export function Sidebar() {
  return (
    <Container>
      <div className="subcontainertop">
        <div className="logo">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="logospotify"
          />
        </div>
        <ul>
          <li>
            <AiFillHome />
            <span>Inicio</span>
          </li>
          <li>
            <FiSearch />
            <span>Buscar</span>
          </li>
          <li>
            <BiLibrary/>
            <span>Tu biblioteca</span>
          </li>
          <li>
            <BiLibrary/>
            <span>Crear playlist</span>
          </li>
          <li>
            <BiLibrary/>
            <span>Tus me gusta</span>
          </li>
        </ul>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: #b3b3b3;
  .subcontainertop {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      img {
        block-size: auto;
        max-inline-size: 80%;
      }
    }
    ul{
      list-style-type:none;
      display:flex;
      flex-direction:column;
      gap:1rem;
      padding:1rem;
      li{
        display:flex;
        gap:1rem;
        cursor:pointer;
        &:hover{
          color:white;
        }

      }
    }
  }
`;
