import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export function useEmail() {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const authRaw = await AsyncStorage.getItem('auth');
      if (authRaw) {
        const auth = JSON.parse(authRaw);
        if (auth.email) {
          setEmail(auth.email);
        }
      }

      setIsLoading(false);
    })();
  }, []);

  return {isLoading, email};
}