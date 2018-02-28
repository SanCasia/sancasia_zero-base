/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export class DefaultBasicInputInterpreter
      extends  BasicInputInterpreterBase
  {
    public constructor(eventbus: sczCore.EventBus)
    {
      super(eventbus);

      document.addEventListener('keydown', this.interpreter);
    }

    protected interpreter = (event: KeyboardEvent): void =>
    {
      switch (event.keyCode)
      {
        // menu:
        //  pause, esc, "p"
        case 19:
        case 27:
        case 80:
          super.publishMenuAction();

        // return:
        //  backspace, esc, delete
        case 8:
        case 27:
        case 46:
          super.publishReturnAction();
          break;

        // start:
        //  enter, space
        case 13:
        case 32:
          super.publishStartAction()
          break;

        // stop:
        //  backspace, pause, esc, delete, "p"
        case 8:
        case 19:
        case 27:
        case 46:
        case 80:
          super.publishStopAction();
          break;

        // quick save:
        //  "f6"
        case 117:
          super.publishQuickSaveAction();
          break;

        // quick load:
        //  "f5"
        case 116:
          super.publishQuickLoadAction();
          break;

      }
    }
  }
}
