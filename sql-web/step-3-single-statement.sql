UPDATE videos SET
  stream_url = CASE title
    WHEN 'The Odyssey - 2.39:1 Immersive 3D Trailer' THEN 'https://files.ani3d.in/0:/classic/web/The%20Odyssey%20-%202.39%20Classic%203D%20Trailer.mp4?inline=true'
    WHEN 'The Odyssey - 1.43:1 Immersive 3D Trailer' THEN 'https://files.ani3d.in/0:/classic/web/The%20Odyssey%20-%201.43%20Classic%203D%20Trailer.mp4?inline=true'
    WHEN 'Spider-Man: Brand New Day - Immersive 3D Trailer' THEN 'https://files.ani3d.in/0:/classic/web/Spiderman%20Brand%20New%20Day%20-%20Classic%203D%20Trailer.mp4?inline=true'
    WHEN 'Alpha - Immersive 3D Trailer' THEN 'https://files.ani3d.in/0:/classic/web/Alpha%20-%20Classic%203D%20Teaser.mp4?inline=true'
    WHEN 'Haunted 3D Echoes Of The Past - Classic 3D Teaser' THEN 'https://files.ani3d.in/0:/classic/web/Haunted%203D%20Echoes%20Of%20The%20Past%20-%20Classic%203D%20Teaser.mp4?inline=true'
    WHEN 'Raja Shivaji - Immersive Marathi 3D Trailer' THEN 'https://files.ani3d.in/0:/classic/web/Raja%20Shivaji%20-%20Classic%203D%20Marathi%20Trailer.mp4?inline=true'
    WHEN 'Dhurandhar The Revenge Raw And Undekha Aari Aari - Immersive 3D Full Sequence' THEN 'https://files.ani3d.in/0:/classic/web/Dhurandhar%20The%20Revenge%20Raw%20and%20Undekha%20Aari%20Aari%20-%20Classic%203D%20Full%20Sequence.mp4?inline=true'
    WHEN 'The beautiful view of Dhom Lake, Mahabaleshwar in TRUE 3D' THEN 'https://files.ani3d.in/0:/classic/web/The%20beautiful%20view%20of%20Dhom%20Lake%2C%20Mahabaleshwar%20in%20TRUE%203D.mp4?inline=true'
    WHEN 'Dhurandhar: The Revenge Official Hindi - Out Of The Frame 3D Trailer' THEN 'https://files.ani3d.in/0:/outframe/web/Dhurandhar%20The%20Revenge%20Hindi%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4?inline=true'
    WHEN 'Toxic: Introducing Raya - Out Of The Frame 3D Trailer' THEN 'https://files.ani3d.in/0:/outframe/web/Toxic%20Introducing%20Raya%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4?inline=true'
    WHEN 'Spider-Man: Brand New Day - Out Of The Frame 3D Trailer' THEN 'https://files.ani3d.in/0:/outframe/web/Spider-Man%20Brand%20New%20Day%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4?inline=true'
    WHEN 'Ramayana: Rama - Out Of The Frame 3D Trailer' THEN 'https://files.ani3d.in/0:/outframe/web/Ramayana%20Rama%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4?inline=true'
    WHEN 'The Amazing Spider-Man | Out of the Frame 3D Final Swing' THEN 'https://files.ani3d.in/0:/outframe/web/The%20Amazing%20Spider-Man%20%20Out%20of%20the%20Frame%203D%20Final%20Swing.mp4?inline=true'
    WHEN 'Varanasi To The World - Out Of The Frame 3D Trailer' THEN 'https://files.ani3d.in/0:/outframe/web/Varanasi%20To%20The%20World%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4?inline=true'
    ELSE stream_url
  END,
  download_url = CASE title
    WHEN 'The Odyssey - 2.39:1 Immersive 3D Trailer' THEN 'https://files.ani3d.in/0:/classic/master/The%20Odyssey%20-%202.39%20Classic%203D%20Trailer.mp4'
    WHEN 'The Odyssey - 1.43:1 Immersive 3D Trailer' THEN 'https://files.ani3d.in/0:/classic/master/The%20Odyssey%20-%201.43%20Classic%203D%20Trailer.mov'
    WHEN 'Spider-Man: Brand New Day - Immersive 3D Trailer' THEN 'https://files.ani3d.in/0:/classic/master/Spiderman%20Brand%20New%20Day%20-%20Classic%203D%20Trailer.mov'
    WHEN 'Alpha - Immersive 3D Trailer' THEN 'https://files.ani3d.in/0:/classic/master/Alpha%20-%20Classic%203D%20Teaser.mov'
    WHEN 'Haunted 3D Echoes Of The Past - Classic 3D Teaser' THEN 'https://files.ani3d.in/0:/classic/master/Haunted%203D%20Echoes%20Of%20The%20Past%20-%20Classic%203D%20Teaser.mov'
    WHEN 'Raja Shivaji - Immersive Marathi 3D Trailer' THEN 'https://files.ani3d.in/0:/classic/master/Raja%20Shivaji%20-%20Classic%203D%20Marathi%20Trailer.mov'
    WHEN 'Dhurandhar The Revenge Raw And Undekha Aari Aari - Immersive 3D Full Sequence' THEN 'https://files.ani3d.in/0:/classic/master/Dhurandhar%20The%20Revenge%20Raw%20and%20Undekha%20Aari%20Aari%20-%20Classic%203D%20Full%20Sequence.mov'
    WHEN 'The beautiful view of Dhom Lake, Mahabaleshwar in TRUE 3D' THEN 'https://files.ani3d.in/0:/classic/web/The%20beautiful%20view%20of%20Dhom%20Lake%2C%20Mahabaleshwar%20in%20TRUE%203D.mp4'
    WHEN 'Dhurandhar: The Revenge Official Hindi - Out Of The Frame 3D Trailer' THEN 'https://files.ani3d.in/0:/outframe/web/Dhurandhar%20The%20Revenge%20Hindi%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4'
    WHEN 'Toxic: Introducing Raya - Out Of The Frame 3D Trailer' THEN 'https://files.ani3d.in/0:/outframe/web/Toxic%20Introducing%20Raya%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4'
    WHEN 'Spider-Man: Brand New Day - Out Of The Frame 3D Trailer' THEN 'https://files.ani3d.in/0:/outframe/web/Spider-Man%20Brand%20New%20Day%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4'
    WHEN 'Ramayana: Rama - Out Of The Frame 3D Trailer' THEN 'https://files.ani3d.in/0:/outframe/web/Ramayana%20Rama%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4'
    WHEN 'The Amazing Spider-Man | Out of the Frame 3D Final Swing' THEN 'https://files.ani3d.in/0:/outframe/web/The%20Amazing%20Spider-Man%20%20Out%20of%20the%20Frame%203D%20Final%20Swing.mp4'
    WHEN 'Varanasi To The World - Out Of The Frame 3D Trailer' THEN 'https://files.ani3d.in/0:/outframe/web/Varanasi%20To%20The%20World%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4'
    ELSE download_url
  END
WHERE title IN (
  'The Odyssey - 2.39:1 Immersive 3D Trailer',
  'The Odyssey - 1.43:1 Immersive 3D Trailer',
  'Spider-Man: Brand New Day - Immersive 3D Trailer',
  'Alpha - Immersive 3D Trailer',
  'Haunted 3D Echoes Of The Past - Classic 3D Teaser',
  'Raja Shivaji - Immersive Marathi 3D Trailer',
  'Dhurandhar The Revenge Raw And Undekha Aari Aari - Immersive 3D Full Sequence',
  'The beautiful view of Dhom Lake, Mahabaleshwar in TRUE 3D',
  'Dhurandhar: The Revenge Official Hindi - Out Of The Frame 3D Trailer',
  'Toxic: Introducing Raya - Out Of The Frame 3D Trailer',
  'Spider-Man: Brand New Day - Out Of The Frame 3D Trailer',
  'Ramayana: Rama - Out Of The Frame 3D Trailer',
  'The Amazing Spider-Man | Out of the Frame 3D Final Swing',
  'Varanasi To The World - Out Of The Frame 3D Trailer'
);
