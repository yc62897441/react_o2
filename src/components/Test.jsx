import styled from 'styled-components'

const TestWrapper = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid black;
`

function Test() {
    return (
        <TestWrapper>
            <h1>This is the Test Component</h1>
        </TestWrapper>
    )
}

export default Test