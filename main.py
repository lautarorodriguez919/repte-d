#Repte 4
while True:
    temperatura = input.temperature()
    if temperatura > 22:
        basic.show_string("calor")
    else:
        basic.show_string("fred")

#Repte 5
while True:
    luz = input.light_level()
    if luz > 200:
        musica_alegre = "G D F B E A"
        music.play(music.string_playable(musica_alegre, 120), music.PlaybackMode.UNTIL_DONE)
    else:
        musica_triste = "A B D E F G"
        music.play(music.string_playable(musica_triste, 120), music.PlaybackMode.UNTIL_DONE)