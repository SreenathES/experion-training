use experion_software;
create table address(
	`id` int,
	`address` varchar(250) not null,
    `name` varchar(10) not null,
    `pin` int not null,
    `user_id` int
);

ALTER TABLE address ADD CONSTRAINT PK_Id PRIMARY KEY(id);
ALTER TABLE address MODIFY COLUMN id int auto_increment;
ALTER TABLE address ADD CONSTRAINT FK_User_Id FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE address ADD CONSTRAINT UQ_Name_User_Id UNIQUE KEY (name, user_id);

select address, name, pin from address where user_id = 
	(select id from users where email='ironman@mail.com');

select email from users where id = (
	select user_id from(
		select user_id, count(user_id) as total
        from address group by user_id order by total desc limit 1) as temp
);

select email from users where id in (
	select user_id from(
		select user_id, count(user_id) as total from address group by user_id having count(user_id) >= max(user_id)) as temp
);
-- drop table address;