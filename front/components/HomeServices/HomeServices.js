import { Box, Icon, Stack, Typography } from "@mui/material";
import { bgColor } from "../../constants/constants";
import { Check } from "@mui/icons-material";
import { HomeServicesCard } from "../HomeServicesCard";
import { IconRow } from "../IconRow";

export function HomeServices() {
return <Box sx={{display: 'flex',  borderRadius: '20px', alignItems: 'center', justifyContent: 'center', color: "white", backgroundColor: bgColor}}>
        <Stack spacing={3}>
            <Typography sx={{fontWeight: 'bold', textAlign: 'center', fontSize: '28px'}}>
                Cynthiaの留法筆記<br />
                一個月就完成法國留學那些事<br />
                (課程籌備中)<br />
            </Typography>
            <Box sx={{alignItems: 'center', justifyContent: 'center', textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
                <IconRow label={'留法相關資訊彙整'} color='white'/>
                <IconRow label={'解決留法疑難雜症'} color='white'/>
                <IconRow label={'節省自己摸索時間'} color='white'/>
            </Box>
        </Stack>
    </Box>
}