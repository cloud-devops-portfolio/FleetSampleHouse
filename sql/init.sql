CREATE TABLE visits (
  id SERIAL PRIMARY KEY,
  ip TEXT,
  time TIMESTAMP DEFAULT NOW()
);
INSERT INTO visits (ip) VALUES ('github.com');
