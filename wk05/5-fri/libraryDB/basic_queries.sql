-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns

-- Get all information about all authors
SELECT * FROM authors;
-- The * selects all the columns within the 'authors' table

-- Get just the name and birth year of all authors
SELECT name, birth_year FROM authors;
-- If selecting multiple columns within the table, comma delimit them i.e use comma between each column name

-- Get all authors born in the 20th centruy or later
SELECT * FROM authors WHERE birth_year >= 1900;
-- Selecting ALL from authors table to check for birth year
-- WHERE is used to logically select the rows that match the filter

-- Get all authors born in the USA
SELECT * FROM authors WHERE nationality = 'United States of America';
-- to match 'string' equality to the authors table

-- Get all books published on 1985
SELECT * FROM books WHERE publication_date = 1985;
-- searching only in books table

-- Get all books published before 1989
SELECT * FROM books WHERE publication_date < 1989;
-- searching all publications where publication date is less than 1989

-- Get just the title of all books.
SELECT title FROM books;
-- selecting only the title column in books table

-- Get just the year that 'A Dance with Dragons' was published
  -- Cry when you realize how long it's been
SELECT publication_date FROM books WHERE title = 'A Dance with Dragons';
-- published at 2011, and I did not cry cos I have not read nor watch GoT :-P

-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
SELECT title FROM books WHERE title LIKE '%the%';
-- LIKE is used to search for items that matches the pattern
-- % at the start and end is a wild card to match anything before or after within that title string
SELECT title FROM books WHERE title ILIKE 'the%';
-- tested the above as LIKE is case sensitive whereas ILIKE disregard casing

-- Add yourself as an author
INSERT INTO authors(name, nationality, birth_year) VALUES ('Ann Navarrete', 'New Zealand', 1988);

-- Add two books that you'd like to write (you can hard-code your id as the author id)
INSERT INTO books(title, publication_date, author_id) VALUES ('Book1', 2001, 10);
INSERT INTO books(title, publication_date, author_id) VALUES ('Book2', 2002, 10);

-- Update one of your books to have a new title
UPDATE books SET title = 'Updated Book Name' WHERE title = 'Book1';
SELECT * FROM books WHERE author_id = 10;
-- to see the updated book name from this author

-- Delete your books
DELETE FROM books WHERE author_id = 10; 

-- Delete your author entry
DELETE FROM authors WHERE name = 'Ann Navarrete';
-- I now no longer exist along side the great authors of our time!