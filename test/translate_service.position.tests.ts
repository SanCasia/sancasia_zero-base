/// <reference path="../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../obj/sancasia_zero.base.d.ts" />

namespace sczBase.tests
{
  export class TranslateServicePositionTests
  {
    public static canGetPosition(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let translate = TranslateFactory.createP({x:32, y:44, z:56});
      let position = translateService.getAbsolutePosition(translate);

      if(position.x != 32 || position.y != 44 || position.z != 56)
      {
        throw new Error(
            `parentless translate: position not equal ` +
            `[(${position.x}/${position.y}/${position.z}) != (32/44/56)]`);
      }
    }

    public static canGetCascadedPosition(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let grandparent = EntityFactory.create(
          {x:5, y:12, z:13});
      game.addEntity(grandparent);

      let parent = EntityFactory.createP(
          {x:3, y:4, z:5}, grandparent.getId());
      game.addEntity(parent);

      let child = EntityFactory.createP(
          {x:-1, y:-2, z:-3}, parent.getId());
      game.addEntity(child);

      let parentPosition = translateService.getAbsolutePosition(
        <TranslateComponent>parent.getComponent(TranslateComponent));
      if( Math.fround(parentPosition.x) != 8 ||
          Math.fround(parentPosition.y) != 16 ||
          Math.fround(parentPosition.z) != 18)
      {
        throw new Error(
            `cascaded translate: position not equal ` +
            `[(${parentPosition.x}/${parentPosition.y}/${parentPosition.z}) ` +
            `!= (8/16/18)]`);
      }

      let childPosition = translateService.getAbsolutePosition(
        <TranslateComponent>child.getComponent(TranslateComponent));
      if( Math.fround(childPosition.x) != 7 ||
          Math.fround(childPosition.y) != 14 ||
          Math.fround(childPosition.z) != 15)
      {
        throw new Error(
            `cascaded translate: position not equal ` +
            `[(${childPosition.x}/${childPosition.y}/${childPosition.z}) ` +
            `!= (7/14/15)]`);
      }
    }

    public static canGetInvertedPositionX(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);
      let parent = EntityFactory.createS({x:-1, y:1});
      game.addEntity(parent);
      let translate = TranslateFactory.createP(
        {x:100, y:50, z:0}, parent.getId());

      let position = translateService.getAbsolutePosition(translate);
      if( Math.fround(position.x) != -100 ||
          Math.fround(position.y) != 50 ||
          Math.fround(position.z) != 0)
      {
        throw new Error(
            `inverted translate: position not equal` +
            `[(${position.x}/${position.y}/${position.z}) != (-100/50/0)]`);
      }
    }

    public static canGetInvertedPositionY(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);
      let parent = EntityFactory.createS({x:1, y:-1});
      game.addEntity(parent);
      let translate = TranslateFactory.createP(
        {x:100, y:50, z:0}, parent.getId());

      let position = translateService.getAbsolutePosition(translate);
      if( Math.fround(position.x) != 100 ||
          Math.fround(position.y) != -50 ||
          Math.fround(position.z) != 0)
      {
        throw new Error(
            `inverted translate: position not equal ` +
            `[(${position.x}/${position.y}/${position.z}) != (100/-50/0)]`);
      }
    }

    public static canGetInvertedPositionXY(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);
      let parent = EntityFactory.createS({x:-1, y:-1});
      game.addEntity(parent);
      let translate = TranslateFactory.createP(
        {x:100, y:50, z:0}, parent.getId());

      let position = translateService.getAbsolutePosition(translate);
      if( Math.fround(position.x) != -100 ||
          Math.fround(position.y) != -50 ||
          Math.fround(position.z) != 0)
      {
        throw new Error(
            `inverted translate: position not equal` +
            `[(${position.x}/${position.y}/${position.z}) != (-100/-50/0)]`);
      }
    }

    public static canGetRotatedPosition90(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let translate = TranslateFactory.createR({x:100, y:50, z:0}, 90);
      let position = translateService.getAbsolutePosition(translate);

      if( Math.fround(position.x) != 100 ||
          Math.fround(position.y) != 50 ||
          Math.fround(position.z) != 0)
      {
        throw new Error(
            `inverted translate: position not equal ` +
            `[(${position.x}/${position.y}/${position.z}) != (100/50/0)]`);
      }
    }

    public static canGetRotatedPosition180(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let translate = TranslateFactory.createR({x:100, y:50, z:0}, 180);
      let position = translateService.getAbsolutePosition(translate);

      if(
        Math.fround(position.x) != 100 ||
        Math.fround(position.y) != 50 ||
        Math.fround(position.z) != 0)
      {
        throw new Error(
            `inverted translate: position not equal ` +
            `[(${position.x}/${position.y}/${position.z}) != (100/50/0)]`);
      }
    }

    public static canGetRotatedPositionN90(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let translate = TranslateFactory.createR({x:100, y:50, z:0}, -90);
      let position = translateService.getAbsolutePosition(translate);

      if(
        Math.fround(position.x) != 100 ||
        Math.fround(position.y) != 50 ||
        Math.fround(position.z) != 0)
      {
        throw new Error(
            `inverted translate: ` +
            `position not equal ` +
            `[(${position.x}/${position.y}/${position.z}) != (100/50/0)]`);
      }
    }

    public static canGetRotatedAndCascadedPosition0(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let parent = EntityFactory.createR(0);
      game.addEntity(parent);
      let translate = TranslateFactory.createP(
          {x:100, y:50, z:0},
          parent.getId());

      let position = translateService.getAbsolutePosition(translate);
      if(
        Math.fround(position.x) != 100 ||
        Math.fround(position.y) != 50 ||
        Math.fround(position.z) != 0)
      {
        throw new Error(
            `rotated-cascaded translate: `+
            `position not equal ` +
            `[(${position.x}/${position.y}/${position.z}) != (100/50/0)]`);
      }
    }

    public static canGetRotatedAndCascadedPosition90(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let parent = EntityFactory.createR(90);
      game.addEntity(parent);
      let translate = TranslateFactory.createP(
          {x:100, y:50, z:0},
          parent.getId());

      let position = translateService.getAbsolutePosition(translate);
      if(
        Math.fround(position.x) != -50 ||
        Math.fround(position.y) != 100 ||
        Math.fround(position.z) != 0)
      {
        throw new Error(
            `rotated-cascaded translate: ` +
            ` position not equal ` +
            `[(${position.x}/${position.y}/${position.z}) != (-50/100/0)]`);
      }
    }

    public static canGetRotatedAndCascadedPosition180(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let parent = EntityFactory.createR(180);
      game.addEntity(parent);
      let translate = TranslateFactory.createP(
          {x:100, y:50, z:0},
          parent.getId());

      let position = translateService.getAbsolutePosition(translate);
      if(
        Math.fround(position.x) != -100 ||
        Math.fround(position.y) != -50 ||
        Math.fround(position.z) != 0)
      {
        throw new Error(
            `rotated-cascaded translate: ` +
            `position not equal ` +
            `[(${position.x}/${position.y}/${position.z}) != (-100/-50/0)]`);
      }
    }

    public static canGetRotatedAndCascadedPositionN90(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let parent = EntityFactory.createR(-90);
      game.addEntity(parent);
      let translate = TranslateFactory.createP(
          {x:100, y:50, z:0},
          parent.getId());

      let position = translateService.getAbsolutePosition(translate);
      if( Math.fround(position.x) != 50 ||
          Math.fround(position.y) != -100 ||
          Math.fround(position.z) != 0)
      {
        throw new Error(
            `rotated-cascaded translate: ` +
            `position not equal ` +
            `[](${position.x}/${position.y}/${position.z}) !=  (50/-100/0)]`);
      }
    }

    public static canGetAbsolutePositionX(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let parent = EntityFactory.createRS(
          30, {x: 1, y: -1});
      game.addEntity(parent);

      let translate = TranslateFactory.createP(
          {x:Math.sqrt(3), y:1, z:0},
          parent.getId());

      let position = translateService.getAbsolutePosition(translate);
      if( Math.fround(position.x) !=  1 ||
          Math.fround(position.y) != Math.fround(-Math.sqrt(3)) ||
          Math.fround(position.z) != 0)
      {
        throw new Error(
            `inverted translate: position not equal` +
            `[(${position.x}/${position.y}/${position.z}) != ` +
            `(1/${-Math.sqrt(3)}/0)]`);
      }
    }

    public static canGetAbsolutePositionY(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let parent = EntityFactory.createRS(
          30, {x: -1, y: 1});
      game.addEntity(parent);

      let translate = TranslateFactory.createP(
          {x:Math.sqrt(3), y:1, z:0},
          parent.getId());

      let position = translateService.getAbsolutePosition(translate);
      if( Math.fround(position.x) !=  -1 ||
          Math.fround(position.y) != Math.fround(Math.sqrt(3)) ||
          Math.fround(position.z) != 0)
      {
        throw new Error(
            `inverted translate: position not equal` +
            `[(${position.x}/${position.y}/${position.z}) != ` +
            `(-1/${-Math.sqrt(3)}/0)]`);
      }
    }

    public static canGetAbsolutePositionXY(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let parent = EntityFactory.createRS(
          30, {x: -1, y: -1});
      game.addEntity(parent);

      let translate = TranslateFactory.createP(
          {x:Math.sqrt(3), y:1, z:0},
          parent.getId());

      let position = translateService.getAbsolutePosition(translate);
      if( Math.fround(position.x) !=  -1 ||
          Math.fround(position.y) != Math.fround(-Math.sqrt(3)) ||
          Math.fround(position.z) != 0)
      {
        throw new Error(
            `inverted translate: position not equal` +
            `[(${position.x}/${position.y}/${position.z}) != ` +
            `(-1/${-Math.sqrt(3)}/0)]`);
      }
    }
  }

  class TranslateFactory
  {
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
      size: {x: number, y: number} = {x: 1, y: 1},
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

      translate.sizeX = size.x;
      translate.sizeY = size.y;

      translate.parentId = parentId;

      entity.addComponent(translate);

      return entity;
    }

    public static createR(
      rotation: number,
      parent: number = -1
    ) : sczCore.Entity
    {
      return this.create(
          {x: 0, y: 0, z: 0},
          {x: 1, y: 1},
          rotation,
          parent);
    }

    public static createS(
      size: {x: number, y: number} = {x: 1, y: 1},
      parent: number = -1,
    ) : sczCore.Entity
    {
      return this.create(
          {x: 0, y: 0, z: 0},
          size,
          0,
          parent);
    }

    public static createP(
      position: {x: number, y: number, z: number} = {x: 0, y: 0, z: 0},
      parent: number = -1,
    ) : sczCore.Entity
    {
      return this.create(
          position,
          {x:0, y:0},
          0,
          parent);
    }

    public static createRS(
      rotation: number,
      size: {x: number, y: number} = {x: 1, y: 1},
      parent: number = -1)
    {
      return this.create(
          {x: 0, y: 0, z: 0},
          size,
          rotation,
          parent);
    }
  }
}
