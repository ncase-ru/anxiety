# intro

`SceneSetup.intro();`

# intro-play-button

(...51)

[ИГРАТЬ!](#intro-start) `publish("intro-to-game-1"); Game.OVERRIDE_CHOICE_LINE=true;`

# intro-start

(...500)

`clearText()`

n3: Прежде чем мы начнём, как бы *тебе* хотелось читать?

`publish("show_options_bottom")`

# intro-start-2

n3: А сейчас, начнём нашу историю..

```
publish("hide_tabs");
clearText();
```

(...1000)

`publish("intro-to-game-2")`

n2: ЭТО ЧЕЛОВЕК

(...600)

`clearText()`

(...300)

`publish("intro-to-game-3")`

# act1

```
SceneSetup.act1();
publish("hide_tabs");
music('battle', {volume:0.5});
```

(...300)

n: А ЭТО ЕГО ТРЕВОГА

n: _ТЫ_ – ЭТА ТРЕВОГА

(#act1_normal)

# act1_normal

```
hong({body:"putaway"});
sfx("rustle");
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Нет! Нет! Не-а! Я тебя не слушаю! Проверю свой телефон.

```
sfx("rustle2");
hong({body:"phone1", mouth:"neutral", eyes:"neutral"})
```

n: ТВОЯ РАБОТА – ЗАЩИТИТЬ ТВОЕГО ЧЕЛОВЕКА ОТ *ОПАСНОСТИ*

`bb({eyes:"look", mouth:"small_lock", body:"fear"})`

b: Ты проскролливаешь свою жизнь! Снова!

```
bb({eyes:"normal", mouth:"normal", body:"normal"});
hong({eyes:"annoyed"});
```

h: И я ещё удивляюсь, почему я забиваю на свои мысли... 

`hong({eyes:"neutral"});`

n: БЫСТРЕЕ, ПРЕДУПРЕДИ ЕГО ОБ *ОПАСНОСТИ!*

```
bb({eyes:"look"});
```

[Взгляни на эту ужасную новость!!](#act1d_news)

[Эти комментарии о *нас?*](#act1d_subtweet)

[GIF-ка с котиком, лакающем молочко](#act1d_milk)

# act1d_milk

`hong({mouth:"smile", eyes:"surprise"});`

h:  А это довольно мило! Я поде...

```
hong({mouth:"shock", eyes:"shock"});
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.8;
```

b: КОШКИ НЕ ПЕРЕВАРИВАЮТ МОЛОКО! МЫ УЖАСНЫЕ ЛЮДИ, ПОТОМУ ЧТО НАСЛАЖДАЕМСЯ НАСИЛИЕМ НАД ЖИВОТНЫМИ!

(...200)

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
attack("20p", "bad");
publish("hp_show");
```



