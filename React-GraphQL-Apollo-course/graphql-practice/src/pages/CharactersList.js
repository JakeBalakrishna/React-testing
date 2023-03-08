import React from "react";
import { CircularProgress, Box, Text, Link } from "@chakra-ui/react";
import useCharacters from "../hooks/useCharacters";

const CharactersList = () => {
  const { error, data, loading } = useCharacters();

  if (loading)
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
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <Box align="center" justify="space-evenly">
              <img src={character.image} alt="" />
              <h2>{character.name}</h2>
            </Box>
          </Link>
        );
      })}
    </div>
  );
};

export default CharactersList;
