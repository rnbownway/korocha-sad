import { useEffect } from 'react'
import styled from '@emotion/styled'

const ConservantList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 10% 10px 10%;
    gap: 25px;
`;

const Conservant = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ConservantTitle = styled.span`
    color: #005826;
    font-family: "Cambria", Helvetica, Arial, sans-serif;
    letter-spacing: 0.5px;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
`;

const ConservantText = styled.span`
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

const Conservants = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <ConservantList>
            <H2>Плодоовощная консервация</H2>
            <Conservant>
                <ConservantTitle>
                    Повидло Яблочное
                </ConservantTitle>
                <ConservantText>
                    Заверните в блинчики наше повидло, поджарьте до румяной корочки и удивите своих родных на завтрак или на ужин!<br/>
                    ГОСТ 32099-2013<br/>
                    Состав:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Пюре яблочное</li>
                        <li>Сахар</li>
                        <li>Регулятор кислотности - лимонная кислота</li>
                    </ol>
                    
                    Пищевая ценность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Углеводы - 12 г.</li>
                    </ol>
                    Калорийность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>45/200 - ккал/кДж.</li>
                    </ol>
                    Упаковка: Стекл. банка Твист,<br/>
                    610 гр. / 320 гр.<br/>
                    Срок годности 12 месяцев.<br/>

                    Без Консервантов<br/>

                    Без Красителей
                </ConservantText>
            </Conservant>
            <Conservant>
                <ConservantTitle>
                    Повидло яблочно-алычевое
                </ConservantTitle>
                <ConservantText>
                    Заверните в блинчики наше повидло, поджарьте до румяной корочки и удивите своих родных на завтрак или на ужин!<br/>
                    ГОСТ 32099-2013<br/>
                    Состав:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Пюре яблочное</li>
                        <li>Пюре алычевое</li>
                        <li>Сахар</li>
                        <li>Регулятор кислотности - лимонная кислота</li>
                    </ol>
                    
                    Пищевая ценность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Углеводы - 12 г.</li>
                    </ol>
                    Калорийность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>45/200 - ккал/кДж.</li>
                    </ol>
                    Упаковка: Стекл. банка Твист, 610 гр.<br/>
                    Срок годности 12 месяцев.<br/>

                    Без Консервантов<br/>

                    Без Красителей
                </ConservantText>
            </Conservant>
            <Conservant>
                <ConservantTitle>
                    Повидло яблочно-абрикосовое
                </ConservantTitle>
                <ConservantText>
                    Заверните в блинчики наше повидло, поджарьте до румяной корочки и удивите своих родных на завтрак или на ужин!<br/>
                    ГОСТ 32099-2013<br/>
                    Состав:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Пюре яблочное</li>
                        <li>Пюре абрикосовое</li>
                        <li>Сахар</li>
                        <li>Регулятор кислотности - лимонная кислота</li>
                    </ol>
                    
                    Пищевая ценность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Углеводы - 12 г.</li>
                    </ol>
                    Калорийность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>45/200 - ккал/кДж.</li>
                    </ol>
                    Упаковка: Стекл. банка Твист, 610 гр.<br/>
                    Срок годности 12 месяцев.<br/>

                    Без Консервантов<br/>

                    Без Красителей
                </ConservantText>
            </Conservant>
            <Conservant>
                <ConservantTitle>
                    Повидло яблочно-клюквенное
                </ConservantTitle>
                <ConservantText>
                    Заверните в блинчики наше повидло, поджарьте до румяной корочки и удивите своих родных на завтрак или на ужин!<br/>
                    ГОСТ 32099-2013<br/>
                    Состав:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Пюре яблочное</li>
                        <li>Пюре клюквенное</li>
                        <li>Сахар</li>
                        <li>Регулятор кислотности - лимонная кислота</li>
                    </ol>
                    
                    Пищевая ценность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Углеводы - 12 г.</li>
                    </ol>
                    Калорийность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>45/200 - ккал/кДж.</li>
                    </ol>
                    Упаковка: Стекл. банка Твист, 610 гр.<br/>
                    Срок годности 12 месяцев.<br/>

                    Без Консервантов<br/>

                    Без Красителей
                </ConservantText>
            </Conservant>
            <Conservant>
                <ConservantTitle>
                    Повидло яблочно-малиновое
                </ConservantTitle>
                <ConservantText>
                    Заверните в блинчики наше повидло, поджарьте до румяной корочки и удивите своих родных на завтрак или на ужин!<br/>
                    ГОСТ 32099-2013<br/>
                    Состав:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Пюре яблочное</li>
                        <li>Пюре малиновое</li>
                        <li>Сахар</li>
                        <li>Регулятор кислотности - лимонная кислота</li>
                    </ol>
                    
                    Пищевая ценность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Углеводы - 12 г.</li>
                    </ol>
                    Калорийность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>45/200 - ккал/кДж.</li>
                    </ol>
                    Упаковка: Стекл. банка Твист, 610 гр.<br/>
                    Срок годности 12 месяцев.<br/>

                    Без Консервантов<br/>

                    Без Красителей
                </ConservantText>
            </Conservant>
            <Conservant>
                <ConservantTitle>
                    Повидло яблочно-вишневое
                </ConservantTitle>
                <ConservantText>
                    Заверните в блинчики наше повидло, поджарьте до румяной корочки и удивите своих родных на завтрак или на ужин!<br/>
                    ГОСТ 32099-2013<br/>
                    Состав:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Пюре яблочное</li>
                        <li>Пюре вишневое</li>
                        <li>Сахар</li>
                        <li>Регулятор кислотности - лимонная кислота</li>
                    </ol>
                    
                    Пищевая ценность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Углеводы - 12 г.</li>
                    </ol>
                    Калорийность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>45/200 - ккал/кДж.</li>
                    </ol>
                    Упаковка: Стекл. банка Твист, 610 гр.<br/>
                    Срок годности 12 месяцев.<br/>

                    Без Консервантов<br/>

                    Без Красителей
                </ConservantText>
            </Conservant>
            <Conservant>
                <ConservantTitle>
                    Соус томатный Краснодарский
                </ConservantTitle>
                <ConservantText>
                    Отличное дополнение к шашлыку или в Ваши мясные, овощные блюда. Прекрасный вкус и высокое качество этого продукта не оставят...<br/>
                    ГОСТ 17471-2013<br/>
                    Состав:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Паста томатная, вода, пюре яблочное, сахар, гвоздика, корица, перец душистый молотый, мускатный орех, перец черный молотый, чеснок свежий</li>
                        <li>Регулятор кислотности - лимонная кислота</li>
                    </ol>
                    
                    Пищевая ценность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Углеводы - 12 г.</li>
                    </ol>
                    Калорийность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>45/200 - ккал/кДж.</li>
                    </ol>
                    Упаковка: Стекл. банка Твист, 500 гр.<br/>
                    Срок годности 12 месяцев.<br/>

                    Без Консервантов<br/>

                    Без Красителей
                </ConservantText>
            </Conservant>
            <Conservant>
                <ConservantTitle>
                    Икра из кабачков обжаренных
                </ConservantTitle>
                <ConservantText>
                    Именно обжаренных! Этот рецепт мы отобрали в связи с лучшими вкусовыми качествами. Побалуйте себя кабачковой икрой...<br/>
                    ГОСТ Р 51926-2002<br/>
                    Состав:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Кабачки обжаренные, томатная паста 30%, морковь обжаренная, лук обжаренный, масло растительное рафинированное</li>
                        <li>Соль поваренная пищевая высший сорт, белые коренья обжаренные, сахар-песок, специи, приправы, чеснок свежий</li>
                    </ol>
                    
                    Пищевая ценность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Углеводы - 12 г.</li>
                    </ol>
                    Калорийность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>45/200 - ккал/кДж.</li>
                    </ol>
                    Упаковка: Стекл. банка Твист, 480/250 гр.<br/>
                    Срок годности 12 месяцев.<br/>

                    Без Консервантов<br/>

                    Без Красителей
                </ConservantText>
            </Conservant>
            <Conservant>
                <ConservantTitle>
                    Яблоки, протёртые с сахаром
                </ConservantTitle>
                <ConservantText>
                    Это нежнейший воздушный продукт, вкус которого мы знаем с самого раннего детства и до глубокой старости. Его кушайте на здоровье...<br/>
                    ГОСТ 32099-2013<br/>
                    Состав:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Яблоки свежие</li>
                        <li>Сахар</li>
                        <li>Регулятор кислотности - лимонная кислота</li>
                    </ol>
                    
                    Пищевая ценность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Углеводы - 12 г.</li>
                    </ol>
                    Калорийность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>45/200 - ккал/кДж.</li>
                    </ol>
                    Упаковка: Стекл. банка СКО, 500 гр. / 250 гр<br/>
                    Срок годности 12 месяцев.<br/>

                    Без Консервантов<br/>

                    Без Красителей
                </ConservantText>
            </Conservant>
            <Conservant>
                <ConservantTitle>
                    Паста томатная 25%
                </ConservantTitle>
                <ConservantText>
                    Отличное дополнение к шашлыку или в Ваши мясные, овощные блюда. Прекрасный вкус и высокое качество этого продукта не оставят...<br/>
                    ГОСТ Р 54678-2011<br/>
                    Состав:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Паста томатная</li>
                    </ol>
                    
                    Пищевая ценность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Углеводы - 12 г.</li>
                    </ol>
                    Калорийность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>45/200 - ккал/кДж.</li>
                    </ol>
                    Упаковка: Стекл. банка СКО, 500 гр. / 250 гр<br/>
                    Срок годности 12 месяцев.<br/>

                    Без Консервантов<br/>

                    Без Красителей
                </ConservantText>
            </Conservant>
            <Conservant>
                <ConservantTitle>
                    Соус томатный Острый
                </ConservantTitle>
                <ConservantText>
                    Отличное дополнение к шашлыку или в Ваши мясные, овощные блюда. Прекрасный вкус и высокое качество этого продукта не оставят...<br/>
                    ГОСТ 17471-2013<br/>
                    Состав:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Паста томатная, вода, пюре яблочное, сахар, соль</li>
                        <li>Регулятор кислотности - уксусная кислота</li>
                        <li>Гвоздика, корица, перец душистый молотый, мускатный орех, перец черный молотый, перец красный молотый, чеснок свежий.</li>
                    </ol>
                    
                    Пищевая ценность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>Углеводы - 12 г.</li>
                    </ol>
                    Калорийность в 100 г. продукта:
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li>45/200 - ккал/кДж.</li>
                    </ol>
                    Упаковка: Стекл. банка Твист, 500 гр.<br/>
                    Срок годности 12 месяцев.<br/>

                    Без Консервантов<br/>

                    Без Красителей
                </ConservantText>
            </Conservant>
        </ConservantList>
    )
};

export default Conservants;