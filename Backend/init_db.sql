CREATE TABLE campaigns (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    status VARCHAR(10),
    clicks INTEGER,
    cost FLOAT,
    impressions INTEGER
);

INSERT INTO campaigns (name, status, clicks, cost, impressions) VALUES
('Summer Sale', 'Active', 150, 45.99, 1000),
('Black Friday', 'Paused', 320, 89.50, 2500),
('Winter Deals', 'Active', 200, 60.00, 1800),
('Spring Promo', 'Paused', 100, 30.25, 900),
('New Year Blast', 'Active', 400, 120.75, 3000),
('Flash Sale', 'Paused', 50, 15.00, 500),
('Diwali Dhamaka', 'Active', 250, 70.00, 2200),
('Holi Hungama', 'Paused', 180, 55.50, 1600),
('Christmas Cheer', 'Active', 300, 95.00, 2700),
('Valentine Vibes', 'Paused', 90, 25.00, 800);