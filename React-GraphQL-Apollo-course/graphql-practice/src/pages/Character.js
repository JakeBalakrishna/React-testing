import { Box, CircularProgress, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router";
import { useCharacter } from "../hooks/useCharacter";

 const Character = () => {

    const {id} = useParams()

    const {data, error, loading} = useCharacter(id);

    if(error)
    return (
      <div>
        <Box w="100%" align="center">
          <CircularProgress isIndeterminate size="100px" justify="center" />
        </Box>
      </div>
    );

  if (error)
    return (
      <div>
        <Box w="100%" align="center">
          <Text>Error</Text>
          <CircularProgress
            isIndeterminate
            color="red"
            size="100px"
            justify="center"
          />
        </Box>
      </div>
    );

 
    
    return (
     <div>
        <img src={data.character.image} width={750} /> 
        <div>
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div>{data.character.episode.map(episode => {
                return (
                    <div>
                        {episode.name} - <b>{episode.episode}</b>
                    </div>
                )
            } ) }</div>
        </div>
     </div>   
        );
    }

 export default Character