

param([String]$word = "fuck")
$voice = 'Microsoft David Desktop'
#$voice = 'Microsoft Zira Desktop'
"Ran with Argument: $word" >> "C:\Users\Alex\Documents\git\Discord Bot\cmds\misc\log.txt"
Add-Type -AssemblyName System.speech
$speak = New-Object System.Speech.Synthesis.SpeechSynthesizer
$speak.SelectVoice($voice)
$speak.SetOutputToWaveFile("C:\Users\Alex\Documents\git\Discord Bot\cmds\misc\words\current.m4a")
$speak.Speak($word)
$speak.Dispose()