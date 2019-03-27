/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.action.menu
{
  export class ConsoleRenderSystem
      extends sczCore.SystemBase
  {
    protected changeCheckMenu: MenuEntry;
    protected changeCheckCursor: number;

    public constructor(
      eventbus: sczCore.EventBus)
    {
      super([MenuComponent], eventbus, sczCore.EngineEvent.Render);
    }

    protected processEntity(
      _deltaTime: number, [menuState]: [MenuComponent]): void
    {
      this.draw(menuState)
    }

    private draw(state: MenuComponent): void
    {
      let menu = state.getCurrentMenu();
      let position = state.cursorPosition;

      if(this.changeCheckMenu == menu
        && this.changeCheckCursor == position)
        return;

      this.changeCheckMenu = menu;
      this.changeCheckCursor = position;

      console.clear();
      for(let i = 0; i < menu.children.length; i++)
      {
        if(position == i)
          console.log("> ", menu.children[i].displayName)
        else
          console.log("  ", menu.children[i].displayName)
      }
    }

    public deactivate()
    {
      super.deactivate();

      this.changeCheckMenu = null;
    }
  }
}
