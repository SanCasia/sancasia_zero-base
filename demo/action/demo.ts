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
        new DefaultBasicInputInterpreter(game.getEventBus());

      let handler = new DemoActionHandler(
        game.getEventBus(),
        MenuFactory.create());

      let actionSystem = new BasicActionSystem(
        handler,
        [StateComponent],
        game.getEventBus(),
        sczCore.EngineEvent.PreComputation);

      game.addSystem(
        scene.getId(),
        actionSystem);

      let entity = new sczCore.Entity(0);
      let gameState = new StateComponent();
      entity.addComponent(gameState);

      game.addEntity(entity);
      game.registerEntity(
        scene.getId(),
        BasicActionSystem,
        entity.getId());

      // start the game engine
      game.start();

      // activate the scene
      game.activateScene(scene.getId());

      // activate interpreter
      interpreter.activate();
    }
  }
}
