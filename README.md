
# Match Making Algorithm - Food Delievery App UseCase

This is a simple Match Making Algorithm example using MongoDB and Node.js,GraphQL

# :ledger: Index

- [About](#beginner-about)
- [Setup](#nut_and_bolt-setup)
  - [Pre Requisites](#notebook-pre-requisites)
  - [Development Environment](#milky_way-development-environment)
  - [File Structure](#file_folder-file-structure)
  - [Build](#wrench-build)
- [Development](#hammer-development)
  - [MongoDB](#floppy_disk-mongodb)
  - [Queries](#mag_right-queries)
  - [Mutations](#mag-mutations)
  - [Deployment](#rocket-deployment)
  - [Possible Improvements](#chart_with_upwards_trend-possible-improvements)
- [Guideline](#exclamation-guideline)
  - [Branches](#cactus-branches)
- [Resources](#page_facing_up-resources)

# :beginner: About

About the service.

# :nut_and_bolt: Setup

### :notebook: Pre Requisites

Following are the pre-requisites you need to have in order to understand and work with this project. You don't have to be an expert in them, but a general idea will help you in the long run.

-   **Nodejs**
-   **MongoDb**
-   **GraphQL**
-   **Git**

### :milky_way: Development Environment

Also, in order to build this project, you need need to have the following tools installed on your system.

-   **Nodejs** (Recommended to use NVM with `v12.6.0` as default version.) 
-   **NPM**
-   **MongoDb**
-   **Git**

Once you have all the tools installed on your system, you can now clone the repository
and install the node modules.

``` bash
$ git clone https://github.com/ganeshmani/foodmonster
$ cd foodmonster
$ npm install
```

### :file_folder: File Structure

```
.
├── index.js
├── models
    ├── Restaurant.js
    ├── User.js
├── resolvers
    ├── addRestaurant.js
    ├── createUser.js
    ├── getAllRestaurant.js
    ├── loginUser.js
    ├── searchRestaurant.js
├── resolvers   
    ├── common.js
    ├── Restaurent.js
    ├── User.js
├── package-lock.json
├── .babelrc   
└── README.md

```

 **No** | **File/Directory Name** | **Description**
----|---------------------|------------
 1  | **.gitignore** | To ignore files from version control
 2  | **.bablerc** | Project wide configuration for bable


**Steps to create a pull request**

1.  Make a PR to `master` branch. It is really important that you make a PR and not directly commit to master, as it will keep master relatively stable, and will allow other team members to review your changes and be on the same page as you are. It will also help you learn from the other team members.
2.  Comply with the best practices and guidelines.
3.  Once the review is done and no changes are requested, it can be merged into master.  
4.  Delete the branch once it is merged into master.

> To keep the development fast, at least in the initial stage, the team needs to make sure that every PR is reviewed within 24 hours.


# :page_facing_up: Resources

- [graphql](https://cloudnweb.dev/2019/06/graphql-with-apollo-server-and-express-graphql-series-part-1/)