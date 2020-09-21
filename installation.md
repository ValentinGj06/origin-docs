---
title: Installation
lang: en-US
---

# Installation

* [Manual Installation](#manual-installation)

## Manual Installation

### Requirements

```
PHP >= 7.3.0
BCMath PHP Extension
Ctype PHP Extension
JSON PHP Extension
Mbstring PHP Extension
OpenSSL PHP Extension
PDO PHP Extension
Tokenizer PHP Extension
XML PHP Extension
```
### Installation

#### Step 1 : Clone repository
Clone the repository by running these commands: 
```
cd ~
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_PROJECT
```

**OR make a local copy of your master project in your way.**

#### Step 2 : Install NPM & Composer dependencies 

- Install NPM globally if you haven't installed that already , for more information please refer this [link](https://docs.npmjs.com/getting-started/installing-node)

- After installing NPM globally , run `npm install` inside your cloned folder, it will download all the required dependencies.

- Install composer to your system and run `composer install` inside your cloned folder to install all laravel/php dependencies.

#### Step 3 : Run below commands
Change your current working directory and run your app using below commands:

```
$ cd YOUR_ROOT_FOLDER (ex. origin)
$ cp .env.example .env
```
You will create an `.env` file by running the following command: `cp .env.example .env`. Or alternately you can just copy `.env.example` file to the same folder and re-name it to `.env`.

#### Step 4 : Complete installation & setup database connection

- run command: `php artisan key:generate` to generate a unique application key.

Make changes to your `.env` file with your database server credentials

- Database Host: `YOUR_HOST` // e.g. localhost
- Database Name: `YOUR_DATABASE` // e.g. origin 
- Database Username: `YOUR_USER` // e.g. root
- Database Password: `YOUR_PASSWORD`

- run command: `php artisan migrate` to run the built in migrations to create the database tables.

- OPTIONAL run command: `php artisan db:seed` to seed the database.

#### Step 5 : Storage:link 

After your project is installed you must run this command to link your public storage folder for user files uploads:

`php artisan storage:link` but you can skip for now if you want and run this comand later when you needed.

### Step 6 : Login
Open the link to the domain in the browser (Example: `https://origin.local` or `localhost`).

After your project is installed and you can access it in a browser, click the login button on the right of the navigation bar.

The administrator credentials are:

Username: admin@admin.com

Password: secret