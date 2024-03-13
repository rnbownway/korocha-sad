import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const PartnerList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 10% 10px 10%;
    gap: 25px;
    min-height: 85vh;
`;

const PartnerBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const PartnerText = styled.span`
    font-family: "Cambria", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    color: #000;
`;

const PartnerTextLink = styled.span`
    font-family: "Cambria", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    color: #005826;

    &:hover {
      opacity: 0.8;
    }
`;

const H2 = styled.span`
    color: #005826;
    font-size: 1.5em;
    font-family: Cambria, Helvetica, Arial, sans-serif;
    display: flex;
    justify-content: center;
`;

function Partners() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <PartnerList>
        <H2>Партнерам</H2>
        <PartnerBlock>
          <Link to="/files/karta_predpriyatia_korochanskie_sady.doc" target="_blank" download>
            <PartnerTextLink>Карта предприятия СССПСПОК Корочанские сады</PartnerTextLink>
          </Link>
          <Link to="/files/proekt_dogovora_postavki.docx" target="_blank" download>
            <PartnerTextLink>Проект договора поставки СССПСПОК Корочанские сады</PartnerTextLink>
          </Link>
          <Link to="/files/sv_vo_o_postanovke_na_uchet.jpg" target="_blank" download>
            <PartnerTextLink>Свидетельство о постановке на учет в налоговом органе СССПСПОК Корочанские сады</PartnerTextLink>
          </Link>
        </PartnerBlock>
        <PartnerBlock>
          <PartnerText>
            При заключении договора Стороны обмениваются заверенными подписью руководителя и печатью следующими документами:
            <li>Свидетельство о постановке на учет в налоговом органе юридического лица (индивидуального предпринимателя);</li>
            <li>Свидетельство о государственной регистрации юридического лица;</li>
            <li>Устав;</li>
            <li>Решение о назначении (избрании, др.) исполнительного органа (директор, генеральный директор, др.);</li>
            <li>Доверенность на подписание договора, выданная лицу, подписывающему договор (если договор подписывает лицо не являющееся единоличным исполнительным органом);</li>
            <li>Свидетельство ОГРНИП (для индивидуальных предпринимателей);</li>
            <li>Копия паспорта Индивидуального предпринимателя;</li>
            <li>Реквизиты банковского счета (для расчетов между сторонами)</li>
          </PartnerText>
        </PartnerBlock>
    </PartnerList>
  )
}

export default Partners