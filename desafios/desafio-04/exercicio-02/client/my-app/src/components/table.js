import styled from "styled-components";
import TableHead from "./table-head";
import TableBody from "./table-body";
const StyledTable = styled.table`
    background: #fff;
    width: 1000px;
    margin: 20px 0;
    border-collapse: collapse;
    box-shadow: 0px 5px 30px #e0e0e0;
`
const Table = ({ cars, handleDelete }) => {
    return (
        <>
            <StyledTable>
                <TableHead />
                <TableBody state={{ cars, handleDelete }} />
            </StyledTable>
        </>
    )
}
export default Table;