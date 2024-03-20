'use client'

import Input from '@/app/components/Input'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import CreateVideo from './CreateVideo'
import Button from '@/app/components/Button'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import toast from 'react-hot-toast'
import uniqid from 'uniqid';

const CreateForm = () => {
    const user = useUser();
    const router = useRouter();
    const supabaseClient = useSupabaseClient();

    const {register, handleSubmit, reset
    } = useForm<FieldValues>({
        defaultValues: {
            diary_date: Date,
            diary_icon: '',
            diary_title: '',
            diary_content: '',
            diary_image_path: '',
            diary_video_path: '',
            diary_scope: Boolean,
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        const imageFile = values.diary_image_path?.[0];
        const videoFile = values.diary_video_path?.[0];

        if(!user) {
            toast.error('something missed!')
            return
        }

        const uniqueID = uniqid();

        const {
            data: imageData,
            error: imageError,
        } = await supabaseClient
        .storage
        .from('images')
        .upload(`image-${values.title}-${uniqueID}`, imageFile, {
            cacheControl: '3600',
            upsert: false
        });

        if (imageError) {
            return toast.error('failed image upload')
        }


        const {
            error: supabaseError
        } = await supabaseClient
        .from('Diary')
        .insert([{
            user_id: user.id,
            diary_title: values.diary_title,

        }])

        if (supabaseError) {
            return toast.error(supabaseError.message)
        }

        reset();
        router.push('/diary')
        toast.success('diary created!')
        
    }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex justify-between h-screen">
            {/* 왼쪽 */}
            <div className="bg-black/15 w-full h-4/5 border-2 border-black/25 drop-shadow-md
            rounded-lg relative p-4">
                 <textarea id="diary_title" placeholder="Title" className="bg-black bg-opacity-0 
                 w-full h-auto focus:outline-none resize-none placeholder-black/35 text-3xl"
                 {...register('diary_title', { required: true })} />
                 <hr className='border border-black/15 w-full h-0.5'/> 
                 <textarea id="diary_content" placeholder="do write!" className="bg-black bg-opacity-0 
                w-full h-4/5 focus:outline-none resize-none placeholder-black/35 mt-2"
                 {...register('diary_content', { required: true })} />
            </div>
            {/* 오른쪽 */}
            <div className="bg-black/15 w-full h-4/5 border-2 border-black/25 drop-shadow-md
            rounded-lg relative p-4">
                <div className='flex flex-col gap-y-2'>
                    {/* 이미지 */}
                    <Input id="diary_image_path" placeholder="Select Image" className="bg-black bg-opacity-0 
                    w-full h-[100px] focus:outline-none resize-none placeholder-black/35 border
                    border-black/25" type='file' accept='image/*,.pdf'
                    {...register('diary_image_path', { required: true })} />
                    {/* 동영상 */}
                    <Input id="diary_video_path" placeholder="Select Video" className="bg-black bg-opacity-0 
                    w-full h-[100px] focus:outline-none resize-none placeholder-black/35 border
                    border-black/25"
                    {...register('diary_video_path', { required: true })} />
                </div>
                <textarea id="diary_memo" placeholder="something" className="bg-black bg-opacity-0 
                w-full h-3/5 focus:outline-none resize-none placeholder-black/35 border
                border-black/25 mt-4 p-2"
                {...register('diary_memo')} />
            </div>
        </div>
        <Button className='-translate-y-35 w-1/2'
        type='submit'>
            create
        </Button>
    </form>
  )
}

export default CreateForm