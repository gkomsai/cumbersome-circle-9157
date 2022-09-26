import { Box, Text } from "@chakra-ui/react";
import React from "react";

import styles from "../home.module.css";

const BottomSection = () => {
  return (
    <Box className={styles.main}>
      <Box className={styles.child1}>
        <Box className={styles.child2}>
          <Box className={styles.dropbox}>
            <Box className={styles.dropnumber}>1</Box>
          </Box>

          <Text className={styles.commentHeading}>Quick setup </Text>
        </Box>
        <Text>
          Connect EverHour with your tool and start tracking time right away. No
          manual project setup is required.
        </Text>
      </Box>
      <Box className={styles.child1}>
        <Box className={styles.child2}>
          <Box className={styles.dropbox}>
            <Box className={styles.dropnumber}>2</Box>
          </Box>
          <Text className={styles.commentHeading}>Native Integration</Text>
        </Box>
        <p>
          Time tracker controles nativaly appears your project management tool
          make it easy to track time.
        </p>
      </Box>
      <Box className={styles.child1}>
        <Box className={styles.child2}>
          <Box className={styles.dropbox}>
            <Box className={styles.dropnumber}>3</Box>
          </Box>
          <Text className={styles.commentHeading}>Automatic update</Text>
        </Box>
        <Text>
          Everhour syncs changes automatically. That means your reports will
          always show the fresest data.
        </Text>
      </Box>
    </Box>
  );
};

export default BottomSection;
