'use client'

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useModal from "../hooks/useModal"
import Modal from "./Modal"
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import toast from "react-hot-toast";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import EmojiPicker from "emoji-picker-react";

const SidebarModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { onClose, isOpen } = useModal();
    const user = useUser();
    const supabaseClient = useSupabaseClient();
    const router = useRouter();

    const [showPicker, setShowPicker] = useState(false);
    const [selectEmoji, setSelectEmoji] = useState('😀')

    const { register, handleSubmit, reset
    } = useForm<FieldValues>({
        defaultValues: {
            icon: '',
            author: '',
            title: '',
            description: '',
        }
    })

    const onChange = (open: boolean) => {
        if (!open) {
            reset();
            onClose();
        }
    }

    const handlePicker = () => {
        setShowPicker(!showPicker);
    }

    const handleEmoji = (e: any) => {
        setShowPicker(!showPicker)
        setSelectEmoji(e.emoji)
    }

    const onSubmit:SubmitHandler<FieldValues> = async (values) => {
            setIsLoading(true);

            if(!user) {
                toast.error('로그인이 필요합니다') 
                return;   
            }

            const { data, error: supabaseError } = await supabaseClient
            .from("Library")
            .insert([{
                user_id: user.id,
                icon: selectEmoji,
                title: values.title,
                author: values.author,
                description: values.description,
            }])
            .select();

            if (supabaseError) {
                setIsLoading(false);
                return toast.error(supabaseError.message); 
            }

            if (data) {
                router.refresh();
                setIsLoading(false);
                toast.success('라이브러리가 생성되었습니다!')
                reset();
                onClose();
            }
    }

  return (
    <Modal title="New Diary" description="create your diary"
    isOpen={isOpen} onChange={onChange}>
        <form onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 overflow-y-hidden max-h-[550px]">

            <div className="flex relative gap-x-2 items-center">
                Emoji
                <button className="rounded-full px-4 py-2 bg-black/10 flex
                items-center justify-center hover:opacity-75 transition"
                onClick={handlePicker}>
                    <div id="icon" {...register('icon')}> 
                        {selectEmoji} 
                    </div>
                </button>
            </div>

            {showPicker && (
            <div className="fixed top-0 left-0 w-full h-full flex 
            items-center justify-center bg-black bg-opacity-20"> 
                <EmojiPicker onEmojiClick={handleEmoji} /> 
            </div>)}

            <Input id="author" disabled={isLoading} 
            {...register('author', {required: true})}
            placeholder="Diary author" />

            <Input id="title" disabled={isLoading} 
            {...register('title', {required: true})}
            placeholder="Diary title" />

            <Input id="description" disabled={isLoading} 
            {...register('description', {required: true})}
            placeholder="Diary description" />
            
            <Button disabled={isLoading} type="submit" className="mt-4 bg-black/25">
                Create
            </Button>

        </form>
    </Modal>
  )
}

export default SidebarModal
