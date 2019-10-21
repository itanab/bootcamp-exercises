SELECT *
FROM `genre_movie`
LEFT JOIN `genres`
        ON `genre_movie` . `genre_id` = `genres` . `id`
WHERE `movie_id` = 368;


--SELECT *
--FROM `people`
--RIGHT JOIN `movie_person`