/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export interface BasicActionHandler
  {
    // basics
    menu(deltatime: number, requires: Array<sczCore.Component>): void;
    return(deltatime: number, requires: Array<sczCore.Component>): void;
    start(deltatime: number, requires: Array<sczCore.Component>): void;
    stop(deltatime: number, requires: Array<sczCore.Component>): void;
    quickSave(deltatime: number, requires: Array<sczCore.Component>): void;
    quickLoad(deltatime: number, requires: Array<sczCore.Component>): void;

    // menu actions
    select(deltatime: number, requires: Array<sczCore.Component>): void;
    unselect(deltatime: number, requires: Array<sczCore.Component>): void;
    undo(deltatime: number, requires: Array<sczCore.Component>): void;
    redo(deltatime: number, requires: Array<sczCore.Component>): void;

    // menu navigation
    up(deltatime: number, requires: Array<sczCore.Component>): void;
    down(deltatime: number, requires: Array<sczCore.Component>): void;
    left(deltatime: number, requires: Array<sczCore.Component>): void;
    right(deltatime: number, requires: Array<sczCore.Component>): void;
    top(deltatime: number, requires: Array<sczCore.Component>): void;
    bottom(deltatime: number, requires: Array<sczCore.Component>): void;
    previous(deltatime: number, requires: Array<sczCore.Component>): void;
    next(deltatime: number, requires: Array<sczCore.Component>): void;
    back(deltatime: number, requires: Array<sczCore.Component>): void;
}

  export class BasicActionHandlerBase implements BasicActionHandler
  {
    // basic actions
    menu(_deltatime: number, _requires: sczCore.Component[]): void {}
    return(_deltatime: number, _requires: sczCore.Component[]): void {}
    start(_deltatime: number, _requires: sczCore.Component[]): void {}
    stop(_deltatime: number, _requires: sczCore.Component[]): void {}
    quickSave(_deltatime: number, _requires: sczCore.Component[]): void {}
    quickLoad(_deltatime: number, _requires: sczCore.Component[]): void {}

    // menu actions
    select(_deltatime: number, _requires: sczCore.Component[]): void {}
    unselect(_deltatime: number, _requires: sczCore.Component[]): void {}
    undo(_deltatime: number, _requires: sczCore.Component[]): void {}
    redo(_deltatime: number, _requires: sczCore.Component[]): void {}

    // menu navigation
    up(_deltatime: number, _requires: sczCore.Component[]): void {}
    down(_deltatime: number, _requires: sczCore.Component[]): void {}
    left(_deltatime: number, _requires: sczCore.Component[]): void {}
    right(_deltatime: number, _requires: sczCore.Component[]): void {}
    top(_deltatime: number, _requires: sczCore.Component[]): void {}
    bottom(_deltatime: number, _requires: sczCore.Component[]): void {}
    previous(_deltatime: number, _requires: sczCore.Component[]): void {}
    next(_deltatime: number, _requires: sczCore.Component[]): void {}
    back(_deltatime: number, _requires: sczCore.Component[]): void {}
  }
}
