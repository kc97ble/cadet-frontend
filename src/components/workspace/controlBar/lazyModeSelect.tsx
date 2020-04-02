import { Button, Classes, MenuItem } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { ItemRenderer, Select } from '@blueprintjs/select';
import * as React from 'react';

export type LazyModeSelectProps = {
  handleLazyModeSelect?: (i: boolean, e: React.ChangeEvent<HTMLSelectElement>) => void;
  currentLazyMode: boolean;
  key: string;
};

export function LazyModeSelect(props: LazyModeSelectProps) {
  const lazyModeRenderer: ItemRenderer<boolean> = (value, { handleClick }) => (
    <MenuItem active={false} key={value.toString()} onClick={handleClick} text={value.toString()} />
  );
  const LazyModeSelectComponent = Select.ofType<boolean>();

  const chapSelect = (
    currentLazyMode: boolean,
    handleSelect = (i: boolean, e: React.ChangeEvent<HTMLSelectElement>) => {}
  ) => (
    <LazyModeSelectComponent
      className={Classes.MINIMAL}
      items={[true, false]}
      onItemSelect={handleSelect}
      itemRenderer={lazyModeRenderer}
      filterable={false}
    >
      <Button
        className={Classes.MINIMAL}
        text={currentLazyMode.toString()}
        rightIcon={IconNames.DOUBLE_CARET_VERTICAL}
      />
    </LazyModeSelectComponent>
  );

  return chapSelect(props.currentLazyMode, props.handleLazyModeSelect);
}
