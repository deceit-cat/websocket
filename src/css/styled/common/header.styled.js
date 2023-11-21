import styled from "styled-components"

export const ChatIconsContainer = styled.div`
    width: min-content;
    height: 100vh;
    display: flex;
    // 세로로 쌓이도록
    flex-direction: column;
    // 가로 중앙 정렬
    align-items: center;
    transition: all 0.4s linear;
`;
export const IconsModalContainer = styled.div`
    width: min-content;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 3vh 1vw;
`