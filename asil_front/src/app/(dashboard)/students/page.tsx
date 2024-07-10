// components/Students.tsx
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { MdAdd } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/service/hook/hook";
import { getStudents } from "@/service/thunk/student";
import { RootState } from "@/service/store";
import { Student } from "@/service/models/student";

const Students: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { students, loading, error } = useSelector(
    (state: RootState) => state.students
  );

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  useEffect(() => {
    console.log("Students state in component:", students);
  }, [students]);

  const handleAddStudent = () => {
    Swal.fire({
      title: "Öğrenci Ekle",
      html: `
        <style>
          .swal2-input, .swal2-file {
            margin-bottom: 10px;
            border-radius: 4px;
            box-shadow: 0 2px 3px rgba(0,0,0,0.2);
          }
          .swal2-file {
            padding: 4px;
            transition: border .3s ease-in-out;
          }
          .swal2-file:hover {
            border: 2px solid #007bff;
          }
          .file-input-wrapper {
            position: relative;
            overflow: hidden;
            display: inline-block;
          }
          .btn-file {
            color: white;
            background-color: #007bff;
            padding: 6px 12px;
            overflow: hidden;
            position: relative;
          }
          .btn-file input[type=file] {
            position: absolute;
            top: 0;
            right: 0;
            min-width: 100%;
            min-height: 100%;
            font-size: 100px;
            text-align: right;
            filter: alpha(opacity=0);
            opacity: 0;
            outline: none;
            background: white;
            cursor: inherit;
            display: block;
          }
        </style>
        <input id="swal-input9" type="file" class="swal2-file">
        <input id="swal-input1" type="text" class="swal2-input" placeholder="İsim Soyisim">
        <input id="swal-input2" type="text" class="swal2-input" placeholder="Grup">
        <input id="swal-input3" type="text" class="swal2-input" placeholder="Doğum Tarihi">
        <input id="swal-input4" type="text" class="swal2-input" placeholder="Sınıf">
        <input id="swal-input5" type="text" class="swal2-input" placeholder="Okul">
        <input id="swal-input6" type="text" class="swal2-input" placeholder="Geleceği Gün">
        <input id="swal-input7" type="text" class="swal2-input" placeholder="Babasının Mesleği">
        <input id="swal-input8" type="text" class="swal2-input" placeholder="Son 3 Seneki Notları">
        <input id="swal-input10" type="text" class="swal2-input" placeholder="Hakkında">
      `,
      focusConfirm: false,
      preConfirm: () => {
        const photoInput = document.getElementById(
          "swal-input9"
        ) as HTMLInputElement;
        const file = photoInput.files ? photoInput.files[0] : null;
        return [
          (document.getElementById("swal-input1") as HTMLInputElement).value,
          (document.getElementById("swal-input2") as HTMLInputElement).value,
          (document.getElementById("swal-input3") as HTMLInputElement).value,
          (document.getElementById("swal-input4") as HTMLInputElement).value,
          (document.getElementById("swal-input5") as HTMLInputElement).value,
          (document.getElementById("swal-input6") as HTMLInputElement).value,
          (document.getElementById("swal-input7") as HTMLInputElement).value,
          (document.getElementById("swal-input8") as HTMLInputElement).value,
          file,
          (document.getElementById("swal-input10") as HTMLInputElement).value,
        ].filter((val) => val !== null);
      },
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div
        onClick={handleAddStudent}
        className="bg-[#FDFDFF] px-[10px] py-[5px] rounded-md border-solid border-[1px] border-[#a5a5a5] flex flex-row items-center w-fit cursor-pointer text-gray-700 mb-[30px]"
      >
        Öğrenci Ekle <MdAdd size={15} /> <FaUser size={15} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {students.map((student: Student, index: number) => (
          <div
            key={student._id}
            className="bg-group-card w-[530px] lg:w-full h-[360px] rounded-lg border-solid border-[1px] border-[rgba(0, 0, 0, 0.125)] flex flex-col items-center justify-end"
            onClick={() => router.push("/students/detay/" + student._id)}
          >
            <img
              src={student.photo}
              width={155}
              height={155}
              alt="Profile Photo"
              className="rounded-full w-[154px] h-[154px]"
            />
            <div className="font-bold mt-[20px] mb-[10px]">{student.name}</div>
            <div className="mb-[40px]">{student.groupId.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Students;
