import React from 'react';

import { QuestionsWrappe } from './app.styles';

const Questions: React.FC = (): JSX.Element => {
  const questionsArray = (string: string) => {
    const regExp = /\d+\.\s/g;

    return string.split(regExp);
  };

  const rawQuestions = `
  1. Покоління обчислювальних машин за елементною базою. Їх основні характеристики.
  2. Електронні таблиці та їх призначення. Середовище табличного процесора та основні його
  елементи. Подання даних в електронних таблицях. Введення тексту, чисел і формул.
  Приклади.
  3. Інформація і повідомлення. Види інформації та її властивості. Інформація та шум, їх
  взаємоперетворення.
  4. Програмне забезпечення. Визначення. Види.
  5. Системи опрацювання графічних зображень. Створення і редагування графічних зображень за
  допомогою графічного редактора. Зміна параметрів графічних об'єктів у середовищі графічного
  редактора. Графічні формати Інтернету. Приклади.
  6. Структурна схема обчислювальної машини першого покоління. Призначення вузлів.
  7. Поняття про сучасні засоби зберігання й опрацювання повідомлень. Носії повідомлень.
  Форми і способи подання повідомлень. Кодування повідомлень, за допомогою яких
  передається інформація.
  8. Багаторівнева пам’ять обчислювальної системи. Її види. Упорядкувати по наступним
  умовам:
  • Збільшує ємність
  • Збільшує час доступу
  • Зменшує вартість зберігання одного біту інформації
  9. Структура інформаційної системи: апаратна та інформаційна складові, їх взаємодія.
  10. Дисплей. Основні характеристики. Види.
  11. Упорядкування даних в середовищі табличного процесора. Використання фільтрів. Приклади.
  12. Носії інформації для обчислювальних систем. Види. Особливості. Основні характеристики.
  13. Основні складові апаратної частини інформаційної системи, їх функціональне призначення..
  14. Пристрої для вводу інформації в обчислювальній системі. Види.
  15. Системи опрацювання текстів, їх функції. Середовище текстового процесора, його призначення
  та система вказівок. Відкриття та збереження документу. Введення тексту, його редагування і
  форматування. Перевірка правопису.
  16. Операційна система. Призначення.
  17. Операційна система, її функції. Інтерфейс операційної системи та правила роботи з ним. Основні
  об'єкти, з якими працює операційна система. Типи вікон і правила роботи з ними. Піктограми, їх
  призначення.
  18. Поняття генерації, інсталяції, ініціалізації операційної системи.
  19. Робота з графічними об'єктами в середовищі текстового процесора. Вкорінення об'єктів
  з інших додатків. Приклади. Операційна система. Призначення.
  20. Завантаження операційної системи. Етапи. Поняття ініціалізації.
  21. Поняття про бази даних та їх види: фактографічні та документальні. Інформаційно-пошукові
  системи та системи управління базами даних (СУБД), їх призначення та функції.22. Принцип розташування операційної системи в оперативній пам’яті.
  23. Основні об'єкти, з якими працює операційна система, та вказівки для роботи з ними.
  Стандартні імена зовнішніх запам'ятовуючих пристроїв комп'ютера. Поняття файла, його
  імені та розширення, каталогу (папки), шляху до файла. Особливості виконуваних файлів.
  Приклади.
  24. Системи числення, що використовуються в обчислювальних системах. Види. Приклади.
  Арифметичні операції в двійковій системі.
  • Скласти два числа (10110011101) + (00011101011)
  • Відняти два числа (1011011001)- (0101101110)
  25. Основні поняття бази даних. Типи даних, що зберігаються в базі даних. Проектування бази
  даних і створення структури бази даних. Основні команди для роботи з таблицями.
  26. Призначення віртуальної пам'яті в обчислювальних системах. Максимальний розмір
  програми при віртуальній організації пам'яті. Її розподілення між користувачем та ОС.
  27. Поняття про стиснення даних. Призначення та основні функції програм-архіваторів. Приклади.
  28. Файл. Файлові системи з погляду користувача. Призначення.
  29. Структура програмної складової інформаційної системи. Системне і прикладне програмне
  забезпечення.
  30. Файлова система (FAT). Особливості роботи. Переваги та недоліки.
  31. Опрацювання даних за допомогою табличного процесора: редагування, копіювання,
  форматування, переміщення, захист від змін, зв'язування. Приклади.
  32. Способи пошуку файлів в різних файлових системах .
  33. Поняття про мову програмування. Класифікація мов програмування. Основні поняття мови:
  алфавіт, синтаксис і семантика. Основні елементи мови програмування: символи, слова,
  вирази і команди.
  34. Способи пошуку файлів в різних файлових системах .
  35. Об'єкти в середовищі текстового процесора (символ, абзац, * документ) і правила роботи з
  ними. Робота з фрагментами тексту:, виділення, перенесення, копіювання, форматування, Пошук,
  заміна. Використання буфера обміну. Приклади.
  36. Дескриптор файлу. Призначення. Основні поля.
  37. Комп'ютерні мережі. Види, основні характеристики і принципи використання комп'ютерних
  мереж. Сервер та робоча станція. Технологія клієнт-сервер.
  38. Пристрої виведення інформації. Типи.
  39. Виконання обчислень у середовищі табличного процесора. Використання математичних
  функцій і операцій для опрацювання даних, поданих в електронній таблиці. Приклади.
  40. Форматування диска. Призначення. Збереження інформації про формат .
  41. Електронна пошта та пришити її функціонування. Поштові стандарти. Електронна адреса.
  Основні можливості використання поштових програм. Правила й етикет електронного
  листування.
  42. Покоління обчислювальних машин по методу обробки інформації.
  43. Правила впорядкування та пошуку даних у базі даних. Приклади.
  44. Розподілені системи обробки інформації. Визначення. Призначення.45. Апаратні, програмні та інформаційні ресурси сучасних мереж. Програмне забезпечення роботи
  в глобальній мережі Інтернет. Основні послуги глобальної мережі Інтернет.
  46. IP адреса. Призначення. Дати двійкове представлення IP адреси 10.18.52.1
  47. Ділова графіка. Побудова діаграм і графіків на основі табличних даних у середовищі табличного
  процесора. Приклади.
  48. Мета обчислення (Суперобчислення)
  49. Інформаційний зв'язок у мережі Інтернет. Ідентифікація комп'ютерів у мережі. Адресація в
  мережі Інтернет. Провайдери. Способи під'єднання комп'ютерів до глобальної мережі.
  50. Математичне забезпечення обчислювальних систем.
  51. Робота з таблицями в середовищі текстового процесора.Автоматичне форматування
  таблиці. Створення нового стилютаблиці. Таблиця і текст, їх взаємне перетворення.
  Приклади.
  52. Локальна мережа. Визначення. Призначення.
  53. Поняття про комп'ютерні віруси та їх класифікація. Антивірусні програми та їх застосування.
  Профілактика зараження комп'ютерними вірусами.
  54. Клієнт-серверна система. Призначення. Поняття клієнту та серверу.
  55. Вкорінені та зв'язані об'єкти слайдів комп'ютерної презентації. Способи демонстрації слайдів.
  Приклади.
  56. Застосування GRID систем. Недоліки.
  57. Етапи розв'язування задачі з використанням комп'ютера. Поняття інформаційної моделі
  задачі.
  58. Текстовий редактор WORD. Призначення.
  59. Виконання обчислень у середовищі табличного процесора. Використання логічних
  функцій та операцій для опрацювання даних, поданих у таблиці. Приклади.
  60. Використання різних форматів зберігання даних. Вказати який формат для зберігання яких
  даних використовується. DOC, JPG, PDF, HTML, AVI, PAS.
  61. Етапи розвитку обчислювальної техніки та галузі застосування комп'ютерів.
  62. Багаторівневі системи програмування в сучасних обчислювальних системах. Вказати рівні
  програмування.
  63. Використання різних типів об'єктів (текстових, графічних, числових, звукових, відео) для
  створення презентації. Приклади.
  64. Транслятор. Призначення. Відмінність компілятора від інтерпретатора. Переваги, недоліки
  65. Поняття програми. Поняття про системи програмування. Поняття про інтерпретацію та
  компіляцію програми.
  66. Редактор зв’язків. Призначення. Вхідна і вихідна інформація.
  67. Створення запитів, форм і формування звітів при роботі з базами даних. Приклади.
  68. Види модулів. Програми, що беруть участь в перетворенні модулів
  69. Поняття про растрову та векторну графіку. Системи опрацювання графічної інформації.
  Типи графічних файлів.
  70. Текстовий редактор WORD. Призначення.71. Поняття гіпертексту. Засоби створення та перегляду гіпертекстових документів.
  Особливості мови розмітки НТМL. Тегова модель. Класифікація тегів. Основні теги мови
  НТМL для створення гіпертекстового документа. Приклади.
  72. База даних. Види.
  73. Системи опрацьовування текстів, їх класифікація та функції. Основні формати текстових
  файлів і їх перетворення.
  74. Математичне забезпечення обчислювальних систем.
  75. Організація пошуку інформації в глобальній мережі. Способи збереження веб-сторінок та їх
  частин. Особливості збереження зображень і звуку. Приклади.
  76. Клієнт-серверна система. Призначення. Поняття клієнту та серверу.
  77. Поняття алгоритму. Властивості алгоритмів. Базові структури алгоритмів та їх основні
  властивості.
  78. Розподілені системи обробки інформації. Визначення. Призначення.
  79. Основні команди для роботи з таблицями в реляційних базах даних: створення структури
  записів, заповнення даними, редагування даних. Приклади.
  80. Мета обчислення (Суперобчислення`;

  return (
    <QuestionsWrappe>
      {questionsArray(rawQuestions)
        .filter(q => q.trim() !== '')
        .map((question, i) => (
          <a href={`#${i + 1}`.toString()} key={i}>
            <span>{i + 1}.</span> {question}
          </a>
        ))}
    </QuestionsWrappe>
  );
};

export default Questions;
