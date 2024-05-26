import { Box, Icon, Stack, Typography } from "@mui/material";
import { Check } from "@mui/icons-material";

export function IconRow({label, color = 'black'}){
    return <Stack direction='row' color={color}>
        <Check />
        <Typography>{label}</Typography>
    </Stack>
}