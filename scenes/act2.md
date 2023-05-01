# act2

`SceneSetup.act2();`

{{if _.badnews && !_.factcheck}}
(#act2-preamble-news1)
{{/if}}

{{if _.badnews && _.factcheck}}
(#act2-preamble-news2)
{{/if}}

{{if _.catmilk}}
(#act2-preamble-cat)
{{/if}}

(#act2-preamble-tinder)


# act2-preamble-news1

```
publish("act2",["dee",3]);
```

s: Ты *видел* ту "ужасную" "новость"?

```
publish("act2",["dee",2]);
publish("act2",["party_hong","next"]);
```

h2: п-привет...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",3]);
```

a: Ненавижу новости! Ложь в заголовках, чтобы показать больше рекламы.

```
publish("act2",["dum",2]);
publish("act2",["party_hong","next"]);
```

h2: к... клёвая вечеринка...

```
publish("act2",["party_hong","next"]);
publish("act2",["party_hunter",0]);
publish("act2",["dee",1]);
```

s: Им за это платят. *Настоящая* проблема в людях, которые *ведутся* на такие манипуляции.

```
publish("act2",["dee",3]);
```

s: Кто вообще будет репостить ужасные новости, заставляя своих друзей чувствовать себя плохо?!

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Кажется, я знаю таких...

(#act2-preamble-end)


# act2-preamble-news2

```
publish("act2",["dee",3]);
```

s: *Видел*, как та "ужасная" "новость" стала популярной?

```
publish("act2",["dee",2]);
publish("act2",["party_hong","next"]);
```

h2: п-привет...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",3]);
```

a: Феееейк! Кто вообще верит в это и репостит?

```
publish("act2",["dum",2]);
publish("act2",["party_hong","next"]);
```

h2: к... клёвая вечеринка...

```
publish("act2",["party_hong","next"]);
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: Это же так просто открыть гугл и проверить!

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Кажется, я знаю кто...

(#act2-preamble-end)


# act2-preamble-cat

```
publish("act2",["dee",3]);
```

s: ...индустрия мемов эксплуатирует котиков.

```
publish("act2",["dee",2]);
publish("act2",["party_hong","next"]);
```

h2: п-привет...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",1]);
```

a: Подробнее, коллэга

```
publish("act2",["dum",0]);
publish("act2",["party_hong","next"]);
```

h2: к... клёвая вечеринка...

```
publish("act2",["party_hong","next"]);
publish("act2",["party_hunter",0]);
publish("act2",["dee",1]);
```

s: Ну... Я вчера видел репост GIF-ки с кошкой, лакающей молоко.

```
publish("act2",["dee",3]);
```

s: Кошки не переваривают это ^дерьмо^! Зачем репостить *жестокое обращение с животными*?

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Дебилы...

(#act2-preamble-end)


# act2-preamble-tinder

```
publish("act2",["dee",1]);
```

s: Они никогда не отвечают!

```
publish("act2",["dee",0]);
publish("act2",["party_hong","next"]);
```

h2: п-привет...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",1]);
```

a: Даже если вы оба лайкнули друг друга в Tinder?

```
publish("act2",["dum",0]);
publish("act2",["party_hong","next"]);
```

h2: к... клёвая вечеринка...

```
publish("act2",["party_hong","next"]);
```

{{if _.serialkiller}}
(#act2-preamble-serialkiller)
{{/if}}

{{if _.hookuphole}}
(#act2-preamble-hookuphole)
{{/if}}

{{if _.pokemon}}
(#act2-preamble-pokemon)
{{/if}}

# act2-preamble-serialkiller

```
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: Они типа думают, что я {{PM ? '*серийная убийца*' : '*серийный убийца*'}} что ли? Параноики!

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Нда..

(#act2-preamble-end)


# act2-preamble-hookuphole

```
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: Странные... Они типа думают, что незнакомцам не дано заполнить дыру в их сердце?

s: Нафига быть ханжой? Можно же сначала узнать друг друга, а затем {{PM ? 'снимать штаны' : 'раздвигать ноги'}}!

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Нда...

(#act2-preamble-end)


# act2-preamble-pokemon

```
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: Да... По фоткам {{PM ? 'он' : 'она'}} так себе, но для моей коллекции {{PM ? 'его' : 'её'}} как раз не хватает!

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Собери их всех!™

(#act2-preamble-end)


# act2-preamble-end

```
Game.clearText();
publish("act2-out-1");
music(null, {fade:1});
```

(...3000)

```
music('battle', {volume:0.5});
publish("hp_show");
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

n: РАУНД #2: *БОЙ!*

[Они нас ненавидят!](#act2a_social)

[Ты *пялишься* на {{PM ? 'рыжеволосую?' : 'рыжеволосого?'}}](#act2a_perv)

[Давай поговорим о смысле жизни.](#act2a_meaning)

# act2a_social

`bb({eyes:"sad"})`

b: Мы портим всем настроение своим кислым видом.

`bb({eyes:"shock", body:"two_up"})`

b: Мы убиваем кайфовую атмосферу с особой жестокостью!

`bb({eyes:"normal", body:"normal"})`

b: Человек, мы должны уйти *прямо сейчас*, прежде чем--

```
_.a2_first_danger = 'social';
_.a2_attack_1 = "alone";
```

(#act2b)

# act2a_perv

`bb({eyes:"suspect"})`

b: {{PM ? 'Она красивая' : 'Он красивый'}}... Гораздо лучше нас! И если мы пялимся на {{PM ? 'неё' : 'него'}}, то--

`bb({eyes:"shock", body:"two_up"})`

b: МЫ УЖАСНЫ

`bb({body:"normal"})`

b: Мы мерзкие, отвратительные, ужасные, гнилые извра--

```
_.a2_first_danger = 'perv';
_.a2_attack_1 = "bad";
```

(#act2b)

# act2a_meaning

`bb({body:"one_up", eyes:"normal_r"})`

b: Что мы в принципе можем сделать, что было бы не бессмысленно?

`bb({body:"normal", eyes:"sad"})`

b: Что-то для человечества? Время всё равно рано или поздно уничтожит все "великие творения". Любовь? Точку в ней поставит смерть.

`bb({eyes:"sad_r"})`

b: Посмотри, сколько вокруг смерти! *Мы* умрём! *Все, кого мы любим* – умрут!

`bb({eyes:"shock", body:"two_up"})`

b: А второй закон термодинамики означает, что даже *Вселенная* умрёт!

`bb({eyes:"suspect", body:"normal"})`

b: Ответишь, что смерть заставляет нас ценить жизнь?

b: Тогда рабство – это хорошо, потому что оно заставляет нас ценить свободу! Полный бред!

`bb({body:"one_up"})`

b: Или "тебе надо найти свой собственный смысл"?

b: Собственный смысл? Попахивает сектой. Или юношеским максимализмом...

`bb({eyes:"shock", body:"two_up"})`

b: Жизнь бессмысленна. Смерть бессмысленна. Даже *смысл* бессмысленнен! И что же остаётся смертной душе чтобы--

```
_.a2_first_danger = 'meaning';
_.a2_attack_1 = "bad";
```

(#act2b)

# act2b

`bb({eyes:"normal", mouth:"normal", body:"normal", MOUTH_LOCK:true})`

b: ...

`bb({eyes:"suspect"})`

b: Эм... ты слышишь меня, человек?

`bb({eyes:"normal", MOUTH_LOCK:true})`

b: ...

`bb({eyes:"shock", mouth:"small_talk", body:"chest", MOUTH_LOCK:true})`

b: *Оооххх*

`bb({mouth:"small_talk"})`

b: Я {{AM ? 'ДОЛЖЕН' : 'ДОЛЖНА'}} ПРЕДУПРЕДИТЬ ТЕБЯ...

[*Подробнее* об этой же опасности!](#act2b_louder)

{{if _.a2_first_danger=="social"}}
[О *другой* опасности!](#act2b_different_social)
{{/if}}

{{if _.a2_first_danger=="perv" || _.a2_first_danger=="meaning"}}
[О *другой* опасности!](#act2b_different_moral)
{{/if}}

[Ты игнорируешь опасность! Это опасно!](#act2b_ignore)

# act2b_louder

`_.a2_first_choice = "louder"`

{{if _.a2_first_danger=="social"}}
(#act2b_louder_social)
{{/if}}

{{if _.a2_first_danger=="perv"}}
(#act2b_louder_perv)
{{/if}}

{{if _.a2_first_danger=="meaning"}}
(#act2b_louder_meaning)
{{/if}}

# act2b_louder_social

`bb({eyes:"shock", body:"two_up", mouth:"normal"})`

b: ЭМОЦИИ ЗАРАЗНЫ! ЕСЛИ ТЫ НЕ УЙДЁШЬ, ТО ЗАРАЗИШЬ ВСЕХ СВОЕЙ ПСИХИЧЕСКОЙ БОЛЕЗНЬЮ!

b: Ты создашь смертельную вспышку СИНДРОМА УНЫЛОЙ КИСЛЯТИНЫ!

`bb({eyes:"suspect", body:"normal", mouth:"normal"})`

b: Нам нужно убираться отсюда и навсегда изолировать себя в маленькой комнате с подпиской на стриминговые видеосервисы и доставкой еды!

```
_.a2_second_danger = 'netflix';
_.a2_attack_2 = "alone";
_.a2_hoodie_callback = "о синдроме унылой кислятины";
```

(#act2c)

# act2b_louder_perv

`bb({eyes:"suspect", body:"two_up", mouth:"normal"})`

b: НЕ БУДЬ {{PM ? 'ОТВРАТИТЕЛЬНЫМ' : 'ОТВРАТИТЕЛЬНОЙ'}}, ЭТО ПРОТИВОЗАКОННО!

`bb({eyes:"judge", body:"judge_1", mouth:"normal"})`

(...201)

```
bb({body:"judge_2"}, 0);
sfx("gravel");
```

(...168)

`bb({body:"judge_1"}, 0)`

(...168)

`bb({body:"judge_2"}, 0)`

(...168)

`bb({body:"judge_1"}, 0)`

(...501)

b: Закон об отвратительности, пункт 74.5:

b: (1) Любое Лицо, которое обращает внимание на (а) пышную грудь, (б) мускулистые плечи (2) должно быть идентифицировано как

`bb({eyes:"shock", body:"two_up", mouth:"normal"})`

b: {{PM ? '"МЕРЗКИЙ ИЗВРАЩЕНЕЦ"' : '"МЕРЗКАЯ ИЗВРАЩЕНКА"'}} 

```
_.a2_second_danger = 'law';
_.a2_attack_2 = "bad";
_.a2_hoodie_callback = "о законе об отвратительности";
```

(#act2c)

# act2b_louder_meaning

`bb({body:"two_up", mouth:"normal", eyes:"shock"})`

b: На самом деле, даже если ты и найдёшь благородную цель в жизни, ты *всё равно* можешь всё испортить!

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: Альфред Нобель хотел мира во всем мире. Чтобы народы общались и понимали друг друга.

b: Для этого он решил сделать путешествия доступнее, быстрее и проще.

`bb({eyes:"normal_r"})`

b: Но ему нужен был способ, чтобы дешево создавать железнодорожные туннели.

b: И он изобрел новый материал: динамит...

`bb({body:"one_up", eyes:"normal"})`

b: который в Первой мировой войне использовали для УБИЙСТВ МИЛЛИОНОВ ЛЮДЕЙ

`bb({body:"two_up", eyes:"shock"})`

b: ЭТО ЭФФЕКТ БАБОЧКИ, ЧЕЛОВЕК! СКОЛЬКО ЛЮДЕЙ ТЫ НЕНАМЕРЕННО УБИВАЕШЬ ПРЯМО СЕЙЧАС?!

```
_.a2_second_danger = 'butterfly';
_.a2_attack_2 = "bad";
_.a2_hoodie_callback = "о первой мировой войне";
```

(#act2c)

# act2b_different_social

`_.a2_first_choice = "different"`

`bb({eyes:"normal_r", body:"point", mouth:"normal"})`

b: Знаешь, что может быть хуже, чем то, когда ты никому не нравишься? Когда ты нравишься *всем*!

`bb({body:"one_up", eyes:"suspect", mouth:"normal"})`

b: Потому что так ты становишься одним из *этих* подсевших на веселье {{PM ? 'тусовщиков' : 'тусовщиц'}}.

`bb({body:"normal", mouth:"small"})`

b: Пустая жизнь с пустыми знакомствами, от которых пусто внутри!

`bb({body:"two_up", eyes:"shock", mouth:"normal"})`

b: Человек, нам нужно бежать от этих зомби-тусоманов, пока мы не стали одними из них!

```
_.a2_second_danger = 'zombies';
_.a2_attack_2 = "alone";
_.a2_hoodie_callback = "о зомби-тусоманах";
```

(#act2c)

# act2b_different_moral

`_.a2_first_choice = "different"`

`bb({body:"two_up", eyes:"shock", mouth:"normal"})`

b: *Прямо сейчас* другие люди умирают от геноцида, голода и войн! А мы просто развлекаемся?!

`bb({body:"point", eyes:"closed", mouth:"small"})`

b: Один мудрый человек сказал: "Единственное, что необходимо для победы зла – это чтобы добрые люди ничего не делали".

`bb({body:"two_up", eyes:"shock", mouth:"normal"})`

b: МЫ БЕЗДЕЙСТВУЕМ!

`bb({mouth:"small"})`

b: РАЗВЛЕКАЯСЬ, МЫ ПОМОГАЕМ *ГИТЛЕРУ*!

```
_.a2_second_danger = 'hitler';
_.a2_attack_2 = "bad";
_.a2_hoodie_callback = "о Гитлере";
```

(#act2c)

# act2b_ignore

`_.a2_first_choice = "ignore"`

`bb({body:"normal", mouth:"normal", eyes:"suspect"})`

b: Думаешь, если ты {{PM ? 'вынул' : 'вынула'}} батарейки из детектора угарного газа, то ты в безопасности?

`bb({eyes:"suspect_r"})`

b: Ты даже не почувствуешь этот газ, он без запаха! Ты просто уснёшь, а затем--

`bb({body:"scream_c_1"})`

b: УМРЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁШЬ

```
_.a2_second_danger = 'ignore';
_.a2_attack_2 = "harm";
_.a2_hoodie_callback = "об угарном газе";
```

(#act2c)

# act2c

```
hong({body:"ignore_sweat"});
bb({eyes:"normal", mouth:"normal", body:"normal", MOUTH_LOCK:true});
```

b: ...

`bb({eyes:"happy", mouth:"smile", body:"chest"})`

b: О, слава богу, человек! Я думаю, ты меня снова слышишь!

`bb({eyes:"closed", body:"point"})`

b: Я {{AM ? 'ДОЛЖЕН' : 'ДОЛЖНА'}}  ПРЕДУПРЕДИТЬ ТЕБЯ...

{{if _.a2_first_choice=="louder"}}
[*Eщё подробнее* об этой же опасности!](#act2c_louder)
{{/if}}

{{if _.a2_first_choice!="louder"}}
[*Подробнее* об этой же опасности!](#act2c_louder)
{{/if}}

{{if _.a2_first_danger=="social"}}
[О *другой* опасности!](#act2c_different_social)
{{/if}}

{{if _.a2_first_danger=="perv" || _.a2_first_danger=="meaning"}}
[О *другой* опасности!](#act2c_different_moral)
{{/if}}

[Ты {{PM ? 'проверил' : 'проверила'}} пунш перед тем, как пить?](#act2c_punch)

#act2c_louder

{{if _.a2_second_danger=="netflix"}}
(#act2c_louder_netflix)
{{/if}}

{{if _.a2_second_danger=="law"}}
(#act2c_louder_law)
{{/if}}

{{if _.a2_second_danger=="butterfly"}}
(#act2c_louder_butterfly)
{{/if}}

{{if _.a2_second_danger=="zombies"}}
(#act2c_louder_zombies)
{{/if}}

{{if _.a2_second_danger=="hitler"}}
(#act2c_louder_hitler)
{{/if}}

{{if _.a2_second_danger=="ignore"}}
(#act2c_louder_ignore)
{{/if}}

# act2c_louder_netflix

`bb({body:"normal", mouth:"normal", eyes:"shock"})`

b: На самом деле, изоляции и доставки еды недостаточно. Мы заразим курьера!

`bb({body:"one_up", mouth:"small"})`

b: Нам нужно переехать в безлюдную тундру и заказывать доставку еды дроном!

`bb({body:"two_up", mouth:"normal"})`

b: Но его потом всё равно нужно будет стерилизовать, чтобы избавиться от наших УНЫЛО-КИСЛЯЦКИХ бактерий.

`_.a2_attack_3 = "alone";`

`_.a2_hoodie_callback = "о синдроме унылой кислятины";`

(#act2d)

# act2c_louder_law

`bb({eyes:"judge", body:"judge_1", mouth:"normal"})`

(...201)

```
bb({body:"judge_2"}, 0);
sfx("gravel");
```

(...168)

`bb({body:"judge_1"}, 0)`

(...168)

`bb({body:"judge_2"}, 0)`

(...168)

`bb({body:"judge_1"}, 0)`

(...501)

b: МЕРЗКИЕ ИЗВРАЩЕНЕЦЫ должны быть приговорены к 72 часам заключения в средневековых устройствах для публичного унижения,

b: но только если они втайне не *наслаждаются* этим,

`bb({body:"scream_a_1"})`

b: ведь они МЕРЗКИЕ ИЗВРАЩЕНЦЫ!

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "о законе об отвратительности";`

(#act2d)

# act2c_louder_butterfly

`bb({body:"normal", mouth:"small", eyes:"suspect"})`

b: ЭФФЕКТ БАБОЧКИ, человек! Ты пьёшь из пластикового стаканчика?

`bb({body:"two_up", mouth:"normal", eyes:"shock"})`

b: ВЖУХ! НА СВАЛКЕ ИЗ НЕГО ОБРАЗУЕТСЯ ЯД, КОТОРЫЙ УБЬЁТ РЕБЁНКА!

`bb({body:"normal", mouth:"small", eyes:"suspect"})`

b: Ты потеешь и твоё сердце колотится?

`bb({body:"scream_a_1"})`

b: ВЖУХ! ИЗ-ЗА ТЕБЯ СИСТЕМА ЗДРАВООХРЕНЕНИЯ НЕ СПРАВИТСЯ С НАГРУЗКОЙ И МИЛЛИОНЫ УМРУТ!

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "об эффекте бабочки";`

(#act2d)

# act2c_louder_zombies

`bb({body:"normal", mouth:"small", eyes:"angry"})`

b: Тебя окружат зомби-тусоманы и ты услышишь:

`bb({body:"normal", mouth:"normal", eyes:"shock"})`

b: "ЛАААААЙКОВ! МЫ ХОТИМ ЛААААААААААЙКОВ!!!"

`bb({body:"scream_a_1"})`

b: Потом они ТЕБЯ УКУСЯТ и ты превратишься в {{PM ? 'БЕЗМОЗГЛОГО БРО' : 'ОТМОРОЖЕННУЮ ШЛЮХУ'}}!

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "о зомби-тусоманах";`

(#act2d)

# act2c_louder_hitler

`bb({body:"scream_a_1"})`

b: НАЦИСТЫ ВОЗВРАЩАЮТСЯ ПРЯМО СЕЙЧАС! Они идут строевым шагом и выкрикивают:

`bb({body:"one_up", mouth:"smile", eyes:"happy"})`

b: *Нам повезло, что "добрые люди" были заняты "развлечениями", "отдыхом" и "заботой о себе"!*

`bb({body:"point", mouth:"smile", eyes:"happy_r"})`

b: *Наш план о четвёртом рейхе идёт точно по расписанию!*

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "о Гитлере";`

(#act2d)

# act2c_louder_ignore

`bb({body:"normal", mouth:"normal", eyes:"normal_r"})`

b: Кстати, а тут *вообще есть* детектор угарного газа?!

`bb({body:"two_up", mouth:"small", eyes:"normal"})`

b: Что если мы дышим им *ПРЯМО СЕЙЧАС?*

`bb({body:"scream_a_1"})`

b: МЫ ДАЖЕ НЕ ЗАМЕТИМ, ЧТО УМИРАЕМ! МЫ ПРОСТО ПРЕКРАТИМ СУЩЕСТВОВАТЬ НАВСЕГ--

`_.a2_attack_3 = "harm";`

`_.a2_hoodie_callback = "об угарном газе";`

(#act2d)

# act2c_different_social

`bb({body:"normal", mouth:"normal", eyes:"sad"})`

b: А что, если мы в принципе *не способны* любить и быть любимыми?

`bb({body:"normal", mouth:"small", eyes:"sad_r"})`

b: Что, если в детстве в нас что-то непоправимо сломалось? Или этого чего-то в нас вообще не было...

`bb({body:"scream_a_1"})`

b: АААААА! МЫ НЕ ТАКИЕ! ПОЛОМАННЫЕ, ДЕФЕКТНЫЕ, ИСПОРЧЕННЫЕ--

`_.a2_attack_3 = "alone";`

(#act2d)

# act2c_different_moral

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: Что, если мы *сгнили* внутри?

`bb({body:"one_up", eyes:"sad"})`

b: У других есть внутреннее стремление делать добро. Но мы делаем "добро" только из чувства вины или стыда... если вообще делаем.

`bb({body:"normal", mouth:"small", eyes:"sad_r"})`

b: Что, если мы причиняем другим только страдания? И только вредим нашим близким...

`bb({body:"scream_a_1"})`

b: МЫ УЖАСНЫЕ! ПЛОХИЕ, НИКЧЁМНЫЕ, НЕ ДОСТОЙНЫЕ--

`_.a2_attack_3 = "bad";`

(#act2d)

# act2c_punch

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: Я не надумываю. Люди действительно *подмешивают* наркотики в напитки! Такое действительно случается!

`bb({eyes:"suspect"})`

b: Человек, у тебя болит голова? А твои конечности? Обмякли?! Это опасно!

`bb({body:"scream_a_1"})`

b: ААААААА! МЫ УМРЁМ! МЫ УМРЁМ! МЫ УМРЁЁЁЁЁЁЁЁЁЁ--

`_.a2_attack_3 = "harm";`

`_.a2_hoodie_callback = "о наркотиках в напитках";`

(#act2d)

# act2d

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({body:"attacked"});
attack("20p", _.a2_attack_1);
```

(...401)

```
hong({body:"attacked_2"});
attack("20p", _.a2_attack_2);
```

(...401)

```
hong({body:"attacked_3"});
attack("20p", _.a2_attack_3);
```

(...1001)

h: Б^ЛЯЯЯЯЯЯЯ^ТЬ!

h: ССССССУУУУУУКА!!!

`bb({body:"two_up", mouth:"smile", eyes:"happy"});`

b: Ура! Человек, я так {{AM ? 'рад' : 'рада'}}, что ты снова меня слышишь!

`bb({body:"normal", mouth:"small", eyes:"sad"})`

b: Почему ты меня {{PM ? 'игнорировал' : 'игнорировала'}}?

`hong({body:"facepalm"})`

h: {{AM ? 'Ты полный урод!' : 'Ты просто сволочь!'}}

`hong({body:"facepalm_2"})`

h: {{AM ? 'Слышал' : 'Слышала'}} легенду индейцев?

h: "Внутри {{PM ? 'каждого' : 'каждой'}} из нас борются {{AM ? 'два волка. Один – это надежда, другой – это отчаянье. Какой из волков победит? Тот, которого ты кормишь' : 'две волчицы. Одна – это надежда, другая – это отчаянье. Какая из волчиц победит? Та, которую ты кормишь'}}!"

```
hong({body:"facepalm_3"});
bb({eyes:"normal"});
```

h: Я {{PM ? 'пытался' : 'пыталась'}} *заморить* тебя голодом, {{AM ? 'чёртов садист' : 'чёртова садистка'}}!

`hong({body:"smile", mouth:"smile"})`

h: На^ху^й! Лучше вспомню позитивные аффирмации.

h: *Я заслуживаю счастья. Я {{PM ? 'способен' : 'способна'}} на многое. Я {{PM ? 'доволен' : 'довольна'}} своей внешностью. Я {{PM ? 'уникален' : 'уникальна'}}.*

`bb({eyes:"suspect"});`

[Как самовлюблённо!](#act2d_narcissist)

[Доказано, что аффирмации *не работают*.](#act2d_disproven)

[Это не легенда индейцев!](#act2d_racist)

# act2d_disproven

`bb({body:"point", mouth:"normal", eyes:"closed"})`

b: По факту, они оказывают *обратное действие* на людей с низкой самооценкой!

`bb({body:"one_up", mouth:"small", eyes:"normal"})`

b: В исследовании использовался двойной слепой метод, оно было проведено корректно и подтверждено многократно.

`bb({body:"two_up", mouth:"small", eyes:"normal_r"})`

b: Результаты: если у человека низкая самооценка, то от повторения аффирмаций он чувствует себя *хуже*,

b: чем если бы он вообще ничего не говорил!

`bb({body:"point", mouth:"normal", eyes:"closed"})`

b: Wood 2009, Psychological Science. Посмотри на Google Scholar, человек,

`bb({body:"scream_b_1"})`

b: И БОЛЬШЕ НЕ ВЕДИСЬ НА НЕНАУЧНУЮ ЧЕПУХУ!

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2d_narcissist

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: Чтобы расти как личность, тебе *необходимо* видеть свои недостатки.

`bb({body:"two_up", eyes:"suspect"})`

b: Освежитель воздуха не поможет в борьбе с плесенью! Плесень всё равно останется, только ты не будешь чувствовать её запах.

b: Если закрыть глаза на свои недостатки, то в будущем будет только хуже!

`bb({body:"chest", mouth:"smile", eyes:"closed"})`

b: К счастью, я, {{AM ? 'твой верный сторожевой волк' : 'твоя верная сторожевая волчица'}}, могу указать тебе на твои недостатки. И сейчас они-

`bb({body:"scream_b_1"})`

b: ВЕЗДЕ! В ТЕБЕ ВСЁ НЕПРАВИЛЬНО!

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2d_racist

`bb({body:"normal", mouth:"normal", eyes:"suspect"})`

b: Индейцы – это *реальные люди*, а не "древние мудрецы", которых ты используешь, чтобы *приукрасить* свою историю.

`bb({eyes:"suspect_r"})`

b: Ты превращаешь личностей и многогранную культуру в имиджевую фотографию! Это – "доброжелательный расизм"!

`bb({body:"scream_b_1"})`

b: ПРЕКРАСТИ БЫТЬ РАСИСТОМ, ГЛИСТА ХОДЯЧАЯ!

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2e

h: Б^ЛЯТ^Ь!!!

`hong({body:"yell", mouth:"yell"})`

h: Знаешь что? Ты {{AM ? '*иррационален!*' : '*иррациональна!*'}} 

h: Все знают, что эмоции иррациональны! Особенно страх!

`hong({body:"facepalm_2"})`

h: Ты бесполезный эволюционный рудимент, как аппендикс или зубы мудрости!

`hong({body:"yell", mouth:"yell"})`

h: Даже эта метафора о {{AM ? 'волке' : 'волчице'}} глупа! Ты просто кучка нейрохимикатов в моём мозгу!

`hong({body:"cross", mouth:"cross"})`

h: Мне незачем слушать такой бесполезный, иррациональный, несуществующий кусок говна!

`bb({eyes:"sad", MOUTH_LOCK:true})`

b: ...

[Это обидно, человек!](#act2e_hurtful)

[Я – эмоция. А эмоции не врут!](#act2e_valid)

[Мы *оба* "просто кучки нейрохимикатов"!](#act2e_rational)

# act2e_hurtful

`bb({body:"chest"})`

b: Я – это *часть* тебя, ты же знаешь... Когда ты говоришь такое, то наносишь вред {{PM ? '*самому себе*' : '*самой себе*'}}.

`bb({body:"scream_a_1"})`

b: Зачем ты вредишь {{PM ? '*самому себе*' : '*самой себе*'}}, человек? ПЕРЕСТАНЬ СЕБE ВРЕДИТЬ!

```
music(null);
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "harm");
```

(...2500)

(#act2f)

# act2e_rational

`bb({body:"normal", mouth:"normal", eyes:"normal_r"});`

b: Твоя глубинная мотивация – это дофамин. Твоя ярчайшая радость – это серотонин.

`bb({body:"one_up"});`

b: Твои воспоминания – это синаптические связи в мозгу. Твоё сознание – это электрические импульсы + помехи.

`bb({eyes:"normal", body:"normal"});`

b: Поэтому если *я* {{AM ? 'иррационален' : 'иррациональна'}} просто потому, что я "кучка нейрохимикатов"... тогда ты *тоже* {{PM ? 'иррационален' : 'иррациональна'}}!

`bb({body:"two_up", eyes:"shock"});`

b: А если мы *оба* иррациональны, тогда ты *никогда* не достигнешь своих целей!

`bb({body:"scream_a_1"})`

b: АААААА! МЫ НИЧТОЖНЫ! ПОЛОМАННЫЕ, ДЕФЕКТНЫЕ, ИСПОРЧЕННЫЕ--

```
music(null);
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2f)

# act2e_valid

`bb({body:"normal", mouth:"normal", eyes:"suspect"});`

b: Люди так говорят... Поэтому ты всегда {{PM ? 'должен' : 'должна'}} принимать свои эмоции.

`bb({eyes:"suspect_r"});`

b: Но ещё они говорят, что эмоции иррациональны и что им нельзя верить.

`bb({eyes:"angry"});`

b: Нас всё время водят за нос!

`bb({body:"scream_a_1"})`

b: НАС КОРМЯТ ПРОТИВОРЕЧИЯМИ, ЧТОБЫ СДЕЛАТЬ ЗАВИСИМЫМИ ОТ ИНДУСТРИИ ЛИЧНОСТНОГО РОСТА!

```
music(null);
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "harm");
```

(...2500)

(#act2f)

# act2f

`hong({body:"defeated", MOUTH_LOCK:true});`

h: ...

h: Ненавижу! НЕНАВИЖУ БОЛЬ! НЕНАВИЖУ *ТЕБЯ!*

h: Я не могу тебя задобрить.

h: У меня не получается тебя игнорировать!

h: Я не могу с тобой бороться!

`bb({eyes:"suspect"});`

h: Что бы я ни {{PM ? 'делал' : 'делала'}}, я не могу избавиться от те--

`bb({body:"cry_1"});`

b: ПОТОМУ ЧТО ТЫ {{PM ? '*НЕ ДОЛЖЕН*' : '*НЕ ДОЛЖНА*'}} ОТ МЕНЯ ИЗБАВЛЯТЬСЯ!

`bb({body:"cry_2"});`

b: Подумай, человек, что *я* чувствую?!

`bb({body:"cry_4", mouth:"cry", eyes:"cry"})`

b: Я изо всех сил стараюсь быть {{AM ? 'твоим верным сторожевым псом' : 'верной сторожевой собакой для тебя'}}, но ты видишь во мне только {{AM ? 'Злого Серого Волка' : 'Страшную Серую Волчицу'}}!

b: Поэтому я *усерднее* стараюсь предупреждать тебя об опасности! *Подробнее* об опасности! *Другой* опасности!

`bb({eyes:"cry_2"})`

b: Но как бы я ни {{AM ? 'старался' : 'старалась'}} тебя защитить, ты *всё равно* видишь во мне врага!

`bb({body:"cry_5"});`

b: ЧТО я делаю не так?!

`bb({body:"cry_2"});`

b: Я *знаю*, я плохо делаю свою работу. Но я *стараюсь*, человек!

`bb({body:"cry_3"});`

b: ...я стараюсь.

`bb({body:"cry_6", mouth:"right", eyes:"cry_r_1"});`

b: Ты не {{PM ? 'обязан' : 'обязана'}} мне подчиняться или соглашаться со мной. Ты {{PM ? '*не обязан*' : '*не обязана*'}} меня любить.

`bb({eyes:"cry_r_2"});`

b: Я... просто хочу... чтобы ты {{PM ? 'был *терпелив*' : 'была *терпелива*'}} ко мне.

`bb({eyes:"cry_r_3"});`

b: Я хочу, чтобы ты {{PM ? 'побыл' : 'побыла'}} со мной немного, вместо того, чтобы отворачиваться и--

```
bb({eyes:"cry_r_4"});
hong({body:"listen"});
```

r: Привет

```
hong({body:"look"});
Game.clearText();
publish("act2-in-2");
publish("hp_hide");
music('party1', {volume:0.4, fade:2});
```

(...2000)

```
publish("act2",["party_hunter",2]);
Game.WORDS_HEIGHT_BOTTOM = 230;
```

r: Ты что, сражаешься {{PM ? 'сам' : 'сама'}} с собой?

```
publish("act2",["party_hunter",3]);
publish("act2",["party_hong",13]);
```

h2: Эм... Это так очевидно?

```
publish("act2",["party_hunter",4]);
publish("act2",["party_hong",14]);
```

r: Ты бормочешь себе под нос что-то {{_.a2_hoodie_callback}} или вроде того.

```
publish("act2",["party_hunter",13]);
publish("act2",["party_hong",15]);
sfx("rustle", {volume:0.6});
setTimeout(function(){
	publish("act2",["party_hong",16]);
	sfx("concrete_step3", {volume:0.6});
},401);
setTimeout(function(){
	publish("act2",["party_hong",17]);
	sfx("concrete_step4", {volume:0.6});
},801);
```

h2: ааааа! какой кринж!

```
publish("act2",["party_hunter",7]);
publish("act2",["party_hong",18]);
sfx("squeak");
```

r: {{PM ? 'Мой друг, ты не один!' : 'Моя подруга, ты не одна!'}} Тревожность есть у многих!

```
publish("act2",["party_hunter",5]);
publish("act2",["party_hong",19]);
```

{{if _.act1_ending=="fight" && PM}}
r: Мне вчера рассказали, что у кого-то в общаге случился нервный срыв и он разбил свой телефон!
{{/if}}

{{if _.act1_ending=="fight" && !PM}}
r: Мне вчера рассказали, что у кого-то в общаге случился нервный срыв и она разбила свой телефон!
{{/if}}

{{if _.act1_ending=="flight" && PM}}
r: Мне вчера рассказали, как кто-то прямо на улице свернулся в клубок, как броненосец, и плакал!
{{/if}}

{{if _.act1_ending=="flight" && !PM}}
r: Мне вчера рассказали, как кто-то прямо на улице свернулся в клубок, как броненосец, и плакала!
{{/if}}

```
publish("act2",["party_hunter",2]);
```

r: Я знаю, каково это слышать животное в своей голове...

```
publish("act2",["party_hunter",8]);
```

r: Мы *все* их слышим. Поэтому я и устраиваю вечеринки каждые выходные: чтобы забыть про страх, забыть про животных.

```
publish("act2",["party_hunter",9]);
publish("act2",["party_hong",20]);
```

h2: но моя тревожность...

```
publish("act2",["party_hunter",2]);
publish("act2",["party_hong",21]);
```

r: Я {{PM ? 'была' : 'был'}} как ты! Но потом я {{PM ? 'нашла' : 'нашёл'}} уловку, которая заставила этот голос замолчать навсегда...

```
publish("act2",["party_hunter",3]);
Game.clearText();
music(null, {fade:1});
```

(...2001)

```
publish("act2",["party_hunter",10]);
publish("act2",["party_hong",22]);
sfx("rustle");
```

(...2501)

```
publish("act2",["party_hunter",10]);
publish("act2",["party_hong",23]);
sfx("rustle2");
```

(...1001)

```
publish("act2",["party_hunter",11]);
```

r: По моему фирменному рецепту! Эта штука мощнее, чем... ну, всё незапрещённое.

```
publish("act2",["party_hunter",12]);
publish("act2",["party_hong",24]);
```

r: Пей до дна, с^учка^а!

```
hong({body:"hold"});
bb({body:"normal", mouth:"small", eyes:"wat"});
Game.clearText();
Game.WORDS_HEIGHT_BOTTOM = -1;
publish("act2-out-3");
publish("hp_show");
```

(...3500)

[О, нет!](#act2g_1) `Game.OVERRIDE_CHOICE_LINE=true`

[Это плохая копинг-стратегия.](#act2g_2) `Game.OVERRIDE_CHOICE_LINE=true`

[Не принимай напитки от незнакомцев.](#act2g_3) `Game.OVERRIDE_CHOICE_LINE=true`

# act2g_1

b: О--

(#act2g)

# act2g_2

b: Э--

(#act2g)

# act2g_3

b: Н--

(#act2g)

# act2g

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("40p", "harm");
```

(...2000)

```
hong({body:"forward", mouth:"forward"});
bb({body:"frazzled", mouth:"frazzled", eyes:"frazzled"});
```

h: Ммммммм! Что за изысканная палитра!

h: Насыщенный аромат "выруби мозг" с тонким послевкусием "никогда больше ничего не чувствуй"!

b: Это плохо, человек! Очень, очень плохо!

[Зависимость начинается *именно так*!](#act2h_opt1) `Game.OVERRIDE_CHOICE_LINE=true`

[Я {{AM ? '*знал*!' : '*знала*'}}, что с {{PM ? 'ней' : 'ним'}} что-то не то!](#act2h_opt3) `Game.OVERRIDE_CHOICE_LINE=true`

[{{PM ? 'Она могла' : 'Он мог'}} подмешать туда наркотики!](#act2h_opt2) `Game.OVERRIDE_CHOICE_LINE=true`


# act2h_opt1

b: Зависимость начина--

(#act2h)

# act2h_opt2

b: {{PM ? 'Она могла' : 'Он мог'}} подмеш--

(#act2h)

# act2h_opt3

b: Я {{AM ? '*знал*' : '*знала*'}}, чт--

(#act2h)

# act2h

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("40p", "harm");
```

(...2000)

```
hong({body:"back", mouth:"back"});
bb({body:"panicked", mouth:"panicked", eyes:"panicked"});
```

h: Вкусно! И *дешевле*, чем психотерапия!

b: ЧЕЛОВЕК, ПОЖАЛУЙСТА, ОСТАНОВИСЬ!

h: Хехехе!

h: Что *ты* теперь сделаешь, {{AM ? 'урод' : 'сволочь'}}?

b: Прости меня, человек...

b: Я {{AM ? 'вынужден' : 'вынуждена'}} использовать свою ОСОБУЮ АТАКУ

```
bb({body:"special_a"});
music('battle', {volume:0.5});
```

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_harm"`

[](#act2h_attack) `_.SPECIAL_ATTACK="harm"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_alone"`

[](#act2h_attack) `_.SPECIAL_ATTACK="alone"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_bad"`

[](#act2h_attack) `_.SPECIAL_ATTACK="bad"; Game.OVERRIDE_CHOICE_LINE=true`

# act2h_attack

```
bb({body:"special_b_1"});
hong({body:"forward", mouth:"forward"});
sfx("charging");
```

h: Это что ещё за хрень?

h: Ты будешь тявкать на меня с ещё большей *тупостью*, чтобы--

```
bb({body:"special_c"});
sfx("hadouken");
```

(...901)

(#act2i)

# act2i

```
publish("hide_tabs");
publish("show_special_attack");
Game.FORCE_CANT_SKIP = true;
music(null);
stopAllSounds();
```

(...5000)

```
publish("show_tabs");
hong({ body:"final", mouth:"final" });
bb({ body:"normal", mouth:"normal", eyes:"sad" });
attack("100p", _.SPECIAL_ATTACK);
Game.FORCE_CANT_SKIP = false;
setTimeout(function(){
    publish("remove_special_attack");
},30);
```

(...2500)

h: ЧТО ЭТО Б^ЛЯТ^Ь БЫЛО?!

b: Прости. Я {{AM ? 'должен был' : 'должна была'}} показать тебе последствия.

{{if _.SPECIAL_ATTACK=="harm" && PM}}
h: Я *ВИДЕЛ* СВОЙ ТРУП. Я *ЧУВСТВОВАЛ*, КАКОВО ЭТО БЫТЬ *МЁРТВЫМ* ПО-НАСТОЯЩЕМУ.
{{/if}}

{{if _.SPECIAL_ATTACK=="harm" && !PM}}
h: Я *ВИДЕЛА* СВОЙ ТРУП. Я *ЧУВСТВОВАЛА*, КАКОВО ЭТО БЫТЬ *МЁРТВОЙ* ПО-НАСТОЯЩЕМУ.
{{/if}}

{{if _.SPECIAL_ATTACK=="alone" && PM}}
h: Я *ВИДЕЛ*, КАК ВСЕ МЕНЯ ПРЕЗИРАЮТ. Я *СЛЫШАЛ*, ЧТО ОНИ ГОВОРЯТ ОБО МНЕ.
{{/if}}

{{if _.SPECIAL_ATTACK=="alone" && !PM}}
h: Я *ВИДЕЛА*, КАК ВСЕ МЕНЯ ПРЕЗИРАЮТ. Я *СЛЫШАЛА*, ЧТО ОНИ ГОВОРЯТ ОБО МНЕ.
{{/if}}

{{if _.SPECIAL_ATTACK=="bad" && PM}}
h: Я *СЛЫШАЛ* КАК ЛОМАЛИСЬ ЕЁ РЁБРА. Я *ВИДЕЛ* ЕЁ КРОВЬ.
{{/if}}

{{if _.SPECIAL_ATTACK=="bad" && !PM}}
h: Я *СЛЫШАЛА* КАК ЛОМАЛИСЬ ЕЁ РЁБРА. Я *ВИДЕЛА* ЕЁ КРОВЬ.
{{/if}}

b: Прости, человек.

n: *ДОВЕДИ {{PM ? 'ЕГО' : 'ЕЁ'}}*

[{БИТЬ – Ударить {{PM ? 'организаторшу' : 'организатора'}} вечеринки.}](#act2j_fight) `Game.OVERRIDE_CHOICE_LINE=true`

[{БЕЖАТЬ – Давай выбираться отсюда.}](#act2j_flight) `Game.OVERRIDE_CHOICE_LINE=true`

# act2j_fight

`bb({ eyes:"angry" });`

b: {{PM ? 'Эта психопатка хотела' : 'Этот психопат хотел'}} использовать тебя в своих интересах!

b: {{PM ? 'Она пыталась' : 'Он пытался'}} подчинить тебя, сделав {{PM ? 'таким же упоротым как и она сама!' : 'такой же упоротой как и он сам!'}}

`bb({ body:"yell_angry_1" });`

b: Ударь {{PM ? 'эту сволочь' : 'этого урода'}}! Выбей из {{PM ? 'неё' : 'него'}} всю дурь!

`bb({ body:"final_1" });`

b: БЕЙ БЕЙ БЕЙ БЕЙ БЕЙ БЕЙ БЕЙ БЕЙ БЕЙ БЕЙ БЕЙ БЕЙ БЕЙ БЕЙ БЕЙ БЕЙ БЕЙ БЕЙ БЕЙ БЕЙ БЕЙ БЕЙ--

`_.a2_ending = "fight";`

(#act2k)

# act2j_flight

b: Я {{AM ? '*предупреждал*' : '*предупреждала*'}}, что у тусовщиков внутри полно проблем. Они разрушают себя, чтобы убежать от боли!

`bb({ body:"yell_1" });`

b: Они опасны, потому что развращают *тебя*! Они заражают токсичным образом жизни! Нам нужно бежать отсюда!

`bb({ body:"final_1" });`

b: БЕГИ БЕГИ БЕГИ БЕГИ БЕГИ БЕГИ БЕГИ БЕГИ БЕГИ БЕГИ БЕГИ БЕГИ БЕГИ БЕ--

`_.a2_ending = "flight";`

(#act2k)

# act2k

```
Game.clearText();
publish("act2-in-4");
publish("hp_hide");
music('party1', {volume:0.6, fade:1.5});
```

(...2001)

```
publish("act2",["party_hong",26]);
sfx("slide");
```

(...1001)

```
publish("act2",["party_hunter",14]);
Game.WORDS_HEIGHT_BOTTOM = 230;
```

r: С тобой всё в порядке?

`publish("act2",["party_hunter",13]);`

{{if _.a2_ending=="fight"}}
(#act2k_fight)
{{/if}}

{{if _.a2_ending=="flight"}}
(#act2k_flight)
{{/if}}

# act2k_fight

```
Game.clearText();
publish("act2",["party_hunter",21]);
publish("act2",["party_hong",33]);
music(null);
sfx("hit");
```

(...1000)

```
sfx("record_scratch");
publish("act2",["party_hunter",22]);
publish("act2",["party_hong",34]);
publish("act2",["dee",6]);
publish("act2",["dum",6]);
```

r: Т-ты...

```
publish("act2",["party_hunter",23]);
publish("act2",["party_hong",35]);
publish("act2",["dee",5]);
publish("act2",["dum",5]);
music('party1', {volume:0.6, fade:6});
```

r: {{PM ? '*клёвый*!' : '*клёвая*!'}}

r: Приходи на вечеринку в следующие выходные{{PM ? ', дружок!' : '!'}}

```
publish("act2",["party_hunter",19]);
publish("act2",["party_hong",36]);
```

h2: ладно пока, чао, адьёс, аревуар

r: Сегодня животное взяло верх, но в следующий раз я намешаю тебе кое-что помощнее!

h2: ариведерчи, бай

r: Ты и я покажем зверю, кто здесь хозяин!

(#act2k_end)

# act2k_flight

`publish("act2",["party_hong",36]);`

h2: мне нужно бежать

`publish("act2",["party_hunter",16]);`

r: Чёрт! Животное победило сегодня, да?

`publish("act2",["party_hunter",15]);`

h2: не не, просто, эм, нужно бежать марафон. быстро.

`publish("act2",["party_hunter",19]);`

r: Приходи на вечеринку в следующие выходные, {{PM ? 'дружок' : 'подруга'}}. Я намешаю тебе кое-что помощнее.

h2: ок спасибо {{PM ? 'должен' : 'должна'}} успеть успеть успеть успеть

r: Ты и я покажем зверю, кто здесь хозяин!

(#act2k_end)

# act2k_end

```
Game.clearText();
publish("act2-out-5");
publish("act2-outro", ["end1"]);
music("hum", {fade:2, volume:0.6});
Game.WORDS_HEIGHT_BOTTOM = -1;
```

(...2500)

```
publish("act2", ["act2_end",2]);
sfx("whoosh");
```

(...1000)

b: Человек! Ты в порядке?!

```
publish("act2", ["act2_end","next"]);
```

b: Ещё *чуть-чуть* и мы бы--

```
Game.clearText();
publish("act2", ["act2_end","next"]);
music(null);
sfx("squeak");
```

(...1500)

```
publish("act2", ["act2_end","next"]);
sfx("hit");
```

(...1000)

h: Я пойду на вечеринку в следующие выходные!

h: Я не только *побью* тебя...

h: я *убью* тебя ^нахуй^!

```
Game.clearText();
publish("act2", ["act2_end","next"]);
sfx("concrete_step1");
````

(...901)

```
publish("act2", ["act2_end","next"]);
sfx("concrete_step2", {volume:0.8});
```

(...901)

```
publish("act2", ["act2_end","next"]);
sfx("concrete_step3", {volume:0.5});
```

(...901)

`sfx("concrete_step4", {volume:0.25});`

(...3000)

`_.INTERMISSION_STAGE = 2;`

(#intermission)
