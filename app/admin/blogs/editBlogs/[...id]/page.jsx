"use client";
import { useEffect, useState } from "react";
import React from "react";
import { Trash, X, Eye } from "@phosphor-icons/react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const topics = [
  "Digital Age",
  "Transformation & Growth",
  "Data & AI",
  "Marketing & Advertising",
  "Technology",
  "Web & App Development",
  "Industrial Innovations",
  "Marketing & Strategy",
];

const services = [
  "Data Analytics",
  "Generative AI",
  "Cloud Transformation",
  "Mobile App Development",
  "Web Development",
  "Digital Marketing",
];
const industries = [
  "Health care",
  "Finance",
  "Technology",
  "Media and Communications",
  "Transport and Logistics",
  "Educations and Learning",
  "Retail and E-commerce",
  "Manufacturing and Distribution",
  "Resource and Wealth",
];
const Priority = ["1", "2", "3", "4", "Default"];
const EditorComp = dynamic(
  () => import("@/app/App chunks/components/MDXEditor"),
  {
    ssr: false,
  }
);
const Page = ({ params }) => {
 
  const id = params.id[0];
  return (
    <div className="relative">
      <p className="mt-6 font-Satoshi font-medium text-2xl">Edit Blog</p>
      <div className="mt-4 w-full ">
        <Blogform id={id} EditorComp={EditorComp} />
      </div>
    </div>
  );
};

export default Page;

const Blogform = ({ id, EditorComp }) => {
  const router = useRouter();
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [title, setTitle] = useState("");
  const [metaDiscription, setMetaDiscription] = useState("");
  const [metaTag, setMetaTag] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedOption, setSelectedOption] = useState("Default");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const handleKeyPress = (e) => {
    if (inputValue.length > 1) {
      if (e.key === "Enter" && inputValue.trim()) {
        e.preventDefault(); // Prevent form submission
        if (tags.length < 3) {
          // Check if current tags are less than 3
          const newTags = [...tags, inputValue.trim()];
          setTags(newTags);
          setInputValue(""); // Clear the input
        } else {
          alert("You can only add up to 3 tags.");
          setInputValue(""); // Notify the user
        }
      }
    }
  };

  const removeTag = (tagToRemove, e) => {
    e.stopPropagation();
    if (inputValue.length === 0) {
      const newTags = tags.filter((tag) => tag !== tagToRemove);
      setTags(newTags);
    }
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setImage(files);
    }
  };

  const [image, setImage] = useState(null);
  const [blogDetail, setBlogDetail] = useState(null);
  const [imageOpen, setimageOpen] = useState(false);
  const imageURL = "https://admin.yatriclubs.com/";
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [blog, setBlog] = useState([]);

  const getBlog = () => {
    if (true) {
      axios.get("https://admin.yatriclubs.com/sanctum/csrf-cookie", {
        withCredentials: true,
      });
      axios
        .get(`https://admin.yatriclubs.com/api/editblog/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          setTitle(res.data.name);
          setMetaDiscription(res.data.metaDescription);
          setMetaTag(res.data.metaTag);
          setTags(res.data.tags.replace(/^"|"$|\\/g, "").split(","));
          setBlogDetail(res.data.description);
          setImage(res.data.image);
          setSelectedOption(res.data.priority);
          setAuthor(res.data.author);
          setBlog(res.data);

          setSelectedIndustry(res.data.industry);
          setSelectedService(res.data.service);
          setSelectedTopic(res.data.topic);
        })

        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          console.log("finally");
        });
    }
  };
  useEffect(() => {
    getBlog();
  }, []);

  const updateBlog = (e) => {
    e.preventDefault();
    if (tags.length == 0) {
      return alert("Please add at least one tag");
    }

    if (
      (blog.priority == 1 && selectedOption == "default") ||
      (blog.priority == 2 && selectedOption == "default") ||
      (blog.priority == 3 && selectedOption == "default") ||
      (blog.priority == 4 && selectedOption == "default")
    ) {
      setIsPopUpOpen(true);
    } else {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("metaTag", metaTag);
      formData.append("metaDescription", metaDiscription);
      formData.append("blogDetail", blogDetail);
      formData.append("tags", tags);
      formData.append("author", author);
      formData.append("priority", selectedOption);
      formData.append("topic", selectedTopic);
      formData.append("service", selectedService);
      formData.append("industry", selectedIndustry);
      if (image && image.length > 0 && image[0] instanceof File) {
        formData.append("image", image[0]);
      }
      setIsSubmitting(true);
      axios.get("https://admin.yatriclubs.com/sanctum/csrf-cookie", {
        withCredentials: true,
      });
      axios
        .post(`https://admin.yatriclubs.com/api/updateblog/${id}`, formData, {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          setStatus("success");
          setIsSubmitting(false);
        })
        .then(() => {
          router.push("/admin/blogs");
        })
        .catch((error) => {
          console.error(error);
          setStatus("failed");
        })
        .finally(() => {
          console.log("finally");
          setIsSubmitting(false);
        });
    }
  };
  return (
    <>
      <form className="w-full relative">
        {isPopUpOpen ? (
          <DeletePopUp setIsPopUpOpen={setIsPopUpOpen} blog={blog} />
        ) : null}
        {imageOpen ? (
          <div className="w-full h-screen max-h-screen fixed bg-gray-800/20 p-10 top-0 flex justify-center items-center left-0 z-[9999]">
            <X
              onClick={() => setimageOpen(false)}
              className="text-4xl absolute p-1 top-4 right-4 bg-black rounded-md cursor-pointer hover:bg-red-500 text-gray-50"
            />

            <div className="h-full">
              <img
                src={
                  typeof image === "string"
                    ? imageURL + image
                    : URL.createObjectURL(image[0])
                }
                className="h-full"
              />
            </div>
          </div>
        ) : null}
        <div className="flex w-full gap-10 items-center  mt-6">
          <div className="w-full ">
            <p className="font-Satoshi font-medium">Blog Title</p>
            <input
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              required
              value={title}
              className="px-3 w-full py-2 block mt-1 bg-transparent border border-gray-600 placeholder:text-gray-400 rounded-md"
            />
          </div>
          <div className="w-full  ">
            <p className="font-Satoshi font-medium"> Author </p>
            <input
              placeholder="Author"
              value={author}
              required
              onChange={(e) => setAuthor(e.target.value)}
              className="px-3 w-full py-2 block mt-1 bg-transparent border border-gray-600 placeholder:text-gray-400 rounded-md"
            />
          </div>
        </div>

        <div className="flex w-full gap-10 items-center mt-6">
          <div className="w-full  ">
            <p className="font-Satoshi font-medium"> Meta Description</p>
            <input
              placeholder="Meta Description"
              value={metaDiscription}
              required
              onChange={(e) => setMetaDiscription(e.target.value)}
              className="px-3 w-full py-2  block mt-1 bg-transparent border border-gray-600 placeholder:text-gray-400 rounded-md"
            />
          </div>

          <div className="w-full">
            <p className="font-Satoshi font-medium">Meta Tag</p>
            <input
              placeholder="Meta Tag"
              value={metaTag}
              required
              onChange={(e) => setMetaTag(e.target.value)}
              className="px-3 w-full py-2 block mt-1 bg-transparent border border-gray-600 placeholder:text-gray-400 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center mt-4">
          <div className="w-full ">
            <p className="font-Satoshi font-medium">
              Add Image{" "}
              <span className="text-gray-500">
                <span className="text-red-500 font-Satoshi font-bold">*</span>
                Image size should not exceed 2mb.
              </span>
            </p>
            <div className="flex w-full items-center gap-2">
              <div className=" bg-transparent border border-gray-600 placeholder:text-gray-400 w-full relative flex items-center py-3 justify-between pl-3 pr-10 rounded-md">
                <div className="w-full">
                  <p className="text-sm truncate">
                    {typeof image == "string"
                      ? image?.split("/").pop()
                      : image
                        ? image[0]?.name
                        : null}
                  </p>
                </div>
                <label
                  htmlFor="image"
                  className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer hover:bg-sky-400 bg-sky-300 px-2 rounded-md font-Satoshi font-bold text-2xl"
                >
                  +
                </label>
                <input
                  className="hidden"
                  id="image"
                  onChange={handleImageChange}
                  required
                  type="file"
                  accept=".jpg, .jpeg, .png"
                />
              </div>
              <div
                onClick={image?.length > 0 ? () => setimageOpen(true) : null}
                className={`p-2  rounded-md ${
                  image?.length > 0
                    ? "text-gray-900 hover:bg-gray-300 cursor-pointer"
                    : "text-gray-600 bg-gray-200 cursor-not-allowed"
                }`}
              >
                <Eye className={`text-xl `} />
              </div>
            </div>
          </div>
          <div className="w-full ">
            <p className="font-Satoshi font-medium"> Tags </p>
            <div className="relative bg-transparent border border-gray-600 placeholder:text-gray-400 rounded-md  flex items-center gap-3">
              <div
                className={`flex  gap-3 justify-start ${tags.length === 0 ? "ml-0" : "ml-2"}`}
              >
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-lime-400 text-black px-4 py-1 rounded-md text-sm flex items-center"
                  >
                    {tag}
                    <button
                      onClick={(e) => removeTag(tag, e)}
                      className="ml-2 text-white"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={tags.length === 0 ? "Add a tag" : ""}
                className=" py-2 bg-transparent focus:outline-none"
                style={{
                  paddingLeft: tags.length > 0 ? ".5rem" : "4px",
                }}
              />
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-2 w-full gap-10 mt-5">
          <div className="w-full">
            <p className="font-Satoshi font-medium">Topic</p>
            <Select onValueChange={setSelectedTopic} value={selectedTopic}>
              <SelectTrigger className="w-full border border-gray-700">
                <SelectValue placeholder="Select Topic" />
              </SelectTrigger>
              <SelectContent>
                {topics.map((topic, index) => (
                  <SelectItem value={topic} key={index}>
                    {topic}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <p className="font-Satoshi font-medium">Service</p>
            <Select onValueChange={setSelectedService} value={selectedService}>
              <SelectTrigger className="w-full border border-gray-700">
                <SelectValue placeholder="Select Service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service, index) => (
                  <SelectItem value={service} key={index}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <p className="font-Satoshi font-medium">Industry</p>
            <Select
              onValueChange={setSelectedIndustry}
              value={selectedIndustry}
            >
              <SelectTrigger className="w-full border border-gray-700">
                <SelectValue placeholder="Select Industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry, index) => (
                  <SelectItem value={industry} key={index}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <p className="font-Satoshi font-medium">Priority</p>
            <Select onValueChange={setSelectedOption} value={selectedOption}>
              <SelectTrigger className="w-full border border-gray-700">
                <SelectValue placeholder="Select Priority" />
              </SelectTrigger>
              <SelectContent>
                {Priority.map((priority, index) => (
                  <SelectItem value={priority} key={index}>
                    {priority}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="w-full mt-6">
          <p className="font-Satoshi font-medium">Description</p>
          <div className=" border border-black rounded-md">
            <Suspense fallback={null}>
              <EditorComp
                onChange={(value) => setBlogDetail(value)}
                markdown={blogDetail ? blogDetail : ""}
              />
            </Suspense>
          </div>
        </div>

        <div className="flex items-center gap-5 mt-9">
          <button
            onClick={updateBlog}
            disabled={isSubmitting}
            className={`px-5 py-1 cursor-pointer font-Satoshi font-semibold rounded-md text-gray-900 ${isSubmitting ? "bg-gray-300" : status === "success" ? "bg-green-400" : status === "failed" ? "bg-red-500" : "bg-sky-300 hover:bg-sky-500"}`}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-gray-300 animate-spin"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-900"
                  ></path>
                </svg>
                <span>Submitting...</span>
              </div>
            ) : status === "success" ? (
              "Blog Submitted"
            ) : status === "failed" ? (
              "Something Went Wrong!"
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

const DeletePopUp = ({ setIsPopUpOpen, blog }) => {
  return (
    <div className="w-full h-screen fixed flex justify-center items-center top-0 left-0 z-[999] bg-gray-900/30">
      <div className="rounded-xl w-[350px] px-7 py-3 bg-white">
        <div className="flex justify-between items-center gap-3">
          <p className="text-xl font-satoshi font-semibold text-gray-800">
            Deletion Error{" "}
          </p>
          <button
            onClick={() => setIsPopUpOpen(false)}
            className="text-red-500 text-xl"
          >
            <X />
          </button>
        </div>
        <p className="font-Satoshi mt-2 py-2">
          <span className="font-semibold">Action denied:</span> Blogs with{" "}
          <span className="font-semibold underline">
            Priority {blog?.priority}
          </span>{" "}
          are protected and cannot be changed to Default.
        </p>
      </div>
    </div>
  );
};
