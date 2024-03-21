import { useEffect } from 'react'
import styled from '@emotion/styled'

const JuicesList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 10% 10px 10%;
    gap: 25px;
    min-height: 85vh;
`;

const JuicesBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const JuicesText = styled.span`
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

const JuicesTitle = styled.span`
    color: #005826;
    font-family: "Cambria", Helvetica, Arial, sans-serif;
    letter-spacing: 0.5px;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
`;

function JuicesBottle() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <JuicesList>
        <H2>Соки в стекле</H2>
        <JuicesBlock>
            <JuicesTitle>
                Соки в стекле 1 л.
            </JuicesTitle>
            <JuicesText>
                Наши соки изготовлены из натуральных свежих фруктов, выращенных в наших садах, без добавления сахара.
                <li>
                    Сок яблочный прямого отжима.
                </li>
                <li>
                    Сок яблочный восстановленный с мякотью.
                </li>
                <li>
                    Сок яблочный восстановленный осветленный.
                </li>
                <li>
                    Сок яблочно-виноградный восстановленный осветленный.
                </li>
                <li>
                    Сок апельсиновый восстановленный.
                </li>
                <li>
                    Сок яблочно-вишневый восстановленный осветленный.
                </li>
                <li>
                    Сок яблочно-гранатовый восстановленный осветленный.
                </li>
                <li>
                    Сок яблочно-черносмородиновый восстановленный осветленный.
                </li>
                <li>
                    Сок яблочно-шиповниковый восстановленный осветленный.
                </li>
                <li>
                    Сок яблочно-черноплоднорябиновый восстановленный осветленный.
                </li>
                <li>
                    Сок мультифруктовый восстановленный.
                </li>
                <li>
                    Сок томатный восстановленный с солью.
                </li>
                <li>
                    Сок яблочно-тыквенный восстановленный с мякотью.
                </li>
                <li>
                    Напиток сокосодержащий "МОХИТО" с соком лайма и вкусом мяты.
                </li>
                <li>
                    Напиток сокосодержащий "ПЕРСИК".
                </li>
            </JuicesText>
        </JuicesBlock>
        <JuicesBlock>
            <JuicesTitle>
                Соки в стекле 3 л.
            </JuicesTitle>
            <JuicesText>
                Наши соки изготовлены из натуральных свежих фруктов, выращенных в наших садах, без добавления сахара.
                <li>
                    Сок яблочный прямого отжима.
                </li>
                <li>
                    Сок яблочный с мякотью прямого отжима.
                </li>
                <li>
                    Сок яблочный восстановленный осветленный (для питания детей дошкольного и школьного возраста старше 3 лет).
                </li>
                <li>
                    Сок яблочно восстановленный осветленный.
                </li>
                <li>
                    Сок яблочно-виноградный восстановленный осветленный (для питания детей дошкольного и школьного возраста старше 3 лет).
                </li>
                <li>
                    Сок яблочно-виноградный восстановленный осветленный.
                </li>
                <li>
                    Сок яблочно-тыквенный восстановленный с мякотью.
                </li>
                <li>
                    Сок яблочно-морковный восстановленный с мякотью.
                </li>
            </JuicesText>
        </JuicesBlock>
    </JuicesList>
  )
};

export default JuicesBottle