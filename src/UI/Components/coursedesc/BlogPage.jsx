import React, { useEffect, useState } from "react";

function BlogPage() {
  const [userdata, setUserdata] = useState([]);
  console.log("first", userdata);
  const fetchData = () => {
    return fetch("http://localhost:5000/blog")
      .then((response) => response.json())
      .then((data) => setUserdata(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container mt-5 mb-4">
        <header class="py-5 bg-light border-bottom mb-4">
          <div class="container">
            <div class="text-center my-5">
              <h1 class="fw-bolder">Welcome to Blog Home!</h1>
              <p class="lead mb-0">
                A Bootstrap 5 starter layout for your next blog homepage
              </p>
            </div>
          </div>
        </header>
        {/* <!-- Page content--> */}
        <div class="container">
          <div class="row">
            {/* <!-- Blog entries--> */}
            <div class="col-lg-8">
              {/* <!-- Featured blog post--> */}
              <div class="card mb-4">
                <a href="#!">
                  <img
                    class="card-img-top"
                    src="https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA="
                    alt="..."
                  />
                </a>
                <div class="card-body">
                  <div class="small text-muted">January 1, 2022</div>
                  <h2 class="card-title">Featured Post Title</h2>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                    laboriosam. Dicta expedita corporis animi vero voluptate
                    voluptatibus possimus, veniam magni quis!
                  </p>
                  <a class="btn btn-primary" href="#!">
                    Read more →
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Side widgets--> */}
            <div class="col-lg-4">
              {/* <!-- Search widget--> */}
              <div class="card mb-4">
                <div class="card-header">Search</div>
                <div class="card-body">
                  <div class="input-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter search term..."
                      aria-label="Enter search term..."
                      aria-describedby="button-search"
                    />
                    <button
                      class="btn btn-primary"
                      id="button-search"
                      type="button"
                    >
                      Go!
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Categories widget--> */}
              <div class="card mb-4">
                <div class="card-header">Categories</div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-6">
                      <ul class="list-unstyled mb-0">
                        <li>
                          <a href="#!">Web Design</a>
                        </li>
                        <li>
                          <a href="#!">HTML</a>
                        </li>
                        <li>
                          <a href="#!">Freebies</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-sm-6">
                      <ul class="list-unstyled mb-0">
                        <li>
                          <a href="#!">JavaScript</a>
                        </li>
                        <li>
                          <a href="#!">CSS</a>
                        </li>
                        <li>
                          <a href="#!">Tutorials</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Side widget--> */}
              <div class="card mb-4">
                <div class="card-header">Side Widget</div>
                <div class="card-body">
                  You can put anything you want inside of these side widgets.
                  They are easy to use, and feature the Bootstrap 5 card
                  component!
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Nested row for non-featured blog posts--> */}
          <div class="row  row-cols-md-3 g-4 mb-4">
            {/* <!-- Blog post--> */}
            {userdata.map((val, i) => {
              console.log("anand====================>",val.image)
              return (
                <>
                  <div class="col">
                    <div class="card mb-4" key={val.id}>
                      <a href="#!">
                        <img
                          class="card-img-top"
                          src={val.image}
                          alt="..dasd."
                        />
                      </a>
                      <div class="card-body">
                        <div class="small text-muted">{val.date}</div>
                        <h2 class="card-title h4">{val.title} </h2>
                        <p class="card-text">{val.description} </p>
                        <a class="btn btn-primary" href="#!">
                          Read more →
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          {/* <!-- Pagination--> */}
          <nav aria-label="Pagination">
            <hr class="my-0" />
            <ul class="pagination justify-content-center my-4">
              <li class="page-item disabled">
                <a
                  class="page-link"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Newer
                </a>
              </li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#!">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#!">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#!">
                  3
                </a>
              </li>
              <li class="page-item disabled">
                <a class="page-link" href="#!">
                  ...
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#!">
                  15
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#!">
                  Older
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
