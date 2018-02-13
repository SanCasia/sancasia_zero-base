### Part Two: User Input Required
This part will be completed soon...  
We will be working with user input to control the triangle using a derivative of the `InputSystemBase` class.

These features are planned for the next release (v1.1). A release date will not be specified.

If you plan on building a full game, it is important to organise and structure your code from the very beginning. One change we will need to apply is to fully exploit the potential of the `Scene` class:
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
If some of the code above looks familiar, that's because it was copied from the main function which now is way less complicated and looks like this:
```typescript
public static main()
{
  // create the new game object
  // this is initialising a new event bus as well as a new engine
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
