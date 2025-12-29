import { FileText, Book, ShoppingCart, ClipboardList, CreditCard, Truck, ShieldCheck, Scale, Info, RefreshCw, Calendar } from 'lucide-react';
import './OfferPage.css';

const SECTIONS = [
    { id: 'general', title: 'Загальні положення', icon: FileText },
    { id: 'definitions', title: 'Поняття та визначення', icon: Book },
    { id: 'subject', title: 'Предмет Договору', icon: ShoppingCart },
    { id: 'ordering', title: 'Порядок оформлення замовлення', icon: ClipboardList },
    { id: 'payment', title: 'Порядок оплати замовлення', icon: CreditCard },
    { id: 'delivery', title: 'Умови доставки замовлення', icon: Truck },
    { id: 'rights', title: 'Права та обов\'язки сторін', icon: ShieldCheck },
    { id: 'responsibility', title: 'Відповідальність сторін', icon: Scale },
    { id: 'other', title: 'Інші умови', icon: Info },
    { id: 'return', title: 'Порядок повернення товару', icon: RefreshCw },
    { id: 'term', title: 'Строк дії договору', icon: Calendar },
];

export const OfferPage = () => {
    return (
        <div className="offer-page">
            <div className="offer-page__header">
                <h1 className="offer-page__title">Договір публічної оферти</h1>
                <p className="offer-page__subtitle">Останнє оновлення: 29 грудня 2025</p>
            </div>

            <div className="offer-page__layout">
                <aside className="offer-page__sidebar">
                    <nav className="offer-page__toc">
                        <ul className="offer-page__toc-list">
                            {SECTIONS.map((section) => (
                                <li key={section.id}>
                                    <a href={`#${section.id}`} className="offer-page__toc-link">
                                        <section.icon size={16} />
                                        <span>{section.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                <main className="offer-page__content">
                    <section className="offer-page__section" id="general">
                        <h2 className="offer-page__section-title">
                            <FileText size={24} className="offer-page__section-icon" />
                            Загальні положення
                        </h2>
                        <p>
                            1.1. Дана оферта є офіційною пропозицією ФОП Гліба Вячеслава Сергійовича, надалі за текстом — «Продавець», укласти Договір купівлі-продажу товарів дистанційним способом, тобто через Інтернет-магазин, надалі за текстом — «Договір», і розміщує Публічну оферту (пропозицію) на офіційному інтернет-сайті Продавця «https://prake.com.ua» (надалі - «Інтернет-сайт»).
                        </p>
                        <p>
                            1.2. Моментом повного і безумовного прийняття Покупцем пропозиції Продавця (акцептом) укласти електронний договір купівлі-продажу товарів вважається факт оплати Покупцем замовлення на умовах цього Договору, у строки та за цінами, вказаними на Інтернет-сайті Продавця.
                        </p>
                    </section>

                    <section className="offer-page__section" id="definitions">
                        <h2 className="offer-page__section-title">
                            <Book size={24} className="offer-page__section-icon" />
                            Поняття та визначення
                        </h2>
                        <p>
                            2.1. У цій оферті, якщо контекст не вимагає іншого, наведені нижче терміни мають таке значення:
                        </p>
                        <ul className="offer-page__list">
                            <li><strong>«товар»</strong> - моделі, аксесуари, комплектуючі та супровідні предмети;</li>
                            <li><strong>«Інтернет-магазин»</strong> - відповідно до Закону України «Про електронну комерцію», засіб для представлення або реалізації товару, роботи чи послуги шляхом вчинення електронного правочину.</li>
                            <li><strong>«Продавець»</strong> - компанія, що реалізує товари, представлені на Інтернет-сайті.</li>
                            <li><strong>«Покупець»</strong> - фізична особа, яка уклала з Продавцем Договір на умовах, викладених нижче.</li>
                            <li><strong>«Замовлення»</strong> - вибір окремих позицій із переліку товарів, зазначених Покупцем при розміщенні замовлення та здійсненні оплати.</li>
                        </ul>
                    </section>

                    <section className="offer-page__section" id="subject">
                        <h2 className="offer-page__section-title">
                            <ShoppingCart size={24} className="offer-page__section-icon" />
                            Предмет Договору
                        </h2>
                        <p>
                            3.1. Продавець зобов'язується передати у власність Покупця Товар, а Покупець зобов'язується оплатити і прийняти Товар на умовах даного Договору.
                        </p>
                        <p>
                            Цей Договір регулює купівлю-продаж товарів в Інтернет-магазині, зокрема:
                        </p>
                        <ul className="offer-page__list">
                            <li>добровільний вибір Покупцем товарів в Інтернет-магазині;</li>
                            <li>самостійне оформлення Покупцем замовлення в Інтернет-магазині;</li>
                            <li>оплата Покупцем замовлення, оформленого в Інтернет-магазині;</li>
                            <li>обробка та доставка замовлення Покупцеві у власність на умовах цього Договору.</li>
                        </ul>
                    </section>

                    <section className="offer-page__section" id="ordering">
                        <h2 className="offer-page__section-title">
                            <ClipboardList size={24} className="offer-page__section-icon" />
                            Порядок оформлення замовлення
                        </h2>
                        <p>
                            4.1. Покупець має право оформити замовлення на будь-який товар, представлений на Сайті Інтернет-магазину і наявний у наявності.
                        </p>
                        <p>
                            4.2. Кожна позиція може быть представлена в замовленні в будь-якій кількості.
                        </p>
                        <p>
                            4.3. При відсутності товару на складі, Менеджер компанії зобов'язаний повідомити Покупця (по телефону або через електронну пошту).
                        </p>
                        <p>
                            4.4. При відсутності товару Покупець має право замінити його товаром аналогічної моделі, відмовитися від даного товару, анулювати замовлення.
                        </p>
                    </section>

                    <section className="offer-page__section" id="payment">
                        <h2 className="offer-page__section-title">
                            <CreditCard size={24} className="offer-page__section-icon" />
                            Порядок оплати замовлення
                        </h2>
                        <p>
                            5.1. Оплата замовлення здійснюється за допомогою сервісу — Online платіж Liqpay, на рахунок у "Приватбанку" або за фактом отримання товару у відділенні поштового оператора "Новая пошта" за готівковий розрахунок у гривнях.
                        </p>
                        <p>
                            5.2. Оплата за допомогою сервісу Online платежів Liqpay (карткою, Приват24, термінал самообслуговування) або на рахунок у "Приватбанку" має бути здійснена протягом трьох календарних днів з дня оформлення Замовлення. При ненадходженні грошових коштів Інтернет-магазин залишає за собою право анулювати замовлення.
                        </p>
                        <p>
                            5.3 Оплата за допомогою післяплати має надійти протягом п'яти календарних днів з дня прибуття Замовлення до відділення транспортної компанії. В іншому випадку Замовлення автоматично повертається Продавцю.
                        </p>
                    </section>

                    <section className="offer-page__section" id="delivery">
                        <h2 className="offer-page__section-title">
                            <Truck size={24} className="offer-page__section-icon" />
                            Умови доставки замовлення
                        </h2>
                        <p>
                            6.1. Доставка товарів, придбаних в Інтернет-магазині, здійснюється до складів транспортних компаній, де і проводиться видача замовлень.
                        </p>
                        <p>
                            6.2. У разі неможливості з боку Покупця отримати товар до граничної дати зберігання в транспортній компанії, Замовлення буде утилізовано згідно з правилами транспортної компанії. У цьому випадку Продавець не відшкодовує вартість товару.
                        </p>
                    </section>

                    <section className="offer-page__section" id="rights">
                        <h2 className="offer-page__section-title">
                            <ShieldCheck size={24} className="offer-page__section-icon" />
                            Права та обов'язки сторін
                        </h2>
                        <p><strong>7.1. Продавець має право:</strong></p>
                        <ul className="offer-page__list">
                            <li>в односторонньому порядку призупинити надання послуг за цим договором у разі порушення Покупцем умов цього договору.</li>
                        </ul>
                        <p><strong>7.2. Покупець зобов'язаний:</strong></p>
                        <ul className="offer-page__list">
                            <li>своєчасно оплатити і отримати замовлення на умовах цього договору.</li>
                            <li>самостійно відстежувати транспортування Замовлення транспортною компанією за допомогою номера ТТН.</li>
                        </ul>
                    </section>

                    <section className="offer-page__section" id="responsibility">
                        <h2 className="offer-page__section-title">
                            <Scale size={24} className="offer-page__section-icon" />
                            Відповідальність сторін
                        </h2>
                        <p>
                            8.1. Сторони несуть відповідальність за невиконання або неналежне виконання умов цього договору в порядку, передбаченому цим договором та чинним законодавством України.
                        </p>
                        <p>
                            8.2. Продавець не несе відповідальності за зміст і правдивість інформації, що надається Покупцем при оформленні замовлення; за затримку і перебої в наданні Послуг, які відбуваються з причин, що знаходяться поза сферою його контролю.
                        </p>
                    </section>

                    <section className="offer-page__section" id="other">
                        <h2 className="offer-page__section-title">
                            <Info size={24} className="offer-page__section-icon" />
                            Інші умови
                        </h2>
                        <p>
                            9.1. Інтернет-магазин залишає за собою право в односторонньому порядку вносити зміни до цього договору за умови попередньої публікації його на сайті https://prake.com.ua.
                        </p>
                        <p>
                            9.2. Покупець несе відповідальність за достовірність зазначеної при оформленні замовлення інформації.
                        </p>
                    </section>

                    <section className="offer-page__section" id="return">
                        <h2 className="offer-page__section-title">
                            <RefreshCw size={24} className="offer-page__section-icon" />
                            Порядок повернення товару
                        </h2>
                        <p>
                            10.1. Повернення товару в Інтернет-магазин проводиться згідно з чинним законодавством України.
                        </p>
                        <p>
                            10.2. Повернення товару в Інтернет-магазин проводиться за рахунок Покупця без послуги післяплати.
                        </p>
                    </section>

                    <section className="offer-page__section" id="term">
                        <h2 className="offer-page__section-title">
                            <Calendar size={24} className="offer-page__section-icon" />
                            Строк дії договору
                        </h2>
                        <p>
                            11.1. Електронний договір вважається укладеним з моменту отримання відповіді про прийняття пропозиції в порядку, визначеному Законом України "Про електронну комерцію".
                        </p>
                        <p>
                            11.2. До закінчення строку дії цей Договір може бути розірваний за взаємною згодою сторін.
                        </p>
                    </section>
                </main>
            </div>
        </div>
    );
};
