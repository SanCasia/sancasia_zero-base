/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.render
{
  export class PartFactory
  {
    public static create(
      id: number,
      position: {x: number, y: number, z: number} = {x: 0, y: 0, z: 0},
      size: {x: number, y: number} = {x: 1, y: 1},
      parentEntity: sczCore.Entity = null
    ) : sczCore.Entity
    {
      // create a new empty entity
      let part = new sczCore.Entity(id);

      // initialize translate component
      let translate = new TranslateComponent();

      // coordinates
      translate.positionX = position.x;
      translate.positionY = position.y;
      translate.positionZ = position.z;

      // center
      translate.centerX = 50;
      translate.centerY = 50;

      // rotation
      translate.rotation = 0;

      // size
      translate.sizeX = size.x;
      translate.sizeY = size.y;

      // parent
      translate.parentEntity = parentEntity;

      // add component to entity
      part.addComponent(translate);

      // initialize sprite component
      let sprite = new SpriteComponent();

      // image
      sprite.sprite = new Image();
      sprite.sprite.src = "part.svg";

      // dimensions
      sprite.sizeX = 300;
      sprite.sizeY = 100;

      // add component to entity
      part.addComponent(sprite);

      return part;
    }
  }
}
