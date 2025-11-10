let temperatura: number;
let luz: number;
let musica_alegre: string;
let musica_triste: string;
// Repte 4
while (true) {
    temperatura = input.temperature()
    if (temperatura > 22) {
        basic.showString("calor")
    } else {
        basic.showString("fred")
    }
    
}
// Repte 5
while (true) {
    luz = input.lightLevel()
    if (luz > 200) {
        musica_alegre = "G D F B E A"
        music.play(music.stringPlayable(musica_alegre, 120), music.PlaybackMode.UntilDone)
    } else {
        musica_triste = "A B D E F G"
        music.play(music.stringPlayable(musica_triste, 120), music.PlaybackMode.UntilDone)
    }
    
}
