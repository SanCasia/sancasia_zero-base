/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export class TranslateService
  {
    private game: sczCore.Game;
    public constructor(game: sczCore.Game)
    {
      this.game = game;
    }

    public getAbsolutePosition(translate: TranslateComponent)
      : { x: number, y: number, z: number}
    {
      if(!this.game.hasEntity(translate.parentId))
      {
        return translate.position;
      }

      let parent = this.game.getEntity(translate.parentId)
      if(!parent.hasComponent(TranslateComponent))
      {
        return translate.position;
      }

      let parentTranslate =
        <TranslateComponent>parent.getComponent(TranslateComponent);
      let parentPosition = this.getAbsolutePosition(parentTranslate);
      let parentSize = this.getAbsoluteSize(parentTranslate);
      let parentRotation = this.getAbsoluteRotation(parentTranslate);


      // absolute from position and size
      let absolute =
        TranslateService.scalePosition(parentSize, translate.position);

      // rotation += absolute angle
      let angle = TranslateService.getAngle(translate.position);
      let rotation =
          TranslateService.scaleRotation(
              parentSize,
              parentRotation + angle);

      // distance from absolute
      let distance = TranslateService.getMagnitude(absolute);

      // vector from rotation and distance
      let vector = TranslateService.toVector(rotation, distance);
      vector.z = absolute.z;

      // return parentPosition += vector
      return TranslateService.addPositon(parentPosition, vector);
    }

    public getAbsoluteRotation(translate: TranslateComponent): number
    {
      if(!this.game.hasEntity(translate.parentId))
      {
        return TranslateService.trimRotation(translate.rotation);
      }

      let parent = this.game.getEntity(translate.parentId)
      if(!parent.hasComponent(TranslateComponent))
      {
        return TranslateService.trimRotation(translate.rotation);
      }

      let parentTranslate =
        <TranslateComponent> parent.getComponent(TranslateComponent);
      let parentRotation = this.getAbsoluteRotation(parentTranslate);

      return TranslateService.addRotation(
        parentRotation,
        translate.size, translate.rotation);
    }

    public getAbsoluteSize(translate: TranslateComponent)
      : {x: number, y: number}
    {
      if(!this.game.hasEntity(translate.parentId))
      {
        return translate.size;
      }

      let parent = this.game.getEntity(translate.parentId)
      if(!parent.hasComponent(TranslateComponent))
      {
        return translate.size;
      }

      let parentTranslate =
        <TranslateComponent> parent.getComponent(TranslateComponent);
      let parentSize = this.getAbsoluteSize(parentTranslate);

      return TranslateService.addSize(parentSize, translate.size);
    }

    public static addSize(
      parentSize: {x: number, y: number},
      childSize: {x: number, y: number})
      : {x: number, y: number}
    {
      return {
        x: parentSize.x * childSize.x,
        y: parentSize.y * childSize.y
      }
    }

    static trimRotation(rotation: number): number {
      return rotation > 0 ? rotation % 360 : 360 + rotation % 360;
    }

    public static addRotation(
      parentRotation: number,
      childSize: {x: number, y: number},
      childRotation: number): number
    {
      let rotation = parentRotation;
      rotation += this.scaleRotation(childSize, childRotation);
      return this.trimRotation(rotation);
    }

    public static scaleRotation(
      size: {x: number, y: number},
      rotation: number): number
    {
      // todo: sin/cos magic
      if (size.y < 0)
        rotation = 360 - rotation;
      if (size.x < 0)
        rotation = 180 - rotation;
        return this.trimRotation(rotation);
    }

    public static scalePosition(
      size: {x: number, y: number},
      position: {x: number, y: number, z: number})
        :{x: number, y: number, z: number}
    {
      return {
        x: position.x * size.x,
        y: position.y * size.y,
        z: position.z
      };
    }

    static addPositon(
      position: {x: number, y: number, z: number},
      vector: {x: number, y: number, z: number})
        :any
    {
      return {
        x: position.x + vector.x,
        y: position.y + vector.y,
        z: position.z + vector.z
      };
    }

    static toVector(angle: number, distance: number): any
    {
      angle = angle / 180 * Math.PI;
      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        z: 0
      };
    }

    static getMagnitude(vector: {x: number, y: number, z: number}): any
    {
      return Math.sqrt(
        Math.pow(vector.x, 2) + Math.pow(vector.y, 2));
    }

    static getAngle(vector: {x: number, y: number, z: number}): any
    {
      let angle = Math.atan(vector.y/vector.x)
      angle = isNaN(angle) ? angle = 0 : angle * 180 / Math.PI;
      angle = vector.x >= 0 ? angle : angle - 180;
      return this.trimRotation(angle);
    }
  }
}
