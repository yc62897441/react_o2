import styled from 'styled-components'
import Navbar from '../components/Navbar.jsx'

const TestWrapper = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid black;
    font-family: 'Noto Sans';
`

function Test() {
    return (
        <>
            {/* <Navbar /> */}
            <TestWrapper>
                <h1>This is the Test Component 測試字型</h1>
            </TestWrapper>
        </>
    )
}

export default Test
