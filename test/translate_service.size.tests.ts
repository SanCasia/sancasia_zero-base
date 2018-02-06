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

      let e1 = TEFactory.create();
      game.addEntity(e1);
      let e1Size = translateService.getAbsoluteSize(
        <TranslateComponent>e1.getComponent(TranslateComponent));
      if(e1Size.x != 1 || e1Size.y != 1)
      {
        throw new Error("parentless translate: size not equal");
      }
    }

    public static canGetCascadedSize(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let e1 = TEFactory.create();
      game.addEntity(e1);
      let e2 = TEFactory.createF({x:0.5,y:0.5}, TEFactory.id -1);
      game.addEntity(e2);
      let e2Size = translateService.getAbsoluteSize(
        <TranslateComponent>e2.getComponent(TranslateComponent));
      if(e2Size.x != 0.5 || e2Size.y != 0.5)
      {
        throw new Error("cascaded translate: size not equal");
      }
    }

    public static canGetInvertedSize(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let e1 = TEFactory.createF({x:-1.0, y:-1.0});
      game.addEntity(e1);
      let e2 = TEFactory.createF({x:0.5,y:-0.5}, TEFactory.id -1);
      game.addEntity(e2);
      let e2Size = translateService.getAbsoluteSize(
        <TranslateComponent>e2.getComponent(TranslateComponent));
      if(e2Size.x != -0.5 || e2Size.y != 0.5)
      {
        throw new Error("inverted translate: size not equal");
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
