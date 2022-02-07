import React, {useState} from 'react';
import { IconContext } from "react-icons";
import styled, {keyframes} from "styled-components";
import {FcLike,FcLikePlaceholder} from  'react-icons/fc'
import {BiComment} from "react-icons/bi";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

const growDown= keyframes`

  0% {
    transform: scaleY(0)
  }
  80% {
    transform: scaleY(1.1)
  }
  100% {
    transform: scaleY(1)
  }

`

const CardFooterContainer= styled.div`
  background-color: aliceblue;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
const ActionContainer= styled.div`
  background-color: aliceblue;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

const Like= styled.button`
  border: none;
  background-color: transparent;
  display:flex;
  justify-content: center;
  align-items: center;
`
const Reply=styled.div`
  width: 100%;
  background-color: black;
  position: relative;
  display: inline-block;
  animation: ${growDown} 300ms ease-in-out forwards;
  transform-origin: top center
`

const Content=styled.div`
  position: absolute;
  background-color: black;
  width: 100%;
  height: auto;
  color: white;
  min-height: 60px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

const CardFooter = () => {

    const [liked,setLiked]= useState(false)
    const manageLike=()=>{
        if(liked){
            setLiked(false)
        }else{
            setLiked(true)
        }
    }

    const [comment,setComment]= useState(false)
    const manageComment=()=>{
        if(comment){
            setComment(false)
        }else{
            setComment(true)
            setShowComments(false)
        }
    }

    const [showComments,setShowComments]= useState(false)
    const manageShowComments=()=>{
        if(showComments){
            setShowComments(false)
        }else{
            setShowComments(true)
        }
        console.log(showComments)
    }

    return (
            <CardFooterContainer>

                <ActionContainer>
                    <IconContext.Provider value={{ color: "blue", size: "2em", style:{ marginRight: "20px"}}}>
                        <button style={{border:"none", backgroundColor:"transparent" }} onClick={()=>manageComment()}>
                            <BiComment/>
                        </button>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ color: "blue", size: "2em", style:{ marginRight: "20px"}}}>
                        <button style={{border:"none", backgroundColor:"transparent",}} onClick={()=>manageLike()}>
                            {liked?<FcLike/>:<FcLikePlaceholder/>}
                        </button>
                    </IconContext.Provider>
                    <button style={{border:"none", backgroundColor:"transparent",}} onClick={()=>manageShowComments()}>
                        Comments
                    </button>
                </ActionContainer>

                {comment?
                    <Reply>
                        <Content>
                            <AddComment onClick={()=>manageShowComments()}/>
                            {showComments?
                                <CommentList/>:
                                <></>
                            }
                        </Content>
                    </Reply>:<></>}

            </CardFooterContainer>

    );
};

export default CardFooter;
