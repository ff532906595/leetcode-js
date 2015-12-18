/**
 * Created by ·« on 2015/12/13.
 */
/**You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to
guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in
 said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the
 secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to
 eventually derive the secret number.
 */
function getHint(secret, guess) {
    var map = {};
    var A = 0;
    var B = 0;
    for (var i = 0; i < 10; i++) map[i] = 0;
    for (i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) A++;
        else {
            map[secret[i]]++;
            B += map[secret[i]] <= 0 ? 1 : 0;
            map[guess[i]]--;
            B += map[guess[i]] >= 0 ? 1 : 0;
        }
    }
    return A + 'A' + B + 'B';
}