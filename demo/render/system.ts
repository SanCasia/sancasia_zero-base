/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.render
{
  export class PartSystem extends sczCore.SystemBase
  {
    constructor(
        eventBus: sczCore.EventBus)
    {
      // call system base constructor:
      //  [TranslateComponent];     define which components we are interssted in
      //  eventBus;                 pass event bus to super class
      // EngineEvent.Computation;   define in which stage we want to be executed
      super(
          [TranslateComponent],
          eventBus,
          sczCore.EngineEvent.Computation);
    }

    protected processEntity(
        _: number,
        [translate]:[TranslateComponent]): void
    {
      // calculate state of sinus curve based on current time
      let sinus = (Math.sin((new Date().getTime() / 360) % (2*Math.PI)));
      // set rotation to sinus times max angle (sinus in +- 1)
      translate.rotation = sinus * 50;
    }
  }
}
