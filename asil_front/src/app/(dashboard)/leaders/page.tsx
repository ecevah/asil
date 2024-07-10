"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/service/hook/hook"; // Yolunuzu doğru ayarlayın
import { getLeaders } from "@/service/thunk/leader";
import { RootState } from "@/service/store";
import { Leader } from "@/service/models/leader";
import { useRouter } from "next/navigation";

const Leaders: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { leaders, loading, error } = useSelector(
    (state: RootState) => state.leaders
  );

  useEffect(() => {
    dispatch(getLeaders());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {leaders.map((leader: Leader) => (
        <div
          key={leader._id}
          className="bg-group-card w-[530px] h-[360px] rounded-lg border-solid border-[1px] border-[rgba(0, 0, 0, 0.125)] flex flex-col items-center justify-end"
          onClick={() => router.push("/leaders/detay/" + leader._id)}
        >
          <img
            src={leader.photo}
            width={155}
            height={155}
            alt="Profile Photo"
            className="rounded-full w-[154px] h-[154px]"
          />
          <div className="font-bold mt-[20px] mb-[10px]">{leader.name}</div>
          <div className="mb-[40px]">{leader.groupId.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Leaders;
