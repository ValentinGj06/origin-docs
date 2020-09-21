# Frontend
## Breadcrumbs
The breadcrumb links in the backend are managed by the `davejamesmiller/laravel-breadcrumbs` package.

The parts to this package integrated are:

- The `config\breadcrumbs.php` file which tells the system which view file to use for the rendering.
- The `views\backend\includes\partials\breadcrumbs.blade.php` file which renders the links.
- The call to render the breadcrumbs.
- The breadcrumb files located in `routes/breadcrumbs`.
- The `resources/views/backend/includes/partials/breadcrumbs.php` file that the plugin looks for to render the links.

Whenever you add new routes to your project, you must add breadcrumb files to go along with them to have them rendered, it is not automatic. Use the existing files for reference.
## Views

#### Backend views directory structure
```
.
├── views
│   ├── backend
│   │   ├── auth
│   │   │   ├── client
│   │   │   │	├── includes	
│   │   │   │	│	└── actions.blade.php
│   │   │	│   ├── index-table.blade.php
│   │   │	│   ├── index.blade.php
│   │   │   │	└── management.blade.php
│   │   │   ├── role
│   │   │   │	├── includes
│   │   │	│	│   ├── actions.blade.php	
│   │   │   │	│	└── header-buttons.blade.php
│   │   │	│   ├── create.blade.php
│   │   │	│   ├── edit.blade.php
│   │   │   │	└── index.blade.php
│   │   │   └── user
│   │   │   	├── includes
│   │   │	 	│   ├── actions.blade.php
│   │   │	 	│   ├── breadcrumb-links.blade.php
│   │   │	 	│   ├── confirm.blade.php
│   │   │	 	│   ├── header-buttons.blade.php
│   │   │	 	│   ├── social-buttons.blade.php
│   │   │    	│	└── status.blade.php
│   │   │   	├── show
│   │   │    	│	└── tabs
│   │   │    	│		└── overwiew.blade.php
│   │   │	    ├── change-password.blade.php
│   │   │	    ├── create.blade.php
│   │   │	    ├── deactivated.blade.php
│   │   │	    ├── deleted.blade.php
│   │   │	    ├── edit.blade.php
│   │   │	    ├── index.blade.php
│   │   │   	└── show.blade.php
│   │   ├── includes
│   │   │   ├── partials
│   │   │   │	└── breadcrumbs.blade.php
│   │   │   ├── aside.blade.php
│   │   │   ├── footer.blade.php
│   │   │   ├── header.blade.php
│   │   │   └── sidebar.blade.php
│   │   ├── layouts
│   │   │   ├── client
│   │   │	│   ├── modal
│   │   │	│ 	│   ├── edit-modal.blade.php
│   │   │   │ 	│	└── view-modal.blade.php
│   │   │ 	│   ├── app-advanced.blade.php
│   │   │ 	│   ├── app.blade.php
│   │   │  	│	└── filter-section.blade.php
│   │   │   └── app.blade.php
│   │   ├── categories-tags.blade.php
│   │   └── dashboard.blade.php
│   │ 
│   ├── frontend
│   ├── includes
│   └── vendor
│ 
└──
```

#### Frontend views directory structure
```
.
├── views
│   ├── backend
│   ├── frontend
│   │   ├── auth
│   │   │   ├── includes
│   │   │   │	└── socialite.blade.php
│   │   │   ├── passwords
│   │   │	│   ├── email.blade.php
│   │   │	│   ├── expired.blade.php
│   │   │   │	└── reset.blade.php
│   │   │   ├── login.blade.php
│   │   │   └── register.blade.php
│   │   ├── includes
│   │   │   └── nav.blade.php
│   │   ├── layouts
│   │   │   └── app.blade.php
│   │   ├── mail
│   │   │   ├── contact-text.blade.php
│   │   │   └── contact.blade.php
│   │   ├── user
│   │   │   ├── account
│   │   │	│   └── tabs
│   │   │	│ 	    ├── change-password.blade.php
│   │   │	│ 	    ├── profile.blade.php
│   │   │   │ 		└── edit.blade.php
│   │   │   ├── account.blade.php
│   │   │   └── dashboard.blade.php
│   │   ├── contact.blade.php
│   │   └── index.blade.php
│   │ 
│   ├── includes
│   └── vendor
│ 
└──
```
#### Includes directory structure
```
.
├── views
│   ├── backend
│   ├── frontend
│   └── includes
│       └── partials
│           ├── ga.blade.php
│           ├── lang.blade.php
│           ├── logged-in-as.blade.php
│           ├── messages.blade.php
│           └── read-only.blade.php
│ 
└
```
## Assets
#### public (compiled files and some custom assets)
- **js**
	- custom.js
		Has the options and methods for table, filters, view modal etc.
		- *`queryParams()` method return params object with all query params that will be send to `filter-clients` api*
		- *`bootstrapTable('refreshOptions', {})` is a method for reload the data in the table. We are using `bootstrap-table/dist/bootstrap-table` package. For more info you can refer to [bootstrap-table](https://bootstrap-table.com/).*
		- *`getIdSelections()` returns array of row(s) id(s) of the selected row(s). If no row selected it returns empty array.*
		- *`responseHandler()` return response data.*
		- *`detailFormatter()` return html with additional columns.*
		- *`totalSumFormatter()`*
		- *`viewModal()` method build the data for the view-modal with the client data information.*
		- *`initTable()` initialise the table. We at first destroy the table to be sure that is empty to be populated with the needed data.*
	- custom-lite.js
	- custom-advanced.js
		Has the options and methods for edit modal, call ajax request for update etc.
		- *`operateFormatter()` return html wit action buttons.*
		- *`editModal()` method build the data for the edit-modal with the client data information with the possibility to update.*
	- pdf-export.js
		- *javaScript plugin nedded for exporting PDF documents with the data from html table.*
	- toastr.js
		- *jQuery plugin for `toastr` messages.*
	- xlsx-export.js
		- *plugin nedded for exporting excel documents messages.*

#### resources (not compiled files, needed to compile with webpack & npm)
- **js**
 	- backend:
 		-*after.js* - at this moment is empty. Here you will write the js/jquery or other plugins and scripts that need to be loaded after main `app.js`.
		- *app.js* - CoreUi bootstrap UI template plugin.
		- *before.js* - bootstrap and some plugins.
	- frontend:
		- *app.js* - main JS file, importing bootstrap, vue and some other plugins. Creating main Vue instance and defining components.
		- *clients.js* - import jQuery plugins needed for `Client` views, tables and filter components.
		- *multiselect.js* - jQuery custom script for custom multiselect form field like one that is used for selecting location/city.
		- *pdf-table-auto.js* - jQuery plugin needed for exporting pdf documents.
		- *table-export.js* - jQuery plugin needed for exporting html table.
 	- *bootstrap.js*
	- *plugins.js*

- **lang**
You can have as many as you need languages, only need to translate words in files from English. 
	- en
	- mk -*only few words translated*

- **sass**
	- backend:
		- *app.scss* - main css file for the backend views, importing CoreUi, some other stylesheets and custom scss rules.
	- frontend:
		- *app.scss* - main css file, importing bootstrap, another scss stylesheet and some other plugins. 
		- *clients.scss* - Style css plugins needed for `Client` views, tables and filter components.
		- *multiselect.scss* - SCSS custom stylesheet for custom multiselect form field like one that is used for selecting location/city.

## Components
- **FilterPayInComponent (&lt;filter-pay-in&gt;)**
	- *max_pay_in* prop come from ClientController `index()` and `management()`
	methods. It give us the max pay in of all our clients.
	- *`pay_in` filter input when is applied, sends request into string with two picked values from the range slider, separated with `;`. Than we explode the string into array and build the query in `filterClients()` method, into `ClientController`.
- **FilterWinComponent (&lt;filter-win&gt;)**
	- *max_win* prop come from ClientController `index()` and `management()`
	methods. It give us the max win of all our clients.
	- *`win` filter input when is applied, sends request into string with two picked values from the range slider, separated with `;`. Than we explode the string into array and build the query in `filterClients()` method, into `ClientController`.
- **FilterRegDateComponent (&lt;filter-reg-date&gt;)**
	We build input with name `datefilter` and we used `daterangepicker/daterangepicker` package. More about package at [daterangepicker](https://daterangepicker.com/). Then in `custom.js` inside `public/js/` directory, we return it the value with `queryParams()` inside params object with others filter params if we have some.
- **FilterLocationComponent (&lt;filter-location&gt;)**
	Into this component we pass `city` props as array in select options, and while selecting one or more option(s) we bind it to `from_city` array. Then in `custom.js` inside `public/js/` directory, we return it the value with `queryParams()` inside params object with others filter params if we have some.
- **VueTagsComponent (&lt;vue-tags&gt;)**
	- *`setSelectedTags(tags)` method update data object `selectedTags` when we invoke in `custom-advenced.js` script caling `window.app.setSelectedTags(row.tags)` passing data tags in needed format*
    - *`setExistingTag(response)` method update data object `existingTags` when we invoke in `custom-advenced.js` script caling `window.app.setExistingTag(res)` passing response data with existing tags in needed format*
- **VueCategoriesManagementComponent (&lt;vue-categories-management&gt;)**
	This component is used to show the categories. It has also options for creating a new category, editing and deleting the existing one.
	- *`displayCategories()` method make axios get request to api and return all categories.*
	- *`createCategory()` method make axios post request to api, insert the category to database and return all categories with the new one created.*
	- *With `@dblclick="enableEditingCategory(category.name, category.editing = true)` we add possibility, with double click on the category wrapper element, we transform into text input so can we edit the name of the category. With `@dblclick` event we firing the `enableEditingCategory()` method with parameters category name and editing as true.*
	- *`Vue.directive('click-outside', {})` with this custom directive we listen for event when we click outisde of the category wrapper element and firing `disableEditingCategory()` method and we cancel the editing window. `disableEditingCategory()` method is aslo called by clicking on `Cancel` button*
	- *`saveEditCategory()` method update the existing category making axios request*.
	- *`deleteCategory()` method call `showMsgConfirm()` method so you need to confirm if you want to proceed to the axios delete request and deleting the category. When delete request is send api return response with the name of the category and we show `toastr` `success` message.*
- **VueTagsManagementComponent (&lt;vue-tags-management&gt;)**
	This component is used to show the tags. It has also options for creating a new tag, editing and deleting the existing one.
	- *`displayTags()` method make axios get request to api and return all tags.*
	- *`createTag()` method make axios post request to api, insert the tag to database and return all tags with the new one created.*
	- *With `@dblclick="enableEditingTag(tag.name, tag.editing = true)` we add possibility, with double click on the tag wrapper element, we transform into text input so can we edit the name of the tag. With `@dblclick` event we firing the `enableEditingTag()` method with parameters tag name and editing as true.*
	- *`Vue.directive('click-outside', {})` with this custom directive we listen for event when we click outisde of the tag wrapper element and firing `disableEditingTag()` method and we cancel the editing window. `disableEditingTag()` method is aslo called by clicking on `Cancel` button*
	- *`saveEditTag()` method update the existing tag making axios request*.
	- *`deleteTag()` method call `showMsgConfirm()` method so you need to confirm if you want to proceed to the axios delete request and deleting the tag. When delete request is send api return response with the name of the tag and we show `toastr` `success` message.*
- **CounterCardComponent (&lt;counter-card&gt;)**
	Parent component, render as many "counter" cards as you have data items in total object builded from axios get request. Shows the total data of the day (or the day before).
- **CounterCardItemComponent (&lt;counter-card-item&gt;)**
	Is the child component of `CounterCardComponent` that has the design for card item with reusable data.
	
***The next two are custom table components:***
	- *topTen()* method is used by both components below. This method returns 5 (top) clients for both, ordered by `pay_in` or `win` column respectively.
- **VueTopTenComponent (&lt;top-ten&gt;)**
	Here we send `pay_in` param as `true`
```
axios.get('api/top-ten', {
    params: {
      pay_in: true
    }
})
```

- **VueTopTenWinComponent (&lt;top-ten-win&gt;)**
	Here we send `win` param as `true`
```
axios.get('api/top-ten', {
	params: {
	  win: true
	}
})
```

### Charts

Charts components has been build using the `vue-chartjs` package.
`vue-chartjs` is a wrapper for `Chart.js` in `Vue`.
You can easily create reusable chart components. More about at [vue-chartjs](https://vue-chartjs.org/).

Data for charts components and table components comes from the methods by **ChartController**
	*This controller has logic for building `api` for `axios` calls from chart components that are shown at Dashboard page. The `api` responses are modified to return proper data object structure as needed for frontend charts components.*

- **DoughnutChartContainer (&lt;doughnut-chart&gt;)**
	- *clientsByGender()* method returns json response with clients grouped in two parts depending on whether it is male or female. The clients with no(empty) gender value are excluded.
- **LineChartContainer (&lt;line-chart&gt;)**
	- *estimateByCategory()* method returns estimate of profit and loss grouped by category.
- **BarChartContainer (&lt;bar-chart&gt;)**
	- *clientsByAge()* method returns response with clients grouped by age interval.
- **PieChartContainer (&lt;pie-chart&gt;)**
	- *clientsByCity()* method returns response with number of clients per city/location.
- **GrowthLineChartContainer (&lt;growth-chart&gt;)**
	- shows total profit growth, per year.