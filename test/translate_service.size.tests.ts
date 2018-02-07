/// <reference path="../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../obj/sancasia_zero.base.d.ts" />

namespace sczBase.tests
{
  export class TranslateServiceSizeTests
  {
    public static canGetSize(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let translate = TranslateFactory.createS({x:1, y:1});
      let size = translateService.getAbsoluteSize(translate);
      if(size.x != 1 || size.y != 1)
      {
        throw new Error("parentless translate: size not equal");
      }

      translate = TranslateFactory.createS({x:0.5, y:-0.5});
      size = translateService.getAbsoluteSize(translate);
      if(size.x != 0.5 || size.y != -0.5)
      {
        throw new Error("parentless translate: size not equal");
      }
    }

    public static canGetCascadedSize(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let parent = EntityFactory.create();
      game.addEntity(parent);
      let translate = TranslateFactory.createS(
          {x:0.5,y:0.5}, parent.getId());
      let size = translateService.getAbsoluteSize(translate);
      if(size.x != 0.5 || size.y != 0.5)
      {
        throw new Error("cascaded translate: size not equal");
      }
    }

    public static canGetInvertedSize(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let parent = EntityFactory.createS({x:-1.0, y:-1.0});
      game.addEntity(parent);
      let translate = TranslateFactory.createS({x:0.5,y:-0.5}, parent.getId());
      let size = translateService.getAbsoluteSize(translate);
      if(size.x != -0.5 || size.y != 0.5)
      {
        throw new Error("inverted translate: size not equal");
      }
    }
  }

  class TranslateFactory
  {
    public static createS(
        size: {x: number, y: number} = {x: 1, y: 1},
        parentId: number = -1): TranslateComponent
    {
      let translate = new TranslateComponent();
      translate.sizeX = size.x;
      translate.sizeY = size.y;
      translate.parentId = parentId;
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
        parentId: number = -1): TranslateComponent
    {
      let translate = new TranslateComponent();
      translate.positionX = position.x;
      translate.positionY = position.y;
      translate.positionZ = position.z;
      translate.parentId = parentId;
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
      parentId: number = -1
    ) : sczCore.Entity
    {
      let entity = new sczCore.Entity(this.id++);
      let translate = new TranslateComponent();
      translate.positionX = position.x;
      translate.positionY = position.y;
      translate.positionZ = position.z;

      translate.rotation = rotation;

      translate.sizeX = factor.x;
      translate.sizeY = factor.y;

      translate.parentId = parentId;

      entity.addComponent(translate);

      return entity;
    }

    public static createS(
      factor: {x: number, y: number},
      parent: number = -1
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
      parent: number = -1,
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
