# Get all files in the current directory (excluding directories)
# PowerShell script to rename files by replacing a string in the filename
# Define the string to find and the string to replace it with

$search = "as_emirates_"
$replace = ""

Write-Host "Starting file rename process..." -ForegroundColor Cyan
Write-Host "Searching for files in: $(Get-Location)"
Write-Host "Looking for '$search' in file names and replacing with '$replace'"
Write-Host ""

# Get all files in the current directory (excluding directories)
$files = Get-ChildItem -File

if ($files.Count -eq 0) {
    Write-Host "No files found in the current directory." -ForegroundColor Yellow
} else {
    foreach ($file in $files) {
        $oldName = $file.Name
        if ($oldName -like "*$search*") {
            $newName = $oldName -replace [Regex]::Escape($search), $replace
            Write-Host "Match found: $oldName" -ForegroundColor Green
            Write-Host "Renaming to: $newName"

            try {
                Rename-Item -Path $file.FullName -NewName $newName
                Write-Host "Success: Renamed '$oldName' to '$newName'" -ForegroundColor Cyan
            } catch {
                Write-Host "Error: Failed to rename '$oldName' - $_" -ForegroundColor Red
            }
        } else {
            Write-Host "No match in: $oldName" -ForegroundColor DarkGray
        }
    }
}

Write-Host ""
Write-Host "File rename process complete." -ForegroundColor Cyan

