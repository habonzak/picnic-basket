scene.setBackgroundImage(img`
    11111222221111122222111112222211111222221111122222111112222211111222221111122222................................................................................
    11111222221111122222111112222211111222221111122222111112222211111222221111122222................................................................................
    11111222221111122222111112222211111222221111122222111112222211111222221111122222................................................................................
    11111222221111122222111112222211111222221111122222111112222211111222221111122222................................................................................
    11111222221111122222111112222211111222221111122222111112222211111222221111122222................................................................................
    22222111112222211111222221111122222111112222211111222221111122222111112222211111................................................................................
    22222111112222211111222221111122222111112222211111222221111122222111112222211111................................................................................
    22222111112222211111222221111122222111112222211111222221111122222111112222211111................................................................................
    22222111112222211111222221111122222111112222211111222221111122222111112222211111................................................................................
    22222111112222211111222221111122222111112222211111222221111122222111112222211111................................................................................
    11111222221111122222111112222211111222221111122222111112222211111222221111122222................................................................................
    11111222221111122222111112222211111222221111122222111112222211111222221111122222................................................................................
    11111222221111122222111112222211111222221111122222111112222211111222221111122222................................................................................
    11111222221111122222111112222211111222221111122222111112222211111222221111122222................................................................................
    11111222221111122222111112222211111222221111122222111112222211111222221111122222................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
let picnicFood = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
picnicFood.setImage(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
let foodImages = [
img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `,
img`
    4 4 4 . . 4 4 4 4 4 . . . . . . 
    4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
    . . c 4 4 d 4 4 4 4 4 d d 5 d c 
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
    . . . . c c b 4 4 4 b b 4 5 4 4 
    . . . . . . c c c c c c b b 4 . 
    `,
img`
    . . . . . 3 3 b 3 3 d d 3 3 . . 
    . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
    . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
    . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
    . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
    . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
    . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
    . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
    . 4 4 d 1 1 1 1 1 1 d d d b b . 
    . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
    4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
    4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
    4 5 5 d 5 5 d b b b d d 3 . . . 
    4 5 5 5 d d d d 4 4 b 3 . . . . 
    . 4 5 5 5 4 4 4 . . . . . . . . 
    . . 4 4 4 . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `,
img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `
]
let foodStrings = [
"apple",
"lemon",
"ice cream",
"cherries",
"strawberry"
]
