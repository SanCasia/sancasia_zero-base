
### Part Three: What About Enemies?
In this next step we will create a simple artificial opponent. Three new classes and a couple of small changes to the `Battlefield` will be needed to achieve this.

As before, we will implement a factory to handle the creation of our enemies. The `EnemyFactory` is very similar to the above shown `PlayerFactory` and is thus emitted. You can find its source at `demo/hello_world/part3/enemies/enemy_factory.ts`.

Second, a system to control the spawning is needed. It will extend `SystemBase` and override the `process` function. The function will then - based on some arbitrary logic - decide how and where the enemies should spawn.
```typescript
export class EnemySpawnSystem extends sczCore.SystemBase
{
  private game: sczCore.Game;
  private sceneId: number;
  private enemyFactory: EnemyFactory;
  private lanes: Array<{position: number, cooldown: number}>;

  constructor(
    game: sczCore.Game,
    sceneId: number,
    enemyFactory: EnemyFactory)
  {
      super(
        // define what we expect enemies to consist of
        [TranslateComponent],
        game.getEventBus(),
        // define when this system should be executed
        sczCore.EngineEvent.PreComputation);

      this.game = game;
      this.sceneId = sceneId;
      this.enemyFactory = enemyFactory;

      // define possible lanes
      this.lanes = [
          {position:  50, cooldown: 0},
          {position: 150, cooldown: 0},
          {position: 250, cooldown: 0},
          {position: 350, cooldown: 0}];
  }

  public process = (deltaTime: number): void =>
  {
    if(this.entities.size < 10)
    {
      // spawn chance: in average once a second
      if(Math.random() * 1000 < deltaTime)
      {
        // spawn enemy
        this.spawn();
      }
    }

    // continue to process registered entities
    for(let entity of this.entities.values())
    {
      let cache = <[TranslateComponent]> entity.getCache(this);
      this.processEntity(deltaTime, cache, entity.getId());
      entity.updateCache(this, cache);
    };
  }

  protected processEntity(
    _: number,
    [translate]: [TranslateComponent],
    entityId?: number): void
  {
    // check if out of view
    if(translate.position.y > 900)
    {
      // despawn enemy
      this.despawn(entityId);
    }
  }
}
```
The spawning logic is implemented to choose a random lane as well as to respect a certain "safety distance".
```typescript
...

  // spawns an enemy in a random lane
  private spawn(): void
  {
    // lane selection
    let laneNumber = Math.round(Math.random() * 3);
    let lane = this.lanes[laneNumber];

    // cooldown: max one spawn per lane per second
    let now = new Date().getTime()
    let delta = now - lane.cooldown;
    if(delta > 1000)
    {
      // reset cooldwon counter
      lane.cooldown = now;

      // create enemy using a dedicated factory
      let id = Math.floor(Math.random() * 10**12);
      let enemy = this.enemyFactory.create(
          id, {x: lane.position, y: -100});

      // add the enemy to the game
      this.game.addEntity(enemy);
      // register enemy to the appropriate systems
      this.game.registerEntity(
          this.sceneId,
          EnemySpawnSystem,
          enemy.getId());
      this.game.registerEntity(
        this.sceneId,
        EnemyMovementSystem,
        enemy.getId());
      this.game.registerEntity(
          this.sceneId,
          CanvasRenderSystem,
          enemy.getId());
    }
  }

  // despawns the enemy
  private despawn(entityId: number): void
  {
    // deregister enemy from its systems
    this.game.deregisterEntity(
        this.sceneId,
        EnemySpawnSystem,
        entityId);
    this.game.deregisterEntity(
        this.sceneId,
        EnemyMovementSystem,
        entityId);
    this.game.deregisterEntity(
        this.sceneId,
        CanvasRenderSystem,
        entityId);
    // remove enemy from the game
    this.game.removeEntity(entityId);
  }
}
```

> It is considered best practice to implement one system per responsibility, each dedicated to their single and preferably simple task.

Following this practice a system concerned with the enemies movement is needed.
```typescript
export class EnemyMovementSystem extends sczCore.SystemBase
{
  constructor(eventBus: sczCore.EventBus)
  {
      super(
        [TranslateComponent],
        eventBus,
        sczCore.EngineEvent.Computation);
  }

  protected processEntity(
    deltaTime: number,
    [translate]: [TranslateComponent]): void
  {
    // move enemy by 100 pixel per second
    translate.positionY += deltaTime * 0.1;
  }
}
```

Finally the scene has to be updated to reflect these changes.
```typescript
...
// add the render system to the scene
this.addSystem(renderSystem);


// create the enemy movement system and add it to the scene
let enemyMovementSystem = new EnemyMovementSystem(game.getEventBus());
this.addSystem(enemyMovementSystem);


// create the enemy factory
let enemyFactory = new EnemyFactory(
    "enemies/enemy.svg",
    {x: 200, y:200});

// create the enemy spawn system
//  which is responsible for spawning enemies
let enemySpawnSystem = new EnemySpawnSystem(
    game,
    this.getId(),
     enemyFactory);
this.addSystem(enemySpawnSystem);


// create the player factory
...
```
With these few lines of code inserted into the `Battlefield` class we have successfully implemented everything we wanted in this step and are ready to test the progress.
