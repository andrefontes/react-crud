import '/node_modules/font-awesome/css/font-awesome.min.css'; 
import { FaBuilding } from "react-icons/fa";
import '/styles.css';
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue,
  Grid, 
  GridItem,
  Container,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalComp from "./components/ModalComp";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  useEffect(() => {
    const db_costumer = localStorage.getItem("cad_cliente")
      ? JSON.parse(localStorage.getItem("cad_cliente"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (email) => {
    const newArray = data.filter((item) => item.email !== email);

    setData(newArray);

    localStorage.setItem("cad_cliente", JSON.stringify(newArray));
  };

  return (
    <Flex
      align="center"
      justify="center"
      fontSize="20px"
      fontFamily="poppins"
      bg='#f2f2f2'
      
    >
    
    

    
              
      
    
    <Grid templateColumns='repeat(1, 1fr)' p='4' m='0'>
    
      <Grid templateColumns='repeat(9, 1fr)' gap={6} bg='#fff' align='center' p='10' mb='10' w='100%' borderRadius='10'>


      <GridItem w='100%' bg='transparent' color='#649fbf'><Button h='16' borderRadius='20' color='#fff' bg="#649fbf" fontSize='34' border='solid 1px #000'><FaBuilding /></Button><br />Item 1</GridItem>
              
                <GridItem w='100%' bg='transparent' color='#dbdbdb'><Button h='16' borderRadius='20' color='#fff' bg="#dbdbdb" fontSize='34'><FaBuilding /></Button><br />Item 2</GridItem>
                <GridItem w='100%' bg='transparent' color='#dbdbdb'><Button h='16' borderRadius='20' color='#fff' bg="#dbdbdb" fontSize='34'><FaBuilding /></Button><br />Item 3</GridItem>
                <GridItem w='100%' bg='transparent' color='#dbdbdb'><Button h='16' borderRadius='20' color='#fff' bg="#dbdbdb" fontSize='34'><FaBuilding /></Button><br />Item 4</GridItem>
                <GridItem w='100%' bg='transparent' color='#dbdbdb'><Button h='16' borderRadius='20' color='#fff' bg="#dbdbdb" fontSize='34'><FaBuilding /></Button><br />Item 5</GridItem>
                <GridItem w='100%' bg='transparent' color='#dbdbdb'><Button h='16' borderRadius='20' color='#fff' bg="#dbdbdb" fontSize='34'><FaBuilding /></Button><br />Item 6</GridItem>
                <GridItem w='100%' bg='transparent' color='#dbdbdb'><Button h='16' borderRadius='20' color='#fff' bg="#dbdbdb" fontSize='34'><FaBuilding /></Button><br />Item 7</GridItem>
                <GridItem w='100%' bg='transparent' color='#dbdbdb'><Button h='16' borderRadius='20' color='#fff' bg="#dbdbdb" fontSize='34'><FaBuilding /></Button><br />Item 8</GridItem>
                <GridItem w='100%' bg='transparent' color='#dbdbdb'><Button h='16' borderRadius='20' color='#fff' bg="#dbdbdb" fontSize='34'><FaBuilding /></Button><br />Item 9</GridItem>
        </Grid>
      
    <Grid templateColumns='repeat(2, 1fr)' gap={4}>
          <Box py={10} px={2} borderRadius='10' bg='#fff'>
              <p mb='10'>Lorem ipsum dolor sit amet. Et voluptatem fuga qui autem quia et rerum dicta quo repellat magni et voluptates galisum aut voluptatum eaque. Sit exercitationem internos et commodi itaque aut porro nisi ea fuga corporis aut sunt quidem. Et dolor quidem ut nesciunt velit qui repudiandae nesciunt non natus saepe. Aut porro rerum id architecto consequatur qui illo quaerat quo dolor iste aut sunt quos quo voluptatum dolor.</p>

              <p>Et voluptatibus laudantium cum incidunt rerum a quasi architecto et consequuntur omnis aut sint reiciendis. Est deleniti quibusdam sit omnis optio est voluptatem quisquam et minima cumque!</p>
          </Box>
          <Box py={0} px={0} borderRadius='20' bg='#fff'>
            <Box w='100%' bg='#649fbf' color='#fff' p='2' mb='5' borderTopLeftRadius='20' borderTopRightRadius='20'>Funcionários</Box>
            <Box p='4'>
                    <Box>
                    <Button colorScheme="white" color="#649fbf" border="solid 1px #649fbf" width="100%" onClick={() => [setDataEdit({}), onOpen()]}>
                      + Adicionar Funcionário
                    </Button>
                    </Box>
                    <Box mt='3'>
                      <Button colorScheme="white" color="#649fbf" border="solid 1px #649fbf" mr='3' >
                        Ver apenas Ativos
                      </Button>
                      <Button colorScheme="white" color="#649fbf" border="solid 1px #649fbf" >
                        Limpar filtros
                      </Button>
                    </Box>

                    <Box overflowY="auto" height="100%">
                      <Table mt="6">
                        <Thead>
                          <Tr>
                            <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                              Nome
                            </Th>
                            <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                              E-Mail
                            </Th>
                            <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                              Cpf
                            </Th>
                            <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                              Ativo
                            </Th>
                            <Th p={0}></Th>
                            <Th p={0}></Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {data.map(({ name, email, cpf, rg, nascimento, sexo, ativo, cargo }, index) => (
                            <Tr key={index} cursor="pointer " _hover={{ bg: "gray.100" }}>
                              <Td maxW={isMobile ? 5 : 100}>{name}</Td>
                              <Td maxW={isMobile ? 5 : 100}>{email}</Td>
                              <Td maxW={isMobile ? 5 : 100}>{cpf}</Td>
                              <Td maxW={isMobile ? 5 : 100}>{ativo}</Td>
                              <Td p={0}>
                                <EditIcon
                                  fontSize={20}
                                  onClick={() => [
                                    setDataEdit({ name, email, cpf, rg, nascimento, sexo, ativo, cargo, index }),
                                    onOpen(),
                                  ]}
                                />
                              </Td>
                              <Td p={0}>
                                <DeleteIcon
                                  fontSize={20}
                                  onClick={() => handleRemove(email)}
                                />
                              </Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </Box>
                    </Box>
          </Box>
</Grid>
</Grid>

      {isOpen && (
        <ModalComp
          isOpen={isOpen}
          onClose={onClose}
          data={data}
          setData={setData}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
        />
      )}
    </Flex>
  );
};

export default App;