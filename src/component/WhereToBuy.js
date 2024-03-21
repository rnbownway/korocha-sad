import { useEffect } from 'react'
import styled from '@emotion/styled'

const MarketList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 10% 10px 10%;
    gap: 25px;
`;

const Market = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const MarketTitle = styled.span`
    color: #005826;
    font-family: "Cambria", Helvetica, Arial, sans-serif;
    letter-spacing: 0.5px;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
`;

const MarketText = styled.span`
    font-family: "Cambria", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    color: #000;
`;

const H2 = styled.span`
    color: #005826;
    font-size: 1.5em;
    font-family: Cambria, Helvetica, Arial, sans-serif;
    display: flex;
    justify-content: center;
`;

function WhereToBuy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <MarketList>
      <H2>Где купить</H2>
      <Market>
        <MarketTitle>
          Магазин "Корочанские сады" №1
        </MarketTitle>
        <MarketText>
          г. Белгород, пр. Б. Хмельницкого, 132<br/>
          на овощном рынке "ВОСХОД"<br/>
          Режим работы: с 8-00 до 20-00<br/>
          Без перерыва и выходных<br/>
          Тел. (47231) 5-72-40
        </MarketText>
      </Market>
      <Market>
        <MarketTitle>
          Магазин "Корочанские сады" №2
        </MarketTitle>
        <MarketText>
          г. Белгород, ул. Щорса справа в 50 м<br/>
          от конечной ост. ТЦ "Сити-Молл"<br/>
          Режим работы: с 10-00 до 19-00<br/>
          Без перерыва и выходных<br/>
          Тел. (47231) 5-72-40
        </MarketText>
      </Market>
      <Market>
        <MarketTitle>
          Магазин "Корочанские сады" №3
        </MarketTitle>
        <MarketText>
          пгт.Разумное, пр-кт Ленина, д.8<br/>
          Режим работы: с 8-00 до 20-00<br/>
          Без перерыва и выходных<br/>
          Тел. (47231) 5-72-40
        </MarketText>
      </Market>
      <Market>
        <MarketTitle>
          Магазин "Корочанские сады" №4
        </MarketTitle>
        <MarketText>
          мкр.Чичерина, ул.Сумская, д.72 «Д»<br/>
          Режим работы: с 8-00 до 20-00<br/>
          Без перерыва и выходных<br/>
          Тел. (47231) 5-72-40
        </MarketText>
      </Market>
      <Market>
        <MarketTitle>
          Магазин "Корочанские сады" №5
        </MarketTitle>
        <MarketText>
          мкр.Таврово 2, переулок Парковый, д.27 «З»<br/>
          Режим работы: с 8-00 до 20-00<br/>
          Без перерыва и выходных<br/>
          Тел. (47231) 5-72-40
        </MarketText>
      </Market>
      <Market>
        <MarketTitle>
          Магазин "Корочанские сады" №6
        </MarketTitle>
        <MarketText>
          г.Короча , ул.Красная площадь, 32А<br/>
          Режим работы: с 8-00 до 20-00<br/>
          Без перерыва и выходных<br/>
          Тел. (47231) 5-72-40
        </MarketText>
      </Market>
      <Market>
        <MarketTitle>
          Магазин "ВИКТОРИЯ"
        </MarketTitle>
        <MarketText>
          при въезде на территорию ООО "Корочанские сады"<br/>
          Режим работы: с 10-00 до 19-00<br/>
          Без перерыва и выходных<br/>
          Тел. /факс: (47231) 5-72-40<br/>
          Тел. (47231) 5-72-40
        </MarketText>
      </Market>
    </MarketList>
  )
}

export default WhereToBuy