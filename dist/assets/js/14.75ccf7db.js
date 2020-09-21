(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{360:function(t,e,a){"use strict";a.r(e);var i=a(43),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[t._v("#")]),t._v(" Database")]),t._v(" "),a("h2",{attrs:{id:"migrations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrations"}},[t._v("#")]),t._v(" Migrations")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("clients table migration")])]),t._v(" "),a("li",[a("strong",[t._v("client_info table migration")])]),t._v(" "),a("li",[a("strong",[t._v("client_details table migration")])]),t._v(" "),a("li",[a("strong",[t._v("tags table migration")])]),t._v(" "),a("li",[a("strong",[t._v("client_tag table migration")])]),t._v(" "),a("li",[a("strong",[t._v("categories table migration")])]),t._v(" "),a("li",[a("strong",[t._v("category_client table migration")])]),t._v(" "),a("li",[a("strong",[t._v("locations table migration")])]),t._v(" "),a("li",[a("strong",[t._v("tickets table migration")])]),t._v(" "),a("li",[a("strong",[t._v("entries table migration")])])]),t._v(" "),a("h2",{attrs:{id:"seeds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seeds"}},[t._v("#")]),t._v(" Seeds")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Seeds are optional if you like to have default admin account and some starter dumy data\n")])])]),a("h2",{attrs:{id:"insert-or-update-client-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert-or-update-client-tables"}},[t._v("#")]),t._v(" Insert or Update "),a("code",[t._v("Client")]),t._v(" tables")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("We will insert/update "),a("code",[t._v("Client")]),t._v(" tables with external script that first will filter the data from exel or json file or some "),a("code",[t._v("api")]),t._v(". Then the script will insert new rows in the database")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"insert-update-locations-and-tickets-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert-update-locations-and-tickets-tables"}},[t._v("#")]),t._v(" Insert / Update "),a("code",[t._v("Locations")]),t._v(" and "),a("code",[t._v("Tickets")]),t._v(" tables")]),t._v(" "),a("ul",[a("li",[t._v("We make Artisan Command "),a("code",[t._v("UpdateLocationsTicketsTable")]),t._v(" at "),a("code",[t._v("App\\Console\\Commands")]),t._v(" directory. This command will be called like a cron job, first to insert the data until that time, and we need to trigger every day at midnight.")]),t._v(" "),a("li",[t._v("In the "),a("code",[t._v("Kernel")]),t._v(" at "),a("code",[t._v("App\\Console")]),t._v(" directory with method inside "),a("code",[t._v("schedule()")]),t._v(" we register the commands we want to run at specific frequency, for example:\n"),a("code",[t._v("->daily()")]),t._v(" (run the task every day at midnight),\n"),a("code",[t._v("->dailyAt('13:00')")]),t._v(" (run the task every day at 13:00),\n"),a("code",[t._v("->twiceDaily(1, 13)")]),t._v(" (run the task daily at 1:00 & 13:00).")]),t._v(" "),a("li",[t._v("On the server we need to "),a("code",[t._v("create a new cron job")]),t._v(" and write "),a("code",[t._v("cd /path-to-your-project && php artisan schedule:run")]),t._v(".")])]),t._v(" "),a("p",[a("em",[a("strong",[t._v("NOTE:")])]),t._v(" This will run all commands (if we have any) registered inside "),a("code",[t._v("schedule()")]),t._v(" method.")]),t._v(" "),a("h2",{attrs:{id:"insert-update-locations-and-entries-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert-update-locations-and-entries-tables"}},[t._v("#")]),t._v(" Insert / Update "),a("code",[t._v("Locations")]),t._v(" and "),a("code",[t._v("Entries")]),t._v(" tables")]),t._v(" "),a("ul",[a("li",[t._v("We make Artisan Command "),a("code",[t._v("UpdateLocationsEntriesTable")]),t._v(" at "),a("code",[t._v("App\\Console\\Commands")]),t._v(" directory. This command will be called like a cron job, first to insert the data until that time, and we need to trigger every day at midnight.")])]),t._v(" "),a("p",[a("em",[a("strong",[t._v("NOTE:")])]),t._v(" Inside "),a("code",[t._v("LocationControler")]),t._v(" it has method "),a("code",[t._v("test()")]),t._v(". This Method is used for testing the insertion/updating the tables we whant to populate with the two previous artisan commands/cron jobs. Here you can run this method, just update database table fields accordingly, the logic is the same. Run the method in the browser with "),a("code",[t._v("http://example-domain.com/test")]),t._v(' "example-domain.com" is the project IP or domain name.')])])}),[],!1,null,null,null);e.default=s.exports}}]);