"use client";
import { setCardsId } from "@/redux/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function page({ params }) {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.card);
  const cardId = params.id;
  useEffect(() => {
    dispatch(setCardsId(id));
  }, []);
  return (
    <>
      {post && (
        <main className="container mx-auto px-4 py-6">
          <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
          <img src={post.img} alt="Post Image" className="my-4" />
          <p>{post.description}</p>
        </main>
      )}
    </>
  );
}
