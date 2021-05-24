import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  Text,
} from 'react-native';

import Home from '../screens/Home';
import About from '../screens/About';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cont}>
          <Text style={styles.tit}>Maki Zen'in</Text>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://64.media.tumblr.com/7244cc5183bbb7e295964226b73b0699/53b236147bf8e402-2e/s540x810/8a3d93a3c1cfea3fdff4f87f41aa24be19443a8b.gifv',
            }}
          />
        </View>
        <Text style={styles.text}>
          {'         '}
          Maki Zenin (禪ぜん院いん真ま希き Maki Zen'in) is a major supporting
          character in Jujutsu Kaisen and one of the main protagonists of the
          Prequel Series. She is currently a second-year at Tokyo Metropolitan
          Curse Technical College. Originally from the Zenin family, Maki left
          on her own due to being rejected for her lack of cursed energy. She
          studies to become a strong sorcerer despite her own family working
          against her. Maki's jujutsu student uniform consists of the
          traditional long sleeve jacket with a skirt.{'\n'}
          {'         '}Maki's Grade 4 sorcerer ranking is not at all reflective
          of her actual ability in battle. Her promotion was stalled for years
          due to the Zenin family and she can easily exorcise a grade 2 curse.
          Her physical prowess is second only to Yuji's among the students and
          she is a master of a wide assortment of different weapons. Wielding
          cursed tools, Maki is an effective sorcerer despite her lack of cursed
          energy because she makes up for it with astonishing physical
          abilities.
        </Text>
        <View style={styles.cont}>
          <Text style={styles.tit}>Nobara Kugisaki</Text>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://64.media.tumblr.com/c612194cfdbe3327f26e9a25d514aaaf/520eafc025a014ab-32/s400x600/0fd34944ef8235f5ff5365fdc88e3bd40ca841b6.gifv',
            }}
          />
        </View>
        <Text style={styles.text}>
          {'         '}Nobara Kugisaki (釘くぎ崎さき野の薔ば薇ら Kugisaki
          Nobara?) is the tritagonist of Jujutsu Kaisen. She is a first-year at
          Tokyo Metropolitan Curse Technical College. Nobara Kugisaki is a brash
          and self confident woman with a strong belief in being "true" to
          herself, and has an unshakable character. She prides herself on her
          physical appearance, taking great offense to anyone insulting her and
          or attempting to hit her face.
          {'\n'}
          {'         '}Nobara Kugisaki is a Grade 3 sorcerer. But she has
          showcased above-average skill when it comes to being a jujutsu
          sorcerer. Her abilities were enough to be recognized by Aoi Todo and
          have him recommend her to be promoted to a Grade 1 sorcerer.
        </Text>
        <View style={styles.cont}>
          <Text style={styles.tit}>Mai Zen'in</Text>

          <Image
            style={styles.image}
            source={{
              uri:
                'https://64.media.tumblr.com/d6976818b498547499db8a36470e3fce/f5d387cd8b6cda5b-58/s400x600/ec54bae094bc70c599b0c3a27730820a3422c7ea.gifv',
            }}
          />
        </View>
        <Text style={styles.text}>
          {'                '}
          Mai Zenin (禪ぜん院いん真ま依い Zen'in Mai?) is a character in Jujutsu
          Kaisen. She is a second-year at Kyoto Metropolitan Curse Technical
          College. Mai has mid-length black hair that reaches to her neck. She
          has dark eyes and thin eyebrows as well. Her school uniform consists
          of the traditional long-sleeved jacked and a long skirt with dark
          shoes.{'\n'}
          {'         '}Mai is a grade 3 sorcerer and a good sniper with her
          pistol. Capable of infusing her bullets with cursed energy, with just
          one direct hit is enough to take down a fellow sorcerer or a curse.
          While keeps up the façade that she is more powerful than her sister,
          she does not possess the physical skills to contend with her.
          Additionally, her cursed technique is unrefined and can only be used
          once.
        </Text>
        <View style={styles.cont}>
          <Text style={styles.tit}>Kasumi Miwa</Text>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://pa1.narvii.com/7845/d23c64470726296d2a56db4d96c0bf04a6ba3ff7r1-540-304_00.gif',
            }}
          />
        </View>
        <Text style={styles.text}>
          {'                '}
          Kasumi Miwa (三み輪わ霞かすみ Miwa Kasumi?) is a character in Jujutsu
          Kaisen. She is a second-year at Kyoto Jujutsu High. Kasumi has long
          light blue colored hair that extends past her shoulders with the hair
          in front of her forehead is cut diagonally and some that are the side
          that is cut just above her chin. She also has dark colored triangle
          shape eyebrows.
          {'\n'}
          {'         '}Kasumi is a grade 3 sorcerer capable of using the New
          Shadow Style swordsmanship techniques. Her lack of an Innate Technique
          makes it difficult to stand up to some her fellow jujutsu students,
          and she was completely overpowered by Maki, someone with advanced
          levels of physical prowess.
        </Text>
        <View style={styles.cont}>
          <Text style={styles.tit}>Momo Nishimiya</Text>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://64.media.tumblr.com/78a00402c6ee632ccb084c6c8316c12c/ce1179fa0c8d9150-46/s400x600/2fbee21e06c1aeb5267dd070591b8b8dcea8cbc7.gifv',
            }}
          />
        </View>
        <Text style={styles.text}>
          {'                '}
          Momo Nishimiya (西にし宮みや桃もも Nishimiya Momo?) is a supporting
          character in Jujutsu Kaisen and third-year student Kyoto Metropolitan
          Curse Technical College. Momo is a petite girl with a very youthful
          appearance. She has blonde hair tied into two pig-tails and soft blue
          eyes. Both her ears are pierced with two earrings and she also sports
          a collar on her neck, befitting her witch-like appearance as she's
          always with her signature broom as well.
        </Text>
        <View style={styles.cont}>
          <Text style={styles.tit}>Utahime Iori</Text>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://64.media.tumblr.com/fed5a3143c829b26cec6e8b3fd3a5890/ae23197fbec46cf4-03/s400x600/55fa97933352f53f341cb8fbf9fa649b05bd5ff8.gifv',
            }}
          />
        </View>
        <Text style={styles.text}>
          {'                '}
          Utahime Iori (庵いおり歌うた姫ひめ Iori Utahime?) is a character in
          Jujutsu Kaisen. She is a Semi-Grade 1 sorcerer and a teacher at Kyoto
          Metropolitan Curse Technical College. Utahime has long blackish-purple
          hair that extends down her back, with some strands ties behind her
          head, thin eyebrows, brown eyes and a scar on the right side of her
          face that crosses the bridge of her nose.
          {'\n'}
          {'         '}It currently unknown what her cursed technique is but it
          is stated to involve singing.
        </Text>
        <View style={styles.cont}>
          <Text style={styles.tit}>Mei Mei</Text>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://media1.tenor.com/images/e79d6016f7a99d3329b3d0820ceba607/tenor.gif?itemid=20317719',
            }}
          />
        </View>
        <Text style={styles.text}>
          {'                '}
          Mei Mei (冥めい冥めい Mei Mei?) is a supporting character in the
          Jujutsu Kaisen series. She is a grade 1 jujutsu sorcerer who works
          independently and only in exchange for money. She is also the older
          sister of Ui Ui and was a senpai of Satoru Gojo and Suguru Geto during
          their time at Jujutsu High.{'\n'}
          {'         '}Mei Mei is a grade 1 sorcerer recognized by many for
          being a more than capable fighter. Satoru Gojo has stated in the past
          that he believes Mei Mei is strong, a comment that the strongest
          sorcerer doesn't hand out lightly. Satoru and the others at Jujutsu
          High felt Mei Mei so capable they thought it was strange a mission
          went longer than usual while she was on it and concluded something
          strange must have happened.
        </Text>
        <View style={styles.cont}>
          <Text style={styles.tit}>Shoko Ieri</Text>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://64.media.tumblr.com/f5c34e72b1c228271f059989f8d223e7/86f5d2e723cbd996-2a/s540x810/81e1507bb3e8a2b1b919c6f42e9cc240c158d124.gifv',
            }}
          />
        </View>
        <Text style={styles.text}>
          {'            '}
          Shoko Ieiri (家いえ入いり硝しょう子こ Ieiri Shōko?) is a character in
          Jujutsu Kaisen. She is a doctor at Tokyo Metropolitan Curse Technical
          College. Shoko has long brown hair that extends past her shoulders,
          brown eyebrows, tired eyes, and a mole under her right eye. Shoko has
          also been shown to tie her hair in a ponytail with a light colored
          scrunchie
          {'\n'}
          {'         '}Shoko is naturally capable of using reverse cursed
          technique in order to heal others.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingBottom: 20,
  },
  image: {
    width: 230,
    height: 170,
    alignSelf: 'center',
  },
  tit: {
    textAlign: 'center',
    fontSize: 20,
    color: '#008080',
    paddingTop: 10,
    fontWeight: 'bold',

  },
  text: {
    textAlign: 'justify',
    fontSize: 15,
    lineHeight: 25,
    color: 'white',
    paddingHorizontal: 25,
  },
  cont: {
    padding: 10,
    
  },
});
