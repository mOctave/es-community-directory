/*
Endless Sky Community Directory
Copyright (c) 2025 mOctave

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// MARK: Templates
const TEMPLATE = `
<div id="$ID$" class="card">
	<div class="left-bar">
		<img src="$AVATAR$" alt="$NAME$'s Profile Picture" class="avatar"/>
		<div class="$STATUS-CLASS$">$STATUS-DESC$</div>
		<div>$PRONOUNS$</div>
		<div>$COUNTRY$</div>
		<div>$GITHUB$</div>
	</div>
	<div class="projects">
		<div class="project-header">Projects:</div>
		$PROJECTS$
	</div>
	<h2 class="name-label">$NAME$</h2>
	<div class="aka-labels">$AKA-LABELS$</div>
	<div class="roles">$ROLES$</div>
	<hr/>
	<div class="description">$DESCRIPTION$</div>
	<div class="quote">$QUOTE$</div>
	<div class="projects-lower">$IMPORTANT-PROJECTS$</div>
</div>
`

const NO_PROJECT_TEMPLATE = `
<div id="$ID$" class="card">
	<div class="left-bar">
		<img src="$AVATAR$" alt="$NAME$'s Profile Picture" class="avatar"/>
		<div class="$STATUS-CLASS$">$STATUS-DESC$</div>
		<div>$PRONOUNS$</div>
		<div>$COUNTRY$</div>
		<div>$GITHUB$</div>
	</div>
	<h2 class="name-label">$NAME$</h2>
	<div class="aka-labels">$AKA-LABELS$</div>
	<div class="roles">$ROLES$</div>
	<hr/>
	<div class="description">$DESCRIPTION$</div>
	<div class="quote">$QUOTE$</div>
</div>
`



// MARK: Directory
const DIRECTORY = {
	// Template
	template: {
		// Your preffered or most common username.
		name: "Template",
		// If you use significantly different usernames on different platforms,
		// you can put one or two of them here. Remember to keep it to platforms
		// on which you actually interact with the ES community.
		// Recommended maximum of two short usernames or one long one.
		aka: {
			discord: "Discord Name",
			github: "GitHub Name",
			reddit: "Reddit Name",
			steam: "Steam Name"
		},
		// A URL leading to your avatar. If you link it to a GitHub avatar, it will
		// automatically update.
		avatar: "https://avatars.githubusercontent.com/octocat",
		// 0 = Active, 1 = On Hiatus, 2 = No longer active
		status: 1,
		// Your prefered pronouns. If you don't care, keep it as they/them.
		pronouns: "they/them",
		// The two-letter ISO country code corresponding to the country you live in.
		// Leave this blank if you don't want that to be public information.
		country: "",
		// A link to your GitHub page. Leave blank if you're not on GitHub.
		github: "https://github.com/octocat",
		// Your roles in the community. This will be filled out by the site maintainers.
		roles: ["Community Organizer", "Quarg Lead"],
		// A brief description of what you do in the community.
		description: `Write a short description of your role in the community here. This is probably about as long as it should be, or else bits might get cut off, but there's no hard limit.`,
		quote: `"A brief quote for when there's free space."`,
		// A place for you to link some of the ES-related stuff you're known for.
		// Please do not link to Endless Sky itself, we hopefully all know where to find it.
		// There's a soft limit of six projects total and three important projects.
		// Please try to use short names where possible.
		// "type" may be one of "plugin", "fork", "tool", "document", or "other".
		// Please arrange your projects in order of their type as shown above.
		// If you have no projects, please delete this entire key-value pair.
		projects: [
			{
				name: "My Plugin",
				type: "plugin",
				url: "https://example.com",
				important: true
			},
			{
				name: "Unimportant Fork",
				type: "fork",
				url: "https://example.com",
				important: false
			}
		]
	},
	// Anarchist2
	anarchist2: {
		name: "Anarchist2",
		avatar: "https://avatars.githubusercontent.com/Anarchist2",
		status: 0,
		pronouns: "she/her",
		country: "",
		github: "https://github.com/Anarchist2",
		roles: ["Developer"],
		description: `Developer who shows up on Discord approximately once every two days. Generally focused on writing content, but also the author of several code and artwork PRs.`,
		quote: `"All rocket engines are pipes."`,
	},
	// Arachi
	arachi: {
		name: "Arachi",
		aka: {
			github: "Arachi-Lover",
			reddit: "ArachiUnderYourBed",
			steam: "fgnt"
		},
		avatar: "https://avatars.githubusercontent.com/u/82293490?v=4",
		status: 0,
		pronouns: "he/him",
		country: "BR",
		github: "https://github.com/Arachi-Lover",
		roles: ["Core Member"],
		description: `Core member deeply involved with developing the Coalition and Quarg. Also the maintainer of height and population charts for various factions.`,
		quote: `"Arachi. Also poems. And charts. Look at my charts, Mark."`,
		projects: [
			{
				name: "LinearHPScaling",
				type: "plugin",
				url: "https://github.com/Arachi-Lover/LinearHPScaling",
				important: true
			},
			{
				name: "LowerDamage",
				type: "plugin",
				url: "https://github.com/Arachi-Lover/LowerDamage",
				important: true
			},
			{
				name: "EvenLowerDamage",
				type: "plugin",
				url: "https://github.com/Arachi-Lover/EvenLowerDamage",
				important: true
			},
		]
	},
	// Azure
	azure: {
		name: "Azure",
		aka: {
		},
		avatar: "https://avatars.githubusercontent.com/azure3141",
		status: 0,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/azure3141",
		roles: ["Core Member"],
		description: `Realism addict who adores the colour blue and a certain species of atomic space dragonflies. The reason Endless Sky doesn't work on your computer anymore.`,
		quote: `"List me down as an Arachi alt."`,
	},
	// bene_dictator
	bene_dictator: {
		name: "bene_dictator",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/bene-dictator",
		status: 0,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/bene-dictator",
		roles: ["Reviewer", "Oathkeeper", "Writing Patrol"],
		description: `The current longest-active writing reviewer and one of the GitHub organization's moderators. Not too active on GitHub anymore, although they tend to show up every once in a while on the Discord server.`,
		quote: `"I was requested for spelling? Oh my goodness, this needs a rewrite..."`,
	},
	// Delvin Anaris
	delvin_anaris: {
		name: "Delvin Anaris",
		aka: {
			github: "danaris"
		},
		avatar: "https://avatars.githubusercontent.com/danaris",
		status: 0,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/danaris",
		roles: ["Core Member", "Oathkeeper"],
		description: `Core member and GitHub moderator who is generally active on Discord and rarely appears on GitHub.`,
		quote: `"Please remove all talk of aliens from this channel."`,
	},
	// Darcy Manoel
	darcy_manoel: {
		name: "Darcy Manoel",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/DarcyManoel",
		status: 0,
		pronouns: "they/them",
		country: "AU",
		github: "https://github.com/DarcyManoel",
		roles: ["Moderator"],
		description: `Discord moderator and original creator of Omnis and the Endless Sky Creator's Handbook, as well as a number of other development tools.`,
		quote: `"Faction authors rule the world."`,
	},
	// Derpy Horse
	derpy_horse: {
		name: "Derpy Horse",
		aka: {
			github: "Amazinite"
		},
		avatar: "https://cdn.discordapp.com/avatars/251112413905158144/342b579baf3c9883b2237ade21c31af5",
		status: 0,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/amazinite",
		roles: ["Developer", "Discord Admin", "GitHub Admin"],
		description: `Current lead developer of Endless Sky in MZ's absence. Known for mass-closing PRs whenever he's on his "villain arc," but is otherwise pretty benevolent.`,
		quote: `"There is nothing new under the sun."`,
	},
	// Hecter94
	hecter94: {
		name: "Hecter94",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/u/15916854",
		status: 0,
		pronouns: "he/him",
		country: "US",
		github: "https://github.com/Hecter94",
		roles: ["Community Organizer", "GitHub Admin"],
		description: `Handles behind-the-scenes admin work and keeps things running smoothly. Manages the YouTube channel, plugin archive, and stream archive, sends out community surveys, and steps in to help with disputes or crises when they come up.`,
		quote: `"Friendly but vaguely threatening."`,
		projects: [
			{
				name: "Plugin Archive",
				type: "plugin",
				url: "https://github.com/Hecter94/EndlessSky-PluginArchive",
				important: true
			},
			{
				name: "Stream Archive",
				type: "other",
				url: "https://www.youtube.com/@Endless-Sky_Stream-Archive",
				important: true
			},
			{
				name: "Community Survey",
				type: "other",
				url: "https://app.formbricks.com/s/k8nm3i2gcv39n6o8filp1cci",
				important: false
			}
		]
	},
	// Hurleveur
	hurleveur: {
		name: "Hurleveur",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/Hurleveur",
		status: 0,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/Hurleveur",
		roles: ["Reviewer", "Code Patrol"],
		description: `Code reviewer who's played a large part in developing Hai and Unfettered content. Possibly one of the only ES higher-ups who's actually played the game recently.`,
		quote: `"I like coding. But that's not all I'm about."`,
	},
	// Koranir
	koranir: {
		name: "Koranir",
		aka: {},
		avatar: "https://cdn.discordapp.com/avatars/524517093564219395/25cc5e9f3d052ff06a502f91579328f4",
		status: 0,
		pronouns: "they/them",
		country: "AU",
		github: "https://github.com/Koranir",
		roles: ["Reviewer", "Code Patrol"],
		description: `Newer code reviewer responsible for variable swizzles and around fifty bugfixes.`,
		quote: `"Falling off the bottom of the Earth."`,
	},
	// Loymdayddaud
	loymdayddaud: {
		name: "Loymdayddaud",
		aka: {
		//	discord: "Loymdayddaud",
			github: "TheGiraffe3",
		//	reddit: "Loymdayddaud",
		},
		avatar: "https://avatars.githubusercontent.com/TheGiraffe3",
		status: 0,
		pronouns: "he/him",
		country: "SA",
		github: "https://github.com/TheGiraffe3",
		roles: ["Reviewer", "Writing Patrol", "Mission Patrol", "Omnis Lead"],
		description: `Content reviewer who admires long mission chains and dislikes typos. Creator of possibly-unbalanced plugins.`,
		// This is technically roadrunner's quote, but it's pretty funny.
		// Alternate quote if this one shouldn't be used for whatever reason:
		// quote: `"Volunteer projects need extra contributions to keep going."`
		quote: `"Typo detected. Initiating weapons engagement."`,
		projects: [
			{
				name: "Rumskib",
				type: "plugin",
				url: "https://github.com/TheGiraffe3/rumskib",
				important: true
			},
			{
				name: "ESCH",
				type: "document",
				url: "https://github.com/TheGiraffe3/Endless-Sky-Creators-Handbook",
				important: true
			},
			{
				name: "Omnis",
				type: "plugin",
				url: "https://github.com/EndlessSkyCommunity/-Omnis",
				important: true
			},
			{
				name: "Jibauni",
				type: "plugin",
				url: "https://github.com/TheGiraffe3/Jibauni",
				important: false
			},
		]
	},
	// Master of Grey
	master_of_grey: {
		name: "Master of Grey",
		aka: {
			discord: "Græy"
		},
		avatar: "https://avatars.githubusercontent.com/MasterOfGrey",
		status: 1,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/MasterOfGrey",
		roles: ["Community Organizer", "Moderator"],
		description: `Generally inactive community organizer involved with work on the Hai and leading the bording rework project. Shows up from time to time.`,
		quote: `"Crusading for community."`,
	},
	// Michael Zahniser
	mz: {
		name: "Michael Zahniser",
		aka: {
			github: "endless-sky"
		},
		avatar: "https://avatars.githubusercontent.com/endless-sky",
		status: 2,
		pronouns: "he/him",
		country: "",
		github: "https://github.com/endless-sky",
		roles: ["Original Developer", "GitHub Admin"],
		description: `The original developer of Endless Sky, now sadly gone from the community to pursue a normal life without being chased by adoring fans (or having to handle hundreds of PRs).`,
		quote: `"I hope you're enjoying the game!"`,
		projects: [
			{
				name: "All-Content Plugin",
				type: "plugin",
				url: "https://gitub.com/endless-sky/all-content-plugin",
				important: true
			},
			{
				name: "Classic Map Editor",
				type: "tool",
				url: "https://github.com/endless-sky/endless-sky-editor",
				important: true
			}
		]
	},
	// MCOfficer
	mcofficer: {
		name: "MCOfficer",
		aka: {
			discord: "M*C*O"
		},
		avatar: "https://avatars.githubusercontent.com/MCOfficer",
		status: 2,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/MCOfficer",
		roles: ["Developer"],
		description: `Old CI/CD-focused dev and the creator of ESLauncher2. Usually avoids the community but shows up occasionally to help fix James when he goes off the rails.`,
		quote: `"See, this is why I do Rust."`,
		projects: [
			{
				name: "ESLauncher2",
				type: "tool",
				url: "https://github.com/EndlessSkyCommunity/ESLauncher2",
				important: true
			},
			{
				name: "James Discord Bot",
				type: "tool",
				url: "https://github.com/EndlessSkyCommunity/EndlessSky-Discord-Bot",
				important: true
			}
		]
	},
	// mOctave
	moctave: {
		name: "mOctave",
		aka: {
			discord: "Erun Em-Oc-Ti-Ave of the Humans"
		},
		avatar: "https://avatars.githubusercontent.com/mOctave",
		status: 0,
		pronouns: "he/him",
		country: "ca",
		github: "https://github.com/mOctave",
		roles: ["Reviewer", "Writing Patrol"],
		description: `Content reviewer, creator of never-to-be-finished plugins, and developer of several development tools no one else ever uses. Oh, and the guy who developed this site.`,
		quote: `"No quotation without punctuation."`,
		projects: [
			{
				name: "Blended Ships",
				type: "plugin",
				url: "https://gitub.com/mOctave/blended-ships",
				important: true
			},
			{
				name: "Taskship",
				type: "plugin",
				url: "https://gitub.com/mOctave/taskship",
				important: false
			},
			{
				name: "Map Generator",
				type: "tool",
				url: "https://github.com/mOctave/mapgen",
				important: true
			},
			{
				name: "Weftspace",
				type: "tool",
				url: "https://github.com/mOctave/weftspace",
				important: true
			}
		]
	},
	// Nana Scone
	nana_scone: {
		name: "Nana Scone",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/NanaScone",
		status: 0,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/NanaScone",
		roles: ["Moderator", "Oathkeeper"],
		description: `The newest moderator, pretty much only active on Discord. Also the only member of the community to be a moderator on both Discord and GitHub.`,
		quote: `"Easter eggs never stay Easter eggs for long."`,
	},
	// petervdmeer
	petervdmeer: {
		name: "petervdmeer",
		aka: {
		},
		avatar: "https://avatars.githubusercontent.com/petervdmeer",
		status: 0,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/petervdmeer",
		roles: ["Developer", "GitHub Admin"],
		description: `Code-focused dev who's usually more active on GitHub than on Discord. Creator of the Hauler VI and part of the reason why we now have Doxygen support we never use.`,
		quote: `"Your hyperdrive doesn't work? Have you tried turning it off and on again?"`,
	},
	// Pointedstick
	pointedstick: {
		name: "Pointedstick",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/Pointedstick",
		status: 2,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/Pointedstick",
		roles: ["Developer"],
		description: `Old content and code dev who is no longer on Discord and hasn't been seen on GitHub since 2023. One of the original three people MZ gave repository write access to.`,
		quote: `"I need your clothes, your boots, and your motorcycle."`,
	},
	// Quantumshark
	quantumshark: {
		name: "Quantumshark",
		aka: {
			discord: "DoomKorath"
		},
		avatar: "https://avatars.githubusercontent.com/u/18634983?v=4",
		status: 0,
		pronouns: "he/him",
		country: "",
		github: "https://github.com/Quantumshark",
		roles: ["Developer", "Balance Patrol"],
		description: `Developer since 2023. Focusing primarily on balance and content. Responsible for the mass rebalance and hopefully eventually for the end of the Wanderer campaign.`,
		quote: `"Yeah, a lot of missiles could probably do with a nerf."`,
		projects: [
			{
				name: "Naltok",
				type: "plugin",
				url: "https://github.com/Quantumshark/ES-Naltok",
				important: false
			},
			{
				name: "Wanderers Continuation",
				type: "fork",
				url: "https://github.com/Quantumshark/endless-sky/tree/wanderer-campaign-continuation",
				important: true
			}
		]
	},
	// quyykk
	quyykk: {
		name: "quyykk",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/quyykk",
		status: 2,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/quyykk",
		roles: ["Developer", "Moderator"],
		description: `Old code dev and creator of the modern plugin editor. Last seen early 2024, but technically still a Discord mod.`,
		quote: `"My comment is nicer, take that."`,
		projects: [
			{
				name: "Plugin Editor",
				type: "tool",
				url: "https://github.com/quyykk/plugin-editor",
				important: true
			},
		]
	},
	// ravenshining
	ravenshining: {
		name: "ravenshining",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/ravenshining",
		status: 2,
		pronouns: "she/her",
		country: "",
		github: "https://github.com/ravenshining",
		roles: ["Former Member"],
		description: `Former Korath writer who also created artwork, did some sound editing, and wrote a little bit of C++ code on the side. Has left the community but can occasionally still be found on Swizzle Six.`,
		quote: `"Sorry, a Mereti ghost got hold of my phone for a sec."`
	},
	// Roadrunner56
	roadrunner56: {
		name: "Roadrunner56",
		aka: {
		},
		avatar: "https://avatars.githubusercontent.com/Roadrunner56",
		status: 0,
		pronouns: "they/them",
		country: "CA",
		github: "https://github.com/Roadrunner56",
		roles: ["Developer", "Writing Patrol"],
		description: `Mainly focuses on writing PRs and projects. Currently trying to flesh out the plot structure for the Republic campaign. Will one day finish the Bashkmul.`,
		quote: `"More semicolons!"`,
		projects: [
			{
				name: "Bashkmul",
				type: "plugin",
				url: "https://github.com/roadrunner56/Bashkmul",
				important: false
			},
		]
	},
	// Saugia
	saugia: {
		name: "Saugia",
		aka: {
		},
		avatar: "https://avatars.githubusercontent.com/Saugia",
		status: 0,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/Saugia",
		roles: ["Developer", "Art Patrol"],
		description: `Art developer and creator of the Gegno. One of the most active ES devs on Discord, now also doing a significant amount of content review and writing as well.`,
		quote: `"Down with tangents, up with overlaps."`,
	},
	// tehhowch
	tehhowch: {
		name: "tehhowch",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/tehhowch",
		status: 2,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/tehhowch",
		roles: ["Developer"],
		description: `Old code dev who vanished in 2022, but who still has (briefly) more commits to the GitHub repository than anyone else ever. One of the original three people MZ gave repository write access to.`,
		quote: `"The heavy rockets usually spell the end for Captain Nate."`,
	},
	// thewierdnut
	thewierdnut: {
		name: "thewierdnut",
		aka: {},
		avatar: "https://cdn.discordapp.com/avatars/960168588340256798/5a825d985616d48a4742a7019cba9f32",
		status: 0,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/thewierdnut",
		roles: ["Core Member", "Android Lead"],
		description: `Creator and maintainer of the Android port of Endless Sky. Moderately active, often found discussing said Android port.`,
		quote: `"Attempts compile, finds botched merge, fixes, repeats."`,
		projects: [
			{
				name: "Android Port",
				type: "fork",
				url: "https://github.com/thewierdnut/endless-mobile",
				important: true
			},
		]
	},
	// tibetiroka
	tibetiroka: {
		name: "tibetiroka",
		aka: {
			discord: "I touched the images again"
		},
		avatar: "https://avatars.githubusercontent.com/tibetiroka",
		status: 0,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/tibetiroka",
		roles: ["Developer", "Code Patrol", "Writing Patrol"],
		description: `Developer, code and writing reviewer, and CI/CD master. Has recently been foolishly touching images.`,
		quote: `"It's just the Steam CI, no need to panic."`,
	},
	// TomGoodIdea
	tomgoodidea: {
		name: "TomGoodIdea",
		aka: {
			discord: "TOMGOO~1.EXE"
		},
		avatar: "https://avatars.githubusercontent.com/TomGoodIdea",
		status: 0,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/tibetiroka",
		roles: ["Developer", "Code Patrol"],
		description: `Extremely prolific code dev and reviewer who's responsible for a lot of UI improvements despite never really touching the images.`,
		quote: `"Yes."`,
	},
	// Unordered Sigh
	unordered_sigh: {
		name: "Unordered Sigh",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/UnorderedSigh",
		status: 2,
		pronouns: "she/her",
		country: "",
		github: "https://github.com/UnorderedSigh",
		roles: ["Former Member"],
		description: `Former C++ and Java programmer involved in writing for the Korath. Has left the community but can occasionally still be found on Swizzle Six alongside her improved version of James.`,
		quote: `"I need one word or an idiom or a very few words."`,
	},
	// Warlord Mike
	warlord_mike: {
		name: "Warlord Mike",
		aka: {},
		avatar: "https://cdn.discordapp.com/avatars/338351421189652490/fbc4a8614e3ba86deb9001f80d248142",
		status: 1,
		pronouns: "they/them",
		country: "",
		github: "",
		roles: ["Moderator"],
		description: `Onetime moderator and Republic campaign writer. Now mostly inactive, but shows up every once in a while on Discord.`,
		quote: `"Flamethrowers also help."`,
	},
	// warp_core
	warp_core: {
		name: "warp_core",
		aka: {
			discord: "weft_core"
		},
		avatar: "https://avatars.githubusercontent.com/warp-core",
		status: 0,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/warp-core",
		roles: ["Developer", "Moderator"],
		description: `The last remaining code dev who was active in 2016. Maintains 90% of the miscellaneous code stuff everyone else is too lazy to deal with, and hides from the Discord server in #the-inner-circle.`,
		quote: `"It's true. The warp core is a fictional device."`,
	},
	// W1zrad
	w1zrad: {
		name: "W1zrad",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/W1zrad",
		status: 2,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/W1zrad",
		roles: ["Developer"],
		description: `Mostly inactive developer historically focused on doing reviews. Typically shows up on Discord every couple of months.`,
		quote: `"I'm here to add my increasingly irrelevant two cents."`,
	},
	// ziproot
	ziproot: {
		name: "ziproot",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/ziproot",
		status: 0,
		pronouns: "he/him",
		country: "",
		github: "https://github.com/ziproot",
		roles: ["Core Member", "Oathkeeper"],
		description: `GitHub moderator and creator of the Main Plot Plus plugin. Mostly active in #the-inner-circle.`,
		quote: `"I finally got it to crash."`,
		projects: [
			{
				name: "Main Plot Plus",
				type: "plugin",
				url: "https://github.com/ziproot/endless-sky-main-plot-plus",
				important: true
			},
			{
				name: "Gyrwyr Colonization",
				type: "plugin",
				url: "https://github.com/ziproot/gyrrwr-colonization",
				important: true
			}
		]
	},
	// Zitchas
	zitchas: {
		name: "Zitchas",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/Zitchas",
		status: 2,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/Zitchas",
		roles: ["Core Member"],
		description: `Former GitHub administrator and writer of Remnant content, and one of only four people with more than 400 commits to the GitHub repo. Left the community but can still occasionally be found on Swizzle Six.`,
		quote: `"May the Embers burn bright for you."`
	},
	// Zoura
	zoura: {
		name: "Zoura",
		aka: {
			github: "AvianGeneticist"
		},
		avatar: "https://cdn.discordapp.com/avatars/450719725538770944/315eee3a5aff87c398a396f5e00c5a32",
		status: 0,
		pronouns: "he/him",
		country: "",
		github: "https://github.com/AvianGeneticist",
		roles: ["Community Organizer"],
		description: `Organizer of tournaments, distributor of pixelated carrots, and creator of 95% of wacky, hacky, and hilarious plugins.`,
		quote: `"Tastebuds have become a vestigial body part."`,
	},
}



// MARK: Global Variables
const COUNTRY_FINDER = new Intl.DisplayNames(["en"], { type: "region", style: "short" });
let standardFilter = {
	search_key: "",
	search_mode: "standard",
	filter_deck: [],
	match_case: false
}



// MARK: Event Listeners
window.addEventListener("load", () => {
	console.log("Page is loaded. Attempting to load directory cards.");
	document.getElementById("search-field").value = "";
	document.getElementById("search-mode").value = "standard";
	loadDirectoryCards();
});

document.getElementById("search-field").addEventListener("input", () => {
	standardFilter.search_key = document.getElementById("search-field").value;
});

document.getElementById("search-mode").addEventListener("input", () => {
	standardFilter.search_mode = document.getElementById("search-mode").value;
});

document.getElementById("search-mode").addEventListener("input", () => {
	standardFilter.search_mode = document.getElementById("search-mode").value;
});

document.getElementById("match-case").addEventListener("input", () => {
	standardFilter.match_case = document.getElementById("match-case").checked;
});



// MARK: Load Cards
function loadDirectoryCards() {
	let noMatch = true;
	document.getElementById("card-container").innerHTML = "";
	for (person in DIRECTORY) {
		if(!matches(DIRECTORY[person], standardFilter))
			continue;

		noMatch = false;

		let card = DIRECTORY[person].projects ? `${TEMPLATE}` : `${NO_PROJECT_TEMPLATE}`;

		// ID
		card = card.replaceAll("$ID$", person);


		// Name
		if (DIRECTORY[person].name) {
			card = card.replaceAll("$NAME$", DIRECTORY[person].name);
		} else {
			console.warn(`No valid name for "${person}"...`);
			card = card.replaceAll("$NAME$", "???");
		}


		// Avatar
		if (DIRECTORY[person].avatar) {
			card = card.replaceAll("$AVATAR$", DIRECTORY[person].avatar);
		} else {
			console.warn(`No valid avatar for "${person}"...`);
			card = card.replaceAll("$AVATAR$", "https://placehold.net/7-800x600.png");
		}


		// Status
		switch(DIRECTORY[person].status) {
			case 0:
				card = card.replaceAll("$STATUS-CLASS$", "active")
					.replaceAll("$STATUS-DESC$", "Active")
				break;
			case 1:
				card = card.replaceAll("$STATUS-CLASS$", "hiatus")
					.replaceAll("$STATUS-DESC$", "On Hiatus")
				break;
			case 2:
				card = card.replaceAll("$STATUS-CLASS$", "old-member")
					.replaceAll("$STATUS-DESC$", "Old Member")
				break;
			default:
				console.warn(`No valid status for "${person}"...`);
				card = card.replaceAll("$STATUS-DESC$", "Unknown")
		}


		// Pronouns
		if (DIRECTORY[person].pronouns) {
			card = card.replaceAll("$PRONOUNS$", DIRECTORY[person].pronouns);
		} else {
			console.warn(`No valid pronouns for "${person}"...`);
			card = card.replaceAll("$PRONOUNS$", "they/them");
		}


		// Country
		try {
			const countryName = COUNTRY_FINDER.of(DIRECTORY[person].country.toUpperCase());
			const flag = Array.from(DIRECTORY[person].country.toUpperCase())
				.map(char => String.fromCodePoint(char.charCodeAt(0) + 127397)).join("");

			card = card.replaceAll("$COUNTRY$", `${flag} ${countryName}`);
		} catch (e) {
			if (DIRECTORY[person].country)
				console.warn(e);

			card = card.replaceAll("$COUNTRY$", `🌎 Earth`);
		}


		// GitHub Link
		if (DIRECTORY[person].github) {
			card = card.replaceAll(
				"$GITHUB$",
				`<a href="${DIRECTORY[person].github}">GitHub <span class="fa-solid fa-arrow-up-right-from-square"></span></a>`
			);
		} else {
			card = card.replaceAll("$GITHUB$", "");
		}

		// AKA Labels
		try {
			let akaLabels = "";

			if (DIRECTORY[person].aka.discord) {
				akaLabels += `<span class="aka-label"><span class="fa-brands fa-discord"></span>&nbsp;${DIRECTORY[person].aka.discord}</span>`;
			}

			if (DIRECTORY[person].aka.github) {
				akaLabels += `<span class="aka-label"><span class="fa-brands fa-github"></span>&nbsp;${DIRECTORY[person].aka.github}</span>`;
			}

			if (DIRECTORY[person].aka.reddit) {
				akaLabels += `<span class="aka-label"><span class="fa-brands fa-reddit"></span>&nbsp;${DIRECTORY[person].aka.reddit}</span>`;
			}

			if (DIRECTORY[person].aka.steam) {
				akaLabels += `<span class="aka-label"><span class="fa-brands fa-steam"></span>&nbsp;${DIRECTORY[person].aka.steam}</span>`;
			}
		
			card = card.replaceAll("$AKA-LABELS$", akaLabels);

		} catch {
			console.warn(`Missing "aka" section for "${person}"...`);
			card = card.replaceAll("$AKA-LABELS$", "");
		}


		// Roles
		if (DIRECTORY[person].roles) {
			let noRoleAdded = true;
			let roleDesc = "";
			for (role of DIRECTORY[person].roles) {
				const roleClass = chooseRoleClass(role);
				if (!noRoleAdded)
					roleDesc += " • ";

				roleDesc += `<span class="${roleClass}">${role}</span>`;
				noRoleAdded = false;
			}
			card = card.replaceAll("$ROLES$", roleDesc);
		} else {
			console.warn(`No valid roles for "${person}"...`);
			card = card.replaceAll("$ROLES$", "");
		}

		
		// Description
		if (DIRECTORY[person].description) {
			card = card.replaceAll("$DESCRIPTION$", DIRECTORY[person].description);
		} else {
			console.warn(`No valid description for "${person}"...`);
			card = card.replaceAll("$DESCRIPTION$", "A member of the Endless Sky community.");
		}

		
		// Quote
		if (DIRECTORY[person].quote) {
			card = card.replaceAll("$QUOTE$", DIRECTORY[person].quote);
		} else {
			console.warn(`No valid quote for "${person}"...`);
			card = card.replaceAll("$QUOTE$", "\"There's nothing to see here.\"");
		}

		// Projects
		try {
			if (DIRECTORY[person].projects) {
				let noImportantsAdded = true;
				let allProjects = "";
				let importantProjects = "";
				for (project of DIRECTORY[person].projects) {
					const icon = chooseIcon(project.type);
					allProjects += `<div class="project"><a href="${project.url}">${icon} ${project.name}</a></div>`;
					if (project.important) {
						if (!noImportantsAdded)
							importantProjects += " • ";

						importantProjects += `<span class="project"><a href="${project.url}">${project.name}</a></span>`;
						noImportantsAdded = false;
					}
				}
				card = card.replaceAll("$PROJECTS$", allProjects)
					.replaceAll("$IMPORTANT-PROJECTS$", importantProjects);
			}
		} catch (e) {
			console.error(e);
		}

		document.getElementById("card-container").innerHTML += card;
	}

	if (noMatch) {
		document.getElementById("card-container").innerHTML +=
		`<div id="nocard">There are no cards to display here!</div>`
	}
}



// MARK: Search
function matches(entry, filter) {
	if (!filter)
		return true;

	if (filter.search_key) {
		let search_match = false;
		const key = searchFormat(filter.search_key);
		switch (filter.search_mode) {
			case "standard":
				if (entry.aka) {
					for (i in entry.aka) {
						if (searchFormat(entry.aka[i]).includes(key)) {
							search_match = true;
							break;
						}
					}
				}
			case "name-contains":
				if (entry.name && searchFormat(entry.name).includes(key))
					search_match = true;
				break;
			case "name-starts-with":
				if (entry.name && searchFormat(entry.name).startsWith(key))
					search_match = true;
				break;
			case "name-regex":
				if (entry.name && entry.name.search(new RegExp(filter.search_key)) >= 0)
					search_match = true;
				break;
			case "description-contains":
				if (entry.description && searchFormat(entry.description).includes(key))
					search_match = true;
				break;
			case "projects-contain":
				if (entry.projects) {
					for (i in entry.projects) {
						if (searchFormat(entry.projects[i].name).includes(key)) {
							search_match = true;
							break;
						}
					}
				}
				break;
			default:
				console.warn("Invalid search mode!");
				break;
		}

		if (search_match === false)
			return false;
	}

	return true;
}


function searchFormat(string) {
	let output = string;
	if (!standardFilter.match_case)
		output = output.toUpperCase();

	return output;
}



function chooseIcon(type) {
	switch(type) {
		case "plugin":
			return `<span class="fa-solid fa-plug"></span>`;
		case "fork":
			return `<span class="fa-solid fa-code-fork"></span>`;
		case "tool":
			return `<span class="fa-solid fa-gear"></span>`;
		case "document":
			return `<span class="fa-regular fa-file"></span>`;
		default:
			return `<span class="fa-solid fa-link"></span>`;
	}
}



// MARK: Other Functions
function chooseRoleClass(role) {
	switch(role) {
		case "Developer":
			return "discord-role developer";
		case "Community Organizer":
			return "discord-role community-organizer";
		case "Moderator":
			return "discord-role moderator";
		case "Reviewer":
			return "discord-role reviewer";
		case "Core Member":
			return "discord-role core-member";
		case "Privateer (Potato)":
			return "discord-role privateer-potato";
		case "Privateer":
			return "discord-role privateer";
		case "Merchant":
			return "discord-role merchant";
		case "Community Organizer":
			return "discord-role community-organizer";
		case "Code Patrol":
			return "github-role code-patrol";
		case "Art Patrol":
			return "github-role art-patrol";
		case "Writing Patrol":
			return "github-role writing-patrol";
		case "Theme Patrol":
			return "github-role theme-patrol";
		case "Balance Patrol":
			return "github-role balance-patrol";
		case "Mission Patrol":
			return "github-role mission-patrol";
		case "Oathkeeper":
			return "github-role oathkeeper";
		default:
			return "other-role";
	}
}

function toggleSearchOptions() {
	const options = document.getElementById("advanced-search-options");
	const toggle = document.getElementById("search-option-toggle");
	if (options.classList.contains("nodisplay")) {
		options.classList.remove("nodisplay");
		toggle.innerText = "Hide Options";
	} else {
		options.classList.add("nodisplay");
		toggle.innerText = "More Options";
	}

}
