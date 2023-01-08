import React from 'react';
import {
  Box, Flex, Input, Button, Text, Image, SimpleGrid,
} from '@chakra-ui/react';

import styles from './styles.module.css';

function Login() {
  return (
    <div className={styles.container}>
      <Flex
        maxW={{
          base: '100%',
          sm: '500px',
        }}
        className={styles.container}
      >
        <Box className={styles.card}>
          <Box className={styles.cardHeader}>
            <h4 className={styles.my0}>Talkstr Login</h4>
          </Box>
          <Image
            className={styles.loginImage}
            src="/Images/login.png"
            alt=""
          />
          <Box className={styles.cardBody}>
            <Box className={styles.formGroup}>
              <Text className={styles.colSm2}>
                Public Key
              </Text>
              <Box className={styles.colSm10}>
                <Input type="text" className={styles.formControl} id="inputUsername" />
              </Box>
            </Box>
            <Box className={styles.formGroup}>
              <Text className={styles.colSm2}>
                Private Key
              </Text>
              <Box className={styles.colSm10}>
                <Input type="password" className={styles.formControl} id="inputPassword" />
              </Box>
            </Box>

            <SimpleGrid
              columns={2}
              spacing={10}
            >
              <Box className={styles.colSm10}>
                <Box className={styles.formCheck}>
                  <Text className={styles.formCheckLabel}>
                    <Input className={styles.formCheckInput} type="checkbox" id="gridCheck1" />
                    Remember Me
                  </Text>
                </Box>
              </Box>

              <Box className={styles.signIn}>
                <Button type="submit" className={styles.btn}>Sign in</Button>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Login;
