import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { useEffect, useState } from 'react';

  // const handleClick = (e, foo) => {
  //   e.preventDefault();
  //   console.log(e.target.href);
  // alert(foo);
  // };

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue ';
    // 以下はアンマウント時の処理
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);
  // 参照：
  //https://ja.reactjs.org/docs/hooks-effect.html
  //https://ja.reactjs.org/docs/state-and-lifecycle.html

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page='index' />

      <Footer />
    </div>
  );
}
