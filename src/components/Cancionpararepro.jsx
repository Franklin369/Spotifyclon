import styled from "styled-components";
import imagen from "../assets/merlina.jpg";
export function Cancionpararepro() {
  return (
    <Container>
      <div className="responMenu">*</div>
      <div className="track">
        <div className="contentimage">
          <img src={imagen} />
        </div>
        <div className="info">
          <h4 className="name">Locos</h4>
          <h6 className="autor">Leon Larregi</h6>

        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;
    .contentimage {
      img {
        width: 80px;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      .name {
        color: white;
      }
      .autor {
        color: #b3b3b3;
      }
    }
  }
`;
