import fs from "fs";
import path from "path";

// always return về thư mục hiện hành đang làm việc
// console.log(process.cwd()) return my-app
const booksDir = path.join(process.cwd(), "books");
const cwd = process.cwd();
console.log("booksDir", { booksDir, cwd });

export const getBooks = () => {
  const bookFileNames = fs.readdirSync(booksDir);
  const booksData = bookFileNames.map((bookFileName) => {
    const fullBookPath = path.join(booksDir, bookFileName);
    const bookContent = fs.readFileSync(fullBookPath, "utf8");
    return {
      bookName: bookFileName.replace(/\.txt$/, ""),
      bookContent,
    };
  });
  return booksData;
};
