-- DROP DATABASE swapYourTravel;
CREATE DATABASE swapYourTravel;
use swapYourTravel;
-- drop database swapYourTravel;
CREATE TABLE user(
	user_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	alias VARCHAR (200),
	name VARCHAR (200) NOT NULL,
	last_name VARCHAR(200),
	email VARCHAR(200) UNIQUE NOT NULL,
	address VARCHAR(200),
	ident_num VARCHAR(20),
	zip_code VARCHAR(10),
	iban VARCHAR(50), -- ?? 
	password VARCHAR(250) NOT NULL,
	type TINYINT NOT NULL DEFAULT 1, -- TODO: TIPOS DE USUARIO: 1 user, 2 admin. 
	telephone VARCHAR(10),
	register_date date NOT NULL default (CURDATE()),
	is_deleted BOOLEAN NOT NULL DEFAULT 0,
	img VARCHAR(200),
	enabled BOOLEAN NOT NULL DEFAULT 0 -- (enable false puede loguearse, True no puede loguearse) Marcado por un administrador. 
);

select * from user;
SELECT * FROM user WHERE is_deleted = 0 AND enabled = 1 ;
select * from travel_product;
CREATE TABLE travel_product(
	travel_product_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	creation_date DATE NOT NULL default (CURDATE()),
	purchases_date DATE,-- TODO: no se sabe la fecha de venta de entrada, hasta que se vende
	type tinyint NOT NULL, -- 1 Avion; 2 Tren; 3 Bono; 4 Hotel; 5 Pack; 6...
	origin VARCHAR(200) NOT NULL,
	destiny VARCHAR (200) NOT NULL,
	passenger tinyint NOT NULL,
	is_deleted BOOLEAN NOT NULL DEFAULT 0,
	commentaries VARCHAR(300),
	admin_enabled BOOLEAN NOT NULL DEFAULT 0, -- (enable TRUE puede loguearse, FALSE no puede loguearse) Marcado por un administrador. 
	buyer_user_id INT UNSIGNED, -- TODO: buyer_user_id
	seller_user_id INT UNSIGNED NOT NULL, -- TODO: seller_user_id
	original_price DECIMAL(10,2) NOT NULL,
	client_price DECIMAL(10,2) NOT NULL,  -- 99.999.999,99
	exchange_rate DECIMAL(10,2),	

	-- Referencia un comprador
	CONSTRAINT fk_user_1 FOREIGN KEY (buyer_user_id)
	REFERENCES user(user_id) ON DELETE CASCADE ON UPDATE CASCADE,

	-- Referencia otro comprador
	CONSTRAINT fk_user_2 FOREIGN KEY (seller_user_id)
	REFERENCES user(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

select * from purchase;
CREATE TABLE purchase (
	purchase_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	travel_product_id INT UNSIGNED NOT NULL,
	user_id INT UNSIGNED NOT NULL,
	purchase_date DATETIME NOT NULL DEFAULT now(),
	amount DECIMAL(10, 2) NOT NULL, -- Puedes ajustar la precisión según tus necesidades

	-- relación con travel_product
	CONSTRAINT fk_purchase_travel FOREIGN KEY (travel_product_id)
	REFERENCES travel_product(travel_product_id) ON DELETE CASCADE ON UPDATE CASCADE,

	-- relación con user
	CONSTRAINT fk_user_3 FOREIGN KEY (user_id)
	REFERENCES user(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- --------
select * from likes;
CREATE TABLE likes (
	user_id INT UNSIGNED NOT NULL,
	travel_product_id INT UNSIGNED NOT NULL,
	primary key(user_id, travel_product_id),
    
	CONSTRAINT fk_user_4 FOREIGN KEY (user_id)
	REFERENCES user(user_id) ON DELETE CASCADE ON UPDATE CASCADE,

	CONSTRAINT fk_travel_product_1 FOREIGN KEY (travel_product_id)
	REFERENCES travel_product(travel_product_id) ON DELETE CASCADE ON UPDATE CASCADE
);



select * from airport;
CREATE TABLE airport (
    airport_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    icao_code CHAR(4),
    iata_code CHAR(3),
    name VARCHAR(50),
    city VARCHAR(50),
    country VARCHAR(50)
);

-- drop table plane_travel;

select * from plane_travel;

CREATE TABLE plane_travel(
	travel_product_id INT UNSIGNED NOT NULL,
	plane_travel_id TINYINT NOT NULL,
	origin_airport_id INTEGER NOT NULL,
	destination_airport_id INTEGER NOT NULL,
	departure_date DATE NOT NULL,
	departure_time TIME NOT NULL,
    arrival_date DATE NOT NULL,
	arrival_time TIME NOT NULL,
	company_name VARCHAR(100) NOT NULL,
	primary key(travel_product_id, plane_travel_id),
	CONSTRAINT fk_travel_product_2 FOREIGN KEY (travel_product_id)
	REFERENCES travel_product(travel_product_id) ON DELETE CASCADE ON UPDATE CASCADE,
	-- Relación aeropuerto 1
	CONSTRAINT fk_airport_1 foreign key (origin_airport_id)
	references airport(airport_id) ON DELETE CASCADE ON UPDATE CASCADE, 
	-- Relación aeropuerto 2
	CONSTRAINT fk_airport_2 foreign key (destination_airport_id)
	references airport(airport_id) ON DELETE CASCADE ON UPDATE CASCADE 

);

select * from train_station;
CREATE TABLE IF NOT EXISTS train_station (
     train_station_id INT UNSIGNED PRIMARY KEY,
	 name VARCHAR(46) CHARACTER SET utf8,
	 address VARCHAR(89) CHARACTER SET utf8,
	 zip_code INT,
	 city VARCHAR(47) CHARACTER SET utf8,
	 province VARCHAR(18) CHARACTER SET utf8,
	 country VARCHAR(8) CHARACTER SET utf8
);

select * from train_travel;

ALTER TABLE travel_product ADD COLUMN document_img VARCHAR(200);

CREATE TABLE train_travel(
	travel_product_id INT UNSIGNED NOT NULL,
	train_travel_id INT NOT NULL,
	origin_train_id INT UNSIGNED NOT NULL,
	destination_train_id INT UNSIGNED NOT NULL,
    departure_date DATE NOT NULL,
	departure_time TIME NOT NULL,
    arrival_date DATE NOT NULL,
	arrival_time TIME NOT NULL,
	company_name VARCHAR(100) NOT NULL,
	primary key(travel_product_id, train_travel_id),

	-- relación a travel_product
	CONSTRAINT fk_travel_product_3 FOREIGN KEY (travel_product_id)
	REFERENCES travel_product(travel_product_id) ON DELETE CASCADE ON UPDATE CASCADE,

	-- Relación a estación 1
	CONSTRAINT fk_train_1 foreign key (origin_train_id)
	references train_station(train_station_id) ON DELETE CASCADE ON UPDATE CASCADE, 
	-- Relación a estación 2
	CONSTRAINT fk_train_2 foreign key (destination_train_id)
	references train_station(train_station_id) ON DELETE CASCADE ON UPDATE CASCADE
);


SELECT
    tp.*,
    u_buyer.*,
    u_seller.*,
    p.*,
    a_origin.*,
    a_destination.*,
    pt.*,
    ts_origin.*,
    ts_destination.*
FROM travel_product AS tp
JOIN user AS u_buyer ON tp.buyer_user_id = u_buyer.user_id
JOIN user AS u_seller ON tp.seller_user_id = u_seller.user_id
LEFT JOIN purchase AS p ON tp.travel_product_id = p.travel_product_id
LEFT JOIN airport AS a_origin ON pt.origin_airport_id = a_origin.airport_id
LEFT JOIN airport AS a_destination ON pt.destination_airport_id = a_destination.airport_id
LEFT JOIN plane_travel AS pt ON tp.travel_product_id = pt.travel_product_id
LEFT JOIN train_travel AS tt ON tp.travel_product_id = tt.travel_product_id
LEFT JOIN train_station AS ts_origin ON tt.origin_train_id = ts_origin.train_station_id
LEFT JOIN train_station AS ts_destination ON tt.destination_train_id = ts_destination.train_station_id
WHERE tp.travel_product_id = 1;

select * from user;
SELECT
    tp.*,
    u.*,
    pt.*,
    a_origin.*,
    a_destination.*
FROM travel_product AS tp
JOIN user AS u ON tp.seller_user_id = u.user_id
JOIN plane_travel AS pt ON tp.travel_product_id = pt.travel_product_id
LEFT JOIN airport AS a_origin ON pt.origin_airport_id = a_origin.airport_id
LEFT JOIN airport AS a_destination ON pt.destination_airport_id = a_destination.airport_id
WHERE tp.travel_product_id = 1;






