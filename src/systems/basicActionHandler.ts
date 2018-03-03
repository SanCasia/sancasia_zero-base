/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export interface BasicActionHandler
  {
    // basics
    menu(requires: Array<sczCore.Component>): void;
    return(requires: Array<sczCore.Component>): void;
    start(requires: Array<sczCore.Component>): void;
    stop(requires: Array<sczCore.Component>): void;
    quickSave(requires: Array<sczCore.Component>): void;
    quickLoad(requires: Array<sczCore.Component>): void;

    // menu actions
    select(requires: Array<sczCore.Component>): void;
    unselect(requires: Array<sczCore.Component>): void;
    undo(requires: Array<sczCore.Component>): void;
    redo(requires: Array<sczCore.Component>): void;

    // menu navigation
    up(requires: Array<sczCore.Component>): void;
    down(requires: Array<sczCore.Component>): void;
    left(requires: Array<sczCore.Component>): void;
    right(requires: Array<sczCore.Component>): void;
    top(requires: sczCore.Component[]): void;
    bottom(requires: sczCore.Component): void;
    previous(requires: Array<sczCore.Component>): void;
    next(requires: Array<sczCore.Component>): void;
    back(requires: Array<sczCore.Component>): void;
}

  export class BasicActionHandlerBase implements BasicActionHandler
  {
    // basic actions
    menu(_: sczCore.Component[]): void {}
    return(_: sczCore.Component[]): void {}
    start(_: sczCore.Component[]): void {}
    stop(_: sczCore.Component[]): void {}
    quickSave(_: sczCore.Component[]): void {}
    quickLoad(_: sczCore.Component[]): void {}

    // menu actions
    select(_: Array<sczCore.Component>): void {}
    unselect(_: Array<sczCore.Component>): void {}
    undo(_: sczCore.Component[]): void {}
    redo(_: sczCore.Component[]): void {}

    // menu navigation
    up(_: sczCore.Component[]): void {}
    down(_: sczCore.Component[]): void {}
    left(_: sczCore.Component[]): void {}
    right(_: sczCore.Component[]): void {}
    top(_: sczCore.Component[]): void {}
    bottom(_: sczCore.Component): void {}
    previous(_: sczCore.Component[]): void {}
    next(_: sczCore.Component[]): void {}
    back(_: sczCore.Component[]): void {}
  }
}
