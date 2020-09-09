import React, { FC, useState, useRef, useCallback } from 'react';
import reduceCssCalc from 'reduce-css-calc';
import styled, { StyledComponent } from '@emotion/styled';
import { Box } from '@silicon-ui/atoms';
import { GestureResponderEvent, NativeMethods } from 'react-native';
import {
  background,
  border,
  color,
  compose,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import useColWidth from '../hooks/useColWidth';
import useResizable from '../hooks/useResizable';
import useSetCol from '../hooks/useSetCol';
import useThemeLookup from '../hooks/useThemeLookup';
import {
  TableCellProps,
  splitProps,
  DetailedHTMLTdProps
} from './tableCellProps';

export type Position = [number, number];

const HTMLTd: StyledComponent<
  DetailedHTMLTdProps,
  TableCellProps,
  object
> = styled.td(
  compose(
    background,
    border,
    color,
    compose,
    layout,
    position,
    shadow,
    space,
    typography
  )
);

const TableCell: FC<TableCellProps> = (props: TableCellProps) => {
  const colWidth = useColWidth();
  const resizable = useResizable() || props.resizable;
  const setCol = useSetCol();
  const tableCellRef = useRef<NativeMethods | HTMLDivElement>(null);
  const themeLookup = useThemeLookup();
  // eslint-ignore-next-line prefer-const
  let [pulling, setPulling] = useState(false);
  // eslint-ignore-next-line prefer-const
  let [rightInitialX, setRightInitialX] = useState(0);
  // eslint-ignore-next-line prefer-const
  let [rightRelativeX, setRightRelativeX] = useState(0);
  // eslint-ignore-next-line prefer-const
  let [initialWidth, setInitialWidth] = useState<number | undefined>();
  const { customTableCellProps, styledTableCellProps } = splitProps(props);

  const normalizeWidth = useCallback((width?: number | string) => {
    if (typeof width === 'undefined') return undefined;
    if (!width) return '0px';
    if (
      width &&
      (width.toString().indexOf('%') > -1 ||
        width.toString().indexOf('px') > -1)
    ) {
      return width.toString();
    }
    return `${width.toString()}px`;
  }, []);

  const width = resizable
    ? colWidth ||
      cssCalc(
        normalizeWidth(
          typeof props.width === 'undefined'
            ? undefined
            : props.width?.toString()
        ),
        rightRelativeX
      )
    : props.width;

  async function handleRightDrag(
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const mouseEvent = e as React.MouseEvent<HTMLDivElement, MouseEvent>;
    const gestureEvent = e as GestureResponderEvent;
    const pageX = mouseEvent.pageX || gestureEvent.nativeEvent?.pageX || 0;
    const rightRelativeX = -(pageX - rightInitialX);
    setRightRelativeX(rightRelativeX);
    setCol({
      width: cssCalc(normalizeWidth(initialWidth?.toString()), rightRelativeX)
    });
  }

  async function handleRightPressIn(
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    pulling = true;
    setPulling(pulling);
    if (typeof initialWidth === 'undefined') {
      initialWidth = width as number;
      setInitialWidth(initialWidth);
    }
    const mouseEvent = e as React.MouseEvent<HTMLDivElement, MouseEvent>;
    const gestureEvent = e as GestureResponderEvent;
    const pageX = mouseEvent.pageX || gestureEvent.nativeEvent?.pageX || 0;
    rightInitialX = pageX;
    setRightInitialX(pageX);
  }

  function handleRightPressOut(
    _e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    initialWidth = undefined;
    setInitialWidth(initialWidth);
    rightInitialX = 0;
    setRightInitialX(rightInitialX);
    pulling = false;
    setPulling(pulling);
  }

  function cssCalc(left?: string, right?: number): string | number | undefined {
    if (typeof left === 'undefined') return undefined;
    const reducedWidth = reduceCssCalc(`calc(${left}-${right}px)`);
    if (reducedWidth.toString().indexOf('%') > -1) {
      return reducedWidth;
    }
    if (reducedWidth.toString().indexOf('px') > -1) {
      return parseInt(reducedWidth.toString(), 10);
    }
    return reducedWidth;
  }

  function renderGrab() {
    if (!resizable) return null;
    return (
      <Box
        height="100%"
        onPressIn={handleRightPressIn}
        onPressOut={handleRightPressOut}
        onPull={handleRightDrag}
        position="relative"
        right={
          -(props.grabWidth! / 2) -
          parseInt(
            themeLookup<string>('borderWidth', props.borderWidth) || '0',
            10
          )
        }
        width={props.grabWidth!}
        style={{
          // @ts-ignore
          cursor: 'col-resize',
          float: 'right'
        }}
      />
    );
  }

  return (
    <HTMLTd
      {...customTableCellProps}
      {...styledTableCellProps}
      style={{
        ...(resizable
          ? { whitespace: 'nowrap', ...(pulling ? { userSelect: 'none' } : {}) }
          : {})
      }}
      width={width as number}
      // @ts-ignore
      ref={tableCellRef}
    >
      {renderGrab()}
      {customTableCellProps.children}
    </HTMLTd>
  );
};

TableCell.defaultProps = {
  borderStyle: 'solid',
  fontFamily: 'body',
  fontSize: 1,
  borderWidth: '1px',
  fontWeight: 'body',
  grabWidth: 20
};

export default TableCell;
