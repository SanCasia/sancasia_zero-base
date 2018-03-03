/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export class DefaultBasicInputInterpreter
      extends  BasicInputInterpreterBase
  {
    public constructor(eventbus: sczCore.EventBus)
    {
      super(eventbus);
    }

    public activate()
    {
      document.addEventListener('keyup', this.interpreter);
      document.addEventListener('keydown', (e) => {e.preventDefault()});
    }

    public deactivate()
    {
      document.removeEventListener('keyup', this.interpreter);
    }

    protected interpreter = (event: KeyboardEvent): void =>
    {
      // menu:
      //  pause, esc, "p"
      if(event.keyCode ==  19 || event.keyCode ==  27 || event.keyCode ==  80)
      {
        super.publishMenuAction();
      }

      // return:
      //  backspace, esc, delete
      if(event.keyCode ==  8 || event.keyCode ==  27 || event.keyCode ==  46)
      {
        super.publishReturnAction();
      }

      // start:
      //  enter, space
      if(event.keyCode ==  13 || event.keyCode ==  32)
      {
        super.publishStartAction()
      }

      // stop:
      //  backspace, pause, esc, delete, "p"
      if(event.keyCode ==  8 || event.keyCode ==  19 || event.keyCode ==  27
          || event.keyCode ==  46 || event.keyCode ==  80)
      {
        super.publishStopAction();
      }

      // quick save:
      //  "f6"
      if(event.keyCode ==  117)
      {
        super.publishQuickSaveAction();
      }

      // quick load:
      //  "f5"
      if(event.keyCode ==  116)
      {
        super.publishQuickLoadAction();
      }
    }
  }
}
