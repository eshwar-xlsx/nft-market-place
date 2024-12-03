import React from "react";

const Blogs_Card = ({
  title,
  description,
  image,
  author,
  tags,
  link,
  data_modified,
}) => {
  return (
    <div className="card shadow-sm border-light">
      <div className="header_post">
        <img src={image} className="card-img-top" alt={title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="container_infos mb-3">
          <div>
            <strong>Author:</strong> {author}
          </div>
          <div>
            <strong>Tags:</strong> {tags.join(", ")}
          </div>
        </div>

        <div className="d-flex gap-3">
          <a href={link} className="btn btn-primary ">
            Read More
          </a>
        </div>
        <p className="text-black-50 mt-4 text-end">Posted On:{data_modified}</p>

      </div>
    </div>
  );
};

export default Blogs_Card;
