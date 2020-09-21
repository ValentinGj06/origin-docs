(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{365:function(e,n,a){"use strict";a.r(n);var s=a(43),t=Object(s.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"access-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-control"}},[e._v("#")]),e._v(" Access Control")]),e._v(" "),a("p",[e._v("Role/Permission control has been build with spatie/laravel-permission package.")]),e._v(" "),a("p",[e._v("Origin has other access features as well:")]),e._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features:")]),e._v(" "),a("ul",[a("li",[e._v("Register/Login/Logout/Password Reset")]),e._v(" "),a("li",[e._v("Account Confirmation By E-mail (need to be configured)")]),e._v(" "),a("li",[e._v("Resend Confirmation E-mail (need to be configured)")]),e._v(" "),a("li",[e._v("Option for Manual Account Confirmation by Admin")]),e._v(" "),a("li",[e._v("Enable/Disable Registration")]),e._v(" "),a("li",[e._v("Single Login (Logout all other devices)")]),e._v(" "),a("li",[e._v("Clear User Session")]),e._v(" "),a("li",[e._v("Configurable Password History")]),e._v(" "),a("li",[e._v("Password Expiration")]),e._v(" "),a("li",[e._v("Administrator Management")]),e._v(" "),a("li",[e._v("User Index")]),e._v(" "),a("li",[e._v("Activate/Deactivate Users")]),e._v(" "),a("li",[e._v("Soft & Permanently Delete Users")]),e._v(" "),a("li",[e._v("Resend User Confirmation E-mails (need to be configured)")]),e._v(" "),a("li",[e._v("Change Users Password")]),e._v(" "),a("li",[e._v("Create/Manage Roles")]),e._v(" "),a("li",[e._v("Manage Users Roles/Permissions")]),e._v(" "),a("li",[e._v("Clear User Session")])]),e._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("[\n    // Whether the registration captcha is on or off\n    'contact' => env('CONTACT_CAPTCHA_STATUS', false),\n    'registration' => env('REGISTRATION_CAPTCHA_STATUS', false),\n    'login' => env('LOGIN_CAPTCHA_STATUS', false),\n],\n\n// Whether or not registration is enabled\n'registration' => env('ENABLE_REGISTRATION', true),\n\n// Configurations for the user\n'users' => [\n    // Whether or not the user has to confirm their email when signing up\n    'confirm_email' => env('CONFIRM_EMAIL', false),\n\n    // Whether or not the users email can be changed on the edit profile screen\n    'change_email' => env('CHANGE_EMAIL', false),\n\n    // The name of the super administrator role\n    'admin_role' => 'administrator',\n\n    // The default role all new registered users get added to\n    'default_role' => 'user',\n\n    /*\n     * Whether or not new users need to be approved by an administrator before logging in\n     * If this is set to true, then confirm_email is not in effect\n     */\n    'requires_approval' => env('REQUIRES_APPROVAL', false),\n\n    // Login username to be used by the controller.\n    'username' => 'email',\n\n    /*\n     * When active, a user can only have one session active at a time\n     * That is all other sessions for that user will be deleted when they log in\n     * (They can only be logged into one place at a time, all others will be logged out)\n     * AuthenticateSession middleware must be enabled\n     */\n    'single_login' => env('SINGLE_LOGIN', true),\n\n    /*\n     * How many days before users have to change their passwords\n     * false is off\n     */\n    'password_expires_days' => env('PASSWORD_EXPIRES_DAYS', 30),\n\n    /*\n     * The number of most recent previous passwords to check against when changing/resetting a password\n     * false is off which doesn't log password changes or check against them\n     */\n    'password_history' => env('PASSWORD_HISTORY', 3),\n],\n\n// Configuration for roles\n'roles' => [\n    // Whether a role must contain a permission or can be used standalone as a label\n    'role_must_contain_permission' => true,\n],\n")])])]),a("h2",{attrs:{id:"middleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#middleware"}},[e._v("#")]),e._v(" Middleware")]),e._v(" "),a("p",[e._v("Both permission middleware from the spatie/laravel-permission package are used from their default locations and not extended, but you are free to extend them.")]),e._v(" "),a("p",[e._v("The admin middleware is specified in app\\Http\\Kernel.php and states that anyone trying to access the routes in the following closure must:")]),e._v(" "),a("p",[e._v("Be logged in\nHave the view-backend permission associated with one of their roles.\nBe subject to being forced to change your password after X number of days.\nIt currently wraps all backend routes by default.")]),e._v(" "),a("p",[e._v("Note: If you remove the admin middleware from the backend routes, anyone will be able to access the backend unless you specify elsewhere.")])])}),[],!1,null,null,null);n.default=t.exports}}]);