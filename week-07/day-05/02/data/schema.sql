CREATE database restaurantsDB;

USE restaurantsDB;

CREATE TABLE restaurants (

restaurant_id integer auto_increment not null,
restaurant_name varchar(50) not null,
restaurant_link varchar(2000) not null,
restaurant_img varchar(2000) not null,
rating decimal(2,1) not null,
primary key(restaurant_id)
);

INSERT INTO restaurants(restaurant_name, restaurant_link, restaurant_img, rating) VALUES 
("La Cumbre", "http://www.taquerialacumbre.com/", "http://2.bp.blogspot.com/-Nk_s4WZ22hQ/VaEXZuT-agI/AAAAAAAAMS4/4oQ_wPhPUCg/s1600/birthplace.jpg", 0), 
("Big Fish Little Fish", "http://bigfishlittlefishpoke.com/", "https://cdn.vox-cdn.com/uploads/chorus_image/image/50028979/olapokeaustinyelp.0.jpg", 0), 
("Amawele's South African Kitchen", "http://www.amawelessouthafricankitchen.com/", "http://paleolocal.com/wp-content/uploads/2014/02/amawele.png", 0)


