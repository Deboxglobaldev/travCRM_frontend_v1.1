import React from "react";
import Layout from "../../Component/Layout/Layout";

const QueryView = () => {
  return (
    <Layout>
      {/* <div className="container-fluid"> */}
      <div class="page-content container-fluid">
        {/* <!-- Main sidebar --> */}
        <div class="sidebar sidebar-light sidebar-main sidebar-expand-md align-self-start mt-3">
          {/* <!-- Sidebar mobile toggler --> */}
          {/* <!-- /sidebar mobile toggler --> */}

          {/* <!-- Sidebar content --> */}
          <div class="sidebar-content">
            <div class="card card-sidebar-mobile">
              {/* <!-- Header --> */}
              <div class="card-header header-elements-inline">
                <h6 class="card-title">Navigation</h6>
                <div class="header-elements">
                  <div class="list-icons">
                    <a class="list-icons-item" data-action="collapse"></a>
                  </div>
                </div>
              </div>

              {/* <!-- User menu --> */}
              <div class="sidebar-user">
                <div class="card-body">
                  <div class="media">
                    <div class="mr-3">
                      <a href="#">
                        <img
                          src="../../../../global_assets/images/placeholders/placeholder.jpg"
                          width="38"
                          height="38"
                          class="rounded-circle"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="media-body">
                      <div class="media-title font-weight-semibold">
                        Victoria Baker
                      </div>
                      <div class="font-size-xs opacity-50">
                        <i class="icon-pin font-size-sm"></i> &nbsp;Santa Ana,
                        CA
                      </div>
                    </div>

                    <div class="ml-3 align-self-center">
                      <a href="#" class="text-white">
                        <i class="icon-cog3"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /user menu --> */}

              {/* <!-- Main navigation --> */}
              <div class="card-body p-0">
                <ul class="nav nav-sidebar" data-nav-type="accordion">
                  {/* <!-- Main --> */}
                  <li class="nav-item-header mt-0">
                    <div class="text-uppercase font-size-xs line-height-xs">
                      Main
                    </div>{" "}
                    <i class="icon-menu" title="Main"></i>
                  </li>
                  <li class="nav-item">
                    <a href="index.html" class="nav-link">
                      <i class="icon-home4"></i>
                      <span>
                        Dashboard
                        <span class="d-block font-weight-normal opacity-50">
                          No active orders
                        </span>
                      </span>
                    </a>
                  </li>
                  <li class="nav-item nav-item-submenu">
                    <a href="#" class="nav-link">
                      <i class="icon-copy"></i> <span>Layouts</span>
                    </a>

                    <ul class="nav nav-group-sub" data-submenu-title="Layouts">
                      <li class="nav-item">
                        <a
                          href="../../../../layout_1/LTR/default/full/index.html"
                          class="nav-link"
                        >
                          Default layout
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="../../../../layout_2/LTR/default/full/index.html"
                          class="nav-link"
                        >
                          Layout 2
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="index.html" class="nav-link active">
                          Layout 3
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="../../../../layout_4/LTR/default/full/index.html"
                          class="nav-link"
                        >
                          Layout 4
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="../../../../layout_5/LTR/default/full/index.html"
                          class="nav-link"
                        >
                          Layout 5
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="../../../../layout_6/LTR/default/full/index.html"
                          class="nav-link disabled"
                        >
                          Layout 6{" "}
                          <span class="badge bg-transparent align-self-center ml-auto">
                            Coming soon
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item nav-item-submenu">
                    <a href="#" class="nav-link">
                      <i class="icon-color-sampler"></i> <span>Themes</span>
                    </a>

                    <ul class="nav nav-group-sub" data-submenu-title="Themes">
                      <li class="nav-item">
                        <a href="index.html" class="nav-link active">
                          Default
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="../../../LTR/material/full/index.html"
                          class="nav-link"
                        >
                          Material
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="../../../LTR/dark/full/index.html"
                          class="nav-link disabled"
                        >
                          Dark{" "}
                          <span class="badge bg-transparent align-self-center ml-auto">
                            Coming soon
                          </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="../../../LTR/clean/full/index.html"
                          class="nav-link disabled"
                        >
                          Clean{" "}
                          <span class="badge bg-transparent align-self-center ml-auto">
                            Coming soon
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item nav-item-submenu">
                    <a href="#" class="nav-link">
                      <i class="icon-stack"></i> <span>Starter kit</span>
                    </a>

                    <ul
                      class="nav nav-group-sub"
                      data-submenu-title="Starter kit"
                    >
                      <li class="nav-item">
                        <a
                          href="../../seed/horizontal_nav.html"
                          class="nav-link"
                        >
                          Horizontal navigation
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="../../seed/sidebar_none.html" class="nav-link">
                          No sidebar
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="../../seed/sidebar_main.html" class="nav-link">
                          1 sidebar
                        </a>
                      </li>
                      <li class="nav-item nav-item-submenu">
                        <a href="#" class="nav-link">
                          2 sidebars
                        </a>
                        <ul class="nav nav-group-sub">
                          <li class="nav-item">
                            <a
                              href="../../seed/sidebar_secondary.html"
                              class="nav-link"
                            >
                              Secondary sidebar
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              href="../../seed/sidebar_right.html"
                              class="nav-link"
                            >
                              Right sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item nav-item-submenu">
                        <a href="#" class="nav-link">
                          3 sidebars
                        </a>
                        <ul class="nav nav-group-sub">
                          <li class="nav-item">
                            <a
                              href="../../seed/sidebar_right_hidden.html"
                              class="nav-link"
                            >
                              Right sidebar hidden
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              href="../../seed/sidebar_right_visible.html"
                              class="nav-link"
                            >
                              Right sidebar visible
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a href="../../seed/layout_boxed.html" class="nav-link">
                          Boxed layout
                        </a>
                      </li>
                      <li class="nav-item-divider"></li>
                      <li class="nav-item">
                        <a
                          href="../../seed/layout_navbar_fixed_main.html"
                          class="nav-link"
                        >
                          Fixed main navbar
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="../../seed/layout_navbar_fixed_secondary.html"
                          class="nav-link"
                        >
                          Fixed secondary navbar
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="../../seed/layout_navbar_fixed_both.html"
                          class="nav-link"
                        >
                          Both navbars fixed
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a
                      href="../../../RTL/default/full/index.html"
                      class="nav-link"
                    >
                      <i class="icon-width"></i> <span>RTL version</span>
                    </a>
                  </li>
                  {/* <!-- /main --> */}
                  </ul>     
                  {/* <!-- /layout --> */}
              </div>
              {/* <!-- /main navigation --> */}
            </div>
          </div>
          {/* <!-- /sidebar content --> */}
        </div>
        {/* <!-- /main sidebar --> */}

                 {/*  */}
                 {/*  */}
                 {/*  */}
                 {/*  */}
                 {/*  */}
                 {/*  */}
                 {/*  */}

        {/* <!-- Main content --> */}
        <div class="content-wrapper">
          {/* <!-- Content area --> */}
          <div class="content">
            {/* <!-- Traffic sources --> */}
            <div class="card">
              <div class="card-header header-elements-inline">
                <h6 class="card-title">Traffic sources</h6>
                <div class="header-elements">
                  <div class="form-check form-check-right form-check-switchery form-check-switchery-sm">
                    <label class="form-check-label">
                      Live update:
                      {/* <input type="checkbox" class="form-input-switchery" checked="" data-fouc="" data-switchery="true" style={{display: "none"}}/><span class="switchery switchery-default" style="background-color: rgb(100, 189, 99); border-color: rgb(100, 189, 99); box-shadow: rgb(100, 189, 99) 0px 0px 0px 9.5px inset; transition: border 0.4s ease 0s, box-shadow 0.4s ease 0s, background-color 1.2s ease 0s;"><small style="left: 18px; background-color: rgb(255, 255, 255); transition: background-color 0.4s ease 0s, left 0.2s ease 0s;"></small></span> */}
                    </label>
                  </div>
                </div>
              </div>

              <div class="card-body py-0">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="d-flex align-items-center justify-content-center mb-2">
                      <a
                        href="#"
                        class="btn bg-transparent border-primary text-primary rounded-round border-2 btn-icon mr-3"
                      >
                        <i class="icon-plus3"></i>
                      </a>
                      <div>
                        <div class="font-weight-semibold">New visitors</div>
                        <span class="text-muted">2,349 avg</span>
                      </div>
                    </div>
                    <div class="chart w-75 mx-auto mb-3" id="new-visitors">
                      <svg width="136.8602294921875" height="35">
                        <g transform="translate(0,0)" width="136.8602294921875">
                          <defs>
                            <clipPath id="load-clip-new-visitors">
                              <rect
                                class="load-clip"
                                width="136.8602294921875"
                                height="35"
                              ></rect>
                            </clipPath>
                          </defs>
                          <g clip-path="url(#load-clip-new-visitors)">
                            <path
                              d="M-5.26385498046875,5L-4.386545817057291,6.527777777777777C-3.509236653645833,8.055555555555554,-1.7546183268229165,11.111111111111109,0,14.444444444444443C1.7546183268229165,17.777777777777775,3.509236653645833,21.388888888888886,5.26385498046875,22.361111111111107C7.018473307291666,23.33333333333333,8.773091634114582,21.666666666666664,10.5277099609375,19.86111111111111C12.282328287760416,18.055555555555554,14.036946614583332,16.111111111111107,15.79156494140625,16.388888888888886C17.546183268229164,16.666666666666664,19.300801595052082,19.166666666666668,21.055419921875,18.472222222222225C22.810038248697914,17.77777777777778,24.56465657552083,13.88888888888889,26.319274902343746,10.833333333333332C28.073893229166664,7.777777777777777,29.828511555989582,5.555555555555555,31.583129882812496,5.138888888888888C33.337748209635414,4.722222222222221,35.09236653645833,6.111111111111111,36.84698486328125,7.36111111111111C38.601603190104164,8.61111111111111,40.35622151692708,9.722222222222221,42.11083984375,12.5C43.865458170572914,15.277777777777777,45.62007649739583,19.72222222222222,47.37469482421875,21.388888888888886C49.129313151041664,23.055555555555554,50.88393147786458,21.944444444444443,52.63854980468749,18.888888888888886C54.39316813151041,15.833333333333332,56.14778645833333,10.833333333333332,57.90240478515625,9.444444444444445C59.657023111979164,8.055555555555555,61.41164143880208,10.277777777777779,63.166259765625,12.36111111111111C64.92087809244791,14.444444444444445,66.67549641927083,16.38888888888889,68.43011474609375,15.13888888888889C70.18473307291666,13.888888888888888,71.93935139973958,9.444444444444443,73.6939697265625,10.13888888888889C75.44858805338541,10.833333333333332,77.20320638020833,16.666666666666668,78.95782470703125,18.88888888888889C80.71244303385416,21.11111111111111,82.46706136067708,19.72222222222222,84.2216796875,17.083333333333332C85.97629801432291,14.444444444444443,87.73091634114583,10.555555555555554,89.48553466796875,9.305555555555554C91.24015299479166,8.055555555555554,92.99477132161458,9.444444444444443,94.7493896484375,11.805555555555554C96.50400797526041,14.166666666666664,98.25862630208333,17.5,100.01324462890625,16.666666666666664C101.76786295572916,15.833333333333332,103.52248128255206,10.833333333333332,105.27709960937499,8.75C107.03171793619791,6.666666666666666,108.78633626302083,7.499999999999998,110.54095458984374,7.499999999999999C112.29557291666666,7.499999999999998,114.05019124348958,6.666666666666666,115.8048095703125,7.916666666666665C117.55942789713541,9.166666666666664,119.31404622395831,12.499999999999998,121.06866455078124,14.72222222222222C122.82328287760416,16.944444444444443,124.57790120442708,18.055555555555557,126.33251953124999,16.805555555555557C128.0871378580729,15.555555555555555,129.84175618489581,11.944444444444443,131.59637451171875,10.13888888888889C133.35099283854166,8.333333333333332,135.10561116536456,8.333333333333332,136.8602294921875,9.027777777777777C138.6148478190104,9.722222222222221,140.36946614583331,11.11111111111111,142.12408447265625,10.13888888888889C143.87870279947916,9.166666666666666,145.63332112630206,5.833333333333332,146.51063028971353,4.166666666666664L147.387939453125,2.4999999999999973"
                              class="d3-line d3-line-medium"
                              // style="stroke: rgb(38, 166, 154); opacity: 1;"
                              transform="translate(-3.2495531412760412,0)"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="d-flex align-items-center justify-content-center mb-2">
                      <a
                        href="#"
                        class="btn bg-transparent border-warning-400 text-warning-400 rounded-round border-2 btn-icon mr-3"
                      >
                        <i class="icon-watch2"></i>
                      </a>
                      <div>
                        <div class="font-weight-semibold">New sessions</div>
                        <span class="text-muted">08:20 avg</span>
                      </div>
                    </div>
                    <div class="chart w-75 mx-auto mb-3" id="new-sessions">
                      <svg width="136.8602294921875" height="35">
                        <g transform="translate(0,0)" width="136.8602294921875">
                          <defs>
                            <clipPath id="load-clip-new-sessions">
                              <rect
                                class="load-clip"
                                width="136.8602294921875"
                                height="35"
                              ></rect>
                            </clipPath>
                          </defs>
                          <g clip-path="url(#load-clip-new-sessions)">
                            <path
                              d="M-5.26385498046875,17.5L-4.386545817057291,17.22222222222222C-3.509236653645833,16.944444444444443,-1.7546183268229165,16.388888888888886,0,14.861111111111109C1.7546183268229165,13.33333333333333,3.509236653645833,10.833333333333332,5.26385498046875,10.694444444444443C7.018473307291666,10.555555555555554,8.773091634114582,12.777777777777777,10.5277099609375,12.5C12.282328287760416,12.222222222222221,14.036946614583332,9.444444444444443,15.79156494140625,11.25C17.546183268229164,13.055555555555554,19.300801595052082,19.444444444444443,21.055419921875,19.444444444444443C22.810038248697914,19.444444444444443,24.56465657552083,13.055555555555554,26.319274902343746,9.305555555555555C28.073893229166664,5.555555555555555,29.828511555989582,4.444444444444445,31.583129882812496,6.944444444444445C33.337748209635414,9.444444444444446,35.09236653645833,15.555555555555557,36.84698486328125,19.02777777777778C38.601603190104164,22.5,40.35622151692708,23.333333333333336,42.11083984375,21.805555555555554C43.865458170572914,20.27777777777778,45.62007649739583,16.38888888888889,47.37469482421875,12.63888888888889C49.129313151041664,8.88888888888889,50.88393147786458,5.277777777777779,52.63854980468749,3.8888888888888884C54.39316813151041,2.499999999999999,56.14778645833333,3.3333333333333313,57.90240478515625,4.444444444444442C59.657023111979164,5.555555555555554,61.41164143880208,6.944444444444443,63.166259765625,8.194444444444443C64.92087809244791,9.444444444444443,66.67549641927083,10.555555555555555,68.43011474609375,13.055555555555557C70.18473307291666,15.555555555555555,71.93935139973958,19.444444444444443,73.6939697265625,19.166666666666668C75.44858805338541,18.888888888888886,77.20320638020833,14.444444444444443,78.95782470703125,14.305555555555554C80.71244303385416,14.166666666666664,82.46706136067708,18.333333333333332,84.2216796875,20.13888888888889C85.97629801432291,21.944444444444443,87.73091634114583,21.388888888888886,89.48553466796875,18.888888888888886C91.24015299479166,16.388888888888886,92.99477132161458,11.944444444444443,94.7493896484375,9.722222222222221C96.50400797526041,7.499999999999998,98.25862630208333,7.499999999999998,100.01324462890625,9.583333333333332C101.76786295572916,11.666666666666664,103.52248128255206,15.833333333333332,105.27709960937499,17.083333333333332C107.03171793619791,18.333333333333332,108.78633626302083,16.666666666666664,110.54095458984374,14.86111111111111C112.29557291666666,13.055555555555555,114.05019124348958,11.11111111111111,115.8048095703125,10.833333333333332C117.55942789713541,10.555555555555555,119.31404622395831,11.944444444444445,121.06866455078124,11.666666666666668C122.82328287760416,11.38888888888889,124.57790120442708,9.444444444444443,126.33251953124999,10C128.0871378580729,10.555555555555554,129.84175618489581,13.61111111111111,131.59637451171875,12.916666666666666C133.35099283854166,12.222222222222221,135.10561116536456,7.777777777777778,136.8602294921875,7.638888888888888C138.6148478190104,7.499999999999999,140.36946614583331,11.666666666666664,142.12408447265625,12.361111111111109C143.87870279947916,13.055555555555554,145.63332112630206,10.277777777777775,146.51063028971353,8.888888888888888L147.387939453125,7.499999999999999"
                              class="d3-line d3-line-medium"
                              // style="stroke: rgb(255, 112, 67); opacity: 1;"
                              transform="translate(-3.2355161946614586,0)"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="d-flex align-items-center justify-content-center mb-2">
                      <a
                        href="#"
                        class="btn bg-transparent border-indigo-400 text-indigo-400 rounded-round border-2 btn-icon mr-3"
                      >
                        <i class="icon-people"></i>
                      </a>
                      <div>
                        <div class="font-weight-semibold">Total online</div>
                        <span class="text-muted">
                          <span class="badge badge-mark border-success mr-2"></span>{" "}
                          5,378 avg
                        </span>
                      </div>
                    </div>
                    <div class="chart w-75 mx-auto mb-3" id="total-online">
                      <svg width="136.8602294921875" height="35">
                        <g transform="translate(0,0)" width="136.8602294921875">
                          <defs>
                            <clipPath id="load-clip-total-online">
                              <rect
                                class="load-clip"
                                width="136.8602294921875"
                                height="35"
                              ></rect>
                            </clipPath>
                          </defs>
                          <g clip-path="url(#load-clip-total-online)">
                            <path
                              d="M-5.26385498046875,14.166666666666666L-4.386545817057291,15.833333333333332C-3.509236653645833,17.5,-1.7546183268229165,20.833333333333332,0,22.5C1.7546183268229165,24.166666666666664,3.509236653645833,24.166666666666664,5.26385498046875,22.77777777777778C7.018473307291666,21.388888888888886,8.773091634114582,18.611111111111107,10.5277099609375,16.52777777777778C12.282328287760416,14.444444444444443,14.036946614583332,13.055555555555555,15.79156494140625,13.055555555555557C17.546183268229164,13.055555555555555,19.300801595052082,14.444444444444443,21.055419921875,16.805555555555554C22.810038248697914,19.166666666666664,24.56465657552083,22.5,26.319274902343746,23.61111111111111C28.073893229166664,24.72222222222222,29.828511555989582,23.61111111111111,31.583129882812496,23.611111111111114C33.337748209635414,23.61111111111111,35.09236653645833,24.72222222222222,36.84698486328125,23.61111111111111C38.601603190104164,22.5,40.35622151692708,19.166666666666664,42.11083984375,17.083333333333332C43.865458170572914,14.999999999999998,45.62007649739583,14.166666666666666,47.37469482421875,11.805555555555557C49.129313151041664,9.444444444444445,50.88393147786458,5.555555555555555,52.63854980468749,4.166666666666667C54.39316813151041,2.7777777777777777,56.14778645833333,3.8888888888888884,57.90240478515625,7.361111111111111C59.657023111979164,10.833333333333332,61.41164143880208,16.666666666666668,63.166259765625,18.47222222222222C64.92087809244791,20.27777777777778,66.67549641927083,18.055555555555554,68.43011474609375,16.111111111111107C70.18473307291666,14.166666666666664,71.93935139973958,12.499999999999998,73.6939697265625,11.944444444444445C75.44858805338541,11.38888888888889,77.20320638020833,11.944444444444445,78.95782470703125,12.222222222222223C80.71244303385416,12.5,82.46706136067708,12.5,84.2216796875,13.611111111111112C85.97629801432291,14.722222222222223,87.73091634114583,16.944444444444446,89.48553466796875,17.361111111111114C91.24015299479166,17.77777777777778,92.99477132161458,16.38888888888889,94.7493896484375,14.444444444444445C96.50400797526041,12.5,98.25862630208333,10,100.01324462890625,9.166666666666666C101.76786295572916,8.333333333333332,103.52248128255206,9.166666666666664,105.27709960937499,12.083333333333332C107.03171793619791,14.999999999999996,108.78633626302083,19.999999999999996,110.54095458984374,19.166666666666664C112.29557291666666,18.333333333333332,114.05019124348958,11.666666666666664,115.8048095703125,9.305555555555554C117.55942789713541,6.944444444444444,119.31404622395831,8.888888888888888,121.06866455078124,8.88888888888889C122.82328287760416,8.888888888888888,124.57790120442708,6.944444444444444,126.33251953124999,8.88888888888889C128.0871378580729,10.833333333333332,129.84175618489581,16.666666666666668,131.59637451171875,20C133.35099283854166,23.333333333333332,135.10561116536456,24.166666666666664,136.8602294921875,22.361111111111107C138.6148478190104,20.555555555555554,140.36946614583331,16.11111111111111,142.12408447265625,15.694444444444445C143.87870279947916,15.277777777777779,145.63332112630206,18.88888888888889,146.51063028971353,20.694444444444443L147.387939453125,22.5"
                              class="d3-line d3-line-medium"
                              // style="stroke: rgb(92, 107, 192); opacity: 1;"
                              transform="translate(-3.2355161946614586,0)"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div class="chart position-relative" id="traffic-sources">
                <div class="d3-tip e" style={{display: "none"}}></div>
                <svg width="627.4802856445312" height="330">
                </svg>
              </div>
            </div>
            
           
          </div>
         
        </div>
      </div>
    </Layout>
  );
};

export default QueryView;
