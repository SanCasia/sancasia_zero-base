/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.action
{
  export class StateComponent
    extends sczCore.Component
  {
    public score: number = 0;

    // menu state
    public isInMenu: boolean = false;
    public menuPosition: number[];
    public cursorPosition: number;

    public isSoundOn = true;
    public difficulty = Difficulty.Medium;

    public static saveGame(state: StateComponent, menu: MenuEntry, name?: string)
    {
      let loadGame = menu.getChildByName("Load Game");

      if(name == null)
        name = `${loadGame.children.length}`;

      let score = state.score;

      let action = (state: StateComponent, eventbus: sczCore.EventBus) => {
        state.score = score;
        for(let _ in state.menuPosition)
        {
          eventbus.publish(BasicAction.Return, null);
        }
        eventbus.publish(BasicAction.Return, null);
      }

      let override = loadGame.getChildByName(name);
      if (override != null)
      {
        override.action = action;
        return;
      }

      loadGame.children.push(
        new MenuEntry(
          name,
          [],
          action
        )
      );
    }
  }
}
