## Require:

1. Config mysql

-   Download docker
-   Login Docker Hub in DockerDesktop (or in cmd)
-   Run cmd: docker run --name some-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql
-   Use DBeaver connect to mysql
-   Open DBeaver and create database name: dev_test

    [Youtube Guide](https://youtu.be/kphq2TsVRIs)

2. Run config
    1. npm install
    2. npm run syncdb
    3. npm run seeds

## Library used:

-   express, nodemon, mysql2, dotenv, bcryptjs
