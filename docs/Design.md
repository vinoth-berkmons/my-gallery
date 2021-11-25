## Product Insert Module Assignment

The Problem statement can be found in [here](https://ziphr.co/wp-content/uploads/ZipHR-Front-end-Developer-Task-v2.pdf) document

## Scope

We are building a small Gallery Angular app where one can view the added Albums, Post and Photos depends on the Api response.

## Assumptions

- There is no need of storing any data.
- This task is considerably small and NgRx is not required.

## App Structure
  - common
    - components : this can be used for making re-usable components. eg: Search, Pagination, sorting
    - It's a small App no need to have a shared directives and Pipes 
    - core
      - models
        - common
        - albums
        - photos
        - posts
      - services
        - albums
        - dashboard
        - photos
        - posts

  - layout
    - shared-layout
      - aside
      - breadcrumb
      - header
  - pages
    - albums
    - dashboard
    - photos
    - posts

## Model

The app model can be found inside Core 

## Pages
      The pages can be found inside pages 


## Services

The app Service can be found inside Core 


## Design

The app contains one page but It has multiple components

- Dashboard
  - Dashboard Component 
    - Statistics of the product
    - List the posts which got it from Api
    - List the Photos which got it from Api
  - Product Insert Page
- Posts
  - Post List Component
    - List the posts which got it from Api
  - Post View Component
    - View Single post
- Albums
  - Album List Component
    - List the Album which got it from Api
  - Album View Component
    - View Album of the photos
- Photos
  - Photos List Component
    - List the Photos which got it from Api
  - Photos View Component
    - View Photos of the photos


## Test case
  - Unit test done


 ## IMPROVEMENTS
  - Design can be improved
  - Search, Pagination, SortBy can be reusable component
  
## Pending Task
  - select user and redirect to user page
  - Breadcrumb
