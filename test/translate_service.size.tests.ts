/// <reference path="../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../obj/sancasia_zero.base.d.ts" />

namespace sczBase.tests
{
  export class TranslateServiceSizeTests
  {
    public static canGetSize(): void
    {
      let translate = TranslateFactory.createS({x:1, y:1});
      let sizeFactor = TranslateService.getAbsoluteSize(translate);
      if(sizeFactor.x != 1 || sizeFactor.y != 1)
      {
        throw new Error("parentless translate: sizeFactor not equal");
      }

      translate = TranslateFactory.createS({x:0.5, y:-0.5});
      sizeFactor = TranslateService.getAbsoluteSize(translate);
      if(sizeFactor.x != 0.5 || sizeFactor.y != -0.5)
      {
        throw new Error("parentless translate: sizeFactor not equal");
      }
    }

    public static canGetCascadedSize(): void
    {
      let parent = EntityFactory.create();
      let translate = TranslateFactory.createS(
          {x:0.5,y:0.5}, parent);
      let sizeFactor = TranslateService.getAbsoluteSize(translate);
      if(sizeFactor.x != 0.5 || sizeFactor.y != 0.5)
      {
        throw new Error("cascaded translate: sizeFactor not equal");
      }
    }

    public static canGetInvertedSize(): void
    {
      let parent = EntityFactory.createS({x:-1.0, y:-1.0});
      let translate = TranslateFactory.createS({x:0.5,y:-0.5}, parent);
      let sizeFactor = TranslateService.getAbsoluteSize(translate);
      if(sizeFactor.x != -0.5 || sizeFactor.y != 0.5)
      {
        throw new Error("inverted translate: sizeFactor not equal");
      }
    }
  }

  class TranslateFactory
  {
    public static createS(
      sizeFactor: {x: number, y: number} = {x: 1, y: 1},
      parent: sczCore.Entity = null
    ): TranslateComponent
    {
      let translate = new TranslateComponent();
      translate.sizeFactorX = sizeFactor.x;
      translate.sizeFactorY = sizeFactor.y;
      translate.parentEntity = parent;
      return translate;
    }

    public static createR(
      position: {x: number, y: number, z: number} = {x: 0, y: 0, z: 0},
      rotation: number = 0): TranslateComponent
    {
      let translate = new TranslateComponent();
      translate.positionX = position.x;
      translate.positionY = position.y;
      translate.positionZ = position.z;
      translate.rotation = rotation;
      return translate;
    }

    public static createP(
      position: {x: number, y: number, z: number} = {x: 0, y: 0, z: 0},
      parent: sczCore.Entity = null
    ): TranslateComponent
    {
      let translate = new TranslateComponent();
      translate.positionX = position.x;
      translate.positionY = position.y;
      translate.positionZ = position.z;
      translate.parentEntity = parent;
      return translate;
    }
  }

  class EntityFactory
  {
    public static id = 0;
    public static create(
      position: {x: number, y: number, z: number} = {x: 0, y: 0, z: 0},
      factor: {x: number, y: number} = {x: 1, y: 1},
      rotation: number = 0,
      parent: sczCore.Entity = null
    ) : sczCore.Entity
    {
      let entity = new sczCore.Entity(this.id++);
      let translate = new TranslateComponent();
      translate.positionX = position.x;
      translate.positionY = position.y;
      translate.positionZ = position.z;

      translate.rotation = rotation;

      translate.sizeFactorX = factor.x;
      translate.sizeFactorY = factor.y;

      translate.parentEntity = parent;

      entity.addComponent(translate);

      return entity;
    }

    public static createS(
      factor: {x: number, y: number},
      parent: sczCore.Entity = null
    ) : sczCore.Entity
    {
      return this.create(
        {x: 0, y: 0, z: 0},
        factor,
        0,
        parent);
    }

    public static createR(
      rotation: number,
      parent: sczCore.Entity = null,
      factor: {x: number, y: number} = {x: 1, y: 1}
    ) : sczCore.Entity
    {
      return this.create(
        {x: 0, y: 0, z: 0},
        factor,
        rotation,
        parent);
    }
  }
}
