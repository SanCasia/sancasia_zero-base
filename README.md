# SanCasia Zero: Base
SanCasia Version Zero Base: The Base of SanCasia Zero

SanCasia Zero (SCZ) is based on the principles Entity Component Systems (ECS)[1].
SCZ is by far not the only game engine which is based upon an ECS but it also relays on an EventBus for communication to further decouple dependencies. These two concepts combined allow an interesting degree of independence between the software components.

SanCasia Zero is a proof of concept and therefore performance is currently not a concern.

## npm
`SanCasia Zero: Base` is available via npm.

``` bash
npm install --save sancasia_zero-base
```

## Getting Started
SanCasia Zero: Base implements the most commonly needed systems and components currently including a canvas based render system. If you are interested in the inner workings of this game engine or want to have a practical example of a ECS consider visiting [SanCasia Zero: Core](https://github.com/SanCasia/sancasia_zero-core).

If you want to understand how develop basic games with the SanCasia game engine,  I recommend you to read this article, as well as taking a look at the source code and associated test cases.

The following examples are located under `demo/hello_world`.

### Hello World
The first thing you probably want to do is to have something displayed on screen.
We will be drawing a triangle in the center of the window.

To achieve this we will need to define the main function.

To keep things nice and simple we can further divide the main into two distinct parts. The first part is rather common and can be found in other examples with few  to no changes. Its main job is to create and start the engine:
``` typescript
public static main()
{  
  // create the new game object
  // this is initializing a new event bus as well as a new engine
  let game = new sczCore.Game();

  // create the scene in which the triangle should exist
  let scene = new sczCore.SceneBase(0, game.getEventBus());
  // add the scene to the game
  game.addScene(scene);

  // create the canvas render system
  //  it expects the context of a canvas as the first argument
  let canvas = <HTMLCanvasElement> document.getElementById("canvas");
  let context = canvas.getContext('2d');
  //  and a translate service as the second
  let translateService = new TranslateService(game);
  let renderSystem =
      new CanvasRenderSystem(
          context,
          translateService,
          game.getEventBus());

  // add the render system to the game
  //  the render system is responsible for our drawing jobs
  game.addSystem(
      scene.getId(),
      renderSystem);

  // TODO: Game Specific Code

  // lets start the engine!
  game.start();
  // ... and activate the scene!
  game.activateScene(scene.getId());
}
```
This code first creates a new game, adds all the needed scenes and systems, defines a place holder for further code and in the end it starts the game and activates the scene.

The other part contains the game specific code and will replace the place holder in the first part:
``` typescript
// Game Specific Code
// defining the triangle
let triangle = new sczCore.Entity(0);
let translate = new sczBase.TranslateComponent();
let sprite = new sczBase.SpriteComponent();

// define the position
translate.positionX = 100;
translate.positionY = 100;

// define the size
translate.sizeX = 1;
translate.sizeY = 1;

// define rotation
translate.rotation = 0;

// define center
translate.centerX = 0;
translate.centerY = 0;

// define the parent
translate.parentId = -1;

// define sprite
sprite.sprite = new Image();
sprite.sprite.src = "triangle.svg";

// inform about original dimensions of sprite
sprite.sizeX = 200;
sprite.sizeY = 144.225;

// add components to entity
triangle.addComponent(translate);
triangle.addComponent(sprite);

// add triangle to the game
game.addEntity(triangle);

// register the triangle to the render system
game.registerEntity(
    scene.getId(),
    CanvasRenderSystem,
    triangle.getId());
```
Here a new entity is created. It is given a translate component which defines position as well as size and rotation and a sprite component which defines the look. In the end the component is registered to the canvas render system.

Done! That's it!  
All you need now is a HTML page to host this code as well as the main canvas and the graphic and your ready to go!

### Part Two
This part will be completed soon...  
We will be working with user input to control the triangle using a derivative of the `InputSystemBase` class.

These features are planed for the next release (v1.1). A release date will not be specified.

If you plan on building a full game it is important to organise and structure your code form the very beginning. One change we will need to apply is to fully exploit the potential of the `scene` class:
```typescript
export class Battlefield extends sczCore.SceneBase
{
  public constructor(id: number, game: sczCore.Game)
  {
    super(id, game.getEventBus());


    // create the canvas render system
    //  the render system is responsible for our drawing jobs
    //  it expects the context of a canvas as the first argument
    let canvas = <HTMLCanvasElement> document.getElementById("canvas");
    let context = canvas.getContext('2d');
    //  and a translate service as the second
    let translateService = new TranslateService(game);
    let renderSystem =
        new CanvasRenderSystem(
            context,
            translateService,
            game.getEventBus());

    // add the render system to this scene
    this.addSystem(renderSystem);


    // create the player factory (will be explained in a bit)
    let playerFactory = new PlayerFactory(
        "players/player.svg",
        {x: 200, y:200});

    // spawn the player
    let player = playerFactory.create(0, {x: 200, y: 700});
    game.addEntity(player);
    renderSystem.registerEntity(player);
  }
}
```
If some of code above looks familiar that's because it was copied from the main function which now is much less complicated and looks like this:
```typescript
public static main()
{
  // create the new game object
  // this is initializing a new event bus as well as a new engine
  let game = new sczCore.Game();

  // create the scene in which the triangle will exist
  let battlefield = new Battlefield(0, game);
  // add the scene to the game
  game.addScene(battlefield);

  // lets start the engine!
  game.start();
  // ... and activate the scene!
  game.activateScene(battlefield.getId());
}
```

In addition, in an effort to further simplify our code, we will start using factories to create entities.  
The factory pattern is a wildly used programming practice in which the creation of objects or even object structures are hidden behind easy-to-use functions:
```typescript
export class PlayerFactory
{
  private spriteSrc: string;
  private spriteDimensions: {x: number, y: number};

  public constructor(
      spriteSrc: string,
      spriteDimensions: {x: number, y: number})
  {
    this.spriteSrc = spriteSrc;
    this.spriteDimensions = spriteDimensions;
  }

  public create(
      id: number,
      position: {x: number, y: number},
      ): sczCore.Entity
  {
    // defining the player entity
    let player = new sczCore.Entity(id);
    let translate = new sczBase.TranslateComponent();
    let sprite = new sczBase.SpriteComponent();

    // define the position
    translate.positionX = position.x;
    translate.positionY = position.y;

    // define the size
    translate.sizeX = 1;
    translate.sizeY = 1;

    // define rotation
    translate.rotation = 0;

    // define center
    translate.centerX = 0;
    translate.centerY = 0;

    // define the parent
    translate.parentId = -1;

    // define sprite
    sprite.sprite = new Image();
    sprite.sprite.src = this.spriteSrc;

    // inform about original dimensions of sprite
    sprite.sizeX = this.spriteDimensions.x;
    sprite.sizeY = this.spriteDimensions.y;

    // add components to entity
    player.addComponent(translate);
    player.addComponent(sprite);

    return player;
  }
}
```

### Part Three
In this next step we will create a simple artificial opposing player. Three new classes and a couple of small changes to the `Battlefield` will be needed to achieve this.

As before we will implement a factory to handle the creation of our enemies. The `EnemyFactory` is very similar to the above shown `PlayerFactory` and is thus emitted. You can find its source at `demo/hello_world/part3/enemies/enemy_factory.ts`.

Second a system to control the spawning is needed. It will extend `SystemBase` and override the `process` function. The function will then - based on some arbitrary logic - decide how and where the enemies should spawn.
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
      // spawn chance: in avarage once a second
      if(Math.random() * 1000 < deltaTime)
      {
        // spawn enemy
        this.spawn();
      }
    }

    // continue processing registered entities
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

> It is considered best practice to implement one systems per responsibility, each dedicated to their single and preferably simple task.

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
