/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export class CloseMenuActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::CLOSE_MENU";
    name = CloseMenuActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class ReturnActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::RETURN";
    name = ReturnActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class SelectActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::SELECT";
    name = SelectActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class UnselectActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::UNSELECT";
    name = UnselectActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class UndoActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::UNDO";
    name = UndoActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class RedoActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::REDO";
    name = RedoActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class UpActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::UP";
    name = UpActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class DownActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::DOWN";
    name = DownActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class LeftActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::LEFT";
    name = LeftActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class RightActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::RIGHT";
    name = RightActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class TopActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::TOP";
    name = TopActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class BottomActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::BOTTOM";
    name = BottomActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class NextMenuActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::NEXT_MENU";
    name = NextMenuActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class PreviousMenuActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::PREVIOUS_MENU";
    name = PreviousMenuActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class BackActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::BASIC_ACTION::BACK";
    name = BackActionEvent.Name;
    occurrenceTime = new Date();
  }
}
