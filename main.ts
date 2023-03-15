input.onPinPressed(TouchPin.P0, function () {
    Bullet_3 = game.createSprite(Ship.get(LedSpriteProperty.X) - 1, Ship.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        Bullet_3.change(LedSpriteProperty.X, -1)
    }
    Bullet_3.delete()
})
input.onButtonPressed(Button.A, function () {
    Ship.move(-1)
})
input.onPinPressed(TouchPin.P2, function () {
    Bullet_2 = game.createSprite(Ship.get(LedSpriteProperty.X) + 1, Ship.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        Bullet_2.change(LedSpriteProperty.X, 1)
    }
    Bullet_2.delete()
})
input.onButtonPressed(Button.B, function () {
    Ship.move(1)
})
input.onPinPressed(TouchPin.P1, function () {
    Bullet_1 = game.createSprite(Ship.get(LedSpriteProperty.X), Ship.get(LedSpriteProperty.Y) - 1)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        Bullet_1.change(LedSpriteProperty.Y, -1)
    }
    Bullet_1.delete()
})
let Bullet_1: game.LedSprite = null
let Bullet_2: game.LedSprite = null
let Bullet_3: game.LedSprite = null
let Ship: game.LedSprite = null
Ship = game.createSprite(2, 4)
let Alien_1 = game.createSprite(0, 0)
let Set_1 = true
let Alien_2 = game.createSprite(4, 0)
Alien_2.turn(Direction.Right, 180)
let Set_2 = true
game.setLife(10)
game.setScore(0)
basic.forever(function () {
    basic.pause(1000)
    while (Set_2 == true) {
        for (let index = 0; index < 4; index++) {
            Alien_2.move(1)
            if (game.score() < 5) {
                basic.pause(1000)
            } else {
                basic.pause(800)
            }
        }
        Alien_2.turn(Direction.Left, 90)
        Alien_2.move(1)
        if (game.score() < 5) {
            basic.pause(1000)
        } else {
            basic.pause(800)
        }
        Alien_2.turn(Direction.Left, 90)
        for (let index = 0; index < 4; index++) {
            Alien_2.move(1)
            if (game.score() < 5) {
                basic.pause(1000)
            } else {
                basic.pause(800)
            }
        }
        Alien_2.turn(Direction.Right, 90)
        Alien_2.move(1)
        if (game.score() < 5) {
            basic.pause(1000)
        } else {
            basic.pause(800)
        }
        Alien_2.turn(Direction.Right, 90)
    }
    if (Bullet_1.get(LedSpriteProperty.Y) == Alien_1.get(LedSpriteProperty.Y)) {
        if (Bullet_1.get(LedSpriteProperty.X) == Alien_1.get(LedSpriteProperty.X)) {
            game.addScore(1)
            Alien_1.delete()
            Set_1 = false
            Alien_1 = game.createSprite(0, 0)
            Set_1 = true
        }
    } else {
        if (Bullet_2.get(LedSpriteProperty.Y) == Alien_1.get(LedSpriteProperty.Y)) {
            if (Bullet_2.get(LedSpriteProperty.X) == Alien_1.get(LedSpriteProperty.X)) {
                game.addScore(1)
                Alien_1.delete()
                Set_1 = false
                Alien_1 = game.createSprite(0, 0)
                Set_1 = true
            }
        } else {
            if (Bullet_3.get(LedSpriteProperty.Y) == Alien_1.get(LedSpriteProperty.Y)) {
                if (Bullet_3.get(LedSpriteProperty.X) == Alien_1.get(LedSpriteProperty.X)) {
                    game.addScore(1)
                    Alien_1.delete()
                    Set_1 = false
                    Alien_1 = game.createSprite(0, 0)
                    Set_1 = true
                }
            } else {
                if (Bullet_1.get(LedSpriteProperty.Y) == Alien_2.get(LedSpriteProperty.Y)) {
                    if (Bullet_1.get(LedSpriteProperty.X) == Alien_2.get(LedSpriteProperty.X)) {
                        game.addScore(1)
                        Alien_2.delete()
                        Set_2 = false
                        Alien_2 = game.createSprite(4, 0)
                        Alien_2.turn(Direction.Right, 180)
                        Set_2 = true
                    }
                } else {
                    if (Bullet_2.get(LedSpriteProperty.Y) == Alien_2.get(LedSpriteProperty.Y)) {
                        if (Bullet_2.get(LedSpriteProperty.X) == Alien_2.get(LedSpriteProperty.X)) {
                            game.addScore(1)
                            Alien_2.delete()
                            Set_2 = false
                            Alien_2 = game.createSprite(4, 0)
                            Alien_2.turn(Direction.Right, 180)
                            Set_2 = true
                        }
                    } else {
                        if (Bullet_3.get(LedSpriteProperty.Y) == Alien_2.get(LedSpriteProperty.Y)) {
                            if (Bullet_3.get(LedSpriteProperty.X) == Alien_2.get(LedSpriteProperty.X)) {
                                game.addScore(1)
                                Alien_2.delete()
                                Set_2 = false
                                Alien_2 = game.createSprite(4, 0)
                                Alien_2.turn(Direction.Right, 180)
                                Set_2 = true
                            }
                        }
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    while (Set_1 == true) {
        for (let index = 0; index < 4; index++) {
            Alien_1.move(1)
            if (game.score() < 5) {
                basic.pause(1000)
            } else {
                basic.pause(800)
            }
        }
        Alien_1.turn(Direction.Right, 90)
        Alien_1.move(1)
        if (game.score() < 5) {
            basic.pause(1000)
        } else {
            basic.pause(800)
        }
        Alien_1.turn(Direction.Right, 90)
        for (let index = 0; index < 4; index++) {
            Alien_1.move(1)
            if (game.score() < 5) {
                basic.pause(1000)
            } else {
                basic.pause(800)
            }
        }
        Alien_1.turn(Direction.Left, 90)
        Alien_1.move(1)
        if (game.score() < 5) {
            basic.pause(1000)
        } else {
            basic.pause(800)
        }
        Alien_1.turn(Direction.Left, 90)
    }
    if (Bullet_1.get(LedSpriteProperty.Y) == Alien_1.get(LedSpriteProperty.Y)) {
        if (Bullet_1.get(LedSpriteProperty.X) == Alien_1.get(LedSpriteProperty.X)) {
            game.addScore(1)
            Alien_1.delete()
            Set_1 = false
            Alien_1 = game.createSprite(0, 0)
            Set_1 = true
        }
    } else {
        if (Bullet_2.get(LedSpriteProperty.Y) == Alien_1.get(LedSpriteProperty.Y)) {
            if (Bullet_2.get(LedSpriteProperty.X) == Alien_1.get(LedSpriteProperty.X)) {
                game.addScore(1)
                Alien_1.delete()
                Set_1 = false
                Alien_1 = game.createSprite(0, 0)
                Set_1 = true
            }
        } else {
            if (Bullet_3.get(LedSpriteProperty.Y) == Alien_1.get(LedSpriteProperty.Y)) {
                if (Bullet_3.get(LedSpriteProperty.X) == Alien_1.get(LedSpriteProperty.X)) {
                    game.addScore(1)
                    Alien_1.delete()
                    Set_1 = false
                    Alien_1 = game.createSprite(0, 0)
                    Set_1 = true
                }
            } else {
                if (Bullet_1.get(LedSpriteProperty.Y) == Alien_2.get(LedSpriteProperty.Y)) {
                    if (Bullet_1.get(LedSpriteProperty.X) == Alien_2.get(LedSpriteProperty.X)) {
                        game.addScore(1)
                        Alien_2.delete()
                        Set_2 = false
                        Alien_2 = game.createSprite(4, 0)
                        Alien_2.turn(Direction.Right, 180)
                        Set_2 = true
                    }
                } else {
                    if (Bullet_2.get(LedSpriteProperty.Y) == Alien_2.get(LedSpriteProperty.Y)) {
                        if (Bullet_2.get(LedSpriteProperty.X) == Alien_2.get(LedSpriteProperty.X)) {
                            game.addScore(1)
                            Alien_2.delete()
                            Set_2 = false
                            Alien_2 = game.createSprite(4, 0)
                            Alien_2.turn(Direction.Right, 180)
                            Set_2 = true
                        }
                    } else {
                        if (Bullet_3.get(LedSpriteProperty.Y) == Alien_2.get(LedSpriteProperty.Y)) {
                            if (Bullet_3.get(LedSpriteProperty.X) == Alien_2.get(LedSpriteProperty.X)) {
                                game.addScore(1)
                                Alien_2.delete()
                                Set_2 = false
                                Alien_2 = game.createSprite(4, 0)
                                Alien_2.turn(Direction.Right, 180)
                                Set_2 = true
                            }
                        }
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (Alien_1.isTouching(Ship)) {
        game.removeLife(1)
        Alien_1.delete()
        Set_1 = false
        Alien_1 = game.createSprite(0, 0)
        Set_1 = true
    }
})
basic.forever(function () {
    if (game.isGameOver()) {
        basic.showNumber(game.score())
    }
})
basic.forever(function () {
    if (Alien_2.isTouching(Ship)) {
        game.removeLife(1)
        Alien_2.delete()
        Set_2 = false
        Alien_2 = game.createSprite(4, 0)
        Alien_2.turn(Direction.Right, 180)
        Set_2 = true
    }
})
