DROP DATABASE IF EXISTS stockDB;
CREATE database stockDB;

USE stockDB;

CREATE TABLE stock (
-- YOUR CODE HERE --
stock_date varchar(6) not null,
stock_open float not null,
stock_high float not null,
stock_low float not null,
stock_close float not null,
stock_volume integer not null





-- END CODE AREA --
);

SELECT * FROM stock;
