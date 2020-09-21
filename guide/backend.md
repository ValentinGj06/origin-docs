# Backend

## Controllers

All of the controllers live in the default Laravel controller location of app\Http\Controllers and follow a namespacing convention of the folders they're in.

#### Backend/Auth/Role/RoleController
*This controller return response from `index()` method with all existing roles.
`create()` method return view for creating new role, with all permissions (if are created).
`store()` method insert data to associated tables.
`edit()` to hit that method user need to be admin or has permissions to edit Roles & Permissions. Method return view with the role data you like to edit.*

#### Backend/Auth/User/UserPasswordController
*This controller return a view with edit method with the given user. In the `update()` method we updating the user password calling the metod `updatePassword()` from `userRepository` and redirect back to users page.*

#### Backend/Auth/User/UserSessionController
*Here we are using method `clearSession()` to logout user from the session or in another words delete the session*

#### Backend/Auth/User/UserStatusController
*In this controller is the logic for get Deactivated or Deleted users and managing the status of the user, marking as deactivated or delete the user.*

#### Backend/Auth/User/UserController
*This controller return view and response from `index()` method with all existing users.
`create()` method return view for creating new user, with all roles & permissions (if are created).
`store()` method insert data to associated tables.*

#### Frontend/Auth/LoginController
*Has essentiall logic needed to show the login form, validate login fields, check if user is confirmed and logout method.*

#### Frontend/Auth/ForgotPasswordController
*.*

#### Frontend/Auth/ResetPasswordController
*`showResetForm()` show the form for writing the new password, checking the token in the link.
`reset()` method invoke the `reserPassword()` method from the same controller and perform an action updating the password and the timestamp when is changed/update than we return response depending if password has been reset successfully or not*

#### Frontend/Auth/PasswordExpiredController
*.*

#### Frontend/Auth/UpdatePasswordController
*.*

#### Frontend/User/ProfileController
*This controller has one method `update()` and use userRepository to perform request to user table in the database, so user can update his profile info and change password*

#### CategoryController
*This controller return response from `index()` method with all existing categories needed for categories component inside Categories & Tags menu page. Also it has a logic for inserting, updating and deleting category and returning response with created, edited or deleted category(-ies). We are passing the `$request` and `$category` model.
`store()`, `update()` and `destroy()` methods return json response with the `id` and `name` of created, updated or deleted category(-ies).*

#### ChartController
*This controller has logic for building `api` for `axios` calls from chart components that are shown at Dashboard page. The `api` responses are modified to return proper data object structure as needed for frontend charts components.*

#### ClientController
*In this controller has logic for listing and managing clients data.*
- *`index()` method return index.blade.php view inside `backend/auth/client/` with needed variables data.*
- *`management()` method return management.blade.php view inside `backend/auth/client/` with needed variables data.*
- *`filterClients()` building the query logic for filtering the data depending on user interaction. Some of the data(request) send from filters inputs/selects come as array.*
- *`categoryTag()` return json response with existing categories and tags needed*
- *`update()` method is called when user change client data information. Inside has a validation logic with `validateClient()` method. With `sync(Array :id)` method at the end we attach/update categories or tags for client passing an array of id's*
- *`validateClient()` method has validation rules for request(ed) fields that user try to update.*

#### TagController
*This controller return response from `index()` method with all existing tags needed for tags component inside Categories & Tags menu page. Also it has a logic for inserting, updating and deleting tag and returning response with created, edited or deleted tag(s).
`store()`, `update()` and `destroy()` methods return json response with the `id` and `name` of created, updated or deleted tag(s).*

#### LocationController
*This controller return response from `index()` method with data for locations (filtered accordingly) to draw the needed tables.
`growth()` methods return json response with the similar data in different shape needed for the `GrowthLineChartContainer` chart and `CounterCardComponent` component.
Inside this controler data can be pulled from both ways (api and database). Choose what you need commenting/un-commenting both accordingly.
To separate data into regions we use `regions.json` file that has addresses distributed in 17 regions (+1 that has the rest addresses who doesn't belong in that file)*

## Models

- **Category**
	*`clients()` method define belongsToMany relationship with model Client*
- **Client**
	- *`clientInfo()` method define hasOne relationship with model ClientInfo*
	- *`clientDetail()` method define hasOne relationship with model ClientDetail*
	- *`tags()` method define belongsToMany relationship with model Tag*
	- *`categories()` method define belongsToMany relationship with model Category*

- **ClientDetail**
	*`client()` method define belongsTo relationship with model Client*
- **ClientInfo**
	*`client()` method define belongsTo relationship with model Client*
- **Tag**
	*`clients()` method define belongsToMany relationship with model Client*
- **Location**
	*`tickets()` method define hasMany relationship with model Ticket*
	*`entries()` method define hasMany relationship with model Entries*
- **Ticket**
	*`location()` method define belongsTo relationship with model Location*
- **Entries**
	*`location()` method define belongsTo relationship with model Location*
