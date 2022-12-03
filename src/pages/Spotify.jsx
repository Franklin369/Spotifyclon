import styled from "styled-components";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
export function Spotify() {
  return (
    <Container>
      <div className="spotifybody">
        <Sidebar />
        <div className="body">
          <div className="bodycontent">
            <h1>Hola spotify</h1>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Container>
  );
}
const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  display: grid;
  grid-template-rows: 85vh 15vh;
  overflow: hidden;
  .spotifybody {
    display: grid;
    grid-template-columns: 30vw 70vw;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(99, 42, 16);
    .body {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
  }
`;
