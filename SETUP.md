# Setting UP the Project

## Installing Dependency
### Installing Express
```
npm init -y
npm install express
```
### Installing dotenv
```
npm install dotenv
```

### Installing Sequalize and MySQL
```
npm i sequalize mysql2
```

### Creating Database 
``` shell
    sudo mysql -u root
    show databases; // to check databases present inside IT.
    create database 'JEC_quora_db';
    create user 'JEC_user' identified by 'JEC_pass';
    grant all privileges on JEC_quora_db.* to JEC_user;
```
``` shell of mysql->
    exit; // to exit from databse
    mysql -u 'username' -p
        // enter password
    use JEC_quora_db;
```

### Start Server
lt --port 5000
