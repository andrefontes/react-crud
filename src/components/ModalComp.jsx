//import { useForm, UseFormRegisterReturn } from 'react-hook-form'
import { FiFile } from 'react-icons/fi'
import {
    FileUpload
    ,FileUploadDropzone
  } from '@saas-ui/file-upload'

  import '/styles.css';

  //FileUploadButton

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Icon,
    ModalCloseButton,
    Button,
    FormErrorMessage,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    CheckboxGroup,
    InputGroup,
    Radio,
    Stack,
    HStack,
    RadioGroup,
    Container,
    Text,
    Select,
    Box,
    Grid, 
    GridItem
  } from "@chakra-ui/react";
  import { useState, ReactNode, useRef } from "react";
  
  const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
    const [name, setName] = useState(dataEdit.name || "");
    const [email, setEmail] = useState(dataEdit.email || "");
    const [cpf, setCpf] = useState(dataEdit.cpf || "");
    const [rg, setRg] = useState(dataEdit.rg || "");
    const [nascimento, setNascimento] = useState(dataEdit.nascimento || "");
    const [sexo, setSexo] = useState(dataEdit.sexo || "");
    const [ativo, setAtivo] = useState(dataEdit.ativo || "");
    const [cargo, setCargo] = useState(dataEdit.cargo || "");
  
    const handleSave = () => {
      if (!name || !email) return;
  
      if (emailAlreadyExists()) {
        return alert("E-mail já cadastrado!");
      }
  
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { name, email, cpf, rg, nascimento, sexo, ativo, cargo };
      }
  
      const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), { name, email, cpf, rg, nascimento, sexo, ativo, cargo }]
        : [...(data ? data : [])];
  
      localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));
  
      setData(newDataArray);
  
      onClose();
    };
  
    const emailAlreadyExists = () => {
      if (dataEdit.email !== email && data?.length) {
        return data.find((item) => item.email === email);
      }
  
      return false;
    };
  
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent minWidth='700px' width='100%'>
            <ModalHeader>Cadastro de Clientes</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
              <FormControl display="flex" flexDir="column" gap={4}>
              <Container maxW='2xl' bg='#fff' p='4' border='solid 1px #649fbf' borderRadius={10}>
                    <Grid templateColumns='repeat(2, 1fr)'>
                        <Box>
                                <FormLabel>trabalhador está Ativo ou Inativo?</FormLabel>
                        </Box>
                        <Box>
                                <Checkbox 
                                    value="Ativo"
                                    onChange={(e) => setAtivo(e.target.value)}
                                > Ativo </Checkbox>
                        </Box>
                    </Grid>
                </Container>
              <Container maxW='2xl' bg='#fff' p='4' border='solid 1px #649fbf' borderRadius={10}>
              <Grid templateColumns='repeat(2, 1fr)'>
                        <Box mr='4'>
                        <FormLabel>Nome</FormLabel>
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            w='100%'
                        />
                        </Box>
                        <Box>
                                <FormLabel>Sexo</FormLabel>
                                <RadioGroup defaultValue='Feminino' value={sexo}>
                                <Stack spacing={5} direction='row'>
                                    <Radio colorScheme='pink' value='Feminino' onChange={(e) => setSexo(e.target.value)}>
                                        Feminino
                                    </Radio>
                                    <Radio colorScheme='blue' value='Masculino' onChange={(e) => setSexo(e.target.value)}>
                                        Masculino
                                    </Radio>
                                </Stack>
                                </RadioGroup>
                        </Box>
                </Grid>
                <Grid templateColumns='repeat(2, 1fr)'>
                        <Box mr='4'>
                                <FormLabel>CPF</FormLabel>
                                <Input
                                    type="text"
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                />
                        </Box>
                        <Box>
                                <FormLabel>Nascimento</FormLabel>
                                <Input
                                    type="text"
                                    value={nascimento}
                                    onChange={(e) => setNascimento(e.target.value)}
                                />
                        </Box>
                </Grid>
                <Grid templateColumns='repeat(2, 1fr)'>
                        <Box mr='4'>
                                <FormLabel>RG</FormLabel>
                                <Input
                                    type="text"
                                    value={rg}
                                    onChange={(e) => setRg(e.target.value)}
                                />
                        </Box>
                        <Box>
                                <FormLabel>Cargo</FormLabel>
                                <Select onChange={(e) => setCargo(e.target.value)}>
                                    <option value=''></option>
                                    <option value='Cargo 1'>Cargo 1</option>
                                    <option value='Cargo 2'>Cargo 2</option>
                                    <option value='Cargo 3'>Cargo 3</option>
                                </Select>
                        </Box>
                </Grid>

                </Container>
            <Container maxW='2xl' bg='#fff' p='4' border='solid 1px #649fbf' borderRadius={10}>
                        <Box>
                                <FormLabel>Quais EPIs o trabalhador usa na atividade?</FormLabel>
                        </Box>
                        <Box mb='6'>
                                <Checkbox 
                                    value="Ativo"
                                    onChange={(e) => setAtivo(e.target.value)}
                                > O trabalhador não usa EPI. </Checkbox>
                        </Box>


                <Container maxW='2xl' bg='#fff' p='4' border='solid 1px #649fbf' borderRadius={10}>

                            <Grid templateColumns='repeat(1, 1fr)'>
                                    <Box>
                                            <FormLabel>Selecione a atividade</FormLabel>
                                            <Select onChange={(e) => setCargo(e.target.value)}>
                                                <option value=''></option>
                                                <option value='Cargo 1'>Cargo 1</option>
                                                <option value='Cargo 2'>Cargo 2</option>
                                                <option value='Cargo 3'>Cargo 3</option>
                                            </Select>
                                    </Box>
                            </Grid>
                            <Grid templateColumns='repeat(3, 1fr)'>
                                    <Box mr='4'>
                                            <FormLabel>Selecione o EPI</FormLabel>
                                            <Select onChange={(e) => setCargo(e.target.value)}>
                                                <option value=''></option>
                                                <option value='Cargo 1'>Cargo 1</option>
                                                <option value='Cargo 2'>Cargo 2</option>
                                                <option value='Cargo 3'>Cargo 3</option>
                                            </Select>
                                    </Box>
                                    <Box mr='4'>
                                            <FormLabel>Informe o número CA</FormLabel>
                                            <Input
                                                type="text"
                                                value={rg}
                                                onChange={(e) => setRg(e.target.value)}
                                            />
                                    </Box>
                                    <Box>
                                            <FormLabel>&nbsp;</FormLabel>
                                            <Button colorScheme="white" color="#649fbf" border="solid 1px #649fbf" width="100%">Adicionar EPI</Button>
                                    </Box>
                            </Grid>
                </Container>
                <Button colorScheme="white" color="#649fbf" border="solid 1px #649fbf" width="100%" mt='5' >Adicionar outra atividade</Button>


                </Container>
                <Container maxW='2xl' bg='#fff' p='4' border='solid 1px #649fbf' borderRadius={10}>
                <Box>
                    <FormLabel>Adicione Atestado de Saúde (opcional):</FormLabel>
                    <Input
                                                    type="text"
                                                    value={rg}
                                                    onChange={(e) => setRg(e.target.value)}
                                                    w='100%'
                                                />

                    
                <FileUpload maxFileSize={1024 * 1024} maxFiles={1} accept="image/*">
                    {({ files, deleteFile }) => (
                        <FileUploadDropzone>
                        <Text fontSize="sm">Arraste imagem aqui</Text>
                        {!files?.length ? (
                            //<input type="file" />
                            <Button colorScheme="white" color="#649fbf" border="solid 1px #649fbf" width="100%" mt='5' >Selecionar arquivo</Button>
                            //<Button type="file" as={Button} leftIcon={<Icon as={FiFile} />}>Selecionar arquivo</Button>
                        ) : (
                            <HStack>
                            <Text fontSize="sm">{files[0].name}</Text>
                            <Button
                                onClick={(e) => {
                                e.stopPropagation()
                                deleteFile(files[0])
                                }}
                            >
                                Remover
                            </Button>
                            </HStack>
                        )}
                        </FileUploadDropzone>
                    )}
                    </FileUpload>
                </Box>
                </Container>

                <Box>
                  <FormLabel>E-mail</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Box>

              </FormControl>
            </ModalBody>
  
            <ModalFooter justifyContent="start">
              <Button colorScheme="green" mr={3} onClick={handleSave}>
                SALVAR
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                CANCELAR
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default ModalComp;