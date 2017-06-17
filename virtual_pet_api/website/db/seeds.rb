# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Model commands
#rails g model Evolution default, Low Med, Hard, Evil, Bad, 
#rails g model Digimon id:int species:string stage:string image:string
#rails g model Evolutions base_species:string to_species:string priority:1 condition:???



Digimon.create([{
	species: "Dead",
	stage: "egg",
	image: "http://i.imgur.com/wPkyvgE.png"},
	{
		species: "Botamon",
		stage: "babyI",
		image: "https://wikimon.net/images/2/26/Botamon_vpet_dm.gif"
	},
	{
		species: "Koromon",
		stage: "babyII",
		image: "https://wikimon.net/images/6/68/Koromon_vpet_dm.gif",
	},
	{
		species: "Agumon",
		stage: "child",
		image: "https://wikimon.net/images/e/ee/Agumon_vpet_dm.gif",
	},
	{
		species: "Betamon",
		stage: "child",
		image: "https://wikimon.net/images/6/65/Betamon_vpet_dm.gif",
	},
	{
		species: "Greymon",
		stage:"adult",
		image: "https://wikimon.net/images/2/27/Greymon_vpet_dm.gif"
	},
	{
		species: "Devimon",
		stage:"adult",
		image: "https://wikimon.net/images/7/74/Devimon_vpet_pen.gif",
	},
	{
		species: "Airdramon",
		stage:"adult",
		image: "https://wikimon.net/images/c/c2/Airdramon_vpet_dm.gif",
	},
	{
		species: "Tyranomon",
		stage:"adult",
		image: "https://wikimon.net/images/e/ea/Tyranomon_vpet_dm.gif",
	},
	{
		species: "Meramon",
		stage:"adult",
		image: "https://wikimon.net/images/5/57/Meramon_vpet_pen.gif",
	},
	{
		species: "Numemon",
		stage:"adult",
		image: "https://wikimon.net/images/7/78/Numemon_vpet_dvic.gif",
	},
	{
		species: "Seadramon",
		stage:"adult",
		image: "https://wikimon.net/images/c/cb/Seadramon_vpet_pen.gif",
	},
	{
		species: "MetalGreymon",
		stage: "perfect",
		image: "https://wikimon.net/images/1/18/Metalgreymon_vpet_pen.gif",
	},
	{
		species: "Mamemon",
		stage: "perfect",
		image: "https://wikimon.net/images/2/20/Mamemon_vpet_dm.gif",
	},
	{
		species: "Monzaemon",
		stage: "perfect",
		image: "https://wikimon.net/images/e/e5/Monzaemon_vpet_dm.gif",
	},
	{
		species: "DeathMeramon",
		stage: "perfect",
		image: "https://wikimon.net/images/6/6d/Deathmeramon_vpet_pen.gif",
	},
	{
		species: "Myotismon",
		stage: "perfect",
		image: "https://wikimon.net/images/f/f0/Vamdemon_vpet_pen.gif",
	},
	{
		species: "Mega Seadramon",
		stage: "perfect",
		image: "https://wikimon.net/images/9/9a/Megaseadramon_vpet_pen.gif",
	},
	{
		species: "Metal Tyranomon",
		stage: "perfect",
		image: "https://wikimon.net/images/f/f2/Metaltyranomon_vpet_dm.gif",
	},
	{
		species: "Megadramon",
		stage: "perfect",
		image: "https://wikimon.net/images/f/f3/Megadramon_vpet_dm.gif",
	},
	{
		species: "WarGreymon",
		stage: "ultimate",
		image: "https://wikimon.net/images/0/04/Wargreymon_vpet_20th.gif",
	}
	])