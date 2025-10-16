// 只是为了清理统计网站乱插的 HTML 代码
// 我就想知道为什么非得自己插 HTML 代码
const brokenStyleClass = [".statcounter"];

for (let className of brokenStyleClass){
  const tags = document.querySelectorAll(className);
  for(let tag of tags){
    tag.remove();
  }
}

console.info(`已清理 {tags.length} 个元素`);
