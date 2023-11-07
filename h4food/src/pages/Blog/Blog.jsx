export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "What is One way data binding?",
      description:
        "One-way data binding is a concept often used in web development and user interface frameworks to describe the flow of data from a data source (such as a model or variable) to the user interface (UI) elements. In one-way data binding, data changes in the source are reflected in the UI, but not vice versa. This means that changes in the UI do not affect the underlying data source. One-way data binding is commonly used in frameworks like AngularJS (Angular 1), React, and Vue.js.",
    },
    {
      id: 2,
      title: "What is NPM in node.js?",
      description: `NPM, which stands for "Node Package Manager," is a package manager for Node.js and a command-line utility that comes bundled with Node.js installations. NPM is the de facto package manager for JavaScript and Node.js, and it is used to discover, install, and manage third-party libraries and tools (known as packages or modules) that can be used in Node.js projects.`,
    },
    {
      id: 3,
      title: " Different between Mongodb database vs mySQL database.",
      description:
        "MongoDB and MySQL are two distinct database management systems with significant differences. MongoDB is a NoSQL database known for its flexible, schema-less data model, which stores data in collections of JSON-like documents. This flexibility makes MongoDB suitable for semi-structured and unstructured data and is well-suited for applications with evolving data requirements. In contrast, MySQL is a relational database that enforces a structured, schema-based data model, organizing data into tables with predefined schemas. While MongoDB employs a dynamic schema, allowing documents to have different fields within the same collection, MySQL requires strict adherence to a predefined schema, making it suitable for applications where data integrity and structured relationships are paramount. These differences in data model and schema flexibility impact the choice of database for different use cases, with MongoDB favored for projects with rapidly changing data structures and MySQL for applications demanding structured, consistent data storage and complex relationships.",
    },
  ];
  return (
    <div className="mx-5 lg:mx-32 mb-20 mt-10">
      <h2 className="text-4xl lg:text-5xl font-semibold text-center mx-auto text-primary mb-10">
        Recent Blogs
      </h2>
      <div className="flex flex-col gap-10">
        {blogs.map((blog) => (
          <div className="border-2 border-primary p-5 rounded-xl" key={blog.id}>
            <h2 className="text-2xl font-semibold text-primary mb-3">
              {blog.title}
            </h2>
            <p className="text-lg font-medium leading-loose text-gray-600">
              {blog.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
