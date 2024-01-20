"use client";
import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Spinner} from "@nextui-org/react";
import Cards from '@/app/Cards';
import Card from '@/app/Card';




const PostInfiniteScroller = () => {
    const [postList, setPostList] = useState<any>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [totalPages, setTotalPages] = useState(0);
    const RESULTS_PER_PAGE = 9;

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    const fetchPosts = useCallback(async () => {
        try {
            const response = await fetch(`/api/blog-posts?page=${page}`);
            const { posts } = await response.json();
            setTotalPages(posts.count/RESULTS_PER_PAGE);
            setPostList([...postList, ...posts.results]);
            const nextPage = page + 1;
            if (nextPage === totalPages) {
                setHasMore(false);
                return;
            }
            setPage(nextPage);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }, [page, totalPages, postList]);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    useEffect(() => {
        ScrollTrigger.create({
            start: "top+=80% bottom",
            end: "bottom bottom",
            scrub: true,
            onEnter: () => hasMore && fetchPosts(),
        });
    }, [postList, hasMore, fetchPosts]);

    return (
        <InfiniteScroll
            dataLength={postList.length}
            next={fetchPosts}
            hasMore={hasMore}
            loader={<Spinner color="default" label='Loading Posts'/>}
            scrollThreshold="80%"
        >
            <Cards>
            {postList.map((post:any, index:any) => (
                <Card key={index} post={post} />
            ))}
            </Cards>
        </InfiniteScroll>
    );
};

export default PostInfiniteScroller;
