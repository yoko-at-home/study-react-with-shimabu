import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
// import { useEffect, useCallback } from 'react';

  // const handleClick = (e, foo) => {
  //   e.preventDefault();
  //   console.log(e.target.href);
  // alert(foo);
  // };

export default function Home() {
  const foo = 1;
  const handleClick = useCallback((e) => {
    //コンポーネントの再生性を避けるためにuseCallbackを使う（第二引数が必要）
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect(() => {
    console.log('マウント時');
    document.body.style.backgroundColor = 'lightblue ';
    // 以下はアンマウント時の処理
    return () => {
      console.log('アンマウント時');
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
      {/* <a href='./about' onClick={handleClick}>
        ボタン
      </a> */}
      <Main page='index' />

      <Footer />
    </div>
  );
}
