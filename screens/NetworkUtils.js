import NetInfo from "@react-native-community/netinfo";
export default class NetworkUtils {
  static isNetworkAvailable() {
    const response = NetInfo.fetch();
    return response.isConnected;
}}