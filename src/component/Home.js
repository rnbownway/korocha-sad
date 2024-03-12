import React from 'react'
import styled from '@emotion/styled'
import background from '../assets/background.png'
import tea from '../assets/tea.png'
import saplings from '../assets/saplings.png'
import apples from '../assets/apples.png'
import juices from '../assets/juices.png'
import juicesBottle from '../assets/juices-bottle.png'
import conservants from '../assets/conservants.png'
import { NavLink } from 'react-router-dom'

const Img = styled.img`
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

const H2 = styled.span`
    color: #005826;
    font-size: 1.5em;
    font-family: Cambria, Helvetica, Arial, sans-serif;
    display: flex;
    justify-content: center;
`;

const Products = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 5% 0 5%;
    gap: 5px;
`;

const Product = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border: 1px solid #005826;
    width: 100%;
    height: 100%;
    border-radius: 5px;
`;

const Button = styled.button`
    background-color: #DC143C;
    font-family: Cambria, Helvetica, Arial, sans-serif;
    color: #fafaf4;
    font-weight: 700;
    border-radius: 25px;
    cursor: pointer;
    width: 200px;
    height: 45px;

    &:hover {
        opacity: 0.8;
    }
`;

const Structures = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 5% 0 5%;
    gap: 20px;
    margin-bottom: 25px;
`;

const StructureLeft = styled.div`
    background-color: rgba(254, 246, 237, 1);
    border: 1px solid #005826;
    border-radius: 0 20px 20px 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const StructureRight = styled.div`
    background-color: rgba(254, 246, 237, 1);
    border: 1px solid #005826;
    border-radius: 20px 0 20px 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const StructureTitle = styled.span`
    color: #005826;
    font-family: "Cambria", Helvetica, Arial, sans-serif;
    letter-spacing: 0.5px;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
`;

const StructureText = styled.span`
    font-family: "Cambria", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    color: #000;
`;

function Home() {
  return (
    <Section>
        <Img src={background} alt="background"/>

        <H2>Наша продукция</H2>

        <Products>
            <Product>
                <img src={apples} alt='apples'/>
                <NavLink to={'/apples'}>
                    <a href="#">
                        <Button>Яблоки</Button>
                    </a>
                </NavLink>
            </Product>
            <Product>
                <img src={juicesBottle} alt='juices-bottle'/>
                <NavLink to={'/juices-bottle'}>
                    <a href="#">
                        <Button>Соки в стекле</Button>
                    </a>
                </NavLink>
            </Product>
            <Product>
                <img src={juices} alt='juices'/>
                <NavLink to={'/juices'}>
                    <a href="#">
                        <Button>Соки в Pure-pak</Button>
                    </a>
                </NavLink>
            </Product>
            <Product>
                <img src={conservants} alt='conservants'/>
                <NavLink to={'/conservants'}>
                    <a href="#">
                        <Button>Плодоовощная консервация</Button>
                    </a>
                </NavLink>
            </Product>
            <Product>
                <img src={saplings} alt='saplings'/>
                <NavLink to={'/saplings'}>
                    <a href="#">
                        <Button>Саженцы</Button>
                    </a>
                </NavLink>
            </Product>
            <Product>
                <img src={tea} alt='tea'/>
                <NavLink to={'/tea'}>
                    <a href="#">
                        <Button>Чаи Brusnikatea</Button>
                    </a>
                </NavLink>
            </Product>
        </Products>

        <H2>Структура хозяйства</H2>
        <Structures>
            <StructureLeft>
                <StructureTitle>
                    Лучшие саженцы в России
                </StructureTitle>
                <StructureText>
                    Все наши саженцы были приобретены в различных питомниках у профессио­налов и признанных во всем мире.
                </StructureText>
            </StructureLeft>
            <StructureRight>
                <StructureTitle>
                    Современная техника
                </StructureTitle>
                <StructureText>
                    Мы используем только экологическую технику с минимальным количеством выбросов вредных веществ.
                </StructureText>
            </StructureRight>
            <StructureLeft>
                <StructureTitle>
                    Опыт мировых лидеров
                </StructureTitle>
                <StructureText>
                    Мы работаем с различными консультантами по всему миру, вместе с которым мы довели продукт до очень высоко качества.
                </StructureText>
            </StructureLeft>
            <StructureRight>
                <StructureTitle>
                    Безопасные удобрения
                </StructureTitle>
                <StructureText>
                    Используются только сертифицированные удобрения, что гарантирует полную безопасность и натуральность наших яблок.
                </StructureText>
            </StructureRight>
            <StructureLeft>
                <StructureTitle>
                    Лучшая земля и климат
                </StructureTitle>
                <StructureText>
                Наша земля самая плодородная, а климат — подходящий для выращивания яблок. У нас есть все — для того, чтобы выращивать самые вкусные яблоки.
                </StructureText>
            </StructureLeft>
            <StructureRight>
                <StructureTitle>
                    Специализированное фруктохранилище
                </StructureTitle>
                <StructureText>
                    В таких условиях яблоки смогут без потери вкуса и качества пролежать больше года и попасть к Вам домой самыми сочными и вкусными.
                </StructureText>
            </StructureRight>
        </Structures>
    </Section>
  )
}

export default Home