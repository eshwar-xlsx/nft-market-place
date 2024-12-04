import React from 'react';
import Blogs_Card from './Blogs_Card';
import './Blogs.css';

const Blogs = () => {

  
  const blogsData = [
    {
      id: 1,
      title: 'The Future of NFTs in 2024',
      description:
        'NFTs are rapidly evolving, and 2024 promises to be an exciting year for the NFT space. In this blog, we explore the latest trends, emerging technologies, and the potential of NFTs in various industries...',
      image: 'assets/blogs-2.webp',
      author: 'John Doe',
      tags: ['NFT', 'Crypto'],
      link: '/blog/1',
      data_modified:"12-3-24"

    },
    {
      id: 2,
      title: 'Understanding Crypto Wallets',
      description:
      'NFTs are rapidly evolving, and 2024 promises to be an exciting year for the NFT space. In this blog, we explore the latest trends, emerging technologies, and the potential of NFTs in various industries...',
      image: 'assets/blogs-1.webp', 
      author: 'Jane Smith',
      tags: ['Crypto', 'Wallets'],
      link: '/blog/2',
      data_modified:"12-3-24"
    },
    {
        id: 3,
        title: 'Understanding Crypto Wallets',
        description:
        'NFTs are rapidly evolving, and 2024 promises to be an exciting year for the NFT space. In this blog, we explore the latest trends, emerging technologies, and the potential of NFTs in various industries...',
        image: 'assets/blogs-4.jpg', 
        author: 'Jane Smith',
        tags: ['Crypto', 'Wallets'],
        link: '/blog/2',
        data_modified:"12-3-24"

      },
      {
        id: 4,
        title: 'Understanding Crypto Wallets',
        description:
        'NFTs are rapidly evolving, and 2024 promises to be an exciting year for the NFT space. In this blog, we explore the latest trends, emerging technologies, and the potential of NFTs in various industries...',
        image: 'assets/blogs-3.webp', 
        author: 'Jane Smith',
        tags: ['Crypto', 'Wallets'],
        link: '/blog/2',
        data_modified:"12-3-24"

      },
      {
        id: 5,
        title: 'Understanding Crypto Wallets',
        description:
        'NFTs are rapidly evolving, and 2024 promises to be an exciting year for the NFT space. In this blog, we explore the latest trends, emerging technologies, and the potential of NFTs in various industries...',
        image: 'assets/blogs-5.jpeg', 
        author: 'Jane Smith',
        tags: ['Crypto', 'Wallets'],
        link: '/blog/2',
        data_modified:"12-3-24"

      },
    
  ];
  console.log(blogsData.data_modified)

  return (
    <div className="container-fluid  bg-dark">
      <div className="row bg-dark">
        <div className="col-md-12 bg-dark" >
          <h2 className="text-center mb-4" style={{color:"#BB73B3"}}>Latest Blogs</h2>
          <p className="text-center text-white-50 mb-5">
            Stay updated with the latest trends, news, and insights from the world of NFTs, Crypto, and Digital Assets.
          </p>
        </div>
      </div>

      <div className="row" style={{marginLeft:""}}>
  {blogsData.map((blog) => (
    <div key={blog.id} className="col-md-4 mb-4"> 
      <Blogs_Card
        title={blog.title}
        description={blog.description}
        image={blog.image}
        author={blog.author}
        tags={blog.tags}
        data_modified={blog.data_modified}
      />
    </div>
  ))}
</div>

    </div>
  );
};

export default Blogs;
