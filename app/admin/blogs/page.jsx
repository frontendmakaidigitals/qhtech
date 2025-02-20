"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { Trash, X, PencilSimple } from "@phosphor-icons/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [blogs, setBlogs] = useState([]);
console.log(blogs)
  const getBlogs = () => {
    setIsLoading(true);
    try {
      axios
        .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/blogs`)
        .then((res) => setBlogs(res.data.posts))
        .finally(() => setIsLoading(false));
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="w-full">
      <div className="mt-8 w-full flex justify-between items-center">
        <p className="font-Satoshi font-medium">Your Blog List</p>

        <Link href="/admin/blogs/addBlogs">
          <button className="bg-sky-400 hover:bg-sky-500 rounded-md px-3 py-1 font-Satoshi">
            + Add Blog
          </button>
        </Link>
      </div>

      <div className="mt-1 bg-slate-50  p-3 rounded-xl">
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
};

export default Page;

const BlogList = ({ blogs }) => {
  const router = useRouter();
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [blogPriority, setBlogPriority] = useState(0);

  return (
    <>
      <div className="h-[78vh] overflow-auto relative`">
        {isPopUpOpen ? (
          <DeletePopUp
            setIsPopUpOpen={setIsPopUpOpen}
            blogPriority={blogPriority}
          />
        ) : null}
        <Table>
          <TableCaption>A list of your Blogs.</TableCaption>
          <TableHeader className="sticky top-0 left-0 bg-slate-50 z-10">
            <TableRow className={`bg-gray-200  hover:bg-gray-200`}>
              <TableHead className=" text-gray-900 text-lg font-Satoshi font-bold rounded-l-xl pl-4">
                No.
              </TableHead>
              <TableHead className=" text-gray-900 text-lg font-Satoshi font-bold">
                Blog Title
              </TableHead>
              <TableHead className=" text-gray-900 text-lg text-center font-Satoshi font-bold">
                Priority
              </TableHead>

              <TableHead className=" text-gray-900  text-lg font-Satoshi font-bold">
                Blog Image
              </TableHead>
              <TableHead className=" text-gray-900 text-lg font-Satoshi font-bold rounded-r-xl">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              blogs?.map((blog, idx) => (
                <TableRow key={idx} className={`hover:bg-gray-100`}>
                  <TableCell className={`pl-4 py-3`}>{idx + 1}</TableCell>
                  <TableCell
                    className={`font-Satoshi font-medium text-lg py-3`}
                  >
                    <p className="">{blog.title}</p>
                  </TableCell>
                  <TableCell
                    className={`font-Satoshi font-medium text-center text-lg py-3`}
                  >
                    <p className="">{blog.priority}</p>
                  </TableCell>
                  <TableCell className={`font-Satoshi font-medium py-3`}>
                    <div className="w-32 h-[130px] flex items-center justify-center">
                      <img
                        src={process.env.NEXT_PUBLIC_SERVER_URL+'/'+ blog.image}
                        className="max-h-full min-h-auto"
                        alt="image"
                      />
                    </div>
                  </TableCell>
                  <TableCell className={`py-3`}>
                    <div className="flex items-center gap-2">
                      <div className="relative group cursor-pointer">
                        <p className="hidden group-hover:block w-auto text-nowrap z-[9999] bg-gray-300 shadow-lg rounded-full px-4 py-1 absolute bottom-full left-1/2 -translate-x-1/2">
                          Edit blog
                        </p>
                        <Link href={`/admin/blogs/editBlogs/${blog.id}`}>
                          <PencilSimple className="text-xl relative" />
                        </Link>
                      </div>
                      <div className="relative group cursor-pointer">
                        <p className="hidden group-hover:block w-auto text-nowrap z-[9999] bg-red-500 shadow-lg text-gray-100 rounded-full px-4 py-1 absolute bottom-full left-1/2 -translate-x-1/2">
                          Delete blog
                        </p>
                        <Trash
                          onClick={() => deleteBlog(blog.id)}
                          className="text-red-500 text-xl relative"
                        />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

const DeletePopUp = ({ id, setIsPopUpOpen, blogPriority }) => {
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
            Priority {blogPriority}
          </span>{" "}
          are protected and cannot be deleted, but you can still edit them.
        </p>
      </div>
    </div>
  );
};
