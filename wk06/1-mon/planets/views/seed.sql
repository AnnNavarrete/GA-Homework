TRUNCATE TABLE PLANETS;

ALTER SEQUENCE planets_id_seq RESTART WITH 1;

INSERT INTO planets(name, image, diameter, distance, mass, moons) VALUES ('Mercury', 'https://i.imgur.com/DZ6qQf6.jpg', 4878, 57900000, 0.330, 0);
INSERT INTO planets(name, image, diameter, distance, mass, moons) VALUES ('Venus', 'https://i.imgur.com/Sxx4c1H.jpg', 12104, 108160000, 4.87, 0);
INSERT INTO planets(name, image, diameter, distance, mass, moons) VALUES ('Earth', 'https://i.imgur.com/dp1kpqG.jpg', 12756, 149600000, 5.97, 1);
INSERT INTO planets(name, image, diameter, distance, mass, moons) VALUES ('Mars', 'https://i.imgur.com/OYYAFOP.jpg', 6794, 227936640, 0.073, 2);
INSERT INTO planets(name, image, diameter, distance, mass, moons) VALUES ('Jupiter', 'https://i.imgur.com/27HtthD.jpg', 142984, 778369000, 0.642, 67);
INSERT INTO planets(name, image, diameter, distance, mass, moons) VALUES ('Saturn', 'https://i.imgur.com/WvZD7tQ.jpg', 120536, 1427034000, 1898, 62);
INSERT INTO planets(name, image, diameter, distance, mass, moons) VALUES ('Uranus', 'https://i.imgur.com/pa0mzGP.jpg', 51118, 2870658186, 568, 27);
INSERT INTO planets(name, image, diameter, distance, mass, moons) VALUES ('Neptune', 'https://i.imgur.com/CEKag4B.jpg', 49532, 4496978000, 102, 14);
INSERT INTO planets(name, image, diameter, distance, mass, moons) VALUES ('Pluto', 'https://i.imgur.com/7xiLNGn.jpg', 2376, 5906376272, 0.0146, 5);




