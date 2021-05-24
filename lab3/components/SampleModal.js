import React from 'react';
import {
  Text,
  View,
  Button,
  Modal,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

const SampleModal = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.all}>
        <View style={styles.cont}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://64.media.tumblr.com/7244cc5183bbb7e295964226b73b0699/53b236147bf8e402-2e/s540x810/8a3d93a3c1cfea3fdff4f87f41aa24be19443a8b.gifv',
            }}
          />
        </View>
        <ScrollView>
          <Text style={styles.text}>
            {'                '}
            Maki Zenin (禪ぜん院いん真ま希き Zen'in Maki) is a major supporting
            character in Jujutsu Kaisen and one of the main protagonists of the
            Prequel Series. She is currently a second-year at Tokyo Metropolitan
            Curse Technical College. Originally from the Zenin family, Maki left
            on her own due to being rejected for her lack of cursed energy. She
            studies to become a strong sorcerer despite her own family working
            against her.
            {'\n'}
            {'         '}Maki's jujutsu student uniform consists of the
            traditional long sleeve jacket with a skirt. As a first year, she
            wore long socks with shoes with her uniform, but she currently wears
            black leggings.{'\n'}
            {'         '}Maki is a very headstrong and straightforward person
            who tends to be quite blunt. She is strong willed and motivates
            herself to escape the ties of her sorcerer family. For her entire
            life, she has been mistreated and put down for being a woman and a
            non-sorcerer by the Zenins.{'\n'}
            {'         '}Despite feeling cursed by her own family, Maki strives
            to become a sorcerer and prove everyone wrong, breaking the
            foundation of their way of life that she so rejects. Maki and Mai
            were originally going to stay together with the Zenin family but the
            older twin decided she couldn't live that way. {'\n'}
            {'         '}Rejected by her own family, Maki's bonds lie within her
            classmates whom she normally takes the leadership role with. She's
            very tough on them in training, very impatient and often
            hot-tempered. She only wishes to see them get snronger as they fight
            beside her and has taught many of her peers how to properly wield a
            variety of weapons, even if they had to get beaten up by her a lot
            to reach th point.Able to wield a wide assortment of different
            weapons, Maki is considered to be an expert in all sorts of
            weaponry. She normally uses spears in battle but is fully capable of
            switching between multiple weapons in the course of a single fight.
            During the Goodwill Event, Maki broke the handle of her own spear,
            then took Kasumi's sword, and once that broke, she utilized a three
            section staff to fight. She is also fully capable of incorporating
            martial arts such as aikido into close range combat.
          </Text>
        </ScrollView>
        <Button title="CLOSE" color="red" onPress={props.onClose} />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  cont: {
    justifyContent: 'center',
    padding: 10,
    // backgroundColor: 'green',
  },

  text: {
    flex: 1,
    textAlign: 'justify',
    fontSize: 15,
    lineHeight: 25,
    color: 'white',
    padding: 10,

  },
  image: {
    width: 200,
    height: 150,
  },
});

export default SampleModal;

