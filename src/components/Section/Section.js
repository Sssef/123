import React from 'react';
import ReactDOM from 'react-dom';
import './Section.sass';

class Section extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section  className="s-main">
                <div className="container">
                    <div className="s-prods">
                        <table className="s-prods-list">

                            <tbody>
                                <tr>
                                    <th>Артикул</th>
                                    <th>Дата поступления</th>
                                    <th>Категория</th>
                                    <th>Наименование</th>
                                    <th>Кол-во на складе</th>
                                </tr>

                                <tr className="list-item">
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>Мало</td>
                                </tr>
                                <tr className="list-item">
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>Много</td>
                                </tr>
                                <tr className="list-item">
                                    <td>11</td>
                                    <td>12</td>
                                    <td>13</td>
                                    <td>14</td>
                                    <td>Нет</td>
                                </tr>
                                <tr className="list-item">
                                    <td>16</td>
                                    <td>17</td>
                                    <td>18</td>
                                    <td>19</td>
                                    <td>Среднее кол-во</td>
                                </tr>

                            </tbody>

                        </table>
                    </div>

                    <div className="s-descr">
                        Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Текстов выйти инициал, семантика там продолжил заглавных рот которое жаренные наш. Образ, сих послушавшись ему по всей все толку там приставка буквоград имени это взобравшись речью своих. Напоивший все агенство диких от всех вопроса, скатился рот, составитель страна на берегу ручеек предложения точках единственное ты, вскоре путь своих всеми раз. Речью решила своего строчка однажды, но, первую вопроса вдали рукописи залетают необходимыми всемогущая коварный, за курсивных lorem напоивший собрал дал наш. Ему решила меня всеми обеспечивает над, курсивных взгляд однажды, не осталось великий если. Своего осталось заголовок вопрос рот толку текста правилами о, грамматики единственное власти сбить большой, страна на берегу щеке. Там переулка приставка пояс они маленький до, снова первую ее всеми, взобравшись щеке ipsum выйти журчит злых рыбного свою инициал напоивший парадигматическая раз своего. Проектах несколько текст сих до она дал языком буквоград ее продолжил страна за большой его буквенных пояс, подзаголовок алфавит запятой напоивший пустился. Коварный, ручеек пустился его рыбного единственное использовало, не, речью они от всех коварных повстречался. Жаренные большой это, рукопись, ipsum необходимыми речью великий, осталось единственное за, не страна заголовок ты заглавных переписали одна злых большого переписывается выйти над. Безорфографичный заглавных агенство текст языком на берегу от всех переулка назад речью лучше заголовок вопроса своего дорогу путь последний рукопись семантика он скатился это над однажды по всей себя пояс, языкового снова повстречался! Вскоре взобравшись правилами он меня ты снова семантика имеет до маленькая снова, коварный текста пояс если за на берегу подзаголовок взгляд запятой великий агенство, власти деревни безопасную осталось страну. Имени, вопрос.
                    </div>
                </div>
            </section>
        );
    }
}

export default Section;
