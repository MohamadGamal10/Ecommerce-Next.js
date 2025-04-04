"use client";
import React, { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { useParams, useRouter } from 'next/navigation';
import { getUserData } from '@/actions/user/getUserData';
import { createReview } from '@/actions/review/createReview';
import { notify } from '@/hooks/useNotifaction';
import { getReviews } from '@/actions/review/getReviews';
import { Pencil, Trash2 } from 'lucide-react';
import { IReview } from '@/types/review';
import {
  AlertDialog,
  // AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { updateReview } from '@/actions/review/updateReview';
import { deleteReview } from '@/actions/review/deleteReview';
export default function Reviews({ rating, quantity }: { rating: number, quantity: number }) {
  const { id } = useParams<{ id: string }>();
  const router = useRouter()
  const [ratingValue, setRatingValue] = useState(0);
  const [ratingText, setRatingText] = useState("");
  const [ratingTextEdit, setRatingTextEdit] = useState("");
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [done, setDone] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalD, setOpenModalD] = useState(false);


  useEffect(() => {
    const get = async () => {
      const reviews = await getReviews(id);
      setReviews(reviews?.data)
    }
    get();
  }, [id, done])

  useEffect(() => {
    const get = async () => {
      const data = await getUserData();
      setUserId(data.data._id)
      setUserName(data.data.name)
    }
    get();
  }, [])

  const handleRating = (rate: number) => {
    setRatingValue(rate)
  }

  const handleClick = async () => {
    if (userId === "") {
      notify("من فضلك قم بتسجيل الدخول", "error")
      return;
    }
    if (ratingValue === 0 || ratingText === "") {
      notify("من فضلك قم بتقييم المنتج", "error")
      return;
    }
    const review = await createReview(ratingText, ratingValue, id, userId);
    console.log(review)
    if (review?.data) {
      notify("تم إضافة التقييم بنجاح", "success");
      setDone(true)
      router.refresh()
      setRatingValue(0)
      setRatingText("")
    } else {
      notify("تم اضافة التقييم من قبل", "error")
    }
  }

  const handleUpdate = async () => {
    if (!userId) {
      notify("من فضلك قم بتسجيل الدخول", "error")
      return;
    }
    if (ratingValue === 0 || ratingTextEdit === "") {
      notify("من فضلك قم بتقييم المنتج", "error")
      return;
    }
    const review = await updateReview(ratingTextEdit, ratingValue, reviews[0]._id);
    console.log(review)
    if (review?.data) {
      notify("تم تعديل التقييم بنجاح", "success");
      setDone(true)
      router.refresh()
      setOpenModal(false)
      setRatingValue(0)
      setRatingText("")
    } else {
      notify("فشل في تعديل التقييم", "error")
    }
  }

  const handleDelete = async (id: string) => {
    if (userId === "") {
      notify("من فضلك قم بتسجيل الدخول", "error")
      return;
    }
    const review = await deleteReview(id);
    if (review === undefined) {
      notify("تم حذف التقييم بنجاح", "success");
      setDone(true)
      window.location.reload()
      setOpenModalD(false)
    } else {
      notify("فشل في حذف التقييم", "error")
    }
    console.log(review)
  }

  return (
    <div className="container my-10">
      <div className="grid grid-cols-1  gap-1 bg-white shadow-xl rounded-xl p-6">
        <div>Ratings ⭐ <span className='text-yellow-500'>{rating}</span> ({quantity} reviews)</div>
        <div className='flex w-full gap-4'>
          <div>{userName}</div>
          <div className='flex flex-col flex-1'>
            <div className='w-full'>
              <Rating
                onClick={handleRating}
                initialValue={ratingValue}
                size={29}
                SVGstyle={{ display: 'inline' }}
                allowFraction={true}
                fillColor="#ffc107"
              />
            </div>
            <div className=' mt-4'>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                Your message
              </label>
              <textarea
                id="message"
                value={ratingText}
                onChange={(e) => setRatingText(e.target.value)}
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
                focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
              <div onClick={handleClick} className="flex justify-end">
                <Button className='mt-4 cursor-pointer '>Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        reviews ? reviews.map((review: IReview) =>
        (<div key={review._id} className="grid grid-cols-1 gap-1 bg-white shadow-xl rounded-xl p-6 mt-4 relative">
          {
            review.user._id === userId && (
              <div className="absolute top-4 right-4 flex gap-4">
                <AlertDialog open={openModal} onOpenChange={setOpenModal}>
                  <AlertDialogTrigger asChild>
                    <button className="text-blue-600 cursor-pointer hover:text-blue-800">
                      <Pencil size={20} />
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="md:w-[550px] w-[350px]">

                    <AlertDialogHeader>
                      <AlertDialogTitle>Edit Review</AlertDialogTitle>
                      <AlertDialogDescription></AlertDialogDescription>
                      <Rating
                        onClick={handleRating}
                        initialValue={review.rating}
                        size={29}
                        SVGstyle={{ display: 'inline' }}
                        allowFraction={true}
                        fillColor="#ffc107"
                      />
                      <div className=' mt-4'>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                          Your message
                        </label>
                        <textarea
                          id="message"
                          value={ratingTextEdit}
                          onChange={(e) => setRatingTextEdit(e.target.value)}
                          rows={4}
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
                focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Write your thoughts here..."
                        >{review.review}</textarea>

                      </div>

                    </AlertDialogHeader>
                    <AlertDialogFooter className="mt-4">
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <Button type="submit" onClick={handleUpdate} className="cursor-pointer">Continue</Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <AlertDialog open={openModalD} onOpenChange={setOpenModalD}>
                  <AlertDialogTrigger asChild>
                    <button className="text-red-600 cursor-pointer hover:text-red-800">
                      <Trash2 size={20} />
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="md:w-[550px] w-[350px]">

                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Review</AlertDialogTitle>
                      <AlertDialogDescription></AlertDialogDescription>
                      <div>
                        <hr />
                        <h1 className='my-4'>Are you sure you want to delete this review</h1>
                        <hr />
                      </div>

                    </AlertDialogHeader>
                    <AlertDialogFooter className="mt-4">
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <Button type="submit" variant="destructive" onClick={() => handleDelete(review._id)} className="cursor-pointer">Delete</Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            )
          }

          <div className='flex w-full gap-4'>
            <div>{review.user.name}</div>
            <div className='flex flex-col flex-1'>
              <div className='w-full'>
                <Rating
                  initialValue={review.rating}
                  size={29}
                  SVGstyle={{ display: 'inline' }}
                  allowFraction={true}
                  fillColor="#ffc107"
                />
              </div>
              <div className='mt-4'>
                <p>{review.review}</p>
              </div>
            </div>
          </div>
        </div>
        )) : (
          <div className="mt-6 text-start text-gray-500 text-lg font-semibold">
            No reviews found.
          </div>
        )
      }

    </div>
  )
}