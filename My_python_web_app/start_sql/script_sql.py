start_script = """
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY,
    second_name VARCHAR(50),
    first_name VARCHAR(50),
    patronymic VARCHAR(50),
    region_id INTEGER,
    city_id INTEGER,
    phone VARCHAR(50),
    email VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS regions(
    id INTEGER,
    region_name	INTEGER
);

CREATE TABLE IF NOT EXISTS cities(
    id INTEGER,
    region_id INTEGER,
    city_name VARCHAR(50)
);
"""

start_value_sql = """
INSERT INTO regions('id', 'region_name') VALUES (0, 'Краснодарский край');
INSERT INTO regions('id', 'region_name') VALUES (1, 'Ростовская область');
INSERT INTO regions('id', 'region_name') VALUES (2, 'Ставропольский край');


INSERT INTO cities('id', 'region_id', city_name) VALUES (0, 0, 'Краснодар');
INSERT INTO cities('id', 'region_id', city_name) VALUES (1, 0, 'Кропоткин');
INSERT INTO cities('id', 'region_id', city_name) VALUES (2, 0, 'Славянск');
INSERT INTO cities('id', 'region_id', city_name) VALUES (3, 1, 'Ростов');
INSERT INTO cities('id', 'region_id', city_name) VALUES (4, 1, 'Шахты');
INSERT INTO cities('id', 'region_id', city_name) VALUES (5, 1, 'Батайск');
INSERT INTO cities('id', 'region_id', city_name) VALUES (6, 2, 'Ставрополь');
INSERT INTO cities('id', 'region_id', city_name) VALUES (7, 2, 'Пятигорск');
INSERT INTO cities('id', 'region_id', city_name) VALUES (8, 2, 'Кисловодск');
"""