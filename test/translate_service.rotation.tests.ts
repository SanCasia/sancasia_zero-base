/// <reference path="../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../obj/sancasia_zero.base.d.ts" />

namespace sczBase.tests
{
  export class TranslateServiceRotationTests
  {
    public static canGetRotation(): void
    {
      let grandparent = TEFactory.createR(109);
      let grandparentRotation = TranslateService.getAbsoluteRotation(
        <TranslateComponent>grandparent.getComponent(TranslateComponent));
      if(grandparentRotation != 109)
      {
        throw new Error(
            `parentless translate: ` +
            `rotation not equal [${grandparentRotation}° != 109°]`);
      }

      let parent = TEFactory.createR(-90);
      let parentRotation = TranslateService.getAbsoluteRotation(
        <TranslateComponent>parent.getComponent(TranslateComponent));
      if(parentRotation != 270)
      {
        throw new Error(
            `parentless translate: ` +
            `rotation not equal [${parentRotation}° != 270°]`);
      }

      let child = TEFactory.createR(450);
      let childRotation = TranslateService.getAbsoluteRotation(
        <TranslateComponent>child.getComponent(TranslateComponent));
      if(childRotation != 90)
      {
        throw new Error(
            `parentless translate: ` +
            `rotation not equal [${parentRotation}° != 90°]`);
      }
    }

    public static canGetCascadedRotation(): void
    {
      let parent = TEFactory.createR(109);
      let child = TEFactory.createR(-56, parent);
      let rotation = TranslateService.getAbsoluteRotation(
        <TranslateComponent>child.getComponent(TranslateComponent));
        if(rotation != 53)
      {
        throw new Error(
            `cascaded translate: ` +
            `rotation not equal [${rotation}° != 53°]`);
      }
    }

    public static canGetInvertedRotation(): void
    {
      let entity = TEFactory.createR(60);
      let translate =
        <TranslateComponent>entity.getComponent(TranslateComponent)

      translate.sizeFactorX = 1;
      translate.sizeFactorY = 1;
      let rotation = TranslateService.getAbsoluteRotation(translate);
      if(Math.fround(rotation) != 60)
      {
        throw new Error(
            `inverted translate: rotation not equal ` +
            `[${rotation}° != 60°]`);
      }

      translate.sizeFactorX = -1;
      translate.sizeFactorY =  1;
      rotation = TranslateService.getAbsoluteRotation(translate);
      if(Math.fround(rotation) != 60)
      {
        throw new Error(
            `inverted translate: rotation not equal ` +
            `[${rotation}° != 60°]`);
      }

      translate.sizeFactorX =  1;
      translate.sizeFactorY = -1;
      rotation = TranslateService.getAbsoluteRotation(translate);
      if(Math.fround(rotation) != 60)
      {
        throw new Error(
            `inverted translate: rotation not equal ` +
            `[${rotation}° != 60°]`);
      }

      translate.sizeFactorX = -1;
      translate.sizeFactorY = -1;
      rotation = TranslateService.getAbsoluteRotation(translate);
      if(Math.fround(rotation) != 60)
      {
        throw new Error(
            `inverted translate: rotation not equal ` +
            `[${rotation}° != 60°]`);
      }
    }

    public static canGetAbsoluteRotation()
    {
      let parent = TEFactory.createR(45);
      let child = TEFactory.createR(15, parent);
      let parentTranslate =
        <TranslateComponent>parent.getComponent(TranslateComponent)
      let childTranslate =
        <TranslateComponent>child.getComponent(TranslateComponent)

      parentTranslate.sizeFactorX = -1;
      parentTranslate.sizeFactorY =  1;
      parent.updateComponent(parentTranslate)

      let childRotation = TranslateService.getAbsoluteRotation(childTranslate);
      if(Math.fround(childRotation) != 60)
      {
        throw new Error(
            `inverted translate: ` +
            `rotation not equal [${childRotation}° != 120°]`);
      }

      childTranslate.rotation = -15;
      childRotation = TranslateService.getAbsoluteRotation(childTranslate);
      if(Math.fround(childRotation) != 30)
      {
        throw new Error(
            `inverted translate: ` +
            `rotation not equal [${childRotation}° != 150°]`);
      }

      parentTranslate.sizeFactorX =  1;
      parentTranslate.sizeFactorY = -1;
      parent.updateComponent(parentTranslate)

      childRotation = TranslateService.getAbsoluteRotation(childTranslate);
      if(Math.fround(childRotation) != 30)
      {
        throw new Error(
            `inverted translate: ` +
            `rotation not equal [${childRotation}° != 30°]`);
      }

      childTranslate.rotation = 15;
      childRotation = TranslateService.getAbsoluteRotation(childTranslate);
      if(Math.fround(childRotation) != 60)
      {
        throw new Error(
            `inverted translate: ` +
            `rotation not equal [${childRotation}° != 60°]`);
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

    public static createF(
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
