$p = New-Object System.IO.Ports.SerialPort 'COM6',9600
$p.DtrEnable = $true
$p.Open()
Start-Sleep -Seconds 5
if ($p.BytesToRead -gt 0) {
    $data = $p.ReadExisting()
    Write-Output $data
} else {
    Write-Output "Waiting for data..."
    Start-Sleep -Seconds 5
    if ($p.BytesToRead -gt 0) {
        $data = $p.ReadExisting()
        Write-Output $data
    } else {
        Write-Output "Still no data - trying ReadLine"
        $p.ReadTimeout = 3000
        try {
            $line = $p.ReadLine()
            Write-Output $line
        } catch {
            Write-Output "Timeout - no data received"
        }
    }
}
$p.Close()
