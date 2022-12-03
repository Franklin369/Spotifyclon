import styled from "styled-components";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import {BsPlayCircleFill} from "react-icons/bs"
export function Playercontrols() {
  return (
    <Container>
      <div className="previous">
        <CgPlayTrackPrev />
      </div>
      <div className="state">
<BsPlayCircleFill/>
      </div>
      <div className="next">
        <CgPlayTrackNext />
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  .previous,
  .next,.state {
    font-size: 2rem;
  }
`;
