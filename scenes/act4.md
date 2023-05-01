# act4

```
SceneSetup.act4();
publish("SAVE_GAME", ["act4"]);
Game.FORCE_CANT_SKIP = true;
```

(...5001)

```
publish("set_how_many_prompts", [1]);
Game.FORCE_CANT_SKIP = false;
Game.CLICK_TO_ADVANCE = true;
```

n3: (игра сохранена)

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

(...1001)

```
var hong_frame = _.INJURED ? 9 : 0;
publish("act4", ["hong_walks_in",hong_frame]);
sfx("grass_step1", {volume:0.1});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.2});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.25});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.3});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.35});
```

(...1667)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.35});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.35});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.35});
```

(...1333)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.20});
```

(...167)

```
publish("act4_hong_sits");
```

(...66)

```
publish("act4", ["hong_transition", "next"]);
sfx("squeak");
```

(...133)

`publish("act4", ["hong_transition", "next"]);`

(...1333)

```
publish("act4", ["hong_transition", "next"]);
sfx("rustle");
```

(...333)

`publish("act4", ["hong_transition", "next"]);`

(...1001)

```
publish("act4", ["hong_transition", "next"]);
```

(...333)

```
publish("act4", ["hong_transition", 9]);
sfx("sandwich");
```

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", 9]);`

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", 9]);`

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", "next"]);`

(...1466)

`publish("act4-out-1");`

(...201)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

```
publish("act4-show-chars");
Game.FORCE_CANT_SKIP = false;
```

(...901)

`hong({body:"sigh_1"})`

(...601)

```
hong({body:"sigh_2"});
bb({eyes:"look_down"});
```

h: *Фух*

```
hong({body:"hold", eyes:"normal", mouth:"normal"});
bb({eyes:"normal"});
```

h: Какая у этой истории мораль?

`hong({body:"one_up", eyes:"annoyed"})`

h: Чему мы научили *себя*? Что я {{PM ? '*был* глуп' : '*была* глупа'}}, мои "друзья" манипулировали мной, и мы чуть не *погибли*?

`hong({body:"normal", eyes:"normal"})`

{{if _.INJURED}}
[Ага.. Не говоря уже о счёте за лечение.](#act4a_bill)
{{/if}}

{{if !_.INJURED}}
[Ага.. Не говоря уже о вреде для печени.](#act4a_liver)
{{/if}}

[Угу.. Это *была* опасная история.](#act4a_worst)

[Да.. Я {{AM ? 'был прав' : 'была права'}}.](#act4a_right)

# act4a_bill

`hong({eyes:"annoyed_l", mouth:"narrow"});`

h: В мою страховку не включен случай {{PM ? '"поступил как идиот"' : '"поступила как дура"'}}.

`hong({eyes:"annoyed", mouth:"normal"});`

b: И всё же... мы выжили!

`hong({eyes:"normal"});`

h: ?

(#act4b)

# act4a_liver

`bb({eyes:"normal_d"});`

b: Мы определенно сократили нашу ожидаемую продолжительность жизни на несколько лет...

`bb({eyes:"surprise"});`

b: Но, по крайней мере, у нас *всё ещё* есть ожидаемая продолжительность жизни! Мы выжили!

```
hong({eyes:"surprise"});
bb({eyes:"normal"});
```

h: ?

(#act4b)

# act4a_worst

`bb({eyes:"normal_d"});`

b: И всё же...

h: м?

`bb({eyes:"surprise"});`

b: Мы выжили!

h: ?

(#act4b)

# act4a_right

`bb({eyes:"normal_d"});`

b: Но... и ты {{PM ? 'был прав' : 'была права'}}!

`hong({eyes:"surprise"});`

h: м?

`bb({eyes:"normal"});`

b: Я {{AM ? '*был* волком, который кричал' : '*была* волчицей, которая кричала'}}: "Волки!". Поэтому, когда появилась *реальная* опасность, ты, по праву, не {{PM ? 'поверил' : 'поверила'}} мне.

`bb({eyes:"surprise_r"});`

b: И всё же, мы выжили!

h: ?

(#act4b)

# act4b

```
bb({eyes:"normal", mouth:"normal"});
hong({eyes:"normal", mouth:"normal"});
```

b: Несмотря ни на что, мы всё ещё здесь.

`hong({eyes:"suspect"});`

{{if _.INJURED && AM}}
h: Ты выглядишь довольно спокойным, учитывая, что мы чуть не умерли.
{{/if}}

{{if _.INJURED && !AM}}
h: Ты выглядишь довольно спокойной, учитывая, что мы чуть не умерли.
{{/if}}

{{if !_.INJURED && AM}}
h: Ты выглядишь довольно спокойным, учитывая, что ещё чуть-чуть и мы бы погибли.
{{/if}}

{{if !_.INJURED && !AM}}
h: Ты выглядишь довольно спокойной, учитывая, что ещё чуть-чуть и мы бы погибли.
{{/if}}

```
hong({eyes:"normal"});
bb({eyes:"annoyed_d", mouth:"narrow"});
```

b: В сравнении с этим всё остальное кажется не таким страшным. К тому же, я {{AM ? 'понял' : 'поняла'}}, что...

`bb({eyes:"normal", mouth:"normal"});`

b: мне невыгодно сражаться с тобой. Потому что это не защищает тебя.

h: Но и *мне* невыгодно сражаться с тобой. Потому что это вынуждает тебя переходить на крик и кричать громче.

`bb({eyes:"normal_r"})`

b: Тогда, может...

`bb({eyes:"normal"})`

h: ... нам не стоит сражаться!

```
Game.FORCE_CANT_SKIP = true;
Game.clearText();
```

(...301)

`publish("smash",[0]);`

(...2001)

```
publish("smash",[1]);
sfx("smash_glass");
```

(...2601)

```
publish("smash",[2]);
bb({eyes:"normal", mouth:"normal"});
hong({eyes:"normal", mouth:"normal"});
```

(...2001)

`Game.FORCE_CANT_SKIP = false;`

(#act4b_2)

# act4b_2

```
music('dontfight',{fade:5, volume:0.6});
bb({eyes:"annoyed_d"});
```

b: Я не {{AM ? 'Злой Серый Волк' : 'Страшная Серая Волчица'}}. Но я и не {{AM ? 'сторожевой волк' : 'сторожевая волчица'}} тоже.

`bb({eyes:"sad_d"})`

b: Я {{AM ? 'потрёпанный пёс' : 'потрёпанная собака'}} из приюта.

`bb({eyes:"sad"})`

b: В прошлом мы оба прошли через жестокий опыт. Может быть, травму или пренебрежение. Вот почему я иногда слишком остро реагирую и говорю:

```
sfx("yaps", {volume:0.6});
bb({body:"yap_1"});
Game.FORCE_CANT_SKIP = true;
Game.WORDS_HEIGHT_BOTTOM = 215;
Game.FORCE_TEXT_DURATION = 90;
Game.FORCE_NO_VOICE = true;
```

b: ТЯФ ТЯФ ТЯФ ТЯФ ТЯФ

(...1884)

```
Game.WORDS_HEIGHT_BOTTOM = -1;
Game.FORCE_CANT_SKIP = false;
bb({body:"normal", mouth:"scream", eyes:"scream_sad"});
```

b: Но я *не хочу* быть трусливой{{AM ? ' собакой' : ''}}! Я хочу защищать тебя! Я хочу быть {{AM ? 'твоим верным псом' : 'верной, надёжной и преданной тебе'}}!

`bb({eyes:"sad", mouth:"normal"});`

b: Человек... ты сможешь {{AM ? 'приручить этого волка' : 'меня приручить'}}?

`hong({eyes:"sad"})`

h: Я... Я попробую.

`hong({eyes:"normal_l", body:"chin", mouth:"narrow"})`

h: Хорошо. Здоровые отношения с эмоциями. Здоровые отношения невозможны без контакта и открытого общения. Поэтому давай общаться.

`hong({eyes:"normal", body:"hands_1", mouth:"normal"})`

h: Следующие пять минут могут звучать фальшиво. Но давай будем притворяться до тех пор, пока не начнёт получаться.

```
hong({body:"hands_2", mouth:"normal"});
```

h: {{AM ? 'Дорогой внутренний волк' : 'Дорогая внутренняя волчица'}}... что *ты* сейчас чувствуешь?

n2: ИСПОЛЬЗОВАННЫЕ СТРАХИ:

n2: *ПОЛУЧИТЬ ВРЕД* {{_.attack_harm_total}}, {{PM ? '*БЫТЬ ОТВЕРГНУТЫМ*' : '*БЫТЬ ОТВЕРГНУТОЙ*'}} {{_.attack_alone_total}}, {{PM ? '*ОКАЗАТЬСЯ ПЛОХИМ*' : '*ОКАЗАТЬСЯ ПЛОХОЙ*'}} {{_.attack_bad_total}}

n2: О КАКОМ СТРАХЕ ТЫ ХОЧЕШЬ ПОГОВОРИТЬ В ПЕРВУЮ ОЧЕРЕДЬ? (ТЫ СМОЖЕШЬ ВЫБРАТЬ ДРУГИЕ ПОЗЖЕ)

```
_.a4_fears_discussed = 0;
_.num_thanks = 0;
hong({body:"normal"});
bb({eyes:"normal"});
```

[Я боюсь получить вред.](#act4_harm)

[Я боюсь быть {{PM ? 'отвергнутым' : 'отвергнутой'}}.](#act4_alone)

[Я боюсь оказаться {{PM ? 'плохим' : 'плохой'}}.](#act4_bad)

# act4_harm

```
_.a4_talked_about_harm = true;
_.a4_fears_discussed += 1;
```

`bb({eyes:"normal_d"})`

b: Но мне важно позаботиться о твоей потребности в физической безопасности.

`bb({eyes:"sad_d"})`

b: И *весь мир* кажется таким опасным. В нём много трагедий и зла.

`bb({eyes:"sad"})`

{{if _.a4_fears_discussed==1}}
b: Твоя очередь, человек...
{{/if}}

{{if _.a4_fears_discussed==2}}
b: Что думаешь, человек?
{{/if}}

{{if _.a4_fears_discussed>=3}}
b: У тебя есть какие-то мысли, человек?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Ты {{AM ? 'прав' : 'права'}}. Давай защитим себя.](#act4_harm_skills)

[Давай подвергнем себя *большей* опасности.](#act4_harm_exposure)

[Спасибо.](#act4_thanks) `_.thanks_for = "безопасности";`

# act4_harm_skills

`bb({eyes:"look_down", body:"paw"})`

b: Но... как? У меня есть зубы и когти, но я всего лишь метафора.

```
bb({ body:"normal", eyes:"normal" });
hong({ body:"one_up", eyes:"surprise" });
```

h: Может, мы могли бы пройти обучение по самообороне? Или присоединиться к сообществу, в котором люди поддерживают и защищают друг друга?

h: Или улучшить наше общее состояние здоровья и уделить внимание личным границам?

```
bb({ eyes:"annoyed_r" });
hong({ body:"normal", eyes:"normal" });
```

b: Возможно, но...

[С чего нам начать?](#act4_harm_skills_start)

[Что, если это не сработает?](#act4_harm_skills_work)

[Что, если мы переборщим с "безопасностью"?](#act4_harm_skills_overboard)

# act4_harm_skills_start

`bb({ eyes:"sad_d" })`

b: Нам так много нужно улучшить в себе и так много сделать. С чего нам вообще *начать*?

`hong({ body:"shrug", eyes:"surprise" })`

h: Мы уже начали...

`bb({ eyes:"normal", mouth:"narrow" })`

b: Ээ?

```
bb({ body:"normal", mouth:"normal" });
hong({ body:"normal", mouth:"normal", eyes:"normal"});
```

h: Прямо сейчас мы практикуем открытое общение. Оно помогает нам лучше распознавать опасность. Поэтому ложных тревог будет меньше.

`hong({ eyes:"surprise" });`

h: А ресурсов на случай реальной опасности – больше.

`hong({ eyes:"normal", mouth:"normal" });`

h: Вывод: мы прямо сейчас обучаем себя самообороне.

`bb({ eyes:"normal_r" })`

b: Хах. Я {{AM ? 'ожидал' : 'ожидала'}} чего-то в этом роде:

```
Game.FORCE_CANT_SKIP = true;
Game.clearText();
hong({ eyes:"sad", mouth:"smile" });
bb({ body:"karate_1" });
sfx("hiya");
```

(...1001)

`Game.FORCE_CANT_SKIP = false;`

(#act4_something_else)

# act4_harm_skills_work

`bb({ eyes:"normal" });`

h: Такое возможно, потому что способа защитить себя на 100% не существует...

`hong({ body:"one_up" });`

h: Но даже улучшение на 1% – это уже хоть что-то. Верно?

```
bb({ eyes:"annoyed" });
hong({ normal:"one_up" });
```

b: Ты видишь стакан не на 99% пустым, а на 1% полным?

`bb({ eyes:"normal" });`

h: Даже 1% воды в стакане будет очень кстати, если ты застрял в пустыне.

`bb({ eyes:"closed" });`

b: Что ж. Тогда пей до дна.

(#act4_something_else)

# act4_harm_skills_overboard

`bb({ body:"chest", eyes:"annoyed" })`

b: Я имею в виду, что ты {{PM ? 'начал' : 'начала'}} игнорировать мои предупреждения потому, что я {{AM ? 'переборщил' : 'переборщила'}} с безопасностью.

`bb({ body:"normal", eyes:"normal" })`

h: Да, ты {{AM ? 'прав' : 'права'}}. Важно соблюдать баланс: не перегибать и не пренебрегать. Нам нужна золотая середина. Всё в меру.

`bb({ eyes:"suspect" })`

b: Прости, *ВСЁ* в меру?

`hong({ eyes:"annoyed" })`

h: *Умеренное число вещей* в меру.

```
bb({ eyes:"closed" });
hong({ eyes:"normal" });
```

b: Спасибо, что {{PM ? 'сделал' : 'сделала'}} свои утверждения согласованными.

(#act4_something_else)


# act4_harm_exposure

`bb({ mouth:"scream_talk", eyes:"scream", MOUTH_LOCK:true });`

b: *ЧТО?!*

```
bb({ mouth:"narrow", eyes:"suspect" });
hong({ body:"one_up" });
```

h: Представь, что собака боится грома.

`hong({ body:"hands_1" });`

h: Дрессировщики используют такой трюк: сначала они тихо проигрывают звук грома и дают собаке вкусняшку за сохранение спокойствия.

`hong({ body:"hands_2" });`

h: В течение нескольких дней дрессировщики мееедленно увеличивает громкость, пока собака полностью не преодолеет свой страх перед громом.

```
hong({ body:"normal", eyes:"surprise" });
bb({ mouth:"normal", eyes:"normal" });
```

h: Это называется экспозиционной терапией!

`hong({ body:"point", eyes:"normal" });`

h: Так как ты – тоже собака, то это должно сработать и с тобой. Реакция "бей или беги" есть у всех млекопитающих.

`hong({ body:"normal" });`

[Но что, если мы снизим порог страха *слишком* сильно?](#act4_harm_exposure_overboard)

[Но что, если мы подвергнем себя *реальной* опасности?](#act4_harm_exposure_hurt)

[Я {{AM ? 'волк' : 'волчица'}}, а не собака.](#act4_harm_exposure_dog) `bb({ eyes:"suspect" })`

# act4_harm_exposure_dog

h: Я буду {{PM ? 'настойчив' : 'настойчива'}} в моём добром и терпеливом отношении к тебе, чтобы помочь тебе стать {{AM ? 'милым домашним пёселем' : 'домашней'}}.

`bb({ MOUTH_LOCK:true })`

b: ...

`bb({ eyes:"sad", mouth:"smile" })`

b: Уррр.

(#act4_something_else)

# act4_harm_exposure_overboard

`bb({ eyes:"annoyed" })`

b: Мы *только что* видели, что происходит, когда ты выключаешь свой страх – ты попадаешь в *действительно* опасные ситуации.

`bb({ eyes:"angry_r", body:"one_up" })`

b: Кроме того, разве *слишком* низкий порог страха не превратит нас в психопатов?

`bb({ mouth:"scream", eyes:"scream", body:"two_up" })`

b: В какой-то момент мы начнём хвалить себя во время просмотра "экпозиционной" снафф-порнухи!

`hong({ eyes:"annoyed" })`

h: Я... думаю, что всё-таки есть черта между громом и *этим*.

`bb({ body:"normal", mouth:"normal", eyes:"suspect" })`

b: Но *где* именно, человек? *Где?!*

`hong({ eyes:"surprise", body:"one_up" })`

h: Я не знаю. *Ты* можешь мне помочь!

`hong({ eyes:"normal", body:"normal" })`

h: Работая как команда и продолжая общаться, мы сможем провести её.

`bb({ body:"paw", mouth:"narrow", eyes:"closed" })`

b: Окей. Мои лапы не приспособлены для этого, так что чертить будешь ты.

(#act4_something_else)

# act4_harm_exposure_hurt

`bb({ body:"two_up", eyes:"angry_r" })`

{{if _.INJURED}}
b: Например, мы спрыгнули с чёртовой *крыши!*
{{/if}}

{{if !_.INJURED}}
b: К примеру, мы чуть не спрыгнули с чёртовой *крыши!*
{{/if}}

```
hong({ eyes:"annoyed" });
bb({ body:"normal", eyes:"annoyed" });
```

h: Да, ты {{AM ? 'прав' : 'права'}}. Кто-то из нас *может* зайти слишком далеко.

`hong({ eyes:"normal" });`

h: И именно поэтому, если мы решим практиковать экспозиционную терапию, то мы начнём с малого и будем делать мааааленькие шажочки вперёд.

h: И на этапе, когда мы действительно можем столкнуться с *реальной* опасностью, мы остановимся.

`bb({ eyes:"annoyed_r", mouth:"narrow" });`

b: Да, я провожу черту между страхом перед звуком грома и прогулками в поле в грозу в высокой остроконечной шляпе.

(#act4_something_else)

# act4_thanks

`_.num_thanks += 1`

{{if _.num_thanks==1}}
(#act4_thanks_1)
{{/if}}

{{if _.num_thanks==2}}
(#act4_thanks_2)
{{/if}}

{{if _.num_thanks==3}}
(#act4_thanks_3)
{{/if}}

# act4_thanks_1

`bb({ MOUTH_LOCK:true })`

b: ...

`bb({ eyes:"annoyed" })`

b: Подожди, никаких за или против относительно того, что я чувствую? Просто... "спасибо"?

`hong({ eyes:"surprise", body:"shrug" })`

h: Да! Спасибо, за твою заботу о моей потребности в {{_.thanks_for}}.

```
bb({ eyes:"closed_annoyed", MOUTH_LOCK:true });
hong({ eyes:"normal", body:"normal" });
```

b: ...

h: Ты в порядке?

`bb({ eyes:"super_sad", mouth:"narrow" });`

b: Раньше ты никогда не {{PM ? 'говорил' : 'говорила'}} мне *спасибо*.

`hong({ mouth:"smile" });`

h: Ур <3, {{AM ? 'ты мой большой пушистый волк-паникёр' : 'ты моя большая пушистая волчица-паникёрша'}}.

(#act4_something_else)

# act4_thanks_2

h: Даже если ты слишком остро реагируешь, я ценю, что ты заботишься о моей потребности в {{_.thanks_for}}.

`bb({ eyes:"annoyed" })`

b: Погоди... ты ведь не повторяешь "Спасибо", просто чтобы не говорить о своих страхах?

```
bb({ eyes:"normal" });
hong({ eyes:"annoyed", body:"chin" });
```

h: Ну.. Я не всегда знаю, что ответить.

`hong({ eyes:"annoyed_l", body:"one_up" })`

h: У меня нечасто есть выбор из 3-х заранее подготовленных вариантов.

`hong({ eyes:"normal", mouth:"smile", body:"normal" })`

h: Но сейчас я хотя бы могу просто сказать спасибо.

b: И тебе спасибо за то, что терпеливо меня слушаешь.

`bb({ eyes:"closed" });`

b: Ты мой маленький кожаный мешочек без шерсти.

(#act4_something_else)

# act4_thanks_3

h: Даже если твоё тявканье и пугает меня, ты всё равно пытаешься защитить мою потребность в {{_.thanks_for}}.

`bb({ eyes:"smile_r" });`

b: Тааак. Если ты и дальше будешь так мне льстить, в интернете появятся странные идеи о нас.

```
bb({ eyes:"smile" });
hong({ eyes:"annoyed" });
```

h: Да ладно тебе! Я просто уязвимый ребёнок студенческого возраста, а ты {{PM ? 'большой, страшный волк' : 'большая, страшная волчица'}}. Что плохого может--

`hong({ eyes:"normal", body:"point" });`

h: Хотя, лучше не отвечай на это.

(#act4_something_else)




# act4_alone

```
_.a4_talked_about_alone = true;
_.a4_fears_discussed += 1;
```

`bb({ eyes:"sad_d" });`

b: Но я хочу быть {{AM ? 'уверен' : 'уверена'}}, что ты удовлетворяешь эту глубокую человеческую потребность в принадлежности и контакте...

`bb({ eyes:"sad_u" });`

b: Я боюсь, что если кто-нибудь когда-нибудь узнает нас *настоящих*, то они просто отвернутся и убегут.

`bb({ eyes:"sad" });`

{{if _.a4_fears_discussed==1}}
b: Твоя очередь, человек...
{{/if}}

{{if _.a4_fears_discussed==2}}
b: Что думаешь, человек?
{{/if}}

{{if _.a4_fears_discussed>=3}}
b: У тебя есть ещё какие-то мысли, человек?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Мы можем улучшить нашу социальную жизнь.](#act4_alone_skills)

[Я не думаю, что люди против нас. Давай проверим?](#act4_alone_experiment)

[Спасибо.](#act4_thanks) `_.thanks_for = "принадлежности и контакте";`

# act4_alone_skills

```
bb({ eyes:"normal" });
hong({ body:"chin" });
```

h: Для этого мы можем научить себя какому-то из социальных навыков:

h: задавать вопросы, активно слушать и проявлять эмпатию, самораскрываться, быть уязвимыми.

`hong({ eyes:"normal_l" });`

h: Или создать социальные привычки типа регулярных знакомств или планирования времени с друзьями.

`hong({ body:"one_up" });`

h: Ещё мы можем научить себя чувствовать спокойные эмоции, когда нам отказывают.

`hong({ eyes:"normal" });`

h: И понимать, в каких ситуациях люди на самом деле *не* отвергают нас.

h: Например, когда они просто устали или когда у них синдром стервозного лица.

```
hong({ body:"normal" });
bb({ eyes:"annoyed_r" });
```

b: Много вариантов. Но, говоря об "изучении социальных навыков"...

[Разве это не *манипуляция?*](#act4_alone_skills_manipulative)

[Не станет ли легче манипулировать *нами?*](#act4_alone_skills_manipulated)

[Что, если у нас не получится?](#act4_alone_skills_fail)

# act4_alone_skills_manipulative

`bb({ eyes:"suspect" });`

b: Разве у серийных убийц, умеющих читать эмоции своих жертв, не развита эмпатия?

`bb({ eyes:"annoyed" });`

b: Разве Чарльз Мэнсон не завоёвывал друзей и не оказывал влияние на людей?

`hong({ eyes:"annoyed", body:"chin" });`

h: Ты {{AM ? 'прав' : 'права'}}.

h: "Социальные навыки" ничего не значат, если в действительности нам всё равно на другого человека.

`hong({ body:"normal" });`

h: То есть просто не будь {{PM ? 'лицемерным мудаком' : 'лицемерной стервой'}}.

`bb({ eyes:"annoyed", mouth:"smile" });`

b: Как фраза для мотивирующих постеров.

`hong({ body:"shrug", mouth:"narrow" });`

h: "Не будь {{PM ? 'мудаком' : 'стервой'}}™"

(#act4_something_else)

# act4_alone_skills_manipulated

`bb({ eyes:"angry" })`

b: Вдруг мы станем дверным ковриком, на котором написано "Добро пожаловать" или "Приходите снова" и о который все вытирают ноги.

`bb({ mouth:"scream", eyes:"scream" })`

b: Мы будем целовать так много задниц, что это будет выглядеть так, как будто мы красим губы коричневой помадой!

```
bb({ mouth:"normal", eyes:"normal" });
hong( body:"chin" });
```

h: Ты {{AM ? 'прав' : 'права'}}. "Социальные навыки" не только про то, чтобы быть приятным для других, но и про собственные *границы*.

`hong( body:"one_up" });`

h: Мы не можем звать гостей в наш дом, если у нашего дома нет фундамента и стен.

```
hong( eyes:"angry", mouth:"narrow" });
bb( eyes:"annoyed", mouth:"smile" });
```

h: Кстати про тот образ с губной помадой... *Фуууу!*

(#act4_something_else)

# act4_alone_skills_fail

`bb({ eyes:"annoyed" });`

h: Да, это так. У нас может не получится. На самом деле, у нас *точно* не получится хотя бы один раз.

```
bb({ eyes:"normal" });
hong({ eyes:"surprise", body:"shrug" });
```

h: Это то, как должно быть! Когда изучаешь что-то новое, то неудачи и провалы – это про движение вперед!

`hong({ body:"normal", eyes:"normal" });`

h: Так что давай проваливаться вперед вместе!

`bb({ eyes:"normal_r" });`

b: Можно попробовать... в худшем случае, мы можем сменить внешность и переехать в другой город.

`bb({ eyes:"normal" });`

h: Сейчас это стоит около двух биткоинов, я думаю.

(#act4_something_else)

# act4_alone_experiment

```
hong({ body:"one_up" });
bb({ eyes:"normal" });
```

h: Мы можем провести эксперимент!

`hong({ body:"chin" });`

h: Мы могли бы предложить другу встретиться или снова начать общаться.  Или даже просто поговорить с баристой.

`hong({ body:"normal" });`

h: Скорее всего мы обнаружим, что люди настроены к нам доброжелательнее, чем мы ожидаем.

`bb({ eyes:"annoyed" });`

[Что, если это маленькие "дешёвые" победы?](#act4_alone_experiment_cheap)

[Что, если это бремя для других?](#act4_alone_experiment_burden)

[Но светская беседа – это не *настоящие* мы!](#act4_alone_experiment_real_us)

# act4_alone_experiment_real_us

`bb({ eyes:"sad" });`

b: Если мы нацепим на себя фальшивую улыбку, то у нас ни с кем не будет настоящего контакта.

`bb({ eyes:"super_sad" });`

b: А если мы откроемся, то другие люди увидят насколько мы плохие внутри!

`hong({body:"chin", mouth:"narrow", MOUTH_LOCK:true})`

h: ...

```
hong({body:"normal", mouth:"normal"});
bb({eyes:"normal"});
```

h: Перевернись.

b: Что?

`hong({body:"hands_1"})`

h: Собаки демонстрируют свою любовь и доверие, показывая свою уязвимость.

h: Они переворачиваются на спину и раскрываются, выставляя напоказ свою самую незащищённую часть – живот.

`hong({body:"one_up"})`

h: Может, мы *пока ещё* не ощущаем безопасность настолько, чтобы показывать уязвимость. Но хорошо потренировавшись,

`hong({body:"normal", eyes:"surprise"})`

h: мы сможем раскрыться и показать другим настоящих нас – с недостатками, несвершениями и несовершенствами. С *этими* человеческими качествами.

```
hong({eyes:"normal"});
bb({ eyes:"super_sad", mouth:"smile", body:"chest" });
```

b: Я перевернусь, если ты дашь мне вкусняшку.

`bb({ eyes:"normal", mouth:"normal" });`

h: Не дам.

(#act4_something_else)


# act4_alone_experiment_cheap

b: "Привет" баристе не дотягивает до золотой медали на Чемпионате Социальных Навыков.

```
hong({ body:"point", eyes:"surprise" });
bb({ eyes:"normal" });
```

h: Для *нас* дотягивает!

`hong({ body:"one_up", eyes:"annoyed" });`

h: В социальном спорте мы даже не в полулегком весе, мы скорее в ... воздушном весе.

`hong({ body:"normal", eyes:"normal" });`

h: Если мы вынуждены начать с маленьких дешёвых побед, то так тому и быть! Чтобы подняться на 1000й этаж, нужно пройти 1й.

b: Ладно. Может быть, сказав "Привет", у нас получится перейти к ...

`bb({ body:"two_up", mouth:"smile", eyes:"smile_u" });`

b: *"Как дела?"*

`hong({ body:"shrug", mouth:"smile", eyes:"surprise_l" });`

h: *"Будут лучше!"*

(#act4_something_else)

# act4_alone_experiment_burden

`bb({ eyes:"suspect_r" })`

b: Может быть, бариста хочет делать чёртов кофе, а не быть частью *эксперимента*, показывающим наши низкие социальные навыки.

`bb({ eyes:"annoyed" })`

h: Ну, если всё-таки окажется, что мы действительно *являемся* обузой, то ...

```
hong({ eyes:"surprise" });
bb({ eyes:"normal" });
```

h: это тоже полезно знать!

`hong({ eyes:"normal" });`

h: Ведь тогда мы сможем заранее спрашивать людей насколько им комфортно, чтобы знать и уважать их границы.

```
hong({ eyes:"annoyed_l", mouth:"narrow" });
bb({ eyes:"annoyed", mouth:"smile" });
```

h: Вся эта "межличностные хрень" из психологических брошюр.

(#act4_something_else)



# act4_bad

```
_.a4_talked_about_bad = true;
_.a4_fears_discussed += 1;
```

`bb({ eyes:"annoyed_r" })`

b: Но я хочу защитить твою потребность в самореализации. Твоё стремление быть достойным, хорошим, "таким".

`bb({ eyes:"sad_d" })`

b: И где-то глубоко внутри я верю, что мы... испорчены и не заслуживаем этого.

`bb({ body:"two_up", eyes:"angry" })`

{{if _.INJURED}}
b: Только не говори, что с нами всё ок. Мы спрыгнули с *крыши*!
{{/if}}

{{if !_.INJURED}}
b: Только не говори, что с нами всё ок. Мы чуть не спрыгнули с *крыши*!
{{/if}}

`bb({ body:"normal", eyes:"sad" })`

{{if _.a4_fears_discussed==1}}
b: Твоя очередь, человек...
{{/if}}

{{if _.a4_fears_discussed==2}}
b: Что думаешь, человек?
{{/if}}

{{if _.a4_fears_discussed>=3}}
b: У тебя есть ещё какие-то мысли, человек?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Окей, мы испорчены. Давай исправим нас.](#act4_bad_fix)

[Окей, мы испорчены. Давай примем это.](#act4_bad_accept)

[Спасибо.](#act4_thanks) `_.thanks_for = "самореализации и душевном спокойствии";`

# act4_bad_fix

```
bb({eyes:"normal"});
hong({body:"chin"});
```

h: Мы можем попробовать маленькими шажками создать привычки, которые будут поддерживать нас и нашу психику.

h: Или мы можем привести нашу жизнь в соответствие с тем, что для нас действительно важно.

`hong({body:"one_up"});`

h: А ещё, при необходимости мы можем получить профессиональную помощь психотерапевта или психолога.

`hong({body:"normal"});`

h: Есть способы нас исправить.

[Но что, если мы не сможем исправить всё?](#act4_bad_fix_cant)

[Но что, если мы исправим *слишком* много?](#act4_bad_fix_too_much)

[Профессиональная помощь стоит слишком дорого.](#act4_bad_fix_afford)

# act4_bad_fix_cant

`hong({eyes:"annoyed"});`

h: Такое возможно.

h: Мы не сможем исправить всё.

`bb({mouth:"scream", eyes:"scream_sad"});`

b: Я {{AM ? 'знал! Я знал' : 'знала! Я знала'}}, что мы всегда будем испорчены!

`hong({eyes:"surprise"});`

h: Но, по крайней мере, мы можем быть *не настолько* испорченными.

```
bb({mouth:"normal", eyes:"annoyed"});
hong({eyes:"sad", mouth:"smile"});
```

h: Глубокие раны со временем затягиваются, пусть и оставляя шрамы. Это нормально.

`bb({eyes:"annoyed_r"});`

b: {{AM ? 'Согласен' : 'Согласна'}}. А ещё

```
Game.FORCE_TEXT_Y = 460;
Game.clearText();
publish("act4-sexy", [true]);
```

b: Шрамы *сексуальны!*

```
Game.FORCE_TEXT_Y = -1;
Game.clearText();
publish("act4-sexy", [false]);
bb({body:"chest", mouth:"smile_talk", MOUTH_LOCK:true, eyes:"sexy"}, 0);
hong({eyes:"normal", mouth:"normal"}, 0);
```

h: Пожалуйста, не надо.

(#act4_something_else)

# act4_bad_fix_too_much

`bb({ eyes:"angry_d" })`

b: Это непросто признать, но... какая-то часть меня *хочет* оставить наше расстройство психики.

`bb({ eyes:"angry" })`

b: Я имею в виду, не станем ли мы *неинтересными* без него?

`bb({ eyes:"sad_r", body:"one_up" })`

b: Будут ли наши картинки светится без расстройства психики?

`bb({ eyes:"sad_u", body:"two_up" })`

b: Без расстройства психики, будем ли мы общаться с друзьями, у которых есть расстройство психики?

`bb({ eyes:"sad", body:"chest" })`

b: Если мы вдруг почувствуем, что с нами всё ок, не перестанем ли мы заставлять себя делать великие дела?

`hong({ MOUTH_LOCK:true })`

h: ...

h: Если мы боимся даже того, что ... "наши страхи когда-нибудь закончатся"...

h: Тогда я не думаю, что наши страхи действительно закончатся.

`bb({ eyes:"smile_u", body:"normal", mouth:"smile" })`

b: Фууух! Какое облегчение!

(#act4_something_else)

# act4_bad_fix_afford

`bb({ body:"one_up", eyes:"sexy", mouth:"normal" })`

b: — Доктор, я тревожусь, потому что я плачу 5000 в час только за то, что вы спрашиваете: *«Что вы чувствуете?»*

`bb({ body:"paw", eyes:"closed", mouth:"narrow" })`

b: — Гм... И что вы чувствуете?

```
bb({ body:"normal", eyes:"normal", mouth:"normal" });
hong({ eyes:"sad" });
```

h: Это разумное беспокойство.

`hong({ eyes:"annoyed", mouth:"sad" });`

h: И это действительно отстой, что психологическая помощь не доступна для многих людей из-за её цены.

`hong({ eyes:"normal", mouth:"normal" });`

h: Тем не менее, есть варианты, когда можно платить меньше или вообще не платить:

`hong({ body:"chin" })`

h: 1. Онлайн-терапия, некоммерческие или государственные центры помощи, терапия у студентов психологических ВУЗов...

`hong({ body:"hands_1" })`

h: 2. Сформировать привычку: медитировать, хорошо спать, регулярно общаться с друзьями, изучать новое...

`hong({ body:"hands_2" })`

h: 3. Сходить в библиотеку, чтобы взять книгу по психотерапии...

`hong({ body:"one_up" })`

h: В конце игры будет ссылка на материалы о психическом здоровье!

```
hong({ body:"normal" });
bb({ eyes:"annoyed", mouth:"narrow" });
```

b: Что ж, *четвёртая стена* продержалась недолго.

`hong({ body:"point" });`

h: Психическое здоровье важнее, чем правила повествования.

(#act4_something_else)


# act4_bad_accept

```
bb({ eyes:"normal" });
hong({ eyes:"normal_l", body:"one_up", mouth:"narrow" });
```

h: Это ведь то, что говорят терапевты. Принять все свои эмоции, даже негативные.

```
bb({ eyes:"annoyed" });
hong({ eyes:"normal", body:"normal", mouth:"normal" });
```

b: Подожди.

["Принять" как *сдасться*?](#act4_bad_accept_give_up)

["Принять" как *одобрить*?](#act4_bad_accept_approve)

["Принять" как *взять*, буквально?](#act4_bad_accept_literally)

# act4_bad_accept_give_up

`bb({ eyes:"angry", body:"one_up" });`

b: Как ты думаешь, Мартин Лютер Кинг согласился бы сказать:

b: «Давайте просто *примем*, что чёрные не могут сидеть в передней части автобуса, потому что эти места только для белых»?

`bb({ eyes:"angry_r", body:"two_up" });`

b: Почему Промышленный Комплекс Самопомощи думает, что поднять белый флаг – это какая-то *глубокая мудрость?*

`bb({ eyes:"annoyed", body:"normal" });`

h: Я думаю, что под словами "принять плохое" терапевты имеют в виду признать, что плохое существует и что его трудно поменять.

h: И что не обязательно сдаваться и отказываться от намеренья что-то изменить.

`bb({ eyes:"suspect" });`

b: Тогда терапевты должны говорить *признать*, а не *принять*.

`hong({ body:"chin", eyes:"annoyed" });`

h: Ты {{AM ? 'прав' : 'права'}}. Слово "принять" немного запутывает.

`bb({ eyes:"closed", mouth:"narrow" });`

b: Что ж, я *признаю* это.

(#act4_something_else)

# act4_bad_accept_approve

`bb({ eyes:"angry" });`

b: Как будто это *хорошо*, что с нами что-то не так и мы не такие?! Нет!!!

`bb({ eyes:"angry_r", body:"one_up" });`

b: Голливудские сценаристы, которые романтизируют психические расстройства, полны грязи!

`bb({ eyes:"angry", body:"two_up" });`

b: Иметь психическое расстройство – это *отстой!* Потому что это отнимает у людей их *жизни!* Почему мы должны это "принимать"?!

`bb({ body:"normal" });`

h: Я думаю, что под словами "принять эмоции" терапевты имеют в виду: "Будь терпим к ним".

```
hong({ body:"one_up" });
bb({ eyes:"normal" });
```

h: Ситуация с эмоциями как ситуация с зыбучим песком: чем активнее борешься и сопротивляешься, тем быстрее тонешь.

h: Вывод: не сопротивляйся, а спокойно ложись на песок, чтобы перестать тонуть.

`hong({ eyes:"surprise" });`

{{if _.INJURED}}
h: Борьба с тобой, моим страхом, привела меня к прыжку с крыши.
{{/if}}

{{if !_.INJURED}}
h: Борьба с тобой, моим страхом, чуть не привела меня к прыжку с крыши.
{{/if}}

`hong({ body:"normal", eyes:"normal" });`

h: То, что мы делаем прямо сейчас – это решение. Мы не боремся, а терпеливо находимся рядом друг с другом и разговариваем.

`bb({ eyes:"annoyed" });`

b: Тогда они должны говорить *это* вместо такого путающего слова как "принять".

`hong({ body:"chin", eyes:"annoyed" });`

h: Ты {{AM ? 'прав' : 'права'}}. Слово "принять" тут не совсем подходит.

`bb({ eyes:"closed_annoyed", mouth:"narrow" });`

b: Я не принимаю слово "принять".

(#act4_something_else)

# act4_bad_accept_literally

`bb({ eyes:"sad", body:"one_up" });`

b: Но мы уже *знаем*, что тебе не следует понимать меня буквально!

`bb({ eyes:"sad_u", body:"two_up" });`

b: *Проблема* в том, что я хочу помочь тебе, но я не умею использовать точные слова для этого!

`bb({ eyes:"sad", body:"normal" });`

h: Я думаю, что под словами "принять эмоции" терапевты имеют в виду: "Не борись с ними, но и не игнорируй"

`hong({ eyes:"surprise", body:"one_up" });`

h: Слышать тебя, работать *вместе с* тобой, но не воспринимать то, что ты говоришь как стопроцентную правду.

```
hong({ eyes:"normal", body:"normal" });
bb({ eyes:"annoyed", mouth:"normal" });`
```

b: Тогда они должны говорить *это* вместо такого путающего слова как "принять".

`hong({ body:"chin", eyes:"annoyed" });`

h: Наверное, они тоже не умеют использовать точные слова.

(#act4_something_else)




# act4_something_else

```
bb({ body:"normal", mouth:"normal", eyes:"normal" });
hong({ body:"normal", mouth:"normal", eyes:"normal" });
```

{{if _.a4_fears_discussed==1}}
h: Хочешь поговорить о чём-нибудь ещё?
{{/if}}

{{if _.a4_fears_discussed==2}}
h: Есть ли что-нибудь ещё у тебя на сердце?
{{/if}}

{{if _.a4_fears_discussed==3}}
(#act4_something_else_2)
{{/if}}

{{if _.a4_talked_about_harm!=true}}
[Я боюсь получить вред.](#act4_harm)
{{/if}}

{{if _.a4_talked_about_alone!=true && AM}}
[Я боюсь быть отвергнутым.](#act4_alone)
{{/if}}

{{if _.a4_talked_about_alone!=true && !AM}}
[Я боюсь быть отвергнутой.](#act4_alone)
{{/if}}

{{if _.a4_talked_about_bad!=true && AM}}
[Я боюсь оказаться плохим.](#act4_bad)
{{/if}}

{{if _.a4_talked_about_bad!=true && !AM}}
[Я боюсь оказаться плохой.](#act4_bad)
{{/if}}

[Не-а, сейчас мне ок.](#act4c_prelude)

# act4_something_else_2

h: Окей, мы обсудили все страхи.

b: Да, их здесь всего три.

h: Ага, ровно три.

b: Удобно.

(#act4c)

# act4c_prelude

h: Хорошо поговорили, команда!

(#act4c)

# act4c

```
Game.clearText();
music(null,{fade:3});
bb({body:"normal", eyes:"normal", mouth:"normal", MOUTH_LOCK:true},0);
hong({body:"normal", eyes:"normal", mouth:"normal"},0);
```

b: ...

`hong({MOUTH_LOCK:true},0)`

h: ...

`bb({eyes:"annoyed_d"})`

b: Знаешь, это ведь не *игра*.

`bb({eyes:"angry_d", body:"one_up"})`

b: Выстроить здоровые отношения со своими эмоциями не настолько просто, как нажимать на кнопки на экране.

`bb({eyes:"sad", body:"normal"})`

b: *Сможем* ли мы действительно поладить?

b: *Сможем* ли мы работать вместе, как команда?

`hong({eyes:"sad", body:"one_up"})`

h: Что ж,

```
hong({eyes:"surprise_l"});
bb({eyes:"normal"});
```

a: И-извините...

```
Game.clearText();
publish("act4-in-2");
music('campus', {volume:0.5, fade:1});
```

(...2101)

(#act4d)

# act4d

`Game.WORDS_HEIGHT_BOTTOM = 221;`

`publish("act4", ["alshire", 0]);`

a: В-вы не против, если я посижу с вами за ланчем?

`publish("act4", ["alshire", 1]);`

{{if _.TOP_FEAR=="harm" && PM}}
s: *Это* твой краш? Почему он сидит в одиночестве, как какой-то маньяк-психопат?
{{/if}}

{{if _.TOP_FEAR=="harm" && !PM}}
s: *Это* твоя краш-гёрл? Почему она сидит в одиночестве, как какая-то маньячка-психопатка?
{{/if}}

{{if _.TOP_FEAR=="alone" && PM}}
s: Спросить своего краша, можем ли мы посидеть с ним? Ты знаешь, насколько *жалко* это звучит?!
{{/if}}

{{if _.TOP_FEAR=="alone" && !PM}}
s: Спросить свою краш-гёрл, можем ли мы посидеть с ней? Ты знаешь, насколько *жалко* это звучит?!
{{/if}}

{{if _.TOP_FEAR=="bad" && PM}}
s:*Это* твой краш? Мы нарушили тишину и его покой! Мы только и делаем, что мешаем другим!
{{/if}}

{{if _.TOP_FEAR=="bad" && !PM}}
s:*Это* твоя краш-гёрл? Мы нарушили тишину и её покой! Мы только и делаем, что мешаем другим!
{{/if}}

`publish("act4", ["alshire", 2]);`

a: Я, я имею в виду.. не против ли вы, если против, я просто...

`publish("act4", ["alshire", 3]);`

`Game.OVERRIDE_CHOICE_SPEAKER = "h2"`

[Погоди, не тебя ли я {{PM ? 'видел' : 'видела'}} на вечеринке?](#act4d_recognition) `publish("act4", ["hong_to_alshire",1])`

[Да, конечно! Иди сюда!](#act4d_yes) `publish("act4", ["hong_to_alshire",2])`

[Прости, но сейчас я хочу побыть {{PM ? 'один' : 'одна'}}.](#act4d_no) `publish("act4", ["hong_to_alshire",8])`

# act4d_recognition

`publish("act4", ["hong_to_alshire",2]);`

h2: Да, ты {{PM ? 'была' : 'был'}} на диване! На первой вечеринке...

`publish("act4", ["hong_to_alshire",10]);`

{{if _.a2_ending=="fight" && PM}}
h2: где я запаниковал и ударил организаторшу.
{{/if}}

{{if _.a2_ending=="fight" && !PM}}
h2: где я запаниковала и ударила организатора.
{{/if}}

{{if _.a2_ending=="flight" && PM}}
h2: где я запаниковал и убежал в слезах.
{{/if}}

{{if _.a2_ending=="flight" && !PM}}
h2: где я запаниковала и убежала в слезах.
{{/if}}

```
publish("act4", ["hong_to_alshire", 0]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Помедленнее, человек, {{PM ? 'ей' : 'ему'}} может быть некомфортно.

```
publish("act4", ["hong_to_alshire", 3]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: Я имею в виду, что я просто {{PM ? 'вспомнил' : 'вспомнила'}} знакомое лицо.

`publish("act4", ["hong_to_alshire",4]);`

h2: У меня нет намеренья ставить тебя в неловкое положение.

```
publish("act4", ["hong_to_alshire",5]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm" && PM}}
s: АААААА! Я ТАК И ЗНАЛА! ОН ОПАСНЫЙ ПСИХОПАТ!
{{/if}}

{{if _.TOP_FEAR=="harm" && !PM}}
s: АААААА! Я ТАК И ЗНАЛ! ОНА ОПАСНАЯ ПСИХОПАТКА!
{{/if}}

{{if _.TOP_FEAR=="alone" && PM}}
s: АААААА! ТЕПЕРЬ МЫ ВПЕЧАТАЛИСЬ В ЕГО ПАМЯТИ КАК "ОНА СВИДЕТЕЛЬ МОЕЙ ТРАВМЫ"! ОН НАС НЕНАВИДИТ!
{{/if}}

{{if _.TOP_FEAR=="alone" && !PM}}
s: АААААА! ТЕПЕРЬ МЫ ВПЕЧАТАЛИСЬ В ЕЁ ПАМЯТИ КАК "ОН СВИДЕТЕЛЬ МОЕЙ ТРАВМЫ"! ОНА НАС НЕНАВИДИТ!
{{/if}}

{{if _.TOP_FEAR=="bad" && PM}}
s: АААААА! ИЗ-ЗА НАС ОН ВСПОМНИЛ ТРАВМИРУЮЩЕЕ СОБЫТИЕ! ОДНО НАШЕ ПРИСУТСТВИЕ ПРИЧИНЯЕТ БОЛЬ ДРУГИМ!
{{/if}}

{{if _.TOP_FEAR=="bad" && !PM}}
s: АААААА! ИЗ-ЗА НАС ОНА ВСПОМНИЛА ТРАВМИРУЮЩЕЕ СОБЫТИЕ! ОДНО НАШЕ ПРИСУТСТВИЕ ПРИЧИНЯЕТ БОЛЬ ДРУГИМ!
{{/if}}

(#act4e)

# act4d_yes

```
publish("act4", ["hong_to_alshire", 5]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Сбавь напор, человек. Кажется, {{PM ? 'ей' : 'ему'}} некомфортно.

```
publish("act4", ["hong_to_alshire", 6]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: Я имею в виду, что выбор за тобой.

`publish("act4", ["hong_to_alshire", 4]);`

h2: Но ты можешь сесть здесь, если хочешь.

```
publish("act4", ["hong_to_alshire", 5]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm" && PM}}
s: ОН *СЛИШКОМ* ДРУЖЕЛЮБЕН! КАК СЕРИЙНЫЙ УБИЙЦА ТЕД БАНДИ!
{{/if}}

{{if _.TOP_FEAR=="harm" && !PM}}
s: ОНА *СЛИШКОМ* ДРУЖЕЛЮБНА! КАК ТИПИЧНАЯ СЕРИЙНАЯ УБИЙЦА!
{{/if}}

{{if _.TOP_FEAR=="alone" && PM}}
s: ОН ПРОСТО ПРИТВОРЯЕТСЯ ВЕЖЛИВЫМ! НА САМОМ ДЕЛЕ *НИКТО* НЕ ЗАХОЧЕТ БЫТЬ С НАМИ!
{{/if}}

{{if _.TOP_FEAR=="alone" && !PM}}
s: ОНА ПРОСТО ПРИТВОРЯЕТСЯ ВЕЖЛИВОЙ! НА САМОМ ДЕЛЕ *НИКТО* НЕ ЗАХОЧЕТ БЫТЬ С НАМИ!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: АААА! МЫ ВСЕГДА ЗАСТАВЛЯЕМ ДРУГИХ ЧУВСТВОВАТЬ СЕБЯ НЕЛОВКО! МЫ ВСЁ ВСЕГДА ТОЛЬКО ПОРТИМ!
{{/if}}

(#act4e)

# act4d_no

```
publish("act4", ["hong_to_alshire", 9]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Не так резко, человек. {{PM ? 'Ей' : 'Ему'}} может быть некомфортно.

```
publish("act4", ["hong_to_alshire", 3]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: Мне важно побыть наедине со своими эмоциями.

`publish("act4", ["hong_to_alshire", 6]);`

h2: Пожалуйста, не воспринимай это как грубость или личный отказ.

```
publish("act4", ["hong_to_alshire", 7]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm" && PM}}
s: КАКИЕ БОЛЬНЫЕ, ИЗВРАЩЕННЫЕ МЫСЛИ ОН ОБДУМЫВАЕТ?! КАКИЕ ТЁМНЫЕ ЖЕЛАНИЯ В СЕРДЦЕ ЭТОГО ПСИХОПАТА?!
{{/if}}

{{if _.TOP_FEAR=="harm" && !PM}}
s: КАКИЕ БОЛЬНЫЕ, ИЗВРАЩЕННЫЕ МЫСЛИ ОНА ОБДУМЫВАЕТ?! КАКИЕ ТЁМНЫЕ ЖЕЛАНИЯ В СЕРДЦЕ ЭТОЙ ПСИХОПАТКИ?!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: НАС ОТВЕРГЛИ! НАС НИКТО И НИКОГДА НЕ ПОЛЮБИТ!
{{/if}}

{{if _.TOP_FEAR=="bad" && PM}}
s: МЫ ПОМЕШАЛИ ЕГО РАЗГОВОРУ СО СВОИМИ ЭМОЦИЯМИ! ИЗ-ЗА НАС ОН ОСТАНЕТСЯ ТРАВМИРОВАНЫМ НАВСЕГДА!
{{/if}}

{{if _.TOP_FEAR=="bad" && !PM}}
s: МЫ ПОМЕШАЛИ ЕЁ РАЗГОВОРУ СО СВОИМИ ЭМОЦИЯМИ! ИЗ-ЗА НАС ОНА ОСТАНЕТСЯ ТРАВМИРОВАНОЙ НАВСЕГДА!
{{/if}}

(#act4e)

# act4e

```
Game.WORDS_HEIGHT_BOTTOM = 195;
publish("act4", ["alshire", 6]);
```

s: БЕГИ БЕГИ БЕГИ БЕГИ БЕГИ БЕГИ БЕГИ БЕГИ БЕГИ БЕГИ БЕГИ БЕГИ

```
Game.clearText();
publish("act4", ["hong_to_alshire", 0]);
publish("act4", ["alshire", 10]);
sfx("pop");
```

(...1001)

```
publish("act4", ["alshire", 11]);
sfx("alshire_run");
```

(...2601)

```
publish("act4-out-3");
Game.WORDS_HEIGHT_BOTTOM = -1; /* reset */
```

(...1201)

`publish("act4-jumpcut-hong");`

h: Воу! Это было странно. Интересно, что творилось у {{PM ? 'неё' : 'него'}} в голове?

`publish("act4", ["hong_closer", 2]);`

h: Ну да ладно... На чём ты {{AM ? 'остановился' : 'остановилась'}}?

```
publish("act4", ["hong_closer", 1]);
publish("act4", ["bb_closer", 6]);
```

b: Я {{AM ? 'забыл' : 'забыла'}}. Что-то про команду и работу?

```
publish("act4", ["bb_closer", 0]);
publish("act4", ["hong_closer", 3]);
```

h: ¯\_(ツ)_/¯

```
publish("act4", ["hong_closer", 1]);
publish("act4", ["bb_closer", 4]);
```

b: Кто-то говорит, что надо "помириться" со своими эмоциями... Как будто эмоции – это наши *враги*.

`publish("act4", ["bb_closer", 7]);`

b: Но я хочу, чтобы у нас было нечто *большее*, чем просто мир... Я хочу, чтобы мы стали *союзниками!*

`publish("act4", ["bb_closer", 3]);`

b: Я хочу быть тебе как голод и жажда.

`publish("act4", ["bb_closer", 8]);`

b: Голод и жажда – это сигналы от твоих физических потребностей. Я же хочу быть сигналом от твоих *психических* потребностей:

b: в безопасности

b: в принадлежности и контакте

b: в реализации

`publish("act4", ["bb_closer", 1]);`

b: Но... Я плохо справляюсь со своей работой.

`publish("act4", ["bb_closer", 4]);`

b: Я... стараюсь изо всех сил. Я хочу быть {{AM ? '*хорошим* сторожевым псом' : '*хорошей* сторожевой собакой'}} для тебя! Пожалуйста...

`publish("act4", ["bb_closer", 30]);`

b: помоги мне помочь тебе!

`publish("act4", ["bb_closer", 6]);`

b: Мне нужно, что бы ты {{PM ? 'выдрессировал' : 'выдрессировала'}} меня. Но чтобы "научить старую собаку новым трюкам" нужно *время*. Возможно, *годы.*

`publish("act4", ["bb_closer", 3]);`

b: И иногда у меня будут случаться рецидивы, и я буду возвращаться к старым привычкам.

`publish("act4", ["bb_closer", 2]);`

b: Я буду лаять на тени. Я буду вызывать тревожные мысли. Я могу даже транслировать навязчивые... образы.

`publish("act4", ["bb_closer", 9]);`

b: Мне искренне жаль, что я {{AM ? 'потрёпанный пёс' : 'потрёпанная собака'}} из приюта. Собаки из приюта иногда какают на кровать.

`publish("act4", ["bb_closer", 4]);`

b: Но если ты будешь {{PM ? 'терпелив' : 'терпелива'}}... и будешь просто сидеть и говорить со мной... может быть тогда 

`publish("act4", ["bb_closer", 8]);`

b: тебе удастся приручить {{AM ? 'этого волка' : 'эту волчицу'}}!

`publish("act4", ["bb_closer", 0]);`

`Game.clearText();`

(...1000)

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[{{AM ? 'Хороший пёс' : 'Хорошая собака'}}.](#act4f-pat-bb) `Game.OVERRIDE_CHOICE_SPEAKER = "h"; publish("act4", ["hong_closer", 2]);`

`Game.OVERRIDE_CHOICE_SPEAKER = "b"`

[Хороший человек.](#act4f-pat-hong) `Game.OVERRIDE_CHOICE_SPEAKER = "b"; publish("act4", ["bb_closer", 8]);`

# act4f-pat-hong

```
Game.clearText();
publish("hide_tabs");
Game.FORCE_CANT_SKIP = true;
music(null,{fade:0.5});
sfx("youbothwin");
```

```
publish("act4", ["hong_closer", 4]);
publish("act4", ["bb_closer", 13]);
```

(...501)

`publish("act4", ["bb_closer", 14]);`

(...501)

`publish("act4", ["bb_closer", 13]);`

(...501)

`publish("act4", ["bb_closer", 14]);`

(...501)

`publish("act4", ["bb_closer", 13]);`

(...501)

`publish("act4", ["bb_closer", 14]);`

(...6501)

`publish("act4", ["bb_closer", 15]);`

(...1001)

(#act4f)

# act4f-pat-bb

```
Game.clearText();
publish("hide_tabs");
Game.FORCE_CANT_SKIP = true;
music(null,{fade:0.5});
sfx("youbothwin");
```

```
publish("act4", ["hong_closer", 4]);
publish("act4", ["bb_closer", 10]);
```

(...501)

`publish("act4", ["bb_closer", 11]);`

(...501)

`publish("act4", ["bb_closer", 10]);`

(...501)

`publish("act4", ["bb_closer", 11]);`

(...501)

`publish("act4", ["bb_closer", 10]);`

(...501)

`publish("act4", ["bb_closer", 11]);`

(...6501)

`publish("act4", ["bb_closer", 12]);`

(...1001)

(#act4f)

# act4f

```
Game.FORCE_CANT_SKIP = false;
publish("act4", ["bb_closer", 16]);
publish("act4", ["hong_closer", 5]);
```

{{if _.fifteencigs}}
b: ААААА! МЫ ВСЁ ЕЩЁ ОБЕДАЕМ ОДНИ! ПЯТНАДЦАТЬ СИГАРЕТ! ААААА!!!
{{/if}}

{{if _.parasite}}
b: ААААА! МЫ ОПЯТЬ НЕ ДЕЛАЕМ НИЧЕГО ПОЛЕЗНОГО ПОКА ЕДИМ! МЫ ОБЩЕСТВЕННЫЕ ПАРАЗИТЫ! ААААА!!!
{{/if}}

{{if _.whitebread}}
b: ААААА! МЫ СНОВА ЕДИМ БЕЛЫЙ ХЛЕБ! ААААА!!!
{{/if}}

```
publish("act4", ["bb_closer", 18]);
publish("act4", ["hong_closer", 6]);
sfx("yaps", {volume:0.6});
Game.FORCE_CANT_SKIP = true;
Game.WORDS_HEIGHT_BOTTOM = 205;
Game.FORCE_TEXT_DURATION = 90;
Game.FORCE_NO_VOICE = true;
```

b: ТЯФ ТЯФ ТЯФ ТЯФ ТЯФ

(#credits)
