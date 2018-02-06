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

      let e1 = EntityFactory.create({x:32, y:44, z:56});
      game.addEntity(e1);
      let e1Position = translateService.getAbsolutePosition(
        <TranslateComponent>e1.getComponent(TranslateComponent));
      if(e1Position.x != 32 || e1Position.y != 44 || e1Position.z != 56)
      {
        throw new Error(`parentless translate: position not equal
          (${e1Position.x}/${e1Position.y}/${e1Position.z})`);
      }
    }

    public static canGetCascadedPosition(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let e1 = EntityFactory.create(
        {x:5, y:12, z:13});
      game.addEntity(e1);

      let e2 = EntityFactory.create(
        {x:3, y:4, z:5},
        {x:1, y:1},
        0, EntityFactory.id -1);
      game.addEntity(e2);

      let e3 = EntityFactory.create(
        {x:-1, y:-2, z:-3},
        {x:1, y:1},
        0, EntityFactory.id -1);
      game.addEntity(e3);

      let e2Position = translateService.getAbsolutePosition(
        <TranslateComponent>e2.getComponent(TranslateComponent));
      if(
        Math.fround(e2Position.x) != 8 ||
        Math.fround(e2Position.y) != 16 ||
        Math.fround(e2Position.z) != 18)
      {
        throw new Error(`cascaded translate (8/16/18): ` +
          `position not equal (${e2Position.x}/${e2Position.y}/${e2Position.z})`);
      }

      let e3Position = translateService.getAbsolutePosition(
        <TranslateComponent>e3.getComponent(TranslateComponent));
      if(
        Math.fround(e3Position.x) != 7 ||
        Math.fround(e3Position.y) != 14 ||
        Math.fround(e3Position.z) != 15)
      {
        throw new Error(`cascaded translate (7/14/15): `+
          `position not equal (${e3Position.x}/${e3Position.y}/${e3Position.z})`);
      }
    }

    public static canGetInvertedPositionX(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);
      let parent = EntityFactory.createS({x:-1, y:1});
      game.addEntity(parent);
      let child = EntityFactory.createP(
        {x:100, y:50, z:0}, EntityFactory.id -1);
      game.addEntity(child);
      let translate =
        <TranslateComponent>child.getComponent(TranslateComponent);

      let position = translateService.getAbsolutePosition(translate);
      if(
        Math.fround(position.x) != -100 ||
        Math.fround(position.y) != 50 ||
        Math.fround(position.z) != 0)
      {
        throw new Error(`inverted translate: position not equal` +
          `(${position.x}/${position.y}/${position.z} != (-100/50/0))`);
      }
    }

    public static canGetInvertedPositionY(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);
      let parent = EntityFactory.createS({x:1, y:-1});
      game.addEntity(parent);
      let child = EntityFactory.createP(
        {x:100, y:50, z:0}, EntityFactory.id -1);
      game.addEntity(child);
      let translate =
        <TranslateComponent>child.getComponent(TranslateComponent);

      let position = translateService.getAbsolutePosition(translate);
      if(
        Math.fround(position.x) != 100 ||
        Math.fround(position.y) != -50 ||
        Math.fround(position.z) != 0)
      {
        throw new Error(`inverted translate: position not equal ` +
          `(${position.x}/${position.y}/${position.z} != (100/-50/0))`);
      }
    }

    public static canGetInvertedPositionXY(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);
      let parent = EntityFactory.createS({x:-1, y:-1});
      game.addEntity(parent);
      let child = EntityFactory.createP(
        {x:100, y:50, z:0}, EntityFactory.id -1);
      game.addEntity(child);
      let translate =
        <TranslateComponent>child.getComponent(TranslateComponent);

      let position = translateService.getAbsolutePosition(translate);
      if(
        Math.fround(position.x) != -100 ||
        Math.fround(position.y) != -50 ||
        Math.fround(position.z) != 0)
      {
        throw new Error(`inverted translate: position not equal` +
          `(${position.x}/${position.y}/${position.z} != (-100/-50/0))`);
      }
    }

    public static canGetRotatedPosition90(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let translate = TranslateFactory.createR({x:100, y:50, z:0}, 90);
      let position = translateService.getAbsolutePosition(translate);

      if(
        Math.fround(position.x) != 100 ||
        Math.fround(position.y) != 50 ||
        Math.fround(position.z) != 0)
      {
        throw new Error(`inverted translate (100/500/0): position not equal
          (${position.x}/${position.y}/${position.z})`);
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
        throw new Error(`inverted translate (100/50/0): position not equal
          (${position.x}/${position.y}/${position.z})`);
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
        throw new Error(`inverted translate (100/50/0): position not equal
          (${position.x}/${position.y}/${position.z})`);
      }
    }

    public static canGetRotatedAndCascadedPosition0(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let parent = EntityFactory.createR(0);
      game.addEntity(parent);
      let child = EntityFactory.createP(
        {x:100, y:50, z:0}, EntityFactory.id -1);
      let translate =
        <TranslateComponent> child.getComponent(TranslateComponent);

      let position = translateService.getAbsolutePosition(translate);
      if(
        Math.fround(position.x) != 100 ||
        Math.fround(position.y) != 50 ||
        Math.fround(position.z) != 0)
      {
        throw new Error(`rotated-cascaded translate (100/50/0): `+
          `position not equal (${position.x}/${position.y}/${position.z})`);
      }
    }

    public static canGetRotatedAndCascadedPosition90(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let parent = EntityFactory.createR(90);
      game.addEntity(parent);
      let child = EntityFactory.createP(
        {x:100, y:50, z:0}, EntityFactory.id -1);
      let translate =
        <TranslateComponent> child.getComponent(TranslateComponent);

      let position = translateService.getAbsolutePosition(translate);
      if(
        Math.fround(position.x) != -50 ||
        Math.fround(position.y) != 100 ||
        Math.fround(position.z) != 0)
      {
        throw new Error(`rotated-cascaded translate (-50/100/0): `+
          ` position not equal (${position.x}/${position.y}/${position.z})`);
      }
    }

    public static canGetRotatedAndCascadedPosition180(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let parent = EntityFactory.createR(180);
      game.addEntity(parent);
      let child = EntityFactory.createP({x:100, y:50, z:0}, EntityFactory.id -1);
      let translate =
        <TranslateComponent> child.getComponent(TranslateComponent);

      let position = translateService.getAbsolutePosition(translate);
      if(
        Math.fround(position.x) != -100 ||
        Math.fround(position.y) != -50 ||
        Math.fround(position.z) != 0)
      {
        throw new Error(`rotated-cascaded translate (-100/-50/0): ` +
          `position not equal (${position.x}/${position.y}/${position.z})`);
      }
    }

    public static canGetRotatedAndCascadedPositionN90(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let parent = EntityFactory.createR(-90);
      game.addEntity(parent);
      let child = EntityFactory.createP({x:100, y:50, z:0}, EntityFactory.id -1);
      let translate =
        <TranslateComponent> child.getComponent(TranslateComponent);

      let position = translateService.getAbsolutePosition(translate);
      if(
        Math.fround(position.x) != 50 ||
        Math.fround(position.y) != -100 ||
        Math.fround(position.z) != 0)
      {
        throw new Error(`rotated-cascaded translate (50/-100/0): ` +
          `position not equal (${position.x}/${position.y}/${position.z})`);
      }
    }

    public static canGetAbsolutePositionX(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let parent = EntityFactory.createRS(
          30, {x: 1, y: -1});
      game.addEntity(parent);

      let child = EntityFactory.createP(
          {x:Math.sqrt(3), y:1, z:0},
          EntityFactory.id -1);
      let childTranslate =
          <TranslateComponent>child.getComponent(TranslateComponent)

      let childPosition = translateService.getAbsolutePosition(childTranslate);
      if( Math.fround(childPosition.x) !=  1 ||
          Math.fround(childPosition.y) != Math.fround(-Math.sqrt(3)) ||
          Math.fround(childPosition.z) != 0)
      {
        throw new Error(`inverted translate: position not equal` +
            `(${childPosition.x}/${childPosition.y}/${childPosition.z} != ` +
            `1/${-Math.sqrt(3)}/0`);
      }
    }

    public static canGetAbsolutePositionY(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let parent = EntityFactory.createRS(
          30, {x: -1, y: 1});
      game.addEntity(parent);

      let child = EntityFactory.createP(
          {x:Math.sqrt(3), y:1, z:0},
          EntityFactory.id -1);
      let childTranslate =
          <TranslateComponent>child.getComponent(TranslateComponent)

      let childPosition = translateService.getAbsolutePosition(childTranslate);
      if( Math.fround(childPosition.x) !=  -1 ||
          Math.fround(childPosition.y) != Math.fround(Math.sqrt(3)) ||
          Math.fround(childPosition.z) != 0)
      {
        throw new Error(`inverted translate: position not equal` +
            `(${childPosition.x}/${childPosition.y}/${childPosition.z} != ` +
            `-1/${-Math.sqrt(3)}/0`);
      }
    }

    public static canGetAbsolutePositionXY(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let parent = EntityFactory.createRS(
          30, {x: -1, y: -1});
      game.addEntity(parent);

      let child = EntityFactory.createP(
          {x:Math.sqrt(3), y:1, z:0},
          EntityFactory.id -1);
      let childTranslate =
          <TranslateComponent>child.getComponent(TranslateComponent)

      let childPosition = translateService.getAbsolutePosition(childTranslate);
      if( Math.fround(childPosition.x) !=  -1 ||
          Math.fround(childPosition.y) != Math.fround(-Math.sqrt(3)) ||
          Math.fround(childPosition.z) != 0)
      {
        throw new Error(`inverted translate: position not equal` +
            `(${childPosition.x}/${childPosition.y}/${childPosition.z} != ` +
            `-1/${-Math.sqrt(3)}/0`);
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
