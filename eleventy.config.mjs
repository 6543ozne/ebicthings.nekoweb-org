export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.js");
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("BitcountPropDouble-Regular.ttf");
  eleventyConfig.addPassthroughCopy("gallery-grid.css");
  eleventyConfig.addPassthroughCopy("gallery-grid.js");
  eleventyConfig.addPassthroughCopy("Pictures");
};