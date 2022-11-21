drop database if exists gms_db;

create database gms_db;

use gms_db;

drop table if exists customer;
create table customer(c_id bigint primary key AUTO_INCREMENT,c_fname varchar(50),c_lname varchar(50),c_email varchar(100) unique,c_mobile varchar(20) unique,c_password varchar(300),c_address varchar(200),c_city varchar(100),c_state varchar(100),c_pincode int,is_deleted boolean default false);


drop table if exists seller;
create table seller(s_id bigint primary key AUTO_INCREMENT,s_name varchar(100),s_email varchar(100) unique,s_city varchar(100),s_state varchar(100),s_mobile varchar(20) unique,s_password varchar(300),s_pincode int,is_deleted boolean default false);


drop table if exists category;
create table category(cat_id bigint primary key AUTO_INCREMENT,cat_name varchar(100),
cat_desc varchar(800),cat_image_path varchar(500));


drop table if exists product;
create table product(p_id bigint primary key AUTO_INCREMENT,cat_id bigint,s_id bigint,p_name varchar(100),p_price double,p_unit varchar(20),p_details varchar(800),p_image_path varchar(500),is_deleted boolean default false,FOREIGN KEY (s_id) REFERENCES seller(s_id),FOREIGN KEY (cat_id) REFERENCES category(cat_id));


drop table if exists orders;
create table orders(o_id bigint primary key AUTO_INCREMENT,c_id bigint,o_date date,FOREIGN KEY (c_id) REFERENCES customer(c_id));


drop table if exists order_details;
create table order_details(id bigint primary key AUTO_INCREMENT,o_id bigint,s_id bigint,p_id bigint,p_qty bigint,FOREIGN KEY (o_id) REFERENCES orders(o_id),FOREIGN KEY (s_id) REFERENCES seller(s_id),FOREIGN KEY (p_id) REFERENCES product(P_id));


drop table if exists contact_us;
create table contact_us(id bigint primary key AUTO_INCREMENT,
name varchar(100),email varchar(100),mobile varchar(20),message varchar(1000));


insert into seller(s_id,s_name,s_email,s_mobile,s_password,s_pincode,is_deleted) 
    values(default,"ravi","rv@gmail.com",9822357810,'abc123',411010,default);

insert into seller(s_id,s_name,s_email,s_mobile,s_password,s_pincode,is_deleted) 
    values(default,"ram","rm@gmail.com",9911157810,'abc123',415002,default);

insert into seller(s_id,s_name,s_email,s_mobile,s_password,s_pincode,is_deleted)
    values(default,"raj","rj@gmail.com",9396557810,'abc123',411011,default);

insert into seller(s_id,s_name,s_email,s_mobile,s_password,s_pincode,is_deleted) 
    values(default,"ratan","rt@gmail.com",9277757810,'abc123',413722,default);

insert into seller(s_id,s_name,s_email,s_mobile,s_password,s_pincode,is_deleted) 
    values(default,"Parshant","ps@gmail.com",9822387880,'abc123',411007,default);

insert into seller(s_id,s_name,s_email,s_mobile,s_password,s_pincode,is_deleted) 
    values(default,"Sagar","sagar@gmail.com",9912158910,'abc123',415003,default);

insert into seller(s_id,s_name,s_email,s_mobile,s_password,s_pincode,is_deleted)
    values(default,"Amit","amit@gmail.com",9625487810,'abc123',411041,default);

insert into seller(s_id,s_name,s_email,s_mobile,s_password,s_pincode,is_deleted) 
    values(default,"Sachin","sachin@gmail.com",9226458610,'abc123',413002,default);


insert into category(cat_id,cat_name,cat_desc,cat_image_path)
     values(default,'Fruits','fresh and delicious fruits directly from farm at your door steps',
     'http://localhost:8080/images/products/fruits.jpg');

insert into category(cat_id,cat_name,cat_desc,cat_image_path)
     values(default,'Vegetables','fresh and direct from farm at your door steps',
     'http://localhost:8080/images/products/vegetables.jpg');

insert into category(cat_id,cat_name,cat_desc,cat_image_path) 
    values(default,'Beverages & Drinks','Your Daily need of tea, coffee, fruit juice and soft drinks at your service',
    'http://localhost:8080/images/products/Beverages_drinks.jpg');

insert into category(cat_id,cat_name,cat_desc,cat_image_path) 
    values(default,'Biscuits','Biscuits and cookies','http://localhost:8080/images/products/Biscuits.jpg');

insert into category(cat_id,cat_name,cat_desc,cat_image_path) 
    values(default,'Chocolates & Desserts','low colestrol','http://localhost:8080/images/products/Chocolates_desserts.jpg');

insert into category(cat_id,cat_name,cat_desc,cat_image_path) 
    values(default,'Dairy Products',' Dairy products','http://localhost:8080/images/products/Dairy_Products.jpg');

insert into category(cat_id,cat_name,cat_desc,cat_image_path) 
    values(default,'Oil, Masala & Sugar','Oil, Masala & Sugar','http://localhost:8080/images/products/Oil_masala.jpg');

insert into category(cat_id,cat_name,cat_desc,cat_image_path) 
    values(default,'Rice, Atta & Dal','Rice, Atta & Dal','http://localhost:8080/images/products/Rice_atta_and_dal');

insert into category(cat_id,cat_name,cat_desc,cat_image_path) 
    values(default,'Snacks & Munchies','Snacks & Munchies','http://localhost:8080/images/products/Snacks_munchies.jpg');

insert into category(cat_id,cat_name,cat_desc,cat_image_path) 
    values(default,'Health & Nutrition','Your daily Suppliments','http://localhost:8080/images/products/Health_Nutrition.jpg');



insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
   values(default,1,1,'Apple',97,'4 pcs','Fresh Apple- Shimla, 4 pcs (Approx. 550 - 640 g)',
            'http://localhost:8080/images/products/apple-shimla.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
   values(default,1,2,'Dragon Fruit',113,'1 pc','Dragon Fruit (Loose), 1 pc 220-350g',
            'http://localhost:8080/images/products/Dragon_Fruit.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
   values(default,1,3,'Pineapple',86,'1 pc','Pineapple, 1 pc 800 g -1000 g',
            'http://localhost:8080/images/products/Pineapple.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
   values(default,1,4,'Mosambi',72,'1 kg','Mosambi - Organically Grown (Loose), 1 kg',
            'http://localhost:8080/images/products/Mosambi.jpg', default);


insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
   values(default,1,5,'Pomegranate',191,'4 pcs','Pomegranate (Loose), 4 pcs (approx. 720 - 800 g)',
            'http://localhost:8080/images/products/Pomegranate.jpg', default);

            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
   values(default,1,6,'Muskmelon',50,'1 pcs','Muskmelon - Netted Small, 1 pc 500g-900g',
            'http://localhost:8080/images/products/Muskmelon.jpg', default);


insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
   values(default,1,7,'Raw Mango',103,'1 kg','Raw Mango (Loose), 1 kg',
            'http://localhost:8080/images/products/Raw_Mango.jpg', default);


insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
   values(default,1,8,'Pear',260,'4 pcs','Pear - Beauty, Rich In Fiber, Vitamin C, 4 pcs (500g - 600g)',
            'http://localhost:8080/images/products/Pear.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
   values(default,1,1,'Ber',26,'500g','Ber (Loose), 500 g',
            'http://localhost:8080/images/products/Ber.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
   values(default,1,2,'Watermelon',67,'1 pc','Watermelon approx(1.5kg - 2.5kg',
            'http://localhost:8080/images/products/Watermelon.jpg', default);


insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
   values(default,2,3,'Cauliflower',45,'1 pc','Cauliflower, 1 pc (approx. 400 to 600 g)',
            'http://localhost:8080/images/products/Cauliflower.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
   values(default,2,4,'Potato',39,'1 kg','Potato (Loose), 1 kg',
            'http://localhost:8080/images/products/Potato.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
   values(default,2,5,'Tomato',26,'500 g','Tomato - Local (Loose), 500 g',
            'http://localhost:8080/images/products/Tomato.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
   values(default,2,6,'Onion',153,'5 kg','Onion (Loose), 5 kg',
            'http://localhost:8080/images/products/Onion.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
   values(default,2,7,'Palak',153,'250 g','Palak - Cleaned, without roots, 250 g',
            'http://localhost:8080/images/products/Palak.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
   values(default,2,8,'Coriander',32,'100 g','Coriander Leaves, 100 g',
            'http://localhost:8080/images/products/Coriander.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
   values(default,2,1,'Beans',53,'1 kg','Beans - Cluster (Loose), 1 kg',
            'http://localhost:8080/images/products/Beans.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
   values(default,2,2,'Gourd',54,'1 pc','Bottle Gourd (Loose), 1 pc (Approx. 500 g - 800 g)',
            'http://localhost:8080/images/products/Gourd.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
   values(default,2,3,'Spring Onion',10,'100 g','Spring Onion - With roots, 100 g',
            'http://localhost:8080/images/products/Spring_Onion.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,3,1,'Coca-Cola',38,'750 ml','Coca-Cola Original Taste Soft Drink PET Bottle',
            'http://localhost:8080/images/products/Coca-Cola.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,3,2,'Kinley Club Soda',20,'750 ml',' The bubbly zing is the perfect companion to your imagination.',
            'http://localhost:8080/images/products/Kinley_Club_Soda.jpg', default);       

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,3,3,'Real Fruit Power Mixed Fruit Juice',78,'1L','Every Réal fruit beverage is made from the juice of best quality fruits only.',
            'http://localhost:8080/images/products/Real_Fruit_Juice.jpg', default);        

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,3,4,'Tropicana Litchi',91,'1L','Savour the superior taste of litchis, 750 ml',
            'http://localhost:8080/images/products/Tropicana_Litchi.jpg', default); 

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,3,5,'Tata Tea Premium',237,'500 g','Tata Tea Premium, 500g',
            'http://localhost:8080/images/products/Tata_Tea.jpg', default); 

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,3,6,'Wagh Bakri Premium Leaf Tea',235,'500 g','Wagh Bakri Premium Leaf Tea, Poly Pack, 500g',
            'http://localhost:8080/images/products/Wagh_Bakri_Tea.jpg', default); 

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,3,7,'Tetley Lemon & Honey Flavored Green Tea',140 ,'25 Tea Bags','Tetley- Lemon & Honey Flavored Green Tea | Immune with Added Vitamin C | 25 Tea Bags',
            'http://localhost:8080/images/products/Tetley_tea', default);           


insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,3,8,'Bru Instant | Aromatic Coffee',299,'200 g','Bru Instant | Aromatic Coffee From South Indian Plantations | Premium Blend of Robusta & Arabica Beans For a Rich Coffee Experience | 200g',
            'http://localhost:8080/images/products/Bru_Coffee.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,3,1,'Nescafé Classic Instant Ground Coffee',580,'200 g','Nescafé Classic Instant Ground Coffee, 200g',
            'http://localhost:8080/images/products/Nescafé_coffee.jpg', default); 

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,3,2,'Sunbean Beaten Caffe',243,'250 g','Instant Coffee Paste 250g Jar | Rich, Creamy and Frothy Beaten Coffee',
            'http://localhost:8080/images//products/Sunbean_Beaten_Caffe.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,4,3,'Britannia Good Day Cashew Cookies',95,'600g','Britannia Good Day Cashew Cookies, 600 g',
            'http://localhost:8080/images/products/Good_Day.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,4,4,'Parle Biscuit',10,'75g','Parle Biscuit- Gold, 75gm Pack',
            'http://localhost:8080/images/products/Parle_Biscuit.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,4,5,'Dark Fantasy',45,'300g','Dark Fantasy Sandwich Sunfeast Dark Fantasy Choco Creme Dark Crunch with Smooth Creme Pouch, 300 g',
            'http://localhost:8080/images/products/Dark_Fantasy.jpg', default);


insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,4,6,'Sunfeast Farmlite',49,'250g','Sunfeast Farmlite Veda Digestive Biscuit | High Fibre | Goodness of 5 natural ingredients and Wheat Fibre, 250g',
            'http://localhost:8080/images/products/Sunfeast_Farmlite.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,4,7,'Hide and Seek',50,'200g','Parle Hide and Seek Chocolate Chip Cookies, 200g',
            'http://localhost:8080/images/products/Hide_and_Seek.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,4,8,'Britannia Jim Jam',30,'150g','Britannia Treat Jim Jam Biscuits, 150g',
            'http://localhost:8080/images/products/jim_jam.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,4,1,'Parle Monaco',60,'400g','Parle Monaco Classic, 400g',
            'http://localhost:8080/images/products/Monaco.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,4,2,'Parle Rusk',42,'300g','Parle Rusk, Elachi, 300 g',
            'http://localhost:8080/images/products/parle_rusk.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,4,3,'Krackjack',120,'700g','Parle Krackjack The Original Sweet & Salty Crackers 700g',
            'http://localhost:8080/images/products/Krackjack.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,4,4,'Cadbury Oreo',62,'300g','Cadbury Oreo Original Chocolatey Sandwich Biscuit Family Pack, 300g',
            'http://localhost:8080/images/products/Oreo.jpg', default);


insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,5,5,'Grand Londonderry',50,'218g','Parle Grand Londonderry Pouch, 218g',
            'http://localhost:8080/images/products/Londonderry.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,5,5,'Eclairs',50,'218g','Candyman Eclairs, 218g',
            'http://localhost:8080/images/products/Eclairs.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,5,6,'Nutella Hazelnut',300,'250g','Nutella Hazelnut Spread with Cocoa, 350g',
            'http://localhost:8080/images/products/Nutella.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,5,7,'Ferrero Rocher',507,'200g','Ferrero Rocher, 16 Pieces, 200 g',
            'http://localhost:8080/images/products/Ferrero_Rocher.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,5,8,'Haldiram Gulab Jamun',195,'1kg','Haldirams Nagpur Gulab Jamun, 1kg',
            'http://localhost:8080/images/products/Gulab_Jamun.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,5,1,'Gits Soan Papdi',366,'1.5kg','Gits Soan Papdi, Pure Veg,1500g (Pack of 3, 500g Each)',
            'http://localhost:8080/images/products/Soan_Papdi.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,5,2,'Gits Rasgulla',187,'1.5kg','Gits Rasgulla, 1kg',
            'http://localhost:8080/images/products/Rasgulla.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,5,3,'Alpenliebe Juicy Fills',50,'152g','Alpenliebe Juicy Fills, Orange & Mango Flavour,152 g, (40 Units*3.8g Each)',
            'http://localhost:8080/images/products/Alpenliebe.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,6,4,'Nestle Dairy Whitener',210,'400g','Nestle Everyday Dairy Whitener, 400g Pouch',
            'http://localhost:8080/images/products/Dairy_Whitener.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,6,5,'MOTHER DAIRY GHEE',480,'1L','MOTHER DAIRY Cow GHEE CEKA Pack 1L',
            'http://localhost:8080/images/products/Ghee.jpg', default);


insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,6,6,'Amul fresh cream',35,'250 ml','Amul fresh cream,250ml ',
            'http://localhost:8080/images/products/amul_cream.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,6,7,'Amul Lassi',20,'250 ml','Amul Lassi Tetra Pack ,250ml ',
            'http://localhost:8080/images/products/amul_lassi.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,6,8,'Amul Butter',50,'100g','Amul Butter- Pasteurised, 100g',
            'http://localhost:8080/images/products/Amul_Butter.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,6,1,'Amul Taza',68,'1L','Amul Taza - 1L Pack',
            'http://localhost:8080/images/products/Amul_Taza.jpg', default);


insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,6,2,'AMUL Cheese',230,'400 g','AMUL Cheese Block 200 g. (Pack of 2)',
            'http://localhost:8080/images/products/Amul_Cheese.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,6,3,'Amul Fresh Paneer',72,'400 g','Amul Fresh Paneer 200 g (Pack)',
            'http://localhost:8080/images/products/Amul_Paneer.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,7,4,'Fortune Soyabean Oil',155,'1Lt','Fortune Soyabean Oil, 1L Pouch',
            'http://localhost:8080/images/products/Soyabean_Oil.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,7,5,'Fortune Sunflower Oil',185,'1Lt','Fortune Sunlite Refined Sunflower Oil, 1L Pouch',
            'http://localhost:8080/images/products/Sunflower_Oil.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,7,6,'Fortune Mustard Oil',198,'1Lt','Fortune Premium Kachi Ghani Pure Mustard Oil, 1L PET Bottle',
            'http://localhost:8080/images/products/Mustard_Oil.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,7,7,'Tata Salt',25,'1kg','Tata Salt, Vacuum Evaporated Iodised, 1kg Pouch',
            'http://localhost:8080/images/products/Tata_Salt.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,7,8,'Tata Coriander Powder',25,'200g','Tata Sampann Coriander Powder Masala with Natural Oils, 200g',
            'http://localhost:8080/images/products/Coriander_Powder.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,7,1,'Chilli Powder',230,'500g','Tata Sampann Chilli Powder Masala with Natural Oils, 500g',
            'http://localhost:8080/images/products/Chilli_Powder.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,7,2,'Dabur Honey',429,'1kg','Dabur Honey :100% Pure with No Sugar Adulteration - 1kg',
            'http://localhost:8080/images/products/Dabur_Honey.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,7,3,'Sugar',44,'1kg','Parrys White Label Sugar, 1kg',
            'http://localhost:8080/images/products/Sugar.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,7,4,'Turmeric Powder',32,'100g','Tata Sampann Turmeric Powder Masala with Natural Oils, 100g',
            'http://localhost:8080/images/products/Turmeric_Powder.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,7,5,'Hing',90,'100g','Everest Powder - Compounded Yellow Hing, 50g Bottle',
            'http://localhost:8080/images/products/Hing.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,8,6,'Moong Dal',166,'1 kg','Tata Sampann Unpolished Moong Dal Split, 1kg',
            'http://localhost:8080/images/products/Moong_Dal.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,8,7,'Chana Dal',106,'1 kg','Tata Sampann Unpolished Chana Dal, 1kg',
            'http://localhost:8080/images/products/Chana_Dal.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,8,8,'Masoor Dal',165,'1 kg','Tata Sampann Unpolished Masoor Dal Split, 1kg',
            'http://localhost:8080/images/products/Masoor_Dal.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,8,1,'',165,'1 kg','Tata Sampann Unpolished Masoor Dal Split, 1kg',
            'http://localhost:8080/images/products/Masoor_Dal.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,8,2,'Masoor Dal',165,'1 kg','Tata Sampann Unpolished Masoor Dal Split, 1kg',
            'http://localhost:8080/images/products/Masoor_Dal.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,8,3,'Ashirvaad Atta',289,'5 kg','Ashirvaad Atta with Multigrains, 5kg pack, The High Fibre Atta',
            'http://localhost:8080/images/products/Ashirvaad_Atta.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,8,4,'Chana Besan',96,'1 kg','Fortune Chana Besan, Made from Chana Dal, 1kg',
            'http://localhost:8080/images/products/Chana_Besan.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,8,5,'Fortune Chakki Atta',397,'1 kg','Fortune Chakki Fresh Atta, 10 kg',
            'http://localhost:8080/images/products/Fortune_Atta.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,8,6,'Daawat Rice',405,'5 kg','Daawat Rozana Gold, Naturally Aged, Rich Aroma,Perfect Fit for Everyday Consumption Basmati Rice, 5 Kg',
            'http://localhost:8080/images/products/Daawat_Rice.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,8,7,'Fortune Basmati Rice',339,'5 kg','Fortune Hamesha Basmati Rice, suitable for daily cooking, 5 Kg',
            'http://localhost:8080/images/products/Fortune_Basmati_Rice.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,8,8,'Fortune Basmati Rice',339,'5 kg','Fortune Hamesha Basmati Rice, suitable for daily cooking, 5 Kg',
            'http://localhost:8080/images/products/Fortune_Basmati_Rice.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,8,1,'White Thick Poha',42,'500 g','Tata Sampann High in Fibre White Thick Poha, 500g',
            'http://localhost:8080/images/products/Thick_Poha.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,8,2,'India Gate Basmati Rice',179,'500 g','India Gate Basmati Rice Pouch, Classic, 1kg',
            'http://localhost:8080/images/products/India_Gate.jpg', default);


insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,9,3,'Lays Potato Chips',39,'110 g','Lays Potato Chips - American Style Cream & Onion Flavour',
            'http://localhost:8080/images/products/Lays.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,9,4,'Bingo! Potato Chips',45,'100 g','Bingo! Original Style Chilli Sprinkled, Potato Chips, 100g',
            'http://localhost:8080/images/products/Bingo.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,9,5,'California Almonds',480,'500 g','Tata Sampann 100% Pure California Almonds Whole, 500g, Brown',
            'http://localhost:8080/images/products/California_Almonds.jpg', default);


insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,9,7,'Premium Cashews',573,'500 g','Tata Sampann 100% Pure Premium Cashews Whole, 500g, White',
            'http://localhost:8080/images/products/Premium_Cashews.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,9,8,'Black Raisins',245,'250 g','Happilo Premium Afghani Seedless Black Raisins 250 g',
            'http://localhost:8080/images/products/Black_Raisins.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,9,1,'Brown Rice Cakes',185,'110 g','HAIM Organic wholegrain Brown Rice Cakes (All Natural, Unsalted) Pack of 1',
            'http://localhost:8080/images/products/Rice_Cakes.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,9,2,'ACT II Popcorn',55,'180 g','ACT II Popcorn IPC Classic Salted Combo Pack, 60g (Pack of 3)',
            'http://localhost:8080/images/products/Popcorn.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,9,3,'Puffcorn',18,'55 g','Kurkure Namkeen - Puffcorn (Yummy Cheese) Pouch, 55 g',
            'http://localhost:8080/images/products/Puffcorn.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,9,4,'Little Hearts',25,'75 g','Britannia Little Hearts, 75g',
            'http://localhost:8080/images/products/Little_Hearts.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,9,5,'Pancharatan Mixture',60,'150 g','Haldirams Nagpur Pancharatan Mixture, 150g',
            'http://localhost:8080/images/products/Pancharatan.jpg', default);


insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,10,6,'Bournvita',191,'500 g','Bournvita Health Drink, 500 g',
            'http://localhost:8080/images/products/Bournvita.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,10,7,'Horlicks',319,'1 kg','Horlicks Chocolate Health & Nutrition Drink 1 kg Refill Pack, For immunity and 5 signs of growth',
            'http://localhost:8080/images/products/Horlicks.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,10,8,'Glucon-D',161,'450 g','Glucon-D Instant Energy Health Drink Tangy Orange - 450g Refill',
            'http://localhost:8080/images/products/Glucon-D.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,10,1,'Protinex',549,'400 g','Protinex Vanilla Delight, Zero Added Sugar- 400 g',
            'http://localhost:8080/images/products/Protinex.jpg', default);
           
 insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,10,2,'Dabur Chyawanprash',340,'950 g','Dabur Chyawanprash: 2X Immunity, helps build Strength and for Stamina, 950g',
            'http://localhost:8080/images/products/Chyawanprash.jpg', default); 
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,10,3,'Dabur Amla Juice',165,'1 L','Rich Source of Vitamin C and Antioxidants for Immunity boosting |Pure, Natural and 100% Ayurvedic Juice-1L',
            'http://localhost:8080/images/products/Dabur_Amla_Juice.jpg', default);
            
insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,10,4,'Himalaya Ashvagandha',165,'60 Tablets','Himalaya Ashvagandha- General Wellness Tablets, 60 Tablets, Stress Relief | Rejuvenates Mind & Body',
            'http://localhost:8080/images/products/Himalaya_Ashvagandha.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,10,5,'Sugar-Free Sweetener',285,'400g','Sugar Free Green 100% Natural Sweetener- 400 g, Pouch',
            'http://localhost:8080/images/products/Sweetener.jpg', default);

insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,10,6,'Nestle LACTOGEN',395,'400g','Nestle LACTOGEN 1 Infant Formula Powder- Upto 6 months, Stage 1, 400g',
            'http://localhost:8080/images/products/Nestle_LACTOGEN.jpg', default);


insert into product(p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path,is_deleted) 
    values(default,10,4,'Himalaya Wellness Triphala',165,'60 Tablets','Himalaya Wellness Triphala Bowel Wellness |Relieves constipation|- 60 Tablets',
            'http://localhost:8080/images/products/Himalaya_Triphala.jpg', default);
















