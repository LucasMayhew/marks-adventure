enum ActionKind {
    Walking,
    Idle,
    Jumping
}
function ffgyuio () {
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . f . . . . . . . . . 
. . . . . f e f . . . . . . . . 
. . . . . f e f . . . . . . . . 
. . . . . f e f . . . . . . . . 
. . . . . f e f . . . . . . . . 
. . . . . f e f . . . . . . . . 
. . . . . f e f . . . . . . . . 
. . . . . f e f . . . . . . . . 
. . . . . f e f . . . . . . . . 
. . . . . f e f . . . . . . . . 
. . . f f e e e f f . . . . . . 
. . . . f f e f f . . . . . . . 
. . . . . f e f . . . . . . . . 
. . . . . f f f . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    scene.placeOnRandomTile(mySprite2, 11)
    scene.setTileMap(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 . . . . . . . . . . . . . . 9 
9 . 7 . . . . . . . . . . 7 . 9 
9 . . . . . . . 6 . . . . . . 9 
9 . . . e . . . . . . e . e . 9 
9 2 . . . . . . . . . . . . . 9 
9 . . . . . b . . . . . b . . 9 
9 . 7 . . . . . . . . . . . . 9 
9 . . . . . e . . . . . . . . 9 
9 . . . . . . . . . . e . 7 . 9 
9 . . . . . . . . . . . . . . 9 
9 . e . . b . . . . . . . . . 9 
9 . . . . . . 7 . e . . 7 . . 9 
9 . . . e . . . . . . . . . . 9 
9 . . . . . b . 7 . . . e . . 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, TileScale.ThirtyTwo)
    music.baDing.playUntilDone()
}
scene.onHitTile(SpriteKind.Player, 12, function (sprite) {
    if (info.score() == 3) {
        game.splash("what did you do", "coco")
        mySprite5 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. f f f f f f f f f f f f f . . 
. f 2 2 2 2 f f 2 2 2 2 f f . . 
. f f f f f f f f f f f f f . . 
. f f f 2 2 f f 2 2 f f f f . . 
. f f f 2 2 f f 2 2 f f f f . . 
. f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f . . . 
. f 2 f 2 f 2 f 2 f 2 f f . . . 
. f f 2 2 2 2 2 2 2 f f f . . . 
. f 2 f 2 f 2 f 2 f 2 f f . . . 
. f f f f f f f f f f f f . . . 
. . . f f f f f f f f f . . . . 
5 5 5 f f f f f f f f 5 5 . . . 
f f 5 f f f f f f f f 5 f . . . 
f f f f f f f f f f f f f . . . 
f f f f f f f f f f f f f . . . 
f f f f f f f f f f f f f . . . 
. f f . f f f f f f f . f . . . 
. f . . f f f f f f f . f . . . 
. f . . f f f f f f f . f . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f f f f f f . . . . 
. . . . f f f f f f . f f f . . 
. . f f f f . f f f f . . . . . 
. . . f f . f . . f . f . . . . 
. . f f . f f . . f . f f . . . 
. f f . . f . . . . f . f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        scene.setTile(12, img`
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
`, false)
        scene.placeOnRandomTile(mySprite5, 12)
        game.splash("what", "coco")
        game.splash("its a boss!!!!!!!!!", "mark")
        vvvbvvvvvv = 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(mySprite2)) {
        mySprite2.setImage(img`
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
        sdertyui = 3
        mySprite3.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        scene.placeOnRandomTile(mySprite3, 6)
        wertyui = 1
        sdertyui = 4
    }
})
scene.onHitTile(SpriteKind.Player, 8, function (sprite) {
    if (info.score() == 3) {
        scene.setTileMap(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 f f f 4 4 4 4 4 4 4 4 4 4 4 
4 4 f 6 f 4 4 4 4 4 4 4 4 4 4 4 
4 4 f e f 4 4 4 4 4 4 4 4 4 4 4 
4 4 f e f 4 4 4 4 4 4 4 4 4 4 4 
4 4 f e 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 f e f f f f f f f f 4 4 4 4 
4 4 f e e e e e e e e e f 4 4 4 
4 4 f f f f f f f f f e f 4 4 4 
4 4 f f f 4 4 4 4 f f e f 4 4 4 
4 4 f e e e f f f f e e 4 4 4 4 
4 4 f e e e e e e e e f f 4 4 4 
4 4 f e c e e f f f f f 4 4 4 4 
4 4 f e e e e f 4 4 4 4 4 4 4 4 
4 4 f f f f f f 4 4 4 4 4 4 4 4 
`, TileScale.ThirtyTwo)
        scene.setTile(14, img`
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
`, false)
        scene.setTile(4, img`
2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 4 4 2 2 2 2 2 2 4 2 2 2 2 2 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 4 2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 
2 2 2 2 2 2 2 2 2 4 2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 4 2 2 2 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 4 4 4 2 2 2 2 4 2 2 4 4 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 2 4 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 4 2 4 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 4 4 2 2 2 2 2 2 2 2 2 2 4 4 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 4 2 2 2 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 4 4 2 2 4 2 
2 2 2 2 2 4 4 2 2 4 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 4 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 4 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 2 4 2 
2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 4 2 
2 2 2 2 2 2 2 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 4 2 
2 2 2 2 4 2 4 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 4 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 4 2 
2 2 2 2 2 2 2 2 2 2 4 2 2 4 4 2 2 2 2 2 4 4 2 4 4 2 2 2 2 4 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 4 2 2 
2 2 2 2 4 2 2 2 2 2 4 2 2 2 2 2 2 2 4 4 2 4 2 2 2 2 2 2 4 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 2 4 4 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 4 2 2 2 2 2 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 4 2 2 2 2 
2 2 2 4 4 2 2 2 2 2 4 4 4 2 2 2 2 2 2 2 4 2 2 4 4 4 4 4 2 2 2 2 
2 2 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 4 4 2 2 2 2 
`, true)
        scene.setTile(15, img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, true)
        scene.setTile(12, img`
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
`, true)
        scene.setBackgroundColor(2)
        scene.setBackgroundColor(11)
        scene.placeOnRandomTile(mySprite, 6)
        live = 10
        game.splash("do not touch the red stuff", "coco")
        game.splash("why", "mark")
        game.splash("because it is hot lava", "coco")
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (info.score() > 2) {
        if (projectile3.overlapsWith(projectile3)) {
            live += -1
            pause(500)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(projectile)) {
        info.changeLifeBy(-1)
        pause(2000)
        pause(2000)
    }
})
function doSomething () {
    mySprite4 = sprites.create(img`
. . . . . c c b b b . . . . . . 
. . . . c b d d d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c d d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b d b 
c b b d d d b b b b b d d b d b 
c c b b d d d d d d d b b b d c 
c b c c c b b b b b b b d d c c 
c c b b c c c c b d d d b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
`, SpriteKind.Food)
    anim = animation.createAnimation(ActionKind.Walking, 1000)
    scene.setTile(2, img`
. . . . . c c b b b . . . . . . 
. . . . c b d d d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c d d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b d b 
c b b d d d b b b b b d d b d b 
c c b b d d d d d d d b b b d c 
c b c c c b b b b b b b d d c c 
c c b b c c c c b d d d b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
`, true)
    scene.setTile(8, img`
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
`, false)
    scene.setTileMap(img`
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . . 3 6 . . . . . . . . . . . . . . . . e 
e . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . e 
e . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . e . . . . . . . . . . . . 2 . . . . . e 
e . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . e 
e . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . e 
e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . e . . . . . . e . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . e 
e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e 
e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
`)
    scene.placeOnRandomTile(mySprite4, 8)
    scene.placeOnRandomTile(mySprite, 6)
    anim.addAnimationFrame(img`
. . . . . c c b b b . . . . . . 
. . . . c b d d d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c d d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b d b 
c b b d d d b b b b b d d b d b 
c c b b d d d d d d d b b b d c 
c b c c c b b b b b b b d d c c 
c c b b c c c c b d d d b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
`)
    anim.addAnimationFrame(img`
. . . . . c c b b b . . . . . . 
. . . . c b d d d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c d d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b d b 
c b b d d d b b b b b d d b d b 
c c b b d d d d d d d b b b d c 
c b c c c b b b b b b b d d c c 
c c b b c c c c b d d d b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
`)
    anim.addAnimationFrame(img`
. . b d b . . . . . b b b b . . 
. c b d d b . . . b b d d d b . 
. b c c b . . . b c d d d d b . 
. . . . . . b b c c b d b b b . 
. . . . . b d d b c c b b b c . 
. . b b b c d d b b c c c c . . 
. b d d d b c b b c . . . . . . 
c b d d d d c c c c . b b b . . 
c c b b b b c c c . b d d d b . 
. c c c b b . . b c b b d d b b 
. b b . . . . . b c c b b b b . 
b d d b b . . . . . c c c b . . 
b b d d b c . . b b b b b b b . 
. b c c c b . b d d d b b c b . 
. . . . . . b d d d b c c b . . 
. . . . . . b b b c c c b . . . 
`)
    animation.attachAnimation(mySprite4, anim)
    game.splash("were am I", "Mark")
    game.splash("clic B", "coco")
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (player_v == 1) {
        if (sdertyui == 3) {
            sdfgyhuiolkjhgrewq11111111 += 1
            mySprite.setImage(img`
. . . . . . . . . . . . . . f f f f f f . . . . 
. . . . . . . . . . . . . f 2 f e e e e f f . . 
. . . . . . . . . . . . f 2 2 2 f e e e e f f . 
. . . . . . . c c . . . f e e e e f f e e e f . 
. . . . . . . c e c . f e 2 2 2 2 e e f f f f . 
. . . . . . . c e e c f 2 e f f f f 2 2 2 e f . 
. . . . . . . . c e e c f f e e e f f f f f f f 
. . . . . . . . . c e e c e 4 4 f b e 4 4 e f f 
. . . . . . . . . . c e c e d d f 1 4 d 4 e e f 
. . . . . . . . . . c c c d e d d d 4 e e e f . 
. . . . . . . . . . . e d d 4 e 4 4 e e f f . . 
. . . . . . . . . . . . e e 4 4 2 2 2 2 f . . . 
. . . . . . . . . . . . . f 2 e 2 2 2 2 f . . . 
. . . . . . . . . . . . . f 5 5 4 4 4 4 f . . . 
. . . . . . . . . . . . . . f f f f f f . . . . 
. . . . . . . . . . . . . . . . f f f . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
            pause(100)
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . f 2 f f f f f . . . . 
. . . . . . . . . . . f f 2 2 e e e e e f f . . 
. . . . . . . . . . f f 2 2 2 e e e e e e f f . 
. . . . . . . . . . f e e e e f f f e e e e f . 
. . . . . . . . . f e 2 2 2 2 e e e f f f f f . 
. . . . . . . . . f 2 e f f f f f 2 2 2 e f f f 
. . c c . . . . . f f f e e e f f f f f f f f f 
. . c e c c . . . f e e 4 4 f b b e 4 4 e f e f 
. . c c e e c c . . f e d d f b b 4 d 4 e e f . 
. . . . c e e e c e e f d d d d d 4 e e e f . . 
. . . . . c c e c d d e e 2 2 2 2 2 2 2 f . . . 
. . . . . . c c c d d 4 4 e 5 4 4 4 4 4 f . . . 
. . . . . . . . . e e e e f f f f f f f f . . . 
. . . . . . . . . . . . . f f . . . f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
            pause(100)
            mySprite.setImage(img`
. . . . . . . . . . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . f f 2 f f f f . . . . 
. . . . . . . . . . . . f f 2 f e e e e f f . . 
. . . . . . . . . . . f f 2 2 f e e e e e f f . 
. . . . . . . . . . . f e e e e f f e e e e f . 
. . . . . . . . . . f e 2 2 2 2 e e f f f f f . 
. . . . . . . . . . f 2 e f f f f 2 2 2 e f f f 
. . . . . . . . . . f f f e e e f f f f f f f f 
. . . . . . . . . . f e e 4 4 f b e 4 4 e f e f 
. . . . . . . . . . . f e d d f b 4 d 4 e e f . 
. . . . . . . . . . c . e e d d d 4 e e e f . . 
. . . . c c c c c c c e d d e e 2 2 2 2 f . . . 
. . . . . e e e e e c e d d 4 4 e 4 4 4 f . . . 
. . . . . . c c c c c . e e e e f f f f f . . . 
. . . . . . . . . . c . . . f f f f f f f f . . 
. . . . . . . . . . . . . . . f f . . f f f . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
            pause(100)
            mySprite.setImage(img`
. . . . . . . . . . . . . . f f f f f f . . . . 
. . . . . . . . . . . . . f 2 f e e e e f f . . 
. . . . . . . . . . . . f 2 2 2 f e e e e f f . 
. . . . . . . . . . . . f e e e e f f e e e f . 
. . . . . . . . . . . f e 2 2 2 2 e e f f f f . 
. . . . . . . . . . . f 2 e f f f f 2 2 2 e f . 
. . . . . . . . . . . f f f e e e f f f f f f f 
. . . . . . . . . . . f e e 4 4 f b e 4 4 e f f 
. . . . . . . . . . . . f e d d f 1 4 d 4 e e f 
. . . . . . . . . . . . . f d d d d 4 e e e f . 
. . . . . . . . . . . . . f e 4 4 4 e d d f . . 
. . . . . . . . . . . . . c c c 2 2 e d d f . . 
. . . . . . . . . . . . . c e c 2 2 f e e . . . 
. . . . . . . . . . . . c e e c 4 4 4 4 f . . . 
. . . . . . . . . . . c e e c f f f f f . . . . 
. . . . . . . . . . c e e c . . f f f . . . . . 
. . . . . . . . . . c e c . . . . . . . . . . . 
. . . . . . . . . . c c . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
            pause(100)
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . f f 2 2 f f . . . . . . . . . . . . . 
. . . f f f 2 2 2 2 f f f . . . . . . . . . . . 
. . f f f 2 2 2 2 2 2 f f f . . . . . . . . . . 
. . f f f 2 2 2 2 2 2 f f f . . . . . . . . . . 
. . f e e e e e e e e e e f f . . . . . . . . . 
. f f e 2 2 2 2 2 2 2 2 e f f . . . . . . . . . 
. f f f f f e e e e f f f f f . . . . . . . . . 
. f f e f b f 4 4 f b f e f f . . . . . . . . . 
. . f e 4 1 f d d f 1 4 e f . . . . . . . . . . 
. . . f e 4 d d d d 4 e f e . . . . . . . . . . 
. . . e f 2 2 2 2 2 f 4 e . . . . . . . . . . . 
. . . 4 f 4 4 5 5 4 f 4 e . . . . . . . . . . . 
. . . f f f f f f f d d e . . . . . . . . . . . 
. . . . . f f f f e d d e . . . . . . . . . . . 
. . . . . . . . . . e e . . . . . . . . . . . . 
. . . . . . . . . c c c . . . . . . . . . . . . 
. . . . . . . . c c e c c . . . . . . . . . . . 
. . . . . . . . . c e c . . . . . . . . . . . . 
. . . . . . . . . c e c . . . . . . . . . . . . 
. . . . . . . . . c e c . . . . . . . . . . . . 
. . . . . . . . . c e c . . . . . . . . . . . . 
`)
            pause(100)
            mySprite.setImage(img`
. . . . f f f f f f . . . . . . . . . . . . . . 
. . f f e e e e f 2 f . . . . . . . . . . . . . 
. f f e e e e f 2 2 2 f . . . . . . . . . . . . 
. f e e e f f e e e e f . . . . . . . . . . . . 
. f f f f e e 2 2 2 2 e f . . . . . . . . . . . 
. f e 2 2 2 f f f f e 2 f . . . . . . . . . . . 
f f f f f f f e e e f f f . . . . . . . . . . . 
f f e 4 4 e b f 4 4 e e f . . . . . . . . . . . 
f e e 4 d 4 1 f d d e f . . . . . . . . . . . . 
. f e e e 4 d d d d f . . . . . . . . . . . . . 
. . f d d e 4 4 4 e f . . . . . . . . . . . . . 
. . f d d e 2 2 c c c . . . . . . . . . . . . . 
. . . e e f 2 2 c e c . . . . . . . . . . . . . 
. . . f 4 4 4 4 c e e c . . . . . . . . . . . . 
. . . . f f f f f c e e c . . . . . . . . . . . 
. . . . . f f f . . c e e c . . . . . . . . . . 
. . . . . . . . . . . c e c . . . . . . . . . . 
. . . . . . . . . . . . c c . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
            pause(100)
            mySprite.setImage(img`
. . . . . . . f f . . . . . . . . . . . . . . . 
. . . . f f f f 2 f f . . . . . . . . . . . . . 
. . f f e e e e f 2 f f . . . . . . . . . . . . 
. f f e e e e e f 2 2 f f . . . . . . . . . . . 
. f e e e e f f e e e e f . . . . . . . . . . . 
. f f f f f e e 2 2 2 2 e f . . . . . . . . . . 
f f f e 2 2 2 f f f f e 2 f . . . . . . . . . . 
f f f f f f f f e e e f f f . . . . . . . . . . 
f e f e 4 4 e b f 4 4 e e f . . . . . . . . . . 
. f e e 4 d 4 b f d d e f . . . . . . . . . . . 
. . f e e e 4 d d d e e . c . . . . . . . . . . 
. . . f 2 2 2 2 e e d d e c c c c c c c . . . . 
. . . f 4 4 4 e 4 4 d d e c e e e e e . . . . . 
. . . f f f f f e e e e . c c c c c . . . . . . 
. . f f f f f f f f . . . c . . . . . . . . . . 
. . f f f . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
            pause(100)
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f f f . . . . . . . . . . . . . . 
. . . . f f f f f 2 f . . . . . . . . . . . . . 
. . f f e e e e e 2 2 f f . . . . . . . . . . . 
. f f e e e e e e 2 2 2 f f . . . . . . . . . . 
. f e e e e f f f e e e e f . . . . . . . . . . 
. f f f f f e e e 2 2 2 2 e f . . . . . . . . . 
f f f e 2 2 2 f f f f f e 2 f . . . . . . . . . 
f f f f f f f f f e e e f f f . . . . . c c . . 
f e f e 4 4 e b b f 4 4 e e f . . . c c e c . . 
. f e e 4 d 4 b b f d d e f . . c c e e c c . . 
. . f e e e 4 d d d d d f e e c e e e c . . . . 
. . . f 2 2 2 2 2 2 2 e e d d c e c c . . . . . 
. . . f 4 4 4 4 4 5 e 4 4 d d c c c . . . . . . 
. . . f f f f f f f f e e e e . . . . . . . . . 
. . . f f f . . . f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
            pause(100)
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . f f e e e e f 2 f . . . . . . . . . . . . . 
. f f e e e e f 2 2 2 f . . . . . . . . . . . . 
. f e e e f f e e e e f . . . c c . . . . . . . 
. f f f f e e 2 2 2 2 e f . c e c . . . . . . . 
. f e 2 2 2 f f f f e 2 f c e e c . . . . . . . 
f f f f f f f e e e f f c e e c . . . . . . . . 
f f e 4 4 e b f 4 4 e c e e c . . . . . . . . . 
f e e 4 d 4 1 f d d e c e c . . . . . . . . . . 
. f e e e 4 d d d e d c c c . . . . . . . . . . 
. . f f e e 4 4 e 4 d d e . . . . . . . . . . . 
. . . f 2 2 2 2 4 4 e e . . . . . . . . . . . . 
. . . f 2 2 2 2 e 2 f . . . . . . . . . . . . . 
. . . f 4 4 4 4 5 5 f . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . f f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
            pause(100)
            sdfgyhuiolkjhgrewq11111111 = 0
        } else {
            if (sdertyui == 4) {
                sdfgyhuiolkjhgrewq11111111 += 1
                mySprite.setImage(img`
. . . . . . . . . . . . . . f f f f f f . . . . 
. . . . . . . . . . . . . f 2 f e e e e f f . . 
. . . . . . . . . . . . f 2 2 2 f e e e e f f . 
. . . . . . . c c . . . f e e e e f f e e e f . 
. . . . . . . c e c . f e 2 2 2 2 e e f f f f . 
. . . . . . . c e e c f 2 e f f f f 2 2 2 e f . 
. . . . . . . . c e e c f f e e e f f f f f f f 
. . . . . . . . . c e e c e 4 4 f b e 4 4 e f f 
. . . . . . . . . . c e c e d d f 1 4 d 4 e e f 
. . . . . . . . . . c c c d e d d d 4 e e e f . 
. . . . . . . . . . . e d d 4 e 4 4 e e f f . . 
. . . . . . . . . . . . e e 4 4 2 2 2 2 f . . . 
. . . . . . . . . . . . . f 2 e 2 2 2 2 f . . . 
. . . . . . . . . . . . . f 5 5 4 4 4 4 f . . . 
. . . . . . . . . . . . . . f f f f f f . . . . 
. . . . . . . . . . . . . . . . f f f . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
                pause(100)
                mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . f 2 f f f f f . . . . 
. . . . . . . . . . . f f 2 2 e e e e e f f . . 
. . . . . . . . . . f f 2 2 2 e e e e e e f f . 
. . . . . . . . . . f e e e e f f f e e e e f . 
. . . . . . . . . f e 2 2 2 2 e e e f f f f f . 
. . . . . . . . . f 2 e f f f f f 2 2 2 e f f f 
. . c c . . . . . f f f e e e f f f f f f f f f 
. . c e c c . . . f e e 4 4 f b b e 4 4 e f e f 
. . c c e e c c . . f e d d f b b 4 d 4 e e f . 
. . . . c e e e c e e f d d d d d 4 e e e f . . 
. . . . . c c e c d d e e 2 2 2 2 2 2 2 f . . . 
. . . . . . c c c d d 4 4 e 5 4 4 4 4 4 f . . . 
. . . . . . . . . e e e e f f f f f f f f . . . 
. . . . . . . . . . . . . f f . . . f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
                pause(100)
                mySprite.setImage(img`
. . . . . . . . . . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . f f 2 f f f f . . . . 
. . . . . . . . . . . . f f 2 f e e e e f f . . 
. . . . . . . . . . . f f 2 2 f e e e e e f f . 
. . . . . . . . . . . f e e e e f f e e e e f . 
. . . . . . . . . . f e 2 2 2 2 e e f f f f f . 
. . . . . . . . . . f 2 e f f f f 2 2 2 e f f f 
. . . . . . . . . . f f f e e e f f f f f f f f 
. . . . . . . . . . f e e 4 4 f b e 4 4 e f e f 
. . . . . . . . . . . f e d d f b 4 d 4 e e f . 
. . . . . . . . . . c . e e d d d 4 e e e f . . 
. . . . c c c c c c c e d d e e 2 2 2 2 f . . . 
. . . . . e e e e e c e d d 4 4 e 4 4 4 f . . . 
. . . . . . c c c c c . e e e e f f f f f . . . 
. . . . . . . . . . c . . . f f f f f f f f . . 
. . . . . . . . . . . . . . . f f . . f f f . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
                pause(100)
                mySprite.setImage(img`
. . . . . . . . . . . . . . f f f f f f . . . . 
. . . . . . . . . . . . . f 2 f e e e e f f . . 
. . . . . . . . . . . . f 2 2 2 f e e e e f f . 
. . . . . . . . . . . . f e e e e f f e e e f . 
. . . . . . . . . . . f e 2 2 2 2 e e f f f f . 
. . . . . . . . . . . f 2 e f f f f 2 2 2 e f . 
. . . . . . . . . . . f f f e e e f f f f f f f 
. . . . . . . . . . . f e e 4 4 f b e 4 4 e f f 
. . . . . . . . . . . . f e d d f 1 4 d 4 e e f 
. . . . . . . . . . . . . f d d d d 4 e e e f . 
. . . . . . . . . . . . . f e 4 4 4 e d d f . . 
. . . . . . . . . . . . . c c c 2 2 e d d f . . 
. . . . . . . . . . . . . c e c 2 2 f e e . . . 
. . . . . . . . . . . . c e e c 4 4 4 4 f . . . 
. . . . . . . . . . . c e e c f f f f f . . . . 
. . . . . . . . . . c e e c . . f f f . . . . . 
. . . . . . . . . . c e c . . . . . . . . . . . 
. . . . . . . . . . c c . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
                pause(100)
                mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . f f 2 2 f f . . . . . . . . . . . . . 
. . . f f f 2 2 2 2 f f f . . . . . . . . . . . 
. . f f f 2 2 2 2 2 2 f f f . . . . . . . . . . 
. . f f f 2 2 2 2 2 2 f f f . . . . . . . . . . 
. . f e e e e e e e e e e f f . . . . . . . . . 
. f f e 2 2 2 2 2 2 2 2 e f f . . . . . . . . . 
. f f f f f e e e e f f f f f . . . . . . . . . 
. f f e f b f 4 4 f b f e f f . . . . . . . . . 
. . f e 4 1 f d d f 1 4 e f . . . . . . . . . . 
. . . f e 4 d d d d 4 e f e . . . . . . . . . . 
. . . e f 2 2 2 2 2 f 4 e . . . . . . . . . . . 
. . . 4 f 4 4 5 5 4 f 4 e . . . . . . . . . . . 
. . . f f f f f f f d d e . . . . . . . . . . . 
. . . . . f f f f e d d e . . . . . . . . . . . 
. . . . . . . . . . e e . . . . . . . . . . . . 
. . . . . . . . . c c c . . . . . . . . . . . . 
. . . . . . . . c c e c c . . . . . . . . . . . 
. . . . . . . . . c e c . . . . . . . . . . . . 
. . . . . . . . . c e c . . . . . . . . . . . . 
. . . . . . . . . c e c . . . . . . . . . . . . 
. . . . . . . . . c e c . . . . . . . . . . . . 
`)
                pause(100)
                mySprite.setImage(img`
. . . . f f f f f f . . . . . . . . . . . . . . 
. . f f e e e e f 2 f . . . . . . . . . . . . . 
. f f e e e e f 2 2 2 f . . . . . . . . . . . . 
. f e e e f f e e e e f . . . . . . . . . . . . 
. f f f f e e 2 2 2 2 e f . . . . . . . . . . . 
. f e 2 2 2 f f f f e 2 f . . . . . . . . . . . 
f f f f f f f e e e f f f . . . . . . . . . . . 
f f e 4 4 e b f 4 4 e e f . . . . . . . . . . . 
f e e 4 d 4 1 f d d e f . . . . . . . . . . . . 
. f e e e 4 d d d d f . . . . . . . . . . . . . 
. . f d d e 4 4 4 e f . . . . . . . . . . . . . 
. . f d d e 2 2 c c c . . . . . . . . . . . . . 
. . . e e f 2 2 c e c . . . . . . . . . . . . . 
. . . f 4 4 4 4 c e e c . . . . . . . . . . . . 
. . . . f f f f f c e e c . . . . . . . . . . . 
. . . . . f f f . . c e e c . . . . . . . . . . 
. . . . . . . . . . . c e c . . . . . . . . . . 
. . . . . . . . . . . . c c . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
                pause(100)
                mySprite.setImage(img`
. . . . . . . f f . . . . . . . . . . . . . . . 
. . . . f f f f 2 f f . . . . . . . . . . . . . 
. . f f e e e e f 2 f f . . . . . . . . . . . . 
. f f e e e e e f 2 2 f f . . . . . . . . . . . 
. f e e e e f f e e e e f . . . . . . . . . . . 
. f f f f f e e 2 2 2 2 e f . . . . . . . . . . 
f f f e 2 2 2 f f f f e 2 f . . . . . . . . . . 
f f f f f f f f e e e f f f . . . . . . . . . . 
f e f e 4 4 e b f 4 4 e e f . . . . . . . . . . 
. f e e 4 d 4 b f d d e f . . . . . . . . . . . 
. . f e e e 4 d d d e e . c . . . . . . . . . . 
. . . f 2 2 2 2 e e d d e c c c c c c c . . . . 
. . . f 4 4 4 e 4 4 d d e c e e e e e . . . . . 
. . . f f f f f e e e e . c c c c c . . . . . . 
. . f f f f f f f f . . . c . . . . . . . . . . 
. . f f f . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
                pause(100)
                mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f f f . . . . . . . . . . . . . . 
. . . . f f f f f 2 f . . . . . . . . . . . . . 
. . f f e e e e e 2 2 f f . . . . . . . . . . . 
. f f e e e e e e 2 2 2 f f . . . . . . . . . . 
. f e e e e f f f e e e e f . . . . . . . . . . 
. f f f f f e e e 2 2 2 2 e f . . . . . . . . . 
f f f e 2 2 2 f f f f f e 2 f . . . . . . . . . 
f f f f f f f f f e e e f f f . . . . . c c . . 
f e f e 4 4 e b b f 4 4 e e f . . . c c e c . . 
. f e e 4 d 4 b b f d d e f . . c c e e c c . . 
. . f e e e 4 d d d d d f e e c e e e c . . . . 
. . . f 2 2 2 2 2 2 2 e e d d c e c c . . . . . 
. . . f 4 4 4 4 4 5 e 4 4 d d c c c . . . . . . 
. . . f f f f f f f f e e e e . . . . . . . . . 
. . . f f f . . . f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
                pause(100)
                mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . f f e e e e f 2 f . . . . . . . . . . . . . 
. f f e e e e f 2 2 2 f . . . . . . . . . . . . 
. f e e e f f e e e e f . . . c c . . . . . . . 
. f f f f e e 2 2 2 2 e f . c e c . . . . . . . 
. f e 2 2 2 f f f f e 2 f c e e c . . . . . . . 
f f f f f f f e e e f f c e e c . . . . . . . . 
f f e 4 4 e b f 4 4 e c e e c . . . . . . . . . 
f e e 4 d 4 1 f d d e c e c . . . . . . . . . . 
. f e e e 4 d d d e d c c c . . . . . . . . . . 
. . f f e e 4 4 e 4 d d e . . . . . . . . . . . 
. . . f 2 2 2 2 4 4 e e . . . . . . . . . . . . 
. . . f 2 2 2 2 e 2 f . . . . . . . . . . . . . 
. . . f 4 4 4 4 5 5 f . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . f f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
                pause(100)
                sdfgyhuiolkjhgrewq11111111 = 0
            }
        }
    } else {
        if (player_v == 2) {
            if (controller.right.isPressed()) {
                projectile3 = sprites.createProjectileFromSprite(img`
. . . . . . . . 
. . e e e e . . 
. e e e 4 e e . 
. 4 e e e e e . 
. e e e e e 4 . 
. e e 4 e e e . 
. . e e e e . . 
. . . . . . . . 
`, mySprite, 100, 0)
            } else {
                if (controller.left.isPressed()) {
                    projectile3 = sprites.createProjectileFromSprite(img`
. . . . . . . . 
. . e e e e . . 
. e e e 4 e e . 
. 4 e e e e e . 
. e e e e e 4 . 
. e e 4 e e e . 
. . e e e e . . 
. . . . . . . . 
`, mySprite, -100, 0)
                } else {
                    if (controller.up.isPressed()) {
                        projectile3 = sprites.createProjectileFromSprite(img`
. . . . . . . . 
. . e e e e . . 
. e e e 4 e e . 
. 4 e e e e e . 
. e e e e e 4 . 
. e e 4 e e e . 
. . e e e e . . 
. . . . . . . . 
`, mySprite, 0, -100)
                    } else {
                        if (controller.down.isPressed()) {
                            projectile3 = sprites.createProjectileFromSprite(img`
. . . . . . . . 
. . e e e e . . 
. e e e 4 e e . 
. 4 e e e e e . 
. e e e e e 4 . 
. e e 4 e e e . 
. . e e e e . . 
. . . . . . . . 
`, mySprite, 0, 100)
                        } else {
                            projectile3 = sprites.createProjectileFromSprite(img`
. . . . . . . . 
. . e e e e . . 
. e e e 4 e e . 
. 4 e e e e e . 
. e e e e e 4 . 
. e e 4 e e e . 
. . e e e e . . 
. . . . . . . . 
`, mySprite, Math.randomRange(-100, 100), Math.randomRange(-100, 100))
                        }
                    }
                }
            }
        }
    }
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    if (sdertyui == 1) {
        ffgyuio()
        sdertyui = 2
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    if (info.score() == 1) {
        animation.setAction(mySprite4, ActionKind.Walking)
        pause(1000)
        mySprite4.destroy()
        scene.setTile(8, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 f f f f f f f f f 7 7 7 
7 7 7 7 f b b b b b b b f f 7 7 
7 7 7 f b b b b b b b b b f f 7 
7 7 f b b b b b b b b b b b f f 
7 f b b b b b b b b b b b b b f 
7 f b b b b b b b b b b b b b f 
7 f b b b b b b b b b b b b b f 
7 f b b b b b b b b b b b b b f 
7 f b b b b b b b b b b b b b f 
7 f b b b b b b b b b b b b b f 
7 f b b b b b b b b b b b b b f 
7 f b b b b b b b b b b b b b f 
`, true)
        game.splash("It's a dungin", "coco")
        game.splash("shoud we go in", "mark")
        info.setScore(3)
    }
})
info.onLifeZero(function () {
    game.over(false, effects.splatter)
})
scene.onHitTile(SpriteKind.Player, 4, function (sprite) {
    if (info.score() == 3) {
        info.changeLifeBy(-1)
        pause(500)
        mySprite.setFlag(SpriteFlag.BounceOnWall, true)
    }
})
let sftyuioppoiuytre = 0
let sdfgyhuiolkjhgrewq11111111 = 0
let anim: animation.Animation = null
let mySprite4: Sprite = null
let projectile: Sprite = null
let projectile3: Sprite = null
let live = 0
let wertyui = 0
let vvvbvvvvvv = 0
let mySprite2: Sprite = null
let sdertyui = 0
let mySprite: Sprite = null
let mySprite5: Sprite = null
let mySprite3: Sprite = null
let player_v = 0
player_v = 1
mySprite3 = sprites.create(img`
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
`, SpriteKind.Food)
mySprite5 = sprites.create(img`
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
`, SpriteKind.Food)
game.splash("were is my sword ", "Mark")
game.splash("were am I", "Mark")
game.splash("the forst of woter ", "???????")
info.setScore(0)
info.setLife(3)
scene.setBackgroundColor(7)
scene.setTileMap(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 . . . . . . . . . . . . . . 9 
9 . 7 . . . . . . . . . . 7 . 9 
9 . . . . . . . 6 . . . . . . 9 
9 . . . e . . . . . . e . e . 9 
9 2 . . . . . . . . . . . . . 9 
9 . . . . . b . . . . . b . . 9 
9 . 7 . . . . . . . . . . . . 9 
9 . . . . . e . . . . . . . . 9 
9 . . . . . . . . . . e . 7 . 9 
9 . . . . . . . . . . . . . . 9 
9 . e . . b . . . . . . . . . 9 
9 . . . . . . 7 . e . . 7 . . 9 
9 . . . e . . . . . . . . . . 9 
9 . . . . . b . 7 . . . e . . 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, TileScale.ThirtyTwo)
scene.setTile(14, img`
. . . . . . . . . . . . . . . c c . . . . . . . . . . . . . . . 
. . . . . . . . . . . . c c c 6 5 c 6 6 . . . . . . . . . . . . 
. . . . . . . . . . . . c 6 c 5 5 c 7 6 . . . . . . . . . . . . 
. . . . . . . . . . . 6 c c 7 5 5 7 c 6 6 . . . . . . . . . . . 
. . . . . . . . . . c c 7 7 7 7 7 5 7 7 c 6 . . . . . . . . . . 
. . . . . . . . . 6 6 6 c 6 7 7 7 7 6 c c 6 6 . . . . . . . . . 
. . . . . . . . c 7 7 7 6 c 7 c 6 7 6 5 7 5 7 6 . . . . . . . . 
. . . . . . . . c c c 6 6 6 c 6 6 6 6 5 5 6 6 6 . . . . . . . . 
. . . . . . c 6 6 c c 7 6 6 6 6 6 7 7 7 7 c 6 7 6 6 . . . . . . 
. . . . . c 7 7 7 c 7 7 6 6 7 6 6 7 7 6 7 7 6 7 7 7 6 . . . . . 
. . . . . c c 6 6 c c c c 7 7 c 6 7 7 c c 6 6 6 6 6 6 . . . . . 
. . . . c 6 7 6 6 6 6 6 c 7 c 6 7 6 7 6 7 7 7 7 7 7 6 6 . . . . 
. . . c c 7 7 7 6 6 6 6 6 6 6 7 7 7 6 7 7 7 7 6 6 7 c 6 6 . . . 
. 6 6 6 c c 6 6 7 7 6 6 6 6 6 7 7 7 7 7 7 7 7 7 6 6 7 7 6 6 6 . 
. 6 7 7 7 6 6 7 7 c 6 7 6 6 7 7 7 7 7 7 7 6 6 7 7 6 7 7 7 7 6 . 
c c 6 6 6 6 c c c 6 7 7 6 7 7 7 6 7 7 7 7 7 6 c c 7 7 6 7 6 6 6 
c 6 6 6 7 7 7 6 6 7 7 6 6 7 7 6 c 7 7 6 7 7 7 c 6 7 7 7 6 c 6 6 
. c 6 7 7 7 6 6 6 c c c 6 6 7 c 6 7 6 c c 6 6 6 6 6 7 7 7 6 c . 
. c c 6 6 6 6 7 6 6 6 6 6 c c 6 6 6 6 6 6 6 6 7 7 6 c c 6 6 6 . 
. . . 6 6 7 7 6 c 6 6 6 6 6 6 6 6 6 6 7 7 6 6 7 7 6 6 c c c c . 
. . . c c 7 6 c 6 6 7 6 6 6 6 6 6 6 7 6 7 7 6 6 7 7 7 6 c . . . 
. . . 6 c c c c 6 7 7 6 6 6 6 6 6 7 7 6 7 7 7 c 7 7 6 6 6 . . . 
. . . . . . 6 c c c 7 c 6 7 7 6 7 7 7 6 c 7 7 6 c c . . . . . . 
. . . . . . . . c c c 6 7 7 7 c 6 7 7 7 6 c c 6 . . . . . . . . 
. . . . . . . . . . . c c 7 7 c 6 7 7 6 6 . . . . . . . . . . . 
. . . . . . . . . . . . . 6 c 6 6 6 6 . . . . . . . . . . . . . 
. . . . . . . . . . . . f f e e e e f . . . . . . . . . . . . . 
. . . . . . . . . . f f e e e e e e e e f . . . . . . . . . . . 
. . . . . . . . . . . . . f e e e f f e . . . . . . . . . . . . 
. . . . . . . . . . . . . . f e f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f e f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . 
`, true)
scene.setTile(11, img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`, false)
scene.setTile(4, img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`, false)
scene.setTile(7, img`
. . . . . . 6 6 6 6 . . . . . . 
. . . . . c 6 7 7 6 c . . . . . 
. . . . c 6 7 5 7 7 6 c . . . . 
. . 6 6 c c 6 5 5 6 c c 6 6 . . 
6 6 6 5 5 5 6 7 5 6 5 5 7 6 6 6 
6 6 7 7 7 5 7 6 7 5 5 7 7 7 7 6 
. c c c 6 6 7 6 6 5 7 6 c c 6 . 
6 c 6 6 6 6 6 c c 6 6 6 6 6 c 6 
6 6 7 7 7 c c c c c c 7 7 7 6 6 
6 7 7 7 6 6 c c c c 6 6 7 7 7 6 
c 6 c c 6 7 6 c c 6 7 6 c c 6 c 
. c c 5 5 7 6 7 7 6 7 5 5 c c . 
. c 6 7 5 5 6 7 7 6 5 5 7 6 c . 
. 6 6 7 7 6 6 5 5 6 6 7 7 6 6 . 
. . 6 6 6 6 c 6 7 6 c 6 6 6 . . 
. . . 6 6 c . 6 6 6 . c 6 . . . 
`, true)
scene.setTile(9, img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, true)
scene.setTile(2, img`
2 2 2 2 2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 f c 2 7 7 2 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 f f c 2 7 5 7 7 2 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 f 2 2 c c 2 5 5 2 c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 5 5 5 2 7 5 2 5 5 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 7 7 7 5 7 2 7 5 5 7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
f c c c 2 2 7 2 2 5 7 2 c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 c 2 2 2 2 2 c c 2 2 2 2 2 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 7 7 7 c c c c c c 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 7 7 7 2 2 c c c c 2 2 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
c 2 c c 2 2 2 c c 2 7 2 c c 2 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
f c c 5 5 2 2 7 7 2 7 5 5 c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
f c 2 7 5 5 2 7 7 2 5 5 7 2 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
f f 2 7 7 2 2 5 5 2 2 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 f 2 2 2 2 c 2 7 2 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 f 2 2 c f 2 2 2 f c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, true)
mySprite = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
sdertyui = 1
scene.placeOnRandomTile(mySprite, 6)
forever(function () {
    if (player_v == 1) {
        if (controller.left.isPressed() || controller.right.isPressed()) {
            while (controller.left.isPressed()) {
                mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d e e e e e f . . . 
. . . f e 4 e d d 4 f . . . . . 
. . . f 2 2 e d d e f . . . . . 
. . f f 5 5 f e e f f f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`)
                pause(100)
                mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 2 f e e e e f f . . . 
. . . f 2 2 2 f e e e e f f . . 
. . . f e e e e f f e e e f . . 
. . f e 2 2 2 2 e e f f f f . . 
. . f 2 e f f f f 2 2 2 e f . . 
. . f f f e e e f f f f f f f . 
. . f e e 4 4 f b e 4 4 e f f . 
. . . f e d d f 1 4 d 4 e e f . 
. . . . f d d d e e e e e f . . 
. . . . f e 4 e d d 4 f . . . . 
. . . . f 2 2 e d d e f . . . . 
. . . f f 5 5 f e e f f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f f . . . f f . . . . 
`)
                pause(100)
                mySprite.setImage(img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`)
                pause(100)
            }
            while (controller.right.isPressed()) {
                mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . 4 d d e 4 4 4 e f . . . 
. . . . e d d e 2 2 2 2 f . . . 
. . . . f e e f 4 4 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`)
                pause(100)
                mySprite.setImage(img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`)
                pause(100)
                mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e e e d d d f . . . 
. . . . . f 4 d d e 4 e f . . . 
. . . . . f e d d e 2 2 f . . . 
. . . . f f f e e f 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`)
                pause(100)
            }
        } else {
            while (controller.up.isPressed()) {
                mySprite.setImage(img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
                pause(100)
                mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . . f f f f 2 2 f f f f . . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f f 2 f e f . . 
. . f f f 2 f e e 2 2 f f f . . 
. . f e 2 f f e e 2 f e e f . . 
. f f e f f e e e f e e e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . . e f f f f f f f f 4 e . . 
. . . 4 f 2 2 2 2 2 e d d 4 . . 
. . . e f f f f f f e e 4 . . . 
. . . . f f f . . . . . . . . . 
`)
                pause(100)
                mySprite.setImage(img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
                pause(100)
                mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . . f f f f 2 2 f f f f . . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e f 2 f f f 2 f 2 e f . . 
. . f f f 2 2 e e f 2 f f f . . 
. . f e e f 2 e e f f 2 e f . . 
. f f e e e f e e e f f e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f e . . . 
. . 4 d d e 2 2 2 2 2 f 4 . . . 
. . . 4 e e f f f f f f e . . . 
. . . . . . . . . f f f . . . . 
`)
                pause(100)
            }
            while (controller.down.isPressed()) {
                mySprite.setImage(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
                pause(100)
                mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . . f e 4 d d d d 4 e f e . . 
. . f e f 2 2 2 2 e d d 4 e . . 
. . e 4 f 2 2 2 2 e d d e . . . 
. . . . f 4 4 5 5 f e e . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f . . . . . . . . . 
`)
                pause(100)
                mySprite.setImage(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
                pause(100)
                mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f e e 2 2 2 2 2 2 e f f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . e f e 4 d d d d 4 e f . . . 
. . e 4 d d e 2 2 2 2 f e f . . 
. . . e d d e 2 2 2 2 f 4 e . . 
. . . . e e f 5 5 4 4 f . . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . f f f . . . . 
`)
                pause(100)
            }
        }
    }
    if (player_v == 2) {
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f . . f f . . . . . 
. . . . . f f . . f f . . . . . 
. f f . . 4 4 4 4 4 4 . . . . . 
. f f . . e f e e f e . . . . . 
. f e e . 4 4 4 4 4 4 . . . . . 
. . e e e f f f f f f . e e . . 
. . . e e f f f f f f f e e . . 
. . . . f f f f f f f f e e . . 
. . . . f f f f f f . . e e . . 
. . . . f f . . f f . . . . . . 
. . . . f f . . f f . . . . . . 
. . . . f f f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
})
forever(function () {
    if (vvvbvvvvvv == 1) {
        mySprite5.setImage(img`
. . . . . . . . . . . . . . . . 
. f f f f f f f f f f f f f . . 
. f 2 2 2 2 f f 2 2 2 2 f f . . 
. f f f f f f f f f f f f f . . 
. f f f 2 2 f f 2 2 f f f f . . 
. f f f 2 2 f f 2 2 f f f f . . 
. f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f . . . 
. f 2 f 2 f 2 f 2 f 2 f f . . . 
. f f 2 2 2 2 2 2 2 f f f . . . 
. f 2 f 2 f 2 f 2 f 2 f f . . . 
. f f f f f f f f f f f f . . . 
. . . f f f f f f f f f . . . . 
5 5 5 f f f f f f f f 5 5 . . . 
f f 5 f f f f f f f f 5 f . . . 
f f f f f f f f f f f f f . . . 
f f f f f f f f f f f f f . . . 
f f f f f f f f f f f f f . . . 
. f f . f f f f f f f . f . . . 
. f . . f f f f f f f . f . . . 
. f . . f f f f f f f . f . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f f f f f f . . . . 
. . . . f f f f f f . f f f . . 
. . f f f f . f f f f . . . . . 
. . . f f . f . . f . f . . . . 
. . f f . f f . . f . f f . . . 
. f f . . f . . . . f . f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        mySprite5.x += Math.randomRange(-10, 10)
        pause(100)
        mySprite5.y += Math.randomRange(-10, 10)
        pause(100)
        scene.cameraShake(4, 500)
        pause(2000)
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . 2 . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`, mySprite5, 0, 100)
        pause(2000)
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . 2 . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`, mySprite5, 0, -100)
        pause(2000)
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . 2 . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`, mySprite5, -100, 0)
        pause(2000)
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . 2 . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`, mySprite5, 100, 0)
        pause(2000)
        projectile.destroy()
        mySprite5.setImage(img`
. . . . . . . . . . . . . . . . 
. f f f f f f f f f f f f f . . 
. f 2 f f f f f f f f f f f . . 
. f f f f f f f f f f f f f . . 
. f 2 2 2 2 2 2 2 2 2 2 f f . . 
. f f f 2 2 f f 2 2 f f f f . . 
. f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f . . . 
. f 2 f 2 f 2 f 2 f 2 f f . . . 
. f 2 2 2 2 2 2 2 2 2 2 f . . . 
. f 2 f 2 f 2 f 2 f 2 f f . . . 
. f f f f f f f f f f f f . . . 
. . . f f f f f f f f f . . . . 
5 5 5 f f f f f f f f 5 5 . . . 
f f 5 f f f f f f f f 5 f . . . 
f f f f f f f f f f f f f . . . 
f f f f f f f f f f f f f . . . 
f f f f f f f f f f f f f . . . 
. f f . f 2 2 f 2 2 f . f . . . 
. f . . f f f f f f f . f . . . 
. f . . f f f 2 f f f . f . . . 
. . . . f f f f f f f . . . . . 
. . . . f f 2 2 2 f f . . . . . 
. . . . f f f f f f f f . . . . 
. . . . f f f f f f . f f f . . 
. . f f f f . f f f f . . . . . 
. . . f f . f . . f . f . . . . 
. . f f . f f . . f . f f . . . 
. f f . . f . . . . f . f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        pause(2000)
        pause(2000)
        pause(10000)
    }
})
forever(function () {
    if (vvvbvvvvvv == 1) {
        if (live == 0) {
            mySprite5.destroy(effects.halo, 2000)
            info.setLife(4)
            game.splash("we did it", "mark and coco")
            info.changeScoreBy(4)
            vvvbvvvvvv = 2
        }
    }
})
forever(function () {
    if (wertyui == 1) {
        sftyuioppoiuytre = 0
        mySprite3.setVelocity(Math.randomRange(-100, 100), Math.randomRange(-100, 100))
        pause(2000)
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 1 1 . . . . . . 1 1 . . . . 
. . 1 1 1 1 1 1 1 1 1 1 . . . . 
. . 1 1 . . . . . . 1 1 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite3, Math.randomRange(-100, 100), Math.randomRange(-100, 100))
        pause(2000)
        sftyuioppoiuytre += 1
        mySprite3.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 f f f f . . . . . 
. . . . . . f f f c d b 1 b c 1 1 1 c f . . . . 
. . . . f c 1 1 1 c b f b f 1 b 1 b 1 f . . . . 
. . . . f 1 b 1 b 1 f f f f b f b f b f . . . . 
. . . . f b f b f f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f . . . . . . . . . . 
. . . . . . . . . . f f f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(100)
        mySprite3.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(100)
        mySprite3.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . f f f f 1 1 1 1 1 1 b f . . . . . . . 
. . . . f c 1 1 1 c d b 1 b d f f f . . . . . . 
. . . . f 1 b 1 b c b f b f c 1 1 1 c f . . . . 
. . . . f b f b f b f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . f f f f f f f b f b f . . . . 
. . . . . . . . . . f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(100)
        mySprite3.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . . 
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . . 
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . . 
. . . f b f b f f c f 1 1 f c d d f . . . . . . 
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . . 
. . . . . . . c c b d b 1 b 1 f c f . . . . . . 
. . . . . . . f f f b f b f d f f . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f c 1 1 1 c f . . . . 
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . . f f f f b f b f b f . . . . 
. . . . . . . . . . . f f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(100)
        mySprite3.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . 7 . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . 7 . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . 7 . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . 7 . . f d d d 1 1 1 1 d d d f f . . . . . 
. . . 7 7 . f b d b f d d f b d b f c f . . . . 
. . . 7 7 7 f c d c f 1 1 f c d c f b f . . . . 
. . . . 7 7 f f f b d b 1 b d f f c f . . . . . 
. . . . f c b 1 b c f f f f f f . . . . . . . . 
. . . . f 1 c 1 c 1 f f f f f f . . . . . . . . 
. . . . f d f d f d f f f f f . . . . . . . . . 
. . . . . f . f . f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(100)
        mySprite3.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 1 f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f c d d 1 1 1 1 d d c f f . . . . . 
. . . . . . . f b c f 1 1 f c b f b b f . . . . 
. . . . . . . f f b d b 1 b d f f f f . . . . . 
. . . . . . . . f c b f b f d f . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . f f f f f f f f f f . . . . . . . . 
. . . . . f c b 1 b c f f f f . . . . . . . . . 
. . . . . . f f b f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(100)
        mySprite3.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d 1 1 1 1 1 1 d d f . . . . . . 
. . . . . . f b d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f c d b f d d f b d b f . . . . . . 
. . . . . . . f b c f 1 1 f c b f f f . . . . . 
. . . . . . . f f b 1 1 1 1 b c f b c f . . . . 
. . . . . . . . f c d b 1 b d f b b b f . . . . 
. . . . . . . f f f f f f f f f f c f . . . . . 
. . . . . f c b 1 b c f f f f f . . . . . . . . 
. . . . . f 1 b 1 b 1 f f f f . . . . . . . . . 
. . . . . . f f b f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(100)
        mySprite3.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(2000)
    }
})
forever(function () {
    if (sdfgyhuiolkjhgrewq11111111 == 1) {
        if (mySprite.overlapsWith(mySprite3)) {
            mySprite3.destroy(effects.fire, 500)
            effects.starField.startScreenEffect(1000)
            info.changeScoreBy(1)
            sdertyui = 4
            wertyui = 2
            doSomething()
            scene.placeOnRandomTile(mySprite, 6)
        }
    } else {
        if (mySprite.overlapsWith(mySprite3)) {
            if (sftyuioppoiuytre == 1) {
                info.changeLifeBy(-1)
                pause(2000)
            }
        }
    }
})
forever(function () {
    if (info.score() > 0) {
        if (player_v == 1) {
            if (controller.B.isPressed()) {
                controller.moveSprite(mySprite, 200, 200)
                player_v = 2
            }
        }
        pause(100)
        if (player_v == 2) {
            if (controller.B.isPressed()) {
                controller.moveSprite(mySprite, 100, 100)
                player_v = 1
            }
        }
    }
})
forever(function () {
    if (sdertyui == 1) {
        music.playTone(988, music.beat(BeatFraction.Half))
        music.playTone(932, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(622, music.beat(BeatFraction.Half))
        pause(100)
        music.playTone(220, music.beat(BeatFraction.Half))
        music.playTone(196, music.beat(BeatFraction.Half))
        music.playTone(175, music.beat(BeatFraction.Half))
        music.playTone(196, music.beat(BeatFraction.Half))
    } else {
        if (sdertyui == 2) {
            music.playTone(233, music.beat(BeatFraction.Half))
            music.playTone(208, music.beat(BeatFraction.Half))
            music.playTone(233, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(277, music.beat(BeatFraction.Half))
            music.playTone(233, music.beat(BeatFraction.Half))
            music.playTone(196, music.beat(BeatFraction.Half))
        } else {
            if (sdertyui == 3) {
                music.playTone(147, music.beat(BeatFraction.Half))
                pause(100)
                music.playTone(165, music.beat(BeatFraction.Half))
                pause(100)
                music.playTone(175, music.beat(BeatFraction.Half))
                pause(100)
                music.playTone(165, music.beat(BeatFraction.Half))
                music.playTone(147, music.beat(BeatFraction.Half))
                music.playTone(131, music.beat(BeatFraction.Half))
                music.playTone(131, music.beat(BeatFraction.Half))
                music.playTone(175, music.beat(BeatFraction.Half))
            } else {
                if (info.score() == 1) {
                    music.playTone(220, music.beat(BeatFraction.Half))
                    music.playTone(220, music.beat(BeatFraction.Half))
                    music.playTone(220, music.beat(BeatFraction.Half))
                    music.playTone(220, music.beat(BeatFraction.Half))
                    music.playTone(220, music.beat(BeatFraction.Half))
                    music.playTone(196, music.beat(BeatFraction.Half))
                    music.playTone(196, music.beat(BeatFraction.Half))
                    music.playTone(196, music.beat(BeatFraction.Half))
                    music.playTone(196, music.beat(BeatFraction.Half))
                    pause(100)
                    for (let index = 0; index < 10; index++) {
                        music.playTone(392, music.beat(BeatFraction.Half))
                        music.playTone(370, music.beat(BeatFraction.Half))
                        music.playTone(349, music.beat(BeatFraction.Half))
                    }
                } else {
                    if (info.score() == 3) {
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(147, music.beat(BeatFraction.Half))
                        music.playTone(147, music.beat(BeatFraction.Half))
                        music.playTone(147, music.beat(BeatFraction.Half))
                        music.playTone(147, music.beat(BeatFraction.Half))
                        music.playTone(147, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                        music.playTone(131, music.beat(BeatFraction.Half))
                    }
                }
            }
        }
    }
})
forever(function () {
    if (info.score() > 2) {
        if (mySprite.overlapsWith(mySprite5)) {
            pause(2000)
            live += -1
        }
    }
})
