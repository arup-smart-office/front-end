class Home extends React.Component {
    static navigationOptions = {
      title: 'Arup Smart Office',
      drawerIcon: ({ focused }) => (
        <Ionicons name="md-home" size={24} color={focused ? 'blue' : 'black'} />
      ),
    };
  render() {
      return (
          <View style={styles.container}>
          <ThemeProvider>
            <TitleBar />
            <Maps />
          </ThemeProvider>
        </View>
      );
  }
  }