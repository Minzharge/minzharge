import React, { createContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
export const BlogContext = createContext();

const BlogContextProvider = (props) => {
	const navigate = useNavigate();
	const location = useLocation();
	const initialState = JSON.parse(localStorage.getItem('blogcategory', 'newscategory', 'Blogs', 'News')) || [];

	const [ blogs, setBlogs ] = useState(initialState);
	const [ viewblog, setviewblog ] = useState(null);

	useEffect(
		() => {
			fetch('http://localhost:5002/api/v1/admin/blogs/list').then((res) => res.json()).then((data) => {
				const ListData = data.data;
                console.log(ListData)
				setBlogs(ListData);
			});
			localStorage.setItem('Blogs', JSON.stringify(blogs));
		},
		[ location.key ]
	);

	const handleblogview = (id) => {
		const item = blogs.find((blg) => blg._id === id);
		setviewblog(item);
		navigate(`/min-view/${item._id}`);
	};
	
	return (
		<BlogContext.Provider
			value={{
				handleblogview,
				viewblog,
				setviewblog,
			}}>
			{props.children}
		</BlogContext.Provider>
	);
};
export default BlogContextProvider;  
