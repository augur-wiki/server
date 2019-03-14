-- Drops guitars table
DROP TABLE IF EXISTS repPrice;

-- Creates guitars table
CREATE TABLE IF NOT EXISTS repPrice (
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY

);