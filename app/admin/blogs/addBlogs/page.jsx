"use client";
import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Trash, X, Eye } from "@phosphor-icons/react";
import axios from "axios";
import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EditorComp = dynamic(
  () => import("@/app/App chunks/components/MDXEditor"),
  {
    ssr: false,
  }
);

const markdown = `
Write your blog here
`;

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

const page = () => {
  return (
    <div className="relative">
      <p className="mt-6 font-Satoshi font-medium text-2xl">Add Blog</p>
      <div className="mt-4 w-full ">
        <Blogform />
      </div>
    </div>
  );
};

export default page;

const Blogform = () => {
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

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleImageChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setImage(files);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      setTags((prevTags) => [...prevTags, inputValue.trim()]); // Add the tag
      setInputValue(""); // Clear input after pressing Enter
    }
  };

  const deleteTag = (index) => {
    setTags((prevTags) => prevTags.filter((_, idx) => idx !== index));
  };

  const [image, setImage] = useState(null);
  const [blogDetail, setBlogDetail] = useState(null);
  const [imageOpen, setimageOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const submitBlog = () => {
    setStatus(null);
    if (!image) {
      return alert("Please add an image");
    }
    if (selectedService.length == 0) {
      return alert("Please select Service");
    }
    if (selectedIndustry.length == 0) {
      return alert("Please select Industry");
    }
    if (selectedTopic.length == 0) {
      return alert("Please select Topic");
    }
    if (tags.length == 0) {
      return alert("Please add at least one tag");
    }
    if (
      selectedOption == 1 ||
      selectedOption == 2 ||
      selectedOption == 3 ||
      selectedOption == 4
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

      if (image && image.length > 0) {
        formData.append("image", image[0]); // Only append the first image
      }

      setIsSubmitting(true);

      // First, make the CSRF cookie request
      axios
        .get("https://admin.yatriclubs.com/sanctum/csrf-cookie", {
          withCredentials: true,
        })
        .then(() => {
          // Then make the blog submission POST request
          return axios.post(`https://admin.yatriclubs.com/api/blog`, formData, {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" },
          });
        })
        .then((res) => {
          // On success
          setStatus("success");
          setIsSubmitting(false);
          router.push("/admin/blogs");
        })
        .catch((error) => {
          // On failure
          console.error("Error submitting blog:", error);
          setStatus("failed");
        })
        .finally(() => {
          // Always reset submission state
          setIsSubmitting(false);
        });
    }
  };

  return (
    <>
      <form className="w-full relative">
        {isPopUpOpen ? (
          <DeletePopUp
            setIsPopUpOpen={setIsPopUpOpen}
            selectedOption={selectedOption}
          />
        ) : null}
        {imageOpen ? (
          <div className="w-full h-screen max-h-screen fixed bg-gray-800/20 p-10 top-0 flex justify-center items-center left-0 z-[9999]">
            <X
              onClick={() => setimageOpen(false)}
              className="text-4xl absolute p-1 top-4 right-4 bg-black rounded-md cursor-pointer hover:bg-red-500 text-gray-50"
            />
            <div className="h-full">
              <img src={URL.createObjectURL(image[0])} className="h-full" />
            </div>
          </div>
        ) : null}
        <div className="flex w-full gap-10 items-center  mt-6">
          <div className="w-full ">
            <p className="font-Satoshi font-medium">Blog Title</p>
            <input
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="px-3 w-full py-2 block mt-1 bg-transparent border border-gray-600 placeholder:text-gray-400 rounded-md"
            />
          </div>
          <div className="w-full  ">
            <p className="font-Satoshi font-medium"> Author</p>
            <input
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="px-3 w-full py-2 block mt-1 bg-transparent border border-gray-600 placeholder:text-gray-400 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center mt-6">
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
                  <p className="text-sm truncate font-Satoshi font-[500]">
                    {image?.length > 0 ? image[0]?.name : "No image selected"}
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
              <input
                type="text"
                value={inputValue}
                onKeyDown={handleKeyDown}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={tags.length === 0 ? "Add a tag" : ""}
                className="px-3 py-2 bg-transparent focus:outline-none"
                required
              />
              {tags.length > 0 && (
                <div className="absolute w-full gap-2 flex justify-center items-center -bottom-8 left-0">
                  {tags.map((tag, idx) => (
                    <button
                      onClick={()=>deleteTag(idx)}
                      className="flex px-3 font-[500] py-1 justify-between items-center gap-1 rounded-lg bg-sky-200"
                      key={idx}
                    >
                      <p className="text-[.8rem]">{tag} </p>
                      <X />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-2 w-full gap-10 mt-6">
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
          <div className=" bg-transparent border border-gray-600  rounded-md">
            <Suspense fallback={null}>
              <EditorComp
                markdown={markdown}
                onChange={(value) => setBlogDetail(value)}
              />
            </Suspense>
          </div>
        </div>

        <div className="flex items-center gap-5 mt-9">
          <button
            onClick={submitBlog}
            disabled={isSubmitting}
            className={`px-5 py-1 cursor-pointer font-Satoshi font-semibold rounded-md text-gray-900 ${
              isSubmitting
                ? "bg-gray-300"
                : status === "success"
                ? "bg-green-400"
                : status === "failed"
                ? "bg-red-500"
                : "bg-sky-300 hover:bg-sky-500"
            }`}
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

const DeletePopUp = ({ setIsPopUpOpen, selectedOption }) => {
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
            <IoMdClose />
          </button>
        </div>
        <p className="font-Satoshi mt-2 py-2">
          <span className="font-semibold">Action denied:</span> Blog with{" "}
          <span className="font-semibold underline">
            Priority {selectedOption}
          </span>{" "}
          already exists. Please choose another priority.
        </p>
      </div>
    </div>
  );
};
