import React from "react";
import Team from '../src/components/team/Team';
const styles = require('./App.scss');

export const App = () => (
    <div className={styles.App}>
      <div className={styles.heading}>Team users</div>
      <Team />
    </div>
);
