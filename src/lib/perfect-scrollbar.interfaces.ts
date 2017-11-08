export class Geometry {
  public x: number;
  public y: number;

  public w: number;
  public h: number;

  constructor(x: number, y: number, w: number, h: number) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

export class Position {
  public x: number | 'start' | 'end';
  public y: number | 'start' | 'end';

  constructor(x: number | 'start' | 'end', y: number | 'start' | 'end') {
    this.x = x;
    this.y = y;
  }
}

export const PerfectScrollbarEvents = [
  'ps-scroll-y',
  'ps-scroll-x',

  'ps-scroll-up',
  'ps-scroll-down',
  'ps-scroll-left',
  'ps-scroll-right',

  'ps-y-reach-end',
  'ps-y-reach-start',
  'ps-x-reach-end',
  'ps-x-reach-start'
];

export interface PerfectScrollbarConfigInterface {
  handlers?: string[];

  wheelSpeed?: number;
  swipeEasing?: boolean;

  suppressScrollX?: boolean;
  suppressScrollY?: boolean;

  useBothWheelAxes?: boolean;

  wheelPropagation?: boolean;
  swipePropagation?: boolean;

  scrollingThreshold?: number;

  minScrollbarLength?: number;
  maxScrollbarLength?: number;

  scrollXMarginOffset?: number;
  scrollYMarginOffset?: number;
}

export class PerfectScrollbarConfig implements PerfectScrollbarConfigInterface {
  public handlers: string[];

  public wheelSpeed: number;
  public swipeEasing: boolean;

  public suppressScrollX: boolean;
  public suppressScrollY: boolean;

  public useBothWheelAxes: boolean;

  public wheelPropagation: boolean;
  public swipePropagation: boolean;

  public scrollingThreshold: number;

  public minScrollbarLength: number;
  public maxScrollbarLength: number;

  public scrollXMarginOffset: number;
  public scrollYMarginOffset: number;

  constructor(config: PerfectScrollbarConfigInterface = {}) {
    this.assign(config);
  }

  public assign(config: PerfectScrollbarConfigInterface = {}) {
    for (const key in config) {
      this[key] = config[key];
    }
  }
}
