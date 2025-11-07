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
	<div class="left-panel">
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
	<div class="centre-panel">
		<h2 class="name-label">$NAME$<div class="badge-container">$BADGES$</div></h2>
		<div class="aka-labels">$AKA-LABELS$</div>
		<div class="roles">$ROLES$</div>
		<hr/>
		<div class="card-body">
			<div class="description">$DESCRIPTION$</div>
			<div class="quote">$QUOTE$</div>
			<div class="projects-lower">$IMPORTANT-PROJECTS$</div>
		</div>
	</div>
</div>
`

const NO_PROJECT_TEMPLATE = `
<div id="$ID$" class="card">
	<div class="left-panel">
		<img src="$AVATAR$" alt="$NAME$'s Profile Picture" class="avatar"/>
		<div class="$STATUS-CLASS$">$STATUS-DESC$</div>
		<div>$PRONOUNS$</div>
		<div>$COUNTRY$</div>
		<div>$GITHUB$</div>
	</div>
	<div class="centre-panel">
		<h2 class="name-label">$NAME$<div class="badge-container">$BADGES$</div></h2>
		<div class="aka-labels">$AKA-LABELS$</div>
		<div class="roles">$ROLES$</div>
		<hr/>
		<div class="card-body">
			<div class="description">$DESCRIPTION$</div>
			<div class="quote">$QUOTE$</div>
		</div>
	</div>
</div>
`



const ROLE_INFO = {
	"Developer": {
		class: "discord-role developer",
		tooltip: "This person has the Developer role on Discord and write access to the GitHub repository."
	},
	"Community Organizer": {
		class: "discord-role community-organizer",
		tooltip: "This person is responsible for organizing and maintaining the community."
	},
	"Moderator": {
		class: "discord-role moderator",
		tooltip: "This person is responsible for organizing and maintaining the community."
	},
	"Reviewer": {
		class: "discord-role reviewer",
		tooltip: "This person is designated as a reviewer on Discord."
	},
	"Core Member": {
		class: "discord-role core-member",
		tooltip: "This Discord member has been allowed into #the-inner-circle."
	},
	"Privateer (Potato)": {
		class: "discord-role privateer-potato",
		tooltip: "This Discord member is, or once was, *way* too active."
	},
	"Privateer": {
		class: "discord-role privateer",
		tooltip: "This Discord member is familiar with the workings of the server."
	},
	"Merchant": {
		class: "discord-role merchant",
		tooltip: "This person is on the Discord server."
	},
	"Maintainer": {
		class: "github-role maintainer",
		tooltip: "This dev has maintenance access to the GitHub repository."
	},
	"Oathkeeper": {
		class: "github-role oathkeeper",
		tooltip: "This person is a GitHub moderator."
	},
	"Code Patrol": {
		class: "github-role code-patrol",
		tooltip: "This person does code review."
	},
	"Art Patrol": {
		class: "github-role art-patrol",
		tooltip: "This person does art review."
	},
	"Writing Patrol": {
		class: "github-role writing-patrol",
		tooltip: "This person does writing review."
	},
	"Theme Patrol": {
		class: "github-role theme-patrol",
		tooltip: "This person does theme review."
	},
	"Balance Patrol": {
		class: "github-role balance-patrol",
		tooltip: "This person does balance review."
	},
	"Mission Patrol": {
		class: "github-role mission-patrol",
		tooltip: "This person does writing review."
	},
	"Discord Admin": {
		class: "admin-role",
		tooltip: "This person has full admin access to the Discord server."
	},
	"GitHub Admin": {
		class: "admin-role",
		tooltip: "This person has full admin access to the GitHub organization."
	},
	"Wiki Admin": {
		class: "admin-role",
		tooltip: "This person is in charge of the Fandom bureaucracy."
	},
	"Android Lead": {
		class: "other-role",
		tooltip: "This person currently maintains the Android port of Endless Sky."
	},
	"Former Member": {
		class: "other-role",
		tooltip: "This person no longer has any roles in the community."
	},
	"Original Developer": {
		class: "other-role",
		tooltip: "This person is to blame for the game existing."
	},
}


const BADGE_TOOLTIPS = {
	"alpha": "This person likes the Alphas.",
	"arach": "This person likes the Arachi.",
	"archon": "This person likes the Archons.",
	"avgi": "This person likes the Avgi.",
	"bunrodea": "This person likes the Bunrodea.",
	"compass": "This person likes the compass logo?",
	"efret": "This person likes the Kor Efret.",
	"email": "This person likes to abuse the badge system.",
	"exile": "This person likes the Korath Exiles.",
	"fw": "This person likes the Free Worlds.",
	"gegno": "This person likes the Gegno.",
	"hai": "This person likes the Hai.",
	"heliarch": "This person likes the Heliarchs.",
	"incipias": "This person likes the Incipias.",
	"ka'het": "This person likes the Ka'het.",
	"kimek": "This person likes the Kimek.",
	"merchant": "This person likes human merchants.",
	"mereti": "This person likes the Kor Mereri.",
	"pirate": "This person likes pirates.",
	"pug": "This person likes the Pug.",
	"quarg": "This person likes the Quarg.",
	"remnant": "This person likes the Remnant.",
	"republic": "This person likes the Republic.",
	"saryd": "This person likes the Saryds.",
	"sestor": "This person likes the Kor Sestor.",
	"sheragi": "This person likes the Sheragi.",
	"subsidurial": "Subsidurial!!",
	"successor": "This person likes the Successors.",
	"syndicate": "This person likes the Syndicate.",
	"unfettered": "This person likes the Unfettered Hai.",
	"wanderer": "This person likes the Wanderers.",
}



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
			name: "IRL Name",
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
		],
		// If you would like people to contact you by email, you can add your email address
		// here. Otherwise, leave this entry blank.
		email: "youremail@example.com",
		// If you would like people to contact you on Discord, name the server where they
		// can find you here. Otherwise, leave this entry blank.
		// Should be one of "main", "s6", or "mafia"
		discord: "main",
		// Add up to two or three "faction alignment" badges. Names should be lowercase and
		// match one of the images in the img directory of the repo (see below).
		// This is purely decorative and absolutely optional.
		//
		// alpha | arach | archon | avgi | bunrodea | compass | efret | exile
		// fw | gegno | hai | heliarch | incipias | ka'het | kimek | merchant
		// mereti | pirate | pug | quarg | remnant | republic | saryd | sestor
		// sheragi | subsidurial | successor | syndicate | unfettered | wanderer
		badges: ["compass"],
	},
	// 1010todd
	_1010todd: {
		name: "1010todd",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/1010todd",
		status: 0,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/1010todd",
		roles: ["Core Member"],
		description: `Plugin author known for Mega Freight and Galactic War. Also responsible for creating a number of models for the vanilla game.`,
		quote: `"Now try to dominate the Republic a year post-FW."`,
	},
	// Anarchist2
	anarchist2: {
		name: "Anarchist2",
		avatar: "https://avatars.githubusercontent.com/Anarchist2",
		status: 0,
		pronouns: "she/her",
		country: "",
		github: "https://github.com/Anarchist2",
		roles: ["Developer", "Maintainer"],
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
		],
		badges: ["arach"]
	},
	// Azure
	azure: {
		name: "Azure",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/azure3141",
		status: 0,
		pronouns: "he/him",
		country: "",
		github: "https://github.com/azure3141",
		roles: ["Core Member"],
		description: `Realism addict who adores the color blue and a certain species of atomic space dragonflies. The reason Endless Sky doesn't work on your computer anymore.`,
		quote: `"List me down as an Arachi alt."`,
		badges: ["avgi"]
	},
	// beccabunny
	beccabunny: {
		name: "beccabunny",
		aka: {
			discord: "b... mia b...",
			name: "Becca Tommaso"
		},
		avatar: "https://cdn.discordapp.com/avatars/518816661693005826/59fdd3ab7a3fa19e24ecc496ea9150b0",
		status: 0,
		pronouns: "he/him",
		country: "IT",
		github: "https://github.com/beccabunny",
		roles: ["Reviewer", "Art Patrol"],
		description: `Artist who also does content creation for the Builders and the Ka'het. Also happens to be the namesake of one of the oddest person ships in the game.`,
		quote: `"I'm just a normal minor planet trying its best to ignore the law of gravity."`,
		badges: ["ka'het"]
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
		description: `The current longest-active writing reviewer and a GitHub moderator. Less involved in the community lately, but shows up every once in a while on both platforms.`,
		quote: `"I was requested for spelling? Oh my goodness, this needs a rewrite..."`,
	},
	// Corraban
	corraban: {
		name: "Corraban",
		aka: {},
		avatar: "https://cdn.discordapp.com/avatars/583093228530827296/98d664350aa49904df0ac734448b6d87",
		status: 0,
		pronouns: "they/them",
		country: "",
		github: "",
		roles: ["Core Member", "Wiki Admin"],
		description: `Primary admin of the Fandom wiki for ES. Rarely says much on Discord, but is still quietly active in the background keeping the wiki up to date.`,
		quote: `"I like dodging the Archon."`,
	},
	// Daeridanii
	daeridanii: {
		name: "Daeridanii",
		aka: {},
		avatar: "https://cdn.discordapp.com/avatars/304361755516076034/f1b00cb17bf22b219ad3a6c14245fa52",
		status: 0,
		pronouns: "she/her",
		country: "US",
		github: "https://github.com/Daeridanii1",
		roles: ["Reviewer", "Art Patrol"],
		description: `3D modeller and creator of the Successors, as well as the DAIS ship plugin. Hasn't been all that active lately.`,
		quote: `"Endless quantities of digital spaceship."`,
		badges: ["successor"]
	},
	// Delvin Anaris
	delvin_anaris: {
		name: "Delvin Anaris",
		aka: {
			github: "danaris"
		},
		avatar: "https://avatars.githubusercontent.com/danaris",
		status: 0,
		pronouns: "he/him",
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
		status: 2,
		pronouns: "he/him",
		country: "AU",
		github: "https://github.com/DarcyManoel",
		roles: ["Moderator"],
		description: `Discord moderator and original creator of Omnis and the Endless Sky Creator's Handbook, as well as a number of other development tools. Left the community at the end of October.`,
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
		badges: ["bunrodea"]
	},
	// EjoThims
	ejothims: {
		name: "EjoThims",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/EjoThims",
		status: 2,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/EjoThims",
		roles: ["Writing Patrol", "Theme Patrol"],
		description: `One of the original writing reviewers and the creator of a couple of minor plugins. Unfortunately hasn't been seen at all in the community since mid-2024.`,
		quote: `"Anyone can review a pull request, even you!"`,
	},
	// Ferociousfeind
	ferociousfeind: {
		name: "Ferociousfeind",
		aka: {},
		avatar: "https://cdn.discordapp.com/avatars/532596743976779783/29f852b58ab94cb065555b5ef7472ef2",
		status: 0,
		pronouns: "he/him",
		country: "",
		github: "https://github.com/Ferociousfeind",
		roles: ["Core Member"],
		description: `Core member and one of the only people who really understands the heat and energy systems of ES. Primarily active on Discord.`,
		quote: `"Color me frangleborfed."`,
	},
	// Gefüllte Taubenbrust
	gefullte_taubenbrust: {
		name: "Gefüllte Taubenbrust",
		aka: {
		},
		avatar: "https://cdn.discordapp.com/avatars/314807527374061569/8ec1541bb938ca320832601eba405e64",
		status: 0,
		pronouns: "they/them",
		country: "DE",
		github: "https://github.com/GefullteTaubenbrust2",
		roles: ["Reviewer", "Art Patrol"],
		description: `Art reviewer and 3D modeller responsible for the creation of the new Navy ship designs.`,
		quote: `"I am fueling your nightmares."`,
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
		description: `Handles behind-the-scenes admin work and keeps things running smoothly. Manages the YouTube channel and stream archive, sends out community surveys, and steps in to help with disputes or crises when they come up.`,
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
		badges: ["unfettered"]
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
	// Lake
	lake: {
		name: "Lake",
		aka: {
			github: "Galaucus"
		},
		avatar: "https://avatars.githubusercontent.com/Galaucus",
		status: 2,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/Galaucus",
		roles: ["Core Member"],
		description: `One of the original major driving forces in creating a pirate campaign. Officially stepped back from piracy in Feburary 2025 after a long period of inactivity.`,
		quote: `"Too proud for farming / Too poor to buy Paradise / I'll hoist the black flag."`,
		badges: ["pirate"]
	},
	// LocalGod
	localgod: {
		name: "LocalGod",
		aka: {},
		avatar: "https://cdn.discordapp.com/avatars/254028990287708161/8b3ae9c4ffdb9bb8698301d6236841b2",
		status: 2,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/LocalGod79",
		roles: ["Core Member"],
		description: `Old plugin creator and reviewer who created the Marauders, made the Ursa Polaris plugin, and was responsible for some early Hai content. Hasn't been seen in the community since 2020.`,
		quote: `"If only a rich Captain would build and stock a universal outfitter space station."`,
	},
	// Loymdayddaud
	loymdayddaud: {
		name: "Loymdayddaud",
		aka: {
			github: "TheGiraffe3",
		},
		avatar: "https://avatars.githubusercontent.com/TheGiraffe3",
		status: 0,
		pronouns: "he/him",
		country: "SA",
		github: "https://github.com/TheGiraffe3",
		roles: ["Reviewer", "Writing Patrol", "Mission Patrol"],
		description: `Content reviewer who admires long mission chains. Creator of a few plugins and the current maintainer of Omnis.`,
		quote: `"Don't use commas. And periods, wrong."`,
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
	// MasterofGrey
	masterofgrey: {
		name: "MasterOfGrey",
		aka: {
			discord: "Græy"
		},
		avatar: "https://avatars.githubusercontent.com/MasterOfGrey",
		status: 1,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/MasterOfGrey",
		roles: ["Community Organizer", "Moderator", "Theme Patrol"],
		description: `Generally inactive community organizer involved with work on the Hai and leading the bording rework project. Shows up from time to time.`,
		quote: `"Crusading for community."`,
	},
	// MidnightPlugins
	midnightplugins: {
		name: "MidnightPlugins",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/MidnightPlugins",
		status: 0,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/MidnightPlugins",
		roles: ["Core Member"],
		description: `Plugin author who created the aptly named Lost in Midnight, Midnight Scrapyard, and Midnight Expansion plugins, as well as a number of others.`,
		quote: `"I only support stable releases."`,
	},
	// Michael Zahniser
	mz: {
		name: "Michael Zahniser (MZ)",
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
				url: "https://github.com/endless-sky/all-content-plugin",
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
				url: "https://github.com/mOctave/blended-ships",
				important: true
			},
			{
				name: "Taskship",
				type: "plugin",
				url: "https://github.com/mOctave/taskship",
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
		],
		discord: "main",
		badges: ["merchant", "subsidurial"]
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
		quote: `"Easter eggs never stay Easter eggs for long."`
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
		quote: `"Your hyperdrive doesn't work? Have you tried turning it off and on again?"`
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
		roles: ["Developer", "Maintainer", "Balance Patrol"],
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
		quote: `"Sorry, a Mereti ghost got hold of my phone for a sec."`,
		badges: ["exile", "efret"]
	},
	// reticent-rem
	reticent_rem: {
		name: "reticent-rem",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/reticent-rem",
		status: 0,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/reticent-rem",
		roles: ["Reviewer", "Writing Patrol"],
		description: `A newer writing reviewer who is also responsible for the creation of a number of culture conversations, bug fixes, and the Syndicate business mission chain.`,
		quote: `"I like pea soup as a nice, light springtime dish."`,
	},
	// RisingLeaf
	risingleaf: {
		name: "RisingLeaf",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/RisingLeaf",
		status: 2,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/RisingLeaf",
		roles: ["Former Member"],
		description: `Former code reviewer and C++ programmer who is also the creator of the Incipias. Left the community in September 2024.`,
		quote: `"We make ES so performant that no one notices that 80% of it is crypto mining."`,
		badges: ["incipias"]
	},
	// roadrunner56
	roadrunner56: {
		name: "roadrunner56",
		aka: {
		},
		avatar: "https://avatars.githubusercontent.com/roadrunner56",
		status: 0,
		pronouns: "they/them",
		country: "CA",
		github: "https://github.com/roadrunner56",
		roles: ["Developer", "Maintainer", "Writing Patrol"],
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
	// samrocketman
	samrocketman: {
		name: "samrocketman",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/samrocketman",
		status: 2,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/samrocketman",
		roles: ["Core Member"],
		description: `C++ programmer responsible for a number of bugfixes and the ability to disable plugins in-game. Was also heavily involved in trying to improve the music system. No longer active on GitHub, but occasionally shows up on Discord.`,
		quote: `"Always visit spaceport as you travel."`,
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
		roles: ["Developer", "Maintainer", "Art Patrol"],
		description: `Art developer and creator of the Gegno. One of the most active ES devs on Discord, now also doing a significant amount of content review and writing as well.`,
		quote: `"Down with tangents, up with overlaps."`,
		badges: ["gegno"]
	},
	// Tadrix
	tadrix: {
		name: "Tadrix",
		aka: {},
		avatar: "https://cdn.discordapp.com/avatars/289114143544311808/4666617d04e28f785203dfd39be4a326",
		status: 2,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/Tadrix",
		roles: ["Privateer"],
		description: `Old guard community member who hasn't really been active since 2019, with one exception. Remains the de facto leader of the ES Mafia community.`,
		quote: `"If afterlife exists, then the only thing of mine still growing after my death will be the contempt for the living."`,
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
		description: `Old code dev who vanished in 2022, but was very active before then. One of the original three people MZ gave repository write access to.`,
		quote: `"The heavy rockets usually spell the end for Captain Nate."`,
	},
	// Terin
	terin: {
		name: "Terin",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/Terin",
		status: 2,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/Terin",
		roles: ["Reviewer", "Mission Patrol"],
		description: `Old content reviewer who hasn't really been active since 2023 but sometimes shows up for a couple weeks on the Discord server. One of the only members of the community without any sort of avatar.`,
		quote: `"Can't let mantises just sprint through the ship at full speed."`,
	},
	// TheMarksman
	themarksman: {
		name: "TheMarksman",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/TheMarksman-ES",
		status: 1,
		pronouns: "they/them",
		country: "",
		github: "https://github.com/TheMarksman-ES",
		roles: ["Reviewer", "Writing Patrol"],
		description: `Writing reviewer and major contributor to Navy content. Mostly inactive these days, but shows up every once in a while on Discord.`,
		quote: `"The number of times someone breaks the fourth wall, it's mind-boggling!"`,
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
		roles: ["Developer", "Maintainer", "Code Patrol", "Writing Patrol"],
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
		roles: ["Developer", "Maintainer", "Code Patrol"],
		description: `Extremely prolific code dev and reviewer who's responsible for a lot of UI improvements despite never really touching the images.`,
		quote: `"Yes."`,
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
		roles: ["Developer", "Moderator", "Maintainer"],
		description: `The last remaining code dev who was active in 2016. Maintains 90% of the miscellaneous code stuff everyone else is too lazy to deal with, and hides from the Discord server in #the-inner-circle.`,
		quote: `"It's true. The warp core is a fictional device."`,
	},
	// Wrzlprnft
	wrzlprnft: {
		name: "Wrzlprnft",
		aka: {
			name: "Maximilian Korber",
			discord: "Wurzel",
		},
		avatar: "https://cdn.discordapp.com/avatars/191890978255273984/6a1786a50a6a931d56ab82443a22cd1f",
		status: 2,
		pronouns: "he/him",
		country: "",
		github: "https://github.com/Wrzlprnft",
		roles: ["Privateer"],
		description: `Early 3D artist and typo fixer who touched up a number of MZ's original models and was the first person to send a message in the current #beginner-help. Mostly inactive since 2017.`,
		quote: `"nope"`,
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
		roles: ["Core Member", "Theme Patrol"],
		description: `Former GitHub administrator and Remnant writer, at one time very heavily involved in both code and content creation. Left the community but can still occasionally be found on Swizzle Six.`,
		quote: `"May the Embers burn bright for you."`,
		badges: ["remnant"]
	},
	// Zoura
	zoura: {
		name: "Zoura",
		aka: {
			github: "AvianGeneticist"
		},
		avatar: "https://cdn.discordapp.com/avatars/450719725538770944/21f058a67bbfb48b2807ab2c864bf65e",
		status: 0,
		pronouns: "he/him",
		country: "",
		github: "https://github.com/AvianGeneticist",
		roles: ["Community Organizer"],
		description: `Organizer of tournaments, distributor of pixelated carrots, and creator of 95% of wacky, hacky, and hilarious plugins.`,
		quote: `"Tastebuds have become a vestigial body part."`,
	},
	// zuckung
	zuckung: {
		name: "zuckung",
		aka: {},
		avatar: "https://avatars.githubusercontent.com/zuckung",
		status: 0,
		pronouns: "he/him",
		country: "DE",
		github: "https://github.com/zuckung",
		roles: ["Core Member"],
		description: `Author of numerous small to mid-sized plugins.`,
		quote: `"I can’t gegno satisfaction."`,
		projects: [
			{
				name: "Plugins",
				type: "plugin",
				url: "https://github.com/zuckung/endless-sky-plugins",
				important: true
			},
			{
				name: "ES-DataParser",
				type: "tool",
				url: "https://zuckung.github.io/ES-DataParser/",
				important: true
			}
		],
		email: "",
		discord: "main",
	},
}

const NULL_CARD = {
	name: "No Results Found",
	aka: {},
	avatar: "",
	status: 0,
	pronouns: "n/a",
	country: "XX",
	roles: ["???"],
	description: `You have dredged the depths of space but your search has come up empty. Maybe the person you're looking for is in here under another name, or else they might not be in the directory at all.`,
	quote: `"I have a pain in all the diodes down my left side."`,
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
document.getElementById("search-field").addEventListener("keyup", ({key}) => {
	if (key === "Enter")
		loadDirectoryCards();
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

		document.getElementById("card-container").innerHTML += makeDirectoryCard(DIRECTORY[person], person);
	}

	if (noMatch) {
		document.getElementById("card-container").innerHTML += makeDirectoryCard(NULL_CARD, "null");
	}
}



function makeDirectoryCard(obj, id) {
	let card = obj.projects ? `${TEMPLATE}` : `${NO_PROJECT_TEMPLATE}`;

	// ID
	card = card.replaceAll("$ID$", person);


	// Name
	if (obj.name) {
		card = card.replaceAll("$NAME$", obj.name);
	} else {
		console.warn(`No valid name for "${id}"...`);
		card = card.replaceAll("$NAME$", "???");
	}


	// Avatar
	if (obj.avatar) {
		card = card.replaceAll("$AVATAR$", obj.avatar);
	} else {
		console.warn(`No valid avatar for "${id}"...`);
		card = card.replaceAll("$AVATAR$", "https://placehold.net/7-800x600.png");
	}


	// Status
	switch(obj.status) {
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
			console.warn(`No valid status for "${id}"...`);
			card = card.replaceAll("$STATUS-DESC$", "Unknown")
	}


	// Pronouns
	if (obj.pronouns) {
		card = card.replaceAll("$PRONOUNS$", obj.pronouns);
	} else {
		console.warn(`No valid pronouns for "${id}"...`);
		card = card.replaceAll("$PRONOUNS$", "they/them");
	}


	// Country
	try {
		const countryName = COUNTRY_FINDER.of(obj.country.toUpperCase());

		if (countryName === "XX") {
			card = card.replaceAll("$COUNTRY$", `🏴‍☠️ Nowhere`);
		} else {
			const flag = Array.from(obj.country.toUpperCase())
				.map(char => String.fromCodePoint(char.charCodeAt(0) + 127397)).join("");

			card = card.replaceAll("$COUNTRY$", `${flag} ${countryName}`);
		}
	} catch (e) {
		if (obj.country)
			console.warn(e);

		card = card.replaceAll("$COUNTRY$", `🌎 Earth`);
	}


	// GitHub Link
	if (obj.github) {
		card = card.replaceAll(
			"$GITHUB$",
			`<a href="${obj.github}">GitHub <span class="fa-solid fa-arrow-up-right-from-square"></span></a>`
		);
	} else {
		card = card.replaceAll("$GITHUB$", "");
	}


	// AKA Labels
	try {
		let akaLabels = "";

		if (obj.aka.name) {
			akaLabels += `<span class="aka-label"><span class="fa-solid fa-user"></span>&nbsp;${obj.aka.name}</span>`;
		}

		if (obj.aka.discord) {
			akaLabels += `<span class="aka-label"><span class="fa-brands fa-discord"></span>&nbsp;${obj.aka.discord}</span>`;
		}

		if (obj.aka.github) {
			akaLabels += `<span class="aka-label"><span class="fa-brands fa-github"></span>&nbsp;${obj.aka.github}</span>`;
		}

		if (obj.aka.reddit) {
			akaLabels += `<span class="aka-label"><span class="fa-brands fa-reddit"></span>&nbsp;${obj.aka.reddit}</span>`;
		}

		if (obj.aka.steam) {
			akaLabels += `<span class="aka-label"><span class="fa-brands fa-steam"></span>&nbsp;${obj.aka.steam}</span>`;
		}
		
		card = card.replaceAll("$AKA-LABELS$", akaLabels);

	} catch {
		card = card.replaceAll("$AKA-LABELS$", "");
	}


	// Roles
	if (obj.roles) {
		let noRoleAdded = true;
		let roleDesc = "";
		for (role of obj.roles) {
			const roleClass = ROLE_INFO[role] ? ROLE_INFO[role].class : "other-role";
			const roleTooltip = ROLE_INFO[role] ? ROLE_INFO[role].tooltip 
				: "This role is not properly defined! Please report this bug.";
			if (!noRoleAdded)
				roleDesc += " • ";

			roleDesc += `<span class="${roleClass}" tooltip="${roleTooltip}">${role}</span>`;
			noRoleAdded = false;
		}
		card = card.replaceAll("$ROLES$", roleDesc);
	} else {
		console.warn(`No valid roles for "${id}"...`);
		card = card.replaceAll("$ROLES$", "");
	}


	// Description
	if (obj.description) {
		card = card.replaceAll("$DESCRIPTION$", obj.description);
	} else {
		console.warn(`No valid description for "${id}"...`);
		card = card.replaceAll("$DESCRIPTION$", "A member of the Endless Sky community.");
	}
		

	// Quote
	if (obj.quote) {
		card = card.replaceAll("$QUOTE$", obj.quote);
	} else {
		console.warn(`No valid quote for "${id}"...`);
		card = card.replaceAll("$QUOTE$", "\"There's nothing to see here.\"");
	}


	// Projects
	try {
		if (obj.projects) {
			let noImportantsAdded = true;
			let allProjects = "";
			let importantProjects = "";
			for (project of obj.projects) {
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

	// Email and Badges
	try {
		let badges = "";

		if (obj.badges) {
			for (let badge of obj.badges) {
				badges += `<span class="badge" linktip="${BADGE_TOOLTIPS[badge]}"><img src="img/${badge}.png"/></span>`
			}
		}

		if (obj.email) {
			badges += `<a class="badge" href="mailto:${obj.email}" linktip="Contact by Email"><img src="img/email.png" alt="[Email]"/></a>`
		}

		if (obj.discord) {
			switch (obj.discord) {
				case "main":
					badges += `<a class="badge" href="https://discord.gg/ZeuASSx" linktip="Contact on Endless Sky Community"><img src="https://cdn.discordapp.com/icons/251118043411775489/05594a3abb941d674aff4e6b299f4c72" alt="Link to ESC Discord"/></a>`
					break;
				case "s6":
					badges += `<a class="badge" href="https://discord.gg/mPxk4JuTPq" linktip="Contact on Swizzle 6"><img src="https://cdn.discordapp.com/icons/844344915454722089/4920da11ee3ba4250c03a5269bad9ae6" alt="Link to Swizzle 6 Discord"/></a>`
					break;
				case "mafia":
					badges += `<a class="badge linktip" href="https://discord.gg/cW9tbcPvJ6" linktip="Contact on ES Mafia"><img src="https://cdn.discordapp.com/icons/364791686225985537/fb67eaea7cbd9b19144bf930b8757af1" alt="Link to ES Mafia Discord"/></a>`
					break;
			}
		}

		card = card.replaceAll("$BADGES$", badges);
	} catch (e) {
		console.error(e);
	}

	return card;
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
