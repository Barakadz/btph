import Footer from "../../component/footer/footer";
import Main from "../../component/main/main";
import NavBar from "../../component/navbar/navbar";
import Topbar from "../../component/topbar/topbar";

const Actualites=()=>{
    const contact="Notre Actualités";
    const image="url('btph_equipe.jpg')";
    return (
<div>
    <Topbar/>
    <NavBar/>
    <Main name={contact} image={image} />
    <div class="blog-area py-140">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 order-lg-1 order-2 pe-lg-8 pt-10 pt-lg-0">
                        <div class="sidebar-area">
                            <div class="sidebar-widget sidebar-searchbar sidebar-common mb-8" style={{backgroundColor:'#f4f8ff'}} >
                                <h3 class="sidebar-title mb-5">Search</h3>
                                <form class="sidebar-form">
                                    <input class="searchbox-input" type="text" placeholder="Type your keyword..."/>
                                    <button class="btn btn-primary btn-secondary-hover searchbox-btn" type="submit">
                                        <i class="ion-ios-search"></i>
                                    </button>
                                </form>
                            </div>
                            <div class="sidebar-widget sidebar-blog-categories sidebar-common mb-8" style={{backgroundColor:'#f4f8ff'}} >
                                <h3 class="sidebar-title mb-3">Categories</h3>
                                <ul>
                                    <li>
                                        <a href="#">Construction
                                            <span>328</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Architecture
                                            <span>240</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Project Planning
                                            <span>120</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Lamination Floor
                                            <span>87</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Readymix Supply
                                            <span>20</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Consultancy
                                            <span>59</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Renovation
                                            <span>72</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Interior Design
                                            <span>128</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="sidebar-widget sidebar-list-wrap sidebar-common mb-8"style={{backgroundColor:'#f4f8ff'}} >
                                <h3 class="sidebar-title mb-5">Popular Post</h3>
                                <div class="list-item with-border">
                                    <a href="#" class="list-img">
                                        <img src="assets/images/sidebar/list-img/1-1-70x70.png" alt="List Image"/>
                                    </a>
                                    <div class="list-content">
                                        <h3 class="title mb-1">Quality equipment is a main thing for build</h3>
                                        <span class="list-meta">
                                        <i class="ion-md-calendar"></i>
                                        August 25, 2020
                                    </span>
                                    </div>
                                </div>
                                <div class="list-item with-border">
                                    <a href="#" class="list-img">
                                        <img src="assets/images/sidebar/list-img/1-2-70x70.png" alt="List Image"/>
                                    </a>
                                    <div class="list-content">
                                        <h3 class="title mb-1">Renovation is the great way to improve design</h3>
                                        <span class="list-meta">
                                        <i class="ion-md-calendar"></i>
                                        August 20, 2020
                                    </span>
                                    </div>
                                </div>
                                <div class="list-item with-border">
                                    <a href="#" class="list-img">
                                        <img src="assets/images/sidebar/list-img/1-3-70x70.png" alt="List Image"/>
                                    </a>
                                    <div class="list-content">
                                        <h3 class="title mb-1">Bridge construction is the key factor for country</h3>
                                        <span class="list-meta">
                                        <i class="ion-md-calendar"></i>
                                        August 18, 2020
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div class="sidebar-widget sidebar-blog-categories sidebar-common mb-8"style={{backgroundColor:'#f4f8ff'}} >
                                <h3 class="sidebar-title mb-5">Archive</h3>
                                <ul>
                                    <li>
                                        <a href="#">August, 2020
                                            <span>96</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">July, 2020
                                            <span>128</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">June, 2020
                                            <span>105</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">May, 2020
                                            <span>87</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">April, 2020
                                            <span>35</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">March, 2020
                                            <span>23</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">February, 2020
                                            <span>85</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">January, 2020
                                            <span>50</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="sidebar-widget sidebar-tags sidebar-common mb-8"style={{backgroundColor:'#f4f8ff'}} >
                                <h3 class="sidebar-title mb-5">Tags</h3>
                                <ul>
                                    <li>
                                        <a href="#">Construction</a>
                                    </li>
                                    <li>
                                        <a href="#">Renovation</a>
                                    </li>
                                    <li>
                                        <a href="#">interrior</a>
                                    </li>
                                    <li>
                                        <a href="#">Architecture</a>
                                    </li>
                                    <li>
                                        <a href="#">Planning</a>
                                    </li>
                                    <li>
                                        <a href="#">Concrete</a>
                                    </li>
                                    <li>
                                        <a href="#">Readymix</a>
                                    </li>
                                    <li>
                                        <a href="#">Consultancy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 order-lg-2 order-1">
                        <div class="blog-wrap row">
                            <div class="col-md-6">
                                <div class="blog-item">
                                    <div class="inner-item">
                                        <a class="blog-img" href="blog.html">
                                            <img class="img-full" src="assets/images/blog/medium-size/1-1-370x260.jpg" alt="Blog Image"/>
                                        </a>
                                        <div class="blog-content">
                                            <span class="blog-meta">SMITH  -  25 AUGUST  -  CONSTRUCTION</span>
                                            <h3 class="title mb-3"><a href="blog-detail.html">Construction Technology</a></h3>
                                            <p class="mb-4">Construction of itself, because it is pain because some proper style design</p>
                                            <ul class="blog-button-wrap">
                                                <li>
                                                    <a class="btn btn-link p-0" href="blog.html">Read more</a>
                                                </li>
                                                <li>
                                                    <a href="#">72 Comments</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 pt-6 pt-md-0">
                                <div class="blog-item">
                                    <div class="inner-item">
                                        <a class="blog-img" href="blog.html">
                                            <img class="img-full" src="assets/images/blog/medium-size/1-2-370x260.jpg" alt="Blog Image"/>
                                        </a>
                                        <div class="blog-content">
                                            <span class="blog-meta">DEVID  -  20 AUGUST  -  ARCHITECTURE</span>
                                            <h3 class="title mb-3"><a href="blog-detail.html">Construction Technology</a></h3>
                                            <p class="mb-4">Construction of itself, because it is pain because some proper style design</p>
                                            <ul class="blog-button-wrap">
                                                <li>
                                                    <a class="btn btn-link p-0" href="blog.html">Read more</a>
                                                </li>
                                                <li>
                                                    <a href="#">55 Comments</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 pt-6">
                                <div class="blog-item">
                                    <div class="inner-item">
                                        <a class="blog-img" href="blog.html">
                                            <img class="img-full" src="1-3-370x260.jpg" alt="Blog Image"/>
                                        </a>
                                        <div class="blog-content">
                                            <span class="blog-meta">ETHAN  -  18 AUGUST  -  RENOVATION</span>
                                            <h3 class="title mb-3"><a href="blog-detail.html">Construction Technology</a></h3>
                                            <p class="mb-4">Construction of itself, because it is pain because some proper style design</p>
                                            <ul class="blog-button-wrap">
                                                <li>
                                                    <a class="btn btn-link p-0" href="blog.html">Read more</a>
                                                </li>
                                                <li>
                                                    <a href="#">10 Comments</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 pt-6">
                                <div class="blog-item">
                                    <div class="inner-item">
                                        <a class="blog-img" href="blog.html">
                                            <img class="img-full" src="assets/images/blog/medium-size/1-4-370x260.jpg" alt="Blog Image"/>
                                        </a>
                                        <div class="blog-content">
                                            <span class="blog-meta">ZASICA  -  15 AUGUST  -  CONSTRUCTION</span>
                                            <h3 class="title mb-3"><a href="blog-detail.html">Construction Technology</a></h3>
                                            <p class="mb-4">Construction of itself, because it is pain because some proper style design</p>
                                            <ul class="blog-button-wrap">
                                                <li>
                                                    <a class="btn btn-link p-0" href="blog.html">Read more</a>
                                                </li>
                                                <li>
                                                    <a href="#">49 Comments</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 pt-6">
                                <div class="blog-item">
                                    <div class="inner-item">
                                        <a class="blog-img" href="blog.html">
                                            <img class="img-full" src="assets/images/blog/medium-size/1-5-370x260.jpg" alt="Blog Image"/>
                                        </a>
                                        <div class="blog-content">
                                            <span class="blog-meta">ALEX  -  12 AUGUST  -  ARCHITECTURE</span>
                                            <h3 class="title mb-3"><a href="blog-detail.html">Construction Technology</a></h3>
                                            <p class="mb-4">Construction of itself, because it is pain because some proper style design</p>
                                            <ul class="blog-button-wrap">
                                                <li>
                                                    <a class="btn btn-link p-0" href="blog.html">Read more</a>
                                                </li>
                                                <li>
                                                    <a href="#">35 Comments</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 pt-6">
                                <div class="blog-item">
                                    <div class="inner-item">
                                        <a class="blog-img" href="blog.html">
                                            <img class="img-full" src="1-6-370x260.jpg" alt="Blog Image"/>
                                        </a>
                                        <div class="blog-content">
                                            <span class="blog-meta">NATASA  -  10 AUGUST  -  ARCHITECTURE</span>
                                            <h3 class="title mb-3"><a href="blog-detail.html">Construction Technology</a></h3>
                                            <p class="mb-4">Construction of itself, because it is pain because some proper style design</p>
                                            <ul class="blog-button-wrap">
                                                <li>
                                                    <a class="btn btn-link p-0" href="blog.html">Read more</a>
                                                </li>
                                                <li>
                                                    <a href="#">18 Comments</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 pt-10">
                                <div class="pagination-wrap">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination pagination-custom justify-content-center">
                                            <li class="page-item disabled">
                                                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                                                    <i class="ion-ios-arrow-back"></i>
                                                </a>
                                            </li>
                                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item d-none d-sm-block"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link" href="#">
                                                    <i class="fa fa-ellipsis-h"></i>
                                                </a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">
                                                    <i class="ion-ios-arrow-forward"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
</div>
    );
}
export default Actualites;