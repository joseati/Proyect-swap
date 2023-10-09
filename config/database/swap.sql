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
ALTER TABLE travel_product ADD COLUMN document_img VARCHAR(200);

CREATE TABLE travels_documents (
travels_document_id BIGINT PRIMARY KEY AUTO_INCREMENT,
travel_product_id  INT UNSIGNED NOT NULL
)

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
  


	SELECT tp.*, pt.*, tt.*, user.user_id , user.name FROM travel_product tp, plane_travel pt, train_travel tt, user 
    WHERE ( tp.travel_product_id = pt.travel_product_id or tp.travel_product_id = tt.travel_product_id ) and tp.seller_user_id = user.user_id
    group by tp.travel_product_id;
    -- and tt.travel_product_id = tp.travel_product_id and tp.seller_user_id = user.user_id ;
    -- AND tp.buyer_user_id IS NULL AND (pt.travel_product_id IS NOT NULL OR tt.travel_product_id IS NOT NULL) ;
    -- AND tp.admin_enabled = 0 AND tp.is_deleted = 0 ;
    

select * from plane_travel;
select * from train_travel;
select * from travel_product;

INSERT INTO travel_product (creation_date, type, origin, destiny, passenger, admin_enabled, seller_user_id, original_price, client_price)
VALUES
    ("2023-10-04", 1, "Ciudad A", "Ciudad B", 2, 1, 1, 500.00, 550.00),
    ("2023-10-05", 2, "Ciudad C", "Ciudad D", 1, 1, 1, 300.00, 330.00),
    ("2023-10-06", 1, "Ciudad E", "Ciudad F", 3, 1, 1, 750.00, 825.00),
    ("2023-10-07", 3, "Ciudad G", "Ciudad H", 1, 1, 1, 50.00, 55.00),
    ("2023-10-08", 4, "Ciudad I", "Ciudad J", 2, 1, 1, 400.00, 440.00),
    ("2023-10-09", 5, "Ciudad K", "Ciudad L", 1, 1, 1, 600.00, 660.00),
    ("2023-10-10", 1, "Ciudad M", "Ciudad N", 4, 1, 1, 800.00, 880.00),
    ("2023-10-11", 2, "Ciudad O", "Ciudad P", 2, 1, 1, 350.00, 385.00);
    INSERT INTO purchase (travel_product_id, user_id, amount)
VALUES
    (17, 2, 550.00),
    (18, 2, 330.00),
    (19, 2, 825.00),
    (20, 2, 55.00),
    (21, 2, 440.00),
    (22, 2, 660.00),
    (23, 2, 880.00),
    (24, 2, 385.00);


select * from travel_product;
select * from user;
select * from plane_travel;
-- Nuevo
-- 19:23
SELECT tp.*, u.name as user_name, u.user_id, pt.*, a_origin.*, a_destination.* FROM travel_product AS tp
      JOIN user AS u ON tp.seller_user_id = u.user_id
      JOIN plane_travel AS pt ON tp.travel_product_id = pt.travel_product_id
      LEFT JOIN airport AS a_origin ON pt.origin_airport_id = a_origin.airport_id
      LEFT JOIN airport AS a_destination ON pt.destination_airport_id = a_destination.airport_id
    WHERE tp.travel_product_id = 19;
SET sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));    
    SELECT tp.*, pt.*, tt.*, user.user_id , user.name FROM travel_product tp, plane_travel pt, train_travel tt, user WHERE ( tp.travel_product_id = pt.travel_product_id or tp.travel_product_id = tt.travel_product_id ) and tp.seller_user_id = user.user_id AND tp.admin_enabled = 0 AND tp.is_deleted = 0  group by tp.travel_product_id;
INSERT INTO plane_travel (travel_product_id, plane_travel_id, origin_airport_id, destination_airport_id, departure_date, departure_time, arrival_date, arrival_time, company_name)
VALUES
    (17, 1, 1, 2, "2023-10-04", "08:00:00", "2023-10-04", "10:30:00", "Airlines A"),
    (18, 2, 3, 4, "2023-10-05", "09:30:00", "2023-10-05", "11:00:00", "Airlines B"),
    (19, 1, 5, 6, "2023-10-06", "10:15:00", "2023-10-06", "12:45:00", "Airlines C"),
    (20, 2, 7, 8, "2023-10-07", "11:45:00", "2023-10-07", "13:15:00", "Airlines D"),
    (21, 1, 9, 10, "2023-10-08", "13:30:00", "2023-10-08", "15:00:00", "Airlines E"),
    (22, 2, 11, 12, "2023-10-09", "14:15:00", "2023-10-09", "16:45:00", "Airlines F"),
    (23, 1, 13, 14, "2023-10-10", "15:30:00", "2023-10-10", "17:00:00", "Airlines G"),
    (24, 2, 15, 16, "2023-10-11", "16:45:00", "2023-10-11", "18:15:00", "Airlines H");

-- Insert data into travel_product table
INSERT INTO travel_product (creation_date, type, origin, destiny, passenger, admin_enabled, seller_user_id, original_price, client_price, document_img)
VALUES
    ("2023-10-04", 1, "Ciudad A", "Ciudad B", 2, 1, 1, 500.00, 550.00, "documento1.png"),
    ("2023-10-05", 1, "Ciudad C", "Ciudad D", 1, 1, 1, 300.00, 330.00, "documento2.png"),
    ("2023-10-06", 1, "Ciudad E", "Ciudad F", 3, 1, 1, 750.00, 825.00, "documento3.png"),
    ("2023-10-07", 1, "Ciudad G", "Ciudad H", 1, 1, 1, 50.00, 55.00, "documento4.png"),
    ("2023-10-08", 1, "Ciudad I", "Ciudad J", 2, 1, 1, 400.00, 440.00, "documento5.png"),
    ("2023-10-09", 1, "Ciudad K", "Ciudad L", 1, 1, 1, 600.00, 660.00, "documento6.png"),
    ("2023-10-10", 1, "Ciudad M", "Ciudad N", 4, 1, 1, 800.00, 880.00, "documento7.png"),
    ("2023-10-11", 1, "Ciudad O", "Ciudad P", 2, 1, 1, 350.00, 385.00, "documento8.png");INSERT INTO purchase (travel_product_id, user_id, amount)
VALUES
    (1, 2, 550.00),
    (2, 3, 330.00),
    (3, 4, 825.00),
    (4, 5, 55.00),
    (5, 6, 440.00),
    (6, 7, 660.00),
    (7, 8, 880.00),
    (8, 1, 385.00);
