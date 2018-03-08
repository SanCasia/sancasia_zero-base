/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.action
{
  export class DemoActionHandler
      extends BasicActionHandlerBase
  {
    protected eventbus: sczCore.EventBus;
    protected mainMenu: MenuEntry;

    public constructor(eventbus: sczCore.EventBus, menu: MenuEntry)
    {
      super();
      this.eventbus = eventbus;
      this.mainMenu = menu;
    }

    public draw(state: StateComponent): void
    {
      if(!state.isInMenu)
      {
        console.clear();
        console.log("score: ", state.score);
        return;
      }

      let menu = this.getCurrentMenu(state);

      console.clear();
      for(let i = 0; i < menu.children.length; i++)
      {
        if(state.cursorPosition == i)
          console.log("> ", menu.children[i].displayName)
        else
          console.log("  ", menu.children[i].displayName)
      }
    }

    public getCurrentMenu(state: StateComponent): MenuEntry
    {
      let menu = this.mainMenu;
      for(let i of state.menuPosition)
      {
        if(i >= menu.children.length && 0 > i)
          break;

        menu = menu.children[i];
      }

      return menu;
    }

    public menu(_: number, [state]: [StateComponent])
    {
      if(state.isInMenu)
        return;

      state.isInMenu = true;

      // work around :/
      state.menuPosition = [0];
    }

    public return(_: number, [state]: [StateComponent])
    {
      if(!state.isInMenu)
        return;

      if(state.menuPosition.length == 0)
      {
        state.isInMenu = false;
        this.draw(state);
        return;
      }

      state.cursorPosition = state.menuPosition.pop();

      this.draw(state);
    }

    public select(_: number, [state]: [StateComponent])
    {
      if(!state.isInMenu)
        return;

      let menu = this.getCurrentMenu(state);

      if(menu.children[state.cursorPosition].children.length > 0)
      {
        state.menuPosition.push(state.cursorPosition);
        state.cursorPosition = 0;
      }

      menu = menu.children[state.cursorPosition];
      menu.action(state, this.eventbus);

      this.draw(state);
    }

    public up(_: number, [state]: [StateComponent])
    {
      if(!state.isInMenu)
        return;

      if(state.cursorPosition > 0)
        state.cursorPosition--;

      this.draw(state);
    }

    public down(_: number, [state]: [StateComponent])
    {
      if(!state.isInMenu)
        return;

      let menu = this.getCurrentMenu(state);
      if(state.cursorPosition < menu.children.length -1)
        state.cursorPosition++;

      this.draw(state);
    }

    public top(_: number, [state]: [StateComponent])
    {
      if(state.isInMenu)
        return;

      state.cursorPosition = 0;
      this.draw(state);
    }

    public bottom(_: number, [state]: [StateComponent])
    {
      if(state.isInMenu)
        return;

      let menu = this.getCurrentMenu(state);

      state.cursorPosition = menu.children.length -1;
      this.draw(state);
    }

    public quickSave(_: number, [state]: [StateComponent])
    {
      StateComponent.saveGame(state, this.mainMenu, "Quick Save");
    }

    public quickLoad(_: number, [state]: [StateComponent])
    {
      let save = this.mainMenu
        .getChildByName("Load Game")
        .getChildByName("Quick Save");

      save.action(state);
    }
  }
}
