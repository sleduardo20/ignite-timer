import styled from 'styled-components';

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

const BaseCountDownButton = styled.button`
  width: 100%;
  border: none;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: bold;
  cursor: pointer;
  transition: 0.1s all;

  color: ${({ theme }) => theme['gray-100']};

  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartButton = styled(BaseCountDownButton)`
  background: ${({ theme }) => theme['green-300']};

  :not(:disabled) :hover {
    background: ${({ theme }) => theme['green-700']};
  }
`;

export const StopButton = styled(BaseCountDownButton)`
  background: ${({ theme }) => theme['red-500']};

  :not(:disabled) :hover {
    background: ${({ theme }) => theme['red-700']};
  }
`;
