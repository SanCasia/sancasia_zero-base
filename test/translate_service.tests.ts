/// <reference path="../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../obj/sancasia_zero.base.d.ts" />

namespace sczBase.tests
{
  export class TranslateServiceTests
  {
    public static canScaleRotation(): void
    {
      var rotation = TranslateService.scaleRotation({x:1,y:1}, 10);
      if(rotation != 10)
      {
        throw new Error(`size rotation: rotation not equal`+
          `(${rotation} != 10)`);
      }

      var rotation = TranslateService.scaleRotation({x:1,y:1}, 120);
      if(rotation != 120)
      {
        throw new Error(`size rotation: rotation not equal`+
          `(${rotation} != 120)`);
      }

      var rotation = TranslateService.scaleRotation({x:1,y:1}, 200);
      if(rotation != 200)
      {
        throw new Error(`size rotation: rotation not equal`+
          `(${rotation} != 200)`);
      }

      var rotation = TranslateService.scaleRotation({x:1,y:1}, -30);
      if(rotation != 330)
      {
        throw new Error(`size rotation: rotation not equal`+
          `(${rotation} != 330)`);
      }
    }

    public static canScaleRotationX(): void
    {
      var rotation = TranslateService.scaleRotation({x:1,y:-1}, 10);
      if(rotation != 350)
      {
        throw new Error(`size rotation: rotation not equal`+
          `(${rotation} != 350)`);
      }

      var rotation = TranslateService.scaleRotation({x:1,y:-1}, 120);
      if(rotation != 240)
      {
        throw new Error(`size rotation: rotation not equal`+
          `(${rotation} != 240)`);
      }

      var rotation = TranslateService.scaleRotation({x:1,y:-1}, 200);
      if(rotation != 160)
      {
        throw new Error(`size rotation: rotation not equal`+
          `(${rotation} != 160)`);
      }

      var rotation = TranslateService.scaleRotation({x:1,y:-1}, -30);
      if(rotation != 30)
      {
        throw new Error(`size rotation: rotation not equal`+
          `(${rotation} != 30)`);
      }
    }

    public static canScaleRotationY(): void
    {
      var rotation = TranslateService.scaleRotation({x:-1,y:1}, 10);
      if(rotation != 170)
      {
        throw new Error(`size rotation: rotation not equal`+
          `(${rotation} != 170)`);
      }

      var rotation = TranslateService.scaleRotation({x:-1,y:1}, 120);
      if(rotation != 60)
      {
        throw new Error(`size rotation: rotation not equal`+
          `(${rotation} != 60)`);
      }

      var rotation = TranslateService.scaleRotation({x:-1,y:1}, 200);
      if(rotation != 340)
      {
        throw new Error(`size rotation: rotation not equal`+
          `(${rotation} != 340)`);
      }

      var rotation = TranslateService.scaleRotation({x:-1,y:1}, -30);
      if(rotation != 210)
      {
        throw new Error(`size rotation: rotation not equal`+
          `(${rotation} != 210)`);
      }
    }

    public static canScaleRotationXY(): void
    {
      var rotation = TranslateService.scaleRotation({x:-1,y:-1}, 10);
      if(rotation != 190)
      {
        throw new Error(`size rotation: rotation not equal`+
          `(${rotation} != 190)`);
      }

      var rotation = TranslateService.scaleRotation({x:-1,y:-1}, 120);
      if(rotation != 300)
      {
        throw new Error(`size rotation: rotation not equal`+
          `(${rotation} != 300)`);
      }

      var rotation = TranslateService.scaleRotation({x:-1,y:-1}, 200);
      if(rotation != 20)
      {
        throw new Error(`size rotation: rotation not equal`+
          `(${rotation} != 20)`);
      }

      var rotation = TranslateService.scaleRotation({x:-1,y:-1}, -30);
      if(rotation != 150)
      {
        throw new Error(`size rotation: rotation not equal`+
          `(${rotation} != 150)`);
      }
    }

    public static canAddRotation(): void
    {
      var rotation = TranslateService.addRotation(
        30,
        {x:1, y:1},
        240);
      if(rotation != 270)
      {
        throw new Error(`add rotation: rotation not equal`+
          `(${rotation} != 270)`);
      }
    }

    public static canAddRotationC(): void
    {
      var rotation = TranslateService.addRotation(
        30,
        {x:1, y:-1},
        190);
      if(rotation != 200)
      {
        throw new Error(`add rotation: rotation not equal`+
          `(${rotation} != 200)`);
      }

      var rotation = TranslateService.addRotation(
        30,
        {x:-1, y:1},
        190);
      if(rotation != 20)
      {
        throw new Error(`add rotation: rotation not equal`+
          `(${rotation} != 20)`);
      }

      var rotation = TranslateService.addRotation(
        30,
        {x:-1, y:-1},
        190);
      if(rotation != 40)
      {
        throw new Error(`add rotation: rotation not equal`+
          `(${rotation} != 40)`);
      }
    }

/*
    public static canAddRotationP(): void
    {
      var rotation = TranslateService.addRotation(
        30,
        {x:1, y:1},
        190);
      if(rotation != 200)
      {
        throw new Error(`add rotation: rotation not equal`+
          `(${rotation} != 200)`);
      }

      var rotation = TranslateService.addRotation(
        30,
        {x:1, y:1},
        190);
      if(rotation != 200)
      {
        throw new Error(`add rotation: rotation not equal`+
          `(${rotation} != 200)`);
      }

      var rotation = TranslateService.addRotation(
        30,
        {x:1, y:1},
        190);
      if(rotation != 220)
      {
        throw new Error(`add rotation: rotation not equal`+
          `(${rotation} != 220)`);
      }
    }

    public static canAddRotationPC(): void
    {
      var rotation = TranslateService.addRotation(
        30,
        {x:1, y:-1},
        190);
      if(rotation != 220)
      {
        throw new Error(`add rotation: rotation not equal`+
          `(${rotation} != 220)`);
      }

      var rotation = TranslateService.addRotation(
        30,
        {x:-1, y:1},
        190);
      if(rotation != 40)
      {
        throw new Error(`add rotation: rotation not equal`+
          `(${rotation} != 40)`);
      }

      var rotation = TranslateService.addRotation(
        30,
        {x:-1, y:1},
        190);
      if(rotation != 40)
      {
        throw new Error(`add rotation: rotation not equal`+
          `(${rotation} != 40)`);
      }

      var rotation = TranslateService.addRotation(
        30,
        {x:1, y:-1},
        190);
      if(rotation != 220)
      {
        throw new Error(`add rotation: rotation not equal`+
          `(${rotation} != 220)`);
      }
    }
*/

    public static canGetMagnitude(): void
    {
      var magnitude = TranslateService.getMagnitude({x:3,y:4, z:0});
      if(magnitude != 5)
      {
        throw new Error(
          `get magnitude: magnitude not equal (${magnitude} != 5)`);
      }

      var magnitude = TranslateService.getMagnitude({x:5,y:-12, z:0});
      if(magnitude != 13)
      {
        throw new Error(
          `get magnitude: magnitude not equal (${magnitude} != 13)`);
      }
    }

    public static canGetAngle(): void
    {
      var angle = TranslateService.getAngle({x:1,y:1, z:0});
      if(Math.fround(angle) != 45)
      {
        throw new Error(
          `get angle: angle not equal (${angle} != 45)`);
      }

      var angle = TranslateService.getAngle({x:1,y:Math.sqrt(3), z:0});
      if(Math.fround(angle) != 60)
      {
        throw new Error(
          `get angle: angle not equal (${angle} != 60)`);
      }

      var angle = TranslateService.getAngle({x: 1, y: -Math.sqrt(3), z: 0});
      if(Math.fround(angle) != 300)
      {
        throw new Error(
          `get angle: angle not equal (${angle} != 300)`);
      }

      var angle = TranslateService.getAngle({x: -1, y: Math.sqrt(3), z: 0});
      if(Math.fround(angle) != 120)
      {
        throw new Error(
          `get angle: angle not equal (${angle} != 120)`);
      }

      var angle = TranslateService.getAngle({x: -1, y: -Math.sqrt(3), z: 0});
      if(Math.fround(angle) != 240)
      {
        throw new Error(
          `get angle: angle not equal (${angle} != 240)`);
      }
    }

    public static canConvertToVector(): void
    {
      var vector = TranslateService.toVector(60, 2);
      if(
        Math.fround(vector.x) != 1 ||
        Math.fround(vector.y) != Math.fround(Math.sqrt(3)))
      {
        throw new Error(
          `get angle: angle not equal `+
          `((${vector.x}, ${vector.y}) != (1, ${Math.fround(Math.sqrt(3))})`);
      }

      var vector = TranslateService.toVector(300, 2);
      if(
        Math.fround(vector.x) != 1 ||
        Math.fround(vector.y) != -Math.fround(Math.sqrt(3)))
      {
        throw new Error(
          `get angle: angle not equal `+
          `((${vector.x}, ${vector.y}) != (1, -${Math.fround(Math.sqrt(3))})`);
      }

      var vector = TranslateService.toVector(120, 2);
      if(
        Math.fround(vector.x) != -1 ||
        Math.fround(vector.y) != Math.fround(Math.sqrt(3)))
      {
        throw new Error(
          `get angle: angle not equal `+
          `((${vector.x}, ${vector.y}) != (-1, ${Math.fround(Math.sqrt(3))})`);
      }

      var vector = TranslateService.toVector(240, 2);
      if(
        Math.fround(vector.x) != -1 ||
        Math.fround(vector.y) != -Math.fround(Math.sqrt(3)))
      {
        throw new Error(
          `get angle: angle not equal `+
          `((${vector.x}, ${vector.y}) != (-1, -${Math.fround(Math.sqrt(3))})`);
      }
    }


  }
}
