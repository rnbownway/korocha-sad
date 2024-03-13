import { useEffect } from 'react'
import styled from '@emotion/styled'
import topaz from '../assets/topaz.png'
import golden from '../assets/golden.png'
import rihard from '../assets/rihard.png'
import gala from '../assets/gala.png'
import lobo from '../assets/lobo.png'
import jonahgold from '../assets/jonahgold.png'
import bogatyr from '../assets/bogatyr.png'
import macintosh from '../assets/macintosh.png'
import april from '../assets/april.png'
import champion from '../assets/champion.png'
import spartan from '../assets/spartan.png'
import ligol from '../assets/ligol.png'

const AppleList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 10% 10px 10%;
    gap: 25px;
`;

const Apple = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const AppleTitle = styled.span`
    color: #005826;
    font-family: "Cambria", Helvetica, Arial, sans-serif;
    letter-spacing: 0.5px;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
`;

const AppleText = styled.span`
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

const Apples = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <AppleList>
            <H2>Яблоки</H2>
            <Apple>
                <AppleTitle>
                    Топаз
                </AppleTitle>
                <AppleText>
                    Сорт яблони Топаз был выведен Ярославом Тупи в Институте экспериментальной ботаники Академии наук Чехии путем скрещивания сортов Ванда (Vanda) и Рубин (Rubín) в 1984 г. в поселке Стржижовице (Střížovice) Пльзеньской области Чехии. В Европе сорт очень востребован, из яблок выжимают сок и перерабатывают их на пюре. Яблоня вырастает среднерослой, имеет густую, широкую и раскидистую крону. Крона бывает разнообразной формы: Округлая; В виде пирамиды, расширяющейся кверху. Ветви свисают вниз. Листья имеют насыщенный темно-изумрудный оттенок, снизу листья с сильным опушением. Они яйцевидно-удлиненные либо продолговатые, имеют заостренное или закругленное основание и ярко выраженный кончик. Цветки средние, белоснежные, в форме блюдец. Яблоки поспевают на кольчатках, копьецах, плодовых прутиках, но, в основном, на кольчатках. А на юге яблоки завязываются на приростах прошлого года. Яблоки крупные, их вес до 200 г, по форме округлые и чуть-чуть приплюснутые. Основной окрас яблок — зеленовато-кремовый, покровный окрас — оранжевато-красные пятна, покрывающие от 1/2 до 1/3 поверхности плодов (из-за окраски плодов иногда продается под именем «яблоня Ред топаз»). Мякоть кисло-сладкая, пряная, очень сочная, имеет сильный терпкий аромат, зерна средние по размерам. Кожица немного шероховатая, несколько маслянистая, средней твердости. Чашечка средней длины. Воронка оржавленная. Яблоки едят свежими и мочеными, варят из них компоты и варенья.
                </AppleText>
                <img src={topaz} alt='topaz' />
            </Apple>
            <Apple>
                <AppleTitle>
                    Голден Делишес
                </AppleTitle>
                <AppleText>
                    Нет точных данных о том, как получен этот сорт, считается, что он образовался при случайном опылении или в результате мутирования. Известно только, что родиной этой удивительной яблони является Южная Вирджиния. Садоводы отмечают явные достоинства этого сорта: Прекрасные вкусовые качества; Высокую урожайность; Товарный внешний вид; Отличную транспортабельность; Сохранение вкусовых качеств при длительной лежкости.
                </AppleText>
                <img src={golden} alt='golden' />
            </Apple>
            <Apple>
                <AppleTitle>
                    Рихард
                </AppleTitle>
                <AppleText>
                    Этот один из самых популярных и узнаваемых сортов яблонь был выведен в Германии в начале XIX века. Название имеет синонимы. Это декоративное растение отличается красивой шарообразной кроной, которая может достигать диаметра до 4 метров.
                    Высота среднерослой яблони обычно не превышает 3 метров. Листья темно-зеленые, небольшие (до 3 см), а цветки бело-розовые и имеют диаметр около 5 см.
                    Подходит для выращивания на приусадебном участке или в парках благодаря своей красоте и продуктивности. У этого сорта есть ещё один большой плюс – он самоплодный.
                    Среди главных преимуществ можно отметить следующие факторы.
                    Яблоки этого сорта имеют желтую окраску с легким румянцем на солнечной стороне. Форма плода – усеченный конус, есть небольшая ребристость. Вес одного яблока составляет около 300 граммов, размер крупный.
                    Кожица очень тонкая и бледно-желтая, иногда с легким румянцем на солнечном боку. Она слабодушистая и на ощупь гладкая и жирная. Подкожные точки мелкие, белые, вся поверхность плода густо усыпана ими.
                    Мякоть светло-кремового цвета, сочная и плотная. Вкус прекрасный: сладкий с небольшой кислинкой и пряным ароматом.
                </AppleText>
                <img src={rihard} alt='rihard' />
            </Apple>
            <Apple>
                <AppleTitle>
                    Гала
                </AppleTitle>
                <AppleText>
                    Среди популярных сортов яблонь Гала выделяется привлекательным внешним видом и хорошими вкусовыми качествами. Яблоки зеленовато-жёлтого основного окраса, покровный же окрас представляет собой полосато-размытый румянец оранжево-красных оттенков, размещённый по всему плоду. Фрукты округлые, в среднем имеют вес около 115-145 г. Кожица достаточно плотная, нежная и не слишком толстая. Мякоть сочная, умеренно-сладкого вкуса.
                </AppleText>
                <img src={gala} alt='gala' />
            </Apple>
            <Apple>
                <AppleTitle>
                    Лобо
                </AppleTitle>
                <AppleText>
                    Из достоинств сорта Лобо необходимо выделить следующее:
                    <li>ровные, с привлекательным товарным видом плоды;</li>
                    <li>яблоки долго могут лежать после сбора;</li>
                    <li>есть возможность транспортировки плодов;</li>
                    <li>плодоносят яблони Лобо регулярно.</li>
                </AppleText>
                <img src={lobo} alt='lobo' />
            </Apple>
            <Apple>
                <AppleTitle>
                    Джонаголд
                </AppleTitle>
                <AppleText>
                    Плоды можно есть свежими, готовить из них компоты, варенье и другие производные продукты. На яблоках сложно не заметить оранжево-красный румянец, который полосами расходится по зелено-желтой кожуре яблока. Плоды имеют округлую форму, их вес может варьироваться от 170 до 220 грамм.
                    У яблок средней толщины кожура, гладкая с глянцевым блеском. Мякоть отличается сочностью, высокой плотностью. При укусе она хрустит.
                </AppleText>
                <img src={jonahgold} alt='jonahgold' />
            </Apple>
            <Apple>
                <AppleTitle>
                    Богатырь
                </AppleTitle>
                <AppleText>
                    Среди достоинств сорта яблони Богатырь можно отметить следующие:
                    <li>раннее и стабильное плодоношение;</li>
                    <li>хорошую приспособляемость к зимним и возвратным заморозкам;</li>
                    <li>способность постепенно адаптироваться к местным условиям;</li>
                    <li>иммунитет к некоторым грибковым заболеваниям;</li>
                    <li>универсальность использования плодов;</li>
                    <li>большие урожаи яблок.</li>
                </AppleText>
                <img src={bogatyr} alt='bogatyr' />
            </Apple>
            <Apple>
                <AppleTitle>
                    Макинтош
                </AppleTitle>
                <AppleText>
                    Макинтош – это высокая среднеплодная яблоня, иногда достигающая 6-8 метров в высоту. Однако в среде плодоводов принято выращивать этот сорт как среднерослый тип, для чего занимаются формированием кроны и регулировкой длины побегов. Ветви дерева не превышают среднюю толщину, но большая часть из них тонкие, покрытые корой серого или буровато-серого оттенка. Овальная листва большого размера окрашена в желтовато-зеленые тона.
                    Плюсы Макинтоша:
                    <li>десертный вкус плодов;</li>
                    <li>отличная транспортабельность;</li>
                    <li>длительная жизнеспособность и неплохая зимостойкость.</li>
                </AppleText>
                <img src={macintosh} alt='macintosh' />
            </Apple>
            <Apple>
                <AppleTitle>
                    Апрельское
                </AppleTitle>
                <AppleText>
                    Высота ствола может составлять 4-5 м. Крона у яблони напоминает сужающуюся пирамиду. Густота для верхушки не свойственна. Апрельское отличается сильным, интенсивным ростом. Проблемы доставляет позднее образование плодов и сравнительно высокая заболеваемость.
                    Но это может легко компенсироваться:
                    <li>получением яблок в каждом сезоне;</li>
                    <li>сочностью и приличным вкусом каждого экземпляра;</li>
                    <li>значительным суммарным сбором.</li>
                </AppleText>
                <img src={april} alt='april' />
            </Apple>
            <Apple>
                <AppleTitle>
                    Чемпион
                </AppleTitle>
                <AppleText>
                    Для яблок характерна зеленовато-желтая расцветка с размытым румянцем. Фрукт имеет форму среднюю между обычным округлым и овальным яблочком. Масса его может составлять от 0,18 до 0,2 кг. Прочие важные обстоятельства:
                    <li>кожура плотна и суха, отличается эластичностью;</li>
                    <li>подкожные точки малочисленны, малозаметны;</li>
                    <li>приятный десертный вкус (сладкий с кисловатой ноткой);</li>
                    <li>гарантированная лежкость от 150 до 180 суток;</li>
                    <li>отсутствие риска осыпания при нормальном подходе.</li>
                </AppleText>
                <img src={champion} alt='champion' />
            </Apple>
            <Apple>
                <AppleTitle>
                    Спартан
                </AppleTitle>
                <AppleText>
                    Спартан - зимний сорт яблони. Дерево среднерослое, с округло-плоской кроной.Плоды плоско-округлой формы, массой 95 г, основная окраска зеленовато-желтая, покровная - в виде размытого интенсивного бордового румянца, покрывающего почти весь плод. Мякоть белая, нежная, скалывающаяся, приятного кисло-сладкого десертного вкуса. Урожайность высокая и ежегодная, с возрастом увеличивается. Плоды снимают в начале октября. В обычных условиях они хранятся 3-4 месяца, в холодильнике - до апреля.
                    Яблочки соответствуют таким характеристикам:
                    вес: 120-150 г;
                    верхушка плода с небольшой ребристостью, форма округлая или коническая. Чем плоды ближе расположены к центральному стволу, тем плодоножка меньшей длины;
                    основной цвет плотной кожицы – желтоватый, но его не видно из-за ярко-красного румянца;
                    имеется восковой налёт, придающий кожуре вишнёвый отлив;
                    хрустящая мякоть отличается сочностью и плотностью, она белого цвета и могут быть видны розоватые прожилки;
                    одна из важных характеристик яблони Спартан – это вкусовые качества. Вкус сладкий, иногда может присутствовать кислинка.
                    «Визитной карточкой» данной разновидности является уникальный аромат, представленный нотками дыни и лесной земляники.
                </AppleText>
                <img src={spartan} alt='spartan' />
            </Apple>
            <Apple>
                <AppleTitle>
                    Лигол 
                </AppleTitle>
                <AppleText>
                    Лигол – зимний сорт польской селекции. Этот сорт зародился в городе Скерневице в конце ХХ века в институте садоводства и цветоводства посредством скрещивания Линда и Голден Делишес.
                    ⦁	крупные и вкусные плоды;
                    ⦁	устойчивость к морозу, сухости и болезням;
                    ⦁	высокая урожайность и скороплодность;
                    ⦁	лежкость плодов
                    ⦁	
                    Плоды очень крупные, при правильном уходе их вес может достигать 400 граммов. Помимо размера, они также выделяются среди других сортов кисло-сладким вкусом, ароматностью. Мякоть у них кремовая, хрустящая, крупнозернистая и крайне сочная. Внешне яблоки имеют зелёную окраску с ярко-красным румянцем, обладают округло-конической формой, кожица твёрдая, плотная, средней толщины и без оржавленности.
                </AppleText>
                <img src={ligol} alt='ligol' />
            </Apple>
        </AppleList>
    )
};

export default Apples;