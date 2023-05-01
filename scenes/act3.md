# act3

```
SceneSetup.act3();
Game.WORDS_HEIGHT_BOTTOM = 205;
sfx("cheers");
```

r: Твоё здоровье!

```
publish("act3",["roofhunter",1]);
publish("act3",["roofhong",1]);
sfx("drinking");
```

(...4001)

```
publish("act3-alpha", ["dizzyhunter",1]);
publish("act3-alpha", ["dizzyhong",1]);
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",3]);
```

h2: Это *бьёт* по мозгам!

```
publish("act3",["roofhunter",2]);
publish("act3",["roofhong",2]);
```

r: Знаешь, {{PM ? 'чувак' : 'няш'}}...

```
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",6]);
```

h2: А именно, по правому и левому миндалевидным телам.

```
publish("act3",["roofhunter",8]);
publish("act3",["roofhong",5]);
```

r: Ты напоминаешь мне меня в прошлом. Меня тогда тоже мучило животное в моей голове.

```
publish("act3",["roofhunter",9]);
publish("act3",["roofhong",2]);
```

r: Я {{PM ? 'рада' : 'рад'}}, что прямо сейчас могу отплатить ему! А заодно и помочь тебе убить своего зверя, как {{PM ? 'убила' : 'убил'}} его я.

```
publish("act3",["roofhunter",2]);
```

r: Не думай! Правда или действ--

```
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",7]);
publish("act3-alpha", ["dizzyhong",0]);
```

h2: ДЕЙСТВИЕ!

```
publish("act3-alpha", ["dizzyhong",1]);
publish("act3",["roofhunter",10]);
publish("act3",["roofhong",2]);
```

r: Хаха! Отлично!

```
publish("act3",["roofhunter",21]);
publish("act3",["roofhong",4]);
```

r: Видишь тот голубенький бассейн внизу?

```
publish("act3-alpha", ["dizzyhong",0]);
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",9]);
```

h2: Этот? Шестью этажами ниже?

```
publish("act3",["roofhunter",10]);
publish("act3",["roofhong",8]);
```

r: Прыгни в него!

```
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",10]);
```

h2: ...

```
publish("act3",["roofhong",11]);
```

h2: Чего!?

```
publish("act3",["roofhong",10]);
publish("act3",["roofhunter",2]);
```

r: Зверь начал скулить?

```
publish("act3",["roofhunter",23]);
```

r: *О неееет, это опасно, не дееееелай этого...*

```
publish("act3",["roofhunter",22]);
```

r: Именно поэтому нам нужна *смертельная* опасность!

r: Оторвись по полной! Carpe diem! Нюхни порошка {{PM ? 'с жопы шлюхи' : 'с члена'}}! Живёшь лишь раз!

```
publish("act3",["roofhunter",10]);
```

r: Покажи зверю, что нам абсолютно *^похуй^* на его скулёж! Прыгай!

```
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",13]);
```

h2: Эм, но иногда, эмм... страх полезен...

```
publish("act3",["roofhunter",5]);
publish("act3",["roofhong",12]);
music(null, {fade:2});
```

r: ...

```
publish("act3-alpha", ["dizzyhunter",0]);
publish("act3",["roofhunter",6]);
publish("act3",["dd",1]);
```

r: {{PM ? 'Чувак, ты' : 'Ты'}} реально ведёшься на эту пропаганду{{PM ? '' : ', пупсик'}}!? Что чувствовать себя плохо – это *хорошо?*

```
publish("act3",["roofhunter",17]);
```

r: ^Гандоны^, которые управляют этим миром, вгоняют в депрессию и тревогу всех *остальных*,

```
publish("act3",["roofhunter",18]);
```

r: а потом говорят на TED Talks, чтобы мы "приняли" состояние полнейшей ^наёбанности^ и "обняли" демона-садиста в наших головах!

```
publish("act3",["roofhunter",6]);
```

r: {{PM ? 'Чувак' : 'Няш'}}, я знаю, что *ты* знаешь, что животное *травмирует* таких, как мы. Оно издевается над *всеми* нами.

```
publish("act3",["roofhunter",19]);
```

r: Оно нам не друг. Оно – взбесившийся зверь, которого нужно либо *усыпить*,

```
publish("act3",["roofhunter",20]);
```

r: либо *пристрелить*.

```
publish("act3",["roofhunter",27]);
```

r: Иначе ты позволишь ему победить!

```
publish("act3",["roofhunter",31]);
publish("act3",["roofhong",14]);
publish("act3",["dd",2]);
```

h2: Ты ошибаешься.

```
publish("act3",["roofhunter",13]);
publish("act3",["roofhong",15]);
music('battle_dark', {volume:1.0}, function(){
    music('battle_dark_loop');
});
```

h2: Я не позволю {{AM ? 'ему' : 'ей'}} победить!

```
publish("act3",["roofhunter",25]);
publish("act3-alpha", ["roofhong",0]);
publish("act3-alpha", ["transition",1]);
publish("act3",["dd",6]);
```

r: Дааааа{{PM ? ', ^ахуенно^! Я в тебя верю, чувак' : '! Я верю в тебя'}}! Убей {{AM ? 'его' : 'её'}}!

(#act3a)



# act3a

```
Game.clearText();
publish("act3-out");
Game.WORDS_HEIGHT_BOTTOM = -1; /* reset */
_.act3_bb_body = 1;
```

(...1500)

```
publish("hp_show");
```

b: нет нет нет нет нет нет

n: У ЭТОЙ ГЛАВЫ ДВЕ КОНЦОВКИ. ОДНА ИЗ НИХ *ОЧЕНЬ, ОЧЕНЬ ПЛОХАЯ*.

b: НЕТ НЕТ НЕТ НЕТ НЕТ НЕТ НЕТ НЕТ

n: ВЫБИРАЙ МУДРО. ЗАЩИТИ СВОЕГО ЧЕЛОВЕКА.

`bb({ eyes:"oh_crap", mouth:"normal_talk", MOUTH_LOCK:true });`

b: ААААААААААААААААААААА

`bb({ mouth:"normal" });`

n: УДАЧИ

```
Game.clearText();
bb({ eyes:"start" });
```

[Человек, ты РЕАЛЬНО можешь УМЕРЕТЬ!](#act3a_harm) `Game.OVERRIDE_CHOICE_LINE=true`

[Это глупо и опасно!](#act3a_bad) `Game.OVERRIDE_CHOICE_LINE=true`

[{{PM ? 'Эта дура тебе не подруга!' : 'Этот придурок тебе не друг!'}}](#act3a_alone) `Game.OVERRIDE_CHOICE_LINE=true`

# act3a_harm

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: Ч--

(#act3a_after)

# act3a_alone

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: Э--

(#act3a_after)

# act3a_bad

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: Э--

(#act3a_after)

# act3a_after

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: Знаешь, я бы может быть и {{PM ? 'поверил' : 'поверила'}}... если бы ты не {{AM ? 'говорил' : 'говорила'}} об этом миллион раз.

h: Ты {{AM ? 'волк, который кричал:' : 'волчица, которая кричала:'}} "Волки!"

```
bb({ eyes:"sad" });
```

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_harm"`

[](#act3_fork) `_.SPECIAL_ATTACK="harm"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_alone"`

[](#act3_fork) `_.SPECIAL_ATTACK="alone"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_bad"`

[](#act3_fork) `_.SPECIAL_ATTACK="bad"; Game.OVERRIDE_CHOICE_LINE=true`


# act3_fork

```
Game.clearText();
bb({body:"special_attack"});
sfx("charging");
Game.FORCE_CANT_SKIP = true;
```

(...1001)

```
Game.FORCE_CANT_SKIP = false;
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: Ты и это уже {{AM ? 'пробовал' : 'пробовала'}}.

b: человек, пожалуйста...

`hong({ eyes:"look_right" });`

h: Ой, *простите*, доктор против моего самолечения?!

h: Слыш, ^сука^, у нас у *всех* есть способы заткнуть тебя ^нахуй^.

`hong({ body:"look_up", eyes:"look_up" });`

h: Кто-то с головой уходит в работу.

`hong({ body:"look_down", eyes:"look_down" });`

h: Кто-то забывается сексом, наркотиками и обновлением новостных лент.

`hong({ body:"normal", eyes:"look_right" });`

h: Кто-то растворяет себя в других людях.

`hong({ eyes:"angry" });`

h: А я собираюсь раствориться в этом бассейне.

[Ты {{PM ? 'пьян' : 'пьяна'}}, а он ШЕСТЬЮ ЭТАЖАМИ НИЖЕ!](#act3_bad_1_harm)

[И это твоя благодарность?](#act3_bad_1_insult) `bb({eyes:"angry"});`

[Я {{AM ? 'накосячил! Я был не прав' : 'накосячила! Я была не права'}}!](#act3_good_1) `bb({mouth:"sorry", eyes:"sorry_down"});`

# act3_bad_1_harm

b: Даже если ты приземлишься в воду, ты *как минимум* сломаешь себе рёбра и получишь сотрясение из-за поверхностного натяжения воды!

h: Эх.

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: Я {{PM ? 'видел' : 'видела'}}, как прыгают в воду

(#act3_bad_2)

# act3_bad_1_insult

`hong({ eyes:"look_right" });`

h: Я что, *благодарить* тебя {{PM ? 'должен' : 'должна'}}?!

`bb({ eyes:"angry" });`

b: Я *существую*, чтобы тебя защищать! Потому что людям этого доверить нельзя!

b: Я защищаю твою тупую задницу всю свою жизнь! А сейчас ты просто хоч--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)

# act3_good_1

`hong({ body:"laugh_1" })``

h: ха.

`hong({ body:"laugh_2" })``

h: Хахаха!

`hong({ body:"laugh_3" })``

h: АХАХАХАХА!!!

```
bb({ eyes:"sorry"});
hong({ body:"yell_1", mouth:"yell", eyes:"blank" });
```

h: Да это же, *^блять^*, величайшее преуменьшение века!

`hong({ body:"yell_2" });`

h: Это был твой огромный *^проёб^*, ты, вонючая куча кроваво-красного ^дерьма^! 

`hong({ body:"normal", mouth:"angry", eyes:"angry" });`

h: Что-нибудь ещё, Капитан Очевидность?

[Но месть мне – это не решение!](#act3_good_1_fail_revenge) `bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });`

[Но *сейчас* я {{AM ? 'прав' : 'права'}}!](#act3_good_1_fail_harm) `bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });`

[Я {{AM ? 'ранил' : 'ранила'}} тебя.](#act3_good_2a)


# act3_good_1_fail_revenge

b: Тебе необходимо научиться строить здоровые отношения со своими эмоциями, а не топить их в--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)



# act3_good_1_fail_harm

b: Поэтому, пожалуйста, поставь бутылку и давай--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)




# act3_bad_2

`bb({ eyes:"sad" });`

b: пожалуйста... не надо

h: Твоя шкала энергии практически на нуле, {{AM ? 'волк' : 'волчица'}}.

h: На твоём месте, я бы очень аккуратно {{PM ? 'подбирал' : 'подбирала'}} слова.

`bb({ eyes:"normal" });`

[Ладно! Я больше не буду тебя защищать!](#act3_bad_2_jump) `bb({ mouth:"ignore", eyes:"ignore" });`

[Я вижу больше, чем ты!](#act3_bad_2_right)

[Прости...](#act3_good_2b) `bb({mouth:"sorry", eyes:"sorry_down"});`


# act3_bad_2_jump

b: Вперёд, прыгай! Мне всё равно!

`hong({ eyes:"look_right", mouth:"normal", MOUTH_LOCK:true });`

h: ...

```
hong({ eyes:"less_angry", mouth:"normal" });
bb({ eyes:"ignore_oh_crap" });
```

h: Отлично! Тогда до дна!

```
bb({ mouth:"normal", eyes:"oh_crap" });
Game.OVERRIDE_TEXT_SPEED = 2;
```

b: НЕТ! ПОДОЖДИ! ЭТО РЕВЕРСИВНАЯ ПСИХОЛОГИЯ! ТЫ {{PM ? 'ДОЛЖЕН' : 'ДОЛЖНА'}} ПОСТУПИТЬ *НАОБОРОТ*, А НЕ ТАК КАК Я СКАЗ--

(#act3_bad_3)



# act3_bad_2_right

`bb({ eyes:"angry" });`

b: *Ты* {{PM ? 'вогнал' : 'загнала'}} себя в опасность. Твои "друзья" *манипулируют* тобой! Ты используешь их! Увидь это, человек!

`bb({ eyes:"sad" });`

b: Почему ты не веришь мне?!

h: Потому что ты не {{AM ? 'верил' : 'верила'}} *в меня*!

(#act3_bad_3)


# act3_bad_2_terrible

`bb({ eyes:"angry" });`

b: Другие люди терпеливо тренируют своих сторожевых волков. Они *учатся* работать как команда,

b: а не отвечают ненавистью на попытки защитить! Почему бы тебе прост--

`bb({ eyes:"normal" });`

h: Неправильный, б^лят^ь, ответ!

(#act3_bad_3)



# act3_bad_3

```
music(null);
hong({body:"drink"});
bb({body:"attacked"});
publish("bb_STOP_VIBRATING");
attackBB("100p");
```

(...2000)

```
hong({ body:"normal", mouth:"normal", eyes:"normal" });
bb({ body:"dead" });
```

(...999)

h: *"Единственное, чего стоит бояться – это самого страха"*

`hong({ body:"look_up", mouth:"happy", eyes:"blank" });`

h: *"Не парься, будь счастлив"*

`hong({ body:"normal", mouth:"normal", eyes:"normal" });`

h: "Негативные эмоции *вредны*"

`hong({ eyes:"less_angry" });`

h: и именно поэтому их называют *негативными!*

b: человек... пожалуйста...

`hong({ eyes:"normal" });`

h: Я говорил, что я просто хочу не чувствовать всю эту... боль

h: И моё желание сбылось! Я больше не чувствую ни боли, ни страха, ни тревожности...

h: Я больше вообще *НИЧЕГО* не чувствую!

`_.a3_ending = "jump";`

(#act3_end)



# act3_good_2a

`bb({mouth:"sorry", eyes:"sorry_down"});`

b: Я так {{AM ? 'желал' : 'желала'}} защитить тебя от боли, что не {{AM ? 'видел' : 'видела'}} ничего другого. Я не {{AM ? 'остановился и не осознал' : 'остановилась и не осознала'}}, что это *я* причиняю тебе боль.

```
bb({ eyes:"sorry"});
hong({ body:"yell_2", mouth:"yell", eyes:"blank" });
```

h: А^ХУЕ^ТЬ!

`hong({ body:"yell_1" });`

h: Сколько же тебе понадобилось времени, чтобы наконец-то понять это!

`hong({ body:"cry", mouth:"cry", eyes:"blank" });`

h: Ты {{AM ? 'мог' : 'могла'}} бы избавить меня от стольких неприятностей! Ты – {{AM ? 'большой пушистый долбоволк' : 'большая пушистая дурында'}}. Почему ты не {{AM ? 'понял' : 'поняла'}} этого раньше?...

`_.apologized_for_hurt = true;`

(#act3_good_2q)



# act3_good_2b

`hong({ body:"normal", mouth:"angry", eyes:"look_right" });`

h: ...ты просишь *прощения*

`hong({ eyes:"angry", MOUTH_LOCK:true });`

h: ...

h: Прощения *за что?*

(#act3_good_2q)


# act3_good_2q

`bb({mouth:"sorry", eyes:"sorry"});`

{{if _.apologized_for_hurt}}
(#act3_good_2q_already_apologized)
{{/if}}

{{if !_.apologized_for_hurt}}
(#act3_good_2q_not_already_apologized)
{{/if}}


# act3_good_2q_already_apologized

`hong({ body:"normal", mouth:"angry", eyes:"less_angry" });`

[Прости, что я {{AM ? 'впал' : 'впала'}} в крайность.](#act3_good_3_protector)

[Прости, что я не {{AM ? 'уважал' : 'уважала'}} тебя.](#act3_good_3_respect)

[Прости. Мне жаль.](#act3_good_4)


# act3_good_2q_not_already_apologized

`hong({ body:"normal", mouth:"angry", eyes:"angry" }, 0);`

[Прости, что мне достался такой ужасный человек!](#act3_bad_2_terrible) `bb({mouth:"normal", eyes:"normal"})`

[Прости, что я не {{AM ? 'уважал' : 'уважала'}} тебя.](#act3_good_3_respect)

[Прости, что {{AM ? 'ранил' : 'ранила'}} тебя.](#act3_good_3_hurt)



# act3_good_3_protector

`bb({eyes:"sorry_down"});`

b: Моя обязанность – предупреждать тебя о *реальной* опасности. А я {{AM ? 'лаял' : 'лаяла'}} на проезжающие машины, велосипеды и птиц.

`bb({eyes:"sorry_up"});`

b: Я {{AM ? 'лаял' : 'лаяла'}} на тени слишком часто.

`bb({eyes:"sorry"});`

b: Вполне логично, что ты хочешь надеть на меня намордник.

`bb({eyes:"sorry_down"});`

b: Прости.

(#act3_good_4)



# act3_good_3_respect

`bb({eyes:"sorry_down"});`

b: Мне следовало быть {{AM ? '*твоим* преданным сторожевым псом. Но я вёл' : '*твоей* преданной сторожевой волчицой. Но я вела'}} себя так, как будто это *ты* {{PM ? 'должен' : 'должна'}} подчиняться мне.

`bb({eyes:"sorry_up"});`

b: Я не {{AM ? 'заметил' : 'заметила'}} разницы между {{AM ? 'защитником  и тюремным надсмотрщиком' : 'защитницей и тюремной надсмотрщицой'}}. Я {{AM ? 'выбрал' : 'выбрала'}} не ту роль.

`bb({eyes:"sorry_down"});`

b: Прости.

(#act3_good_4)



# act3_good_3_hurt

`bb({eyes:"sorry_down"});`

b: Я так {{AM ? 'желал' : 'желала'}} защитить тебя от боли, что не {{AM ? 'видел ничего другого. Я не остановился и не осознал' : 'видела ничего другого. Я не остановилась и не осознала'}}, что это *я* причиняю тебе боль.

`bb({eyes:"sorry_up"});`

b: Я {{AM ? 'вёл себя как плохой пёс' : 'вела себя как плохая волчица'}}.

`bb({eyes:"sorry_down"});`

b: Прости.

(#act3_good_4)


# act3_good_4

```
music(null,{fade:3});
hong({ eyes:"less_angry", MOUTH_LOCK:true },0);
```

h: ...

```
hong({ body:"stop", mouth:"stop", eyes:"blank" });
```

h: Это, конечно, была глупая идея.

h: Я {{PM ? 'делал' : 'делала'}} это только для того, чтобы достучаться до тебя. И у меня получилось.

h: Давай просто закончим этот раунд вничью. Ладно?

```
bb({ mouth:"sorry", eyes:"sorry" });
bb({ MOUTH_LOCK:true });
```

b: ...

b: Хорошо.

h: Хорошо.

n: *НИЧЬЯ*

`_.a3_ending = "walkaway";`

(#act3_end)









# act3_end

```
Game.clearText();
publish("act3-in");
publish("hp_hide");
Game.FORCE_CANT_SKIP = true;
```

{{if _.a3_ending=="walkaway"}}
(#act3_walkaway)
{{/if}}

{{if _.a3_ending=="jump"}}
(#act3_jump)
{{/if}}






# act3_walkaway

```
publish("start-walkaway-anim");
Game.WORDS_HEIGHT_BOTTOM = 205;
```

(...3501)

```
sfx("bottle_toss");
publish('hong-next');
publish("act3",["roofhunter",7]);
```

(...667)

```
publish("act3",["dd",4]);
publish("act3",["roofhunter",26]);
publish('hong-next');
sfx("concrete_step1");
```

(...667)

```
publish('hong-next');
sfx("concrete_step2");
```

(...667)

```
publish('hong-next');
publish("act3",["roofhunter",27]);
```

`Game.FORCE_CANT_SKIP = false;`

r: *Что!?* После всего того, что животное сделало с тобой, ты просто *сдашься?*

r: {{PM ? 'Чувак, в' : 'В'}} в чём дело{{PM ? '' : ', няш'}}!? Ты *боишься*?!

```
publish('hong-next');
publish("act3",["roofhunter",26]);
```

h2: Да.

h2: Я боюсь.

`publish('hong-next')`

h2: В этой ситуации я {{PM ? '*должен*' : '*должна*'}} бояться.

`publish('hong-next')`

h2: Это нормально.

`publish('hong-next')`

(...500)

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

(...1167)

```
publish('hong-next');
```

(...833)

```
publish('hong-next');
sfx("rustle2");
```

(...1333)

```
publish('hong-next');
publish("act3",["dd",5]);
publish("act3",["roofhunter",31]);
sfx("concrete_step4");
```

(...667)

```
publish('hong-next');
sfx("concrete_step1");
```

(...667)

```
publish('hong-next');
sfx("door");
```

(...1333)

```
publish('hong-next');
sfx("concrete_step2");
```

(...501)

```
publish('hong-next');
```

(...501)

```
Game.FORCE_CANT_SKIP = false;
sfx("lock_door");
publish("act3",["roofhunter",32]);
```

(...2001)

```
publish("act3",["roofhunter",33]);
```

r: {{PM ? 'Он закрыл' : 'Она закрыла'}} дверь?!

```
Game.clearAll();
_.INJURED = false;
Game.WORDS_HEIGHT_BOTTOM = -1;
```

(...2000)

(#act4)




# act3_jump

```
publish("start-jump-anim");
Game.FORCE_TEXT_Y = 300;
```

(...2001)

```
publish('hong-next');
sfx("bottle_toss");
```

(...833)

```
sfx("concrete_step1");
sfx("claps");
publish('hong-next');
publish("act3",["dd",4]);
publish("act3",["roofhunter",28]);
```
(...125)

`publish("act3",["roofhunter",29]);`

(...125)

`publish("act3",["roofhunter",28]);`

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

```
sfx("concrete_step2");
publish('hong-next');
publish("act3",["roofhunter",28]);
```

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

`publish("act3",["roofhunter",28]);`

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

```
sfx("concrete_step3");
publish('hong-next');
publish("act3",["dd",5]);
publish("act3",["roofhunter",34]);
```

(...1167)

```
sfx("rustle2");
publish('hong-next');
```

(...1001)

`publish('hong-next')`

b: нет

(...501)

`Game.clearText();`

`publish('hong-next')`

(...1333)

```
sfx("quack");
publish('hong-next');
```

(...1333)

`publish('hong-next')`

b: нет нет нет

(...501)

`Game.clearText();`

`publish('hong-next')`

(...2001)

```
sfx("rustle2");
publish('hong-next')
```

(...501)

```
sfx("concrete_step1");
publish('hong-next');
publish("act3",["dd",4]);
publish("act3",["roofhunter",30]);
```

(...167)

```
sfx("concrete_step2");
publish('hong-next');
```

(...167)

```
sfx("concrete_step3");
publish('hong-next');
publish("act3",["dd",2]);
publish("act3",["roofhunter",15]);
```

(...167)

```
sfx("bottle_slip");
publish('hong-next');
publish("act3",["dd",3]);
publish("act3",["roofhunter",16]);
```

(...833)

```
sfx("rustle");
publish('hong-next');
```

(...167)

`publish('hong-next')`

(...167)

```
publish('hong-next');
Game.FORCE_TEXT_Y = 325;
Game.OVERRIDE_FONT_SIZE = 50;
```

b: НЕТ!

(...400)

```
Game.WORDS_HEIGHT_BOTTOM = -1;
Game.FORCE_TEXT_Y = -1;
Game.clearText();
publish("act4-injury-show");
publish("hide_tabs");
```

(...2000)

```
sfx("hospital1");
publish("act4-injury", [1]);
```

(...4000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...2000)

```
sfx("hospital2");
publish("act4-injury", [2]);
```

(...4000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...2000)

```
sfx("hospital3");
publish("act4-injury", [3]);
```

(...8000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...5500)

`_.INJURED = true;`

(#act4)
