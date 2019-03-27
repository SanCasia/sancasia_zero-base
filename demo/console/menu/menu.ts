/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.action.menu
{
  export class MenuEntry
  {
    public displayName: string;
    public children: MenuEntry[];
    public action: ((state: MenuState)  => void);

    public constructor(
      name: string,
      children: MenuEntry[],
      action?: ((state: MenuState)  => void))
    {
      this.displayName = name;
      this.children = children;
      this.action = action != null ? action : ((_) => {});
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

  export class MenuFactory
  {
    public static create(demoRepository: DemoRepository): MenuEntry
    {
      let menu = new MenuEntry("Main Menu", [
        new MenuEntry("Start Game", [], (_state: MenuState) => {
          alert("press esc");
        }),
        new MenuEntry("Save Game", [], (state: MenuState) => {
          let saveName = prompt('save name?', 'quick save');
          if(saveName == null) return;
          demoRepository.saveGame(saveName, state.getGameState());
        }),
        new MenuEntry("Load Game", [new MenuEntry("workaround", [])],
          (state: MenuState) => {
            let _this = state.getMenu().getCurrentMenu();
            let ret = new MenuEntry(
              "Return", [],
              (state: MenuState) => { state.menuReturn(); });
            let saves = demoRepository.getSavesNames().map(savename =>
              new MenuEntry(
                savename, [],
                (state: MenuState) => {
                  demoRepository.loadGame(savename);
                  state.menuReturn();
                }));
            _this.children = saves.concat(ret);
          }),
        new MenuEntry("Options", [
          new MenuEntry("Sound", [
            new MenuEntry("On", [], (state: MenuState) => {
              state.setVolume(0);
              state.menuReturn();
            }),
            new MenuEntry("Off", [], (state: MenuState) => {
              state.setVolume(100);
              state.menuReturn();
            }),
            new MenuEntry("Return", [], (state: MenuState) => {
              state.menuReturn();
            })]),
          new MenuEntry("Difficulty", [
            new MenuEntry("Easy", [], (state: MenuState) => {
              state.setDifficulty(Difficulty.Easy);
              state.menuReturn();
            }),
            new MenuEntry("Medium", [], (state: MenuState) => {
              state.setDifficulty(Difficulty.Medium);
              state.menuReturn();
            }),
            new MenuEntry("Hard", [], (state: MenuState) => {
              state.setDifficulty(Difficulty.Hard);
              state.menuReturn();
            }),
            new MenuEntry("Return", [], (state: MenuState) => {
              state.menuReturn();
            })]),
          new MenuEntry("Return", [], (state: MenuState) => {
            state.menuReturn();
          })]),
        new MenuEntry("Credits", [], () => {
          // wont work
          console.log("A demo by SanCasia");
          console.log("Design by 404notFound");
          console.log("Engine by S. C. Zero");
          console.log("AndSoOn by And So On");
      })]);

      return menu;
    }
  }
}
