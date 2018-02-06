/// <reference path="../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../obj/sancasia_zero.base.d.ts" />

namespace sczBase.tests
{
  export class TranslateServiceRotationTests
  {
    public static canGetRotation(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let e1 = TEFactory.createR(109);
      game.addEntity(e1);
      let e1Rotation = translateService.getAbsoluteRotation(
        <TranslateComponent>e1.getComponent(TranslateComponent));
      if(e1Rotation != 109)
      {
        throw new Error(`parentless translate(109): rotation not equal
          (${e1Rotation})`);
      }

      let e2 = TEFactory.createR(-90);
      game.addEntity(e2);
      let e2Rotation = translateService.getAbsoluteRotation(
        <TranslateComponent>e2.getComponent(TranslateComponent));
      if(e2Rotation != 270)
      {
        throw new Error(`parentless translate(270): rotation not equal
          (${e2Rotation})`);
      }

      let e3 = TEFactory.createR(450);
      game.addEntity(e3);
      let e3Rotation = translateService.getAbsoluteRotation(
        <TranslateComponent>e3.getComponent(TranslateComponent));
      if(e3Rotation != 90)
      {
        throw new Error(`parentless translate(90): rotation not equal
          (${e3Rotation})`);
      }
    }

    public static canGetCascadedRotation(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let e1 = TEFactory.createR(109);
      game.addEntity(e1);
      let e2 = TEFactory.createR(-56, TEFactory.id -1);
      game.addEntity(e2);
      let e2Rotation = translateService.getAbsoluteRotation(
        <TranslateComponent>e2.getComponent(TranslateComponent));
        if(e2Rotation != 53)
      {
        throw new Error("cascaded translate: rotation not equal");
      }
    }

    public static canGetInvertedRotation(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let entity = TEFactory.createR(60);
      let translate =
        <TranslateComponent>entity.getComponent(TranslateComponent)

      translate.sizeX = 1;
      translate.sizeY = 1;
      let rotation = translateService.getAbsoluteRotation(translate);
      if(Math.fround(rotation) != 60)
      {
        throw new Error(`inverted translate: rotation not equal
          (${rotation}° != 60°)`);
      }

      translate.sizeX = -1;
      translate.sizeY =  1;
      rotation = translateService.getAbsoluteRotation(translate);
      if(Math.fround(rotation) != 60)
      {
        throw new Error(`inverted translate: rotation not equal
          (${rotation}° != 60°)`);
      }

      translate.sizeX =  1;
      translate.sizeY = -1;
      rotation = translateService.getAbsoluteRotation(translate);
      if(Math.fround(rotation) != 60)
      {
        throw new Error(`inverted translate: rotation not equal
        (${rotation}° != 60°)`);
      }

      translate.sizeX = -1;
      translate.sizeY = -1;
      rotation = translateService.getAbsoluteRotation(translate);
      if(Math.fround(rotation) != 60)
      {
        throw new Error(`inverted translate: rotation not equal
        (${rotation}° != 60°)`);
      }
    }

    public static canGetAbsoluteRotation()
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let parent = TEFactory.createR(45);
      game.addEntity(parent);
      let child = TEFactory.createR(15, TEFactory.id -1);
      let parentTranslate =
        <TranslateComponent>parent.getComponent(TranslateComponent)
      let childTranslate =
        <TranslateComponent>child.getComponent(TranslateComponent)

      parentTranslate.sizeX = -1;
      parentTranslate.sizeY =  1;
      parent.updateComponent(parentTranslate)

      let childRotation = translateService.getAbsoluteRotation(childTranslate);
      if(Math.fround(childRotation) != 60)
      {
        throw new Error(`inverted translate: ` +
          `rotation not equal (${childRotation}° != 120°)`);
      }

      childTranslate.rotation = -15;
      childRotation = translateService.getAbsoluteRotation(childTranslate);
      if(Math.fround(childRotation) != 30)
      {
        throw new Error(`inverted translate: ` +
          `rotation not equal (${childRotation}° != 150°)`);
      }

      parentTranslate.sizeX =  1;
      parentTranslate.sizeY = -1;
      parent.updateComponent(parentTranslate)

      childRotation = translateService.getAbsoluteRotation(childTranslate);
      if(Math.fround(childRotation) != 30)
      {
        throw new Error(`inverted translate: ` +
          `rotation not equal (${childRotation}° != 330°)`);
      }

      childTranslate.rotation = 15;
      childRotation = translateService.getAbsoluteRotation(childTranslate);
      if(Math.fround(childRotation) != 60)
      {
        throw new Error(`inverted translate: ` +
          `rotation not equal (${childRotation}° != 300°)`);
      }
    }
  }

  class TEFactory
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

    public static createF(
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
