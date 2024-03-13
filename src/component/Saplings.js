import { useEffect } from 'react'
import styled from '@emotion/styled'

const SaplingList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 10% 10px 10%;
    gap: 25px;
`;

const Sapling = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const SaplingTitle = styled.span`
    color: #005826;
    font-family: "Cambria", Helvetica, Arial, sans-serif;
    letter-spacing: 0.5px;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
`;

const SaplingText = styled.span`
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

const Saplings = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <SaplingList>
            <H2>Саженцы</H2>
            <Sapling>
                <SaplingTitle>
                    Белый налив
                </SaplingTitle>
                <SaplingText>
                    Старинный сорт, который и поныне остаётся популярным. Садоводы ценят его за ранние наливные яблоки, белые и нежные, вкусные и красивые.
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Целеста
                </SaplingTitle>
                <SaplingText>
                    Является позднелетним сортом яблонь, гибридный вид, неприхотливый в уходе и имеющий высокие вкусовые характеристики плодов.
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Орлик
                </SaplingTitle>
                <SaplingText>
                    Это сорт яблони, что созревают к зиме. Размер дерева средний. Крона достаточно компактная, имеет закругленную форму.
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Эрли Женева
                </SaplingTitle>
                <SaplingText>
                    Очень интересный сорт американской селекции, летний вид среднерослых яблонь имеет высокую урожайность и хорошие вкусовые показатели
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Дарья
                </SaplingTitle>
                <SaplingText>
                    Один из самых раннеспелых летних сортов. Среднего роста дерево, выдерживает умеренные морозы, устойчиво к заболеваниям
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Лобо
                </SaplingTitle>
                <SaplingText>
                    Один из самых раннеспелых летних сортов. Среднего роста дерево, выдерживает умеренные морозы, устойчиво к заболеваниям
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Гала
                </SaplingTitle>
                <SaplingText>
                    Осенний сорт. Деревья средней высоты с широкой овальной кроной сформированной не густыми расходящимися от...
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Антоновка обыкновенная
                </SaplingTitle>
                <SaplingText>
                    Является одним из самых популярных сортов в России. Она насчитывает не один подвид, ценится качеством плодов
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                Лигол
                </SaplingTitle>
                <SaplingText>
                    Зимний сорт яблони, полученный в результате скрещивания сортов Линда и Голден Делишес в польском Институте
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Беркутовское
                </SaplingTitle>
                <SaplingText>
                    Яблоня с плодами зимнего срока созревания, выведенная в 1970-е годы на Саратовской опытной станции, через опыление...
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Северный синап
                </SaplingTitle>
                <SaplingText>
                    Позднезимний сорт яблони с длительно хранящимися плодами. Получен из семян сорта Кандиль-китайка путем свободного...
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Симиренко
                </SaplingTitle>
                <SaplingText>
                    Старинный русский сорт, известный как «Ренет Симиренко», по праву считается лучшим сортом среди зеленых сортов яблоками.
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Джонаголд
                </SaplingTitle>
                <SaplingText>
                    Одним из самых распространённых сортов яблонь, который выращивается в крупных и мелких масштабах на территории с умеренным...
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Альва
                </SaplingTitle>
                <SaplingText>
                    Сорт яблок зимнего срока созревания польской селекции. Получен сорт как сеянец от свободного опыления сорта Мекаун.
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Хоней крисп
                </SaplingTitle>
                <SaplingText>
                    Относится к позднеспелым, зимним сортам высокоурожайных яблок. Это очень популярный сорт зимней яблони в США, Канаде...
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Лукашовка
                </SaplingTitle>
                <SaplingText>
                    Этот сорт груш был назван в честь его селекционера, правильно, Лукашова, которая считается самой морозоустойчивой на Земле.
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Любимица Клапа
                </SaplingTitle>
                <SaplingText>
                    Сорт груши Любимица Клаппа отличается особенным вкусом и ароматом. Садоводы ценят этот вид груш за неприхотливость в уходе и выращивании.
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Сонейка (желтая)
                </SaplingTitle>
                <SaplingText>
                    Ранний сорт, характеризующийся самоплодностью. Дерево невысокого роста дает богатый урожай при условии правильного ухода на первых этапах выращивания.
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Черная крупная
                </SaplingTitle>
                <SaplingText>
                    Сорт вишни Черная Крупная отличается хорошей урожайностью и скороплодностью. С одного молодого 6-8-летнего дерева можно собрать около 15-25 кг ягод.
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Валерий Чкалов
                </SaplingTitle>
                <SaplingText>
                    Многие садоводы отдают предпочтение старому проверенному сорту с крупными сладкими плодами тёмно-красного цвета — Валерий Чкалов.
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Ленинградская черешня
                </SaplingTitle>
                <SaplingText>
                    Надежный сорт, приносящий урожай даже в суровых условиях. При выполнении правил посадки и ухода дерево долго и обильно плодоносит.
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Гринсборо
                </SaplingTitle>
                <SaplingText>
                    Десертный сорт, известный более ста лет. Нежные, крупные плоды одними из первых поспевают в южных областях с жарким климатом.
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Донецкий Желтый
                </SaplingTitle>
                <SaplingText>
                    Сорт с высокой зимостойкостью, с хорошей восстановительной способностью. В урожайные годы с деревьев снимают до 50-60 кг плодов.
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Чемпион Севера
                </SaplingTitle>
                <SaplingText>
                    Привлекает садоводов неприхотливостью в уходе, сильными ветвями, негустой кроной. Специалисты рекомендуют выращивать его на
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Жигулевский Сувенир
                </SaplingTitle>
                <SaplingText>
                    Сорт раннеспелый, в фазу плодоношения дерево вступает на 4-5 год. Плоды обладают хорошими товарными и транспортабельными свойствами.
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Аленушка
                </SaplingTitle>
                <SaplingText>
                    Довольно новый, но уже пользующийся популярностью раннеспелый сорт Сливы китайской (Prunus salicina). Выведен во Всероссийском НИИ
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Президент
                </SaplingTitle>
                <SaplingText>
                    Старый английский сорт, сливы Деревья среднерослые (высотой до 3 м), быстрорастущие, с овально-округлой кроной средней густоты.
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Стенлей
                </SaplingTitle>
                <SaplingText>
                    Сорт Северо-Кавказского региона. Отличается высокой выживаемостью в местах с переменчивыми погодными явлениями, устойчива и к...
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Саженцы розы чайно-гибридной
                </SaplingTitle>
                <SaplingText>
                    Чайно-гибридные розы отличаются изящным, классическим сложением цветков. Окраска роз исключительно разнообразная от белой, до почти черной, с множеством оттенков.
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Саженцы розы Спрей
                </SaplingTitle>
                <SaplingText>
                    Это относительно новая группа роз. Появилась данная группа только во второй половине 20-го века и уже успела полюбиться цветоводам со всего мира.
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Саженцы розы Парковые
                </SaplingTitle>
                <SaplingText>
                    Отличный вариант для декорирования сада в суровых российских условиях. Ведь в нашем климате так трудно вырастить многие сорта красивых растений.
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Саженцы розы Вьюшки
                </SaplingTitle>
                <SaplingText>
                    Роза вьюшка, сорта «Дон Жуан» не требует особого ухода. Зато каждый год крупные кусты радуют своим цветением бутонов длиной 12 см с бордовым оттенком
                    <br/>
                    Возраст: 2-х летки
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                    Клубника
                </SaplingTitle>
                <SaplingText>
                    Саженцы клубники высылаем с закрытой корневой системой (каждый саженец прирощен к горшку).
                    <br/>
                    Стоимость: 15 руб. за шт. при покупки единовременно от 500 шт.
                </SaplingText>
            </Sapling>
            <Sapling>
                <SaplingTitle>
                Саженцы ели
                </SaplingTitle>
                <SaplingText>
                    Предлагаем для благоустройства и озеленения территории и для ландшафтного дизайна.
                    <br/>
                    Стоимость: от 500 руб. до 2000 руб.
                    <br/>
                    Высота: от 0,5 м, 1 м - 1,5 м и выше
                </SaplingText>
            </Sapling>
        </SaplingList>
    )
};

export default Saplings;