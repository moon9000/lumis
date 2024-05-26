'use client'

import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { Button, Dialog, DialogContent, DialogTitle, Grid, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { HomeServices } from '../components/HomeServices'
import { HomeServicesCard } from '../components/HomeServicesCard'
import { bgColor } from '../constants/constants'
import { ArticleCard } from '../components/ArticleCard'

export default function Home({homepage, articles}) {
  const [isOpen, setIsOpen] = useState(false);
  return <Stack spacing={3} sx={{display: 'flex', flexDirection: 'column'}}>
    <div>
    <Typography variant='h4' sx={{fontWeight: 'bold', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>  
      圓你の法國留學夢<br />
      找留法學姊Cynthia
    </Typography>
    <Grid container columns={2} sx={{display: 'flex', justifyContent: 'space-between', paddingTop: '30px'}} direction={'row'}>
      <Grid xs={6} container direction='column' sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Stack spacing={3} direction='column' sx={{textAlign: 'center', marginBottom: 'auto'}}>
        <Typography sx={{fontWeight: 'bold'}}>
          你想到法國留學但不曉得如何開始?<br />
          你擔心隻身到法國留學會遇到問題?
        </Typography>
        <Stack  sx={{color: '#D896F6'}}>
          <Typography fontWeight='bold' fontSize={28}>Cynthiaの留法筆記</Typography>
          <Typography fontWeight='bold' fontSize={24}>一個月就完成法國留學那些事</Typography>
          <Typography fontWeight='bold' fontSize={20}>(課程籌備中)</Typography>
        </Stack>
        <Typography sx={{fontWeight: 'bold'}}>
        幫助你解決法國留學那些繁複程序<br />
        讓你可以無後顧之憂專注在學業上
        </Typography>
        <Button  sx={{border: "2px solid #D896F6", borderRadius: '20px', hover: {backgroundColor: 'red'}}} onClick={() => setIsOpen((prev) => !prev)}>
        <Typography sx={{color: 'black', fontWeight: 'bold'}}>
          領取你的<br />
          法國留學申請流程<br />
          懶人包
        </Typography>
        </Button>
        {isOpen && <Dialog open={isOpen} onClose={() => setIsOpen(false)} sx={{display: 'flex', justifyContent: 'center',  textAlign: 'center', alignItems: 'center', flexDirection: 'column'}}><DialogTitle></DialogTitle>TITLE<DialogContent>CONTENT</DialogContent></Dialog>}
      </Stack>
      </Grid>
      <Grid xs={6} container direction='column' sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Stack spacing={3} direction='column' sx={{textAlign: 'center'}}>
          <img src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${homepage.image.data.attributes.url}`} alt="" height='240' width='240'/>
          <Typography fontWeight={'bold'} fontSize={24} color={'#D896F6'}>
          留法5年學姊Cynthia
          </Typography>
          <Typography>
          成功從法國及臺灣<br />
          申請多間法國學校
          </Typography>
        </Stack>
      </Grid>
    </Grid>
    </div>
    <HomeServices />
    <Stack direction='row' sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} spacing={2}>
      <HomeServicesCard week={1} title={'確定你的法國留學計劃'} label1={'尋找方向'} label2={'分析校系'} label3={'學位評估'} label4={'自身優勢'} label5={'設定目標'}/>
      <HomeServicesCard week={2} title={'你的法國留學申請流程'} label1={'申請管道'} label2={'履歷設計'} label3={'撰寫動機'} label4={'面試準備'} label5={'辦理簽證'}/>
      <HomeServicesCard week={3} title={'法國留學相關機構報到'} label1={'留學預算'} label2={'機票選擇'} label3={'鎖定住宿'} label4={'備齊文件'} label5={'到校註冊'}/>
      <HomeServicesCard week={4} title={'法國留學必備辦理手續'} label1={'銀行開戶'} label2={'手機門號'} label3={'房屋補助'} label4={'交通票卡'} label5={'健康保險'}/>
    </Stack>

    <Typography>除了這些課程內容外，你還會得到以下這三大加碼 : </Typography>
    <Stack spacing={15} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} direction={'row'}>
      <HomeServicesCard week={'N'} backgroundColor={bgColor} weekColor={'white'} titleColor={'white'} rowColor='white' title={'法國留學生優惠'} label1={'美術展覽'} label2={'連鎖速食'} label3={'郵遞包裹'} />
      <HomeServicesCard week={'N+1'} backgroundColor={bgColor} weekColor={'white'} titleColor={'white'} rowColor='white' title={'迅速融入留法環境'} label1={'結交朋友'} label2={'校園活動'} label3={'休閒娛樂'} />
      <HomeServicesCard week={'∞'} backgroundColor={bgColor} weekColor={'white'} titleColor={'white'} rowColor='white' title={'Email諮詢服務'} title2={'(留法疑難雜症)'} label1={'課程討論'} label2={'語言需求'} />
    </Stack>
    <Typography>你應該要知道的法國留學那些事 : </Typography>
    <Grid container columns={3} sx={{display: 'flex', justifyContent: 'space-between'}} direction={'row'}>
      {articles?.map((article) => {
        return <Grid key={article.id} xs={3} container direction='column'><ArticleCard article={article} /></Grid>
      })}
    </Grid>
    {/*
    <Stack spacing={15} direction={'row'}>
      <VideoCard videoUrl={'https://www.youtube.com/embed/x8sq2l4Sp_8'} />
      <VideoCard videoUrl={'https://www.youtube.com/embed/SocemaRKpC0'} />
      <VideoCard videoUrl={'https://www.youtube.com/embed/nNNS6fJOD2c'} />
    </Stack>
    */}
    </Stack>
}

const HOME_QUERY = gql`
query HOME_QUERY {
  homepage {
    data { 
      attributes {
        image{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
  articles {
    data {
      id,
      attributes {
        title, 
        description,
        date,
        image{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}
`

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`,
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: HOME_QUERY
  });

  const pageData = data
  return {
    props: {
      toto: 'test',
      articles: pageData.articles.data,
      homepage: pageData.homepage.data.attributes
    }
  }
}
