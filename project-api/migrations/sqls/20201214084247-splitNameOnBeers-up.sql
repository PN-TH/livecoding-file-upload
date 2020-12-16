CREATE TABLE `category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
CREATE TABLE `beers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` INT NOT NULL,
  `category_id` INT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`category_id`) REFERENCES `category`(`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
INSERT INTO
  category (category)
VALUES
  ('Blonde'),
  ('Brune'),
  ('Rousse');
INSERT INTO
  beers (name, price, category_id)
VALUES
  ('La Chouffe', 4, 1),
  ('Guinness', 3, 2);