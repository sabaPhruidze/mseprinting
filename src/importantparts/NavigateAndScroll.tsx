import { useNavigate } from "react-router-dom";

interface NavigateAndScrollProps {
  path: string;
  children: React.ReactNode;
}

const NavigateAndScroll: React.FC<NavigateAndScrollProps> = ({
  path,
  children,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <span onClick={handleNavigate} style={{ cursor: "pointer" }}>
      {children}
    </span>
  );
};

export default NavigateAndScroll;
