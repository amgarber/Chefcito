--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4 (Debian 17.4-1.pgdg120+2)
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public."Shopping_List" DROP CONSTRAINT IF EXISTS "Shopping_List_id_user_fkey";
ALTER TABLE IF EXISTS ONLY public."Shopping_List_Ingredient" DROP CONSTRAINT IF EXISTS "Shopping_List_Ingredient_id_ShoppingList_fkey";
ALTER TABLE IF EXISTS ONLY public."Shopping_List_Ingredient" DROP CONSTRAINT IF EXISTS "Shopping_List_Ingredient_id_Ingredients_fkey";
ALTER TABLE IF EXISTS ONLY public."Recipe" DROP CONSTRAINT IF EXISTS "Recipe_imageId_fkey";
ALTER TABLE IF EXISTS ONLY public."Recipe" DROP CONSTRAINT IF EXISTS "Recipe_UserId_fkey";
ALTER TABLE IF EXISTS ONLY public."Recipe_Type" DROP CONSTRAINT IF EXISTS "Recipe_Type_id_recipe_fkey";
ALTER TABLE IF EXISTS ONLY public."Recipe_Type" DROP CONSTRAINT IF EXISTS "Recipe_Type_id_recipeFilter_fkey";
ALTER TABLE IF EXISTS ONLY public."Recipe_Ingredient" DROP CONSTRAINT IF EXISTS "Recipe_Ingredient_id_recipe_fkey";
ALTER TABLE IF EXISTS ONLY public."Recipe_Ingredient" DROP CONSTRAINT IF EXISTS "Recipe_Ingredient_id_ingredient_fkey";
ALTER TABLE IF EXISTS ONLY public."Planner" DROP CONSTRAINT IF EXISTS "Planner_id_user_fkey";
ALTER TABLE IF EXISTS ONLY public."Instructions" DROP CONSTRAINT IF EXISTS "Instructions_id_recipe_fkey";
ALTER TABLE IF EXISTS ONLY public."Ingredient_Image" DROP CONSTRAINT IF EXISTS "Ingredient_Image_ingredientId_fkey";
ALTER TABLE IF EXISTS ONLY public."Favourite" DROP CONSTRAINT IF EXISTS "Favourite_id_user_fkey";
ALTER TABLE IF EXISTS ONLY public."Favourite" DROP CONSTRAINT IF EXISTS "Favourite_id_recipe_fkey";
DROP INDEX IF EXISTS public."User_username_key";
DROP INDEX IF EXISTS public."User_email_key";
DROP INDEX IF EXISTS public."Shopping_List_Ingredient_id_ShoppingList_id_Ingredients_key";
DROP INDEX IF EXISTS public."Recipe_imageId_key";
DROP INDEX IF EXISTS public."Recipe_Type_id_recipe_id_recipeFilter_key";
DROP INDEX IF EXISTS public."Recipe_Ingredient_id_recipe_id_ingredient_key";
DROP INDEX IF EXISTS public."Planner_id_user_key";
DROP INDEX IF EXISTS public."Favourite_id_user_id_recipe_key";
ALTER TABLE IF EXISTS ONLY public._prisma_migrations DROP CONSTRAINT IF EXISTS _prisma_migrations_pkey;
ALTER TABLE IF EXISTS ONLY public."User" DROP CONSTRAINT IF EXISTS "User_pkey";
ALTER TABLE IF EXISTS ONLY public."Shopping_List" DROP CONSTRAINT IF EXISTS "Shopping_List_pkey";
ALTER TABLE IF EXISTS ONLY public."Recipe" DROP CONSTRAINT IF EXISTS "Recipe_pkey";
ALTER TABLE IF EXISTS ONLY public."Recipe_Type" DROP CONSTRAINT IF EXISTS "Recipe_Type_pkey";
ALTER TABLE IF EXISTS ONLY public."Recipe_Filter" DROP CONSTRAINT IF EXISTS "Recipe_Filter_pkey";
ALTER TABLE IF EXISTS ONLY public."Planner" DROP CONSTRAINT IF EXISTS "Planner_pkey";
ALTER TABLE IF EXISTS ONLY public."Instructions" DROP CONSTRAINT IF EXISTS "Instructions_pkey";
ALTER TABLE IF EXISTS ONLY public."Ingredients" DROP CONSTRAINT IF EXISTS "Ingredients_pkey";
ALTER TABLE IF EXISTS ONLY public."Ingredient_Image" DROP CONSTRAINT IF EXISTS "Ingredient_Image_pkey";
ALTER TABLE IF EXISTS ONLY public."Image" DROP CONSTRAINT IF EXISTS "Image_pkey";
ALTER TABLE IF EXISTS public."User" ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public."Shopping_List" ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public."Recipe_Type" ALTER COLUMN "id_RecipeType" DROP DEFAULT;
ALTER TABLE IF EXISTS public."Recipe_Filter" ALTER COLUMN "id_RecipeFilter" DROP DEFAULT;
ALTER TABLE IF EXISTS public."Recipe" ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public."Planner" ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public."Instructions" ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public."Ingredients" ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public."Ingredient_Image" ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public."Image" ALTER COLUMN id DROP DEFAULT;
DROP TABLE IF EXISTS public._prisma_migrations;
DROP SEQUENCE IF EXISTS public."User_id_seq";
DROP TABLE IF EXISTS public."User";
DROP SEQUENCE IF EXISTS public."Shopping_List_id_seq";
DROP TABLE IF EXISTS public."Shopping_List_Ingredient";
DROP TABLE IF EXISTS public."Shopping_List";
DROP SEQUENCE IF EXISTS public."Recipe_id_seq";
DROP SEQUENCE IF EXISTS public."Recipe_Type_id_RecipeType_seq";
DROP TABLE IF EXISTS public."Recipe_Type";
DROP TABLE IF EXISTS public."Recipe_Ingredient";
DROP SEQUENCE IF EXISTS public."Recipe_Filter_id_RecipeFilter_seq";
DROP TABLE IF EXISTS public."Recipe_Filter";
DROP TABLE IF EXISTS public."Recipe";
DROP SEQUENCE IF EXISTS public."Planner_id_seq";
DROP TABLE IF EXISTS public."Planner";
DROP SEQUENCE IF EXISTS public."Instructions_id_seq";
DROP TABLE IF EXISTS public."Instructions";
DROP SEQUENCE IF EXISTS public."Ingredients_id_seq";
DROP TABLE IF EXISTS public."Ingredients";
DROP SEQUENCE IF EXISTS public."Ingredient_Image_id_seq";
DROP TABLE IF EXISTS public."Ingredient_Image";
DROP SEQUENCE IF EXISTS public."Image_id_seq";
DROP TABLE IF EXISTS public."Image";
DROP TABLE IF EXISTS public."Favourite";
DROP TYPE IF EXISTS public."Role";
-- *not* dropping schema, since initdb creates it
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

-- *not* creating schema, since initdb creates it


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS '';


--
-- Name: Role; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public."Role" AS ENUM (
    'ADMIN',
    'USER'
);


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Favourite; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Favourite" (
    id_user integer NOT NULL,
    id_recipe integer NOT NULL
);


--
-- Name: Image; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Image" (
    id integer NOT NULL,
    url text NOT NULL
);


--
-- Name: Image_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Image_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Image_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Image_id_seq" OWNED BY public."Image".id;


--
-- Name: Ingredient_Image; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Ingredient_Image" (
    id integer NOT NULL,
    url text NOT NULL,
    "ingredientId" integer NOT NULL
);


--
-- Name: Ingredient_Image_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Ingredient_Image_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Ingredient_Image_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Ingredient_Image_id_seq" OWNED BY public."Ingredient_Image".id;


--
-- Name: Ingredients; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Ingredients" (
    id integer NOT NULL,
    name text NOT NULL,
    type text NOT NULL
);


--
-- Name: Ingredients_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Ingredients_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Ingredients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Ingredients_id_seq" OWNED BY public."Ingredients".id;


--
-- Name: Instructions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Instructions" (
    id integer NOT NULL,
    id_recipe integer NOT NULL,
    steps_numerations text NOT NULL,
    "Description" text NOT NULL
);


--
-- Name: Instructions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Instructions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Instructions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Instructions_id_seq" OWNED BY public."Instructions".id;


--
-- Name: Planner; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Planner" (
    id integer NOT NULL,
    id_user integer NOT NULL
);


--
-- Name: Planner_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Planner_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Planner_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Planner_id_seq" OWNED BY public."Planner".id;


--
-- Name: Recipe; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Recipe" (
    id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    difficulty text NOT NULL,
    preparation_time integer NOT NULL,
    "UserId" integer NOT NULL,
    "imageId" integer
);


--
-- Name: Recipe_Filter; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Recipe_Filter" (
    "id_RecipeFilter" integer NOT NULL,
    "Name" text NOT NULL
);


--
-- Name: Recipe_Filter_id_RecipeFilter_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Recipe_Filter_id_RecipeFilter_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Recipe_Filter_id_RecipeFilter_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Recipe_Filter_id_RecipeFilter_seq" OWNED BY public."Recipe_Filter"."id_RecipeFilter";


--
-- Name: Recipe_Ingredient; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Recipe_Ingredient" (
    id_recipe integer NOT NULL,
    id_ingredient integer NOT NULL,
    measurement_unit text NOT NULL,
    quantity double precision NOT NULL
);


--
-- Name: Recipe_Type; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Recipe_Type" (
    "id_RecipeType" integer NOT NULL,
    id_recipe integer NOT NULL,
    "id_recipeFilter" integer NOT NULL
);


--
-- Name: Recipe_Type_id_RecipeType_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Recipe_Type_id_RecipeType_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Recipe_Type_id_RecipeType_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Recipe_Type_id_RecipeType_seq" OWNED BY public."Recipe_Type"."id_RecipeType";


--
-- Name: Recipe_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Recipe_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Recipe_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Recipe_id_seq" OWNED BY public."Recipe".id;


--
-- Name: Shopping_List; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Shopping_List" (
    id integer NOT NULL,
    id_user integer NOT NULL
);


--
-- Name: Shopping_List_Ingredient; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Shopping_List_Ingredient" (
    "id_ShoppingList" integer NOT NULL,
    "id_Ingredients" integer NOT NULL,
    quantity text NOT NULL,
    bought boolean NOT NULL
);


--
-- Name: Shopping_List_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Shopping_List_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Shopping_List_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Shopping_List_id_seq" OWNED BY public."Shopping_List".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    username text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    role public."Role" DEFAULT 'USER'::public."Role" NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    picture text
);


--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


--
-- Name: Image id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Image" ALTER COLUMN id SET DEFAULT nextval('public."Image_id_seq"'::regclass);


--
-- Name: Ingredient_Image id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Ingredient_Image" ALTER COLUMN id SET DEFAULT nextval('public."Ingredient_Image_id_seq"'::regclass);


--
-- Name: Ingredients id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Ingredients" ALTER COLUMN id SET DEFAULT nextval('public."Ingredients_id_seq"'::regclass);


--
-- Name: Instructions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Instructions" ALTER COLUMN id SET DEFAULT nextval('public."Instructions_id_seq"'::regclass);


--
-- Name: Planner id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Planner" ALTER COLUMN id SET DEFAULT nextval('public."Planner_id_seq"'::regclass);


--
-- Name: Recipe id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Recipe" ALTER COLUMN id SET DEFAULT nextval('public."Recipe_id_seq"'::regclass);


--
-- Name: Recipe_Filter id_RecipeFilter; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Recipe_Filter" ALTER COLUMN "id_RecipeFilter" SET DEFAULT nextval('public."Recipe_Filter_id_RecipeFilter_seq"'::regclass);


--
-- Name: Recipe_Type id_RecipeType; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Recipe_Type" ALTER COLUMN "id_RecipeType" SET DEFAULT nextval('public."Recipe_Type_id_RecipeType_seq"'::regclass);


--
-- Name: Shopping_List id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Shopping_List" ALTER COLUMN id SET DEFAULT nextval('public."Shopping_List_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Favourite; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Favourite" (id_user, id_recipe) FROM stdin;
\.


--
-- Data for Name: Image; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Image" (id, url) FROM stdin;
8	https://chefcito.blob.core.windows.net/photos/Salad.webp
9	https://chefcito.blob.core.windows.net/photos/burguer.webp
10	https://chefcito.blob.core.windows.net/photos/free-photo-of-rice-with-roasted-fish.jpeg
11	https://chefcito.blob.core.windows.net/photos/foodiesfeed.com_refreshing-lemon-cheesecake-slice-with-mint-garnish.jpg
12	https://chefcito.blob.core.windows.net/photos/cooked-seafood.jpeg
13	https://chefcito.blob.core.windows.net/photos/pancakes.webp
14	https://chefcito.blob.core.windows.net/photos/CreamySoup.jpg
\.


--
-- Data for Name: Ingredient_Image; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Ingredient_Image" (id, url, "ingredientId") FROM stdin;
35	https://chefcito.blob.core.windows.net/photos/Water.webp	35
36	https://chefcito.blob.core.windows.net/photos/cocoapower.webp	36
37	https://chefcito.blob.core.windows.net/photos/flour.webp	37
38	https://chefcito.blob.core.windows.net/photos/brownsugar.webp	38
39	https://chefcito.blob.core.windows.net/photos/Jalapeño.webp	39
40	https://chefcito.blob.core.windows.net/photos/salt.webp	40
41	https://chefcito.blob.core.windows.net/photos/Pepper.webp	41
42	https://chefcito.blob.core.windows.net/photos/milk.webp	42
43	https://chefcito.blob.core.windows.net/photos/paprika.webp	43
44	https://chefcito.blob.core.windows.net/photos/mushroom.webp	44
45	https://chefcito.blob.core.windows.net/photos/OliveOil.webp	45
46	https://em-content.zobj.net/source/apple/391/leafy-green_1f96c.png	46
47	https://em-content.zobj.net/source/apple/391/tomato_1f345.png	47
48	https://em-content.zobj.net/source/apple/391/cheese-wedge_1f9c0.png	48
49	https://em-content.zobj.net/source/apple/391/olive_1fad2.png	49
50	https://em-content.zobj.net/source/apple/391/black-circle_26ab.png	50
51	https://em-content.zobj.net/source/apple/391/cut-of-meat_1f969.png	51
52	https://em-content.zobj.net/source/apple/391/hamburger_1f354.png	52
53	https://em-content.zobj.net/source/apple/391/cheese-wedge_1f9c0.png	53
54	https://em-content.zobj.net/source/apple/391/tomato_1f345.png	54
55	https://em-content.zobj.net/source/apple/391/potato_1f954.png	55
56	https://em-content.zobj.net/source/apple/391/fish_1f41f.png	56
57	https://em-content.zobj.net/source/apple/391/cooked-rice_1f35a.png	57
58	https://em-content.zobj.net/source/apple/391/pot-of-food_1f372.png	58
59	https://em-content.zobj.net/source/apple/391/herb_1f33f.png	59
60	https://em-content.zobj.net/source/apple/391/cheese-wedge_1f9c0.png	60
61	https://em-content.zobj.net/source/apple/391/candy_1f36c.png	61
62	https://em-content.zobj.net/source/apple/391/lemon_1f34b.png	62
63	https://em-content.zobj.net/source/apple/391/cupcake_1f9c1.png	63
64	https://em-content.zobj.net/source/apple/391/cookie_1f36a.png	64
65	https://em-content.zobj.net/source/apple/391/butter_1f9c8.png	65
66	https://em-content.zobj.net/source/apple/391/herb_1f33f.png	66
67	https://em-content.zobj.net/source/apple/391/shrimp_1f990.png	67
68	https://em-content.zobj.net/source/apple/391/egg_1f95a.png	68
69	https://em-content.zobj.net/source/apple/391/spaghetti_1f35d.png	69
70	https://em-content.zobj.net/source/apple/391/hot-pepper_1f336-fe0f.png	70
71	https://em-content.zobj.net/source/apple/391/strawberry_1f353.png	71
72	https://em-content.zobj.net/source/apple/391/blueberries_1fad0.png	72
73	https://em-content.zobj.net/source/apple/391/tangerine_1f34a.png	73
74	https://em-content.zobj.net/source/apple/391/onion_1f9c5.png	74
75	https://em-content.zobj.net/source/apple/391/garlic_1f9c4.png	75
76	https://em-content.zobj.net/source/apple/391/herb_1f33f.png	76
77	https://em-content.zobj.net/source/apple/391/cheese-wedge_1f9c0.png	77
\.


--
-- Data for Name: Ingredients; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Ingredients" (id, name, type) FROM stdin;
35	Water	Base Ingredients
36	Cocoa Powder	Powder
37	Flour	Base Ingredients
38	Brown Sugar	Sweetener
39	Jalapeño	Vegetable
40	Salt	other
41	Pepper	Vegetable
42	Milk	Liquid
43	Paprika	Spicy
44	Mushroom	Vegetable
45	Olive Oil	oil
46	Lettuce	General
47	Cherry Tomato	General
48	Feta Cheese	General
49	Black Olive	General
50	Black Pepper	General
51	Beef Patty	General
52	Burger Bun	General
53	Cheddar Cheese	General
54	Tomato	General
55	Potato	General
56	Fish Fillet	General
57	Rice	General
58	Vegetable Broth	General
59	Parsley	General
60	Cream Cheese	General
61	Sugar	General
62	Lemon	General
63	Whipped Cream	General
64	Digestive Biscuits	General
65	Butter	General
66	Mint	General
67	Shrimp	General
68	Quail Egg	General
69	Rice Noodles	General
70	Chili Pepper	General
71	Strawberry	General
72	Blueberry	General
73	Orange	General
74	Onion	General
75	Garlic	General
76	Basil	General
77	Parmesan Cheese	General
\.


--
-- Data for Name: Instructions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Instructions" (id, id_recipe, steps_numerations, "Description") FROM stdin;
35	8	1	Wash and dry the lettuce.
36	8	2	Slice the cherry tomatoes in half.
37	8	3	Cut the feta cheese into cubes.
38	8	4	Mix lettuce, tomatoes, feta cheese, and olives in a bowl.
39	8	5	Drizzle with olive oil and season with salt and pepper to taste.
40	9	1	Form beef patties and season them with salt and pepper.
41	9	2	Grill or pan-fry the patties until cooked to desired doneness.
42	9	3	Toast the burger buns lightly.
43	9	4	Assemble the burgers with cheese, lettuce, tomato, and cooked patty.
44	9	5	Serve hot with crispy potato wedges and dipping sauce.
45	10	1	Season the fish fillet with salt and pepper.
46	10	2	Pan-sear the fish until crispy on the outside and tender inside.
47	10	3	Cook the rice with broth, stirring until creamy.
48	10	4	Plate the creamy rice and place the roasted fish fillet on top.
49	10	5	Garnish with chopped parsley and serve immediately.
50	11	1	Prepare the biscuit base by crushing biscuits and mixing with melted butter. Press into a cake tin.
51	11	2	Beat the cream cheese, sugar, lemon juice, and lemon zest until smooth.
52	11	3	Whip the cream and fold into the cheesecake mixture.
53	11	4	Pour over the biscuit base and refrigerate until set.
54	11	5	Top with whipped cream, extra lemon zest, and mint leaves before serving.
55	12	1	Boil the seafood in seasoned water.
56	12	2	Prepare the noodles as directed.
57	12	3	Combine seafood, quail eggs, and broth.
58	12	4	Garnish with fresh herbs and chili.
59	13	1	Mix the pancake batter until smooth.
60	13	2	Cook pancakes on a hot griddle until golden.
61	13	3	Stack the pancakes and top with berries and orange slices.
62	14	1	In a large pot, sauté chopped onions and garlic in olive oil until translucent.
63	14	2	Add chopped tomatoes and cook until softened.
64	14	3	Add vegetable broth and bring to a simmer.
65	14	4	Blend the soup until smooth, then stir in fresh basil and cream if desired.
66	14	5	Serve hot, topped with shaved Parmesan cheese and more fresh basil.
\.


--
-- Data for Name: Planner; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Planner" (id, id_user) FROM stdin;
\.


--
-- Data for Name: Recipe; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Recipe" (id, name, description, difficulty, preparation_time, "UserId", "imageId") FROM stdin;
8	Salad	A fresh and colorful salad made with crisp greens, juicy tomatoes, olives, feta cheese, and a light dressing.	Easy	10	1	8
9	Cheeseburger with Fries	Juicy beef burger with melted cheese, fresh lettuce, tomato, and crispy fries on the side.	Easy	20	1	9
10	Rice with Roasted Fish	Creamy risotto-style rice served with perfectly roasted fish, seasoned and pan-seared to perfection.	Medium	30	1	10
11	Lemon Cheesecake	Refreshing and creamy lemon cheesecake with a buttery biscuit base, topped with whipped cream and lemon zest.	Medium	45	1	11
12	Cooked Seafoods	A delicious seafood noodle soup with shrimp, quail eggs, and fresh herbs.	Medium	25	1	12
13	Pancakes	Fluffy pancakes stacked with fresh berries and orange slices, perfect for breakfast.	Easy	20	1	13
14	Tomato Basil Soup	A warm and comforting creamy tomato soup made with fresh basil and topped with shaved Parmesan cheese.	Easy	25	1	14
\.


--
-- Data for Name: Recipe_Filter; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Recipe_Filter" ("id_RecipeFilter", "Name") FROM stdin;
1	Vegan
2	Gluten-Free
3	Breakfast
4	Low-Calorie
5	Quick Lunch
6	Keto
7	Dessert
8	Dinner
9	Snack
10	Lunch
11	Spicy
12	Indian
13	Mediterranean
14	Italian
15	Japanese
\.


--
-- Data for Name: Recipe_Ingredient; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Recipe_Ingredient" (id_recipe, id_ingredient, measurement_unit, quantity) FROM stdin;
8	46	g	100
8	47	g	150
8	48	g	100
8	49	g	50
8	45	tbsp	2
8	40	tsp	1
8	50	tsp	0.5
9	51	unit	1
9	52	unit	1
9	53	slice	1
9	46	g	20
9	54	unit	1
9	55	g	150
9	40	tsp	1
9	50	tsp	0.5
10	56	unit	1
10	57	g	200
10	58	ml	400
10	45	tbsp	2
10	40	tsp	1
10	50	tsp	0.5
10	59	g	5
11	60	g	300
11	61	g	150
11	62	units	2
11	63	ml	150
11	64	g	200
11	65	g	100
11	66	g	5
12	67	g	200
12	68	units	5
12	69	g	150
12	70	unit	1
13	37	g	200
13	42	ml	250
13	71	g	50
13	72	g	30
13	73	unit	1
14	54	g	500
14	74	g	100
14	75	cloves	3
14	45	tbsp	2
14	58	ml	500
14	76	g	10
14	77	g	20
\.


--
-- Data for Name: Recipe_Type; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Recipe_Type" ("id_RecipeType", id_recipe, "id_recipeFilter") FROM stdin;
20	8	10
21	8	13
22	8	4
23	9	10
24	9	8
25	10	8
26	10	13
27	10	4
28	11	7
29	12	8
30	12	11
31	12	4
32	13	3
33	13	7
34	14	10
35	14	8
36	14	4
37	14	13
\.


--
-- Data for Name: Shopping_List; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Shopping_List" (id, id_user) FROM stdin;
\.


--
-- Data for Name: Shopping_List_Ingredient; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Shopping_List_Ingredient" ("id_ShoppingList", "id_Ingredients", quantity, bought) FROM stdin;
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."User" (id, username, email, password, role, "createdAt", "updatedAt", picture) FROM stdin;
2	Achu	azu@gmail.com	$2b$10$38pu3Jux.Uf7Abu/Q2trZu.9/Rz4etgZM1XGnmZnNPiyqMKZWu7i2	USER	2025-04-29 12:43:16.507	2025-04-29 13:47:35.531	\N
1	Bianca	chefcito@example.com	$2b$10$JjYjkCAh8KrUbXorZvxLFec6lte288wMnhX.5PO/KjXA5aSHOvDT6	USER	2025-04-28 20:04:46.919	2025-04-29 14:06:01.158	\N
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
12223ff3-31bb-462a-9897-fb509d3faa78	ddaa3d46e505e13f267dc6de255a24e0b5215558d4bcbfa2195f1862e567795c	2025-04-16 17:38:46.478187+00	20250326141630_update_users_table	\N	\N	2025-04-16 17:38:46.46206+00	1
4397a3df-d5ad-4b8a-a948-49b6fea179eb	7f8943c63117d730c42073d298cc07610965cbed404c421504053bfc2e96c15a	2025-04-16 17:38:46.498224+00	20250326201849_fix_recipe_table	\N	\N	2025-04-16 17:38:46.482269+00	1
0db11204-6048-45ae-95f5-abbbc55e27a5	a08c1215a360a83e03113a26e040a5156a64539d5aae08eb3505f2ed28393cac	2025-04-16 17:38:46.517174+00	20250326203122_add_favourites_table	\N	\N	2025-04-16 17:38:46.503349+00	1
1e7dbb3c-2d0c-43d3-b892-dde1be542ad9	433d9ecfd0759a417b66e1c6b1d4f910f08b0f1dba04eb6247988e190971b9bd	2025-04-16 17:38:46.534732+00	20250326205632_add_ingredients_table	\N	\N	2025-04-16 17:38:46.52101+00	1
84552854-eb88-42d1-9521-caf0aab4869f	7e00bfecf54c274c71fbf020c48b6082fe02296a3033a4cce85a3bc1c1f3a352	2025-04-16 17:41:43.786938+00	20250416174143_add_created_at_updated_at	\N	\N	2025-04-16 17:41:43.75457+00	1
30476913-dfe1-48c1-be47-7f8c58b951c6	c95f80bf2d4aa46f8fd995c11bb31dba188a2d168be4b1febc70067cf4d237bc	2025-04-16 22:57:59.819904+00	20250416225759_add_image_model	\N	\N	2025-04-16 22:57:59.769499+00	1
b7faf2b3-8a1c-4638-9c94-c613d1296b8e	f5223abc01e53fdcefd4beb27404b6aa9b511160f46fe8d9a46a84a3be9b2247	2025-04-22 13:54:50.475861+00	20250422135450_add_ingredient_images	\N	\N	2025-04-22 13:54:50.412765+00	1
\.


--
-- Name: Image_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Image_id_seq"', 14, true);


--
-- Name: Ingredient_Image_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Ingredient_Image_id_seq"', 77, true);


--
-- Name: Ingredients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Ingredients_id_seq"', 77, true);


--
-- Name: Instructions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Instructions_id_seq"', 66, true);


--
-- Name: Planner_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Planner_id_seq"', 1, false);


--
-- Name: Recipe_Filter_id_RecipeFilter_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Recipe_Filter_id_RecipeFilter_seq"', 1, false);


--
-- Name: Recipe_Type_id_RecipeType_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Recipe_Type_id_RecipeType_seq"', 37, true);


--
-- Name: Recipe_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Recipe_id_seq"', 14, true);


--
-- Name: Shopping_List_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Shopping_List_id_seq"', 1, false);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."User_id_seq"', 2, true);


--
-- Name: Image Image_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Image"
    ADD CONSTRAINT "Image_pkey" PRIMARY KEY (id);


--
-- Name: Ingredient_Image Ingredient_Image_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Ingredient_Image"
    ADD CONSTRAINT "Ingredient_Image_pkey" PRIMARY KEY (id);


--
-- Name: Ingredients Ingredients_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Ingredients"
    ADD CONSTRAINT "Ingredients_pkey" PRIMARY KEY (id);


--
-- Name: Instructions Instructions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Instructions"
    ADD CONSTRAINT "Instructions_pkey" PRIMARY KEY (id);


--
-- Name: Planner Planner_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Planner"
    ADD CONSTRAINT "Planner_pkey" PRIMARY KEY (id);


--
-- Name: Recipe_Filter Recipe_Filter_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Recipe_Filter"
    ADD CONSTRAINT "Recipe_Filter_pkey" PRIMARY KEY ("id_RecipeFilter");


--
-- Name: Recipe_Type Recipe_Type_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Recipe_Type"
    ADD CONSTRAINT "Recipe_Type_pkey" PRIMARY KEY ("id_RecipeType");


--
-- Name: Recipe Recipe_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Recipe"
    ADD CONSTRAINT "Recipe_pkey" PRIMARY KEY (id);


--
-- Name: Shopping_List Shopping_List_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Shopping_List"
    ADD CONSTRAINT "Shopping_List_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Favourite_id_user_id_recipe_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "Favourite_id_user_id_recipe_key" ON public."Favourite" USING btree (id_user, id_recipe);


--
-- Name: Planner_id_user_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "Planner_id_user_key" ON public."Planner" USING btree (id_user);


--
-- Name: Recipe_Ingredient_id_recipe_id_ingredient_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "Recipe_Ingredient_id_recipe_id_ingredient_key" ON public."Recipe_Ingredient" USING btree (id_recipe, id_ingredient);


--
-- Name: Recipe_Type_id_recipe_id_recipeFilter_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "Recipe_Type_id_recipe_id_recipeFilter_key" ON public."Recipe_Type" USING btree (id_recipe, "id_recipeFilter");


--
-- Name: Recipe_imageId_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "Recipe_imageId_key" ON public."Recipe" USING btree ("imageId");


--
-- Name: Shopping_List_Ingredient_id_ShoppingList_id_Ingredients_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "Shopping_List_Ingredient_id_ShoppingList_id_Ingredients_key" ON public."Shopping_List_Ingredient" USING btree ("id_ShoppingList", "id_Ingredients");


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: User_username_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "User_username_key" ON public."User" USING btree (username);


--
-- Name: Favourite Favourite_id_recipe_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Favourite"
    ADD CONSTRAINT "Favourite_id_recipe_fkey" FOREIGN KEY (id_recipe) REFERENCES public."Recipe"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Favourite Favourite_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Favourite"
    ADD CONSTRAINT "Favourite_id_user_fkey" FOREIGN KEY (id_user) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Ingredient_Image Ingredient_Image_ingredientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Ingredient_Image"
    ADD CONSTRAINT "Ingredient_Image_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES public."Ingredients"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Instructions Instructions_id_recipe_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Instructions"
    ADD CONSTRAINT "Instructions_id_recipe_fkey" FOREIGN KEY (id_recipe) REFERENCES public."Recipe"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Planner Planner_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Planner"
    ADD CONSTRAINT "Planner_id_user_fkey" FOREIGN KEY (id_user) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Recipe_Ingredient Recipe_Ingredient_id_ingredient_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Recipe_Ingredient"
    ADD CONSTRAINT "Recipe_Ingredient_id_ingredient_fkey" FOREIGN KEY (id_ingredient) REFERENCES public."Ingredients"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Recipe_Ingredient Recipe_Ingredient_id_recipe_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Recipe_Ingredient"
    ADD CONSTRAINT "Recipe_Ingredient_id_recipe_fkey" FOREIGN KEY (id_recipe) REFERENCES public."Recipe"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Recipe_Type Recipe_Type_id_recipeFilter_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Recipe_Type"
    ADD CONSTRAINT "Recipe_Type_id_recipeFilter_fkey" FOREIGN KEY ("id_recipeFilter") REFERENCES public."Recipe_Filter"("id_RecipeFilter") ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Recipe_Type Recipe_Type_id_recipe_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Recipe_Type"
    ADD CONSTRAINT "Recipe_Type_id_recipe_fkey" FOREIGN KEY (id_recipe) REFERENCES public."Recipe"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Recipe Recipe_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Recipe"
    ADD CONSTRAINT "Recipe_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Recipe Recipe_imageId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Recipe"
    ADD CONSTRAINT "Recipe_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES public."Image"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Shopping_List_Ingredient Shopping_List_Ingredient_id_Ingredients_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Shopping_List_Ingredient"
    ADD CONSTRAINT "Shopping_List_Ingredient_id_Ingredients_fkey" FOREIGN KEY ("id_Ingredients") REFERENCES public."Ingredients"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Shopping_List_Ingredient Shopping_List_Ingredient_id_ShoppingList_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Shopping_List_Ingredient"
    ADD CONSTRAINT "Shopping_List_Ingredient_id_ShoppingList_fkey" FOREIGN KEY ("id_ShoppingList") REFERENCES public."Shopping_List"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Shopping_List Shopping_List_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Shopping_List"
    ADD CONSTRAINT "Shopping_List_id_user_fkey" FOREIGN KEY (id_user) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

