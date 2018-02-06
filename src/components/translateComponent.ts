/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export class TranslateComponent extends sczCore.Component
  {
    public parentId: number;

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

    public rotation: number;

    public centerX: number;
    public centerY: number;
    public get center(): { x: number, y: number}
    {
      return {
        x: this.centerX,
        y: this.centerY
      }
    }

    public sizeX: number;
    public sizeY: number;
    public get size(): { x: number, y: number}
    {
      return {
        x: this.sizeX,
        y: this.sizeY
      }
    }
  }
}
