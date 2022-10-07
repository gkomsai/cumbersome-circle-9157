import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ProjectTable() {
  const ProjectData = [];

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th w="10%">Project Name</Th>
            <Th w="10%">No Of Members</Th>

            <Th w="10%" isNumeric>
              BUDGET
            </Th>
            <Th w="10%" isNumeric>
              Estimated Time
            </Th>
            <Th w="10%">Timer</Th>
            <Th>EDIT Project</Th>
            <Th>VIEW DETAILS </Th>
            <Th>DELETE Project </Th>
          </Tr>
        </Thead>

        <Tbody>
          {ProjectData?.map((el) => (
            <Tr key={el.id}>
              <Td>{el.id}</Td>
              <Td>{el.title}</Td>

              <Td> </Td>

              <Td>
                <Link to={`/dashboard/projects/edit/${el._id}`}>
                  <Button>EDIT</Button>
                </Link>
              </Td>
              <Td>
                {" "}
                <Link to={`/dashboard/projects/${el._id}`}>
                  View more Details
                </Link>
              </Td>
              <Td>
                {" "}
                <Button>delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
