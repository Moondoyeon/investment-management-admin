import TableHeadColumn from "@components/UI/TableHeadColumn";

function TableHeadRow() {
  return (
    <>
      <TableHeadColumn>증권사</TableHeadColumn>
      <TableHeadColumn>계좌번호</TableHeadColumn>
      <TableHeadColumn>고객명</TableHeadColumn>
      <TableHeadColumn>운용상태</TableHeadColumn>
      <TableHeadColumn>계좌명</TableHeadColumn>
      <TableHeadColumn>평가금액</TableHeadColumn>
      <TableHeadColumn>입금금액</TableHeadColumn>
      <TableHeadColumn>계좌상태</TableHeadColumn>
      <TableHeadColumn>계좌개설일</TableHeadColumn>
    </>
  );
}
export default TableHeadRow;
