import { flexBox, positionCenterX } from '@styles/mixins';
import { useEffect } from 'react';
import { HiInformationCircle, HiOutlineX } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, IAlertModalState, showModal } from 'src/store/alertModalSlice';
import styled from 'styled-components';

interface Props {
  isExpired: boolean;
}
function AlertModal({ isExpired }: Props) {
  const { alertModal } = useSelector((state: { alertModal: IAlertModalState }) => state);
  const dispatch = useDispatch();

  const handleCloseClick = () => dispatch(closeModal());

  useEffect(() => {
    dispatch(showModal('세션이 만료되어 재로그인이 필요합니다.'));
  }, [isExpired]);

  if (!alertModal.isOpen) return null;

  return (
    <Container>
      <HiInformationCircle />
      {alertModal.content}
      <HiOutlineX onClick={handleCloseClick} />
    </Container>
  );
}
export default AlertModal;

const Container = styled.div`
  ${positionCenterX()};
  top: 280px;
  ${flexBox()};
  width: 320px;
  height: 40px;
  background-color: ${({ theme }) => theme.YELLOW_BG};
  border: 1px solid ${({ theme }) => theme.YELLOW};
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;

  > svg:first-child {
    margin-right: 5px;
    color: ${({ theme }) => theme.YELLOW};
    font-size: 18px;
  }

  > svg:last-child {
    margin-left: 10px;
    color: ${({ theme }) => theme.NAVY};
    font-size: 18px;
    cursor: pointer;
  }
`;
