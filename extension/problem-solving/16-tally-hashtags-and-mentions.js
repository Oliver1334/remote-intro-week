const { check, runTest, skipTest } = require("../../test-api");

console.log("tallyHashtagsAndMentions");

runTest("returns an object", function () {
  check(typeof tallyHashtagsAndMentions()).isEqualTo("object");
});
skipTest("returns {hashtags: 0, mentions: 0} if it finds none", function () {
  check(tallyHashtagsAndMentions)
    .whenCalledWith("hello this is a tweet guaranteed to get very little engagement")
    .returns({
      hashtags: 0,
      mentions: 0,
    });
});
skipTest("recognises no mentions", function () {
  check(tallyHashtagsAndMentions).whenCalledWith("#yolo").returns({
    hashtags: 1,
    mentions: 0,
  });
});
skipTest("recognises no hashtags", function () {
  check(tallyHashtagsAndMentions).whenCalledWith("@yobo").returns({
    hashtags: 0,
    mentions: 1,
  });
});
skipTest("finds multiple hashtags and mentions and returns that number", function () {
  check(tallyHashtagsAndMentions).whenCalledWith("#yolo @bolo #golo").returns({
    hashtags: 2,
    mentions: 1,
  });
  check(tallyHashtagsAndMentions).whenCalledWith("@boyo #goyo @loyo #zoyo").returns({
    hashtags: 2,
    mentions: 2,
  });
  check(tallyHashtagsAndMentions)
    .whenCalledWith('"So excited to start at @northcoders on Monday! #learntocode #codingbootcamp"')
    .returns({ hashtags: 2, mentions: 1 });
});
