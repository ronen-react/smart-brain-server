# smart-brain-server
A project from udemy course - 'The Complete Web Developer in 2020: Zero to Mastery'
# Notes on postgres commands
#login as psql:
sudo -u postgres psql
#login as ronen:

# create user:
sudo -u postgres createuser --interactive
and then it opens:
Enter name of role to add: ronen
Shall the new role be a superuser? (y/n) y

ALTER USER ronen WITH ENCRYPTED PASSWORD 'password';

# create db:
createdb test

# launch:
psql database-name 
e.g:
psql smart-brain
etc


# delete database:
DROP DATABASE testdb1;



create table:
CREATE TABLE users (name text, age smallint, birthday date);


#list tables:
\d


# insert:
INSERT INTO users (name, age, birthday) VALUES('Andrei', 31, '1930-01-025');

# show columns:
SELECT name, age, birthday FROM users;

# show all columns:
SELECT * FROM users;

# add a new column:
ALTER TABLE users ADD score smallint;

# update table:
UPDATE table_name 
SET some_column = some_Value 
WHERE some_column = some_value

UPDATE users S
ET score = 50 
WHERE name = 'Andrei';


# Grab all users with naems start with a and % which means anything after a:

SELECT * FROM users WHERE name LIKE 'A%';

# Names endin with y:
SELECT * FROM users WHERE name LIKE '%y';

# sort descending::
SELECT * FROM users ORDER BY score DESC;

# sort ascending::
SELECT * FROM users ORDER BY score ASC;



# AVERAGE score of users:
SELECT AVG(score) FROM users;

# sum
SELECT SUM(age) FROM users;

#count
SELECT SUM(age) FROM users;

# CREATE TABLE:
CREATE TABLE login (
	ID serial NOT NULL PRIMARY KEY,
	secret VARCHAR (100) NOT NULL,
	name text UNIQUE NOT NULL
);

INSERT INTO login (
	secret, name) VALUES('abc', 'Andrei')
)


# Joining tables:
SELECT * FROM users JOIN login ON users.name = login.name;

Delete

DELETE FROM users WHERE name='Andrei' AND score is NULL;

# Delete table:

DROP TABLE users;



######### project:
createdb 'smart-brain'
