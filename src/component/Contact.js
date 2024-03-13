import { useEffect } from 'react'
import styled from '@emotion/styled'

const ContactList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 10% 10px 10%;
    gap: 25px;
`;

const ContactBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ContactTitle = styled.span`
    color: #005826;
    font-family: "Cambria", Helvetica, Arial, sans-serif;
    letter-spacing: 0.5px;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
`;

const ContactText = styled.span`
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

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

  return (
    <ContactList>
        <H2>Контакты</H2>
        <ContactBlock>
            <ContactTitle>
                Приёмная
            </ContactTitle>
            <ContactText>
                <li>Тел/факс: 8 (47231) 5-72-40,   8-910-326-48-66</li>
                <li>Почта: spitom@yandex.ru, korocha-plus@mail.ru</li>
            </ContactText>
        </ContactBlock>
        <ContactBlock>
            <ContactTitle>
                Бухгалтерия СССПСПОК Корочанские сады
            </ContactTitle>
            <ContactText>
                <li>Тел: 8 (47231) 5-71-10,   8 (47231) 5-72-69</li>
                <li>Почта: pitmor@yandex.ru</li>
            </ContactText>
        </ContactBlock>
        <ContactBlock>
            <ContactTitle>
                Бухгалтерия ООО Корочанский плодопитомник
            </ContactTitle>
            <ContactText>
                <li>Тел: 8 (47231) 5-71-99</li>
                <li>Почта: gbpit@yandex.ru</li>
            </ContactText>
        </ContactBlock>
        <ContactBlock>
            <ContactTitle>
                Транспортный отдел
            </ContactTitle>
            <ContactText>
                <li>Тел: 8-904-530-95-18</li>
                <li>Почта: logist@korsad.ru</li>
            </ContactText>
        </ContactBlock>
        <ContactBlock>
            <ContactTitle>
                Отдел снабжения
            </ContactTitle>
            <ContactText>
                <li>Тел: 8 (47231) 5-71-67,   8-919-280-73-62</li>
                <li>Почта: manapit@mail.ru</li>
            </ContactText>
        </ContactBlock>
        <ContactBlock>
            <ContactTitle>
                Коммерческий отдел (отдел продаж)
            </ContactTitle>
            <ContactText>
                <li>Тел: 8 (47231) 5-71-67,   8-915-561-32-36</li>
                <li>Почта: korsad_s@mail.ru, manapit@yandex.ru</li>
            </ContactText>
        </ContactBlock>
        <ContactBlock>
            <ContactTitle>
                Отдел продаж
                Cвежей плодово-ягодной продукции
                и посадочного материала
            </ContactTitle>
            <ContactText>
                <li>Тел: 8 (47231) 5-71-95</li>
                <li>Тел: 8-915-575-87-56</li>
                <li>Тел: 8-910-326-04-01</li>
            </ContactText>
        </ContactBlock>
        <ContactBlock>
            <ContactText>
                Юридический адрес СССПСПОК Корочанские сады: 309225, Белгородская область, Корочанский район, с. Поповка, ул. Центральная, д. 4, ком. 20<br/>
                Почтовый адрес СССПСПОК Корочанские сады: 309225, Белгородская область, Корочанский район, с. Поповка, ул. Центральная, д. 4, ком. 20<br/>
                Юридический адрес ООО Корочанский плодопитомник: 309225, Белгородская обл., Корочанский район, ул. Новоселовка, д. 2А офис 16<br/>
                Почтовый адрес ООО Корочанский плодопитомник: 309225, Белгородская обл., Корочанский район, ул. Новоселовка, д. 2А офис 16<br/>
            </ContactText>
        </ContactBlock>
    </ContactList>
  )
}

export default Contact