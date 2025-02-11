import { useNavigate } from 'react-router-dom';

export const Logo = ({ size = 'small' }) => {
  const navigate = useNavigate();
  const onClick = () => navigate('./outline');

  return (
    <div
      className="flex-center l-logo"
      onClick={onClick}
      style={{ fontSize: size === 'big' ? '36px' : '18px' }}
    >
      DataCenter
    </div>
  );
};
