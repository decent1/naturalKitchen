import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback} from 'react';
import StatusBar from '../../components/StatusBar'
import ButtonSmall from '../../components/Button/ButtonSmall';
import {Colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';
import {Margin} from '../../utils/margin';
import RangeSlider from 'rn-range-slider';
import Thumb from '../../components/Thumb';
import Rail from '../../components/Rails';
import RailSelected from '../../components/RailSelected';
import Notch from '../../components/Notch';
import Label from '../../components/Label';
import TopBar from '../../components/TopBar/TopBarBackHelp';
import { commonStyles } from '../../utils/commonStyles';
import AuthHeading from '../../components/AuthHeading';

const Age = props => {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [floatingLabel, setFloatingLabel] = useState(false);
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} type={'YO'} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  
  return (
    <View style={commonStyles.container}>
      <StatusBar
        backgroundColor={Colors.statusBarBackgroundColor_White}
        barStyle={commonStyles.statusBarStyleDark}
      />
      <TopBar onBackPress={() => {}} onHelpPress={() => {}} />

      <AuthHeading title={'HOW OLD ARE YOU?'} />

      <RangeSlider
        style={styles.rangeSlider}
        min={0}
        max={100}
        step={1}
        allowLabelOverflow={true}
        floatingLabel={true}
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
        disableRange={true}
      
      />

      <ButtonSmall
        onPress={() => props.navigation.navigate('TargetWeight')}
        title={'Next'}
        style={commonStyles.bottomButton}
      />
    </View>
  );
};

export default Age;

const styles = StyleSheet.create({
  title: {
    marginTop: Margin.headingTop,
    marginLeft: Margin.headingLeft,
    fontFamily: Fonts.regular,
    fontWeight: 'bold',
    fontSize: Margin.headingFont,
    color: Margin.headingColor,
  },
  rangeSlider: {
    marginTop: Margin.SliderTop,
    marginHorizontal: Margin.sliderHorizontal,
  },
 
});
