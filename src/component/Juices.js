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

function Juices() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <JuicesList>
        <H2>Соки в стекле</H2>
        <JuicesBlock>
            <JuicesTitle>
                Сок в картонной упаковке "Bag-in-Box" 3л.
            </JuicesTitle>
            <JuicesText>
                Яблоки, которые мы используем в производстве сока растут в наших садах. После сбора яблоки промывают водой, затем они попадают в пресс. После чего отжатый сок подвергают пастеризации до 80 градусов и разливают в пакеты.
                <br/>
                Предлагаем сок яблочный неосветленный прямого отжима. Благодаря технологии прямого отжима и бережной пастеризации сок максимально сохраняет вкус и полезные свойства свежих яблок даже через 14 дней после вскрытия краника.
                <br/>
                Это возможно благодаря инновационной упаковке BAG-in-BOX. Она позволяет защитить продукт от проникновения кислорода, бактерий, запахов и света, и дает возможность длительного хранения без добавления консервантов.
            </JuicesText>
        </JuicesBlock>
    </JuicesList>
  )
};

export default Juices