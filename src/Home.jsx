import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./components/Layout";
import HeroPost from "./components/HeroPost";
import MoreStories from "./components/HeroPost";

export default function Home() {
  const [posts, setPosts] = useState();

  // TODO
  const schemaName = "schemaName";

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios(
  //       `http://localhost:8000/api/storage/${schemaName}`
  //     );

  //     if (!data) return;

  //     setPosts(data.result);
  //   })();
  // }, []);

  return (
    // <div>test</div>
    <Layout>
      <div className="container mx-auto px-5">
        <div className="px-5">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            Blog.
          </h1>
          <HeroPost />
        </div>
        {posts && <MoreStories posts={posts} />}
      </div>
    </Layout>
  );
}
