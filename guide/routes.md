# Routes
The only stock route file modified is routes\web.php

Lets look at web.php, line by line:

	Route::get('lang/{lang}', 'LanguageController@swap');
The first line gets envoked anytime the user chooses a language from the language picker dropdown. The LanguageController's `swap()` method switches the language code in the session and refreshes the page for it to take effect.

	Route::group(['namespace' => 'Frontend', 'as' => 'frontend.'], function () {
    	includeRouteFiles(__DIR__ . '/frontend/');
	});

- This section registers all of the frontend routes, such as login, register, etc.
- The namespaces of the routes indicate the folder structure. In the above case the routes that will be included live in routes\frontend.
- The as property prepends the value to all routes inside the closure, so in the above case all included route names will be prepended with frontend.
- The `includeRouteFiles()` is a helper function located in app\helpers.php and autoloaded by composer.

This takes all files in the specified directory and includes them in the closure so you can add new routes without having to touch the web.php routes file.

	Route::group(['namespace' => 'Backend', 'prefix' => 'admin', 'as' => 'admin.', 'middleware' => 'admin'], function () {
		includeRouteFiles(__DIR__ . '/backend/');
	});

- This section registers all of the backend routes, such as admin dashboard, user management, etc.
- It is nearly identical as the frontend routes with the addition of the admin middleware and prefix.
- The namespaces of the routes indicate the folder structure. In the above case the routes that will be included live in routes\backend.
- The as property prepends the value to all routes inside the closure, so in the above case all included route names will be prepended with admin.
- The prefix property prepends the value before all of the URL's of the routes inside the closure, so in the above case all route URL's will be prepended with admin/.
- The admin middleware is specified in app\Http\Kernel.php and states that anyone trying to access the routes in the following closure must:
	- *Be logged in.*
	- *Have the view-backend permission associated with one of their roles or by itself.*

Note: Most route resources use Laravel's Route/Model Binding which you will see as well in the controller methods.

	// All route names are prefixed with 'admin.auth'.
	Route::group([
	    'prefix' => 'auth',
	    'as' => 'auth.',
	    'namespace' => 'Auth',
	    'middleware' => 'role:'.config('access.users.admin_role'),
	], function () {
	    // User Management
	    Route::group(['namespace' => 'User'], function () {
	        // User Status'
	        Route::get('user/deactivated', [UserStatusController::class, 'getDeactivated'])->name('user.deactivated');
	        Route::get('user/deleted', [UserStatusController::class, 'getDeleted'])->name('user.deleted');

See [UserStatusController](backend.html#backend-auth-user-userstatuscontroller)

	        // User CRUD
	        Route::get('user', [UserController::class, 'index'])->name('user.index');
	        Route::get('user/create', [UserController::class, 'create'])->name('user.create');
	        Route::post('user', [UserController::class, 'store'])->name('user.store');

See [UserController](backend.html#backend-auth-user-usercontroller)

	        // Specific User
	        Route::group(['prefix' => 'user/{user}'], function () {
	            // User
	            Route::get('/', [UserController::class, 'show'])->name('user.show');
	            Route::get('edit', [UserController::class, 'edit'])->name('user.edit');
	            Route::patch('/', [UserController::class, 'update'])->name('user.update');
	            Route::delete('/', [UserController::class, 'destroy'])->name('user.destroy');

	            // Status
	            Route::get('mark/{status}', [UserStatusController::class, 'mark'])->name('user.mark')->where(['status' => '[0,1]']);

	            // Password
	            Route::get('password/change', [UserPasswordController::class, 'edit'])->name('user.change-password');
	            Route::patch('password/change', [UserPasswordController::class, 'update'])->name('user.change-password.post');

	            // Session
	            Route::get('clear-session', [UserSessionController::class, 'clearSession'])->name('user.clear-session');

See [UserSessionController](backend.html#backend-auth-user-usersessioncontroller)

	            // Deleted
	            Route::get('delete', [UserStatusController::class, 'delete'])->name('user.delete-permanently');
	            Route::get('restore', [UserStatusController::class, 'restore'])->name('user.restore');
	        });
	    });

See [UserPasswordController](backend.html#backend-auth-user-userpasswordcontroller)

	    // Role Management
	    Route::group(['namespace' => 'Role'], function () {
	        Route::get('role', [RoleController::class, 'index'])->name('role.index');
	        Route::get('role/create', [RoleController::class, 'create'])->name('role.create');
	        Route::post('role', [RoleController::class, 'store'])->name('role.store');

	        Route::group(['prefix' => 'role/{role}'], function () {
	            Route::get('edit', [RoleController::class, 'edit'])->name('role.edit');
	            Route::patch('/', [RoleController::class, 'update'])->name('role.update');
	            Route::delete('/', [RoleController::class, 'destroy'])->name('role.destroy');
	        });
	    });
	});

See [RoleController](backend.html#backend-auth-role-rolecontroller)

****

	/*
	 * Frontend Access Controllers
	 * All route names are prefixed with 'frontend.auth'.
	 */
	Route::group(['namespace' => 'Auth', 'as' => 'auth.'], function () {
	    // These routes require the user to be logged in
	    Route::group(['middleware' => 'auth'], function () {
	        Route::get('logout', [LoginController::class, 'logout'])->name('logout');

	        // These routes can not be hit if the password is expired
	        Route::group(['middleware' => 'password_expires'], function () {
	            // Change Password Routes
	            Route::patch('password/update', [UpdatePasswordController::class, 'update'])->name('password.update');
	        });

See [UpdatePasswordController](backend.html#frontend-auth-updatepasswordcontroller)

	        // Password expired routes
	        Route::get('password/expired', [PasswordExpiredController::class, 'expired'])->name('password.expired');
	        Route::patch('password/expired', [PasswordExpiredController::class, 'update'])->name('password.expired.update');
	    });

See [PasswordExpiredController](backend.html#frontend-auth-passwordexpiredcontroller)

	    // These routes require no user to be logged in
	    Route::group(['middleware' => 'guest'], function () {
	        // Authentication Routes
	        Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
	        Route::post('login', [LoginController::class, 'login'])->name('login.post');

See [LoginController](backend.html#frontend-auth-logincontroller)

	        // Password Reset Routes
	        Route::get('password/reset', [ForgotPasswordController::class, 'showLinkRequestForm'])->name('password.email');
	        Route::post('password/email', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('password.email.post');

See [ForgotPasswordController](backend.html#frontend-auth-forgotpasswordcontroller)

	        Route::get('password/reset/{token}', [ResetPasswordController::class, 'showResetForm'])->name('password.reset.form');
	        Route::post('password/reset', [ResetPasswordController::class, 'reset'])->name('password.reset');
	    });
	});

See [ResetPasswordController](backend.html#frontend-auth-resetpasswordcontroller)


See [ProfileController](backend.html#frontend-user-profilecontroller)


****

    // Client Management - with needed permissions
    Route::group(['middleware' => 'role:'.config('access.users.admin_role')], function () {

        // Client CRUD 
        Route::get('clients-management', [ClientController::class, 'management'])->name('clients-management.index');
        Route::patch('clients/{client}', 'ClientController@update')->name('update');
        Route::post('categoryTag', [ClientController::class, 'categoryTag'])->name('clients.categoryTag');

See [ClientController](backend.html#clientcontroller)

        // Categories & Tags Management
        Route::get('categories-tags', function () {
            return view('backend/categories-tags');
        })->name('categories-tags.index');

        // Categories
        Route::get('api/categories', [CategoryController::class, 'index'])->name('api/categories.index');
        Route::post('api/categories', [CategoryController::class, 'store'])->name('api/categories.store');
        Route::patch('api/update/categories', [CategoryController::class, 'update'])->name('api/categories.update');
        Route::delete('api/categories/{category}', [CategoryController::class, 'destroy'])->name('api/categories.destroy');

See [CategoryController](backend.html#categorycontroller)

        // Tags
        Route::get('api/tags', [TagController::class, 'index'])->name('api/tags.index');
        Route::post('api/tags', [TagController::class, 'store'])->name('api/tags.store');
        Route::patch('api/update/tags', [TagController::class, 'update'])->name('api/tags.update');
        Route::delete('api/tags/{tag}', [TagController::class, 'destroy'])->name('api/tags.destroy');
    });

See [TagController](backend.html#tagcontroller)

This section registers routes, such as cient management, route for updating the client info, getting the categories and tags after updating client info, route for categories & tags view and routes for CRUD for both etc.

    Route::group(['middleware' => 'auth'], function () {

        // Client CRUD
        Route::get('clients', [ClientController::class, 'index'])->name('clients.index');
        Route::get('filter-clients', [ClientController::class, 'filterClients'])->name('clients.filterClients');

See [ClientController](backend.html#clientcontroller)

        /* Charts APi */
        Route::get('admin/api/city', 'ChartController@clientsByCity');
        Route::get('admin/api/gender', 'ChartController@clientsByGender');
        Route::get('admin/api/top-ten', 'ChartController@topTen');
        Route::get('admin/api/age', 'ChartController@clientsByAge');
		Route::get('admin/api/estimate', 'ChartController@estimateByCategory');
	});

See [ChartController](backend.html#chartcontroller)

This section registers routes, such as route for view/list cients, route for filter the clients data, and routes for axios reguests from Chart components shown on Dashboard page.

See [LocationController](backend.html#locationcontroller)

	Route::get('admin/locations/growth', 'LocationController@growth')->name('locations.growth');

    /* Locations APi's */
    Route::get('locations', 'LocationController@index')->name('locations.index');
