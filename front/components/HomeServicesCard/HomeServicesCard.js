import { Box, Icon, Stack, Typography } from "@mui/material";
import { bgColor } from "../../constants/constants";
import { IconRow } from "../IconRow";

export function HomeServicesCard({week, backgroundColor = 'white', weekColor = 'black', rowColor = 'black', titleColor = bgColor, title, title2, label1, label2, label3, label4, label5}) {
return <Box sx={{display: 'flex', backgroundColor: backgroundColor, borderColor: bgColor, borderStyle: 'dotted', borderRadius: '20px', alignItems: 'center', justifyContent: 'center'}}>
        <Stack spacing={1}>
            <Typography sx={{color: weekColor, textAlign: 'center', fontSize: '18px'}}>
                第{week}週
            </Typography>
            <Typography sx={{fontWeight: 'bold', color: titleColor, textAlign: 'center', fontSize: '18px'}}>
               {title}
               {title2 && <br />}
               {title2 && title2}
            </Typography>
            <Box sx={{alignItems: 'center', justifyContent: 'center', textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
                <IconRow label={label1} color={rowColor} />
                <IconRow label={label2} color={rowColor}/>
                {label3 && <IconRow label={label3} color={rowColor}/>}
                {label4 && <IconRow label={label4} color={rowColor}/>}
                {label5 && <IconRow label={label5} color={rowColor}/>}   
                <Typography color={rowColor}>
                    ……等等。
                </Typography>
            </Box>
        </Stack>
    </Box>
}