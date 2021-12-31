import Link from 'next/link'

// our-domain.com/news

const NewsPage = () => {
  return (
    <div>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/news-cover">News Cover</Link>
        </li>
        <li>
          <Link href="/news/middle">Middle Body</Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsPage;
