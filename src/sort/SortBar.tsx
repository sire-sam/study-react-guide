import React, { ChangeEvent, Component } from 'react';
import { SortOptionsEnum } from './sortOptions.enum';

export class SortBar<P extends { onSortChanged: (sortBy: SortOptionsEnum) => void }, S extends { sortBy: SortOptionsEnum }> extends Component<P, S> {

  constructor(props: P) {
    super(props);
    this.state = {
      sortBy: SortOptionsEnum.OLDER,
    } as Readonly<S>;
    this.onSortChanged = this.onSortChanged.bind(this);
  }

  private onSortChanged(selectEvent: ChangeEvent<HTMLSelectElement>) {
    const sortBy = parseInt(selectEvent.target.value) as SortOptionsEnum;
    this.setState({ sortBy });
    this.props.onSortChanged(sortBy);
  }

  render() {
    return (
      <label>
        Sort by:
        <select value={this.state.sortBy} onChange={this.onSortChanged}>
          <option value={SortOptionsEnum.NEWER}>Newer first</option>
          <option value={SortOptionsEnum.OLDER}>Older first</option>
          <option value={SortOptionsEnum.OWNED}>Yours first</option>
        </select>
      </label>
    );
  }
}
