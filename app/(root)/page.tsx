import { auth, signOut } from "@/auth";
import LoocalSearch from "@/components/search/LoocalSearch";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";
import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn JavaScript?",
    description: "I want to learn JavaScript, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];

interface searchParams {
  searchParams: Promise<{[key: string]: string}>
}

const Home = async ({searchParams}: searchParams) => {
  const {query = ''} = await searchParams;

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <>
      <section className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='h1-bold text-dark100_light900'>All Questions</h1>

        <Button
          className='primary-gradient min-h-[46px] px-4 py-3 text-light-900'
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>
            Ask a question
          </Link>
        </Button>
      </section>

      <section className='mt-11'>
        <LoocalSearch
          route='/' 
          imageSrc="/icons/search.svg"
          placeholder="Search for Question Here..."
        />
      </section>
        
        {/* HomeFilter */}

      <div className='mt-10 flex w-full flex-col gap-6'>
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
