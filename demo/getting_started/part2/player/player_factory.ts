/// <reference path="../../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partTwo
{
  export class PlayerFactory
  {
    public static create(
        id: number,
        position: {x: number, y: number}
        ): sczCore.Entity
    {
      let player = new sczCore.Entity(id);

      let translate = new sczBase.TranslateComponent();
      translate.positionX = position.x;
      translate.positionY = position.y;
      translate.centerFactorX = 0.5;
      translate.centerFactorY = 0.5;
      translate.sizeFactorX = 0.25;
      translate.sizeFactorY = 0.25;
      translate.rotation = 0;
      player.addComponent(translate);

      let sprite = new sczBase.SpriteComponent();
      sprite.sprite = new Image();
      sprite.sprite.src = "player/player.svg";
      sprite.sizeX = 200;
      sprite.sizeY = 144.225;
      player.addComponent(sprite);

      // define velocity component
      let velocity = new sczBase.VelocityComponent();
      player.addComponent(velocity);

      return player;
    }
  }
}
