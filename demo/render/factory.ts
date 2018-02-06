/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.render
{
  export class PartFactory
  {
    public static create(
      id: number,
      src: string,
      size: {x: number, y: number},
      position: {x: number, y: number, z: number} = {x: 0, y: 0, z: 0},
      center: {x: number, y: number} = {x: 0, y: 0},
      factor: {x: number, y: number} = {x: 1, y: 1},
      rotation: number = 0,
      parentId: number = -1
    ) : sczCore.Entity
    {
      let part = new sczCore.Entity(id);
      let translate = new TranslateComponent();

      translate.positionX = position.x;
      translate.positionY = position.y;
      translate.positionZ = position.z;

      translate.centerX = center.x;
      translate.centerY = center.y;

      translate.rotation = rotation;

      translate.sizeX = factor.x;
      translate.sizeY = factor.y;

      translate.parentId = parentId;

      part.addComponent(translate);


      let sprite = new SpriteComponent();
      sprite.sprite = new Image();
      sprite.sprite.src = src;

      sprite.sizeX = size.x;
      sprite.sizeY = size.y;

      part.addComponent(sprite);

      return part;
    }
  }
}
