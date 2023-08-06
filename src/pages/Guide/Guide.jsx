import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import Header from '../../Components/Header/Header';
import Margin from '../../Components/Margin/Margin';
import NavigationBar from '../../Components/Navigate/Navigate';
import consumerGuide from './consumerGuide.svg';



export default function GuidePage() {
  const navigate = useNavigate();

  return (
    <>
      <Header left="logo" right={["login", "search"]} />
      <img src={consumerGuide} style={{ width: '100%' }} />

      <Margin height='120' />
      <NavigationBar />
    </>
  );
}
