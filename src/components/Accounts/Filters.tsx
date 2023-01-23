import SelectBox from '@components/UI/SelectBox';
import useAccountQueryDispatch from '@hooks/useAccountQueryDispatch';
import useAccountQueryState from '@hooks/useAccountQueryState';
import { getSelectOptions } from '@utils/getSelectOptions';
import { ACCOUNT_ACTIVITY, ACCOUNT_STATUS, BROKERS } from 'src/constants/static';
import styled from 'styled-components';

function Filters() {
  const { dispatchPage, dispatchBrokerId, dispatchStatus, dispatchIsActive } = useAccountQueryDispatch();
  const accountQuery = useAccountQueryState();
  const { brokerId, status, isActive } = accountQuery;

  const brokerOptions = getSelectOptions(BROKERS, '증권사(전체)');
  const accountStatusOptions = getSelectOptions(ACCOUNT_STATUS, '운용상태(전체)');
  const accountActivityOptions = getSelectOptions(ACCOUNT_ACTIVITY, '계좌상태(전체)');

  return (
    <Container>
      <SelectBox
        options={brokerOptions}
        handleSelectChange={dispatchBrokerId}
        dispatchPage={dispatchPage}
        value={brokerId}
      />
      <SelectBox
        options={accountStatusOptions}
        handleSelectChange={dispatchStatus}
        dispatchPage={dispatchPage}
        value={status}
      />
      <SelectBox
        options={accountActivityOptions}
        handleSelectChange={dispatchIsActive}
        dispatchPage={dispatchPage}
        value={isActive}
      />
    </Container>
  );
}
export default Filters;

const Container = styled.div``;
