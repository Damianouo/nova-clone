import React from 'react';
import { StyledInstLink, StyledInstItem } from './InstLink.style';
import blur from '../../../assets/Photos/blur.jpg';
import foggy from '../../../assets/Photos/foggy.jpg';
import mirror from '../../../assets/Photos/mirror.jpg';

const InstLink = () => {
  return (
    <StyledInstLink>
      <StyledInstItem href="#">
        <img src={blur} alt="" />
        <h2>my favorite song 🎶🎄</h2>
      </StyledInstItem>
      <StyledInstItem href="#">
        <img src={foggy} alt="" />
        <h2>happy humpday 💗</h2>
      </StyledInstItem>
      <StyledInstItem href="#">
        <img src={mirror} alt="" />
        <h2>me or the present? 😚</h2>
      </StyledInstItem>
    </StyledInstLink>
  );
};

export default InstLink;
