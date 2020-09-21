# Access Control
Role/Permission control has been build with spatie/laravel-permission package.

Origin has other access features as well:

## Features:

- Register/Login/Logout/Password Reset
- Account Confirmation By E-mail (need to be configured)
- Resend Confirmation E-mail (need to be configured)
- Option for Manual Account Confirmation by Admin
- Enable/Disable Registration
- Single Login (Logout all other devices)
- Clear User Session
- Configurable Password History
- Password Expiration
- Administrator Management
- User Index
- Activate/Deactivate Users
- Soft & Permanently Delete Users
- Resend User Confirmation E-mails (need to be configured)
- Change Users Password
- Create/Manage Roles
- Manage Users Roles/Permissions
- Clear User Session

## Configuration

    [
        // Whether the registration captcha is on or off
        'contact' => env('CONTACT_CAPTCHA_STATUS', false),
        'registration' => env('REGISTRATION_CAPTCHA_STATUS', false),
        'login' => env('LOGIN_CAPTCHA_STATUS', false),
    ],

    // Whether or not registration is enabled
    'registration' => env('ENABLE_REGISTRATION', true),

    // Configurations for the user
    'users' => [
        // Whether or not the user has to confirm their email when signing up
        'confirm_email' => env('CONFIRM_EMAIL', false),

        // Whether or not the users email can be changed on the edit profile screen
        'change_email' => env('CHANGE_EMAIL', false),

        // The name of the super administrator role
        'admin_role' => 'administrator',

        // The default role all new registered users get added to
        'default_role' => 'user',

        /*
         * Whether or not new users need to be approved by an administrator before logging in
         * If this is set to true, then confirm_email is not in effect
         */
        'requires_approval' => env('REQUIRES_APPROVAL', false),

        // Login username to be used by the controller.
        'username' => 'email',

        /*
         * When active, a user can only have one session active at a time
         * That is all other sessions for that user will be deleted when they log in
         * (They can only be logged into one place at a time, all others will be logged out)
         * AuthenticateSession middleware must be enabled
         */
        'single_login' => env('SINGLE_LOGIN', true),

        /*
         * How many days before users have to change their passwords
         * false is off
         */
        'password_expires_days' => env('PASSWORD_EXPIRES_DAYS', 30),

        /*
         * The number of most recent previous passwords to check against when changing/resetting a password
         * false is off which doesn't log password changes or check against them
         */
        'password_history' => env('PASSWORD_HISTORY', 3),
    ],

    // Configuration for roles
    'roles' => [
        // Whether a role must contain a permission or can be used standalone as a label
        'role_must_contain_permission' => true,
    ],

## Middleware
Both permission middleware from the spatie/laravel-permission package are used from their default locations and not extended, but you are free to extend them.

The admin middleware is specified in app\Http\Kernel.php and states that anyone trying to access the routes in the following closure must:

Be logged in
Have the view-backend permission associated with one of their roles.
Be subject to being forced to change your password after X number of days.
It currently wraps all backend routes by default.

Note: If you remove the admin middleware from the backend routes, anyone will be able to access the backend unless you specify elsewhere.