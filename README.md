# renopacker

biolerplate for Rails & webpack project 

includes
* TypeScript
* React

## how to setup

```
$ bin/docker-setup
$ docker-compose up
```

## sandbox
A sandbox page might help you when you work with Renopacker at fisrt.

after `docker-compose up`, open (http://localhost:3002/sandbox) .

the page above includes

* HTML template `app/views/sandbox/index.html.erb`
* bundled TypeScript from `app/assets/javascripts/entrypoints/sandbox.ts`
* bundled SASS from `app/assets/stylesheets/sandbox.scss` 
* bundled images from `app/assets/images`

# LICENSE
This software is released under the MIT License, see the license file.
