import React from "react";
import { NavLink } from "react-router-dom";
import PageHeader from "./page_header/PageHeader";
const Navbar = () => {
  return (
    <>
      {/* Main Navbar */}
      <div className="navbar navbar-expand-md navbar-dark">
        <div className="navbar-brand wmin-0 mr-5">
          <NavLink to="/" className="d-inline-block">
            <img src="navbar/image/logo_light.png" alt="logo" />
          </NavLink>
        </div>

        <div className="d-md-none">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="navbar-mobile"
          >
            <i className="icon-tree5"></i>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbar-mobile">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <NavLink
                to=""
                className="navbar-nav-link dropdown-toggle caret-0"
                data-toggle="dropdown"
              >
                <i className="icon-people"></i>
                <span className="d-md-none ml-2">Users</span>
                <span className="badge badge-mark border-orange-400 ml-auto ml-md-0"></span>
              </NavLink>

              <div className="dropdown-menu dropdown-content wmin-md-300">
                <div className="dropdown-content-header">
                  <span className="font-weight-semibold">Users online</span>
                  <NavLink to="" className="text-default">
                    <i className="icon-search4 font-size-base"></i>
                  </NavLink>
                </div>

                <div className="dropdown-content-body dropdown-scrollable">
                  <ul className="media-list">
                    <li className="media">
                      <div className="mr-3">
                        <img
                          src="navbar/image/placeholder.jpg"
                          width="36"
                          height="36"
                          className="rounded-circle"
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <NavLink
                          to=""
                          className="media-title font-weight-semibold"
                        >
                          Jordana Ansley
                        </NavLink>
                        <span className="d-block text-muted font-size-sm">
                          Lead web developer
                        </span>
                      </div>
                      <div className="ml-3 align-self-center">
                        <span className="badge badge-mark border-success"></span>
                      </div>
                    </li>

                    <li className="media">
                      <div className="mr-3">
                        <img
                          src="navbar/image/placeholder.jpg"
                          
                          className="rounded-circle"
                          alt="placeholder"
                        />
                      </div>
                      <div className="media-body">
                        <NavLink
                          to=""
                          className="media-title font-weight-semibold"
                        >
                          Will Brason
                        </NavLink>
                        <span className="d-block text-muted font-size-sm">
                          Marketing manager
                        </span>
                      </div>
                      <div className="ml-3 align-self-center">
                        <span className="badge badge-mark border-danger"></span>
                      </div>
                    </li>

                    <li className="media">
                      <div className="mr-3">
                        <img
                          src="../../../../global_assets/images/placeholders/placeholder.jpg"
                          width="36"
                          height="36"
                          className="rounded-circle"
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <NavLink
                          to=""
                          className="media-title font-weight-semibold"
                        >
                          Hanna Walden
                        </NavLink>
                        <span className="d-block text-muted font-size-sm">
                          Project manager
                        </span>
                      </div>
                      <div className="ml-3 align-self-center">
                        <span className="badge badge-mark border-success"></span>
                      </div>
                    </li>

                    <li className="media">
                      <div className="mr-3">
                        <img
                          src="../../../../global_assets/images/placeholders/placeholder.jpg"
                          width="36"
                          height="36"
                          className="rounded-circle"
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <NavLink
                          to=""
                          className="media-title font-weight-semibold"
                        >
                          Dori Laperriere
                        </NavLink>
                        <span className="d-block text-muted font-size-sm">
                          Business developer
                        </span>
                      </div>
                      <div className="ml-3 align-self-center">
                        <span className="badge badge-mark border-warning-300"></span>
                      </div>
                    </li>

                    <li className="media">
                      <div className="mr-3">
                        <img
                          src="../../../../global_assets/images/placeholders/placeholder.jpg"
                          width="36"
                          height="36"
                          className="rounded-circle"
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <NavLink
                          to=""
                          className="media-title font-weight-semibold"
                        >
                          Vanessa Aurelius
                        </NavLink>
                        <span className="d-block text-muted font-size-sm">
                          UX expert
                        </span>
                      </div>
                      <div className="ml-3 align-self-center">
                        <span className="badge badge-mark border-grey-400"></span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="dropdown-content-footer bg-light">
                  <NavLink to="" className="text-grey mr-auto">
                    All users
                  </NavLink>
                  <NavLink to="" className="text-grey">
                    <i className="icon-gear"></i>
                  </NavLink>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                to=""
                className="navbar-nav-link dropdown-toggle caret-0"
                data-toggle="dropdown"
              >
                <i className="icon-pulse2"></i>
                <span className="d-md-none ml-2">Activity</span>
                <span className="badge badge-mark border-orange-400 ml-auto ml-md-0"></span>
              </NavLink>

              <div className="dropdown-menu dropdown-content wmin-md-350">
                <div className="dropdown-content-header">
                  <span className="font-weight-semibold">Latest activity</span>
                  <NavLink to="" className="text-default">
                    <i className="icon-search4 font-size-base"></i>
                  </NavLink>
                </div>

                <div className="dropdown-content-body dropdown-scrollable">
                  <ul className="media-list">
                    <li className="media">
                      <div className="mr-3">
                        <NavLink
                          to=""
                          className="btn bg-success-400 rounded-round btn-icon"
                        >
                          <i className="icon-mention"></i>
                        </NavLink>
                      </div>

                      <div className="media-body">
                        <NavLink to="">Taylor Swift</NavLink> mentioned you in a
                        post "Angular JS. Tips and tricks"
                        <div className="font-size-sm text-muted mt-1">
                          4 minutes ago
                        </div>
                      </div>
                    </li>

                    <li className="media">
                      <div className="mr-3">
                        <NavLink
                          to=""
                          className="btn bg-pink-400 rounded-round btn-icon"
                        >
                          <i className="icon-paperplane"></i>
                        </NavLink>
                      </div>

                      <div className="media-body">
                        Special offers have been sent to subscribed users by{" "}
                        <NavLink to="">Donna Gordon</NavLink>
                        <div className="font-size-sm text-muted mt-1">
                          36 minutes ago
                        </div>
                      </div>
                    </li>

                    <li className="media">
                      <div className="mr-3">
                        <NavLink
                          to=""
                          className="btn bg-blue rounded-round btn-icon"
                        >
                          <i className="icon-plus3"></i>
                        </NavLink>
                      </div>

                      <div className="media-body">
                        <NavLink to="">Chris Arney</NavLink> created a new
                        <span className="font-weight-semibold">Design</span>
                        branch in
                        <span className="font-weight-semibold">Limitless</span>
                        repository
                        <div className="font-size-sm text-muted mt-1">
                          2 hours ago
                        </div>
                      </div>
                    </li>

                    <li className="media">
                      <div className="mr-3">
                        <NavLink
                          to=""
                          className="btn bg-purple-300 rounded-round btn-icon"
                        >
                          <i className="icon-truck"></i>
                        </NavLink>
                      </div>

                      <div className="media-body">
                        Shipping cost to the Netherlands has been reduced,
                        database updated
                        <div className="font-size-sm text-muted mt-1">
                          Feb 8, 11:30
                        </div>
                      </div>
                    </li>

                    <li className="media">
                      <div className="mr-3">
                        <NavLink
                          to=""
                          className="btn bg-warning-400 rounded-round btn-icon"
                        >
                          <i className="icon-comment"></i>
                        </NavLink>
                      </div>

                      <div className="media-body">
                        New review received on
                        <NavLink to="">Server side integration</NavLink>
                        services
                        <div className="font-size-sm text-muted mt-1">
                          Feb 2, 10:20
                        </div>
                      </div>
                    </li>

                    <li className="media">
                      <div className="mr-3">
                        <NavLink
                          to=""
                          className="btn bg-teal-400 rounded-round btn-icon"
                        >
                          <i className="icon-spinner11"></i>
                        </NavLink>
                      </div>

                      <div className="media-body">
                        <strong>January, 2018</strong> - 1320 new users, 3284
                        orders, $49,390 revenue
                        <div className="font-size-sm text-muted mt-1">
                          Feb 1, 05:46
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="dropdown-content-footer bg-light">
                  <NavLink to="" className="text-grey mr-auto">
                    All activity
                  </NavLink>
                  <div>
                    <NavLink
                      to=""
                      className="text-grey"
                      data-popup="tooltip"
                      title="Clear list"
                    >
                      <i className="icon-checkmark3"></i>
                    </NavLink>
                    <NavLink
                      to=""
                      className="text-grey ml-2"
                      data-popup="tooltip"
                      title="Settings"
                    >
                      <i className="icon-gear"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <span className="navbar-text ml-md-3 mr-md-auto">
            <span className="badge bg-success-400 badge-pill">16 orders</span>
          </span>

          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <NavLink
                to=""
                className="navbar-nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                <img
                  src="../../../../global_assets/images/lang/gb.png"
                  className="img-flag mr-2"
                  alt=""
                />
                English
              </NavLink>

              <div className="dropdown-menu dropdown-menu-right">
                <NavLink to="" className="dropdown-item english">
                  <img
                    src="../../../../global_assets/images/lang/gb.png"
                    className="img-flag"
                    alt=""
                  />{" "}
                  English
                </NavLink>
                <NavLink to="" className="dropdown-item ukrainian">
                  <img
                    src="../../../../global_assets/images/lang/ua.png"
                    className="img-flag"
                    alt=""
                  />{" "}
                  Українська
                </NavLink>
                <NavLink to="" className="dropdown-item deutsch">
                  <img
                    src="../../../../global_assets/images/lang/de.png"
                    className="img-flag"
                    alt=""
                  />{" "}
                  Deutsch
                </NavLink>
                <NavLink to="" className="dropdown-item espana">
                  <img
                    src="../../../../global_assets/images/lang/es.png"
                    className="img-flag"
                    alt=""
                  />{" "}
                  España
                </NavLink>
                <NavLink to="" className="dropdown-item russian">
                  <img
                    src="../../../../global_assets/images/lang/ru.png"
                    className="img-flag"
                    alt=""
                  />{" "}
                  Русский
                </NavLink>
              </div>
            </li>

            <li className="nav-item dropdown dropdown-user">
              <NavLink
                to=""
                className="navbar-nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                <img
                  src="../../../../global_assets/images/placeholders/placeholder.jpg"
                  className="rounded-circle"
                  alt=""
                />
                <span>Victoria</span>
              </NavLink>

              <div className="dropdown-menu dropdown-menu-right">
                <NavLink to="" className="dropdown-item">
                  <i className="icon-user-plus"></i> My profile
                </NavLink>
                <NavLink to="" className="dropdown-item">
                  <i className="icon-coins"></i> My balance
                </NavLink>
                <NavLink to="" className="dropdown-item">
                  <i className="icon-comment-discussion"></i> Messages{" "}
                  <span className="badge badge-pill bg-blue ml-auto">58</span>
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink to="" className="dropdown-item">
                  <i className="icon-cog5"></i> Account settings
                </NavLink>
                <NavLink to="" className="dropdown-item">
                  <i className="icon-switch2"></i> Logout
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Navbar */}

      {/* secondary navbar */}
      <div className="navbar navbar-expand-md navbar-light navbar-sticky">
        <div className="text-center d-md-none w-100">
          <button
            type="button"
            className="navbar-toggler dropdown-toggle"
            data-toggle="collapse"
            data-target="navbar-navigation"
          >
            <i className="icon-unfold mr-2"></i>
            Navigation
          </button>
        </div>

        <div className="navbar-collapse collapse" id="navbar-navigation">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="navbar-nav-link">
                <i className="icon-home4 mr-2"></i>
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item nav-item-levels mega-menu-full">
              <NavLink
                to=""
                className="navbar-nav-link dropdown-toggle active"
                data-toggle="dropdown"
              >
                <i className="icon-make-group mr-2"></i>
                Navigation
              </NavLink>

              <div className="dropdown-menu dropdown-content">
                <div className="dropdown-content-body">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="font-size-sm line-height-sm font-weight-semibold text-uppercase mt-1">
                        Main
                      </div>
                      <div className="dropdown-divider mb-2"></div>
                      <div className="dropdown-item-group mb-3 mb-md-0">
                        <ul className="list-unstyled">
                          <li>
                            <NavLink to="" className="dropdown-item rounded">
                              <i className="icon-copy"></i> Layouts
                            </NavLink>
                            <ul className="list-unstyled">
                              <li>
                                <NavLink
                                  to="../../../../layout_1/LTR/default/full/index.html"
                                  className="dropdown-item rounded"
                                >
                                  Default layout
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="../../../../layout_2/LTR/default/full/index.html"
                                  className="dropdown-item rounded"
                                >
                                  Layout 2
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="../../../../layout_3/LTR/default/full/index.html"
                                  className="dropdown-item rounded"
                                >
                                  Layout 3
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="index.html"
                                  className="dropdown-item active rounded"
                                >
                                  Layout 4
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="../../../../layout_5/LTR/default/full/index.html"
                                  className="dropdown-item rounded"
                                >
                                  Layout 5
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="../../../../layout_6/LTR/default/full/index.html"
                                  className="dropdown-item disabled rounded"
                                >
                                  Layout 6
                                  <span className="badge bg-transparent align-self-center ml-auto">
                                    Coming soon
                                  </span>
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="" className="dropdown-item rounded">
                              <i className="icon-color-sampler"></i> Themes
                            </NavLink>
                            <ul className="list-unstyled">
                              <li>
                                <NavLink
                                  to="index.html"
                                  className="dropdown-item active rounded"
                                >
                                  Default
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="../../../LTR/material/full/index.html"
                                  className="dropdown-item rounded"
                                >
                                  Material
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="../../../LTR/dark/full/index.html"
                                  className="dropdown-item disabled rounded"
                                >
                                  Dark
                                  <span className="badge bg-transparent align-self-center ml-auto">
                                    Coming soon
                                  </span>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="../../../LTR/clean/full/index.html"
                                  className="dropdown-item disabled rounded"
                                >
                                  Clean
                                  <span className="badge bg-transparent align-self-center ml-auto">
                                    Coming soon
                                  </span>
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink
                              to="../../../RTL/default/full/index.html"
                              className="dropdown-item rounded"
                            >
                              <i className="icon-width"></i>
                              RTL version
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="font-size-sm line-height-sm font-weight-semibold text-uppercase mt-1">
                        Layout
                      </div>
                      <div className="dropdown-divider mb-2"></div>
                      <div className="dropdown-item-group mb-3 mb-md-0">
                        <ul className="list-unstyled">
                          <li>
                            <NavLink to="" className="dropdown-item rounded">
                              <i className="icon-stack2"></i> Page layouts
                            </NavLink>
                            <ul className="list-unstyled">
                              <li>
                                <NavLink
                                  to="layout_navbar_fixed_main.html"
                                  className="dropdown-item rounded"
                                >
                                  Fixed main navbar
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="layout_navbar_sticky_secondary.html"
                                  className="dropdown-item rounded"
                                >
                                  Sticky secondary navbar
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="layout_navbar_hideable_main.html"
                                  className="dropdown-item rounded"
                                >
                                  Hideable main navbar
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="layout_navbar_hideable_secondary.html"
                                  className="dropdown-item rounded"
                                >
                                  Hideable secondary navbar
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="layout_footer_fixed.html"
                                  className="dropdown-item rounded"
                                >
                                  Fixed footer
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="layout_footer_hideable.html"
                                  className="dropdown-item rounded"
                                >
                                  Hideable footer
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="layout_without_header.html"
                                  className="dropdown-item rounded"
                                >
                                  Without page header
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="" className="dropdown-item rounded">
                              <i className="icon-page-break2"></i> Headers &amp;
                              footers
                            </NavLink>
                            <ul className="list-unstyled">
                              <li>
                                <NavLink
                                  to="content_page_header.html"
                                  className="dropdown-item rounded"
                                >
                                  Page header
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="content_page_footer.html"
                                  className="dropdown-item rounded disabled"
                                >
                                  Page footer
                                  <span className="badge bg-transparent align-self-center ml-auto">
                                    Coming soon
                                  </span>
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="" className="dropdown-item rounded">
                              <i className="icon-cube3"></i> Boxed layout
                            </NavLink>
                            <ul className="list-unstyled">
                              <li>
                                <NavLink
                                  to="layout_boxed_default.html"
                                  className="dropdown-item rounded"
                                >
                                  Boxed with default sidebar
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="layout_boxed_mini.html"
                                  className="dropdown-item rounded"
                                >
                                  Boxed with mini sidebar
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="layout_boxed_full.html"
                                  className="dropdown-item rounded"
                                >
                                  Boxed full width
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="layout_boxed_content.html"
                                  className="dropdown-item rounded"
                                >
                                  Boxed content
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="font-size-sm line-height-sm font-weight-semibold text-uppercase mt-1">
                        Navigation
                      </div>
                      <div className="dropdown-divider mb-2"></div>
                      <div className="dropdown-item-group mb-3 mb-md-0">
                        <ul className="list-unstyled">
                          <li>
                            <NavLink
                              to=""
                              className="dropdown-item dropdown-item-open rounded"
                            >
                              <i className="icon-menu3"></i> Navbars
                            </NavLink>
                            <ul className="list-unstyled">
                              <li>
                                <NavLink
                                  to=""
                                  className="dropdown-item rounded"
                                >
                                  Single navbar
                                </NavLink>
                                <ul className="list-unstyled">
                                  <li>
                                    <NavLink
                                      to="navbar_single_top_static.html"
                                      className="dropdown-item rounded"
                                    >
                                      Single top static
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="navbar_single_top_fixed.html"
                                      className="dropdown-item rounded"
                                    >
                                      Single top fixed
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="navbar_single_bottom_static.html"
                                      className="dropdown-item rounded"
                                    >
                                      Single bottom static
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="navbar_single_bottom_fixed.html"
                                      className="dropdown-item rounded"
                                    >
                                      Single bottom fixed
                                    </NavLink>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <NavLink
                                  to=""
                                  className="dropdown-item dropdown-item-open rounded"
                                >
                                  Multiple navbars
                                </NavLink>
                                <ul className="list-unstyled active">
                                  <li>
                                    <NavLink
                                      to="navbar_multiple_top_static.html"
                                      className="dropdown-item rounded"
                                    >
                                      Multiple top static
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="navbar_multiple_top_fixed.html"
                                      className="dropdown-item rounded"
                                    >
                                      Multiple top fixed
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="navbar_multiple_bottom_static.html"
                                      className="dropdown-item rounded"
                                    >
                                      Multiple bottom static
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="navbar_multiple_bottom_fixed.html"
                                      className="dropdown-item rounded"
                                    >
                                      Multiple bottom fixed
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="navbar_multiple_top_bottom.html"
                                      className="dropdown-item rounded"
                                    >
                                      Multiple - top and bottom
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="navbar_multiple_secondary_sticky.html"
                                      className="dropdown-item active rounded"
                                    >
                                      Multiple - secondary sticky
                                    </NavLink>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <NavLink
                                  to=""
                                  className="dropdown-item rounded"
                                >
                                  Content navbar
                                </NavLink>
                                <ul className="list-unstyled">
                                  <li>
                                    <NavLink
                                      to="navbar_component_single.html"
                                      className="dropdown-item rounded"
                                    >
                                      Single navbar
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="navbar_component_multiple.html"
                                      className="dropdown-item rounded"
                                    >
                                      Multiple navbars
                                    </NavLink>
                                  </li>
                                </ul>
                              </li>
                              <li className="dropdown-divider"></li>
                              <li>
                                <NavLink
                                  to="navbar_colors.html"
                                  className="dropdown-item rounded"
                                >
                                  Color options
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="navbar_sizes.html"
                                  className="dropdown-item rounded"
                                >
                                  Sizing options
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="navbar_hideable.html"
                                  className="dropdown-item rounded"
                                >
                                  Hide on scroll
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="navbar_components.html"
                                  className="dropdown-item rounded"
                                >
                                  Navbar components
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="" className="dropdown-item rounded">
                              <i className="icon-transmission"></i> Horizontal
                              navigation
                            </NavLink>
                            <ul className="list-unstyled">
                              <li>
                                <NavLink
                                  to="navigation_horizontal_click.html"
                                  className="dropdown-item rounded"
                                >
                                  Submenu on click
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="navigation_horizontal_hover.html"
                                  className="dropdown-item rounded"
                                >
                                  Submenu on hover
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="navigation_horizontal_elements.html"
                                  className="dropdown-item rounded"
                                >
                                  With custom elements
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="navigation_horizontal_tabs.html"
                                  className="dropdown-item rounded"
                                >
                                  Tabbed navigation
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="navigation_horizontal_disabled.html"
                                  className="dropdown-item rounded"
                                >
                                  Disabled navigation links
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="navigation_horizontal_mega.html"
                                  className="dropdown-item rounded"
                                >
                                  Horizontal mega menu
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="" className="dropdown-item rounded">
                              <i className="icon-tree5"></i> Menu levels
                            </NavLink>
                            <ul className="list-unstyled">
                              <li>
                                <NavLink
                                  to=""
                                  className="dropdown-item rounded"
                                >
                                  <i className="icon-IE"></i> Second level
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to=""
                                  className="dropdown-item rounded"
                                >
                                  <i className="icon-firefox"></i> Second level
                                  with child
                                </NavLink>
                                <ul className="list-unstyled">
                                  <li>
                                    <NavLink
                                      to=""
                                      className="dropdown-item rounded"
                                    >
                                      <i className="icon-android"></i> Third
                                      level
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to=""
                                      className="dropdown-item rounded"
                                    >
                                      <i className="icon-apple2"></i> Third
                                      level with child
                                    </NavLink>
                                    <ul className="list-unstyled">
                                      <li>
                                        <NavLink
                                          to=""
                                          className="dropdown-item rounded"
                                        >
                                          <i className="icon-html5"></i> Fourth
                                          level
                                        </NavLink>
                                      </li>
                                      <li>
                                        <NavLink
                                          to=""
                                          className="dropdown-item rounded"
                                        >
                                          <i className="icon-css3"></i> Fourth
                                          level
                                        </NavLink>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <NavLink
                                      to=""
                                      className="dropdown-item rounded"
                                    >
                                      <i className="icon-windows"></i> Third
                                      level
                                    </NavLink>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <NavLink
                                  to=""
                                  className="dropdown-item rounded"
                                >
                                  <i className="icon-chrome"></i> Second level
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="font-size-sm line-height-sm font-weight-semibold text-uppercase mt-1">
                        Extras
                      </div>
                      <div className="dropdown-divider mb-2"></div>
                      <div className="dropdown-item-group mb-3 mb-md-0">
                        <ul className="list-unstyled">
                          <li>
                            <NavLink to="" className="dropdown-item rounded">
                              <i className="icon-indent-decrease2"></i> Sidebars
                            </NavLink>
                            <ul className="list-unstyled">
                              <li>
                                <NavLink
                                  to=""
                                  className="dropdown-item rounded"
                                >
                                  Main sidebar
                                </NavLink>
                                <ul className="list-unstyled">
                                  <li>
                                    <NavLink
                                      to="sidebar_default_collapse.html"
                                      className="dropdown-item rounded"
                                    >
                                      Default collapsible
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_default_hide.html"
                                      className="dropdown-item rounded"
                                    >
                                      Default hideable
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_default_hidden.html"
                                      className="dropdown-item rounded"
                                    >
                                      Default hidden
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_mini_collapse.html"
                                      className="dropdown-item rounded"
                                    >
                                      Mini collapsible
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_mini_hide.html"
                                      className="dropdown-item rounded"
                                    >
                                      Mini hideable
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_mini_hidden.html"
                                      className="dropdown-item rounded"
                                    >
                                      Mini hidden
                                    </NavLink>
                                  </li>
                                  <li className="dropdown-divider"></li>
                                  <li>
                                    <NavLink
                                      to="sidebar_default_sections.html"
                                      className="dropdown-item rounded"
                                    >
                                      Sectioned sidebar
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_default_stretched.html"
                                      className="dropdown-item rounded"
                                    >
                                      Stretched sidebar
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_default_color_dark.html"
                                      className="dropdown-item rounded"
                                    >
                                      Dark color
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_default_color_custom.html"
                                      className="dropdown-item rounded"
                                    >
                                      Custom color
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_default_color_sections_custom.html"
                                      className="dropdown-item rounded"
                                    >
                                      Custom sections color
                                    </NavLink>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <NavLink
                                  to=""
                                  className="dropdown-item rounded"
                                >
                                  Secondary sidebar
                                </NavLink>
                                <ul className="list-unstyled">
                                  <li>
                                    <NavLink
                                      to="sidebar_secondary_after.html"
                                      className="dropdown-item rounded"
                                    >
                                      After default
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_secondary_before.html"
                                      className="dropdown-item rounded"
                                    >
                                      Before default
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_secondary_hidden.html"
                                      className="dropdown-item rounded"
                                    >
                                      Hidden by default
                                    </NavLink>
                                  </li>
                                  <li className="dropdown-divider"></li>
                                  <li>
                                    <NavLink
                                      to="sidebar_secondary_sections.html"
                                      className="dropdown-item rounded"
                                    >
                                      Sectioned sidebar
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_secondary_stretched.html"
                                      className="dropdown-item rounded"
                                    >
                                      Stretched sidebar
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_secondary_color_dark.html"
                                      className="dropdown-item rounded"
                                    >
                                      Dark color
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_secondary_color_custom.html"
                                      className="dropdown-item rounded"
                                    >
                                      Custom color
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_secondary_color_sections_custom.html"
                                      className="dropdown-item rounded"
                                    >
                                      Custom sections color
                                    </NavLink>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <NavLink
                                  to=""
                                  className="dropdown-item rounded"
                                >
                                  Right sidebar
                                </NavLink>
                                <ul className="list-unstyled">
                                  <li>
                                    <NavLink
                                      to="sidebar_right_default_collapse.html"
                                      className="dropdown-item rounded"
                                    >
                                      Show - collapse main
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_right_default_hide.html"
                                      className="dropdown-item rounded"
                                    >
                                      Show - hide main
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_right_default_toggle.html"
                                      className="dropdown-item rounded"
                                    >
                                      Show - fix default width
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_right_mini_toggle.html"
                                      className="dropdown-item rounded"
                                    >
                                      Show - fix mini width
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_right_secondary_hide.html"
                                      className="dropdown-item rounded"
                                    >
                                      Show - hide secondary
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_right_visible.html"
                                      className="dropdown-item rounded"
                                    >
                                      Visible by default
                                    </NavLink>
                                  </li>
                                  <li className="dropdown-divider"></li>
                                  <li>
                                    <NavLink
                                      to="sidebar_right_sections.html"
                                      className="dropdown-item rounded"
                                    >
                                      Sectioned sidebar
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_right_stretched.html"
                                      className="dropdown-item rounded"
                                    >
                                      Stretched sidebar
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_right_color_dark.html"
                                      className="dropdown-item rounded"
                                    >
                                      Dark color
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_right_color_custom.html"
                                      className="dropdown-item rounded"
                                    >
                                      Custom color
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="sidebar_right_color_sections_custom.html"
                                      className="dropdown-item rounded"
                                    >
                                      Custom sections color
                                    </NavLink>
                                  </li>
                                </ul>
                              </li>
                              <li className="dropdown-divider"></li>
                              <li>
                                <NavLink
                                  to="sidebar_components.html"
                                  className="dropdown-item rounded"
                                >
                                  Sidebar components
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="" className="dropdown-item rounded">
                              <i className="icon-sort"></i> Vertical navigation
                            </NavLink>
                            <ul className="list-unstyled">
                              <li>
                                <NavLink
                                  to="navigation_vertical_collapsible.html"
                                  className="dropdown-item rounded"
                                >
                                  Collapsible menu
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="navigation_vertical_accordion.html"
                                  className="dropdown-item rounded"
                                >
                                  Accordion menu
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="navigation_vertical_bordered.html"
                                  className="dropdown-item rounded"
                                >
                                  Bordered navigation
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="navigation_vertical_right_icons.html"
                                  className="dropdown-item rounded"
                                >
                                  Right icons
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="navigation_vertical_badges.html"
                                  className="dropdown-item rounded"
                                >
                                  Badges
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="navigation_vertical_disabled.html"
                                  className="dropdown-item rounded"
                                >
                                  Disabled items
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink
                              to="navigation_horizontal_mega.html"
                              className="dropdown-item font-weight-semibold rounded"
                            >
                              <i className="icon-grid52 text-indigo-400"></i>
                              <span className="text-indigo-400">
                                Mega menu component
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                to=""
                className="navbar-nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                <i className="icon-strategy mr-2"></i>
                Starter kit
              </NavLink>

              <div className="dropdown-menu">
                <div className="dropdown-header">Basic layouts</div>
                <div className="dropdown-submenu">
                  <NavLink to="" className="dropdown-item dropdown-toggle">
                    <i className="icon-grid2"></i> Sidebars
                  </NavLink>
                  <div className="dropdown-menu">
                    <NavLink
                      to="../seed/sidebar_none.html"
                      className="dropdown-item"
                    >
                      No sidebar
                    </NavLink>
                    <NavLink
                      to="../seed/sidebar_main.html"
                      className="dropdown-item"
                    >
                      1 sidebar
                    </NavLink>
                    <div className="dropdown-submenu">
                      <NavLink to="" className="dropdown-item dropdown-toggle">
                        2 sidebars
                      </NavLink>
                      <div className="dropdown-menu">
                        <NavLink
                          to="../seed/sidebar_secondary.html"
                          className="dropdown-item"
                        >
                          Secondary sidebar
                        </NavLink>
                        <NavLink
                          to="../seed/sidebar_right.html"
                          className="dropdown-item"
                        >
                          Right sidebar
                        </NavLink>
                      </div>
                    </div>
                    <div className="dropdown-submenu">
                      <NavLink to="" className="dropdown-item dropdown-toggle">
                        3 sidebars
                      </NavLink>
                      <div className="dropdown-menu">
                        <NavLink
                          to="../seed/sidebar_right_hidden.html"
                          className="dropdown-item"
                        >
                          Right sidebar hidden
                        </NavLink>
                        <NavLink
                          to="../seed/sidebar_right_visible.html"
                          className="dropdown-item"
                        >
                          Right sidebar visible
                        </NavLink>
                      </div>
                    </div>
                    <NavLink
                      to="../seed/sidebar_sections.html"
                      className="dropdown-item"
                    >
                      Sectioned sidebar
                    </NavLink>
                    <NavLink
                      to="../seed/sidebar_stretched.html"
                      className="dropdown-item"
                    >
                      Stretched sidebar
                    </NavLink>
                  </div>
                </div>
                <div className="dropdown-submenu">
                  <NavLink to="" className="dropdown-item dropdown-toggle">
                    <i className="icon-paragraph-justify3"></i> Navbars
                  </NavLink>
                  <div className="dropdown-menu">
                    <NavLink
                      to="../seed/navbar_main_fixed.html"
                      className="dropdown-item"
                    >
                      Main navbar fixed
                    </NavLink>
                    <NavLink
                      to="../seed/navbar_main_hideable.html"
                      className="dropdown-item"
                    >
                      Main navbar hideable
                    </NavLink>
                    <NavLink
                      to="../seed/navbar_secondary_sticky.html"
                      className="dropdown-item"
                    >
                      Secondary navbar sticky
                    </NavLink>
                    <NavLink
                      to="../seed/navbar_both_fixed.html"
                      className="dropdown-item"
                    >
                      Both navbars fixed
                    </NavLink>
                  </div>
                </div>
                <div className="dropdown-header">Optional layouts</div>
                <NavLink
                  to="../seed/layout_boxed.html"
                  className="dropdown-item"
                >
                  <i className="icon-align-center-horizontal"></i> Boxed layout
                </NavLink>
              </div>
            </li>
          </ul>

          <ul className="navbar-nav ml-md-auto">
            <li className="nav-item dropdown">
              <NavLink
                to=""
                className="navbar-nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                <i className="icon-make-group mr-2"></i>
                Connect
              </NavLink>

              <div className="dropdown-menu dropdown-menu-right dropdown-content wmin-md-350">
                <div className="dropdown-content-body p-2">
                  <div className="row no-gutters">
                    <div className="col-12 col-sm-4">
                      <NavLink
                        to=""
                        className="d-block text-default text-center ripple-dark rounded p-3"
                      >
                        <i className="icon-github4 icon-2x"></i>
                        <div className="font-size-sm font-weight-semibold text-uppercase mt-2">
                          Github
                        </div>
                      </NavLink>

                      <NavLink
                        to=""
                        className="d-block text-default text-center ripple-dark rounded p-3"
                      >
                        <i className="icon-dropbox text-blue-400 icon-2x"></i>
                        <div className="font-size-sm font-weight-semibold text-uppercase mt-2">
                          Dropbox
                        </div>
                      </NavLink>
                    </div>

                    <div className="col-12 col-sm-4">
                      <NavLink
                        to=""
                        className="d-block text-default text-center ripple-dark rounded p-3"
                      >
                        <i className="icon-dribbble3 text-pink-400 icon-2x"></i>
                        <div className="font-size-sm font-weight-semibold text-uppercase mt-2">
                          Dribbble
                        </div>
                      </NavLink>

                      <NavLink
                        to=""
                        className="d-block text-default text-center ripple-dark rounded p-3"
                      >
                        <i className="icon-google-drive text-success-400 icon-2x"></i>
                        <div className="font-size-sm font-weight-semibold text-uppercase mt-2">
                          Drive
                        </div>
                      </NavLink>
                    </div>

                    <div className="col-12 col-sm-4">
                      <NavLink
                        to=""
                        className="d-block text-default text-center ripple-dark rounded p-3"
                      >
                        <i className="icon-twitter text-info-400 icon-2x"></i>
                        <div className="font-size-sm font-weight-semibold text-uppercase mt-2">
                          Twitter
                        </div>
                      </NavLink>

                      <NavLink
                        to=""
                        className="d-block text-default text-center ripple-dark rounded p-3"
                      >
                        <i className="icon-youtube text-danger icon-2x"></i>
                        <div className="font-size-sm font-weight-semibold text-uppercase mt-2">
                          Youtube
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                to=""
                className="navbar-nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                <i className="icon-cog3"></i>
                <span className="d-md-none ml-2">Settings</span>
              </NavLink>

              <div className="dropdown-menu dropdown-menu-right">
                <NavLink to="" className="dropdown-item">
                  <i className="icon-user-lock"></i> Account security
                </NavLink>
                <NavLink to="" className="dropdown-item">
                  <i className="icon-statistics"></i> Analytics
                </NavLink>
                <NavLink to="" className="dropdown-item">
                  <i className="icon-accessibility"></i> Accessibility
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink to="" className="dropdown-item">
                  <i className="icon-gear"></i> All settings
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/*secondary navbar */}

      {/* page header */}
      <PageHeader />
    </>
  );
};

export default Navbar;
