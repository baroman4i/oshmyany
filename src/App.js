import './App.css';
import React from 'react';
import Main from './components/Main/Main';
import Slider from './components/Slider/Slider';
import DefLink from './components/UI/DefLink';
function App() {
  const themes = [
    {
        id: 'nz',
        name: 'ошмяны в годы войн',
        previewUrl: 'img/WOW/abb5bea0c379d3b99b2d6f76f8139fb7.jpg',
        backgroundImage: 'img/WOW/c0a2aed9f483e2feec3181713d49f033.jpeg',
        subtopics: [
            {
                name: 'Наполеон в Ошмянах',
                backgroundImage: 'img/Aoraki-Mount_Cook_from_Hooker_Valley.jpg',
                img: 'img/WOW/4345.png',
                text: 'В годы войны Отечественной войны 1812 года Наполеон намеревался тайком проникнуть через Германию в Париж. В 11 часов вечера того же дня из Сморгони выехал небольшой отряд. Дорога беглецов лежала через Ошмяны и Медники в Вильно. В Ошмянах же было неспокойно. Вечером 5 декабря  армейский партизанский отряд  полковника Сеславина, подойдя к Ошмянам, попытался сходу захватить город. В ходе боя русские кавалеристы атаковали склады в Ошмянах и истребили подготовленные неприятелем запасы. Позже граф Дунин-Вонсович вспоминал: «В Ошмянах императору доложили о недавнем нападении на город русских партизан и что дорога впереди может быть ими перехвачена. Ему советовали не подвергаться явной опасности и просили переждать хотя бы до утра. Отвергнув этот совет, Наполеон рассмотрел внимательно свою карту Литвы и дал команду двигаться дальше».',
                content: [
                    {
                        img: 'img/WOW/4345.png',
                        text: 'Отсталые. Художник Владимир Зворыкин.'
                    }, 
                    {
                        img: 'img/WOW/abb5bea0c379d3b99b2d6f76f8139fb7.jpg',
                        text: 'Возвращение Наполеона в Ошмянский тракт. 1812 г.'
                    },
                    {
                        img: 'img/WOW/1812.jpg',
                        text: 'В окрестностях Ошмян. Христиан Вильгельм Фабер дю Фор.'
                    },
                ],
                map: '!1m18!1m12!1m3!1d4642.65213849468!2d25.93304509092876!3d54.42187633843156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc35d01fbc54b9%3A0x97d078fc8196da06!2z0JDRiNC80Y_QvdC60LA!5e0!3m2!1sru!2sby!4v1634715224632!5m2!1sru!2sby'
            },
            {
                name: 'Годы Второй мировой войны',
                backgroundImage: 'img/4b2f3ac364f5ac08e1a3d8fc0f2f0414.jpg',
                img: 'img/WOW/melnica_1916.jpg',
                text: 'Ошмяны были заняты Красной Армией в сентябре 1939 г. В административном плане Ошмяны стали центром района, который был образован 15 января 1940 г. и вошел в состав Вилейской области. Началась советизация разных сфер жизни города и самих горожан. Советская администрация контролировала местную экономику, общественную, культурную жизнь. В город приезжали советские кадры, партийные работники. Часть населения подверглась репрессиям: арестам и высылке вглубь СССР. С 25 июня 1941 г. до 7 июля 1944 г. город был оккупирован нацистами. В 1945 г. он вошёл в состав БССР, и Ошмяны стали районным центром Молодечненской области. В ноябре 1960 г. Ошмянский район передан в состав Гродненской области. В 2006 г. был официально утвержден герб города, разработанный на основе варианта 1792 г.',
                content: [
                    // {
                    //     img: 'img/WOW/neleg1.jpg',
                    //     text: 'text'
                    // }, 
                    {
                        img: 'img/WOW/IMG_1333 (1).jpg',
                        text: 'Братская могила в г. Ошмяны, городской парк'
                    },
                    {
                        img: 'img/WOW/panorama_goroda.jpg',
                        text: 'Ошмяны перед Великой Отечественной войной'
                    },
                    {
                        img: 'img/WOW/melnica_1916.jpg',
                        text: 'Мельница и Ошмянский завод в 1920-ых годах'
                    }
                ],
                map: '!1m18!1m12!1m3!1d1035.1112795773681!2d25.939673492347264!3d54.42644969922256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc351543c3a3b5%3A0x83f62b26af8427a6!2z0JPQvtGA0L7QtNGB0LrQvtC5INC_0LDRgNC6!5e1!3m2!1sru!2sby!4v1634729465900!5m2!1sru!2sby'
            },
            {
                name: 'Гетто в Ошмянах',
                backgroundImage: 'img/Тонгариро.jpg',
                img: 'img/getto/1920px-Ghetto_Oshmyany-Ugleev-2a.jpg',
                text: 'Немцы очень серьёзно относились к возможности еврейского сопротивления, и поэтому в большинстве случаев в первую очередь убивали в гетто или ещё до его создания евреев-мужчин в возрасте примерно от 15 до 50 лет — несмотря на экономическую нецелесообразность, так как это были самые трудоспособные узники. По этим соображениям нацисты провели первую «акцию» (таким эвфемизмом гитлеровцы называли организованные ими массовые убийства) 10 июля 1941 года. Немцы приказали юденрату представить списки евреев-мужчин в возрасте от 17 до 65 лет, затем с полицаями ворвались в еврейские дома, согнали около 700 человек из этого списка на городскую площадь и вывезли в место в 1,5 километра от деревни Ягеловщина в урочище Люговщина, убили и закопали там в трёх братских могилах.',
                content: [
                    {
                        img: 'img/getto/1920px-Ghetto_Oshmyany-Ugleev-2a.jpg',
                        text: 'Памятник ошмянским евреям у деревни Талминово'
                    }, 
                    {
                        img: 'img/getto/1920px-Ghetto_Oshmyany-Roista-2b.jpg',
                        text: 'Памятник убитым евреям в урочище Ройста'
                    },
                    {
                        img: 'img/getto/1920px-Ghetto_Oshmyany-Lyugovschina-1a.jpg',
                        text: 'Памятник жертвам Холокоста в урочище Люговщина'
                    }
                ],
                map: '!1m18!1m12!1m3!1d1570.4419510326575!2d25.922951121344557!3d54.45817764555791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc35812e0bebe7%3A0x567660d5ee95b5f0!2z0K_Qs9C10LvQvtCy0YnQuNC90LA!5e0!3m2!1sru!2sby!4v1634736554746!5m2!1sru!2sby'
            }
        ]
    },
    {
        id: 'nz',
        name: 'памятники культуры',
        previewUrl: 'img/skaly_more_riab_154908_1920x1080.jpg',
        backgroundImage: 'img/culture/Мемориальный-уголок-Франтишка-Богушевича.-Фото-Валерий-Картуль.jpg',
        subtopics: [
            {
                name: 'Краеведческий музей имени Богушевича',
                backgroundImage: 'img/Aoraki-Mount_Cook_from_Hooker_Valley.jpg',
                img: 'img/culture/1_clear_resize1.jpg',
                text: 'Гора́ Ку́ка, или Аораки, — гора в новозеландских Южных Альпах, высочайшая точка Новой Зеландии, находится в западной части Южного острова недалеко от побережья. Эта сложенная кристаллическими породами гора с крутыми склонами, имеющая форму седла, покрыта снегом и ледниками',
                content: [
                    {
                        img: 'img/culture/Достопримечательные-места-Ошмянщины.-Фото-Валерий-Картуль.jpg',
                        text: 'Экспонаты музея имени Богушевича'
                    }, 
                    {
                        img: 'img/culture/unnamed.jpg',
                        text: 'Музей имени Богушевича снаружи'
                    },
                    {
                        img: 'img/culture/Мемориальный-уголок-Франтишка-Богушевича.-Фото-Валерий-Картуль.jpg',
                        text: 'Мемориальный уголок Франтишка Богушевича'
                    }
                ],
                map: '!1m18!1m12!1m3!1d3662.372515721566!2d25.93313537849637!3d54.424289654130284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc35c565484c5d%3A0xdc6069a9701d387a!2z0JrRgNCw0LXQstC10LTRh9C10YHQutC40Lkg0LzRg9C30LXQuSDQuNC80LXQvdC4INCR0L7Qs9GD0YjQtdCy0LjRh9Cw!5e1!3m2!1sru!2sby!4v1634736622461!5m2!1sru!2sby'
            },
            {
                name: 'Памятник Ленину',
                backgroundImage: 'img/4b2f3ac364f5ac08e1a3d8fc0f2f0414.jpg',
                img: 'img/culture/2719430056_7c90cc3f29_o.jpg',
                text: 'Памятник Ленину пережил многие события, проходящие на территории Ошмян. В годы Великой Отечественной войны, во времена полной оккупации территории Ошмянского района  он был частично разрушен немцами, но после восстановлен и, до недавнего времени, стоявший на главной площади, но менее десяти лет назад был перенесён на новое место, недалеко от старого.',
                content: [
                    {
                        img: 'img/culture/1553253857e0c.jpg',
                        text: 'text'
                    }, 
                    {
                        img: 'img/culture/IMG_0938-1.jpg',
                        text: 'text2'
                    },
                    {
                        img: 'img/culture/2719430056_7c90cc3f29_o.jpg',
                        text: 'text1'
                    },
                ],
                map: '!1m18!1m12!1m3!1d1035.1403978670237!2d25.937829243729905!3d54.42529690627138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc35c52b8c6ab5%3A0x254a3aea25d2239a!2sLenin%20Monument!5e1!3m2!1sru!2sby!4v1634728264683!5m2!1sru!2sby'
            },
            {
                name: 'Кресты Святой горы',
                backgroundImage: 'img/4b2f3ac364f5ac08e1a3d8fc0f2f0414.jpg',
                img: 'img/culture/2015_12_hod.jpg',
                text: 'Памятник Ленину пережил многие события, проходящие на территории Ошмян. В годы Великой Отечественной войны, во времена полной оккупации территории Ошмянского района  он был частично разрушен немцами, но после восстановлен и, до недавнего времени, стоявший на главной площади, но менее десяти лет назад был перенесён на новое место, недалеко от старого.',
                content: [
                    {
                        img: 'img/culture/2015_12_hod.jpg',
                        text: 'text'
                    }, 
                    {
                        img: 'img/culture/EU6YcG5UwAAS1Oj.jpg',
                        text: 'text2'
                    },
                    {
                        img: 'img/culture/DJI_0040.jpg',
                        video: 'https://www.youtube.com/embed/p1_XtsrUYEc',
                        text: 'text1'
                    },
                ],
                map: '!1m14!1m8!1m3!1d4642.195628683185!2d25.95527011131568!3d54.42590643703401!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd484f0d35afae068!2z0KHQstGP0YLQsNGPINCz0L7RgNCw!5e0!3m2!1sru!2sby!4v1634812068792!5m2!1sru!2sby'
            },
        ]
    },
    {
        id: 'nr',
        name: 'Архитектурные достопримечательности',
        previewUrl: 'img/oszmiany_1935_22.jpg',
        backgroundImage: 'img/architecture/DSC_0399.jpg',
        subtopics: [
            {
                name: 'Свято-Воскресенская церковь',
                backgroundImage: 'img/Тонгариро.jpg',
                img: 'img/culture/DSC00125.jpeg',
                text: 'Первые кирпичики в основание православного храма были заложены в 1873 году. Строительство церкви Воскресения Христова было окончено через 10 лет. Храм в Ошмянах стал заменой старой каменной церквушке, расположенной на окраине города, вместимость которой не позволяла посещать службу всем желающим.Ошмянская церковь построена в псевдорусском стиле, в виде креста по проекту архитектора А. Полозова. Храм располагается в историческом центре города, неподалеку от костела святого Михаила и бывшей синагоги.',
                content: [
                    {
                        img: 'img/culture/DSC00125.jpeg',
                        text: 'text'
                    }, 
                    {
                        img: 'img/culture/DSC00127_01.jpeg',
                        text: 'text1'
                    },
                    {
                        img: 'img/culture/IMG_5133.jpg',
                        text: 'text2'
                    }
                ],
                map: '!1m14!1m8!1m3!1d1095.4620171465667!2d25.935278565829236!3d54.424048778188144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc35c541339a5d%3A0x6a8b2edeaa5b9940!2z0KbQtdGA0LrQvtCy0Ywg0JLQvtGB0LrRgNC10YHQtdC90LjRjyDQpdGA0LjRgdGC0L7QstCwLCDRg9C7LiDQodC-0LLQtdGC0YHQutCw0Y8gMTI1LCDQntGI0LzRj9C90Ys!5e0!3m2!1sru!2sby!4v1634812584326!5m2!1sru!2sby'
            },
            {
                name: 'Гольшанский замок',
                backgroundImage: 'img/geiranger_fjord2.jpg',
                img: 'img/architecture/154159.jpg',
                text: 'Первый период расцвета Гольшан пришелся на XIV – XV века, когда город был центром удельного княжества ВКЛ. В 1525 году княжна Елена Гольшанская вышла замуж за подканцлера Великого Княжества Литовского Павла Сапегу – и местность перешла во владение к Сапегам. Именно при Сапегах, в первой половине XVII века, случился пик развития местечка. Тогда и был отстроен огромный замок, который находился поодаль от самого населенного пункта, на возвышенности, и был окружен рвами с водой. В то же время в Гольшанах возвели и костел францисканцев, который, в отличие от замка, прекрасно сохранился до наших дней.',
                content: [
                    {
                        img: 'img/architecture/154159.jpg',
                        text: 'Вид сверху на Гольшанский замок.',
                    },
                    {
                        img: 'img/architecture/DSC_0399.jpg',
                        text: 'Вид на уцелевшую башню Гольшанского замка.'
                    }, 
                    {
                        img: 'img/architecture/maxresdefault (1).jpg',
                        video: 'https://www.youtube.com/embed/A8y7Olu89Cw',
                        text: 'Видеоролик "Гольшанский замок: руины замка Сапег в деревне Гольшаны"'
                    }
                ],
                map: '!1m14!1m8!1m3!1d9323.850839099006!2d26.0202923!3d54.2515449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdfa97cacaee241e9!2z0JPQvtC70YzRiNCw0L3RgdC60LjQuSDQt9Cw0LzQvtC6!5e0!3m2!1sru!2sby!4v1634728023885!5m2!1sru!2sby'
            },
            {
                name: 'Костёл Святого Михаила Архангела',
                backgroundImage: 'img/architecture/DSC_0399.jpg',
                img: 'img/architecture/4d156a7e6c682787d62a1e011ed9738e.jpg',
                text: 'Построенный в 1906–1910 гг. на месте храма ХIV века костел Михаила Архангела – самое высокое здание Ошмян и силуэтная доминанта города. Эта святыня – блестящая иллюстрация стиля «виленского» барокко в его, если угодно, необарочной интерпретации. Пятиярусные башни изысканного силуэта, парящие над площадью, подобны двум белым свечам, обозреваемым далеко окрест. При подъезде к Ошмянам с любой стороны они – великолепный ориентир городского центра для путешественников. Надпись на латыни над входом в храм «TE DEUM LAUDAMUS» («Тебя, Боже, хвалим»), взятая из христианского гимна IV века, придает пафосное настроение устремленному к небесам костелу. Текст Анатолия Вараввы, путеводитель «По дорогам Ошмянского края»',
                content: [
                    {
                        img: 'img/architecture/4d156a7e6c682787d62a1e011ed9738e.jpg',
                        text: 'Фото костёла Святого Михаила Архангела'
                    },
                    {
                        img: 'img/architecture/DSC_0209.jpg',
                        text: 'Внутри костёла Святого Михаила'
                    },
                    {
                        img: 'img/architecture/maxresdefault.jpg',
                        video: 'https://www.youtube.com/embed/XuF7JaeE2WU',
                        text: 'Видеоролик "Костёл Святого Михаила Архангела"'
                    }                   
                ],
                map: '!1m18!1m12!1m3!1d457.2784160762834!2d25.93538568681483!3d54.423425981056724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc350d7b170231%3A0x55f5c401f61958d2!2z0JrQvtGB0YLQtdC7INCh0LLRj9GC0L7Qs9C-INCc0LjRhdCw0LjQu9Cw!5e0!3m2!1sru!2sby!4v1634728083772!5m2!1sru!2sby'
            },
            {
                name: 'Руины францисканского костёла',
                backgroundImage: 'img/architecture/8bfb1e52a525db4838c5d32399027eb2.jpg',
                img: 'img/architecture/8bfb1e52a525db4838c5d32399027eb2.jpg',
                text: 'Гейрангер-фьорд — фьорд в регионе Суннмёре, расположенный в самой южной части фюльке Мёре-ог-Ромсдал в Норвегии. Находится примерно в 200 километрах к северо-востоку от Бергена и в 280 километрах к северо-западу от Осло. Фьорд простирается на 15 километров и представляет собой одно из ответвлений Стур-фьорда. Глубина составляет 565 метров. В июле 2005 года был внесён в список Всемирного наследия ЮНЕСКО.',
                content: [
                    {
                        img: 'img/architecture/unnamed.jpg',
                        text: 'text'
                    }, 
                    {
                        img: 'img/architecture/ruins.jpg',
                        video: 'https://www.youtube.com/embed/bs3NDsxGYPc',
                        text: 'Видеоролик "«Ошмянская Голгофа» – руины костела францисканцев"'
                    },
                    {
                        img: 'img/architecture/8bfb1e52a525db4838c5d32399027eb2.jpg',
                        text: 'text2'
                    }
                ],
                map: '!1m18!1m12!1m3!1d1127.5112817816932!2d25.955492720034226!3d54.425873066273205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc35df17df43b1%3A0x15a2463faa4f0428!2z0KDRg9C40L3RiyDRhNGA0LDQvdGG0LjRgdC60LDQvdGB0LrQvtCz0L4g0LrQvtGB0YLRkdC70LA!5e0!3m2!1sru!2sby!4v1634728172118!5m2!1sru!2sby'
            },
            {
                name: 'Гольшанский костел францисканцев',
                backgroundImage: 'img/Тонгариро.jpg',
                img: 'img/culture/0_8bc6d_3df0c876_XXL.jpg',
                text: 'Тонгариро — самый старый национальный парк в Новой Зеландии, расположенный в центральной части Северного Острова. В парке находится озеро Ротопунаму.',
                content: [
                    {
                        img: 'img/culture/0_8bc6d_3df0c876_XXL.jpg',
                        text: 'text'
                    }, 
                    {
                        img: 'img/culture/107.jpg',
                        text: 'text1'
                    },
                    {
                        img: 'img/culture/ff21e70811fb09a5515366e78c9fad2c.jpg',
                        text: 'text2'
                    }
                ],
                map: '!1m18!1m12!1m3!1d2249.880159573912!2d12.565958415897699!3d55.6736840805322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652531280f6eaf3%3A0xd9b50b0db50b27b0!2z0J_QsNGA0Log0KLQuNCy0L7Qu9C4!5e0!3m2!1sru!2sus!4v1603712744220!5m2!1sru!2sus'
            }
        ]
    },
    {
        id: 'nr',
        name: 'Исторические достопримечательности',
        previewUrl: 'img/history/oszmiany_1935_22.jpg',
        backgroundImage: 'img/history/oshmyany-sinagoga-sinagoga-1416-1518702151_b1.jpg',
        subtopics: [
            {
                name: 'Синагога в Ошмянах',
                backgroundImage: 'img/geiranger_fjord2.jpg',
                img: 'img/history/8dc1112f9a995df3bf9992f6a72502a9.jpg',
                text: 'Синагога в Ошмянах считается одной из самых интересных среди еврейских молельных домов, сохранившихся на территории Беларуси, хотя она была построена лишь чуть более века назад – в 1912 году. После начала Второй мировой войны синагога в Ошмянах была закрыта, а местная еврейская община уничтожена.',
                content: [
                    {
                        img: 'img/history/8dc1112f9a995df3bf9992f6a72502a9.jpg',
                        text: 'text'
                    }, 
                    {
                        img: 'img/history/старое-фото-ошмяны.jpg.webp',
                        text: 'text1'
                    },
                    {
                        img: 'img/history/oshmyany-sinagoga-sinagoga-1416-1518702151_b1.jpg',
                        text: 'text2'
                    }
                ],
                map: '!1m18!1m12!1m3!1d1203.2482074393515!2d25.934174201669173!3d54.42467696604547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc35c575c774af%3A0xabac80aede42beb!2sFormer%20synagogue!5e0!3m2!1sru!2sby!4v1634984297852!5m2!1sru!2sby'
            },
            {
                name: 'Усадьба Стругачей в д. Буденовка',
                backgroundImage: 'img/geiranger_fjord2.jpg',
                img: 'img/history/428a380518b6977cb1871bfc14c2570b.jpg',
                text: 'Усадьбу в деревне Святой Дух Ошмянского района построил Лейба Стругач (ударение на первый слог), купец, владелец завода, один из самых богатых землевладельцев Западного края Российской Империи и самых богатых евреев Беларуси. Дом был построен в стиле модерн с тремя балконами и террасой, обнесен каменной оградой с красивой воротами. Недалеко были построены дома для прислуги, хозяйственные постройки. Вокруг усадьбы Л. Стругача был разбит парк, имелось теплица и оранжерея.',
                content: [
                    {
                        img: 'img/history/8179_b1253193092.jpg',
                        text: 'Усадьба Льва Стругача'
                    }, 
                    {
                        img: 'img/history/budenovka-oshmiani.jpg',
                        text: 'Усадьба Льва Стругача'
                    },
                    {
                        img: 'img/history/428a380518b6977cb1871bfc14c2570b.jpg',
                        text: 'Усадьба Льва Стругача'
                    }
                ],
                map: '!1m18!1m12!1m3!1d5448.1482929856365!2d25.899123086105885!3d54.4222782233431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc35ed9a363257%3A0x48118be7cc5f31f7!2z0KPRgdCw0LTRjNCx0LAg0JvRjNCy0LAg0KHRgtGA0YPQs9Cw0YfQsA!5e1!3m2!1sru!2sby!4v1634733593255!5m2!1sru!2sby'
            },
            {
                name: 'Ошмянская типография',
                backgroundImage: 'img/geiranger_fjord2.jpg',
                img: 'img/history/DJI_0044.jpg',
                text: 'Великий маршалок Великого Княжества Литовского Криштоф Монвид Дорогостайский – имя, которым гордится Ошмянщина.. Дорогостайский был героем на поле битвы, ученым, доктором медицины, писателем и путешественником, но в историю он вошел прежде всего, как автор «Гіпікі, альбо Кнігі пра коней» (1603 г.). Многие страницы « Гіпікі» были написаны в Мур-Ошмянке. Здесь великий маршалок имел дворец (типографию), руины которого сохранились до сегодняшних дней. Однако сведения о существовании Ошмянской типографии – неточные и противоречивые. Даже в современных энциклопедических изданиях подаются разные даты её основания и имена основателей. Некоторые исследователи вообще сомневаются в её существовании. Однако во многих источниках того времени можно прочитать, что «Цензура» В. Солинариуса была издана в личной типографии К.М. Дорогостайского.',
                content: [
                    {
                        img: 'img/history/hrazmura02-01.jpg',
                        text: 'Усадьба Льва Стругача'
                    },
                    {
                        img: 'img/history/maxresdefault.jpg',
                        video: 'https://www.youtube.com/embed/ckfEVtKBmzM',
                        text: 'Усадьба Льва Стругача'
                    }, 
                    {
                        img: 'img/history/2625348_original.jpg',
                        text: 'Усадьба Льва Стругача'
                    },
                ],
                map: '!1m18!1m12!1m3!1d4814.569021958265!2d25.781792389411876!3d54.45850686581977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ddcae7cc9b20c1%3A0x1f231be47f465260!2z0KbQtdGA0LrQvtCy0Ywg0J_RgNC10YHQstGP0YLQvtC5INCU0LXQstGLINCc0LDRgNC40Lg!5e1!3m2!1sru!2sby!4v1634738530367!5m2!1sru!2sby'
            }
        ]
    },
    {
        id: 'sl',
        name: 'знаменитые личности ошмянщины',
        previewUrl: 'img/oszmiany_1935_22.jpg',
        backgroundImage: 'img/persons/IMG_5640.jpg',
        subtopics: [
            {
                name: 'Криштоф Дорогостайский',
                backgroundImage: 'img/Triglav_National_Park.jpg',
                img: 'img/persons/bec5445719f6.jpg',
                text: 'В своем имении в Мурованой Ошмянке Криштоф Монвид Дорогостайский, великий маршалок литовский, просветитель и меценат, доктор медицины, завершил свою рукопись «Гиппики». После этого книгу проиллюстрировал придворный гравер Николая Радзивилла (Сиротки), и она отправилась в типографию. Сегодня «Гиппика» представляет собой не только памятник литературы и искусства, но и является источником ценной информации об истории коневодства на белорусских землях.',
                content: [
                    {
                        img: 'img/persons/bec5445719f6.jpg',
                        text: 'text'
                    }, 
                    {
                        img: 'img/persons/IMG_5640.jpg',
                        text: 'text1'
                    },
                    {
                        img: 'img/Park_tivoli.jpg',
                        text: 'text2'
                    }
                ],
                map: '!1m18!1m12!1m3!1d2249.880159573912!2d12.565958415897699!3d55.6736840805322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652531280f6eaf3%3A0xd9b50b0db50b27b0!2z0J_QsNGA0Log0KLQuNCy0L7Qu9C4!5e0!3m2!1sru!2sus!4v1603712744220!5m2!1sru!2sus'
            },
            {
                name: 'Франтишек Богушевич',
                backgroundImage: 'img/persons/02c2eec168ffabb9d36e9abb252c656d.jpg',
                img: 'img/persons/02c2eec168ffabb9d36e9abb252c656d.jpg',
                text: 'Франтишек Бенедикт Казимирович Богушевич родился 21 марта 1840 года в семье обедневшего дворянина Казимира Богушевича в фольварке Свираны Виленского уезда Виленской губернии (ныне Вильнюсский район Литвы). Франтишек Богушевич принимал активное участие в восстании 1863-1864 годов под предводительством Кастуся Калиновского, где в боях в Августовских лесах был ранен. Спасаясь от репрессий после окончания восстания, Богушевич вынужден был прятаться, после переехал в Украину. В 1865 году ему удалось поступить в Нежинский юридический лицей (Черниговская область Украины). С 1868 года Франтишек Богушевич работал судебным следователем в Украине и России. В 1884 году вернулся в Вильно и начал работу в должности адвоката судебной палаты, где его основными клиентами были крестьяне и городская беднота.',
                content: [
                        {
                            img: 'img/persons/02c2eec168ffabb9d36e9abb252c656d.jpg',
                            text: 'text'
                        }, 
                        {
                            img: 'img/persons/unnamed.jpg',
                            text: 'text1'
                        },
                        {
                            img: 'img/persons/7c5b4ba41a91f78d7f766bf3b77398f7.jpg',
                            text: 'text2'
                        }
                    ],
                map: '!1m18!1m12!1m3!1d8278.084456307564!2d26.1777555!3d54.440333499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc47c9cc919ce1%3A0x4cb3c877af2989df!2z0JzRg9C30LXQuS3Rg9GB0LDQtNGM0LHQsCDQpNGA0LDQvdGC0LjRiNC60LAg0JHQvtCz0YPRiNC10LLQuNGH0LAgItCa0YPRiNC70Y_QvdGLIg!5e1!3m2!1sru!2sby!4v1634743541480!5m2!1sru!2sby'
            },
            {
                name: 'Юрий Лопух',
                backgroundImage: 'img/Park_tivoli.jpg',
                img: 'img/persons/Lopuh-01.jpg',
                text: 'Советский и белорусский мотокроссмен, Мастер спорта СССР международного класса, победитель и призер международных соревнований, призер чемпионатов Советского Союза по мотокроссу и многодневным гонкам, победитель первенства Вооруженных Сил СССР, многократный чемпион Беларуси по мотокроссу. В 80-х годах член сборной Советского Союза по мотокроссу.',
                content: [
                        {
                            img: 'img/persons/Lopuh-05.jpg',
                            text: 'text'
                        }, 
                        {
                            img: 'img/persons/Lopuh-01.jpg',
                            text: 'text1'
                        },
                        {
                            img: 'img/persons/Lopuh-12.jpg',
                            text: 'text2'
                        }
                    ],
                map: '!1m18!1m12!1m3!1d2249.880159573912!2d12.565958415897699!3d55.6736840805322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652531280f6eaf3%3A0xd9b50b0db50b27b0!2z0J_QsNGA0Log0KLQuNCy0L7Qu9C4!5e0!3m2!1sru!2sus!4v1603712744220!5m2!1sru!2sus'
            }
        ]
    }
  ]
  const [activeTheme, setActiveTheme] = React.useState((Math.floor(themes.length/2)))
  const [activePlace, setActivePlace] = React.useState(Math.floor(themes[activeTheme].subtopics.length/2))
  const [activePlaceContent, setActivePlaceContent] = React.useState(Math.floor(themes[activeTheme].subtopics[activePlace].content.length/2))
//   const width = React.useRef(null)
  const [isLoading, setIsLoad] = React.useState(true)
  React.useEffect(() => {
    setActivePlace(Math.floor(themes[activeTheme].subtopics.length/2))
  }, [activeTheme])
  React.useEffect(() => {
    setActivePlaceContent(Math.floor(themes[activeTheme].subtopics[activePlace].content.length/2))
  }, [activeTheme, activePlace])
  return (
    <div className="App" onLoad={() => {  window.addEventListener('load', () => setIsLoad(false))}}>
      {isLoading ? <img id="loader" src={"img/480px-Loader.gif"} alt={isLoading.toString()}/>: null}
      <Main themes={themes} activeTheme={activeTheme} setActiveTheme={setActiveTheme} activePlace={activePlace} setActivePlace={setActivePlace} setActivePlaceContent={setActivePlaceContent}/>
      <section className="more" id="more" style={{backgroundImage: `url(${themes[activeTheme].subtopics[activePlace].img})`}}>
        <div className="text-content">
              <h2>{themes[activeTheme].subtopics[activePlace].name}</h2>
              <p>{themes[activeTheme].subtopics[activePlace].text}</p>
              <div className="links">
                <DefLink href="#more">Просмотреть на карте</DefLink>
                <DefLink href="#main">Вернуться к темам</DefLink>
              </div>
              <div className="map">
                <iframe title="map" src={'https://www.google.com/maps/embed?pb='+themes[activeTheme].subtopics[activePlace].map} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
        <div className="media-content">
            <h3>Архивные материалы</h3>
            <div className="media-input">
                {themes[activeTheme].subtopics[activePlace].content[activePlaceContent].video ? <iframe width="956" height="538" src={`${themes[activeTheme].subtopics[activePlace].content[activePlaceContent].video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : <img src={themes[activeTheme].subtopics[activePlace].content[activePlaceContent].img} alt={themes[activeTheme].subtopics[activePlace].content[activePlaceContent].text}></img>}
            </div>
            <span className="media-input-text">{themes[activeTheme].subtopics[activePlace].content[activePlaceContent].text}</span>
            <Slider activeEl={activePlaceContent} setActiveEl={setActivePlaceContent} array={themes[activeTheme].subtopics[activePlace].content}/>
        </div>
      </section>
      <div className="copyright"></div>
    </div>
  )
}

export default App;
