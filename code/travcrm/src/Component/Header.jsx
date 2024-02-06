import React from 'react'

const Header = () => {
  return (
	<>
	{/* // <!-- Main navbar --> */}
	<div class="navbar navbar-expand-md navbar-dark bg-indigo">
			<div class="navbar-brand wmin-200">
				<a href="index.html" class="d-inline-block">
					<img src="global_assets/images/logo_light.png" alt="" />
				</a>
			</div>

			<div class="d-md-none">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
					<i class="icon-tree5"></i>
				</button>
				<button class="navbar-toggler sidebar-mobile-main-toggle" type="button">
					<i class="icon-paragraph-justify3"></i>
				</button>
			</div>

			<div class="collapse navbar-collapse" id="navbar-mobile">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a href="/#" class="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
							<i class="icon-paragraph-justify3"></i>
						</a>
					</li>

					<li class="nav-item dropdown">
						<a href="/#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<img src="global_assets/images/lang/gb.png" class="img-flag mr-2" alt="" />
							English
						</a>

						<div class="dropdown-menu">
							<a href="/#" class="dropdown-item english"><img src="global_assets/images/lang/gb.png" class="img-flag" alt="" /> English</a>
							<a href="/#" class="dropdown-item ukrainian"><img src="global_assets/images/lang/ua.png" class="img-flag" alt="" /> Українська</a>
							<a href="/#" class="dropdown-item deutsch"><img src="global_assets/images/lang/de.png" class="img-flag" alt="" /> Deutsch</a>
							<a href="/#" class="dropdown-item espana"><img src="global_assets/images/lang/es.png" class="img-flag" alt="" /> España</a>
							<a href="/#" class="dropdown-item russian"><img src="global_assets/images/lang/ru.png" class="img-flag" alt="" /> Русский</a>
						</div>
					</li>
				</ul>

				<span class="navbar-text ml-md-auto mr-md-3">
					<span class="badge bg-light shadow-1 text-indigo-700">Active</span>
				</span>

				<ul class="navbar-nav">
					<li class="nav-item dropdown">
						<a href="/#" class="navbar-nav-link dropdown-toggle caret-0" data-toggle="dropdown">
							<i class="icon-bell2"></i>
							<span class="d-md-none ml-2">Activity</span>
							<span class="badge badge-pill badge-mark border-orange-400 ml-auto ml-md-0"></span>
						</a>

						<div class="dropdown-menu dropdown-menu-right dropdown-content wmin-md-350">
							<div class="dropdown-content-header">
								<span class="font-weight-semibold">Latest activity</span>
								<a href="/#" class="text-default"><i class="icon-search4 font-size-base"></i></a>
							</div>

							<div class="dropdown-content-body dropdown-scrollable">
								<ul class="media-list">
									<li class="media">
										<div class="mr-3">
											<a href="/#" class="btn bg-success-400 rounded-round btn-icon"><i class="icon-mention"></i></a>
										</div>

										<div class="media-body">
											<a href="/#">Taylor Swift</a> mentioned you in a post "Angular JS. Tips and tricks"
											<div class="font-size-sm text-muted mt-1">4 minutes ago</div>
										</div>
									</li>

									<li class="media">
										<div class="mr-3">
											<a href="/#" class="btn bg-pink-400 rounded-round btn-icon"><i class="icon-paperplane"></i></a>
										</div>

										<div class="media-body">
											Special offers have been sent to subscribed users by <a href="/#">Donna Gordon</a>
											<div class="font-size-sm text-muted mt-1">36 minutes ago</div>
										</div>
									</li>

									<li class="media">
										<div class="mr-3">
											<a href="/#" class="btn bg-blue rounded-round btn-icon"><i class="icon-plus3"></i></a>
										</div>

										<div class="media-body">
											<a href="/#">Chris Arney</a> created a new <span class="font-weight-semibold">Design</span> branch in <span class="font-weight-semibold">Limitless</span> repository
											<div class="font-size-sm text-muted mt-1">2 hours ago</div>
										</div>
									</li>

									<li class="media">
										<div class="mr-3">
											<a href="/#" class="btn bg-purple-300 rounded-round btn-icon"><i class="icon-truck"></i></a>
										</div>

										<div class="media-body">
											Shipping cost to the Netherlands has been reduced, database updated
											<div class="font-size-sm text-muted mt-1">Feb 8, 11:30</div>
										</div>
									</li>

									<li class="media">
										<div class="mr-3">
											<a href="/#" class="btn bg-warning-400 rounded-round btn-icon"><i class="icon-comment"></i></a>
										</div>

										<div class="media-body">
											New review received on <a href="/#">Server side integration</a> services
											<div class="font-size-sm text-muted mt-1">Feb 2, 10:20</div>
										</div>
									</li>

									<li class="media">
										<div class="mr-3">
											<a href="/#" class="btn bg-teal-400 rounded-round btn-icon"><i class="icon-spinner11"></i></a>
										</div>

										<div class="media-body">
											<strong>January, 2018</strong> - 1320 new users, 3284 orders, $49,390 revenue
											<div class="font-size-sm text-muted mt-1">Feb 1, 05:46</div>
										</div>
									</li>
								</ul>
							</div>

							<div class="dropdown-content-footer bg-light">
								<a href="/#" class="text-grey mr-auto">All activity</a>
								<div>
									<a href="/#" class="text-grey" data-popup="tooltip" title="Clear list"><i class="icon-checkmark3"></i></a>
									<a href="/#" class="text-grey ml-2" data-popup="tooltip" title="Settings"><i class="icon-gear"></i></a>
								</div>
							</div>
						</div>
					</li>

					<li class="nav-item dropdown dropdown-user">
						<a href="/#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<img src="global_assets/images/placeholders/placeholder.jpg" class="rounded-circle" alt="" />
							<span>Victoria</span>
						</a>

						<div class="dropdown-menu dropdown-menu-right">
							<a href="/#" class="dropdown-item"><i class="icon-user-plus"></i> My profile</a>
							<a href="/#" class="dropdown-item"><i class="icon-coins"></i> My balance</a>
							<a href="/#" class="dropdown-item"><i class="icon-comment-discussion"></i> Messages <span class="badge badge-pill bg-blue ml-auto">58</span></a>
							<div class="dropdown-divider"></div>
							<a href="/#" class="dropdown-item"><i class="icon-cog5"></i> Account settings</a>
							<a href="/#" class="dropdown-item"><i class="icon-switch2"></i> Logout</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
		{/* // <!-- main end --> */}
		{/* <!-- Alternative navbar --> */}
		<div class="navbar navbar-expand-md navbar-light">
			<div class="text-center d-md-none w-100">
				<button type="button" class="navbar-toggler dropdown-toggle" data-toggle="collapse" data-target="#navbar-second">
					<i class="icon-unfold mr-2"></i>
					Alternative navbar
				</button>
			</div>

			<div class="navbar-collapse collapse" id="navbar-second">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a href="/#" class="navbar-nav-link legitRipple">
							<i class="icon-git-branch mr-2"></i>
							Branches
						</a>
					</li>
					<li class="nav-item">
						<a href="/#" class="navbar-nav-link legitRipple">
							<i class="icon-git-merge mr-2"></i>
							Merges
							<span class="badge badge-pill bg-warning-400 position-static ml-auto ml-md-2">5</span>
						</a>
					</li>
					<li class="nav-item">
						<a href="/#" class="navbar-nav-link legitRipple">
							<i class="icon-git-pull-request mr-2"></i>
							Pull Requests
						</a>
					</li>
				</ul>

				<ul class="navbar-nav ml-md-auto">
					<li class="nav-item">
						<a href="/#" class="navbar-nav-link legitRipple">
							<i class="icon-repo-forked mr-2"></i>
							Repositories
							<span class="badge badge-pill bg-indigo-400 position-static ml-auto ml-md-2">28</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
		{/* <!-- Alternative navbar  End--> */}
	</>





  )
}

export default Header