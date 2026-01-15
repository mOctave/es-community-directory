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

// This file contains the template for you to fill out.
// Please replace the first comment with your username, and the id with
// your username where all spaces and dashes are replaced by underscores.
// Please keep the weird indentation because that'll make it easier for
// me to copy this. Thanks!
// Oh, and it would be awesome if you removed the rest of the comments.

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
		// Your avatar image in the directory.
		avatar: "https://raw.githubusercontent.com/moctave/es-community-directory/main/img/avatars/yourname.png",
		// 0 = Active, 1 = Inactive, 2 = On Hiatus, 3 = Old Member (No longer active)
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
