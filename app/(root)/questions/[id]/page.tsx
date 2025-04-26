import TagCard from '@/components/cards/TagCard';
import { Preview } from '@/components/editor/Preview';
import Metric from '@/components/Metric';
import UserAvatar from '@/components/UserAvatar';
import ROUTES from '@/constants/route';
import { getQuestion } from '@/lib/actions/question.action';
import { formatNumber, getTimestamp } from '@/lib/utils';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

const QuestionDetails = async (
    {params}: RouteParams
) => {
  const {id} = await params;
  const {success, data: question} = await getQuestion({questionId: id});

  if(!success || !question) return redirect("/404");
  
  const {author, createdAt, answers, views, tags, content} = question;

  return (
    <>
      <div className='flex-start w-full flex-col'>
        <div className='flex w-full flex-col-reverse justify-between'>
          <div className='flex items-center justify-start gap-1'>
            <UserAvatar 
              id={author._id}
              name={author.name}
              className="size-[22px]"
              fallbackClassName='text-[10px]'
            />

            <Link href={ROUTES.PROFILE(author._id)}>
              <p className='paragraph-semibold text-dark300_light700'>
                {author.name}
              </p>
            </Link>
          </div>

          <div className='flex justify-end'>
            <p>Votes</p>
          </div>
        </div>

        <h2 className='h2-semibold text-dark200_light900 mt-3.5 w-full'>
          {question.title}
        </h2>
      </div>

      <div className='mb-8 mt-5 flex flex-wrap gap-4'>
        <Metric 
          imageUrl='/icons/clock.svg'
          alt='clock icon'
          value={`asked ${getTimestamp(new Date(createdAt))}`}
          title=''
          textStyles='small-regular text-dark400_light700'
        />
        <Metric 
          imageUrl='/icons/message.svg'
          alt="message icon"
          value={answers}
          title=""
          textStyles='small-regular text-dark400_light700'
        />
        <Metric 
          imageUrl='/icons/eye.svg'
          alt="eye icon"
          value={formatNumber(views)}
          title=""
          textStyles='small-regular text-dark400_light700'
        />
      </div>

      <Preview content={content} />

      <div className='mt-8 flex flex-wrap gap-2'>
        {tags.map((tag: Tag) => (
          <TagCard 
            key={tag._id}
            _id={tag._id as string}
            name={tag.name}
            compact
          />
        ))}
      </div>
    </>
  )
}

export default QuestionDetails;