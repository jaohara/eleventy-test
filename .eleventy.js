module.exports = function(eleventyConfig){
  // config to watch css files that are built from sass
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/style/**/*.css'
  });
  
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};