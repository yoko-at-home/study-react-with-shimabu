import classes from './Main.module.css';
import { Links } from '../components/Links';
import { Headline } from '../components/Headline';

export function Main(props) {
  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <Headline page={props.page}>
          <code className={classes.code}>pages/{props.page}.js</code>
        </Headline>
        <Links />
      </main>
    </div>
  );
}
