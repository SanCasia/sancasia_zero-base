/// <reference path="../../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partThree
{
  export class PlayerFactory
  {
    private spriteSrc: string;
    private spriteDimensions: {x: number, y: number};

    public constructor(
        spriteSrc: string,
        spriteDimensions: {x: number, y: number})
    {
      this.spriteSrc = spriteSrc;
      this.spriteDimensions = spriteDimensions;
    }

    public create(
        id: number,
        position: {x: number, y: number},
        ): sczCore.Entity
    {
      // defining the player entity
      let player = new sczCore.Entity(id);
      let translate = new sczBase.TranslateComponent();
      let sprite = new sczBase.SpriteComponent();

      // define the position
      translate.positionX = position.x;
      translate.positionY = position.y;

      // define the size
      translate.sizeX = 0.25;
      translate.sizeY = 0.25;

      // define rotation
      translate.rotation = 0;

      // define center
      translate.centerX = this.spriteDimensions.x/2;
      translate.centerY = this.spriteDimensions.y/2;

      // define the parent
      translate.parentId = -1;

      // define sprite
      sprite.sprite = new Image();
      sprite.sprite.src = this.spriteSrc;

      // inform about original dimensions of sprite
      sprite.sizeX = this.spriteDimensions.x;
      sprite.sizeY = this.spriteDimensions.y;

      // add components to entity
      player.addComponent(translate);
      player.addComponent(sprite);

      return player;
    }
  }
}
