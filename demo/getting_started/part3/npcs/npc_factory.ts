/// <reference path="../../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partThree
{
  export class NpcFactory
  {
    public static create(
      id: number,
      position: {x: number, y: number},
      velocityY: number,
      ): sczCore.Entity
    {
      // defining the npc entity
      let npc = new sczCore.Entity(id);

      let translate = new TranslateComponent();
      translate.positionX = position.x;
      translate.positionY = position.y;
      translate.sizeFactorX = 0.25;
      translate.sizeFactorY = 0.25;
      translate.centerFactorX = 0.5;
      translate.centerFactorY = 0.5;
      translate.rotation = 180;
      npc.addComponent(translate);

      let sprite = new SpriteComponent();
      sprite.sprite = new Image();
      sprite.sprite.src = "npm/npc.svg";
      sprite.sizeX = 200;
      sprite.sizeY = 144.225;
      npc.addComponent(sprite);

      let velocity = new VelocityComponent();
      velocity.velocityY = velocityY;
      npc.addComponent(velocity);

      let entity = new EntityComponent();
      entity.reference = npc;
      npc.addComponent(entity)

      return npc;
    }
  }
}
