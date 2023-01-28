import styled from 'styled-components'
import JsonData from '../assets/test.json'

const TestJsonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding: 50px;
    border: 1px solid black;
`

const DatumWrapper = styled.div`
    display: inline;
    div {
        display: inline;
        margin: 3px;
        border: 1px solid black;
    }
`

function TestJson() {
    return (
        <TestJsonWrapper>
            {JsonData.length > 0 &&
                JsonData.map((datum) => (
                    <DatumWrapper>
                        <div>{datum.Year}</div>
                    </DatumWrapper>
                ))}
        </TestJsonWrapper>
    )
}

export default TestJson
