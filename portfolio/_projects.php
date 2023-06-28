<?php
$relativePath = "./";
include './components/header.php';
?>

<main class="container">

    <h1 class="text-light text-center mt-sm-5 py-5 d-none">Top Projects</h1>

    <div class="row d-none">

        <div class="col-12 col-sm-6 col-lg-4 my-2 my-lg-0 fade-in-up">

            <div class="card">

                <div class="card-image">
                    <img src="/media/04.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body">

                    <h5 class="card-title">
                        Project Title
                    </h5>
                    <p class="card-text text-truncate">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima amet sequi
                        corrupti inventore consequatur, omnis quae ipsa quo quasi adipisci?
                    </p>
                    <span class="text-info font-weight-light r-more">Read More</span>

                    <div class="text-right mt-auto pt-4">
                        <i class="fas fa-chevron-left"></i>
                        <h6 class="d-inline font-italic font-weight-normal">html, css, js</h6>
                        <i class="fas fa-chevron-right"></i>
                    </div>

                    <div class="mt-3 d-flex justify-content-center">
                        <a class="btn btn-dark text-decoration-none mr-1" target="blank" href="" style="font-size: 0.9rem;">Live Demo</a>
                        <a class="btn btn-outline-dark text-decoration-none ml-1" target="blank" href="" style="font-size: 0.9rem;">View Code</a>
                    </div>

                </div>
            </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 my-2 my-lg-0 fade-in-up">

            <div class="card">

                <div class="card-image">
                    <img src="media/04.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body">

                    <h5 class="card-title">
                        Project Title
                    </h5>
                    <p class="card-text text-truncate">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima amet sequi
                        corrupti inventore consequatur, omnis quae ipsa quo quasi adipisci?
                    </p>
                    <span class="text-info font-weight-light r-more">Read More</span>

                    <div class="text-right mt-auto pt-4">
                        <i class="fas fa-chevron-left"></i>
                        <h6 class="d-inline font-italic font-weight-normal">html, css, js</h6>
                        <i class="fas fa-chevron-right"></i>
                    </div>

                    <div class="mt-3 d-flex justify-content-center">
                        <a class="btn btn-dark text-decoration-none mr-1" target="blank" href="" style="font-size: 0.9rem;">Live Demo</a>
                        <a class="btn btn-outline-dark text-decoration-none ml-1" target="blank" href="" style="font-size: 0.9rem;">View Code</a>
                    </div>

                </div>
            </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 my-2 my-lg-0 fade-in-up mx-auto">

            <div class="card">

                <div class="card-image">
                    <img src="media/04.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body">

                    <h5 class="card-title">
                        Project Title
                    </h5>
                    <p class="card-text text-truncate">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima amet sequi
                        corrupti inventore consequatur, omnis quae ipsa quo quasi adipisci?
                    </p>
                    <span class="text-info font-weight-light r-more">Read More</span>

                    <div class="text-right mt-auto pt-4">
                        <i class="fas fa-chevron-left"></i>
                        <h6 class="d-inline font-italic font-weight-normal">html, css, js</h6>
                        <i class="fas fa-chevron-right"></i>
                    </div>

                    <div class="mt-3 d-flex justify-content-center">
                        <a class="btn btn-dark text-decoration-none mr-1" target="blank" href="" style="font-size: 0.9rem;">Live Demo</a>
                        <a class="btn btn-outline-dark text-decoration-none ml-1" target="blank" href="" style="font-size: 0.9rem;">View Code</a>
                    </div>

                </div>
            </div>
        </div>

    </div>

    <!-- top projects ends -->

    <!-- <h1 class="text-light text-center my-sm-5 py-5">All Projects</h1> -->
    <h1 class="text-light text-center mb-sm-5 pb-5">All Projects</h1>

    <form class="form-inline mb-5 mb-md-3">

        <div class="d-flex flex-column-reverse flex-md-row mx-auto ml-md-auto mr-md-0">

            <div class="d-flex flex-row mt-2 mt-md-0 mx-3">
                <div class="form-check form-check-inline mx-auto px-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="title" value="title">
                    <label class="form-check-label text-light font-weight-light h5" for="title">title</label>
                </div>
                <div class="form-check form-check-inline mx-auto px-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="tag" value="tag" onclick="tagClicked()">
                    <label class="form-check-label text-light font-weight-light h5" for="tag">tag</label>
                </div>
            </div>

            <input id="search-box" class="form-control mr-sm-2" type="search" placeholder="Quick Search Projects" aria-label="Search" onclick="search()" onsearch="onSearch()">
        </div>

    </form>

    <div class="text-light text-center font-weight-light h3 my-5 py-5 d-none" id="nullMatch">
        - - -
    </div>

    <!-- search form ends    -->

    <div class="row mb-0 mb-sm-2">

        <div class="col-12 col-sm-6 mb-4 project-item">

            <div class="card h-100" style="max-width: 540px;">

                <div class="card-image d-flex">
                    <video class="img-fluid m-auto" preload="metadata" src="media/sample-1.mp4" controls controlslist="nodownload"></video>
                </div>

                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-center project-title">
                        Responsive real estate business page with Bootstrap-v4.5 & jQuery</h5>
                    <p class="card-text text-truncate">
                        A complete responsive real estate business page using the latest resources; interactive,
                        modern look
                        and feel, fresh appearance with visible whitespace, HD quality images, and low loading time.
                    </p>
                    <span class="text-info font-weight-light r-more">Read More</span>

                    <div class="text-right mt-auto pt-4">
                        <i class="fas fa-chevron-left"></i>
                        <h6 class="d-inline font-italic font-weight-normal tags">html5, css3, js, bootstrap4,
                            psd-to-html, responsive-design
                        </h6>
                        <i class="fas fa-chevron-right"></i>
                    </div>

                    <div class="mt-3 d-flex justify-content-center">
                        <a class="btn btn-dark text-decoration-none mr-1" target="blank" href="https://www.demo.emranffl.com/sample-1/" style="font-size: 0.9rem;">Live Demo</a>
                        <a class="btn btn-outline-dark text-decoration-none ml-1" target="blank" href="https://github.com/emranffl/sample-1" style="font-size: 0.9rem;">View Code</a>
                    </div>
                </div>

            </div>

        </div>

        <div class="col-12 col-sm-6 mb-4 project-item">

            <div class="card h-100" style="max-width: 540px;">

                <div class="card-image d-flex">
                    <video class="img-fluid m-auto" preload="metadata" src="media/sample-9.mp4" controls controlslist="nodownload"></video>
                </div>

                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-center project-title">
                        Responsive gym page with Bootstrap-v4.5 & jQuery</h5>
                    <p class="card-text text-truncate">
                        A gym page for customers with tips, trainer portfolio, and schedule for training built with
                        modern tools; a responsive layout, HD images & embedded Google Maps.
                    </p>
                    <span class="text-info font-weight-light r-more">Read More</span>

                    <div class="text-right mt-auto pt-4">
                        <i class="fas fa-chevron-left"></i>
                        <h6 class="d-inline font-italic font-weight-normal tags">html5, css3, js, bootstrap4,
                            xd-to-html, responsive-design</h6>
                        <i class="fas fa-chevron-right"></i>
                    </div>

                    <div class="mt-3 d-flex justify-content-center">
                        <a class="btn btn-dark text-decoration-none mr-1" target="blank" href="https://www.demo.emranffl.com/sample-9/" style="font-size: 0.9rem;">Live Demo</a>
                        <a class="btn btn-outline-dark text-decoration-none ml-1" target="blank" href="https://github.com/emranffl/sample-9" style="font-size: 0.9rem;">View Code</a>
                    </div>
                </div>

            </div>

        </div>



    </div>

</main>

<?php
include './components/footer.php';
?>