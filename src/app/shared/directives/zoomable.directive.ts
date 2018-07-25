import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer,
  OnInit
} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[zoomable]'
})
export class ZoomableDirective implements OnInit {
  hoverView: HTMLElement;         // transparent hover wrapper, sits on top of the image
  peepView: HTMLElement;          // box that moves with mouse over the image
  zoomView: HTMLElement;          // zoomed view
  imgRect: ClientRect;
  listeners: Function[] = [];
  hoverViewPosition: {
    width: number,
    height: number,
    top: number,
    left: number
  };

  public options = {
    hoverView: {
      background: 'transparent none',
      position: 'absolute',
      zIndex: '999'
    },
    peepView: {
      borderColor: '#fff',
      borderWidth: '2px',
      borderStyle: 'solid',
      cursor: 'zoom-in',
      position: 'fixed'
    },
    zoomView: {
      position: 'absolute',
      zIndex: '999',
    },
    settings: {
      zoom: 3,
      gap: 20
    }
  };

  // tslint:disable-next-line:no-input-rename
  @Input('zoomable') customOptions?: {
    hoverView?: {},
    peepView?: {},
    zoomView?: {},
    settings?: {}
  };

  // tslint:disable-next-line:no-input-rename
  @Input('zoomableSrc') sourceImage?= '';

  constructor(private el: ElementRef, private renderer: Renderer) { }

  // directives starts its work each time element it moused over
  @HostListener('mouseenter') onMouseEnter() {
    this.imgRect = this.el.nativeElement.getBoundingClientRect();
    this.createHoverView();
    this.updateHoverViewPosition();
    this.positionHoverView();
    this.styleHoverView();
    this.assignHoverListeners();
  }

  ngOnInit() {
    const {
      peepView: peepViewCustomOptions = {},
      zoomView: zoomViewCustomOptions = {},
      settings: customSettings = {}
    } = this.customOptions || {};

    // extend default options
    Object.assign(this.options.peepView, peepViewCustomOptions);
    Object.assign(this.options.zoomView, zoomViewCustomOptions);
    Object.assign(this.options.settings, customSettings);
  }

  /**
   * Creates element that acts as wrapper for peep box
   */
  private createHoverView() {
    this.hoverView = this.renderer.createElement(this.el.nativeElement.parentNode, 'div');
  }

  /**
   * Creates peep view element that moves with the mouse over the image
   */
  private createPeepView() {
    this.peepView = this.renderer.createElement(this.hoverView, 'div');
  }

  /**
   * Creates the zoom view element
   */
  private createZoomView() {
    this.zoomView = this.renderer.createElement(this.el.nativeElement.parentNode, 'div');
  }

  // TODO: Try doing this with observables
  private assignHoverListeners() {
    this.listeners.push(
      this.renderer.listen(this.hoverView, 'mouseenter', (event: MouseEvent) => {
        // peep view related tasks
        this.createPeepView();
        this.stylePeepView();
        this.positionPeepView(event);

        // zoom view related tasks
        this.createZoomView();
        this.styleZoomView();
        this.positionZoomView();
      }),
      this.renderer.listen(this.hoverView, 'mouseleave', () => this.destroyViews()),
      this.renderer.listen(this.hoverView, 'mousemove', (event: MouseEvent) => {
        this.positionPeepView(event);
        this.positionZoomBackground(event);
      })
    );
  }

  private styleHoverView() {
    Object.keys(this.options.hoverView)
      .forEach(key => {
        this.renderer.setElementStyle(this.hoverView, key, this.options.hoverView[key]);
      });
  }

  private stylePeepView() {
    const dimensions = this.getPeepViewDimensions(),
      props = Object.assign({
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`
      }, this.options.peepView);

    Object.keys(props)
      .forEach(key => {
        this.renderer.setElementStyle(this.peepView, key, props[key]);
      });
  }

  private styleZoomView() {
    Object.keys(this.options.zoomView)
      .forEach(key => {
        this.renderer.setElementStyle(this.zoomView, key, this.options.zoomView[key]);
      });
  }

  private updateHoverViewPosition() {
    this.hoverViewPosition = {
      top: this.imgRect.top + window.scrollY,
      left: this.imgRect.left + window.scrollX,
      width: this.imgRect.width,
      height: this.imgRect.height
    };
  }

  private positionHoverView() {
    Object.keys(this.hoverViewPosition)
      .forEach(key => {
        this.renderer.setElementStyle(this.hoverView, key, `${this.hoverViewPosition[key]}px`);
      });
  }

  private getPeepViewDimensions(): { width: number, height: number } {
    return {
      width: Math.round(this.imgRect.width / this.options.settings.zoom),
      height: Math.round(this.imgRect.height / this.options.settings.zoom)
    };
  }

  private getPeepViewCoords(event: MouseEvent): { top: number, left: number } {
    const dimensions = this.getPeepViewDimensions(),
      mouseX = event.clientX,
      mouseY = event.clientY,
      borderWidth = parseInt(this.options.peepView.borderWidth, 10) * 2,
      // ensure top is not above the box
      top = Math.max(this.imgRect.top, mouseY - (dimensions.height / 2) - borderWidth),
      // ensure left is not outside the box
      left = Math.max(this.imgRect.left, mouseX - (dimensions.width / 2) - borderWidth);

    // ensure both top and left will not leak from bottom or right
    return {
      top: Math.min(top, this.imgRect.bottom - dimensions.height - borderWidth),
      left: Math.min(left, this.imgRect.right - dimensions.width - borderWidth)
    };
  }

  private positionPeepView(event: MouseEvent) {
    const coords = this.getPeepViewCoords(event);
    this.renderer.setElementStyle(this.peepView, 'top', `${coords.top}px`);
    this.renderer.setElementStyle(this.peepView, 'left', `${coords.left}px`);
  }

  private positionZoomView() {
    const props = Object.assign({}, this.hoverViewPosition, {
      left: this.hoverViewPosition.left + this.imgRect.width + this.options.settings.gap
    });

    Object.keys(props)

      .forEach(key => {
        if (key === 'top') {
          props[key] = -20;
        }
        // if (key == 'width') {
        //   props[key] = 500;
        // }
        // if (key == 'height') {
        //   props[key] = 600;
        // }
        this.renderer.setElementStyle(this.zoomView, key, `${props[key]}px`);

      });
  }

  private positionZoomBackground(event: MouseEvent) {
    const coords = this.getPeepViewCoords(event),
      zoom = this.options.settings.zoom,
      bgWidth = this.imgRect.width * zoom,
      bgHeight = this.imgRect.height * zoom,
      imgSrc = this.sourceImage || this.el.nativeElement.getAttribute('src'),
      xRatio = Math.max(0, (coords.left + window.scrollX - this.hoverViewPosition.left) / this.imgRect.width),
      yRatio = Math.max(0, (coords.top + window.scrollY - this.hoverViewPosition.top) / this.imgRect.height);

    this.renderer.setElementStyle(this.zoomView, 'backgroundImage', `url("${imgSrc}")`);
    this.renderer.setElementStyle(this.zoomView, 'backgroundPosition', `-${xRatio * bgWidth}px -${yRatio * bgHeight}px`);
    this.renderer.setElementStyle(this.zoomView, 'backgroundSize', `${bgWidth}px ${bgHeight}px`);
    this.renderer.setElementStyle(this.zoomView, 'backgroundRepeat', 'no-repeat');
    this.renderer.setElementStyle(this.zoomView, 'height', '400px');
    this.renderer.setElementStyle(this.zoomView, 'width', '700px');
  }

  private destroyViews() {
    // remove all event listeners
    for (const listener of this.listeners) {
      listener();
    }
    this.listeners = [];
    this.hoverView.parentNode.removeChild(this.hoverView);
    this.zoomView.parentNode.removeChild(this.zoomView);
    this.hoverView = null;
    this.zoomView = null;
  }
}
