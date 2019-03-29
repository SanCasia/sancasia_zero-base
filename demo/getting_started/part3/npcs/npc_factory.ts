/// <reference path="../../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partThree
{
  export class NpcFactory
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
        velocityY: number,
        systems: Array<sczCore.System>
        ): sczCore.Entity
    {
      // defining the npc entity
      let npc = new sczCore.Entity(id);

      let translate = new TranslateComponent();
      translate.positionX = position.x;
      translate.positionY = position.y;
      translate.sizeX = 0.25;
      translate.sizeY = 0.25;
      translate.rotation = 180;
      translate.centerX = this.spriteDimensions.x/2;
      translate.centerY = this.spriteDimensions.y/2;
      translate.parentId = -1;
      npc.addComponent(translate);

      let sprite = new SpriteComponent();
      sprite.sprite = new Image();
      sprite.sprite.src = this.spriteSrc;
      sprite.sizeX = this.spriteDimensions.x;
      sprite.sizeY = this.spriteDimensions.y;
      npc.addComponent(sprite);

      let velocity = new VelocityComponent();
      velocity.velocityY = velocityY;
      npc.addComponent(velocity);

      let entity = new EntityComponent();
      entity.reference = npc;
      npc.addComponent(entity)

      for(let system of systems)
      {
        system.registerEntity(npc);
      }

      return npc;
    }
  }
}
