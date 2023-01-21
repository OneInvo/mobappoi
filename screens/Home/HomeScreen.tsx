import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItem,
  Pressable,
  Image,
  Modal,
  Button,
  Platform,
} from "react-native";
import ScreenView from "../../components/ScreenView";
import ImageViewer from "react-native-image-zoom-viewer";
import { vh } from "../../constants/Layout";
import TABS_DATA from "../../data/tabs.json";

interface IHomeScreenProps {}

const HomeScreen: React.FC<IHomeScreenProps> = (props) => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const [imageUrls, setImageUrls] = React.useState([
    {
      url: "",
      props: {
        source: require("../../assets/sample.png"),
      },
    },
    {
      url: "",
      props: {
        source: require("../../assets/sample.png"),
      },
    },
  ]);

  const RenderItem: ListRenderItem<{ id: number; value: string }> = ({
    item,
  }) => {
    return (
      <Pressable
        onPress={() => setSelectedTab(item.id)}
        style={[styles.tab, selectedTab === item.id && styles.activeTab]}
      >
        <Text style={styles.tabText}>{item.value}</Text>
      </Pressable>
    );
  };

  return (
    <ScreenView scroll>
      <Text style={styles.title}>Hello, user123</Text>
      <FlatList
        extraData={selectedTab}
        data={TABS_DATA}
        horizontal
        renderItem={RenderItem}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        contentContainerStyle={{ maxHeight: 80 }}
        style={{ maxHeight: 60 }}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.headText}>Your Receipts</Text>
      <FlatList
        data={TABS_DATA}
        horizontal
        renderItem={() => (
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/sample.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        style={{ maxHeight: 0.4 * vh }}
        showsHorizontalScrollIndicator={false}
      />
      <View style={{ marginTop: 15 }}>
        <Button
          title="View All Receipts"
          color="black"
          onPress={() => setVisible(true)}
        />
      </View>
      <Text style={styles.headText}>Insights</Text>
      <View style={styles.insightCircle}>
        <Text style={styles.money}>$53.62</Text>
        <Text>spent so far</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Modal
          visible={visible}
          transparent={false}
          onRequestClose={() => setVisible(false)}
        >
          <Pressable
            style={styles.closeButton}
            onPress={() => setVisible(false)}
          >
            <Text style={styles.closeText}>Close</Text>
          </Pressable>
          <ImageViewer imageUrls={imageUrls} />
        </Modal>
      </View>
    </ScreenView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "400",
    marginVertical: 25,
  },

  tab: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    height: 35,
  },
  activeTab: {
    backgroundColor: "#ebec27",
    borderColor: "yellow",
  },
  tabText: {
    fontWeight: "800",
  },

  headText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },

  imageContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  image: {
    width: 120,
    height: 0.4 * vh,
  },

  insightCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "goldenrod",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  money: {
    fontSize: 24,
    fontWeight: "bold",
  },

  closeButton: {
    position: "absolute",
    right: 10,
    top: 60,
    zIndex: 1,
    backgroundColor: "darkred",
    padding: 5,
    borderRadius: 5,
  },
  closeText: {
    color: "white",
  },
});
