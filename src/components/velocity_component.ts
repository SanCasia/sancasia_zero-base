/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export class VelocityComponent extends sczCore.Component
  {
    public velocityX: number = 0;
    public accelerationX: number = 0;

    public velocityY: number = 0;
    public accelerationY: number = 0;
  }
}
