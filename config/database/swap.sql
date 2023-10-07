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
ALTER TABLE user modify column telephone varchar(20);

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


CREATE TABLE travels_documents (
travels_document_id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
travel_product_id  INT UNSIGNED NOT NULL,
document VARCHAR(300),
is_deleted BOOLEAN DEFAULT 0 NOT NULL,

CONSTRAINT fk_document_travel_id FOREIGN KEY (travel_product_id)
REFERENCES travel_product(travel_product_id) ON DELETE CASCADE ON UPDATE CASCADE

);

select * from travel_product;
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
CREATE TABLE likes (
	user_id INT UNSIGNED NOT NULL,
	travel_product_id INT UNSIGNED NOT NULL,
	primary key(user_id, travel_product_id),
    
	CONSTRAINT fk_user_4 FOREIGN KEY (user_id)
	REFERENCES user(user_id) ON DELETE CASCADE ON UPDATE CASCADE,

	CONSTRAINT fk_travel_product_1 FOREIGN KEY (travel_product_id)
	REFERENCES travel_product(travel_product_id) ON DELETE CASCADE ON UPDATE CASCADE
);




CREATE TABLE airport (
    airport_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    icao_code CHAR(4),
    iata_code CHAR(3),
    name VARCHAR(50),
    city VARCHAR(50),
    country VARCHAR(50)
);
Select * from airport;



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


SELECT * FROM plane_travel;
SELECT * FROM train_travel;
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






SELECT tp.*, pt.*, tt.*
FROM travel_product tp
LEFT JOIN plane_travel pt ON tp.travel_product_id = pt.travel_product_id
LEFT JOIN train_travel tt ON tp.travel_product_id = tt.travel_product_id
WHERE tp.buyer_user_id IS NULL
AND (pt.travel_product_id IS NOT NULL OR tt.travel_product_id IS NOT NULL);




SELECT * FROM p;
SELECT
    tp.travel_product_id as travel_id,
    pt.*,
    tt.*,
    u_seller.name AS seller_name
FROM
    travel_product tp
LEFT JOIN
    plane_travel pt ON tp.travel_product_id = pt.travel_product_id
LEFT JOIN
    train_travel tt ON tp.travel_product_id = tt.travel_product_id
LEFT JOIN
    user u_seller ON tp.seller_user_id = u_seller.user_id
WHERE
    tp.buyer_user_id IS NULL
    AND (pt.travel_product_id IS NOT NULL OR tt.travel_product_id IS NOT NULL) and tp.travel_product_id IS NOT NULL ;


SELECT
    tp.*, pt.*, tt.*,
    tp.type AS tipo_de_viaje,
    u_seller.name AS nombre_del_vendedor,
    u_buyer.name AS nombre_del_comprador
FROM
    travel_product tp
LEFT JOIN
    user u_seller ON tp.seller_user_id = u_seller.user_id
LEFT JOIN
    user u_buyer ON tp.buyer_user_id = u_buyer.user_id
WHERE
    tp.buyer_user_id IS NULL
    AND (
        tp.type = 1  -- Tipo 1 para plane_travel (avión)
        OR EXISTS (SELECT * FROM plane_travel WHERE travel_product_id = tp.travel_product_id)
    )
    AND (
        tp.type = 2  -- Tipo 2 para train_travel (tren)
        OR EXISTS (SELECT * FROM train_travel WHERE travel_product_id = tp.travel_product_id)
    );
  


	
    SELECT tp.*, pt.*, tt.*, user.user_id , user.name 
    FROM travel_product tp, plane_travel pt, train_travel tt, user 
    WHERE ( tp.travel_product_id = pt.travel_product_id or tp.travel_product_id = tt.travel_product_id ) 
		and tp.seller_user_id = user.user_id
		AND tp.admin_enabled = 0 
        AND tp.is_deleted = 0 
		AND tp.buyer_user_id IS NULL
    group by tp.travel_product_id;
    
    SELECT tp.*, pt.*, tt.*, user.user_id , user.name FROM travel_product tp, plane_travel pt, train_travel tt, user WHERE ( tp.travel_product_id = pt.travel_product_id or tp.travel_product_id = tt.travel_product_id ) and tp.seller_user_id = user.user_id AND tp.admin_enabled = 0 AND tp.is_deleted = 0 AND tp.buyer_user_id IS NULL group by tp.travel_product_id;
    SELECT tp.*, pt.*, user.user_id , user.name FROM travel_product tp, plane_travel pt, user WHERE ( tp.travel_product_id = pt.travel_product_id ) and tp.seller_user_id = user.user_id AND tp.admin_enabled = 0 AND tp.is_deleted = 0 AND tp.buyer_user_id IS NULL group by tp.travel_product_id;
  SELECT tp.*, tt.*, user.user_id , user.name FROM travel_product tp, train_travel tt, user WHERE ( tp.travel_product_id = tt.travel_product_id ) and tp.seller_user_id = user.user_id AND tp.admin_enabled = 0 AND tp.is_deleted = 0 AND tp.buyer_user_id IS NULL group by tp.travel_product_id;
  
  
  -- and tt.travel_product_id = tp.travel_product_id and tp.seller_user_id = user.user_id ;
    -- AND tp.buyer_user_id IS NULL AND (pt.travel_product_id IS NOT NULL OR tt.travel_product_id IS NOT NULL) ;
    -- AND tp.admin_enabled = 0 AND tp.is_deleted = 0 ;
    
SET sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION'; 
 SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
 
select * from plane_travel;
select * from train_travel;
select * from travel_product;
