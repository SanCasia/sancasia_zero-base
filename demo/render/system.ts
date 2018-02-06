/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.render
{
  export class PartSystem extends sczCore.SystemBase
  {
    constructor(
        eventBus: sczCore.EventBus)
    {
      super(
          [TranslateComponent],
          eventBus,
          sczCore.EngineEvent.Computation);
    }

    protected processEntity(
        _: number,
        [translate]:[TranslateComponent]): void
    {

      let sinus = (Math.sin((new Date().getTime() / 360) % (2*Math.PI)));
      translate.rotation = sinus * 50;
    }
  }
}
