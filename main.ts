input.onButtonPressed(Button.A, function () {
    Ship.move(-1)
})
input.onPinPressed(TouchPin.P2, function () {
    Bullet_1 = game.createSprite(Ship.get(LedSpriteProperty.X), Ship.get(LedSpriteProperty.Y) - 1)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        Bullet_1.change(LedSpriteProperty.Y, -1)
    }
    Bullet_1.delete()
})
input.onButtonPressed(Button.B, function () {
    Ship.move(1)
})
input.onPinPressed(TouchPin.P1, function () {
    Bullet_2 = game.createSprite(Ship.get(LedSpriteProperty.X), Ship.get(LedSpriteProperty.Y) - 1)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        Bullet_2.change(LedSpriteProperty.Y, -1)
    }
    Bullet_2.delete()
})
let Bullet_2: game.LedSprite = null
let Bullet_1: game.LedSprite = null
let Ship: game.LedSprite = null
Ship = game.createSprite(2, 4)
let Alien_1 = game.createSprite(0, 0)
let Set_1 = 1
let Alien_2 = game.createSprite(4, 0)
let Set_2 = 1
game.setLife(3)
game.setScore(0)
basic.forever(function () {
    while (Set_1 == 1) {
        for (let index = 0; index < 4; index++) {
            Alien_1.move(1)
            basic.pause(1000)
        }
        Alien_1.turn(Direction.Right, 90)
        Alien_1.move(1)
        basic.pause(1000)
        Alien_1.turn(Direction.Right, 90)
        for (let index = 0; index < 4; index++) {
            Alien_1.move(1)
            basic.pause(1000)
        }
        Alien_1.turn(Direction.Left, 90)
        Alien_1.move(1)
        basic.pause(1000)
        Alien_1.turn(Direction.Left, 90)
    }
})
basic.forever(function () {
    while (Set_2 == 1) {
        Alien_2.turn(Direction.Right, 180)
        for (let index = 0; index < 4; index++) {
            Alien_2.move(1)
            basic.pause(1000)
        }
        Alien_2.turn(Direction.Left, 90)
        Alien_2.move(1)
        basic.pause(1000)
        Alien_2.turn(Direction.Left, 90)
        for (let index = 0; index < 4; index++) {
            Alien_2.move(1)
            basic.pause(1000)
        }
        Alien_2.turn(Direction.Right, 90)
        Alien_2.move(1)
        basic.pause(1000)
        Alien_2.turn(Direction.Right, 90)
    }
})
basic.forever(function () {
    if (Bullet_1.isTouching(Alien_1) || Bullet_2.isTouching(Alien_1)) {
        game.addScore(1)
        Alien_1.delete()
        Set_1 = 0
        Alien_1 = game.createSprite(0, 0)
        Set_1 = 1
    }
    if (Bullet_1.isTouching(Alien_2) || Bullet_2.isTouching(Alien_2)) {
        game.addScore(1)
        Alien_1.delete()
        Set_1 = 0
        Alien_1 = game.createSprite(0, 0)
        Set_1 = 1
    }
    if (Alien_1.isTouching(Ship)) {
        game.removeLife(1)
        Alien_1.delete()
        Set_1 = 0
        Alien_1 = game.createSprite(0, 0)
        Set_1 = 1
    }
    if (Alien_2.isTouching(Ship)) {
        game.removeLife(1)
        Alien_2.delete()
        Set_2 = 0
        Alien_2 = game.createSprite(4, 0)
        Set_2 = 1
    }
    if (game.isGameOver()) {
        basic.showNumber(game.score())
    }
})
