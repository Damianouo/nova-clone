import React from 'react';
import styled from 'styled-components';

const StyledTwitch = styled.div`
  position: fixed;
  z-index: 10;
  width: calc(100vw - 101px);
  height: 100vh;
  top: 0;
  right: 0;

  transition: all 1s ease;

  display: flex;
  #chat_embed {
    flex: 0 0 340px;
  }
`;

const TwitchStream = () => {
  return (
    <StyledTwitch>
      <iframe
        src="https://player.twitch.tv/?channel=lck&muted=false&parent=localhost"
        title="stream"
        allowFullScreen={true}
        height="100%"
        width="100%"
      ></iframe>
      <iframe
        id="chat_embed"
        src="https://www.twitch.tv/embed/lck/chat?parent=localhost"
        title="chat"
        height="100%"
        width="100%"
      ></iframe>
    </StyledTwitch>
  );
};

export default TwitchStream;
