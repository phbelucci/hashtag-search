import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 80%;
    align-items: center;
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const HashtagSection = styled.div`
    overflow: auto;
    max-height: 60%;
`;

export const HashtagAndFeeling = styled.div`
    display: flex;
    justify-content: space-between;
    max-height: 48px;
    width: 100%;
    padding-bottom: 2px;

    div {
        min-width: 45%; 
    }

`;