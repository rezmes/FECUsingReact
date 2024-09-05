import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';

import styles from './FecReact.module.scss';

export interface IFecReactProps {
  text: string;
}

const LOG_SOURCE: string = 'FecReact';

export default class FecReact extends React.Component<IFecReactProps, {}> {
  @override
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: FecReact mounted');
  }

  @override
  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: FecReact unmounted');
  }

  @override
  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.cell}>
        { this.props.text }
      </div>
    );
  }
}
