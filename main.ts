input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.A, function () {
    sprite.move(1)
})
input.onButtonPressed(Button.B, function () {
    sprite.move(-1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
basic.forever(function () {
	
})
