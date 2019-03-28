/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export class SpriteComponent extends sczCore.Component
  {
    public sprite: HTMLImageElement | HTMLCanvasElement |
      HTMLVideoElement |  ImageBitmap;

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
