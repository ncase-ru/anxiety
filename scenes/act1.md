# act1

```
SceneSetup.act1();
```

(...300)

n: А ЭТО {{PM ? 'ЕГО' : 'ЕЁ'}} ТРЕВОГА

n: _ТЫ_ – {{PM ? 'ЕГО' : 'ЕЁ'}} ТРЕВОГА


{{if window.localStorage.continueChapter=="replay"}}
(#act1_replay)
{{/if}}

{{if window.localStorage.continueChapter!="replay"}}
(#act1_normal)
{{/if}}



# act1_replay

`hong({mouth:"0_neutral", eyes:"0_neutral"})`

h: Мы снова здесь?

`hong({eyes:"0_neutral"})`

n: ТВОЯ РАБОТА – ЗАЩИТИТЬ ТВОЕГО ЧЕЛОВЕКА ОТ *ОПАСНОСТИ*

`bb({eyes:"look", mouth:"small_lock"})`

n: НА САМОМ ДЕЛЕ, ПЕРЕПРОХОЖДЕНИЕ ИГРЫ МОЖЕТ БЫТЬ *ОПАСНО*

n: БЫСТРЕЕ, ПРЕДУПРЕДИ {{PM ? 'ЕГО' : 'ЕЁ'}}!

```
sfx("squeak");
bb({body:"squeeze_talk"});
hong({body:"0_squeeze"});
```

b: Человек! Слушай, мы в опасности! Игрок...

[...будет снова нас мучить!](#act1_replay_torture)

[...не найдёт альтернативной концовки!](#act1_replay_alternate)

[...создаст лудонарративный диссонанс!](#act1_replay_dissonance)

# act1_replay_torture

```
window.HACK_REPLAY = JSON.parse(localStorage.act4);
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

{{if window.HACK_REPLAY.act1_ending=="fight" && PM}}
b: Он заставит нас свернуться в клубок и плакать!
{{/if}}

{{if window.HACK_REPLAY.act1_ending=="fight" && !PM}}
b: Она заставит нас свернуться в клубок и плакать!
{{/if}}

{{if window.HACK_REPLAY.act1_ending=="flight" && PM}}
b: Он доведёт нас до панической атаки, чтобы мы разбили наш телефон!
{{/if}}

{{if window.HACK_REPLAY.act1_ending=="flight" && !PM}}
b: Она доведёт нас до панической атаки, чтобы мы разбили наш телефон!
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="fight" && PM}}
b: Он заставит нас *НЕ* бить организаторшу вечеринки!
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="fight" && !PM}}
b: Она заставит нас *НЕ* бить организатора вечеринки!
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="flight" && PM}}
b: Он заставит нас ударить организаторшу вечеринки!
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="flight" && !PM}}
b: Она заставит нас ударить организатора вечеринки!
{{/if}}

{{if window.HACK_REPLAY.a3_ending=="jump"}}
h: Но... В этот раз у нас хотя бы появится шанс не прыгать с кры--
{{/if}}

{{if window.HACK_REPLAY.a3_ending=="walkaway" && PM}}
b: ОН ЗАСТАВИТ НАС СПРЫГНУТЬ С КРЫШИ.
{{/if}}

{{if window.HACK_REPLAY.a3_ending=="walkaway" && !PM}}
b: ОНА ЗАСТАВИТ НАС СПРЫГНУТЬ С КРЫШИ.
{{/if}}

`bb({body:"fear"});`

b: ВСЕ ЭТИ УЖАСНЫЕ СОБЫТИЯ ПРОИЗОЙДУТ С НАМИ, И ТОГДА МЫ--

(#act1_replay_end)


#act1_replay_alternate

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

h: Знаешь, история ведь *плюс-минус* та же. Ветвление в диалогах и две концовки в каждой главе не влияют на--

`bb({body:"fear"});`

b: Игрок расстроится, закроет браузер, наш код исчезнет, и тогда мы--

(#act1_replay_end)


# act1_replay_dissonance

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

h: Лудо-что?

`bb({eyes:"normal"});`

b: Эта игра про то, как можно *ВЫБРАТЬ* здоровое взаимодействие со своей тревогой.

`bb({eyes:"normal_right"});`

b: Но перепрохождение всё равно приведёт к здоровому взаимодействию, подразумевая, что *ВЫБОР* не имеет значения.

`bb({eyes:"narrow_eyebrow"});`

b: Что создаёт противоречие между посылом игры и её механикой.

`bb({eyes:"fear"});`

b: Таким образом, рвутся невидимые нити, поддерживающие целостность этой захватывающей игровой вселенной.

`bb({body:"fear"});`

b: Игровая вселенная разрушится и мы--

(#act1_replay_end)


# act1_replay_end

`bb({body:"panic"})`

b: УМРЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁМ

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.clearText();
```

(...1001)

```
bb({body:"laugh"});
hong({body:"laugh"});
Game.clearText();
sfx("laugh");
```

(...5001)

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({body:"0_sammich"});
```

h: Окей, давай вернёмся в роли.

```
Game.clearText();
```

n4: (ПОЗВОЛЬ СЫГРАТЬ _СВОЕЙ_ ТРЕВОЖНОСТИ! БЛА БЛА БЛИЖЕ ВСЕГО К _ТВОЕМУ_ НУ ТЫ ЗНАЕШЬ)

```
sfx("squeak");
hong({body:"0_squeeze"});
bb({body:"squeeze"});
```

(#act1_normal_choice)



# act1_normal

`hong({mouth:"0_neutral", eyes:"0_annoyed"})`

h: {{AM ? 'Мой волк вернулся' : 'Моя волчица вернулась'}}. Фантаааааааастика.

`hong({eyes:"0_neutral"})`

n: ТВОЯ РАБОТА – ЗАЩИТИТЬ ТВОЕГО ЧЕЛОВЕКА ОТ *ОПАСНОСТИ*

`bb({eyes:"look", mouth:"small_lock"})`

n: НА САМОМ ДЕЛЕ, {{PM ? 'ОН' : 'ОНА'}} В *ОПАСНОСТИ* ПРЯМО СЕЙЧАС ИЗ-ЗА ЭТОГО СЭНДВИЧА

n: БЫСТРЕЕ, ПРЕДУПРЕДИ {{PM ? 'ЕГО' : 'ЕЁ'}}!

```
sfx("squeak");
bb({body:"squeeze_talk"});
hong({body:"0_squeeze"});
```

b: Человек! Слушай, мы в опасности! Опасность в том, что...

`bb({body:"squeeze"})`

n4: (ПОЗВОЛЬ СЫГРАТЬ _СВОЕЙ_ ТРЕВОЖНОСТИ! ВЫБЕРИ ВАРИАНТ, КОТОРЫЙ БЛИЖЕ ВСЕГО К _ТВОИМ_ СТРАХАМ)

(#act1_normal_choice)

# act1_normal_choice

[Ты опять ешь в одиночестве!](#act1a_alone) `bb({body:"squeeze_talk"})`

[Ты ничего не делаешь, пока ешь!](#act1a_productive) `bb({body:"squeeze_talk"})`

[Белый хлеб вреден для твоего здоровья!](#act1a_bread) `bb({body:"squeeze_talk"})`

# act1a_alone

```
bb({body:"normal", mouth:"small", eyes:"narrow"});
hong({body:"0_sammich"});
```

b: Разве ты не знаешь, что одиночество увеличивает риск преждевременной смерти точно так же, как и курение 15 сигарет в день?-

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({mouth:"normal", eyes:"normal_right"})`

b: (Джулианна Холт-Лунстад, 2010 год, медицинский журнал PLoS)

`hong({eyes:"0_annoyed"})`

h: Эм, спасибо за ссылку, но--

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({body:"fear", mouth:"normal", eyes:"fear"})`

b: Это значит, что если мы *прямо сейчас* никого себе не найдём, то мы-

`bb({body:"panic"})`

b: УМРЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁМ

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "alone");
publish("hp_show");
```

(...2500)

`_.fifteencigs = true`

n: ТЫ {{PM ? 'ИСПОЛЬЗОВАЛ' : 'ИСПОЛЬЗОВАЛА'}} *СТРАХ БЫТЬ {{PM ? 'НЕПРИНЯТЫМ' : 'НЕПРИНЯТОЙ'}}*

(#act1b)

# act1a_productive

```
bb({body:"normal", mouth:"small", eyes:"normal"});
hong({body:"0_sammich"});
```

b: Открой ноут и начни работать прямо сейчас!

`hong({eyes:"0_annoyed"})`

h: Я не хочу, что бы крошки попали на клавиа--

```
bb({mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Если мы не делаем ничего полезного для общества, то мы – общественные паразиты!

b: Общество пойдёт к доктору, который пропишет лекарство от паразитов и тогда мы--

```
bb({body:"panic", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: УМРЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁМ

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "bad");
publish("hp_show");
```

(...2500)

`_.parasite = true`

n: ТЫ {{PM ? 'ИСПОЛЬЗОВАЛ' : 'ИСПОЛЬЗОВАЛА'}} *СТРАХ ОКАЗАТЬСЯ {{PM ? 'ПЛОХИМ' : 'ПЛОХОЙ'}}*

(#act1b)

# act1a_bread

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich", eyes:"0_annoyed"});
```

h: Можно ли этому вер--

```
bb({body:"fear", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Переработанная пшеница вызовет скачок сахара в крови, который может привести к ампутации конечностей. Мы-

`bb({body:"panic"})`

b: УМРЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁМ

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "harm");
publish("hp_show");
```

(...2500)

`_.whitebread = true`

n: ТЫ {{PM ? 'ИСПОЛЬЗОВАЛ' : 'ИСПОЛЬЗОВАЛА'}} *СТРАХ ПОЛУЧИТЬ ВРЕД*

(#act1b)

# act1b

n: ЭТО НЕВЕРОЯТНО ЭФФЕКТИВНО

`bb({mouth:"smile", eyes:"smile"});`

b: Видишь, человек, я – {{AM ? 'твой верный сторожевой волк' : 'твоя верная сторожевая волчица'}}!

`bb({body:"pride_talk"});`

b: Чувства не врут! Доверься чуйке!

`bb({body:"pride"});`

n: СНИЗЬ ЭНЕРГИЮ СВОЕГО ЧЕЛОВЕКА ДО НУЛЯ

n: ЧТОБЫ ЗАЩИТИТЬ {{PM ? 'ЕГО' : 'ЕЁ'}} ФИЗИЧЕСКИЕ + СОЦИАЛЬНЫЕ + ДУХОВНЫЕ ПОТРЕБНОСТИ, ИСПОЛЬЗУЙ:

n: СТРАХ *ПОЛУЧИТЬ ВРЕД* #harm#

n: СТРАХ *БЫТЬ {{PM ? 'НЕПРИНЯТЫМ' : 'НЕПРИНЯТОЙ'}}* #alone#

n: И СТРАХ *ОКАЗАТЬСЯ {{PM ? 'ПЛОХИМ' : 'ПЛОХОЙ'}}* #bad#

`Game.OVERRIDE_TEXT_SPEED = 1.25;`

n4: (PRO-РЕЖИМ: ВЫБИРАЙ ТО, ЧТО ЗАДЕНЕТ ТВОИ САМЫЕ ГЛУБИННЫЕ И ПОТАЁННЫЕ СТРАХИ!)

h: ...

```
hong({body:"putaway"});
sfx("rustle");
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

(...1000)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h: Проверю телефон.

```
sfx("rustle2");
hong({body:"phone1", mouth:"neutral", eyes:"neutral"})
```

n: ЗАЩИТИ СВОЕГО ЧЕЛОВЕКА

n: ОТ МИРА. ОТ ДРУГИХ ЛЮДЕЙ. ОТ {{PM ? 'НЕГО САМОГО' : 'НЕЁ САМОЙ'}}.

n: УДАЧИ

(...500)

`Game.clearText()`

(...500)

(#act1c)

# act1c

`music('battle', {volume:0.5})`

n: РАУНД #1: *БОЙ!*

`bb({body:"normal", mouth:"normal", eyes:"normal"});`

h: В чате пишут, что в эти выходные будет вечеринка.

`bb({eyes:"uncertain"});`

b: Разве {{PM ? 'эта ненормальная' : 'этот чудик'}} не закатывает вечеринки *каждые* выходные?

`bb({eyes:"uncertain_right"});`

b: От какого чувства {{PM ? 'она' : 'он'}} пытается убежать? С {{PM ? 'ней' : 'ним'}} явно что-то не то.

`hong({eyes:"surprise"});`

h: Меня пригласили!

`bb({eyes:"fear", mouth:"normal"});`

b: Тогда..

[ответь "да" – ты всё ещё {{PM ? 'один' : 'одна'}}!](#act1c_loner)

[ответь "нет" – там буду наркотики!](#act1c_drugs)

[не отвечай ничего – мы всегда всё портим.](#act1c_sad)

# act1c_loner

{{if _.fifteencigs}}
b: Пятнадцать сигарет в день, человек! Пятнадцать!!!
{{/if}}

{{if !_.fifteencigs}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if !_.fifteencigs}}
b: Мы умрём от одиночества! Оно убьёт нас и никто не придёт на наши похороны!
{{/if}}

{{if !_.fifteencigs}}
b: Наш прах попадёт в океан, его съест кит, и мы станем...
{{/if}}

{{if !_.fifteencigs}}
b: ... КИТОВЬЕЙ КАКАШКОЙ!
{{/if}}

{{if !_.fifteencigs}}
`_.whalepoop = true`
{{/if}}

(...500)

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

{{if !_.fifteencigs}}
b: Так что мы должны пойти на эту вечеринку!
{{/if}}

{{if _.parasite}}
b: Только захвати ноут, чтобы мы смогли работать и не быть общественными паразитами.
{{/if}}

{{if _.whitebread}}
b: Но только если там не будет БЕЛОГО ХЛЕБА
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: АААААА! Если это заставит тебя заткнуться, то ладно!

h: Я отвечу: "Да".

{{if _.whalepoop}}
b: Китовья какашка, человек! Китовья какашка!
{{/if}}

`_.partyinvite="yes"`

(#act1d)

# act1c_drugs

`bb({mouth:"small", eyes:"fear"});`

{{if _.whitebread}}
b: или ещё хуже... БЕЛЫЙ ХЛЕБ
{{/if}}

{{if _.whitebread}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if _.whitebread}}
b: Нас там накачают таким количеством наркотиков и белого хлеба, что наш распухший жирный труп не пролезет в печь для кремации!
{{/if}}

{{if !_.whitebread}}
b: Нас там накачают таким количеством наркотиков, что ребята из ритуального агентства удивятся, почему наше тело *уже* забальзамировалось!
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

{{if _.parasite}}
b: А ещё, нам нельзя тусоваться, потому то нам надо работать! Если мы не работаем, то мы мерзкие общественные паразиты!
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: АААААА! Если это заставит тебя заткнуться, то ладно!

h: Я отвечу: "Нет".

`_.partyinvite="no"`

(#act1d)

# act1c_sad

`bb({eyes:"uncertain_right", mouth:"normal"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

{{if _.fifteencigs}}
b: Потому что мы только и делаем, что ноем как одиночество увеличивает риск смерти на 15 сигарет в день.
{{/if}}

{{if _.parasite}}
b: Потому что на вечеринках мы только беспокоимся о работе, а не веселимся!
{{/if}}

{{if _.whitebread}}
b: Потому что мы только и делаем, что беспокоимся о том, как нездоровая пища может нас убить.
{{/if}}

```
bb({mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"lookaway"});
```

h: Интересно, почему...

`hong({eyes:"neutral"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: Поэтому, если мы пойдём, то испортим всем праздник! Но если мы откажемся, то всё равно испортим всем праздник!

`bb({body:"fear", eyes:"fear"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: МЫ ТОЛЬКО И ДЕЛАЕМ, ЧТО ПОРТИМ ЖИЗНЬ ДРУГИМ ЛЮДЯМ! МЫ ДОЛЖНЫ ЧУВСТВОВАТЬ СЕБЯ ПЛОХИМИ!

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

`hong({mouth:"anger", eyes:"anger"});`

h: Ох... Если это заставит тебя заткнуться, то ладно.

h: Я не буду ничего отвечать.

`_.partyinvite="ignore"`

(#act1d)

# act1d

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"annoyed"});
```

h: Чат слишком навязчив. Нужно что-то поспокойнее.

`hong({eyes:"neutral"});`

h: Зайду в соцсеточку.

`bb({eyes:"look"});`

[Посмотри на эту ужасную новость!](#act1d_news)

[Не на *нас* ли они намекают в комментариях?](#act1d_subtweet)

[О, GIF-ка с котиком, лакающем молочко](#act1d_milk)

# act1d_news

```
bb({eyes:"pained1"});
music(null, {fade:2});
```

b: Такое чувство, что весь мир просто разваливается на части...

```
bb({eyes:"pained2"});
hong({mouth:"sad", eyes:"sad"});
```

b: Как будто нам всем скоро придёт конец. Что мы обречены и ничего не сможем с этим сделать. Ты тоже это чувствуешь?

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
bb({mouth:"shut"});
```

b: ...

`bb({mouth:"smile", eyes:"smile"});`

b: Давай репостнем!

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

`_.badnews=true`

```
music('battle', {volume:0.5});
hong({mouth:"anger", eyes:"anger"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Океееей, я репостну! Только, пожалуйста, успокойся!

`hong({mouth:"neutral", eyes:"annoyed"});`

h: К чёрту, загляну в Telegram.

(#act1e)


# act1d_subtweet

`bb({eyes:"fear"});`

b: Так много лайков... И репостов.

`hong({eyes:"annoyed"});`

h: Но что, если эти сплетни не о нас?

`bb({eyes:"narrow", mouth:"small"});`

b: А что, если они все обсуждают нас за нашей спиной

h: Они не--

`bb({body:"fear", eyes:"fear", mouth:"normal"});`

b: ПРЯМО ЗА НАШЕЙ СПИНОЙ

`hong({eyes:"sad", mouth:"sad"});`

h: Я п--

`bb({eyes:"narrow", mouth:"small"});`

b: *но что, если*

h: Т--

`bb({eyes:"narrow_eyebrow"});`

b: *если они*

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
hong({mouth:"shut"});
```

h: ...

(...1000)

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`_.subtweet=true`

```
hong({mouth:"anger", eyes:"annoyed"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: Нафиг! Загляну в Telegram.

(#act1e)

# act1d_milk

`hong({mouth:"smile", eyes:"neutral"});`

h: А это довольно мило! Я поде...

```
hong({mouth:"shock", eyes:"shock"});
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.8;
```

b: КОШКИ НЕ ПЕРЕВАРИВАЮТ МОЛОКО!

b: МЫ УЖАСНЫЕ ЛЮДИ, ПОТОМУ ЧТО НАСЛАЖДАЕМСЯ НАСИЛИЕМ НАД ЖИВОТНЫМИ!

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
attack("18p", "bad");
```

(...2500)


`_.catmilk=true`

```
hong({mouth:"anger", eyes:"annoyed"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: Нафиг! Загляну в Telegram.

(#act1e)

# act1e

`hong({mouth:"neutral", eyes:"neutral"});`

h: О, фотки с прошлой вечеринки. Так *вооот* они какие, эти еженедельные вечеринки...

{{if _.partyinvite=="yes"}} (#act1e_said_yes) {{/if}}

{{if _.partyinvite=="no"}} (#act1e_said_no) {{/if}}

{{if _.partyinvite=="ignore"}} (#act1e_said_ignore) {{/if}}

# act1e_said_yes

`hong({mouth:"sad", eyes:"annoyed"});`

h: Так много людей... особенно для моей тревоги.

h: Может, мне стоит отказаться от приглашения?

```
hong({mouth:"neutral", eyes:"neutral"});
bb({mouth:"normal", eyes:"normal"});
```

[Изменить ответ?! Ты что, тряпка?!](#act1e_yes_dontchange)

[Измени ответ! Там слишком много людей!](#act1e_yes_changetono)

{{if _.subtweet}}
[Они точно обсуждали нас.](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[Мы репостнули новость, не проверив её.](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[Ты ведь знаешь, что ты сутулишься?](#act1e_ignore_posture)
{{/if}}

# act1e_yes_dontchange

```
bb({eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Они рассчитывают, что мы придём, а ты хочешь подвести их? Ты хочешь, чтобы от тебя все отвернулись?!

{{if _.fifteencigs}}
b: ПЯТНАДЦАТЬ. СИГАРЕТ.
{{/if}}

{{if _.whalepoop}}
b: КИТОВЬЯ. КАКАШКА.
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

```
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Заткнись! Пожалуйста, замолчи! Я оставлю "да"!

(#act1f)

# act1e_yes_changetono

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Ты же ведь знаешь, к чему может привести давка?

```
bb({body:"fear", mouth:"small", eyes:"narrow"});
hong({eyes:"sad", mouth:"sad"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: В 2003 году в ночном клубе на Род-Айленде случился пожар. В панике люди ломанулись к выходам.

b: Погибли 100 человек.

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({mouth:"shock"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ТЫ ХОЧЕШЬ ЧТОБЫ ЭТО СЛУЧИЛОСЬ И С НАМИ?!-

```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 2.5;
```

b: СКАЖИ НЕТ СКАЖИ НЕТ СКАЖИ НЕТ СКАЖИ НЕТ СКАЖИ НЕТ СКАЖИ НЕТ СКАЖИ Н-

```
bb({body:"normal", eyes:"fear", mouth:"normal"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

```
hong({eyes:"anger", mouth:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Заткнись! Пожалуйста, замолчи! Я отвечу: "Нет"! Боже!

(#act1f)

# act1e_said_no

`hong({mouth:"sad", eyes:"sad"});`

h: Выглядит клёво.

h: Может я зря {{PM ? 'отказался' : 'отказалась'}} от приглашения?

`bb({mouth:"normal", eyes:"normal"});`

[Изменить ответ?! Ты что, тряпка?!](#act1e_no_dontchange)

[Измени ответ! Иначе умрёшь в одиночестве.](#act1e_no_changetoyes)

{{if _.subtweet}}
[Они точно обсуждали нас.](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[Мы репостнули новость, не проверив её.](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[Ты ведь знаешь, что сутулишься?](#act1e_ignore_posture)
{{/if}}

# act1e_no_dontchange

`bb({eyes:"anger"})`

b: Эй, все рассчитывают на нас...

b: Рассчитывают, что мы не будем им мешать и позволим затусить!

b: Затусить без {{PM ? 'такого ужасного и отвратительного нытика' : 'такой ужасной и отвратительной нюни'}}{{_.whitebread ? ' о белом хлебе' : ', ноющей о белом хлебе'}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

```
bb({body:"normal", eyes:"uncertain", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Заткнись! Пожалуйста, замолчи! Я оставлю "нет"!

(#act1f)

# act1e_no_changetoyes

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Хроническое одиночество увеличивает уровень кортизола, а также риск сердечно-сосудистых заболеваний и инсульта!

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

{{if _.fifteencigs}}
b: ПЯТНАДЦАТЬ. СИГАРЕТ.
{{/if}}

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Заткнись! Пожалуйста, замолчи! Я отвечу: "Да"! Боже!

(#act1f)

# act1e_ignore_subtweet

```
bb({eyes:"fear", mouth:"small"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Рано или поздно, но это перейдёт в реальную жизнь!

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.7;
```

b: Нас высмеют, отвергнут и унизят, привязав за ноги к дикой лошади, которая протащит нас через всю информационную грязь!

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Почему тебе так это нравится?!

(#act1f)

# act1e_ignore_factcheck

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Мы распространяем дезинформацию и уничтожаем доверие к независимым СМИ!

```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Мы – причина, из-за которой из обломков свободы вырастет фашизм!

```
bb({body:"normal", eyes:"anger"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

```
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
_.factcheck = true;
```

h: Почему тебе так это нравится?!

(#act1f)

# act1e_ignore_posture

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Xочешь, что бы у тебя горб вырос?! Распрямись!

```
bb({body:"meta"});
```

b: Тебя это тоже касается.

```
bb({body:"normal", mouth:"normal"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Почему тебе так это нравится?!

(#act1f)

# act1e_said_ignore

`hong({mouth:"sad", eyes:"sad"});`

h: Выглядит клёво.

h: Может я зря игнорирую приглашение?

`bb({mouth:"normal", eyes:"normal"});`

[Продолжай игнорировать – мы всё всегда портим.](#act1e_ignore_continue)

[Ответь: "Да".](#act1e_ignore_changetoyes)

[Ответь: "Нет".](#act1e_ignore_changetono)

# act1e_ignore_continue

`hong({eyes:"annoyed"});`

h: Но ведь игнорить – это грубо, не так ли?

`bb({eyes:"normal_right"});`

b: Другие люди игнорируют *нас* всегда, так что...

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

b: давай ответим им тем же.

(#act1f)

# act1e_ignore_changetoyes

`hong({eyes:"surprise", mouth:"smile"});`

h: Ты... позволишь мне повеселиться?

b: Ну, я действительно считаю, что одиночество *может* нас убить.

`hong({eyes:"neutral", mouth:"neutral"});`

(#act1e_no_changetoyes)

# act1e_ignore_changetono

`bb({eyes:"narrow"});`

b: Слишком много людей. Толпы опасны.

(#act1e_yes_changetono)


# act1f

```
hong({mouth:"neutral", eyes:"neutral"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: О! Уведомление в Tinder.

`bb({eyes:"uncertain"})`

b: Что это? Поисковик особей для спаривания?

`hong({eyes:"annoyed"})`

h: Это не поисковик для спаривания, а просто способ найти больше дру--

`bb({eyes:"narrow"})`

b: Это поисковик особей для спаривания!

```
hong({eyes:"surprise", mouth:"smile"});
bb({eyes:"normal"});
```

h: Кто-то меня лайкнул! У нас совпадение! Выглядит мило!

```
bb({eyes:"narrow_eyebrow"});
hong({eyes:"sad", mouth:"anger"})
```

h: Пожалуйста, не испорти м--

```
bb({body:"panic"});
Game.OVERRIDE_TEXT_SPEED = 2.0;
```

b: ОПАСНОСТЬ ОПАСНОСТЬ ОПАСНОСТЬ ОПАСНОСТЬ ОПАСНОСТЬ

`bb({body:"fear", eyes:"fear", mouth:"normal"})`

[Мы будем *использованы*.](#act1f_used_by_others)

[Мы *используем* других людей.](#act1f_using_others)

[ЭТО СОВПАДЕНИЕ С {{PM ? 'СЕРИЙНОЙ' : 'СЕРИЙНЫМ'}} УБИЙЦЕЙ](#act1f_killer)

# act1f_used_by_others

`bb({body:"point_crotch", eyes:"normal", mouth:"normal"})`

b: Случайные знакомства могут заполнить дыру здесь,

b: но они никогда не смогут заполнить дыру...

`bb({body:"point_heart", eyes:"pretty", mouth:"small"})`

b: *здесь*.

(...1000)

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Суть в том, что МЫ НАВСЕГДА ОСТАНЕМСЯ ОДНИ

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`_.hookuphole=true`

(#act1g)

# act1f_using_others

`bb({eyes:"narrow", mouth:"small"})`

b: Ты собираешься коллекционировать гениталии других людей как покемонов?

```
bb({body:"sing", eyes:"pretty", mouth:"shut"});
music("pokemon");
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

```
Game.FORCE_TEXT_DURATION = 4000;
Game.FORCE_NO_VOICE = true;
```

b: ♫ (заглавная тема покемонов)-

(...3150)

```
bb({mouth:"normal"});
Game.FORCE_TEXT_DURATION = 2450;
```

b: ♫ Услыхав {{PM ? 'яиц' : 'п^изд^ы'}} призыв-

(...700)

```
bb({eyes:"narrow", mouth:"small"});
Game.FORCE_TEXT_DURATION = 1700;
```

b: ♫ Не трусь – вперёд иди-

(...2000)

```
bb({eyes:"pretty"});
Game.FORCE_TEXT_DURATION = 2200;
```

b: ♫ Сиськи жопы и *ху*и-

(...400)

```
bb({eyes:"fear", mouth:"normal"});
Game.FORCE_TEXT_DURATION = 1700;
```

b: ♫ не важно чьи они-

(...1000)

```
bb({eyes:"smile", mouth:"smile"});
Game.FORCE_TEXT_DURATION = 2000;
```

b: ♫ ^ИЗВРАЩ^МОН! ПОКАЖИ ИМ ВС--

(...1000)

```
Game.FORCE_CANT_SKIP = false;
Game.clearText();
music(false);
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Суть в том, что мы используем других людей для удовлетворения своих желаний.

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

`_.pokemon=true`

(#act1g)

# act1f_killer

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

{{if _.whitebread && PM}}
b: Она пригласит тебя к себе домой, запрёт и будет принудительно откармливать белым хлебом.
{{/if}}

{{if _.whitebread && PM}}
b: Тебя разнесёт настолько, что она сможет носить твою кожу как костюм!
{{/if}}

{{if _.whitebread && !PM}}
b: Он пригласит тебя к себе домой, запрёт и будет принудительно откармливать белым хлебом.
{{/if}}

{{if _.whitebread && !PM}}
b: Тебя разнесёт настолько, что он сможет носить твою кожу как костюм!
{{/if}}

{{if _.parasite && PM}}
b: Она будет бить тебя органайзером, приговаривая: "ТЫ ДОЛЖЕН БЫТЬ ПРОДУКТИВНЫМ, ПАРАЗИТ!"
{{/if}}

{{if _.parasite && !PM}}
b: Он будет бить тебя органайзером, приговаривая: "ТЫ ДОЛЖНА БЫТЬ ПРОДУКТИВНОЙ, ПАРАЗИТКА!"
{{/if}}

{{if !_.whitebread && !_.parasite && PM}}
b: Она порежет твоё тело на кровавое конфетти, превратит твои внутренности в гирлянды и сделает пунш из твоей крови!
{{/if}}

{{if !_.whitebread && !_.parasite && !PM}}
b: Он порежет твоё тело на кровавое конфетти, превратит твои внутренности в гирлянды и сделает пунш из твоей крови!
{{/if}}

{{if !_.whitebread && !_.parasite}}
b: Как тебе ТАКОЕ приглашение на вечеринку?!
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

`_.serialkiller=true`

(#act1g)

# act1g

```
bb({body:"normal", mouth:"normal", eyes:"look"});
hong({body:"2_tired"});
Game.OVERRIDE_TEXT_SPEED = 0.5;
music(false);
```

h: ...

(...500)

h: я так {{PM ? 'устал' : 'устала'}} от этих игр!

(...700)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h:
{{if _.fifteencigs}}"одиночество нас убьёт"... {{/if}}
{{if _.parasite}}"мы – общественные паразиты"... {{/if}}
{{if _.whitebread}}"не ешь это, оно нас убьёт"... {{/if}}
{{if _.subtweet}}"они сплетничают за нашими спинами"... {{/if}}
{{if _.badnews}}"мир разваливается на части"... {{/if}}
{{if _.hookuphole}}"мы умрём в одиночестве"... {{/if}}
{{if _.serialkiller && PM}}"она – серийная убийца"... {{/if}}
{{if _.serialkiller && !PM}}"он – серийный убийца"... {{/if}}
{{if _.catmilk}}"кошки не переваривают молоко"... {{/if}}
{{if _.pokemon}}отстойная пародийная песня... {{/if}}

h: я просто хочу жить своей жизнью.

h: я просто хочу не чувствовать всю эту... боль.

`bb({eyes:"look_sad"});`

b: Эй... человек...

`Game.OVERRIDE_TEXT_SPEED = 0.5;`

b: Всё будет хорошо.

(...600)

`bb({body:"point_heart", eyes:"look_sad_smile", mouth:"smile"});`

b: Как {{AM ? 'твой верный сторожевой волк' : 'твоя верная сторожевая волчица'}}, я всегда буду начеку и сделаю всё возможное, чтобы ты {{PM ? 'был' : 'была'}} в безопасности.

`bb({body:"normal", eyes:"look_sad", mouth:"smile"});`

b: Я обещаю.

(...600)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({body:"phone1", eyes:"neutral", mouth:"neutral"});
```

h: Последнее приложение. Instagram. Что там нового?

`hong({eyes:"sad"});`

h: Хм... опять фотки с вечеринки.

`hong({mouth:"sad"});`

h: Они выглядят такими счастливыми. Уверенными. Свободными от тревоги.

`hong({mouth:"anger"});`

h: Боже, почему я не могу быть, как они? Почему я просто не могу быть {{PM ? '*нормальным?*' : '*нормальной?*'}}

`bb({eyes:"normal_right"});`

b: По поводу вечеринки и того приглашения.... Вот моё ОКОНЧАТЕЛЬНОЕ решение:

`bb({eyes:"normal"});`

[Ты {{PM ? 'должен' : 'должна'}} пойти.](#act1g_go) `Game.OVERRIDE_CHOICE_LINE=true`

[Ты не {{PM ? 'должен' : 'должна'}} идти.](#act1g_dont) `Game.OVERRIDE_CHOICE_LINE=true`

# act1g_go

`_.act1g = "go"`

(#act1h)

# act1g_dont

`_.act1g = "dont"`

(#act1h)

# act1h

b: Ты--

```
bb({eyes:"wat", mouth:"small"});
hong({body:"2_fuck"});
```

h: {{AM ? 'ПОШЁЛ' : 'ПОШЛА'}}

`hong({body:"2_you"});`

h: *^НАХУЙ^!*

(...500)

b: ч

(...1500)

`bb({eyes:"wat_2"});`

b: что?

`hong({body:"phone1", eyes:"anger", mouth:"anger"});`

h: Я скажу ДА этой вечеринке,

{{if _.act1g=="go"}}
h: НЕ потому что ТЫ мне это говоришь, а потому что *Я* этого хочу!
{{/if}}

{{if _.act1g=="dont"}}
h: ТЕБЕ назло!
{{/if}}

```
hong({body:"putaway"});
sfx("rustle");
```

h: Ты меня НЕ контролируешь.

```
sfx("rustle2");
hong({body:"0_sammich", eyes:"0_annoyed", mouth:"0_neutral"});
```

h: А теперь извини, я съем этот вкуснейший сэндвич с чувством ^ёбаного^ удовлетворения!

`hong({body:"2_sammich_eat"});`

(...601)

```
sfx("sandwich");
hong({body:"2_sammich_eaten", eyes:"0_lookaway", mouth:"0_chew1"})
```

(...601)

```
bb({body:"normal", eyes:"uncertain", mouth:"shut"});
Game.OVERRIDE_TEXT_SPEED = 0.5;
```

b: ...

```
bb({eyes:"normal_right"});
Game.OVERRIDE_TEXT_SPEED = 1;
```

b: ...

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 4;
```

b: ..................

(...500)

`bb({mouth:"normal"});`

[ААААААА МЫ УМРЁМ](#act1h_death) `Game.OVERRIDE_CHOICE_LINE = true;`

[ААААААА ВСЕ НАС НЕНАВИДЯТ](#act1h_loneliness) `Game.OVERRIDE_CHOICE_LINE = true;`

[ААААААА МЫ УЖАСНЫЕ ЛЮДИ](#act1h_worthless) `Game.OVERRIDE_CHOICE_LINE = true;`

# act1h_death

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: ААААААА МЫ УМРЁМ ААААААААААААА

```
hong({body:"3_defeated1"});
attack("100p", "harm");
```

(...2500)

(#act1i)

# act1h_loneliness

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: ААААА ВСЕ НАС НЕНАВИДЯТ ААААААААААААА

```
hong({body:"3_defeated1"});
attack("100p", "alone");
```

(...2500)

(#act1i)

# act1h_worthless

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: ААААА МЫ УЖАСНЫЕ ЛЮДИ ААААААААААААА

```
hong({body:"3_defeated1"});
attack("100p", "bad");
```

(...2500)

(#act1i)

# act1i

```
bb({mouth:"smile_lock", eyes:"smile", body:"normal"});
music('battle', {volume:0.5});
```

n: ПОЗДРАВЛЯЮ

(...500)

n: ТЫ УСПЕШНО {{PM ? 'ЗАЩИТИЛ' : 'ЗАЩИТИЛА'}} ФИЗИЧЕСКИЕ + СОЦИАЛЬНЫЕ + ДУХОВНЫЕ ПОТРЕБНОСТИ СВОЕГО ЧЕЛОВЕКА

n: ПОСМОТРИ, КАК {{PM ? 'ОН ТЕБЕ БЛАГОДАРЕН' : 'ОНА ТЕБЕ БЛАГОДАРНА'}}!

(...500)

n: ТЕПЕРЬ, КОГДА {{PM ? 'ЕГО' : 'ЕЁ'}} ЭНЕРГИЯ НА НУЛЕ, ТЫ МОЖЕШЬ ПОЛНОСТЬЮ {{PM ? 'ЕГО' : 'ЕЁ'}} КОНТРОЛИРОВАТЬ!

`bb({mouth:"smile", eyes:"normal"});`

n: ВЫБЕРИ КОНЦОВКУ

`bb({mouth:"small_lock", eyes:"fear"});`

n: *ДОВЕДИ {{PM ? 'ЕГО' : 'ЕЁ'}}*

[{БИТЬ – Разбить стрессогенный телефон!}](#act1i_phone) `Game.OVERRIDE_CHOICE_LINE=true`

[{БЕЖАТЬ – Свернуться в клубок и плакать!}](#act1i_cry) `Game.OVERRIDE_CHOICE_LINE=true`

# act1i_phone

`bb({mouth:"normal", eyes:"narrow"})`

b: Из-за твоего телефона у тебя панические атаки!

`bb({eyes:"anger"})`

b: Дуров и Ко отбирает твоё психическое здоровье, чтобы приумножить свой капитал!

```
bb({body:"fear", eyes:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Накажи свой телефон! Уничтожь его! Разбей!!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "fight";
```

b: РАЗБЕЙ РАЗБЕЙ РАЗБЕЙ РАЗБЕЙ РАЗБЕЙ РАЗБЕЙ РАЗБЕЙ РАЗБЕЙ РАЗБЕЙ РАЗБЕЙ РАЗБЕЙ РАЗБЕЙ РАЗБЕЙ РАЗБЕЙ РАЗБЕЙ РАЗБЕЙ РАЗБЕЙ РАЗБ--

(#act1j)

# act1i_cry

`bb({eyes:"fear", mouth:"normal"})`

b: Мир полон опасностей!

```
bb({body:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Действуй как броненосец! Свернись в клубок!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "flight";
```

b: СВЕРНИСЬ И ПЛАЧЬ СВЕРНИСЬ И ПЛАЧЬ СВЕРНИСЬ И ПЛАЧЬ СВЕРНИСЬ И ПЛАЧЬ СВЕРНИСЬ И ПЛАЧЬ СВЕРНИСЬ И ПЛ--

(#act1j)

# act1j

`SceneSetup.act1_outro()`
