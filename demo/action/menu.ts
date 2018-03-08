/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.action
{
  export class MenuEntry
  {
    public displayName: string;
    public children: MenuEntry[];
    public action: ((state: StateComponent, eventbus?: sczCore.EventBus)  => void);

    public constructor(
      name: string,
      children: MenuEntry[],
      action?: ((state: StateComponent, eventbus?: sczCore.EventBus)  => void))
    {
      this.displayName = name;
      this.children = children;
      this.action = action == null ? ((_) => {}) : action;
    }

    public getChildByName(name: string): MenuEntry
    {
      for(let child of this.children)
      {
        if(child.displayName === name)
        {
          return child;
        }
      }
      return null;
    }
  }

  export enum Difficulty
  {
    Easy,
    Medium,
    Hard
  }

  export class MenuFactory
  {
    public static create(): MenuEntry
    {
      let menu = new MenuEntry("Main Menu", [
        new MenuEntry("Start Game", []),
        new MenuEntry("Save Game", [], (state: StateComponent) => {
          StateComponent.saveGame(state, menu);
        }),
        new MenuEntry("Load Game", [
          new MenuEntry("Return", [], (_, eventbus: sczCore.EventBus) => {
            eventbus.publish(BasicAction.Return, null);
          })]),
        new MenuEntry("Options", [
          new MenuEntry("Sound", [
            new MenuEntry("On", [], (state: StateComponent) => {
              state.isSoundOn = true;
            }),
            new MenuEntry("Off", [], (state: StateComponent) => {
              state.isSoundOn = false;
            }),
            new MenuEntry("Return", [], (_, eventbus: sczCore.EventBus) => {
              eventbus.publish(BasicAction.Return, null);
            })]),
          new MenuEntry("Difficulty", [
            new MenuEntry("Easy", [], (state: StateComponent) => {
              state.difficulty =  Difficulty.Easy;
            }),
            new MenuEntry("Medium", [], (state: StateComponent) => {
              state.difficulty = Difficulty.Medium;
            }),
            new MenuEntry("Hard", [], (state: StateComponent) => {
              state.difficulty = Difficulty.Hard;
            }),
            new MenuEntry("Return", [], (_, eventbus: sczCore.EventBus) => {
              eventbus.publish(BasicAction.Return, null);
            })]),
          new MenuEntry("Return", [], (_, eventbus: sczCore.EventBus) => {
            eventbus.publish(BasicAction.Return, null);
          })]),
        new MenuEntry("Credits", [], (_deltatime, _eventbus: sczCore.EventBus) => {
          console.log("A demo by SanCasia");
          console.log("Design by 404notFound");
          console.log("Engine by S. C. Zero");
          console.log("AndSoOn by And So On");
      })]);

      return menu;
    }
  }
}
