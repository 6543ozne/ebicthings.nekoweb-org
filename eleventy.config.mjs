import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.js");
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("BitcountPropDouble-Regular.ttf");
  eleventyConfig.addPassthroughCopy("gallery-grid.css");
  eleventyConfig.addPassthroughCopy("gallery-grid.js");
  eleventyConfig.addPassthroughCopy("Pictures");

  
	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/rss.xml",
		collection: {
			name: "post", // iterate over `collections.posts`
			limit: 10,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "Ebicthings blog",
			subtitle: "blog for my thoughts and stuff",
			base: "https://ebicthings.nekoweb.org/posts",
			author: {
				name: "ebicthings",
			}
		}
	});
  
};


