input.onButtonPressed(Button.A, function () {
    Ship.move(-1)
})
input.onPinPressed(TouchPin.P2, function () {
    Bullet_1 = game.createSprite(Ship.get(LedSpriteProperty.X), Ship.get(LedSpriteProperty.Y) - 1)
    for (let index = 0; index < 4; index++) {
        Bullet_1.change(LedSpriteProperty.Y, -1)
        basic.pause(1000)
    }
    Bullet_1.delete()
})
input.onButtonPressed(Button.B, function () {
    Ship.move(1)
})
input.onPinPressed(TouchPin.P1, function () {
    Bullet_2 = game.createSprite(Ship.get(LedSpriteProperty.X), Ship.get(LedSpriteProperty.Y) - 1)
    for (let index = 0; index < 4; index++) {
        Bullet_2.change(LedSpriteProperty.Y, -1)
        basic.pause(1000)
    }
    Bullet_2.delete()
})
let Bullet_2: game.LedSprite = null
let Bullet_1: game.LedSprite = null
let Ship: game.LedSprite = null
Ship = game.createSprite(2, 4)
let Alien_1 = game.createSprite(0, 0)
let Set = true
basic.forever(function () {
    while (Set == true) {
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
    if (Alien_1.isTouching(Bullet_1)) {
        Alien_1.delete()
        Set = false
        Alien_1 = game.createSprite(0, 0)
        Set = true
    }
    if (Alien_1.isTouching(Bullet_2)) {
        Alien_1.delete()
        Set = false
        Alien_1 = game.createSprite(0, 0)
        Set = true
    }
})
