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
        systems: Array<sczCore.System>
        ): sczCore.Entity
    {
      // defining the player entity
      let player = new sczCore.Entity(id);

      // define the position
      let translate = new sczBase.TranslateComponent();
      translate.positionX = position.x;
      translate.positionY = position.y;
      translate.sizeX = 0.25;
      translate.sizeY = 0.25;
      translate.rotation = 0;
      translate.centerX = this.spriteDimensions.x/2;
      translate.centerY = this.spriteDimensions.y/2;
      translate.parentId = -1;
      player.addComponent(translate);

      // define sprite
      let sprite = new sczBase.SpriteComponent();
      sprite.sprite = new Image();
      sprite.sprite.src = this.spriteSrc;
      sprite.sizeX = this.spriteDimensions.x;
      sprite.sizeY = this.spriteDimensions.y;
      player.addComponent(sprite);

      // define velocity
      let velocity = new sczBase.VelocityComponent();
      player.addComponent(velocity);

      for(let system of systems)
      {
        system.registerEntity(player);
      }

      return player;
    }
  }
}
