import { FontFamilies } from '@/containers/styles/typography';
import styled from 'styled-components'

export const SliderWrapper = styled.div`
  margin-top: 10px;
`;

export const SliderStyle = styled.div`
  .rc-slider {
  position: relative;
  width: 100%;
  height: 14px;
  padding: 5px 0;
  border-radius: 6px;
  touch-action: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .rc-slider * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .rc-slider-rail {
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #e9e9e9;
    border-radius: 6px;
  }
  .rc-slider-track {
    position: absolute;
    height: 4px;
    background-color: #abe2fb;
    border-radius: 6px;
  }
  .rc-slider-handle {
    position: absolute;
    width: 14px;
    height: 14px;
    margin-top: -5px;
    background-color: #fff;
    border: solid 2px #96dbfa;
    border-radius: 50%;
    cursor: pointer;
    cursor: -webkit-grab;
    cursor: grab;
    opacity: 0.8;
    touch-action: pan-x;
  }
  .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
    border-color: #57c5f7;
    box-shadow: 0 0 0 5px #96dbfa;
  }
  .rc-slider-handle:focus {
    outline: none;
    box-shadow: none;
  }
  .rc-slider-handle:focus-visible {
    border-color: #2db7f5;
    box-shadow: 0 0 0 3px #96dbfa;
  }
  .rc-slider-handle-click-focused:focus {
    border-color: #96dbfa;
    box-shadow: unset;
  }
  .rc-slider-handle:hover {
    border-color: #57c5f7;
  }
  .rc-slider-handle:active {
    border-color: #57c5f7;
    box-shadow: 0 0 5px #57c5f7;
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
  .rc-slider-mark {
    position: absolute;
    top: 24px;
    left: 0px;
    width: 100%;
    font-size: 12px;
    span {
      ${FontFamilies.outfitFont};
      font-size: 16px;
      font-weight: 400;
      padding: 0;
      -webkit-user-select: none; /* Safari */        
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
    }
  }
  .rc-slider-mark-text {
    position: absolute;
    display: inline-block;
    color: #999;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    margin-top: 3%;
  }
  .rc-slider-mark-text-active {
    color: #666;
  }
  .rc-slider-step {
    position: absolute;
    width: 100%;
    height: 4px;
    background: transparent;
    pointer-events: none;
  }
  .rc-slider-dot {
    position: absolute;
    bottom: -2px;
    width: 8px;
    height: 8px;
    vertical-align: middle;
    background-color: #fff;
    border: 2px solid #e9e9e9;
    border-radius: 50%;
    cursor: pointer;
  }
  .rc-slider-dot-active {
    border-color: #96dbfa;
  }
  .rc-slider-dot-reverse {
    margin-right: -4px;
  }
  .rc-slider-disabled {
    background-color: #e9e9e9;
  }
  .rc-slider-disabled .rc-slider-track {
    background-color: #ccc;
  }
  .rc-slider-disabled .rc-slider-handle,
  .rc-slider-disabled .rc-slider-dot {
    background-color: #fff;
    border-color: #ccc;
    box-shadow: none;
    cursor: not-allowed;
  }
  .rc-slider-disabled .rc-slider-mark-text,
  .rc-slider-disabled .rc-slider-dot {
    cursor: not-allowed !important;
  }
  .rc-slider-vertical {
    width: 14px;
    height: 100%;
    padding: 0 5px;
  }
  .rc-slider-vertical .rc-slider-rail {
    width: 4px;
    height: 100%;
  }
  .rc-slider-vertical .rc-slider-track {
    bottom: 0;
    left: 5px;
    width: 4px;
  }
  .rc-slider-vertical .rc-slider-handle {
    margin-top: 0;
    margin-left: -5px;
    touch-action: pan-y;
  }
  .rc-slider-vertical .rc-slider-mark {
    top: 0;
    left: 18px;
    height: 100%;
  }
  .rc-slider-vertical .rc-slider-step {
    width: 4px;
    height: 100%;
  }
  .rc-slider-vertical .rc-slider-dot {
    margin-left: -2px;
  }
  .rc-slider-tooltip-zoom-down-enter,
  .rc-slider-tooltip-zoom-down-appear {
    display: block !important;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .rc-slider-tooltip-zoom-down-leave {
    display: block !important;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,
  .rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {
    animation-name: rcSliderTooltipZoomDownIn;
    animation-play-state: running;
  }
  .rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {
    animation-name: rcSliderTooltipZoomDownOut;
    animation-play-state: running;
  }
  .rc-slider-tooltip-zoom-down-enter,
  .rc-slider-tooltip-zoom-down-appear {
    transform: scale(0, 0);
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .rc-slider-tooltip-zoom-down-leave {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  @keyframes rcSliderTooltipZoomDownIn {
    0% {
      transform: scale(0, 0);
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      transform: scale(1, 1);
      transform-origin: 50% 100%;
    }
  }
  @keyframes rcSliderTooltipZoomDownOut {
    0% {
      transform: scale(1, 1);
      transform-origin: 50% 100%;
    }
    100% {
      transform: scale(0, 0);
      transform-origin: 50% 100%;
      opacity: 0;
    }
  }
  .rc-slider-tooltip {
    position: absolute;
    top: -9999px;
    left: -9999px;
    visibility: visible;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .rc-slider-tooltip * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .rc-slider-tooltip-hidden {
    display: none;
  }
  .rc-slider-tooltip-placement-top {
    padding: 4px 0 8px 0;
  }
  .rc-slider-tooltip-inner {
    min-width: 24px;
    height: 24px;
    padding: 6px 2px;
    color: #fff;
    font-size: 12px;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    background-color: #6c6c6c;
    border-radius: 6px;
    box-shadow: 0 0 4px #d9d9d9;
  }
  .rc-slider-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
  .rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
    bottom: 4px;
    left: 50%;
    margin-left: -4px;
    border-width: 4px 4px 0;
    border-top-color: #6c6c6c;
}

`;
