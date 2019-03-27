/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export class MenuActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::MENU";
    name = MenuActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class NextActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::NEXT";
    name = NextActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class PreviousActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::PREVIOUS";
    name = PreviousActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class StartActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::START";
    name = StartActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class StopActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::STOP";
    name = StopActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class QuickSaveActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::QUICK_SAVE";
    name = QuickSaveActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class QuickLoadActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::QUICK_LOAD";
    name = QuickLoadActionEvent.Name;
    occurrenceTime = new Date();
  }
}
