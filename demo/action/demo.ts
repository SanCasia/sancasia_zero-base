/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.action
{
  export class ActionDemo
  {
    public static Main(): void
    {
      let game = new sczCore.Game();

      let scene = new sczCore.SceneBase(0, game.getEventBus());
      game.addScene(scene);

      let interpreter =
        new sczBase.DefaultBasicInputInterpreter(game.getEventBus());
      interpreter.activate();

      let handler = new DemoActionHandler();
      game.addSystem(
        scene.getId(),
        new BasicActionSystem(
          handler,
          [],
          game.getEventBus(),
          sczCore.EngineEvent.Computation));

      let entity = new sczCore.Entity(0);
      game.addEntity(entity);
      game.registerEntity(
        scene.getId(),
        BasicActionSystem,
        entity.getId());

      // start the game engine
      game.start();

      // activate the scene
      game.activateScene(scene.getId());
    }
  }
}
