/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export class TranslateComponent extends sczCore.Component
  {
    // parent
    private _parentEntity: sczCore.Entity;
    public set parentEntity(entity: sczCore.Entity)
    {
      this._parentEntity = entity;
    }
    public get parent(): TranslateComponent
    {
      if(this._parentEntity == null)
        return null;
      if(!this._parentEntity.hasComponent(TranslateComponent))
        return null;

      return <TranslateComponent>this._parentEntity
        .getComponent(TranslateComponent);
    }

    // position
    public positionX: number;
    public positionY: number;
    public positionZ: number;
    public get position(): { x: number, y: number, z: number}
    {
      return {
        x: this.positionX,
        y: this.positionY,
        z: this.positionZ
      }
    }

    // rotation
    public rotation: number;

    // center
    public centerFactorX: number;
    public centerFactorY: number;
    public get centerFactor(): { x: number, y: number}
    {
      return {
        x: this.centerFactorX,
        y: this.centerFactorY
      }
    }

    // relative size
    public sizeFactorX: number;
    public sizeFactorY: number;
    public get sizeFactor(): { x: number, y: number}
    {
      return {
        x: this.sizeFactorX,
        y: this.sizeFactorY
      }
    }
  }
}
