/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.action.menu
{
  export class MenuActionSystem
      extends MenuActionSystemBase
  {
    currentScene: MenuScene;
    game: sczCore.Game;
    gameSceneId: number;

    public constructor(
      currentScene: MenuScene,
      game: sczCore.Game,
      gameSceneId: number,
      eventbus: sczCore.EventBus)
    {
      super([MenuComponent], eventbus);
      this.currentScene = currentScene;
      this.game = game;
      this.gameSceneId = gameSceneId;
    }

    protected exitMenu()
    {
      this.currentScene.deactivate();
      this.game.getScene(this.gameSceneId).activate();
    }

    public ret(_: number, [state]: [MenuComponent])
    {
      if(state.stack.length <= 1)
      {
        this.exitMenu();
        return;
      }
      state.ret();
    }

    public select(_: number, [state]: [MenuComponent])
    {
      let menu = state.getCurrentMenu();
      let selection = menu.children[state.cursorPosition]

      if(selection.children.length > 0)
      {
        state.stack.push(selection);
        state.cursorPosition = 0;
      }
      selection.action(this.currentScene.menuState);

      // ugly multi-line workaround
      state.cursorPosition = this.currentScene.menuState.getMenu().cursorPosition;
      if(selection.children.length > 0)
      {
        state.cursorPosition = 0;
      }
    }

    public up(_: number, [state]: [MenuComponent])
    {
      if(state.cursorPosition > 0)
        state.cursorPosition--;
    }

    public down(_: number, [state]: [MenuComponent])
    {
      let menu = state.getCurrentMenu();
      if(state.cursorPosition < menu.children.length -1)
        state.cursorPosition++;
    }
  }
}
