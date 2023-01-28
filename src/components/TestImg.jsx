import styled from 'styled-components'
import BallImgJpg from '../assets/pexels-pixabay-235615.jpg'
import BallImgPng from '../assets/ball.png'

const TestImgWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1px solid black;
`

const TestImgContainer = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid black;
    border-radius: 50%;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`

function TestImg() {
    return (
        <TestImgWrapper>
            <h1>This is the TestImg Component</h1>
            <TestImgContainer>
                <img src={BallImgJpg} alt="" srcset="" />
            </TestImgContainer>
            <TestImgContainer>
                <img src={BallImgPng} alt="" srcset="" />
            </TestImgContainer>
        </TestImgWrapper>
    )
}

export default TestImg
