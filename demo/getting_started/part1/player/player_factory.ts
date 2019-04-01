/// <reference path="../../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partOne
{
  export class PlayerFactory
  {
    public static create(id: number): sczCore.Entity
    {
      // create a new entity which will be our player
      let player = new sczCore.Entity(id);

      // define the translate addComponent
      let translate = new sczBase.TranslateComponent();
      translate.positionX = 100;  // position, x coordinate
      translate.positionY = 550;  // position, y coordinate
      translate.sizeX = 1;        // relative size in x dimension
      translate.sizeY = 1;        // relative size in y dimension
      translate.rotation = 0;     // rotation of the entity
      translate.centerX = 0;      // center of rotation, x value
      translate.centerY = 0;      // center of rotation, y value
      player.addComponent(translate);

      // define sprite
      let sprite = new sczBase.SpriteComponent();
      sprite.sprite = new Image();  // new image
      sprite.sprite.src = "player/player.svg";  // image location
      sprite.sizeX = 200;         // image size x
      sprite.sizeY = 144.225;     // image size y
      player.addComponent(sprite);

      return player;
    }
  }
}
