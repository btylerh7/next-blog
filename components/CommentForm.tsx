import React from 'react';
// import { useForm, SubmitHandler } from "react-hook-form";
// import {Post} from '../typings'

// interface Props {
//     post: Post;
//   }

//   interface IFormInput {
//     _id: string;
//     name: string;
//     email: string;
//     comment: string;
// }

// function CommentForm({post }: Props) {

    
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//       } = useForm();
    
//       const onSubmit: SubmitHandler<IFormInput> =async (data) => {
//           await fetch('/api/createComment', {
//               method: "POST",
//               body: JSON.stringify(data)
//           })
//           .then(() => {
//               console.log(data);
//           })
//           .catch(err => {
//               console.log(err)
//           })
//   return(
//     <form onSubmit={handleSubmit(onSubmit)}className="flex flex-col p-5 my-10 max-w-2xl mx-auto mb-10">
//     <input
//       {...register("_id")}
//       type="hidden"
//       name="_id"
//       value={post._id}
//     />
//     <label htmlFor="name">
//       <span>Name</span>
//       <input
//         {...(register("name"), { required: true })}
//         className="block w-full form-input"
//         type="text"
//         placeholder="John Appleseeed"
//       />
//     </label>
//     <label htmlFor="email">
//       <span>Email</span>
//       <input
//         {...(register("email"), { required: true })}
//         className="block w-full form-input"
//         type="email"
//       />
//     </label>
//     <label htmlFor="comment">
//       <span>Comment</span>
//       <textarea
//         {...(register("comment"), { required: true })}
//         className="block w-full form-textarea"
//         name="comment"
//         id="comment"
//         rows={8}
//       ></textarea>
//     </label>

//     <div className="flex flex-col p-5">
//       {errors.name && (
//         <span className="text-red-500">- The name field is required</span>
//       )}
//       {errors.email && (
//         <span className="text-red-500">
//           - The email field is required
//         </span>
//       )}
//       {errors.comment && (
//         <span className="text-red-500">
//           - The comment field is required
//         </span>
//       )}
//     </div>
//     <input
//       type="submit"
//       className="shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline text-white font-bold"
//     />
//   </form>
//   )
// }

// export default CommentForm;
