param(
    [String]$word = "fuck",
    [String]$filename = "default"
)
$voice = 'Microsoft David Desktop'
#$voice = 'Microsoft Zira Desktop'
"Ran with Argument: $word" >> "C:\Users\Alex\Documents\git\Discord Bot\cmds\misc\log.txt"
Add-Type -AssemblyName System.speech
$speak = New-Object System.Speech.Synthesis.SpeechSynthesizer
$speak.SelectVoice($voice)
$speak.SetOutputToWaveFile("C:\Users\Alex\Documents\git\Discord Bot\cmds\misc\audio\$filename.m4a")
$speak.Speak($word)
$speak.Dispose()